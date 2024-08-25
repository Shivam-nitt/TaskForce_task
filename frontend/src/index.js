import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClassAPage from './Components/Page1';
import ClassBPage from './Components/Page2';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AllPages = createBrowserRouter([
  {
    path:"/",
   element:<App/>
  },

  {
    path:"/ClassA",
    element:<ClassAPage/>
  },
  {
    path:"/ClassB",
    element:<ClassBPage/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={AllPages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
