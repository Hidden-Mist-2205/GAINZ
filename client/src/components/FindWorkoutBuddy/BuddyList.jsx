import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import BuddyListItem from './BuddyListItem';

export default function BuddyList({ items }) {
  const [animationParent] = useAutoAnimate();
  return (
    <div ref={animationParent}>
      {items.map((item) => (
        <BuddyListItem data={item} key={item.id} />
      ))}
    </div>
  );
}
