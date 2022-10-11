import React from 'react';
import './Topics.css';


const Topics = ({product}) => {
    const {name,logo} = product;
  
    return (
        <div className='homeAll'>
            <div className='home'>
             <img src={logo} alt="" />
             <h1>name :{name}</h1>
             <button>Start Practise</button>
            </div>
           
        </div>
    );
};

export default Topics;