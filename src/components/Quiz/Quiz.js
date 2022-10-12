import React from 'react';

const Quiz = ({ topic }) => {
    console.log(topic);
    const { logo, name } = topic;
    return (
        <div className='border border-sky-500 ms-9  '>
            <img className='w-64 h-64' src={logo} alt="" />
            <div>
                <p><small>{name}</small></p>
                <button className='border-2 border-sky-900 '>Start Practice</button>
            </div>
        </div>
    );
};

export default Quiz;