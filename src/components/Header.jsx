import {useState} from "react";
import BannerWallpaper from "../assets/banner_wallpaper.svg";
import NavImage from "../assets/NAVBAR.jpg"
const Header = () => {

    const [brandName, setBrandName] = useState("Ayush Mer")
    const [menuLinks, setMenuLinks ] = useState([
        {
            title: "Home",
            link: "/home",
            id: 1
        },
        {
            title: "About",
            link: "/about",
            id:2
        },
        {
            title: "Skills",
            link: "/skills",
            id:3
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            id:4
        },
        {
            title: "Contact",
            link: "/contact",
            id:5
        }
    ])

    const [actionButton, setActionButton] = useState({
        title: "Hire Me",
        link: "https://www.linkedin.com/in/ayush-mer-737379226/"
    })
    
    return(
        <>
            <div className="h-14 border-2 main flex justify-between items-center px-14 bg-blue-600 bg-opacity-80">
                {/* Justify-Between mtlb childs ke beech mai space aa gyi hai... */}
                {/*<div>*/}
                {/*    /!*    Brand Logo  *!/*/}
                {/*    <h1 className="text-2xl font-bold">{brandName}</h1>*/}
                {/*</div>*/}

                <div className="flex">
                    {/*    Menu links  */}

                    {/*<a href="/home" className="hover:text-orange-600">*/}
                    {/*    Home*/}
                    {/*</a>*/}

                    {/*<a href="/about" className="hover:text-orange-600">*/}
                    {/*    Skills*/}
                    {/*</a>*/}

                    {/*<a href="/skills" className="hover:text-orange-600">*/}
                    {/*    Skills*/}
                    {/*</a>*/}

                    {/*<a href="/portfolio" className="hover:text-orange-600">*/}
                    {/*    Portfolio*/}
                    {/*</a>*/}

                    {/*<a href="/contact" className="hover:text-orange-600">*/}
                    {/*    Contact*/}
                    {/*</a>*/}

                    {/*{menuLinks.map(ayu => (*/}
                    {/*    <a key={ayu.id} href={ayu.link} className="hover:text-orange-600">*/}
                    {/*        {ayu.title}*/}
                    {/*    </a>*/}
                    {/*))}*/}

                    <div className="text-4xl mr-3 text-pink-400 text-opacity-55">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <h1 className="text-center text-4xl font-semibold text-white text-opacity-55">Portfolio</h1>


                </div>

                <div>
                {/*    Buttons  */}
                    <a href={actionButton.link} className="px-3 py-2 bg-pink-400 bg-opacity-55 text-white hover:bg-pink-300 shadow rounded-lg text-1xl">
                        {actionButton.title}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header;