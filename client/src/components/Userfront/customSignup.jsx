import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userfront from '@userfront/react';
import Axios from 'axios';
import SU from '../styles/Signup_Style/SU';
import PasswordResetModal from './passwordResetModal';
import Nav from '../styles/NavStyle';
import HP from '../styles/Signup_Style/HP';

Userfront.init('rbvr4mqb');

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [avatar, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [zoomLink, setZoomLink] = useState('');
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  async function uploadImageHandler(imageFile) {
    if (!imageFile) {
      return '';
    }
    // const img = URL.createObjectURL(imageFile);
    const reader = new FileReader();

    const toBase64 = (file) => new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    const converted = await toBase64(imageFile);
    const picture = await Axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/alpinefec/image/upload',
      data: {
        file: converted,
        upload_preset: 'lfcpuaaw',
      },
    });
    return picture;
  }

  async function createAccount(e) {
    e.preventDefault();
    if (password.length < 16) {
      alert('Password must be longer than 10');
      return;
    }
    let pic;
    try {
      pic = await uploadImageHandler(avatar);
    } catch (err) {
      console.log(err);
    }
    try {
      const signup = await Userfront.signup({
        method: 'password',
        name: username,
        email: email,
        password: password,
      });
      await Axios({
        method: 'POST',
        url: '/postUser',
        data: {
          userId: signup.userId,
          username: username,
          email: email,
          zip: zipcode,
          phoneNumber: phoneNum,
          avatar: (pic.data.secure_url ? pic.data.secure_url : ''),
          goal: fitnessGoal,
          zoom: zoomLink,
          days: daysAvailable,
        },
      });
    } catch (err) {
      console.log('There was an error with usefront or your server: ', err);
    }
  }

  return (
    <HP.HomePageWrapper>
      <Nav.Container>
        <Nav.Logo> ⚛︎ GAINZ</Nav.Logo>
        <HP.HomeNavSection>
          <HP.HomeOutlineButton onClick={() => navigate('/login')}>Login</HP.HomeOutlineButton>
          <HP.HomeSolidButton onClick={() => navigate('/signUp')}>Register</HP.HomeSolidButton>
        </HP.HomeNavSection>
      </Nav.Container>
      <HP.HomeBackground>
        <HP.HomeOverlay>
          <SU.PageWrapper>
            {display ? <PasswordResetModal setDisplay={setDisplay} /> : null}
            <SU.WrapperDiv>
              <SU.Form onSubmit={(e) => { createAccount(e); }}>
                <SU.InputDiv>
                  <SU.Title>Sign Up</SU.Title>
                  <label htmlFor="username">
                    Username
                    <SU.TextInput required id="username" value={username} onChange={((e) => setUsername(e.target.value))} />
                  </label>
                </SU.InputDiv>
                <SU.InputDiv>
                  <label htmlFor="email">
                    Email
                    <SU.TextInput required id="email" type="email" value={email} onChange={((e) => setEmail(e.target.value))} />
                  </label>
                </SU.InputDiv>
                <SU.InputDiv>
                  <label htmlFor="password">
                    Password
                    <SU.TextInput required passwordrules="minlength: 16;" id="password" type="password" value={password} onChange={((e) => setPassword(e.target.value))} />
                  </label>
                </SU.InputDiv>
                <SU.InputDiv>
                  <label htmlFor="zipcode">
                    Zipcode
                    <SU.TextInput required id="zipcode" value={zipcode} onChange={((e) => setZipcode(e.target.value))} />
                  </label>
                </SU.InputDiv>
                <SU.InputDiv>
                  <label htmlFor="phoneNumber">
                    Phone Number
                    <SU.TextInput required id="phoneNumber" type="tel" value={phoneNum} onChange={((e) => setPhoneNum(e.target.value))} />
                  </label>
                </SU.InputDiv>
                <SU.InputDiv>
                  <label htmlFor="fitnessGoal">
                    Your Fitness Goal
                    <SU.TextInput required id="fitnessGoal" type="textarea" value={fitnessGoal} onChange={((e) => setFitnessGoal(e.target.value))} />
                  </label>
                </SU.InputDiv>
                <SU.InputDiv>
                  <label htmlFor="zoomLink">
                    Upload your Zoom Link
                    <SU.TextInput required id="zoomLink" value={zoomLink} onChange={((e) => setZoomLink(e.target.value))} />
                  </label>
                </SU.InputDiv>
                <SU.InputDiv>
                  <h3> Days Available: </h3>
                  <AvailableDays daysAvailable={daysAvailable} setDaysAvailable={setDaysAvailable}/>
                </SU.InputDiv>
                <SU.InputDiv>
                  <label htmlFor="avatar">
                    <h3>Upload Your Profile Picture</h3>
                    <SU.TextInput required id="avatar" type="file" onChange={e => setAvatarUrl(e.target.files[0])} />
                  </label>
                </SU.InputDiv>
                <SU.SubmitButton style={{ width: '100%' }} type="submit">Create Account</SU.SubmitButton>
              </SU.Form>
              <SU.FormBottom>
                <SU.MiniButton onClick={() => navigate('/login')}>Login</SU.MiniButton>
                <SU.MiniButton onClick={() => setDisplay(true)}>Forgot Password?</SU.MiniButton>
              </SU.FormBottom>
            </SU.WrapperDiv>
          </SU.PageWrapper>
        </HP.HomeOverlay>
      </HP.HomeBackground>
    </HP.HomePageWrapper>
  );
}

// Creates array of available days
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
    <SU.CheckboxContainer>
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
    </SU.CheckboxContainer>
  );
}
