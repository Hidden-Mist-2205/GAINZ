const { sql } = require('..');

module.exports = {
  async addNewUser(usr) {
    await sql`
    insert into users
      (user_id, user_name, email, zip_code, phone_num, fitness_goal, zoom_profile)
    values
      (${usr.userId}, ${usr.username}, ${usr.email}, ${usr.zip}, ${usr.phoneNumber}, ${usr.goal}, ${usr.zoom})
    returning user_id
  `;
  },
  async getUserData(userID) {
    const userData = await sql`
      SELECT
      u.user_name,
      (SELECT array_agg(days)
      FROM (
        SELECT ad.day
        FROM available_days ad
        WHERE ad.user_id = u.user_id) AS T(days)
      ) AS days
      FROM users u
      WHERE user_id = ${userID}
    `;
    // sql.end();
    return userData[0];
  },
  async getAllExercises() {
    const workouts = await sql`
      SELECT
      *
      FROM exercises
      ORDER BY exercise_id ASC
    `;
    // sql.end();
    return workouts;
  },
  async getWorkout(workoutId, userId) {
    const workout = await sql`
    SELECT
    w.workout_id AS id,
    w."name",
    w.description,
    w.created_by,
    w.main_area,
    w.secondary_area,
    (SELECT
      uw.times_completed
      FROM user_workout uw
      WHERE uw.workout_id = w.workout_id
      AND uw.user_id = ${userId}),
    (SELECT
      uw.last_completion
      FROM user_workout uw
      WHERE uw.workout_id = w.workout_id
      AND uw.user_id = ${userId}),
    (SELECT
      uw.is_favorited
      FROM user_workout uw
      WHERE uw.workout_id = w.workout_id
      AND uw.user_id = ${userId}),
    (SELECT json_agg(steps)
      FROM (
        SELECT
        s.step_id AS id,
        s.step_num,
        s.reps,
        s.unit,
        s.weight,
        s.distance,
        s.duration,
        (SELECT
          e."name"
          FROM exercises e
          WHERE e.exercise_id = s.exercise_id),
        (SELECT
          e.gif_url
          FROM exercises e
          WHERE e.exercise_id = s.exercise_id)
        FROM steps s
        WHERE s.workout_id = w.workout_id
        ) AS steps
      ) AS steps
    FROM workouts w
    WHERE w.workout_id = ${workoutId}
    `;
    // sql.end();
    return workout[0];
  },
  async getAllWorkouts(userId) {
    const workouts = await sql`
      SELECT
      w.workout_id as id,
      w."name",
      w.description,
      w.created_by,
      w.main_area,
      w.secondary_area,
      (SELECT
        uw.times_completed
        FROM user_workout uw
        WHERE uw.workout_id = w.workout_id
        AND uw.user_id = ${userId}),
      (SELECT
        uw.last_completion
        FROM user_workout uw
        WHERE uw.workout_id = w.workout_id
        AND uw.user_id = ${userId}),
      (SELECT
        uw.is_favorited
        FROM user_workout uw
        WHERE uw.workout_id = w.workout_id
        AND uw.user_id = ${userId}),
      (SELECT json_agg(steps)
        FROM (
          SELECT
          s.step_id AS id,
          s.step_num,
          s.reps,
          s.unit,
          s.weight,
          s.distance,
          s.duration,
          (SELECT
            e."name"
            FROM exercises e
            WHERE e.exercise_id = s.exercise_id),
          (SELECT
            e.gif_url
            FROM exercises e
            WHERE e.exercise_id = s.exercise_id)
          FROM steps s
          WHERE s.workout_id = w.workout_id
          ) AS steps
        ) AS steps
      FROM workouts w
    `;
    // sql.end();
    return workouts;
  },
  async addNewWorkout(info) {
    const insertWorkout = await sql`
    INSERT INTO workouts (
      "name",
      description,
      video_url,
      created_by,
      main_area,
      secondary_area
    ) VALUES (
      ${info.name},
      ${info.description},
      ${info.videoUrl},
      ${info.userId},
      ${info.mainArea},
      ${info.secondArea}
    ) RETURNING workout_id`;
    return insertWorkout;
  },
  async addUserWorkout(info, workoutId) {
    const insertUserWorkout = await sql`
    INSERT INTO user_workout (
      user_id,
      workout_id,
      times_completed,
      is_favorited
    ) VALUES (
      ${info.userId},
      ${workoutId},
      0,
      true
    )`;
  },
  async addSteps(info, workoutId, index) {
    const insertSteps = await sql`
    INSERT INTO steps (
      step_num,
      workout_id,
      exercise_id,
      reps,
      "sets"
    ) VALUES (
      ${index},
      ${workoutId},
      ${info.exerciseId},
      ${info.reps},
      ${info.sets}
    )
    `;
  },
  async deleteWorkout(info) {
    const workout = await sql`
    DELETE FROM workouts WHERE workout_id = ${info.workoutId}
    `;
    const steps = await sql`
    DELETE FROM steps WHERE workout_id = ${info.workoutId}
    `;
    const userWorkout = await sql`
    DELETE FROM user_workout WHERE workout_id = ${info.workoutId} AND user_Id = ${info.userId}
    `;
  },
  async getFavoritedWorkouts(info) {
    const favoritedWorkout = await sql`
    SELECT
    w.workout_id AS workoutId,
    w."name",
    description,
    created_by,
    main_area,
    (SELECT json_agg(step)
    FROM (
      SELECT
      s.step_num,
      s.reps,
      s.unit,
      s.weight,
      (SELECT
        e."name"
      FROM exercises e
      WHERE e.exercise_id = s.exercise_id),
      (SELECT
        e.gif_url
      FROM exercises e
      WHERE e.exercise_id = s.exercise_id)
      FROM steps s
      ) AS step
    ) AS Steps
  FROM
  workouts w
  LEFT JOIN
  user_workout uw
  ON w.workout_id = uw.workout_id
  WHERE uw.is_favorited = true AND uw.user_id = ${info.userId}
  `;
    return favoritedWorkout;
  },
  async getFavoritedExercise(info) {
    const favoritedExercise = await sql`

    `;
  },
  async toggleFavoritedWorkout(info) {
    const toggleFav = await sql`
    INSERT INTO user_workout (
      user_id,
      workout_id,
      times_completed,
      is_favorited
    ) VALUES (
      ${info.userId},
      ${info.workoutId},
      0,
      true
    ) ON CONFLICT (user_id, workout_id) DO UPDATE
    SET is_favorited = ${info.toggle}
    `;
  },
  async toggleFavoritedExercise(info) {
    const toggleFav = await sql`
    INSERT INTO users_exercises (
      user_id,
      exercise_id,
      is_favorited
    ) VALUES (
      ${info.userId},
      ${info.exerciseId},
      true
    ) ON CONFLICT (user_id, exercise_id) DO UPDATE
    SET is_favorited = ${info.toggle}
    `;
  },
  async getCompletedWorkouts(userID) {
    const completedWorkouts = await sql`
      SELECT json_agg(json_build_object(
        'user_id', uw.user_id,
        'workout_id', uw.workout_id,
        'favorited', uw.is_favorited,
        'times_completed', uw.times_completed,
        'last_completed', uw.last_completion,
        'workout_name', (SELECT name FROM workouts WHERE workouts.workout_id = uw.workout_id),
        'exercises', (
          SELECT json_agg(json_build_object(
            'name', (SELECT name FROM exercises e WHERE e.exercise_id = s.exercise_id),
            'exercise_id', s.exercise_id,
            'reps', s.reps,
            'sets', s.sets
          ))
          FROM steps s
          WHERE s.workout_id = uw.workout_id)
      ))
      FROM user_workout uw
      WHERE uw.user_id = ${userID} AND times_completed > 0;
    `;
    return completedWorkouts[0].json_agg;
  },
  async updateWorkoutCompletion(/* INFO */) {
    // TODO
  },
  async getAvailableBuddies(userID, requestedDay, userZipcode) {
    // TODO
    if (userZipcode) {
      const buddies = await sql`
        SELECT
        ad.user_id,
        u.user_name,
        u.avatar_url,
        u.zip_code,
        u.fitness_goal
        FROM available_days ad
        INNER JOIN users u
        ON ad.user_id = u.user_id
        WHERE ad.day = ${requestedDay}
        AND u.zip_code = ${userZipcode}
        AND NOT ad.user_id = ${userID}
      `;
      return buddies;
    }
    const buddies = await sql`
      SELECT
      ad.user_id,
      u.user_name,
      u.avatar_url,
      u.zip_code,
      u.fitness_goal
      FROM available_days ad
      INNER JOIN users u
      ON ad.user_id = u.user_id
      WHERE ad.day = ${requestedDay}
      AND NOT ad.user_id = ${userID}
    `;
    return buddies;
  },
  async getAvailableDays(userID) {
    // TODO
    const availableDays = await sql`
    SELECT array_agg(days)
    FROM (
      SELECT ad.day
      FROM available_days ad
      WHERE ad.user_id = ${userID}) AS T(days)
    `;
    return availableDays[0].array_agg;
  },
  async addAvailableDays(userID, days) {
    // TODO
    // Can probably check if it is an update for an existing user
    await sql`
      DELETE
      FROM available_days ad
      WHERE ad.user_id = ${userID}
    `;
    for (let i = 0; i < days.length; i++) {
      await sql`
        INSERT INTO available_days(user_id, day)
        VALUES(${userID}, ${days[i]})
      `;
    }
    return 'Days Added';
  },
  // Stretch?
  async addNewExercise(/* INFO */) {
    // TODO
  },
};
