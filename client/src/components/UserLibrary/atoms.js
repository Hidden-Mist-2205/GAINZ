import { atom } from 'recoil';

export const exerciseSearchState = atom({
  key: 'exerciseSearchState',
  default: '',
});

export const workoutSearchState = atom({
  key: 'workoutSearchState',
  default: '',
});
