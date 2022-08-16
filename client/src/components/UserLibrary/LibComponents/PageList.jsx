import React from 'react';

import PageListItem from './PageListItem';
import PageListNav from './PageListNav';

export default function PageList({ items }) {
  return (
    <>
      {items.map(item => (
        <PageListItem data={item} key={item.id} />
      ))}
      <PageListNav />
    </>
  );
}
