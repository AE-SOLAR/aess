// import * as React from "react";
// import { RouterProvider } from 'react-router-dom';
// import router from './routes';

// import './static/styles/App.css';

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Sale from './pages/Sale/Sale.jsx';
// import './App.css';
import Solar_panels from './pages/Solar_panels/Solar_panels.jsx';
import Invertors from './pages/Solar_panels/Solar_panels.jsx';
import Home_storage from './pages/Home/Home.jsx';
import Accessories_electrical from './pages/Accessories_electrical/Accessories_electrical.jsx';
import Blog from './pages/Blog/Blog.jsx';
import News from './pages/News/News.jsx';
import Shipping from './pages/Shipping/Shipping.jsx';
import Payments from './pages/Shipping/Shipping.jsx';
import Help from './pages/Help/Help.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';
// import Home from './components/Page/Home/Home';  - hellp with this imports (dont wokrk)

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path="/sale" element={<Sale />} />
        <Route path='/solar-panels' element={<Solar_panels />} />
        <Route path='/invertors' element={<Invertors />} />
        <Route path='/home-storage' element={<Home_storage />} />
        <Route path='/accessories-electrical' element={<Accessories_electrical />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/news' element={<News />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/help' element={<Help />} />
        <Route path='/favorites' element={<Favorites />} />

      </Routes>
      <Footer className="footer"/>
    </Router>
  );
}

export default App;
