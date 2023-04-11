import React from 'react';

const JobType = ({job}) => {
    const {logo, position, jobName} = job
    return (
        <div>
            <img src={logo} alt="logo" />
            <h1 className='font-semibold'>{jobName}</h1>
            <h1>{position}</h1>
        </div>
    );
};

export default JobType;