import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className='experience-item'>
        <span className='experience-title'>{this.props.role} | {this.props.company} | {this.props.location}</span>
        <br />
        <span className='experience-period'>{this.props.period}</span>
        <br />
        <span className='experience-description'>{this.props.description}</span>
        <ul>
          {this.props.achievements.map((achievement, index) => (
            <li key={index}>
              {achievement}
            </li>
          ))}
        </ul>
      </div >
    )
  }
}

export default Experience;