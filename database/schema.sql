CREATE TABLE "Users"(
    "UserID" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "ZipCode" TEXT NOT NULL,
    "PhoneNum" TEXT NOT NULL,
    "AvatarURL" TEXT NULL
);
CREATE INDEX "users_userid_index" ON
    "Users"("UserID");
ALTER TABLE
    "Users" ADD PRIMARY KEY("UserID");
CREATE TABLE "Workouts"(
    "WorkoutID" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "VideoURL" TEXT NULL,
    "CreatedBy" INTEGER NOT NULL,
    "MainArea" TEXT NOT NULL,
    "SecondaryArea" TEXT NULL
);
CREATE INDEX "workouts_mainarea_index" ON
    "Workouts"("MainArea");
ALTER TABLE
    "Workouts" ADD PRIMARY KEY("WorkoutID");
CREATE TABLE "Exercises"(
    "ExerciseID" INTEGER NOT NULL,
    "Instruction" TEXT NULL,
    "Area" TEXT NOT NULL,
    "GIFURL" TEXT NULL,
    "Equipment" TEXT NOT NULL
);
CREATE INDEX "exercises_exerciseid_index" ON
    "Exercises"("ExerciseID");
ALTER TABLE
    "Exercises" ADD PRIMARY KEY("ExerciseID");
CREATE TABLE "User/Workout"(
    "JoinID" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "WorkoutID" INTEGER NOT NULL,
    "TimesCompleted" INTEGER NOT NULL,
    "LastCompletion" TEXT NULL,
    "Favorited" BOOLEAN NOT NULL
);
CREATE INDEX "user/workout_userid_index" ON
    "User/Workout"("UserID");
ALTER TABLE
    "User/Workout" ADD PRIMARY KEY("JoinID");
CREATE TABLE "Steps"(
    "StepID" INTEGER NOT NULL,
    "StepNum" INTEGER NOT NULL,
    "WorkoutID" INTEGER NOT NULL,
    "ExerciseID" INTEGER NOT NULL,
    "Reps" INTEGER NULL,
    "Duration" INTEGER NULL,
    "Unit" TEXT NOT NULL,
    "Weight" INTEGER NULL,
    "Distance" INTEGER NULL
);
CREATE INDEX "steps_workoutid_index" ON
    "Steps"("WorkoutID");
ALTER TABLE
    "Steps" ADD PRIMARY KEY("StepID");
CREATE TABLE "AvailableDays"(
    "id" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "Day" TEXT NOT NULL
);
CREATE INDEX "availabledays_userid_index" ON
    "AvailableDays"("UserID");
ALTER TABLE
    "AvailableDays" ADD PRIMARY KEY("id");
CREATE TABLE "Users/Exercises"(
    "JoinID" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "ExerciseID" INTEGER NOT NULL,
    "Favorited" BOOLEAN NOT NULL
);
CREATE INDEX "users/exercises_userid_index" ON
    "Users/Exercises"("UserID");
ALTER TABLE
    "Users/Exercises" ADD PRIMARY KEY("JoinID");
ALTER TABLE
    "User/Workout" ADD CONSTRAINT "user/workout_userid_foreign" FOREIGN KEY("UserID") REFERENCES "Users"("UserID");
ALTER TABLE
    "AvailableDays" ADD CONSTRAINT "availabledays_userid_foreign" FOREIGN KEY("UserID") REFERENCES "Users"("UserID");
ALTER TABLE
    "Workouts" ADD CONSTRAINT "workouts_createdby_foreign" FOREIGN KEY("CreatedBy") REFERENCES "Users"("UserID");
ALTER TABLE
    "Steps" ADD CONSTRAINT "steps_exerciseid_foreign" FOREIGN KEY("ExerciseID") REFERENCES "Exercises"("ExerciseID");
ALTER TABLE
    "User/Workout" ADD CONSTRAINT "user/workout_workoutid_foreign" FOREIGN KEY("WorkoutID") REFERENCES "Workouts"("WorkoutID");
ALTER TABLE
    "Steps" ADD CONSTRAINT "steps_workoutid_foreign" FOREIGN KEY("WorkoutID") REFERENCES "Workouts"("WorkoutID");
ALTER TABLE
    "Users/Exercises" ADD CONSTRAINT "users/exercises_userid_foreign" FOREIGN KEY("UserID") REFERENCES "Users"("UserID");
ALTER TABLE
    "Users/Exercises" ADD CONSTRAINT "users/exercises_exerciseid_foreign" FOREIGN KEY("ExerciseID") REFERENCES "Exercises"("ExerciseID");