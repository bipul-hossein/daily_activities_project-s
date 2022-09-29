import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
               <div>
            <div>
                <h1>1. How Does React Work?</h1>
                <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.</p>
            </div>
            <div>
                <h1>2. What are the differences between props and state ?</h1>
                <p>Have you ever wondered how can we pass the data between the components in ReactJS? We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.We will learn about props and state with the help of an example project in ReactJS.</p>
            </div>
            <div>
                <h1>3. What is the use of useEffect without data load ?</h1>
                <p>If we’re using hooks in React function components, we can load data from an API when the component first loads by using the useEffect hook with an empty array as the second argument.If we pass in the prop variable to the array in the 2nd argument of useEffect , the callback that we pass into the 1st argument will run as the prop changes.</p>
            </div>
        </div>
        </div>
    );
};

export default Question;