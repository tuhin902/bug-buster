import React from 'react';
import { useLoaderData } from "react-router-dom";
import TopicQuiz from '../Topicquiz/TopicQuiz';


const Topic = () => {
    const topics = useLoaderData();

    return (
        <div className=" mt-28 ml-24  lg:ml-56 topic ">
            <h1 className="text-3xl ml-20 text-orange-500 font-bold">
                Quiz of :{topics.data.name}
            </h1>
            {topics.data.questions.map((topic) => (
                <TopicQuiz topic={topic} key={topic.id}
                ></TopicQuiz>
            ))}
        </div>
    );
};

export default Topic;



