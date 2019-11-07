import React from 'react';
import Paper from '@material-ui/core/Paper';
import Appbar from './../../Components/Appbar/appbar';
import Grid from '@material-ui/core/Grid';



export default class Carts extends React.Component{
    constructor(){
        super();
        this.state={
            myCart:[]
        }
    }
    componentDidMount(){
        if(JSON.parse(localStorage.getItem("myCart"))){
            this.setState({
                myCart:JSON.parse(localStorage.getItem("myCart")),
            })
        }
    }
   deleteProduct=(i)=>{
       let {myCart} = this.state;
       myCart.splice(i,1);
       this.setState({
           myCart:myCart
       })
      let localData = JSON.parse(localStorage.getItem("myCart"));
      localData.splice(i,1);
      localStorage.setItem("myCart",JSON.stringify(localData))
   }

    render(){
        let {myCart} = this.state;
        // console.log(this.state.myCart.length)
        return(
            <div>
                <Appbar myCart={this.state.myCart} path={this.props.history}/>
                <br/>

    {   
  myCart.length?

      <div>
          <Grid container justify="center">
              <Grid item xs={12} sm={12} md={12} lg={10}>
      <Paper>
          <br/>
      <table class="table" >
      <tbody>
      <tr style={{
          backgroundColor:"#59b8af",
          color:"white"
      }}>
       
      <td style={{
          fontWeight:"bolder"
      }} scope="col">Image</td>
        <td style={{
          fontWeight:"bolder"
      }} scope="col">Product</td>
        <td style={{
          fontWeight:"bolder"
      }}scope="col">Price</td>
        <td style={{
          fontWeight:"bolder"
      }} scope="col">Quantity</td>
        <td style={{
          fontWeight:"bolder"
      }} scope="col">Cell</td>
        <td style={{
          fontWeight:"bolder"
      }} scope="col">Remove</td>
      </tr>
      </tbody>
    </table>
    {
myCart.map((val,i)=>{
    return(
        
<div class="table-responsive">
<table class="table">
    <tbody>
      <tr>
       
        <td scope="col"><img src={val.image} width="100px"/></td>
        <td scope="col">{val.title}</td>
        <td scope="col">{val.price}</td>
        <td scope="col">{val.count}</td>
        <td scope="col">Cell</td>
        <td scope="col">
        <button class="btn waves-effect waves-light" style={{
     backgroundColor:"#59b8af",
     color:"#fff",
 }} name="action"
 onClick={()=>this.deleteProduct(i)}
 >
    Remove
    </button>
        </td>
      </tr>

    </tbody>
    </table>
</div>




)
})
}

 </Paper>
 
 </Grid>

 </Grid>
 
 <button class="btn waves-effect waves-light" style={{
     backgroundColor:"#59b8af",
     color:"#fff",
     float:"right",
     marginRight:"110px",
     width:"200px"
 }} name="action"
 onClick={()=>this.props.history.push("/checkout")}
 >
    Checkout
    </button>
<br/><br/>
</div>
        :
        <div>

        </div>
    }

    

    <br/><br/>
            </div>
        )
    }
}
