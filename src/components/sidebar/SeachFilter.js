import React from 'react';

class SeachFilter extends React.Component {
  render() {
    return(
      <div className="seach-filter">
        <div className="seach-filter__selector">エンジニア<i className="fas fa-angle-down fa-lg"></i></div>
        <div className="seach-filter__selector">中途採用<i className="fas fa-angle-down fa-lg"></i></div>
      </div>
    );
  }
}

export default SeachFilter;