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
};
