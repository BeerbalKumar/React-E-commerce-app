import React from 'react'
import ControlledCarousel from './../../Components/Slider/slider'
import Chips from './../../Components/Chips/chips'
import RecipeReviewCard from './../../Components/cards/cards'
import Grid from '@material-ui/core/Grid';
import image from './../../images/2017-07-0515-01-58.jpg'
import image1 from './../../images/c06160023_1750x1285.jpg'
import Appbar from './../../Components/Appbar/appbar';
import firebaseApp from './../../Config/Firebase/firebase'
import FooterPagePro from './../../Components/Footer/footer';




 

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            myCart:[],
            products:[]
        }
    }
    componentDidMount(){
        if(JSON.parse(localStorage.getItem("myCart"))){
            this.setState({
                myCart:JSON.parse(localStorage.getItem("myCart")),
            })
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

        return(
            <div>
        <Appbar myCart={this.state.myCart} path={this.props.history}/>        

      <ControlledCarousel/>
      <br/>
      <br/>
      <br/>
      <br/>
            <Chips/>
            <br/>
      <br/>
      <br/>
     {/* <center> <h3>Products</h3></center> */}
     {
this.state.products.map((val,i)=>{
    return(
        <RecipeReviewCard
        about={val.productDescription}
        title={val.productName}
        onClick={this.props.history}
        image={val.productImage}
        price={val.productPrice}
/>
    )
})

        }


<FooterPagePro />


            </div>
        )
    }
}