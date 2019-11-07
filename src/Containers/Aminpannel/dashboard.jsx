import React from 'react'
import PersistentDrawerLeft from './sidebar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import firebaseApp from './../../Config/Firebase/firebase'



export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        if(JSON.parse(localStorage.getItem("loginData"))===null){
          this.props.history.push("/adminlogin")
          console.log("component")
        }

        let {products} = this.state
        firebaseApp.firestore().collection("Products").get().then((firestoreData)=>{
            firestoreData.forEach((doc)=>{
                // console.log(doc.data())
                products.push(doc.data());
                this.setState({
                    products:products
                })
            })
        })
    }
    render(){
        console.log(JSON.parse(localStorage.getItem("loginData")))
        return(
            <div>
                <PersistentDrawerLeft path={this.props.history}/>
                <br/><br/><br/><br/>
                <h3>Dashboard</h3>
                <div>
          <Grid container justify="center">
              <Grid item xs={10} sm={12} md={12} lg={10}>
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
        {/* <td style={{
          fontWeight:"bolder"
      }} scope="col">Quantity</td> */}

        <td style={{
          fontWeight:"bolder"
      }} scope="col">Remove</td>
      </tr>
      </tbody>
    </table>
    {
this.state.products.map((val,i)=>{
    return(
        
<div class="table-responsive">
<table class="table">
    <tbody>
      <tr>
       
        <td scope="col"><img src={val.productImage} width="40px"/></td>
        <td scope="col">{val.productName}</td>
        <td scope="col">{val.productPrice}</td>
        {/* <td scope="col">{val.productCategory}</td> */}
        <td scope="col">
        <button class="btn waves-effect waves-light" style={{
     backgroundColor:"#59b8af",
     color:"#fff",
     width:"3px"
 }} name="action"
//  onClick={()=>this.deleteProduct(i)}
 >
      <i style={{
          width:"5px"
      }} class="far fa-edit"></i>
      
    </button>
    <button class="btn waves-effect waves-light" style={{
     backgroundColor:"#59b8af",
     color:"#fff",
     width:"3px"
 }} name="action"
//  onClick={()=>this.deleteProduct(i)}
 >
      
      <i style={{
          width:"5px"
      }} class="fas fa-times"></i>
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
 

</div>
            </div>
        )
    }
}