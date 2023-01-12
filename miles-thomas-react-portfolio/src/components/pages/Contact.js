import React from 'react';

export default function Contact() {
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <input type={'text'} placeholder={'Please enter your name'}></input>
            <input type={'text'} placeholder={'Please enter your email address'}></input>
            <input type={'text'} placeholder={'Please enter your message'}></input>
            <button>Submit</button>
        </div>
    );
}