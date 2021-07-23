import React, {Component} from 'react';
import './index.css'
class Items extends Component {
  render() {
    const {image,title,sell,description,price} = this.props.item

    return (
      <div>
        <div className="itemImage">
          <img width={"248px"} height={'248px'} src={require(`./../../../img/${image}.jfif`).default} alt=""/>
        </div>
        <div className="itemDescription">
          <div className="title">
            <span className="titleLeft">{title}</span>
            <span className="titleRight">销量：{sell}</span>
            <br/>
            <span className="price">价格：${price}</span>
          </div>
          {description}
        </div>
      </div>
    );
  }
}

export default Items;