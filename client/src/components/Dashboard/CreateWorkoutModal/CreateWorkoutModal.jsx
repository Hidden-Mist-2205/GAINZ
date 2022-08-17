import React from 'react';
import M from '../../styles/Dashboard_style/Modal';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';

export default function Dashboard({ handleModal }) {
  return (
    <M.Background>
      <M.PopUp>
        <M.Form>
          <DB.Header style={{
            color: 'white', 'padding-bottom': '20px', 'text-align': 'center', 'margin-top': '0px'
          }}
          >
            Create Workout
          </DB.Header>
          <AddedExerciseList></AddedExerciseList>
          <M.Column>
            <M.Label>Category</M.Label>
            <M.Category
              name="Category"
            >
              <M.Option />
              <M.Option>Butt  Stuff</M.Option>
              <M.Option>Chest Stuff</M.Option>
              <M.Option>Back Stuff</M.Option>
              <M.Option>Full Body Stuff</M.Option>
              <M.Option>Upper Body Stuff</M.Option>
              <M.Option>Leg Stuff</M.Option>
            </M.Category>
          </M.Column>
          <M.Column>
            <M.Label>Exercise</M.Label>
            <M.Exercise
              name="Exercise"
            />
          </M.Column>
          <M.Column>
            <M.Label>Media Url</M.Label>
            <M.Url
              name="Url"
            />
          </M.Column>
          <M.Column>
            <M.Label>Description</M.Label>
            <M.Description
              name="Description"
            />
          </M.Column>
          <M.Column>
            <GS.Button type="button" style={{ width: '192px', 'margin-right': '25px' }}>ADD EXERCISE</GS.Button>
            <GS.Button type="submit" style={{ width: '192px', 'margin-left': '25px' }}>SAVE</GS.Button>
            <M.CloseButton onClick={handleModal} type="button"> X </M.CloseButton>
          </M.Column>
        </M.Form>
      </M.PopUp>
    </M.Background>
  );
}
