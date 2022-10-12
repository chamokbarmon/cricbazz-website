import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = ({params}) => {
     const products = useLoaderData();
     console.log(products);
    return (
        <div>
            {
                products.data.questions.map((product)=>(
               <Quiz key={product.id} product={product}></Quiz>

                ))
            }
        </div>
    );
};

export default QuizDetails;