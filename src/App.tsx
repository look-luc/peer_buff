import React from 'react';
import './App.css';
import Header from './header/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='home'>
        <h1>
          About Peer Buff
        </h1>
        <p className='statement'>
          We are a located at [placeholder].  You can pop on in during [placeholder time] to hang out and/or do homework, or if you need to talk to somebody, there are volunteers and Buff Leads during these times.  During [off hours placeholder], if there is anything going on and cannot wait to talk to someone during our pop in hours, we have Buff Leads on call that you can come in and talk.
        </p>
        <p className='statement'>
          We believe that no one has to struggle alone or go through what every you are going through by yourself.  We are aware that Peer Support can not be enough so we can provide some resources that might be helpful.
        </p>
      </div>
    </div>
  );
}

export default App;
