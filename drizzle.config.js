/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mockinterview_owner:6dkBYJVMLmD2@ep-misty-heart-a57cvzsz.us-east-2.aws.neon.tech/mockinterview?sslmode=require',
    }
  };