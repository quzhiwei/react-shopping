import React, {Component} from 'react';
import './index.css'
class Items extends Component {
  render() {
    return (
      <div>
        <div className="itemImage">
          image goes here...
        </div>
        <div className="itemDescription">
          Description goes here
        </div>
      </div>
    );
  }
}

export default Items;