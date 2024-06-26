import * as React from "react";
import { RouterProvider } from 'react-router-dom';
import router from './routes';

import './static/styles/App.css';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
