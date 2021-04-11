
import React from 'react';
import $ from 'jquery'; 

import { Preloader } from "../preloader/Preloader";
import { Wrapper } from "../wrapper/Wrapper";

class App extends React.Component{

  componentDidMount() {
    
    // PRELOADER
        $("body").toggleClass("loaded");
        setTimeout(function() {
            $("body").addClass("loaded");
        }, 3000);
    
  }

  render (){
    return (
      <div className="App">
        <Preloader />
        <Wrapper />
      </div>
    )
  }

}

export default App;
