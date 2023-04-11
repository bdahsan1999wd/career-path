import React from 'react';

const Blogs = () => {
    return (
        <>
            <h2 className='text-4xl font-semibold mt-9 ms-5'>When should you use context API?</h2>
            <br />
            <h4 className='text-xl font-semibold ms-5'>The React Context API is a tool for sharing data between components without having to pass props down through every level of the component tree. The Context API is a useful tool when you need to share data between components, manage global state, or avoid prop drilling in a deeply nested component hierarchy. <br /> <span className='font-bold'>Here are some scenarios when you might consider using the Context API:</span> <br />1. When you have data that needs to be accessed by many components. <br />2. When you have deeply nested components. <br />3. When you want to avoid prop drilling. <br />4. When you want to manage global state.</h4>
            <br /><br />
            <h2 className='text-4xl font-semibold ms-5'>What is a custom hook?</h2>
            <br />
            <h4 className='text-xl font-semibold ms-5'>A custom hook is a JavaScript function that allows you to reuse stateful logic between components in React. It is created using built-in React hooks like useState, useEffect, and useContext. Custom hooks can simplify your code, make it more reusable, and easier to maintain. They are named with the prefix use by convention and can be used to encapsulate and share complex logic, such as fetching data from an API or managing a global state.</h4>
            <br /><br />
            <h2 className='text-4xl font-semibold ms-5'>What is useRef?</h2>
            <br />
            <h4 className='text-xl font-semibold ms-5'>useRef is a React hook that allows you to create a mutable reference to a value that persists across re-renders of a functional component. It can be used to store a reference to a DOM element, a previous value, or any other mutable value that needs to be accessed by the component or its descendants.
            <br />
            The useRef hook returns a mutable object with a current property that can be used to store and retrieve the current value of the reference. The value can be updated using the .current property without triggering a re-render of the component.</h4>
            <br /><br />
            <h2 className='text-4xl font-semibold ms-5'>What is useMemo?</h2>
            <br />
            <h4 className='text-xl font-semibold ms-5 mb-9'>useMemo is a hook in React that allows you to optimize the performance of your components by memoizing the result of a function call. It takes two arguments: the first is a function that returns a value, and the second is an array of dependencies. The hook will only re-run the function and update the value when the dependencies have changed.</h4>
        </>
    );
};

export default Blogs;