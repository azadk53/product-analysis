import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1>What is Context API?</h1>
            <p> Context API is a process to send data one component to another. It is a system which avoid props and tree system. For example, if we want to send data from grand-father component to children component, we have to send data to father first. In case of context API, we can send data directly children without father component. To create contex api we use createContex() and then enclose our components with .Provider. useContex is used to get the data.</p>
            <br />
            <h1>What is Semantic tag?</h1>
            <p>Semantic tag describes web page presentation. It indicates which one is heading or which one is paragraph. We can easily understand which section is image and which section is text. Basically it gives us clear meaning and content of web page. It also helps to increase page's search ranking. </p>
        </div>
    );
};

export default Blogs;