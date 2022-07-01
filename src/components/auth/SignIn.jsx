import React, {useState} from 'react';
import {LogoHeaderDesktop} from '../../assets/Icon';
import {Modal} from 'antd';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

export default function SignIn({isOpen, handleCancel, handleOk}) {
  const [error, setError] = useState([]);
  const [data, setData] = useState({});
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);

  const showRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterOk = () => {
    setIsRegisterOpen(false);
  };

  const handleRegisterCancel = () => {
    setIsRegisterOpen(false);
  };

  const showForgotModal = () => {
    setIsForgotOpen(true);
  };

  const handleForgotOk = () => {
    setIsForgotOpen(false);
  };

  const handleForgotCancel = () => {
    setIsForgotOpen(false);
  };

  const handleChange = (event) => {
    setError([]);
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    setError([]);
    event.preventDefault();
    data.password
      ? setError((error) => ({...error, password: false}))
      : setError((error) => ({...error, password: true}));
    data.email
      ? setError((error) => ({...error, email: false}))
      : setError((error) => ({...error, email: true}));
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
          <div className="lg:px-10 px-5">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="input mt-5 w-full bg-[#F5F5F5] border-none rounded-none"
              placeholder="Email"
            />
            {error.email ? (
              <div className="font-semibold text-caption mt-2 ml-2 text-sm text-left text-primary">
                Email is Require
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
            <button
              type="submit"
              className="mt-5 border-none rounded-none w-full btn btn-ghost bg-primary text-white btn-wide"
            >
              Sign In
            </button>
            <div className="text-left mt-3">
              <label
                onClick={() => {
                  handleCancel();
                  showForgotModal();
                }}
                htmlFor="forgot-modal"
                className="font-light   text-sm underline text-primary"
              >
                Forgot Password
              </label>
            </div>
            <div
              onClick={showRegisterModal}
              className="mt-5 text-sm font-light"
            >
              Don't have an account?{' '}
              <label
                htmlFor="signup-modal"
                className="font-light  hover:cursor-pointer text-sm underline text-primary"
              >
                Sign up
              </label>
            </div>
          </div>
        </form>
      </Modal>
      <SignUp
        isOpen={isRegisterOpen}
        handleCancel={handleRegisterCancel}
        handleOK={handleRegisterOk}
      />
      <ForgotPassword
        isOpen={isForgotOpen}
        handleCancel={handleForgotCancel}
        handleOK={handleForgotOk}
      />
    </>
  );
}
