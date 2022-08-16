const { sql } = require('..');

module.exports = {
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
    return userData[0];
  },
  async getAllExercises() {
    const workouts = await sql`
      SELECT
      *
      FROM exercises
      ORDER BY exercise_id ASC
    `;
    return workouts;
  },
  async getFavoritedExercises(/* INFO */) {
    // TODO
  },
  async toggleFavoritedExercise(/* INFO */) {
    // TODO
  },
  async getWorkout(workoutId) {
    const workout = await sql`
      SELECT
      w.workout_id,
      w."name",
      w.description,
      w.created_by,
      w.main_area,
      (SELECT json_agg(steps)
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
          WHERE s.workout_id = w.workout_id
          ) AS steps
        ) AS steps
      FROM workouts w
      WHERE w.workout_id = ${workoutId}
    `;
    return workout[0];
  },
  async getAllWorkouts() {
    // TODO
    const workouts = await sql`
      SELECT
      w.workout_id,
      w."name",
      w.description,
      w.created_by,
      w.main_area,
      (SELECT json_agg(steps)
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
          WHERE s.workout_id = w.workout_id
          ) AS steps
        ) AS steps
      FROM workouts w
    `;
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
    `;
  },
  async updateWorkoutCompletion(/* INFO */) {
    // TODO
  },
  async getAvailableBuddies(/* INFO */) {
    // TODO
  },
  async getAvailableDays(/* INFO */) {
    // TODO
  },
  async addAvailableDays(/* INFO */) {
    // TODO
    // Can probably check if it is an update for an existing user
  },
  // Stretch?
  async addNewExercise(/* INFO */) {
    // TODO
  },
};
