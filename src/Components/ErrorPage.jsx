import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center gap-10 h-screen'>
            <h1 className='text-xl md:text-9xl font-bold text-purple-800'>404</h1>
            <div>
                <h2 className="text-lg md:text-2xl">Sorry, The page not found</h2>
                <p className='mb-4'>The link you followed probably broken or the page has been removed.</p>
                <Link to={'/'} className='bg-purple-800 text-white p-2 rounded'>Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;