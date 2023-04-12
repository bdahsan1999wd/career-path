import React, { useEffect, useState } from 'react';
import './Home.css'
import image from '../../assets/All Images/AhsanHabib.png'
import JobType from '../jobType/JobType';
import JobCard from '../JobCard/JobCard';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const [jobType, setjobType] = useState([]);
    useEffect(() => {
        fetch('jobType.json')
            .then(res => res.json())
            .then(data => setjobType(data))
    }, [])

    const featureJobs = useLoaderData()
    // console.log(data);
    return (
        <>
            <section className='flex justify-evenly items-center heading-section'>
                <div>
                    <h1 className='text-7xl font-bold'>One Step <br />Closer To Your <br /><span className='text-sky-500'>Dream Job</span></h1>
                    <h4 className='font-medium text-xl mt-5 text-gray-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</h4>
                    <br /><br />
                    <button className='btn-primary'>Get Started</button>
                </div>
                <img className='ms-10' src={image} alt="Header Image" />
            </section>
            <>
                <div className='mt-40 mb-20'>
                    <h3 className='mt-8 text-center text-5xl font-bold'>Job Category List</h3>
                    <p className='text-center mt-5 mb-6 font-medium text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='product-container m-6'>
                    {
                        jobType.map(job => <JobType key={job.id} job={job}></JobType>)
                    }
                </div>
            </>
            <div className=' mt-40 mb-20'>
                <h3 className='text-5xl text-center font-bold'>
                    Featured Jobs
                </h3>
                <p className='text-center mt-5 mb-6 font-medium text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid gap-8 m-auto lg:grid-cols-2 md:grid-cols-2'>
                {
                    featureJobs.map(card => <JobCard key={card.id} card={card}></JobCard>)
                }
            </div>
            <div className='text-center mt-10 mb-10'>
                <button className='btn-primary'>See All Jobs</button>
            </div>
        </>
    );
};

export default Home;