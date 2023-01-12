import React from 'react';

export default function Project(props) {
    return (
        <div className='project'>
            <h3>{props.name}</h3>
            <img src=''></img>
            <p>{props.description}</p>
        </div>
    );
}