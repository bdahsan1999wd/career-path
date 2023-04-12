import React from 'react';
import './JobCard.css';

const JobCard = ({card}) => {
    const {companyLogo, jobTitle, companyName, remote, fullTime, location, salary} = card
    return (
        <div className='card p-8'>
            <img className='' src={companyLogo} alt="companyLogo" />
            <h4 className=' text-3xl font-bold mt-10'>{jobTitle}</h4>
            <h5 className='text-xl mt-3 font-semibold'>{companyName}</h5>
            <div className=''>
                <button className='outline outline-offset-2 border rounded-sm m-5'>{remote}</button>
                <button className='outline outline-offset-2 border rounded-sm m-5'>{fullTime}</button>
            </div>
            <div className='flex'>
                <h5 className=''>{location}</h5>
                <h5 className='ms-5'>{salary}</h5>
            </div>
            <div className='mt-10'>
                <button className='btn-primary'>View Details</button>
            </div>
        </div>
    );
};

export default JobCard;