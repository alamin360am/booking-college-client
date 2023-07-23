import React from 'react';

const Heading = ({heading}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-4">{heading}</h1>
        </div>
    );
};

export default Heading;