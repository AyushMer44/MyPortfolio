import Background from "../assets/guille-pozzi-sbcIAn4Mn14-unsplash.jpg"

const Links=()=>{
    return(
        <div className="Main-Container text-white text-center border-2" style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "contain"
        }}>
            <div className="mt-7">
                <h1 className="text-4xl underline">Have a Project to Discuss ?</h1>
                <a href="https://wa.link/t32gkh" className="text-xl mt-6 border-2 inline-block w-1/6 hover:bg-gray-600 items-center rounded-lg">CONTACT ME!!!</a>

                <div className="icons-container flex space-x-4 mt-7 justify-center mb-2">
                    <a href="https://github.com/AyushMer44"
                        className=" hover:bg-violet-950 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 text-white">
                        <i className="fa-brands fa-github text-4xl"></i>
                    </a>

                    <a href="https://leetcode.com/u/AYUSHMER/"
                        className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 text-white">
                        {/*<i className="cib-leetcode text-4xl"></i>*/}
                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3521542-2944960.png?f=avif&w=256" alt="LeetCode"/>
                    </a>

                    <a href="https://www.instagram.com/ayush.mer?igsh=OTg2b3E0c2Njczdn"
                        className=" hover:bg-pink-800   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 text-white">
                        <i className="fa-brands text-4xl  fa-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/ayush-mer-737379226/"
                        className=" hover:bg-blue-800  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 text-white">
                        <i className="fa-brands text-4xl  fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <div className="text-left ml-2">
                <p>Contact :- 8979571256</p>
                <p>Email :- ayushmer5@gmail.com</p>
            </div>
        </div>
    )
}

export default Links;