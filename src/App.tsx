import {
  About,
  Blog,
  Careers,
  Cases,
  Contact,
  Error404,
  Home,
  Services,
} from 'pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RouterLayout } from 'RouterLayout/RouterLayout';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<RouterLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
