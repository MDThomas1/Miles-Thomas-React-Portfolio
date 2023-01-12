import React from 'react';

import projects from './projects'

import Project from './Project'

export default function Portfolio() {
    return (
        <div className='portfolio container'>
            <div className='row'>
                <div className='col-12'>
                   <h2>Portfolio</h2>
                </div>
            </div>
            <div className='row'>
                {projects.map((project) => {
                    <Project name={project.name} link={project.link} image={project.image} description={project.description} github={project.github} />
                })}
            </div>
        </div>
    );
}