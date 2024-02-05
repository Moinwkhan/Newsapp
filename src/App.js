import './App.css';
import Form from './components/Form';
import About from './components/About';
import Contact from './components/Contact';
import News from './components/News';
import img from './image-web-3-desktop.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


function App() {
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={100}
        />
        <header id='header'>
          <h1>Welcome to Coding Central</h1>
          <p>Your one-stop destination for coding resources</p>
          <nav>
            <Link className='link1' id='linkheader' to="/">Home</Link>
            <Link className='link1' id='linkheader' to="/News">News</Link>
            <Link className='link1' id='linkheader' to="/Form">TextUtilite</Link>
            <Link className='link1' id='linkheader' to="/about">About</Link>
            <Link className='link1' id='linkheader' to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={
            <>
              <img id='img123' src={img} alt="" />
              <div>
                <div id="bright">
                  <h1 id="h1">
                    The Bright Future of Web 3.0?
                  </h1>
                </div>
                <div id="ques">
                  <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands
                    of the people. But is it really fulfilling its promise? </p>
                  <a className='btn btn-info' href="https://www.benjamindada.com/the-new-world-wide-web-evolution/" target='blank'>READ MORE</a>
                </div>
              </div>
            </>
          } />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/form' element={<loading />} />
          <Route exact path='/News' element={
            <News category="general" />
          } />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/News' element={<News key={"general"} category="general" />} />
          <Route exact path='/News/general' element={<News key={"general"} category="general" />} />
          <Route exact path='/News/sports' element={<News key={"sports"} category="sports" />} />
          <Route exact path='/News/entertainment' element={<News key={"entertainment"} category="entertainment" />} />
          <Route exact path='/News/health' element={<News key={"health"} category="health" />} />
          <Route exact path='/News/science' element={<News key={"science"} category="science" />} />
          <Route exact path='/News/technology' element={<News key={"technology"} category="technology" />} />
          <Route exact path='/News/business' element={<News key={"business"} category="business" />} />
        </Routes>
      </Router >
    </>
  );
}
export default App;