CREATE TABLE "users"(
    "user_id" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "zip_code" TEXT NULL,
    "phone_num" TEXT NULL,
    "avatar_url" TEXT NULL,
    "fitness_goal" TEXT NULL
);
CREATE INDEX "users_user_id_index" ON
    "users"("user_id");
ALTER TABLE
    "users" ADD PRIMARY KEY("user_id");
CREATE TABLE "workouts"(
    "workout_id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video_url" TEXT NULL,
    "created_by" INTEGER NOT NULL,
    "main_area" TEXT NOT NULL,
    "secondary_area" TEXT NULL
);
CREATE INDEX "workouts_main_area_index" ON
    "workouts"("main_area");
CREATE INDEX "workouts_workout_id_index" ON
    "workouts"("workout_id");
CREATE TABLE "exercises"(
    "exercise_id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "gif_url" TEXT NULL,
    "equipment" TEXT NULL
);
CREATE INDEX "exercises_exercise_id_index" ON
    "exercises"("exercise_id");
CREATE TABLE "user_workout"(
    "join_id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "workout_id" INTEGER NOT NULL,
    "times_completed" INTEGER NOT NULL,
    "last_completion" TEXT NULL,
    "is_favorited" BOOLEAN NOT NULL,
    UNIQUE ("user_id", "workout_id")
);
CREATE INDEX "user_workout_user_id_index" ON
    "user_workout"("user_id");
CREATE TABLE "steps"(
    "step_id" SERIAL PRIMARY KEY,
    "step_num" INTEGER NOT NULL,
    "workout_id" INTEGER NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "reps" INTEGER NULL,
    "duration" INTEGER NULL,
    "unit" TEXT NULL,
    "weight" INTEGER NULL,
    "distance" INTEGER NULL
);
CREATE INDEX "steps_workout_id_index" ON
    "steps"("workout_id");
CREATE TABLE "available_days"(
    "join_id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "day" TEXT NOT NULL,
    UNIQUE ("user_id", "day")
);
CREATE INDEX "available_days_user_id_index" ON
    "available_days"("user_id");
CREATE TABLE "users_exercises"(
    "join_id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "is_favorited" BOOLEAN NOT NULL,
    UNIQUE ("user_id", "exercise_id")
);
CREATE INDEX "users_exercises_user_id_index" ON
    "users_exercises"("user_id");
ALTER TABLE
    "workouts" ADD CONSTRAINT "workouts_created_by_foreign" FOREIGN KEY("created_by") REFERENCES "users"("user_id");
ALTER TABLE
    "steps" ADD CONSTRAINT "steps_exercise_id_foreign" FOREIGN KEY("exercise_id") REFERENCES "exercises"("exercise_id");
ALTER TABLE
    "user_workout" ADD CONSTRAINT "user_workout_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "user_workout" ADD CONSTRAINT "user_workout_workout_id_foreign" FOREIGN KEY("workout_id") REFERENCES "workouts"("workout_id");
ALTER TABLE
    "steps" ADD CONSTRAINT "steps_workout_id_foreign" FOREIGN KEY("workout_id") REFERENCES "workouts"("workout_id");
ALTER TABLE
    "available_days" ADD CONSTRAINT "available_days_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "users_exercises" ADD CONSTRAINT "users_exercises_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "users_exercises" ADD CONSTRAINT "users_exercises_exercise_id_foreign" FOREIGN KEY("exercise_id") REFERENCES "exercises"("exercise_id");