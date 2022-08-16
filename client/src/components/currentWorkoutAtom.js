import { atom } from 'recoil';

const currentWorkoutIDState = atom({
  key: 'currentWorkoutIDState',
  default: 1,
});

export default currentWorkoutIDState;
