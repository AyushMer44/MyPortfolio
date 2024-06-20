import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Links from "./components/Links.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/*<h1>Welcome to my Portfolio.</h1>*/}
        <Header/>
        {/*<button className="bg-orange-600 text-white px-4 py-1 rounded-full shadow-lg">Hire Me!</button>*/}
        <Banner/>
        <Skills/>
        <Projects/>
        <Links/>
    </>
  )
}

export default App
