# [![GAINZ](https://iili.io/gUbhVp.png)](https://freeimage.host/)

## Contributors
### [Anthony McGovern](https://github.com/code402b)
### [Wenny Xiong](https://github.com/WennyXiong)
### [Patrick O'Shea](https://github.com/PatMan817)
### [Al Huynh](https://github.com/Albertthuynh94)
### [Sam Bartlett](https://github.com/samkbe)
### [Max McKenna](https://github.com/mmckenna34)

## Introduction
This project was a brief 1-week sprint where our team tried to complete an MVP for an external user (Barry Swoleman).
In recent years many people have been unable to visit the gym in person, and many of them miss the accountability being around other people can provide. The GAINZ application will allow users to access information on other people’s workouts, and find other users of the service who share their interests or workout schedule

#### Key Features:
* Users are able to create accounts to do fitness workouts and follow along steps
* Users are able to find others with similar schedules to connect with and work out together
* Users can search for and create their own workouts to add to the community list of workouts

## Tech Stack
* Front End: JavaScript, ReactJS, Recoil, Styled Components, React Router, Userfront
* Back End: NodeJS, Express, PostgreSQL, Axios
* Testing/Utilities: Babel, Webpack, Jest

## Section breakdown (with demo)
### Welcome Page - Sam Bartlett
![Authentication](https://i.gyazo.com/00eb4497e1b053b0a39071d880fbadef.gif)


The login, signup and forgot password forms implement UserFront for authentication within custom React forms that send information to our own database for user matching. Upon entering the app, users are sent to non-authenticated routes (like the landing page seen above) or protected auth-only routes depending on their access token.


### Dashboard - Al Huynh
![Dashboard](https://i.gyazo.com/2cf74f19df9cbd0546647229c0ad4d27.gif)


* Display all the workout and exercises that you have favorited
* On click on the workout title expand and show the list of exercises w/ sets and reps for each workout
* On click on the exercise title expand and show the gifs
* Create your own custom workouts
* Start button routes you to the start workout page
* Toggle favorites if created by the user they are able to delete
### Library - Max McKenna
![Workout/Exercise Library Demo](https://i.gyazo.com/2b38949ca7f5865898d13c3c1209f186.gif)


* Display all available workouts and exercises
* Search by name, and filter by their specified category
* Clicking the Reset button will clear all search filters, displaying the full library
* Selecting the star icon will favorite a workout/exercise and add it to your dashboard
* Clicking the title of a workout will reveal a dropdown list of the workout's exercises
* Clicking the title of an exercise displays a GIF showing the proper technique
* Clicking the Start button on a workout will direct to the Start Workout page
### MyGainz - Max McKenna
![My Gainz Demo](https://i.gyazo.com/dc8642f9e9dfa7fec6b2c9bdaa16e59e.gif)


* Displays all of your previously completed workouts
* Each workout shows the number of times it has been completed,  and the last date it was completed on
* Selecting the star icon will favorite a workout/exercise and add it to your dashboard
* Clicking the title of a workout will reveal a dropdown list of the workout's exercises
* Workouts are paginated in groups of 4 for readability
### Start Workout - Wenny Xiong
![Start Workout](https://i.gyazo.com/81bd304b20c4f0d15ff9a7ac2f4b2100.gif)


* As the UI Owner of this project, I was responsible for create the wireframe and UI designs aligned with client's expectation
* Start Workout section: have a count down timer where users can enter the time they preferred and able to play, pause and stop
* Count downtimer also have a auto mode that will automatically go through each step, pause for 5 seconds between steps and end the session when finished
* On the right user will see the detailed instruction with a GIF
* When finished, the complete count and last completed time will update in My Gainz section



### Find Workout Buddy - Patrick O'Shea
![Find A Buddy](https://i.gyazo.com/5e568fe7409eb008c75d993d2ca23115.gif)

* Find a workout buddy based on available day and optionally zipcode
* List will show all users who meet criteria in the database with their profile information
* Can search list for username
* Select a buddy by clicking the request info button which will send an email to the user with your contact information


### My Profile - Anthony McGovern
*


## Installation
1. Clone the repo
```
git clone http://https://github.com/Hidden-Mist-2205/GAINZ.git
```

2. Install NPM dependencies
```
npm install
```

3. Build Webpack
```
npm run build
```

4. Run Server
```
npm run start
```

5. Copy envExample and rename it to .env and fill with data

6. Go to localhost:3000 to use the App
```
http://localhost:3000
```

## Additional Features/Future Improvements
* Live chat
* find a local buddy within number of miles

