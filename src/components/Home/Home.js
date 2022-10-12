import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div className='grid grid-cols-2 gap-5 mx-5 rounded-lg '>
            {
                topics.map(topic => <Quiz key={topic.id}
                    topic={topic}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;