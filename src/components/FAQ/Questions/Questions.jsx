import React, { useState } from "react";
import "./Questions.scss";

const questionsContent = {
    image: "/assets/images/groupPickup.png",
    title: "Frequently Asked Questions",
    subTitle: "Nonprofit Questions and Answers",
    description:
        "Here are some common questions we receive about our nonprofit and how you can get involved.",
    questions: [
        {
            id: 1,
            question: "How can I donate to your nonprofit?",
            answer:
                "You can donate through our website using the 'Donate' button, or by mailing a check to our headquarters.",
        },
        {
            id: 2,
            question: "Where does my donation go?",
            answer:
                "Your donation directly supports our programs and services, helping us to fulfill our mission of providing assistance to those in need.",
        },
        {
            id: 3,
            question: "Can I volunteer with your organization?",
            answer:
                "Yes! We welcome volunteers for a variety of roles. Please visit our 'Get Involved' page for more details.",
        },
    ],
};

export const Questions = () => {
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const toggleQuestion = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };

    return (
        <div className="box">
            <div className="first-question">
                <div className="left-column">
                    <img src={questionsContent.image} alt="Nonprofit" className="left-image" />
                </div>
                <div className="right-column">
                    <div className="title">
                        <div className="text-wrapper">{questionsContent.title}</div>
                        <div className="div">{questionsContent.subTitle}</div>
                    </div>
                    <p className="p">{questionsContent.description}</p>
                    <div className="toggle-question-left">
                        {questionsContent.questions.map((item) => (
                            <div key={item.id} className="toggle-question">
                                <div className="question-header" onClick={() => toggleQuestion(item.id)}>
                                    <p className="text-wrapper-2">{item.question}</p>
                                    <img
                                        className="icon"
                                        alt="Toggle Icon"
                                        src={
                                            openQuestionId === item.id
                                                ? "/assets/icons/FAQ/up.svg"
                                                : "/assets/icons/FAQ/down.svg"
                                        }
                                    />
                                </div>
                                {openQuestionId === item.id && (
                                    <div className="answer">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
