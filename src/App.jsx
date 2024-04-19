import './App.css';

import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';

import Home from "./components/pages/Home";
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";

export default function App() {
  return (
    <>
    <Layout>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/portfolio" element = {<Portfolio/>}/>
          <Route path="/skills" element = {<Skills/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
      </Layout>
    </>
  )
}