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
import { Route, Routes } from 'react-router-dom';
import { RouterLayout } from 'RouterLayout/RouterLayout';

function App() {
  return (
    <Routes>
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
  );
}

export default App;
