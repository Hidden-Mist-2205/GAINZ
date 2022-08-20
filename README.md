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
![Authentication](https://i.gyazo.com/2cf74f19df9cbd0546647229c0ad4d27.gif)


* Display all the workout and exercises that you have favorited
* On click on the workout title expand and show the list of exercises w/ sets and reps for each workout
* On click on the exercise title expand and show the gifs
* Create your own custom workouts
* Start button routes you to the start workout page
* Toggle favorites if created by the user they are able to delete
### Library - Max McKenna
*
### MyGainz - Max McKenna
*
### Start Workout - Wenny Xiong
![Authentication](https://i.gyazo.com/81bd304b20c4f0d15ff9a7ac2f4b2100.gif)


* As the UI Owner of this project, I was responsible for create the wireframe and UI designs aligned with client's expectation
* Start Workout section: have a count down timer where users can enter the time they preferred and able to play, pause and stop
* Count downtimer also have a auto mode that will automatically go through each step, pause for 5 seconds between steps and end the session when finished
* On the right user will see the detailed instruction with a GIF
* When finished, the complete count and last completed time will update in My Gainz section



### Find Workout Buddy - Patrick O'Shea
*
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

