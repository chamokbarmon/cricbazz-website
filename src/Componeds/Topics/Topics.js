import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';


const Topics = ({product}) => {
    const {name,logo,id} = product;
  
    return (
        <div className='homeAll'>
            <div className='home'>
             <img src={logo} alt="" />
             <h1>name :{name}</h1>
             <button><Link to={`/product/${id}`}>Start Practise</Link></button>
            </div>
           
        </div>
    );
};

export default Topics;