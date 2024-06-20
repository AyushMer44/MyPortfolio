import BannerBackground from "../assets/paul-hanaoka-rYchmOEzWlo-unsplash.jpg"

const Skills=() => {
    return(
        <>
            <div className="main-container py-10 bg-gray-600 bg-opacity-20 backdrop-blur-3xl" style={{
                // backgroundImage: `url(${BannerBackground})`
            }}>
                <h1 className="text-center pb-16 text-4xl underline font-bold">MY SKILLS</h1>

                <div className="space-x-5 mt-2">
                {/*    Image Container  */}
                {/*    <div className="w-full flex justify-center">*/}
                {/*        <img className="size-2/4" src={bannerImage} alt="This is banner Image."/>*/}
                {/*    </div>*/}

                {/*    Text Container  */}
                    <div className="w-full text-2xl font-semibold space-x-5 mt-2">
                        {/*<ul className="flex flex-col justify-center w-full h-screen p-4">*/}
                        {/*    <li className="rounded-lg bg-white p-4 text-sm text-gray-900">*/}
                        {/*        List item 1*/}
                        {/*    </li>*/}
                        {/*    <li className="rounded-lg bg-white p-4 text-sm text-gray-900">*/}
                        {/*        List item 2*/}
                        {/*    </li>*/}
                        {/*    <li className="rounded-lg bg-white p-4 text-sm text-gray-900">*/}
                        {/*        List item 3*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <div>
                            <div className="icons-container flex items-center space-x-14 mt-2">
                                <h1 className="underline ml-5 hover:text-gray-500">PROGRAMMING LANGUAGES : </h1>
                                <div className="justify-center space-x-5 mt-2">
                                    <i className="devicon-java-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-html5-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-css3-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-javascript-plain colored text-8xl"></i>
                                    <i className="fa-solid fa-c text-8xl"></i>
                                    <i className="devicon-azuresqldatabase-plain colored text-8xl"></i>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="icons-container flex items-center space-x-14 mt-2">
                                <h1 className="underline hover:text-gray-500">FRAMEWORKS/TECHNOLOGIES : </h1>
                                <div className="justify-center space-x-5 mt-2">
                                    <i className="devicon-spring-original-wordmark colored text-8xl"></i>
                                    <i className="devicon-hibernate-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-react-original-wordmark colored text-8xl"></i>
                                    <i className="devicon-bootstrap-plain-wordmark text-8xl"></i>
                                    <i className="devicon-xml-plain colored text-8xl"></i>
                                    <i className="devicon-postman-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-tomcat-line-wordmark colored text-8xl"></i>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="icons-container flex items-center space-x-80 mt-2">
                                <h1 className="underline hover:text-gray-500">TOOLS : </h1>
                                <div className="justify-center space-x-5 mt-2">
                                    <i className="devicon-github-original-wordmark colored text-8xl"></i>
                                    <i className="devicon-maven-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-intellij-plain colored text-8xl"></i>
                                    <i className="devicon-eclipse-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-vscode-plain-wordmark colored text-8xl"></i>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="icons-container flex items-center space-x-80 mt-2">
                                <h1 className="underline space-x-5 mt-2 hover:text-gray-500">DATABASES : </h1>
                                <div className="justify-center space-x-5 mt-2">
                                    <i className="devicon-mysql-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-postgresql-plain-wordmark colored text-8xl"></i>
                                    <i className="devicon-mongodb-plain-wordmark colored text-8xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills;