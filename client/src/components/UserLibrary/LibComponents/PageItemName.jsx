import React from 'react';

import { PageListItemText, ListItemTitle } from '../Styles/PageListItemText.styled';

export default function PageItemName({ text }) {
  return (
    <PageListItemText>
      <ListItemTitle>{text}</ListItemTitle>
    </PageListItemText>
  );
}
