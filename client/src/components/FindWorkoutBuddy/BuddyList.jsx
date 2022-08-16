import React from 'react';

import BuddyListItem from './BuddyListItem';
import PageListNav from '../UserLibrary/LibComponents/PageListNav';

export default function BuddyList({ items, actionButton }) {
  return (
    <>
      {items.map(item => (
        <BuddyListItem data={item} actionButton={actionButton} key={item.id} />
      ))}
      <PageListNav />
    </>
  );
}
