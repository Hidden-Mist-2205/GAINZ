/* eslint-disable max-len */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { completedWorkoutsState, pageState } from './workoutsAtom';
import MG from '../styles/MyGainz_style/MG';
import WorkoutPanel from './WorkoutPanel';

export default function Workout() {
  const completedWorkouts = useRecoilValue(completedWorkoutsState);
  const page = useRecoilValue(pageState);
  const displayedWorkouts = completedWorkouts ? completedWorkouts.slice(page.start, page.end) : [];
  return (displayedWorkouts.length > 0
    ? (
      <MG.WOBody>
        {displayedWorkouts.map((workout) => <WorkoutPanel key={workout.workout_id} workout={workout} />)}
      </MG.WOBody>
    )
    : (
      <MG.WOBody>
        <MG.NoWorkouts>
          It looks like you have not worked out yet. Head to the
          <MG.LibraryLink href="/UserLibrary"> &nbsp;Library!&nbsp;</MG.LibraryLink>
        </MG.NoWorkouts>
      </MG.WOBody>
    )
  );
}
