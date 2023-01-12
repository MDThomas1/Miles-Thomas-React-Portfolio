import React from 'react';

import projects from './projects'

import Project from './Project'

export default function Portfolio() {
    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            {projects.map((project) => {
                <Project name={project.name} link={project.link} image={project.image} description={project.description} github={project.github} />
            })}
        </div>
    );
}