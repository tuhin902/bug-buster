import React from 'react';
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = ({ topic }) => {
    // console.log(topic);
    const { id, logo, name, total } = topic;
    return (
        <div className="flex items-celter justify-evenly ml-20 mt-20 mr-20 rounded-xl bg-cyan-900 p-10 text-white">
            <img className="image " src={logo}></img>
            <div className="flex flex-col mt-4  lg:mt-6 lg:justify-between ">
                <h2 className=" text-3xl">{name}</h2>
                <h2 className=" text-3xl  mr-2">quiz:{total}</h2>
                <button className="text-3xl ml-4 lg:ml-0  lg:mt-4  font-bold button rounded-lg p-2">
                    <Link
                        to={`/quiz/${id}`}
                    >
                        practise
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Quiz;

