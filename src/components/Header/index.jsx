import React, {Component} from 'react';
import {Modal,Button,Input,InputNumber} from 'antd'
import axios from "axios";
import PubSub from 'pubsub-js'
import {nanoid} from "nanoid";
import'./index.css'
class Header extends Component {
  state = {
    loginStatus: false,
    loginAs: "",
    userLogin : false,
    adminLogin : false,
    addItem:false,
    itemTitle:'',
    itemPrice:'',
    itemDescription:'',
  }

  userLogin = () => {
    this.setState({userLogin:true})
  }
  hideUserLogin = ()=>{
    this.setState({userLogin:false})
  }
  userLoginConfirm = () =>{
    this.setState({userLogin:false, loginStatus:true, loginAs:'user'})
  }

  adminLogin = ()=>{
    this.setState({adminLogin:true})
  }
  hideAdminLogin = ()=>{
    this.setState({adminLogin:false})
  }
  adminLoginConfirm = () =>{
    this.setState({adminLogin:false, loginStatus:true, loginAs:'admin'})
  }

  logout = ()=>{
    this.setState({loginStatus:false,loginAs:''})
  }

  //will publish to itemContainer
  addItemConfirm = ()=>{
    axios.post('/api/addItem',{_id:nanoid(), image:'pizza', sell:2, title:this.state.itemTitle, description: this.state.itemDescription,price:parseInt(this.state.itemPrice)}).then(
        res=> {
          PubSub.publish('addItem',{});
          this.hideAddItem();
        }
    )
  }

  addItem = ()=>{
    this.setState({addItem:true})
  }
  hideAddItem = ()=>{
    this.setState({addItem:false})
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
            <Button onClick={this.userLogin}>用户登录</Button> &nbsp;|&nbsp; <Button onClick={this.adminLogin}>管理员登录</Button>
            <Modal
                Title = "userLogin"
                visible={this.state.userLogin}
                onOk={this.userLoginConfirm}
                onCancel={this.hideUserLogin}
                okText="Confirm"
                cancelText="Cancel">
              <br/>
              <Input ref={c=>this.userUsername = c} placeholder="Enter your username"/>
              <br/><br/>
              <Input.Password ref={c=> this.userPassword = c} placeholder="Enter your username"/>
            </Modal>

            <Modal
                Title = "adminLogin"
                visible={this.state.adminLogin}
                onOk={this.adminLoginConfirm}
                onCancel={this.hideAdminLogin}
                okText="Confirm"
                cancelText="Cancel">
              <br/>
              <Input ref={c=>this.adminUsername = c} placeholder="Enter your username"/>
              <br/><br/>
              <Input.Password ref={c=> this.adminPassword = c} placeholder="Enter your username"/>
            </Modal>


          </div>}

          {this.state.loginStatus === true &&
          <div>
            {this.state.loginAs === 'admin' &&
            <div>
              您好，管理员
              <br/>
              <span onClick={this.addItem}>添加物品</span>
              <span onClick={this.logout}> 登出登录</span>

              <Modal
                  Title = "addItem"
                  visible={this.state.addItem}
                  onOk={this.addItemConfirm}
                  onCancel={this.hideAddItem}
                  okText="Confirm"
                  cancelText="Cancel">
                <br/>
                <Input onChange={e=>this.setState({itemTitle:e.target.value})}  placeholder="物品标题"/>
                <Input onChange={e=>this.setState({itemDescription:e.target.value})} placeholder="物品简介"/>
                <InputNumber min={1} max={10} defaultValue={3} onChange={val=>this.setState({itemPrice:val })} placeholder="物品价格" prefix="$"/>
              </Modal>
            </div>}
            {this.state.loginAs === 'user' &&
            <div>
              您好，用户
              <br/>
              <span onClick={this.logout}> 登出登录</span>
            </div>}
          </div>
          }

        </div>
      </div>
    );
  }
}

export default Header;