import React from 'react';

import PageListItem from './PageListItem';
import PageListNav from './PageListNav';

export default function PageList({ items, actionButton }) {
  return (
    <>
      {items.map(item => (
        <PageListItem data={item} actionButton={actionButton} key={item.id} />
      ))}
      <PageListNav />
    </>
  );
}
