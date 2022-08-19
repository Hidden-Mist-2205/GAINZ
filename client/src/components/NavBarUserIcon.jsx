import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import Nav from './styles/NavStyle';

export default function NavBarUserIcon() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    axios
      .get('/getUserInfo', {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
      })
      .then((user) => {
        console.log(user.data);
        setUserInfo(user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Nav.UserIcon src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=1380" />
  );
}
