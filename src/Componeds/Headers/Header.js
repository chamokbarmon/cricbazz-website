import React from 'react';
import { Link,} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      
           
         <div>
             <nav className='header'>
              <h3 className='world'>Programing Hero</h3>
               

            <div className='nav' >
            <Link className='link'  to='/home'>Home</Link>
            <Link className='link' to='/blog'>Blog</Link>
            <Link className='link' to='/statistics'>Statistics</Link>
            <Link className='link' to='/topics'>Topics</Link>
            </div>
            
          </nav>

          <div className='header-Nav'>
            <img src="https://play-lh.googleusercontent.com/edmBVFMS9fhuZycs2I6jCO7vGxhH434upOADR2e3x5Wi_s6Et4vcFY0gYs0q_B0qFS8" alt="" />
             <div>
                <h1 className='program-name'>Programing Hero</h1>
               <p className='founder'>Mr. Jhankar Mahbub, the founder and CEO of 'Programming Hero', is a well-known figure in Bangladesh's programming sector. He serves as a senior web developer, author, YouTuber, teacher, and entrepreneur all at the same time. He graduated in industrial engineering at BUET in 2007</p>
             
             </div>
          </div>


         </div>
         
    
    );
};

export default Header;