const { sql } = require('..');

module.exports = {
  async getUserData(userID) {
    const userData = await sql`
      SELECT
      u."Name",
      (SELECT array_agg(days)
      FROM (
        SELECT ad."Day"
        FROM "AvailableDays" ad
        WHERE ad."UserID" = u."UserID") AS T(days)
      ) AS "Days"
      FROM "Users" u
      WHERE "UserID" = ${userID}
    `;
    return userData[0];
  },
  async getAllExercises() {
    const workouts = await sql`
      SELECT
      *
      FROM "Exercises"
      ORDER BY "ExerciseID" ASC
    `;
    return workouts;
  },
  async getFavoritedExercises(/* INFO */) {
    // TODO
  },
  async toggleFavoritedExercise(/* INFO */) {
    // TODO
  },
  async getAllWorkouts() {
    // TODO
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
