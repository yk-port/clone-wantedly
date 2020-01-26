import React from 'react';
import Header from './Header';
import Feature from './Feature';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <div>
      <Header />
      <Feature />
      <div id="main-contents">
        <div className="container">
          <div className="contents">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
