import { atom } from 'recoil';

export const completedWorkoutsState = atom({
  key: 'completedWorkoutsState',
  default: [],
});

export const pageState = atom({
  key: 'pageState',
  default: {
    page: 1,
    start: 0,
    end: 4,
  },
});
