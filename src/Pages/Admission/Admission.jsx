import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Heading from '../../Components/Heading';

const Admission = () => {
    const colleges = useLoaderData();
    
    return (
        <section>
            <Heading heading={"Choose Your College"}></Heading>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    colleges.map(college=> <Link to={`/admission/${college._id}`} className='bg-purple-800 hover:bg-purple-900 text-white px-2 py-4 cursor-pointer'>
                        <p className='text-center'>{college.name}</p>
                    </Link>)
                }
            </div>
        </section>
    );
};

export default Admission;