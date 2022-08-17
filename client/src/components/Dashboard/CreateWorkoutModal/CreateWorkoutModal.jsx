/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import M from '../../styles/Dashboard_style/Modal';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';
import AddedExerciseList from './AddedExerciseList';
import SelectCategory from './SelectCategory';
import allExerciseState from './exerciseAtom';
import { getExercises } from '../../../requests/server';

export default function Dashboard({ handleModal }) {
  const [allExercise, setAllExercise] = useRecoilState(allExerciseState);
  useEffect(() => {
    getExercises()
      .then((res) => {
        console.log(res.data);
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
    mainArea: '',
  });

  const [workoutInput, setWorkoutInput] = useState({
    name: '',
    description: '',
    videoUrl: '',
    mainArea: '',
    steps: [],
  });
  const handleExerciseInputs = (e) => {
    const { name, value } = e.target;
    const custom = e.target.getAttribute('data-value');
    if (name === 'exerciseId') {
      setSteps((prevValues) => ({
        ...prevValues,
        name: value,
        exerciseId: custom,
      }));
    } else {
      setSteps((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };
  const handleAddExercise = () => {
    const current = exerciseToAdd;
    current.push(steps);
    setExerciseToAdd(current);
    console.log(current, exerciseToAdd);
  };
  return (
    <M.Background>
      <M.PopUp>
        <M.Form>
          <DB.Header style={{
            color: 'white', 'padding-bottom': '20px', 'text-align': 'center',
          }}
          >
            Create Workout
          </DB.Header>
          {exerciseToAdd.length > 0 && <AddedExerciseList exerciseToAdd={exerciseToAdd} />}
          <M.Column>
            <M.Label>Category</M.Label>
            <SelectCategory handleExerciseInputs={handleExerciseInputs} />
          </M.Column>
          <M.Column>
            <M.Label>Exercise</M.Label>
            <M.Input
              type="search"
              list="exerciselist"
              name="exerciseId"
              onChange={handleExerciseInputs}
            />
            <datalist id="exerciselist">
              {allExercise.filter((exercise) => exercise.area === steps.mainArea).map((exercise) => (
                <option value={exercise.name}></option>
              ))}
            </datalist>
          </M.Column>
          <M.Column>
            <M.Label># of Sets</M.Label>
            <M.Input
              name="sets"
              value={exerciseToAdd.sets}
              onChange={handleExerciseInputs}
            />
          </M.Column>
          <M.Column>
            <M.Label># of Reps</M.Label>
            <M.Input
              name="reps"
              value={exerciseToAdd.reps}
              onChange={handleExerciseInputs}
            />
          </M.Column>
          <M.Column>
            <M.Label>Media Url</M.Label>
            <M.Input
              name="gifUrl"
              type="text"
              value={workoutInput.videoUrl}
              onChange={setWorkoutInput}
            />
          </M.Column>
          <M.Column>
            <M.Label>Description</M.Label>
            <M.Description
              name="description"
              type="text"
              value={workoutInput.description}
              onChange={setWorkoutInput}
            />
          </M.Column>
          <M.Column>
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
