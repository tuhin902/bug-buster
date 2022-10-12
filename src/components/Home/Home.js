import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Lottie from "lottie-react";
import animation from "../../asset/animation.json";


const Home = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div>
            <div className='flex justify-center' >
                <Lottie className='w-1/2' animationData={animation} loop={true}></Lottie>
            </div>
            <div className='grid grid-cols-2 gap-5 mx-5 rounded-lg '>
                {
                    topics.map(topic => <Quiz key={topic.id}
                        topic={topic}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;