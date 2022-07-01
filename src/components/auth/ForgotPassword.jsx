import React, {useState} from 'react';
import {LogoHeaderDesktop} from '../../assets/Icon';
import {Modal} from 'antd';

export default function ForgotPassword({isOpen, handleCancel, handleOk}) {
  const [error, setError] = useState([]);
  const [data, setData] = useState({});

  const handleChange = (event) => {
    setError([]);
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    setError([]);
    event.preventDefault();
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
        <p className="py-4 font-bold text-center">
          We will send you an email to reset your password
        </p>
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
            <button
              type="submit"
              className="mt-5 border-none rounded-none w-full btn btn-ghost bg-primary text-white btn-wide"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
