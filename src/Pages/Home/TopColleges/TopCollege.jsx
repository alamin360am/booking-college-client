import React from 'react';

const TopCollege = ({college}) => {
    const {image, name, admission_dates, events, research_history, sports} = college;
    console.log(college);
    return (
        <div className='shadow-md rounded p-4'>
            College
        </div>
    );
};

export default TopCollege;