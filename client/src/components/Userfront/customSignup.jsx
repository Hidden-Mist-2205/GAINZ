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
    // const img = URL.createObjectURL(imageFile);
    const reader = new FileReader();

    const toBase64 = (file) => new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    const converted = await toBase64(imageFile);
    await Axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/alpinefec/image/upload',
      data: {
        file: converted,
        upload_preset: 'lfcpuaaw',
      },
    });
  }

  async function createAccount(e) {
    e.preventDefault();

    try {
      const picture = await uploadImageHandler(avatar);
    } catch (err) {
      console.log('There was an error uploading picture: ', err);
    }

    try {
      const signup = await Userfront.signup({
        method: 'password',
        name: username,
        email: email,
        password: password,
      });
    } catch (err) {
      console.log('There was an error uploading to Userbase: ', err);
    }

    try {
      //Upload to the DB here
    } catch {
      //Catch error here
    }
  }

  return (
    <SU.WrapperDiv>
      <h1>Sign Up for Gainz</h1>
      <SU.Form onSubmit={(e) => { createAccount(e); }}>
        <SU.InputDiv>
          <SU.TextInput id="username" placeholder="Username" value={username} onChange={((e) => setUsername(e.target.value))} />
        </SU.InputDiv>
        <SU.InputDiv>
          <SU.TextInput id="email" type="email" placeholder="email" value={email} onChange={((e) => setEmail(e.target.value))} />
        </SU.InputDiv>
        <SU.InputDiv>
          <SU.TextInput id="password" type="password" placeholder="password" value={password} onChange={((e) => setPassword(e.target.value))} />
        </SU.InputDiv>
        <SU.InputDiv>
          <SU.TextInput id="zipcode" placeholder="zipcode" value={zipcode} onChange={((e) => setZipcode(e.target.value))} />
        </SU.InputDiv>
        <SU.InputDiv>
          <SU.TextInput id="phoneNum" type="tel" placeholder="Phone Number" value={phoneNum} onChange={((e) => setPhoneNum(e.target.value))} />
        </SU.InputDiv>
        <SU.InputDiv>
          <SU.TextInput id="fitnessGoal" type="textarea" placeholder="Your fitness goal" value={fitnessGoal} onChange={((e) => setFitnessGoal(e.target.value))} />
        </SU.InputDiv>
        <SU.InputDiv>
          <AvailableDays daysAvailable={daysAvailable} setDaysAvailable={setDaysAvailable} />
        </SU.InputDiv>
        <SU.InputDiv>
          <h3>Upload Your Profile Picture:</h3>
          <SU.TextInput id="avatar" type="file" onChange={e => setAvatarUrl(e.target.files[0])} />
        </SU.InputDiv>
        <GS.Button type="submit">Submit</GS.Button>
      </SU.Form>
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
      <h3> Days Available: </h3>
      <SU.CheckBoxDiv>
        <label htmlFor="Monday">
          <input id="Monday" type="checkbox" value="Monday" onChange={e => handleChange(e)} />
          Monday
        </label>
      </SU.CheckBoxDiv>
      <SU.CheckBoxDiv>
        <label htmlFor="Tuesday">
          <input id="Tuesday" type="checkbox" value="Tuesday" onChange={e => handleChange(e)} />
          Tuesday
        </label>
      </SU.CheckBoxDiv>
      <SU.CheckBoxDiv>
        <label htmlFor="Wednesday">
          <input id="Wednesday" type="checkbox" value="Wednesday" onChange={e => handleChange(e)} />
          Wednesday
        </label>
      </SU.CheckBoxDiv>
      <SU.CheckBoxDiv>
        <label htmlFor="Thursday">
          <input id="Thursday" type="checkbox" value="Thursday" onChange={e => handleChange(e)} />
          Thursday
        </label>
      </SU.CheckBoxDiv>
      <SU.CheckBoxDiv>
        <label htmlFor="Friday">
          <input id="Friday" type="checkbox" value="Friday" onChange={e => handleChange(e)} />
          Friday
        </label>
      </SU.CheckBoxDiv>
      <SU.CheckBoxDiv>
        <label htmlFor="Saturday">
          <input id="Saturday" type="checkbox" value="Saturday" onChange={e => handleChange(e)} />
          Saturday
        </label>
      </SU.CheckBoxDiv>
      <SU.CheckBoxDiv>
        <label htmlFor="Sunday">
          <input id="Sunday" type="checkbox" value="Sunday" onChange={e => handleChange(e)} />
          Sunday
        </label>
      </SU.CheckBoxDiv>
    </>
  );
}