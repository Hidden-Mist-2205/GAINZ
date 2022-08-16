const { sql } = require('..');

module.exports = {
  async addNewUser(/* INFO */) {
    // TODO
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
  async getFavoritedExercises(/* INFO */) {
    // TODO
  },
  async toggleFavoritedExercise(/* INFO */) {
    // TODO
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
  async addNewWorkout(/* INFO */) {
    // TODO
  },
  async deleteWorkout(/* INFO */) {
    // TODO
    // Make sure workout to delete was created by logged-in user
  },
  async getFavoritedWorkouts(/* INFO */) {
    // TODO
  },
  async toggleFavoritedWorkout(/* INFO */) {
    //
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
