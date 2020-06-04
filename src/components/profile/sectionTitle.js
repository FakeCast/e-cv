import React, { Component } from "react";

class sectionTitle extends Component {

  render() {
    return (
      <div className='section-title'>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default sectionTitle;