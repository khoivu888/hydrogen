import React, {useState} from "react";


export default function ContactForm() {
    const [error, setError] = useState([])
    const [data, setData] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        data.name ? setError(error => ({...error, 'name': false})) : setError(error => ({...error, 'name': true}))
        data.email ? setError(error => ({...error, 'email': false})) : setError(error => ({...error, 'email': true}))
    }
    return (
        <form className='md:mt-0 mt-10' onSubmit={handleSubmit}>
            <input onChange={handleChange} name={'name'} type='text'
                   className='input w-full bg-[#F5F5F5] border-none rounded-none' placeholder='Enter Your Name'/>
            {error.name ?
                <small className='font-semibold mt-2 ml-2 text-sm text-primary'>Name is Require</small> : null}

            <input onChange={handleChange} type='email' name='email'
                   className='input mt-5 w-full bg-[#F5F5F5] border-none rounded-none' placeholder='Enter Your Email'/>
            {error.email ?
                <small className='font-semibold mt-2 ml-2 text-sm text-primary'>Email is Require</small> : null}
            <textarea onChange={handleChange} name='message'
                      className='textarea h-[280px] mt-5 w-full bg-[#F5F5F5] border-none rounded-none'
                      placeholder='Message'/>
            <button type='submit' className='mt-5 btn btn-lg btn-ghost bg-primary text-white btn-wide'>
                Send
            </button>
        </form>
    )
}