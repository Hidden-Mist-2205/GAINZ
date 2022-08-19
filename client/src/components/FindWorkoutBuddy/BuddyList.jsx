import React from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react'

import BuddyListItem from './BuddyListItem';
import PageListNav from '../UserLibrary/LibComponents/PageListNav';

export default function BuddyList({ items }) {
  const [animationParent] = useAutoAnimate();
  return (
    <div ref={animationParent}>
      {items.map((item) => (
        <BuddyListItem data={item} key={item.id} />
      ))}
      <PageListNav />
    </div>
  );
}
