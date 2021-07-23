import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import Items from "./Items";
import store from "../../redux/store";

import './index.css'
import {refreshItem} from "../../redux/actions/itemAction";
import axios from "axios";

class ItemContainer extends Component {
  // state = {
  //   items: [
  //     {_id:nanoid(), image:'pizza', sell:2, title:'Pizza', description: 'some pizza',price:21},
  //     {_id:nanoid(), image:'pizza1', sell:22, title:'Pizza1', description: 'some other pizza',price:12},
  //     {_id:nanoid(), image:'pizza2', sell:32, title:'Pizza2', description: 'some more pizza', price:33},],
  // }

  getItemId = (_id)=>{
    console.log (_id)
  }

  componentDidMount() {
    this.refreshData()


    //subscribed from Header
    this.token = PubSub.subscribe('addItem',()=>{
      this.refreshData()
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  refreshData = () =>{
    axios.get('/api/getAllItems').then(res=>{
      store.dispatch(refreshItem(res.data))
    })
  }

  render() {
    return (
      <div>
        {
          store.getState().map((item)=>{
            return <div key={item._id} className='itemForSell' onClick={()=>this.getItemId(item._id)}><Items item={item}/></div>
          })
        }
      </div>
    );
  }
}

export default ItemContainer;