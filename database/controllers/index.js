const { sql } = require('..');

module.exports = {
  async getUserData(userID) {
    const userData = await sql`
      SELECT
      *
      FROM "Users" u
      WHERE "UserID" = ${userID}
    `;
    const days = await sql`
      SELECT
      "Day"
      FROM "AvailableDays" ad
      WHERE ad."UserID" = ${userID}
    `.values();
    const extractedDays = days.map((item) => item[0]);
    userData[0].daysAvailable = extractedDays;
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
    // Make sure workout to delete is created by logged-in user
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
  async addAvailableDays(/* INFO */) {
    // TODO
    // Can probanly check if it is an update for an existing user
  },
  // Stretch?
  async addNewExercise(/* INFO */) {
    // TODO
  },
};
