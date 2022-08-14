const { sql } = require("..");

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
        WHERE ad."UserID" = "UserID"
    `.values();
    const extractedDays = days.map((item) => item[0]);
    userData[0].daysAvailable = extractedDays;
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
