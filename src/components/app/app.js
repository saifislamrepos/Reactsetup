import React, { Component } from 'react';
import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import Text from '../text/text.js'
import appcss from './app.scss';
class App extends Component{
   state = {
      config : {name:'saif'}
   }
   render(){
      return(
         <div>
            <Header/>
            <Text/>
            <Footer/>
         </div>
      );
   }
}
export default App;