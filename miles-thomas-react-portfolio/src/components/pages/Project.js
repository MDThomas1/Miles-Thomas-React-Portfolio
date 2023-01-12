import React from 'react';

export default function Project(props) {
    return (
        <div className='project col-6'>
            <a href={`${props.link}`}><h3>{props.name}</h3></a>
            <img src={`${props.image}`}></img>
            <p>{props.description}</p>
            <a href={`${props.github}`}>Github</a>
        </div>
    );
}