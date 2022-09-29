import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question-container'>
                <h1>Question Answer:</h1>
                <div>
                    <div>
                        <h2>1. How Does React Work?</h2>
                        <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.</p>
                    </div>
                    <div>
                        <h2>2. What are the differences between props and state ?</h2>
                        <p>Have you ever wondered how can we pass the data between the components in ReactJS? We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.We will learn about props and state with the help of an example project in ReactJS.</p>
                    </div>
                    <div>
                        <h2>3. What is the use of useEffect without data load ?</h2>
                        <p>If we’re using hooks in React function components, we can load data from an API when the component first loads by using the useEffect hook with an empty array as the second argument.If we pass in the prop variable to the array in the 2nd argument of useEffect , the callback that we pass into the 1st argument will run as the prop changes.</p>
                    </div>
                </div>
            </div>


            <div>
                <div class="grid grid-flow-col gap-4">
                    <a class="link link-hover">About_us  </a>
                    <a class="link link-hover">Contact  </a>
                    <a class="link link-hover">Jobs  </a>
                    <a class="link link-hover">Press_kit </a>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </div>


    );
};

export default Question;