import React, {Component} from 'react';
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import ItemContainer from "./components/ItemContainer";
import './App.css'
class App extends Component {
    render() {
        return (
            <div>
                <div id='header'>
                    <Header/>
                </div>
              <div id="body">
                <div id="sidePanel">
                  <SidePanel/>
                </div>
                <div id="content">
                  <ItemContainer/>
                </div>
              </div>


            </div>
        );
    }
}

export default App;