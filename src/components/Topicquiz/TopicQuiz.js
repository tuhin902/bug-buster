import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import Icon from "react-hero-icon";
import { ToastContainer, toast } from 'react-toastify';

const TopicQuiz = ({ topic }) => {
    const [selectedAnswer, setselectedAnswer] = useState("");

    const answersselecthandler = (answer) => {
        return () => {
            setselectedAnswer(answer);
        };
    };


    const onclickedButton = (correctAnswer) => {
        return (e) => {
            e.preventDefault();
            if (selectedAnswer === correctAnswer) {
                alert("Your answer is correct!");
            } else {
                alert(" Wrong!");
            }
        };
    };

    const difftoast = () => {
        toast.warning(topic.correctAnswer, { position: "top-center" });
    };
    return (
        <div className="mt-16 shadow-xl p-8  w-3/4    topicm">
            <h1>{topic.name}</h1>
            <div className="flex justify-between">
                <h2 className="text-2xl mb-4"> Quiz :{topic.question}</h2>
                <div>
                    <Icon onClick={difftoast} icon="eye" />;
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <div>
                <form onSubmit={onclickedButton(topic.correctAnswer)}>
                    <div className="border-0 border-y-2 w-1/2 p-3 rounded-lg">
                        <input
                            className="mr-2  "
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                            onChange={answersselecthandler(topic.options[0])}
                        />
                        <label className="mr-4 " for="html">
                            {topic.options[0]}
                        </label>
                    </div>
                    <div className="border-0 border-y-2 w-1/2 mt-4 p-3 -lg">
                        <input
                            className="mr-2  "
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                            onChange={answersselecthandler(topic.options[1])}
                        />
                        <label className="mr-4 " for="html">
                            {topic.options[0]}
                        </label>
                    </div>
                    <div className="border-0 border-y-2 w-1/2 mt-4 p-3 -lg ">
                        <input
                            className="mr-2  "
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                            onChange={answersselecthandler(topic.options[2])}
                        />
                        <label className="mr-4 " for="html">
                            {topic.options[0]}
                        </label>
                    </div>
                    <div className="border-0 border-y-2 w-1/2 mt-4 p-3 -lg ">
                        <input
                            className="mr-2"
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                            onChange={answersselecthandler(topic.options[3])}
                        />
                        <label for="html">{topic.options[3]}</label>
                    </div>
                    <br />
                    <button type="submit" className="border-2 border-cyan-900 text-white font-bold bg-blue-400 rounded-lg p-4 ">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TopicQuiz;