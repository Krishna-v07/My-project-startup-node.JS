 import React from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

 
 
  
  
 import {Route,Switch,Redirect} from 'react-router-dom'
 import Home from './Home';
 import About from './About';
 import ContactUs from './ContactUs';
 import Services from './Services';
 import Navebar from './Navebar'


 const App=()=>{
   return(
      <>
       <Navebar/>
       <Switch>
          <Route  exact path="/" component={Home} />
          <Route  exact path="/About" component={About} />
          <Route  exact path="/ContactUs" component={ContactUs} />
          <Route  exact path="/Services" component={Services} /> 
          <Redirect to="/" />
       </Switch> 
      </>

   )
 }

 export default App;