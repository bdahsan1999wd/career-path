import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around items-center px-5 py-10 shadow-xl'>
            <h3 className='text-4xl font-bold text-gray-500'>Career<span className='text-sky-500'>Path</span></h3>
            <Link className='font-bold' to="/">Home</Link>
            <Link className='font-bold' to="/Statistics">Statistics</Link>
            <Link className='font-bold' to="/AppliedJobs">Applied Jobs</Link>
            <Link className='font-bold' to="/Blogs">Blogs</Link>
            <Link to="/StartApplying"><button className='btn-primary'>Start Applying</button></Link>
        </div>
    );
};

export default Header;