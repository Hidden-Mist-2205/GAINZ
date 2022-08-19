/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import M from '../../styles/Dashboard_style/Modal';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';
import AddedExerciseList from './AddedExerciseList';
import SelectCategory from './SelectCategory';
import allExerciseState from './exerciseAtom';
import { getExercises, postNewWorkout } from '../../../requests/server';

export default function Dashboard({ handleModal }) {
  const [allExercise, setAllExercise] = useRecoilState(allExerciseState);
  const exerciseCategory = ['chest', 'back', 'shoulders', 'waist', 'upper arms', 'lower arms', 'upper legs', 'lower legs', 'cardio'];
  const workoutCategory = ['legs', 'waist', 'arms', 'shoulders', 'chest', 'back'];
  useEffect(() => {
    getExercises()
      .then((res) => {
        setAllExercise(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [exerciseToAdd, setExerciseToAdd] = useState([]);
  const [steps, setSteps] = useState({
    exerciseId: '',
    name: '',
    reps: '',
    sets: '',
    gifUrl: '',
    area: '',
  });

  const [workoutInput, setWorkoutInput] = useState({
    name: '',
    description: '',
    videoUrl: '',
    mainArea: '',
    secondArea: '',
    steps: [],
  });
  const handleExerciseInputs = (e) => {
    const { name, value } = e.target;
    if (name === 'exerciseId') {
      setSteps((prevValues) => ({
        ...prevValues,
        name: value,
        exerciseId: Number(Object.keys(allExercise).find((ex) => allExercise[ex].name === value)) + 1,
      }));
    } else {
      setSteps((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };
  const handleWorkoutInputs = (e) => {
    const { name, value } = e.target;
    setWorkoutInput((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleAddExercise = () => {
    setExerciseToAdd(exerciseToAdd.concat(steps));
    setSteps({
      exerciseId: '',
      name: '',
      reps: '',
      sets: '',
      gifUrl: '',
      area: '',
    });
    console.log(workoutInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const current = workoutInput;
    current.steps = exerciseToAdd;
    console.log('wheres this', current);
    postNewWorkout(current);
    setWorkoutInput({
      name: '',
      description: '',
      videoUrl: '',
      mainArea: '',
      secondArea: '',
      steps: [],
    });
    setExerciseToAdd([]);
    handleModal(e);
  };

  return (
    <M.Background>
      <M.PopUp>
        <M.Form onSubmit={handleSubmit}>
          <DB.Header style={{
            color: 'white', 'padding-bottom': '20px', 'text-align': 'center',
          }}
          >
            Create Workout
          </DB.Header>
          {exerciseToAdd.length > 0
            && (
              <M.BoxAddedExercise>
                <AddedExerciseList exerciseToAdd={exerciseToAdd} />
              </M.BoxAddedExercise>
            )}
          <M.Stuff>
            <M.InputColumn>
              <M.Column>
                <M.Label>Excercise Category</M.Label>
                <SelectCategory
                  mainArea={steps.area}
                  name="area"
                  handleExerciseInputs={handleExerciseInputs}
                  categoryList={exerciseCategory}
                />
              </M.Column>
              <M.Column>
                <M.Label>Exercise Name</M.Label>
                <M.Input
                  type="search"
                  list="exerciselist"
                  name="exerciseId"
                  value={steps.name}
                  onChange={handleExerciseInputs}
                  style={{ width: '60%' }}
                />
                <datalist id="exerciselist">
                  {allExercise.filter((exercise) => exercise.area === steps.area).map((exercise) => (
                    <option value={exercise.name} />
                  ))}
                </datalist>
              </M.Column>
              <M.Column>
                <M.Label># of Sets</M.Label>
                <M.Input
                  name="sets"
                  type="number"
                  min="0"
                  value={steps.sets}
                  onChange={handleExerciseInputs}
                />
              </M.Column>
              <M.Column>
                <M.Label># of Reps</M.Label>
                <M.Input
                  name="reps"
                  type="number"
                  min="0"
                  value={steps.reps}
                  onChange={handleExerciseInputs}
                />
              </M.Column>
              <M.Column>
                <M.Label>Exercise Url</M.Label>
                <M.Input
                  name="gifUrl"
                  type="text"
                  value={steps.gifUrl}
                  onChange={handleExerciseInputs}
                />
              </M.Column>
            </M.InputColumn>
            <M.InputColumn style={{ paddingRight: '20px' }}>
              <M.Column>
                <M.Label>Workout Category</M.Label>
                <SelectCategory
                  mainArea={workoutInput.mainArea}
                  name="mainArea"
                  required
                  handleExerciseInputs={handleWorkoutInputs}
                  categoryList={workoutCategory}
                />
              </M.Column>
              <M.Column>
                <M.Label>Secondary Category</M.Label>
                <SelectCategory
                  mainArea={workoutInput.secondArea}
                  name="secondArea"
                  handleExerciseInputs={handleWorkoutInputs}
                  categoryList={workoutCategory}
                />
              </M.Column>
              <M.Column>
                <M.Label>Workout Name</M.Label>
                <M.Input
                  name="name"
                  value={workoutInput.name}
                  required
                  onChange={handleWorkoutInputs}
                />
              </M.Column>
              <M.Column>
                <M.Label>Workout Url</M.Label>
                <M.Input
                  name="videoUrl"
                  type="text"
                  required
                  value={workoutInput.videoUrl}
                  onChange={handleWorkoutInputs}
                />
              </M.Column>
              <M.Column>
                <M.Label>Workout Description</M.Label>
                <M.Input
                  name="description"
                  type="text"
                  required
                  value={workoutInput.description}
                  onChange={handleWorkoutInputs}
                />
              </M.Column>
            </M.InputColumn>
          </M.Stuff>

          <M.Column style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
            <GS.Button
              type="button"
              style={{ width: '192px', 'margin-right': '25px' }}
              onClick={handleAddExercise}
            >
              ADD EXERCISE
            </GS.Button>
            <GS.Button type="submit" style={{ width: '192px', 'margin-left': '25px' }}>SAVE</GS.Button>
            <M.CloseButton onClick={handleModal} type="button"> X </M.CloseButton>
          </M.Column>
        </M.Form>
      </M.PopUp>
    </M.Background>
  );
}
