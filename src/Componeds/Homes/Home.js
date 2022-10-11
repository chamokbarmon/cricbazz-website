import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = ({params}) => {
 
 
    const products = useLoaderData()
    return (
        <div className='totalHome'>
            {
                products.data.map((product)=>(
                 <Topics key={product.id} product={product}></Topics>

                ))}
        </div>
    );
};

export default Home;