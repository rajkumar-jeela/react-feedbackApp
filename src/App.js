import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Pages from './components/Pages'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/pages" component={Pages} />
      <Route path="/contact" component={Contact} />
    </Routes>
  </BrowserRouter>
)

export default App
