import { atom } from 'recoil';

const allExerciseState = atom({
  key: 'allExerciseState',
  default: [],
});
export default allExerciseState;
