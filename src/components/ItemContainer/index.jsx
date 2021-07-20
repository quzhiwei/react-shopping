import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import Items from "./Items";
import './index.css'

class ItemContainer extends Component {
  state = {
    items : [
      {_id:nanoid(),imgsrc:"",title:'1',numberSold:'2'},
      {_id:nanoid(),imgsrc:"",title:'2',numberSold:'3'},
      {_id:nanoid(),imgsrc:"",title:'3',numberSold:'4'},
      {_id:nanoid(),imgsrc:"",title:'1',numberSold:'2'},
      {_id:nanoid(),imgsrc:"",title:'2',numberSold:'3'},
      {_id:nanoid(),imgsrc:"",title:'3',numberSold:'4'},
      {_id:nanoid(),imgsrc:"",title:'1',numberSold:'2'},
      {_id:nanoid(),imgsrc:"",title:'2',numberSold:'3'},
      {_id:nanoid(),imgsrc:"",title:'3',numberSold:'4'},
    ]

  }
  render() {
    return (
      <div>
        {
          this.state.items.map((item)=>{
            return <div key={item._id} className='itemForSell'><Items item={item}/></div>
          })
        }
      </div>
    );
  }
}

export default ItemContainer;