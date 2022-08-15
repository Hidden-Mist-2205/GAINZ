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
    sql.end();
    return userData[0];
  },
  async getAllExercises() {
    const workouts = await sql`
      SELECT
      *
      FROM exercises
      ORDER BY exercise_id ASC
    `;
    sql.end();
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
    sql.end();
    return workout[0];
  },
  async getAllWorkouts() {
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
    sql.end();
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
    // TODO
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
