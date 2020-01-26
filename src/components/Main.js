import React from 'react';
import MainHeader from './main/MainHeader';
import Project from './main/Project';

class Main extends React.Component {
  render() {
    return(
      <main className="main">
        <div className="main__wrap">
          <MainHeader />
          <div className="main-contents">
            <Project />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;