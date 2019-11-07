import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Home,Login,Signup,Shop,Contact,eCommercePage,Carts,Admin,Checkout,OutlinedTextFields,Dashboard,
    FormPage
} from './../../Containers'

export default class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route  path="/contact" component={Contact} />
                    <Route  path="/singleproduct" component={eCommercePage} />
                    <Route  path="/carts" component={Carts} />
                    {/* <Route path="/admin" component={Admin}/> */}
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/addproducts" component={OutlinedTextFields}/>
                    <Route path="/admin" component={Dashboard}/>
                    <Route path="/adminlogin" component={FormPage}/>






                </div>
            </Router>
        )
    }
}