import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Skills = ({ skill, correctAnswer }) => {
    console.log(correctAnswer);
    const quizOptionHandler = (skill) => {
      if (skill === correctAnswer) {
        toast.success("Your answer is Correct");
      } else {
        toast.error("wrong");
      }
    };
    return (
      <div
        onClick={() => {
          quizOptionHandler(skill);
        }}
        className="lg:max-w-[350px] sm:mx-w-[200px] lg:h-[80px] sm:h-[50px] sm:flex sm:items-start sm:justify-center border-2  rounded-none hover:bg-purple-200 cursor-pointer text-black"
      >
        <div className="max-w-[300px] h-[7px] mx-auto font-bold font-mono flex items-center justify-center">
          <ToastContainer theme="colored">{skill}</ToastContainer>
        </div>
      </div>
    );
  };

export default Skills;