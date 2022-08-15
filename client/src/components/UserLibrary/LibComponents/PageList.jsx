import React from 'react';

import PageListItem from './PageListItem';
import PageListNav from './PageListNav';

export default function PageList({ items }) {
  return (
    <>
      {items.map(exercise => (
        <PageListItem data={exercise} key={exercise.id} />
      ))}
      <PageListNav />
    </>
  );
}
