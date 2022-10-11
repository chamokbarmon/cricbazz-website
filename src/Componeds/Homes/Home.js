import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const product = useLoaderData();
    return (
        <div className='home'>
            <h1>this is Home :{product.length}</h1>
        </div>
    );
};

export default Home;