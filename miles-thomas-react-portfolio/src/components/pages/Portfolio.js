import React from 'react';

import Project from './Project'

export default function Portfolio({ projects }) {
    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            {projects.map((project) => {
                <Project name={project.name} link={project.link} image={project.image} description={project.description} github={project.github} />
            })}
        </div>
    );
}