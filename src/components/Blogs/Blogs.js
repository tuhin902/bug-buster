import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className="text-5xl text-center mt-16 font-bold text-lime-500">
                Our Queston is here
            </h1>
            <div className="ml-32 mt-32">
                <div className="blog w-3/4 border-2 border-lime-400 rounded-lg p-6">
                    <h1 className="mb-4 text-3xl font-semibold">
                        Question 1: What Is The Purpose Of React Router?
                    </h1>
                    <p className="letter">
                        Ans : React Router is a standard library for routing in React. It
                        enables the navigation among views of various components in a React
                        Application, allows changing the browser URL, and keeps the UI in
                        sync with the URL.React Router is an API for React applications.
                        Most current code is written with React Router 3, although version 4
                        has been released. React Router uses dynamic routing.React Router,
                        and dynamic, client-side routing, allows us to build a single-page
                        web application with navigation without the page refreshing as the
                        user navigates. React Router uses component structure to call
                        components, which display the appropriate information. By preventing
                        a page refresh, and using Router or Link, which is explained in more
                        depth below, the flash of a white screen or blank page is prevented.
                        This is one increasingly common way of having a more seamless user
                        experience.
                    </p>
                </div>
                <div className="mt-12 blog  w-3/4 border-2 border-lime-400 rounded-lg p-6">
                    <h2 className="mb-4 text-3xl font-semibold">
                        {" "}
                        Question 2:How Does Context Api Work?
                    </h2>
                    <p className="letter">
                        Ans :The React Context API is a way for a React app to effectively
                        produce global variables that can be passed around. This is the
                        alternative to "prop drilling" or moving props from grandparent to
                        child to parent, and so on. Context is also touted as an easier,
                        lighter approach to state management using Redux.
                        React.createContext() is all you need. It returns a consumer and a
                        provider. Provider is a component that as it's names suggests
                        provides the state to its children. It will hold the "store" and be
                        the parent of all the components that might need that store.
                        Consumer as it so happens is a component that consumes and uses the
                        state.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;