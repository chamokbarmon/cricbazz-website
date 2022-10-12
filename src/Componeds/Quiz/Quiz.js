import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";
import Skills from '../Skills/Skills';

const Quiz = ({product}) => {
    const { correctAnswer, options, question } = product;
    const hintsHandler = () => {
      console.log(options);
      toast.warning(correctAnswer);
    };
    return (
        <div className="w-full h-full py-5">
        <div className="lg:w-[700px] lg:h-[300px] sm: w-[400px] sm:h-[600px] mx-auto rounden shadow-md  border-2 border-black-200">
          <div className="max-w-[600px] h-[100px]  mx-auto text-center flex items-center justify-between">
            <h1 className="font-bold font-mono  py-2">
              <span className="text-xl font-bold">Quiz</span>- {question}
            </h1>
            <div className="max-w-[60px] h-[60px]">
              <EyeIcon
                onClick={hintsHandler}
                title={correctAnswer}
                className="w-8 h-8  ml-5 cursor-pointer"
              >
                <ToastContainer theme="colored"></ToastContainer>
              </EyeIcon>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3 px-5">
          {Skills.map((skill)=>(
            <Skills
            key={skill.id}
            skill={skill}
            ></Skills>
          ))}

            
          </div>
        </div>
      </div>
    );
};

export default Quiz;