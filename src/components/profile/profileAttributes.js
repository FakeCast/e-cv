import React, { Component } from "react";

class profileAttributes extends Component {
  render() {
    return (
      <div className='profile-attribute'>
        <span className="attribute-title">{this.props.title}</span>
        <br />
        <span className="attribute-data">{this.props.data}</span>
      </div>
    )
  }
}

export default profileAttributes;