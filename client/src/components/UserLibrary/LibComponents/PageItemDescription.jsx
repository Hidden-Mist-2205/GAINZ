import React from 'react';

import { PageListItemText, ListItemText } from '../Styles/PageListItemText.styled';

export default function PageItemName({ text }) {
  return (
    <PageListItemText>
      <ListItemText>{text}</ListItemText>
    </PageListItemText>
  );
}
