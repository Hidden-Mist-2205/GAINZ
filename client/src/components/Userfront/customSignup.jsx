import React, { useState } from 'react';
import Userfront from '@userfront/react';
import Axios from 'axios';
import GS from '../styles/GeneralStyles';
import SU from '../styles/Signup_Style/SU';

Userfront.init('rbvr4mqb');

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [avatar, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [daysAvailable, setDaysAvailable] = useState([]);

  async function uploadImageHandler(imageFile) {
    const img = URL.createObjectURL(imageFile);
    const reader = new FileReader();

    const toBase64 = (file) => new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    const converted = await toBase64(imageFile);
    const apiRequest = await Axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/alpinefec/image/upload',
      data: {
        file: converted,
        upload_preset: 'lfcpuaaw',
      },
    });
    return apiRequest;
  }

  async function createAccount(e) {
    e.preventDefault();

    const signup = await Userfront.signup({
      method: 'password',
      email: email,
      password: password,
    });

    console.log(signup);
  }

  return (
    <SU.WrapperDiv>
      <h1>Sign Up for Gainz</h1>
      <form onSubmit={(e) => { createAccount(e); }}>
        <label htmlFor="username">Username</label>
        <SU.TextInput id="username" value={username} onChange={((e) => setUsername(e.target.value))} />
        <label htmlFor="email">Email</label>
        <SU.TextInput id="email" type="email" value={email} onChange={((e) => setEmail(e.target.value))} />
        <label htmlFor="password">Password</label>
        <SU.TextInput id="password" type="password" value={password} onChange={((e) => setPassword(e.target.value))} />
        <label htmlFor="zipCode">Zipcode</label>
        <SU.TextInput id="zipcode" value={zipcode} onChange={((e) => setZipcode(e.target.value))} />
        <label htmlFor="phoneNum">Phone Number</label>
        <SU.TextInput id="phoneNum" type="tel" value={phoneNum} onChange={((e) => setPhoneNum(e.target.value))} />
        <label htmlFor="fitnessGoal">Fitness Goal</label>
        <SU.TextInput id="fitnessGoal" value={fitnessGoal} onChange={((e) => setFitnessGoal(e.target.value))} />
        <AvailableDays daysAvailable={daysAvailable} setDaysAvailable={setDaysAvailable} />
        <label htmlFor="avatar">Upload Profile Picture</label>
        <SU.TextInput id="avatar" type="file" onChange={e => setAvatarUrl(e.target.files[0])} />
        <GS.Button type="submit">Submit</GS.Button>
      </form>
    </SU.WrapperDiv>
  );
}

function AvailableDays({ daysAvailable, setDaysAvailable }) {
  function handleChange(e) {
    if (e.target.checked) {
      setDaysAvailable([...daysAvailable, e.target.value]);
    } else if (!e.target.checked) {
      const freshArray = daysAvailable.filter(val => val !== e.target.value);
      setDaysAvailable([...freshArray]);
    }
  }
  return (
    <>
      <input id="Monday" type="checkbox" value="Monday" onChange={e => handleChange(e)} />
      <input id="Tuesday" type="checkbox" value="Tuesday" onChange={e => handleChange(e)} />
      <input id="Wednesday" type="checkbox" value="Wednesday" onChange={e => handleChange(e)} />
      <input id="Thursday" type="checkbox" value="Thursday" onChange={e => handleChange(e)} />
      <input id="Friday" type="checkbox" value="Friday" onChange={e => handleChange(e)} />
      <input id="Saturday" type="checkbox" value="Saturday" onChange={e => handleChange(e)} />
      <input id="Sunday" type="checkbox" value="Sunday" onChange={e => handleChange(e)} />
    </>
  );
}

// userId: 'string', required
// userName: 'string', required
// email: 'string', required
// zipcode: 'string', required?
// phoneNum: 'string', required?
// avatarURL: 'string', not required
// fitnessGoal: 'string', not required?
// availableDays: 'array' required
