import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../../Components/Heading';
import MyCollege from './MyCollege';

const MyColleges = () => {
    const [applied, setApplied] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/admission?email=sadbintafsin@gmail.com`)
        .then(res => res.json())
        .then(data => setApplied(data))
    },[])

    return (
        <section className='mb-8'>
            <Helmet><title>My Colleges</title></Helmet>
            <Heading heading={"My Colleges"}></Heading>
            {
                applied.map(apply=><MyCollege key={apply._id} apply={apply}></MyCollege>)
            }
        </section>
    );
};

export default MyColleges;