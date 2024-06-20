import BannerImage from "../assets/photogrid.photocollagemaker.photoeditor.squarepic_20236231036757.png"
import BannerWallpaper from "../assets/banner_wallpaper.svg"
import {Typed} from "react-typed";
import {useEffect, useRef} from "react";

const Banner=()=>{

    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer","Java Developer","Tech Enthusiast"],
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);

    return (
    <div className="main-container flex items-center" style={{
        backgroundImage: `url(${BannerWallpaper})`,
        backgroundSize: "cover"
    }}>
        {/* First Container */}
        <div className="w-full items-center flex justify-center">
        {/*    Text Container  */}
            <div className="w-2/3">
                <h3 className="text-3xl font-semibold">Hi, my name is</h3>
                <h1 className="mt-3 text-5xl font-bold">Ayush Mer.</h1>
                <h2 className="mt-3 text-3xl font-semibold">I am a <span ref={el}></span>.</h2>
                <p className="mt-3">I am a Computer Science student at Bipin Tripathi Kumaon Institute of Technology
                    with a strong focus on Java development. Continuously improving coding skills
                    and logic, and enthusiastic about software technology. Experienced in Java, Data Structures and
                    Algorithms, Web Development and also with various Advanced Java Technologies.
                </p>

                <br/>

                <div className="icons-container flex space-x-4 mt-2">
                    <a href="https://wa.link/t32gkh"
                        className=" hover:bg-green-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 text-white">
                        <i className="fa-brands text-4xl fa-whatsapp"></i>
                    </a>

                    <a href="https://www.instagram.com/ayush.mer?igsh=OTg2b3E0c2Njczdn"
                        className=" hover:bg-pink-700   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 text-white">
                        <i className="fa-brands text-4xl  fa-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/ayush-mer-737379226/"
                        className=" hover:bg-blue-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 text-white">
                        <i className="fa-brands text-4xl  fa-linkedin-in"></i>
                    </a>
                </div>

        </div>
    </div>

    {/* Second Container */
    }

    <div className="w-full flex justify-center">
        {/*    Image Container  */}
        <img className="rounded-full my-2 shadow-lg size-2/4" src={BannerImage} alt="This is your image."/>
    </div>
</div>
)
};

export default Banner;