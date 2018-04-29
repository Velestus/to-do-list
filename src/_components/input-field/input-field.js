import React, { Component } from 'react';

class InputField extends Component {
    render() {
    return (
      <div className="InputField">
        <form onSubmit={(event) => this.props.onClick(event)} autocomplete="off">
          <input type="text" id="NewNote" placeholder="Write your note here (max 100 characters)" maxlength="100"/>
          <input type="submit" value="Add new Note!"/>
        </form>
      </div>
    );
  }
}

export default InputField;
