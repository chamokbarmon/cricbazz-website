import React from 'react';



const Topics = ({product}) => {
    const {name,logo} = product;
  
    return (
        <div className='home'>
             <h1>name :{name}</h1>
             <img src={logo} alt="" />
        </div>
    );
};

export default Topics;