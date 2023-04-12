import React from 'react';
import './JobType.css';
const JobType = ({job}) => {
    const {logo, position, jobName} = job
    return (
        <div className= 'cards p-8 mx-10 mt-10'>
            <img className='' src={logo} alt="logo" />
            <h1 className='mt-5 text-xl font-bold'>{jobName}</h1>
            <h1 className=' mt-3'>{position}</h1>
        </div>
    );
};

export default JobType;