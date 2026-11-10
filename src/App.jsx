import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Resume from './pages/Resume';
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/about" element={<About/>}/><Route path="/resume" element={<Resume/>}/><Route path="*" element={<div className="container missing"><h1>Page not found.</h1><a href="/">Go home</a></div>}/></Routes></Layout>}
