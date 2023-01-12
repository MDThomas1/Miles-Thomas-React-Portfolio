import React from 'react';

export default function Project(props) {
    return (
        <div className='project'>
            <h3>{props.name}</h3>
            <a href={`${props.link}`}>
                <img src={`${props.image}`}></img>
            </a>
            <p>{props.description}</p>
            <a href={`${props.github}`}>Github</a>
        </div>
    );
}