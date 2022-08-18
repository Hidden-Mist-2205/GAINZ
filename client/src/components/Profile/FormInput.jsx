import React from 'react';

export default function FormInput({ userInfo, setUserInfo }) {
  return (
    <label htmlFor="editUsername">
      Username:
      <input
        type="text"
        required
        id="editUsername"
        className="formField"
        value={userInfo.user_name}
        onChange={(e) => setUserInfo({ ...userInfo, user_name: e.target.value })}
      />
    </label>
  );
}
