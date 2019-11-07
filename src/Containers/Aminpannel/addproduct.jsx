import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PersistentDrawerLeft from './sidebar'
import firebaseApp from './../../Config/Firebase/firebase'





// const 



export default class OutlinedTextFields extends React.Component {
constructor(){
  super();
  this.state={
    values:{
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    },
    currencies : [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ],
      productName:"",
      productPrice:"",
      productImage:"",
      productCategory:"",
      productDescription:""
  }
}
handleChange = name => event => {
  let {values} = this.state;
 values.name=event.target.value
   this.setState({
     values:values
   })
};
addCatecogry=()=>{
  this.setState({
    productCategory:"bnddffbdfjkhfvb"

  })
}

     imageUpload(e){
    let fileName = e.target.files[0].name
       let ref = firebaseApp.storage().ref('/').child(`images/${fileName}`)
        let imagePut = ref.put(e.target.files[0])
        imagePut.on('state_changed',()=>{
            ref.getDownloadURL()
            .then((url)=>{
                this.setState({
                  productImage:url
                })
            })
        })
    } 
addProduct=()=>{
  firebaseApp.firestore().collection("Products").add({
  productName:this.state.productName,
  productPrice:this.state.productPrice,
  productImage:this.state.productImage,
  productCategory:this.state.productCategory,
  productDescription:this.state.productDescription,
})
}

componentDidMount(){
  if(JSON.parse(localStorage.getItem("loginData"))===null){
    this.props.history.push("/adminlogin")
    console.log("component")
  }
}
render(){
 console.log(this.state)
 let {values} = this.state;
 console.log(JSON.parse(localStorage.getItem("loginData")))
  return (
    <div>
    <PersistentDrawerLeft path={this.props.history} />
    <br/> <br/><br/>
    <Paper>
    <Grid container justify="center">
    <Grid item xs={10} sm={12} md={12} lg={5}>
      <br/><br/>
    <center>  <h2>Add Product</h2></center>
    <form noValidate autoComplete="off">
      

      
      <TextField

        id="outlined-full-width"
        label="Product Name"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={(e)=>this.setState({
          productName:e.target.value
        })}
      />

<TextField
        id="outlined-full-width"
        label="Price"
        // className={classes.textField}
        type="number"
        name="number"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        // style={{ margin: 8 }}
        fullWidth
        onChange={(e)=>this.setState({
          productPrice:e.target.value
        })}
        />
      <TextField
        id="outlined-number"
        type="file"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={this.imageUpload.bind(this)}
        />

<TextField
        fullWidth
        
        id="outlined-full-width"
        select
        label="Category"
        // className={classes.textField}
        onChange={this.handleChange('currency')}
        // SelectProps={{
        //   MenuProps: {
        //     className: classes.menu,
        //   },
        // }}
       
        margin="normal"
        variant="outlined"
        
        >
        {this.state.currencies.map(option => (
          <MenuItem key={option.value} value={option.value}
         onClick={()=>this.addCatecogry()}
          >
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        // id="outlined-multiline-static"
        label="Description"
        multiline
        rows="4"
        
        // className={classes.textField}
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={(e)=>this.setState({
          productDescription:e.target.value
        })}
        />




    </form>
    <center>
      <button class="btn waves-effect waves-light" style={{
        backgroundColor:"#59b8af",
        color:"#fff",
        width:"200px"
      }} name="action"
      onClick={()=>this.addProduct()}
      >
    Add
    </button>
    </center>
    </Grid>

</Grid>
<br/><br/>
</Paper>
</div>
  );
}
}
