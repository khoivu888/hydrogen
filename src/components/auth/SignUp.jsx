import {LogoHeaderDesktop} from '../../assets/Icon';
import {useState} from 'react';
import React from 'react';
import {Modal} from 'antd';

export default function SignUp({isOpen, handleCancel, handleOk}) {
  const [error, setError] = useState([]);
  const [data, setData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    data.password
      ? setError((error) => ({...error, password: false}))
      : setError((error) => ({...error, password: true}));
    data.email
      ? setError((error) => ({...error, email: false}))
      : setError((error) => ({...error, email: true}));
    data.password === data.confirm_password
      ? setError((error) => ({...error, confirm_password: false}))
      : setError((error) => ({...error, confirm_password: true}));
  };
  return (
    <>
      <Modal
        visible={isOpen}
        onOk={handleOk}
        okButtonProps={false}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{textAlign: '-webkit-center'}} className="">
          <LogoHeaderDesktop width={136} height={38} />
        </div>
        <p className="py-4 font-bold text-center">Welcome to GodMerch</p>
        <form onSubmit={handleSubmit}>
          <div className="md:px-10 px-5">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="input mt-5 w-full bg-[#F5F5F5] border-none rounded-none"
              placeholder="Email"
            />
            {error.email ? (
              <div className="font-semibold text-caption mt-2 ml-2 text-sm text-left text-primary">
                Email is Invalid
              </div>
            ) : null}
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="input mt-5 w-full bg-[#F5F5F5] border-none rounded-none"
              placeholder="Password"
            />
            {error.password ? (
              <div className="font-semibold text-caption mt-2 ml-2 text-sm text-left text-primary">
                Password is Require
              </div>
            ) : null}
            <input
              onChange={handleChange}
              name="confirm_password"
              type="password"
              className="input mt-5 w-full bg-[#F5F5F5] border-none rounded-none"
              placeholder="Confirm Password"
            />
            {error.confirm_password ? (
              <div className="font-semibold text-caption mt-2 ml-2 text-sm text-left text-primary">
                Password & Confirm Password doesn't Match
              </div>
            ) : null}
            <button
              type="submit"
              className="mt-5 border-none rounded-none w-full btn btn-ghost bg-primary text-white btn-wide"
            >
              Sign Up
            </button>
            <div className="text-xs font-light mt-3">
              By signing up, you agree to our{' '}
              <span className="font-bold">Terms, Data Policy</span> and{' '}
              <span className="font-bold">Cookies Policy.</span>
            </div>
            <div className="mt-5 text-sm font-light">
              Already have an account?{' '}
              <label
                onClick={handleCancel}
                htmlFor="signin-modal"
                className="font-light text-sm underline hover:cursor-pointer text-primary"
              >
                Sign in
              </label>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
