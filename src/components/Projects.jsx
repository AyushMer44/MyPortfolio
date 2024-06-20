import {useState} from "react";

const Projects=()=> {
    const [, set] = useState([ /* We can also use this to add more projects by putting a loop...*/
        {
            id:"",
            title:"",
            description: "",
            actionButton: {
                title: "",
                link: ""
            }
        }
    ]);

    const [modalDetails, setModalDetails] = useState([
        {
            id:"1",
            title:"TECH BLOG",
            description:"Developed a website for users to share and learn technological knowledge and trends.",
            techUsed:"Java, JSP, Servlets, MySQL, HTML/CSS, JavaScript.",
            responsibilities:"Designed database schema, developed server-side logic and user interfaces, ensured secure user authentication, enabled posting and commenting features."
        }
        ,
        {
            id:"2",
            title:"APPWRITE BLOG",
            description:"Created a web-based ToDo application using React and Appwrite as the backend service.",
            techUsed:"React, Appwrite, JavaScript, HTML/CSS",
            responsibilities:"Developed user interface, integrated Appwrite for data storage and authentication, implemented task management features, ensured performance and security."
        }
        ,
        {
            id:"3",
            title:"MICROSERVICES MANAGEMENT",
            description:"Developed microservices on backend using different services to remove monolithic architecture.",
            techUsed:"Java, SpringBoot, Microservices, SpringSecurity, Maven, PostMan, SQL.",
            responsibilities:"Developed multiple services which are connected with each other by using API Gateway, Fault Tolerance and Spring Security, ensured code quality and performance."
        },
        {
            id:"4",
            title:"SMART CONTACT MANAGER",
            description:"Created a web application to save and manage contacts securely online.",
            techUsed:"Java, Spring Boot, MySQL, HTML/CSS, JavaScript.",
            responsibilities:"Developed backend services, designed user interface, implemented CRUD operations, ensured data security."
        },
        {
            id:"5",
            title:"CURRENCY CONVERTER",
            description:"",
            techUsed:"",
            responsibilities:""
        },
        {
            id:"6",
            title:"PRODUCT MANAGER",
            description:"",
            techUsed:"",
            responsibilities:""
        }
    ])

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);

    return(
        <>
            <div className="main-container py-16">
                <h1 className="text-4xl font-bold text-center underline">
                    MY PROJECTS
                </h1>
                <div className="services-container flex space-y-7 space-x-3 px-8 flex-wrap justify-center">
                    <div
                        className="space-y-3 mt-8 bg-slate-200 hover:bg-gray-400 p-5 text-center shadow-lg rounded-xl border-2 w-1/4">
                        <i className="fa-solid fa-blog text-4xl"></i>
                        <h1 className="text-3xl">TECH BLOG</h1>
                        <p>Developed a website for users to share and learn technological knowledge and trends.</p>
                        <br/>
                        <br/>
                        <div>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(true)}
                            >
                                Show more...
                            </button>
                            {showModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div
                                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div
                                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold text-center">
                                                        TECH BLOG
                                                    </h3>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <h2 className="text-2xl font-bold">Description</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Developed a website for users to share and learn technological
                                                        knowledge and trends.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Technologies Used</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Java, JSP, Servlets, MySQL, HTML/CSS, JavaScript.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Responsibilities</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Designed database schema, developed server-side logic and user
                                                        interfaces, ensured secure user authentication, enabled posting
                                                        and commenting features.
                                                    </p>
                                                </div>

                                                {/*footer*/}
                                                <div
                                                    className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-red-600 outline-red-700 text-white active:bg-white hover:bg-opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Go Back
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div
                        className="space-y-3 bg-slate-200 hover:bg-gray-400 text-center p-5 shadow-lg rounded-xl border-2 w-1/4">
                        <i className="fa-solid fa-file-pen text-4xl"></i>
                        <h1 className="text-3xl">APPWRITE BLOG</h1>
                        <p>Created a web-based ToDo application using React and Appwrite as the backend service.</p>
                        <br/>
                        <br/>
                        <div>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal1(true)}
                            >
                                Show more...
                            </button>
                            {showModal1 ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div
                                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div
                                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold text-center">
                                                        APPWRITE BLOG
                                                    </h3>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <h2 className="text-2xl font-bold">Description</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Created a web-based ToDo application using React and Appwrite as
                                                        the backend service.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Technologies Used</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        React, Appwrite, JavaScript, HTML/CSS.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Responsibilities</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Developed user interface, integrated Appwrite for data storage
                                                        and authentication, implemented task management features,
                                                        ensured performance and security.
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div
                                                    className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-red-600 outline-red-700 text-white active:bg-white hover:bg-opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal1(false)}
                                                    >
                                                        Go Back
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div
                        className="space-y-3 bg-slate-200 hover:bg-gray-400 text-center p-5 shadow-lg rounded-xl border-2 w-1/4 ">
                        <i className="fa-solid fa-list-check text-4xl"></i>
                        <h1 className="text-3xl">MICROSERVICES MANAGEMENT</h1>
                        <p>Developed microservices using different services to remove monolithic
                            architecture.
                        </p>
                        <br/>
                        <div>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal2(true)}
                            >
                                Show more...
                            </button>
                            {showModal2 ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div
                                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div
                                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold text-center">
                                                        MICROSERVICES MANAGEMENT
                                                    </h3>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <h2 className="text-2xl font-bold">Description</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Developed microservices on backend using different services to
                                                        remove monolithic architecture.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Technologies Used</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Java, SpringBoot, Microservices, SpringSecurity, Maven, PostMan,
                                                        SQL.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Responsibilities</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Developed multiple services which are connected with each other
                                                        by using API Gateway, Fault Tolerance and Spring Security,
                                                        ensured code quality and performance.
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div
                                                    className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-red-600 outline-red-700 text-white active:bg-white hover:bg-opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal2(false)}
                                                    >
                                                        Go Back
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div
                        className="space-y-3 bg-slate-200 hover:bg-gray-400 text-center p-5 shadow-lg rounded-xl border-2 w-1/4">
                        <i className="fa-solid fa-phone-volume text-4xl"></i>
                        <h1 className="text-3xl">SMART CONTACT MANAGER</h1>
                        <p>Created a web application to save and manage contacts securely online.</p>
                        <br/>
                        <div>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal3(true)}
                            >
                                Show more...
                            </button>
                            {showModal3 ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div
                                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div
                                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold text-center">
                                                        SMART CONTACT MANAGER
                                                    </h3>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <h2 className="text-2xl font-bold">Description</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Created a web application to save and manage contacts securely
                                                        online.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Technologies Used</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Java, Spring Boot, MySQL, HTML/CSS, JavaScript.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Responsibilities</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Developed backend services, designed user interface, implemented
                                                        CRUD operations, ensured data security.
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div
                                                    className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-red-600 outline-red-700 text-white active:bg-white hover:bg-opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal3(false)}
                                                    >
                                                        Go Back
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>

                    <div
                        className="space-y-3 bg-slate-200 hover:bg-gray-400 text-center p-5 shadow-lg rounded-xl border-2 w-1/4">
                        <i className="fa-solid fa-indian-rupee-sign text-4xl"></i>
                        <h1 className="text-3xl">CURRENCY CONVERTER</h1>
                        <p>Created a web application to convert the currencies of a type into another with the help of
                            APIs.</p>
                        <br/>
                        <br/>
                        <div>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal4(true)}
                            >
                                Show more...
                            </button>
                            {showModal4 ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div
                                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div
                                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold text-center">
                                                        CURRENCY CONVERTER
                                                    </h3>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <h2 className="text-2xl font-bold">Description</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Created a web application to convert the currencies of a type
                                                        into another with the help of APIs.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Technologies Used</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        HTML,CSS,JavaScript,React.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Responsibilities</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Contains currency data of all countries due to which it is
                                                        capable to convert any country currency value into other
                                                        currency value.
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div
                                                    className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-red-600 outline-red-700 text-white active:bg-white hover:bg-opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal4(false)}
                                                    >
                                                        Go Back
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>

                    <div
                        className="space-y-3 bg-slate-200 hover:bg-gray-400 text-center p-5 shadow-lg rounded-xl border-2 w-1/4">
                        <i className="fa-solid fa-box text-4xl"></i>
                        <h1 className="text-3xl">PRODUCT MANAGER</h1>
                        <p>Created a web application which gives details about the product with the help of BackEnd.</p>
                        <br/>

                        <br/>
                        {/*<a className="px-3 py-2 bg-orange-500 rounded shadow hover:bg-white">Show more...</a>*/}
                        {/* Modal begins here */}
                        <div>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal5(true)}
                            >
                                Show more...
                            </button>
                            {showModal5 ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div
                                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div
                                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold text-center">
                                                        PRODUCT MANAGER
                                                    </h3>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <h2 className="text-2xl font-bold">Description</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Created a web application which gives details about the product
                                                        with the help of BackEnd.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Technologies Used</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Spring,SpringBoot,React,JavaScript.
                                                    </p>
                                                    <h2 className="text-2xl font-bold">Responsibilities</h2>
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        Both frontEnd and BackEnd plays role in this projec.We can add
                                                        data to database and can also fetch that data which is shown in
                                                        FrontEnd.
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div
                                                    className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-red-600 outline-red-700 text-white active:bg-white hover:bg-opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal5(false)}
                                                    >
                                                        Go Back
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div></div>
                    {/* Aisa krne se hum spacing manage kr skte hain...*/}
                </div>
                <div className="justify-center items-center text-center mt-8 underline">
                    <a href="https://github.com/AyushMer44" className="text-2xl font-semibold hover:text-red-500">
                        Click here for Project Source Code !
                    </a>
                </div>
            </div>
        </>
    )
};

export default Projects;