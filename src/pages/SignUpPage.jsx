import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useDispatch } from 'react-redux';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const [token, setToken] = useState(null)

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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
      const data = await fetchFromApi('http://localhost/website-backend/register.php', 'POST', { email: formData.email, first_name: formData.first_name, last_name: formData.last_name, password: formData.password })
      if (data.token) {
        // Dispatch the login action to update the Redux store
        //console.log(data.token)
        setToken(data.token);
        dispatch(login(data.token));
        localStorage.setItem('token', data.token);
        navigate('/');
      }
      console.log('API call successful', data);
    } catch{
      console.error('Error fetching data:');
    }
          
    };

  return (
    <div className='my-[60px] flex gap-[120px] items-center xl:justify-start justify-center'>
      <div className='h-[781px] w-[805px] xl:block hidden'>
        <img className='h-[100%] w-[100%]' src={require('../assets/others/SideImage.png')} alt="sideimage" />
      </div>

      <div>
        <form className='w-[371px]' onSubmit={handleSubmit}>
          <h1 className='text-[36px] mb-[1.5rem]'>Create an account</h1>
          <p className='mb-[3rem]'>Enter your details bellow</p>

          <input className='mb-[40px] h-[32px] w-[100%] border-b-2 border-gray outline-none' type="text" placeholder='First Name' name='first_name' value={formData.first_name} onChange={handleChange}/>
          <input className='mb-[40px] h-[32px] w-[100%] border-b-2 border-gray outline-none' type="text" placeholder='Last Name' name='last_name' value={formData.last_name} onChange={handleChange}/>
          <input className='mb-[40px] h-[32px] w-[100%] border-b-2 border-gray outline-none' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
          <input className='mb-[40px] h-[32px] w-[100%] border-b-2 border-gray outline-none' pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" title='Minimum eight characters, at least one letter, one number and one special character' type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
          {
            token ? (
              <Link to='/'>
                <input className='bg-redButton cursor-pointer mb-[32px] w-[100%] h-[56px] text-white grid place-content-center rounded-[5px]' type="submit" value="Create Account" />
              </Link>
            ) : <input className='bg-redButton cursor-pointer mb-[32px] w-[100%] h-[56px] text-white grid place-content-center rounded-[5px]' type="submit" value="Create Account" />
          }
          <p className='text-center'>Already have an account? <Link to='/login' className='underline'>Log in</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
