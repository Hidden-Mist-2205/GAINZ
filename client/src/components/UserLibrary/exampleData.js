const workoutList = [
  {
    id: 'int',
    name: 'string',
    description: 'string',
    mediaUrl: 'string',
    createdBy: 'userId',
    mainArea: 'string',
    secondaryArea: 'string',
    favorited: 'boolean',
    lastCompleted: 'string',
    steps: [
      {
        stepID: 'int',
        stepNum: 'int',
        exerciseName: 'string',
        reps: 'int',
        duration: 'int',
        unit: 'string',
        weight: 'int',
        distance: 'int'
      }
    ],
  },
]

const exercises = [
  {
    id: 1,
    name: 'Exercise Name',
    description: 'Exercise Description',
    gifUrl: '#',
    category: 'Exercise Category',
    favorited: 'false'
  },
  {
    id: 2,
    name: 'Exercise Name',
    description: 'Exercise Description',
    gifUrl: '#',
    category: 'Exercise Category',
    favorited: 'false'
  },
  {
    id: 3,
    name: 'Exercise Name',
    description: 'Exercise Description',
    gifUrl: '#',
    category: 'Exercise Category',
    favorited: 'false'
  },
]

availableBuddies = [
  {
    userID: 'int',
    name: 'string',
    fitnessGoal: 'string',
    zipcode: 'string',
    avatarURL?: 'string'
  },
]

getUserInfo =
{
  userID: 'string',
  userName: 'string',
  email: 'string',
  zipcode: 'string',
  phoneNum: 'string',
  avatarURL: 'string',
  fitnessGoal: 'string',
  daysAvailable: 'array'
}