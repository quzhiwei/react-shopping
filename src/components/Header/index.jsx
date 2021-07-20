import React, {Component} from 'react';
import './index.css'
class Header extends Component {
  state = {
    loginStatus: false,
    list: [],
    loginAs: "member"
  }

  memberLogin = () =>{

  }
  render() {
    return (
      <div>
        <div id="headerLeft">
          <span>React 电商项目</span>
        </div>
        <div id="headerRight">
          {this.state.loginStatus === false &&
          <div>
            <span onClick={this.memberLogin}>用户登录</span> &nbsp;|&nbsp; <span>管理员登录</span>
          </div>}

          {this.state.loginStatus === true &&
          <div>
            {this.state.loginAs === 'admin' &&
            <div>
              您好，管理员
            </div>}
            {this.state.loginAs === 'member' &&
            <div>
              您好，用户
            </div>}
          </div>
          }

        </div>
      </div>
    );
  }
}

export default Header;