import React from 'react';
import './JobType.css'
const JobType = ({job}) => {
    const {logo, position, jobName} = job
    return (
        <div className= 'bg-sky-100 p-4 mx-8 mt-8'>
            <img src={logo} alt="logo" />
            <h1 className='font-semibold'>{jobName}</h1>
            <h1>{position}</h1>
        </div>
    );
};

export default JobType;