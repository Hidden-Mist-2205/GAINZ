const { sql } = require("..");

module.exports = {
  async getUserData(userID) {
    const userData = await sql`
        SELECT
        *
        FROM "Users"
        WHERE "UserID" = ${userID}
      `;
    return userData[0];
  },
  async getExercises() {
    const workouts = await sql`
      SELECT
      *
      FROM "Exercises"
      ORDER BY "ExerciseID" ASC
    `;
    return workouts;
  },
};
