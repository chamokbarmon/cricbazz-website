import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='question1'>
                <h1> What is the purpose of the react router?</h1>
                <p>Ans : ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className="question2">
                <h1>How does context api work ?</h1>
                <p>Ans : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='question3'>
                <h1>What is useref in react ?</h1>
                <p>Ans : Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
        </div>
    );
};

export default Blogs;