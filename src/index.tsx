import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Mission from './content/mission';
import People from './content/people';
import Acknowledges from './content/acknowledge';
import Contact from './content/contact';
import Join from './content/join';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/Mission' element={<Mission/>}/>
        <Route path='/Our Team' element={<People/>}/>
        <Route path='/Acknowledgement' element={<Acknowledges/>}/>
        <Route path='/Join our team' element={<Join/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
