import React, { useEffect, useState} from 'react';
import './Home.css'
import image from '../../assets/All Images/P3OLGJ1 copy 1.png'
import JobType from '../jobType/JobType';

const Home = () => {
    const [jobType, setjobType] = useState([]);
    useEffect(()=> {
        fetch('jobType.json')
        .then(res =>res.json())
        .then(data => setjobType(data))
    },[])

    return (
        <>
            <section className='flex justify-evenly items-center heading-section'>
                <div>
                    <h1 className='text-7xl font-bold'>One Step <br />Closer To Your <br /><span className='text-sky-500'>Dream Job</span></h1>
                    <h4 className='font-medium text-xl mt-5 text-gray-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</h4>
                    <br /><br />
                    <button className='btn-primary'>Get Started</button>
                </div>
                <img src={image} alt="Header Image" />
            </section>
            <>
                <h3 className='mt-8 text-center text-5xl font-bold'>Job Category List</h3>
                <p className='text-center mt-5 mb-6 font-medium text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='product-container mt-8 mx-6'>
                    {
                        jobType.map(job => <JobType key={job.id} job={job}></JobType>)
                    }
                </div>
            </>
            <div>
                
            </div>
        </>
    );
};

export default Home;