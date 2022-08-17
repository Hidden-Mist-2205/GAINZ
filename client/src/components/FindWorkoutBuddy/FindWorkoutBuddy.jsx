import React, { useState, useEffect } from 'react';

import PageHeader from '../UserLibrary/LibComponents/PageHeader';
import PageList from '../UserLibrary/LibComponents/PageList';
import PageContainer from '../UserLibrary/Styles/PageContainer.styled';

// import { getBuddies } from '../../requests/server';

export default function FindWorkoutBuddy() {
  const [buddies, setBuddies] = useState([]);

  useEffect(() => {
    // getBuddies()
    //   .then((res) => setBuddies(res.data))
    //   .catch((err) => console.log(err));
  }, []);

  const searchBuddies = (searchInput) => { console.log(searchInput); };

  return (
    <>
      <PageHeader page="Find Workout Buddy" searchFunction={searchBuddies} />
      <PageContainer>
        <PageList items={buddies} actionButton="Request Info" />
      </PageContainer>
    </>
  );
}
