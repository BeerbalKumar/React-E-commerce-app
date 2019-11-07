import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
// import SimpleRating from './Rating';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';
import Appbar from './../../Components/Appbar/appbar';


class CardExample extends React.Component {
    constructor(){
        super();
        this.state={
            count:0,
            myCart:[]
        }
    }
    addToCart=()=>{
     let{count,myCart} = this.state;
      let cart = {
          image:this.props.location.state.image,
          title:this.props.location.state.title,
          price:this.props.location.state.price,
          count:count
      }
      myCart.push(cart);
      this.setState({
          myCart:myCart
      })

      localStorage.setItem("myCart",JSON.stringify(myCart));
    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem("myCart"))){
            this.setState({
                myCart:JSON.parse(localStorage.getItem("myCart")),
            })
        }
    }
    render(){
     let{count,myCart} = this.state;
        return (
            <div>
        <Appbar myCart={myCart} path={this.props.history}/>        

        <div style={{ margin: "20px" }}>
              

            <Paper style={{ padding: 20, display: "flex" }}>
                <div style={{ marginRight: "10px" }}>
                    <img src={this.props.location.state.image} width="500" />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <h2>{this.props.location.state.title}</h2>
                    {/* <SimpleRating /> */}
                    <p>{this.props.location.state.description}</p>
                    <h3 style={{ color: "#59b8af" }}>Rs: {this.props.location.state.price}</h3>
                    <h3>Quantity:</h3>
                    <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "30%" }}>
                        <button onClick={() =>this.setState({count:count>0?count - 1:0})} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                        <h5 style={{ color: "#59b8af", marginTop: "2px" ,width:"10% ",textAlign:"center"}}>{count}</h5>
                        <button onClick={() =>this.setState({count:count + 1})} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                    </div>
                    <Button onClick={()=>this.addToCart()} size="large" style={{ color: "#fff", backgroundColor: "#59b8af", marginTop: "30px" }}>
                        <MdShoppingCart />Add to Cart
                    </Button>
                </div>
            </Paper>
        </div>
        </div>
    )
}
}

export default CardExample;