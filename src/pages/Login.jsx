import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../services/serviceApi';
import { Button } from '../components';

const Login = () => {
	const inputClass = "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#B2C5D4] focus:ring-[#B2C5D4] focus:outline-none focus:ring focus:ring-opacity-40";
  const labelClass = "block text-sm font-medium text-[#3B97CB]";

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    let formData = {
      'email': email.value,
      'password': password.value,
    }

    // console.log(formData);
    useLoginMutation(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error)
    })
  }

  return (
    <div className='m-5'>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-5 rounded-2xl ">
        <form onSubmit={onSubmit}>
          <h2>Please login to use app.</h2>
          
          <div className="relative m-3 p-5 w-full">
            <div className="mb-2">
              <label for='email' className={labelClass}>
                  Email
              </label>
              <input
                  id='email'
                  name='email'
                  type='email'
                  className={inputClass}
              />
            </div>

            <div className="mb-2">
              <label for='password' className={labelClass}>
                  Password
              </label>
              <input
                  id='password'
                  name='password'
                  type='password'
                  className={inputClass}
              />
            </div>
          </div>

          <div className="rounded-lg w-36 ">
            <button
              type='submit'
              className='text-md p-3 w-full hover:drop-shadow-xl bg-med-blue'
            >
              This
            </button>
          </div>

        </form>
        
        <p>Don\'t have an account?
              <Link to="/register">Register here</Link>
          </p>
      </div>
      {/* {postContent} */}

    </div>
  )
}

export default Login