import React, {Component} from 'react';

class MemberLoginForm extends Component {
  render() {
    return (
        <div>
          <div id="memberLoginForm">
            <div id="memberLoginFormLeft">
              this is img
            </div>
            <div id="memberLoginFormRight">
              <form>
                <span><label htmlFor="username">Username:</label> <input type="text" id='username'/></span>
                <span><label htmlFor="password">Username:</label> <input type="password" id='password'/></span>
                <span><label htmlFor="email">Username:</label> <input type="email" id='email'/></span>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default MemberLoginForm;