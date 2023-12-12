import React, { useEffect } from 'react'
import { useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useDispatch } from 'react-redux';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

import { ErrorModal } from '../components';

const LogInPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [errData, setErrData] = useState({success : null, message: ''});

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const data = await fetchFromApi('http://localhost/website-backend/login.php', 'POST', { email: formData.email, password: formData.password })
      if (data.token) {
        // Dispatch the login action to update the Redux store
        //console.log(data.token)
        dispatch(login(data.token));
        localStorage.setItem('token', data.token);
        navigate('/');
      } else{
        setErrData(data);
        setTimeout(() => {
          setErrData({success : null, message: ''});
        }, 3000);
      }
      console.log('API call successful', data);
    } catch{
      console.error('Error fetching data:');
      setErrData({ success: null, message: 'An error occurred' });   
    }
    };

    useEffect(() => {
      console.log("Err data:", errData);
    }, [errData]);

  return (
    <div className='my-[60px] flex gap-[120px] items-center xl:justify-start justify-center'>

      {errData.success !== null && errData.success === false && <ErrorModal text={errData.message}/>}

      <div className='h-[781px] w-[805px] xl:block hidden'>
        <img className='h-[100%] w-[100%]' src={require('../assets/others/SideImage.png')} alt="sideimage" />
      </div>

      <div>
        <form className='w-[371px]' onSubmit={handleSubmit}>
          <h1 className='text-[36px] mb-[1.5rem]'>Log In to Exclusive</h1>
          <p className='mb-[3rem]'>Enter your details bellow</p>

          <input className='mb-[40px] h-[32px] w-[100%] border-b-2 border-gray outline-none' type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}/>
          <input className='mb-[40px] h-[32px] w-[100%] border-b-2 border-gray outline-none' type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange}/>
          <div className='flex items-center justify-between mb-[3rem]'>
          <input className='bg-redButton w-[150px] h-[56px] text-white grid place-content-center rounded-[5px] cursor-pointer' type="submit" value="Log In" />
            <p className='text-center text-redButton'>Forgot password?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogInPage
