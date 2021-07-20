import React, {Component} from 'react';
import './index.css'
class SidePanel extends Component {
  render() {
    return (
      <div>
        <div id="sidePanelFilters">
          <span>筛选</span>
          <br/>
          <div id="priceFilter">
            <span>价格：</span> <br/>
            <input type="number"/> - <input type="number"/>
          </div>
          <br/>
          <div id="rateFilter">
            <span><p>评分：</p></span>
            <span><p>一星以上</p></span>
            <span><p>二星以上</p></span>
            <span><p>三星以上</p></span>
            <span><p>四星以上</p></span>
          </div>
          <br/>

          <span>价格从高到低 <br/></span>
          <span>价格从低到高 <br/></span>
        </div>
      </div>
    );
  }
}

export default SidePanel;