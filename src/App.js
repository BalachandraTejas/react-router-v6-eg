import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import BlogContent from './Components/BlogContent';
// import Subscription from './Components/Subscription';
// import Confirmation from './Components/Confirmation';

import "./App.css";

function App() {
  const getActiveClass = ({ isActive }) => ( isActive ? "active" : null )
  return (
    <div className="App">
      <nav>
        <NavLink className={getActiveClass} to="/">Home</NavLink>
        <NavLink className={getActiveClass} to="about">About</NavLink>
        <NavLink className={getActiveClass} to="blog">Blog</NavLink>
        {/* <Link to="subscribe">Subscription</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />}>
          <Route path=":blogId" element={<BlogContent />} />
          <Route index element={<h2>Select a topic</h2>} />
        </Route>
        {/* <Route path="/subscribe" element={<Subscription />} />
        <Route path="/confirmed" element={<Confirmation />} /> */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
