import React, { Component } from 'react';

class StickyNote extends Component {
  render() {
    return (
      <div className="StickyNote">
        <p className="StickyNote-title">{this.props.date}</p>
        <p className="StickyNote-message">{this.props.message}</p>
        <button onClick={() => this.props.onClick(this.props.number)}>X</button>
      </div>
    );
  }
}

export default StickyNote;
