import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Grid from '@material-ui/core/Grid';

class FormPage extends React.Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    login=()=>{
      let {email,password} = this.state;
      let data = {
        email,
        password
      }
      if(email==="beerbal@thar.com"&&password==="admin@123"){

        localStorage.setItem('loginData',JSON.stringify(data))
        this.props.history.push("/admin")
      }
      else{
        alert("fill the field")
      }
    }
    render(){

        return (
            // <Grid container justify="center">
            // <Grid item xs={12} sm={12} md={12} lg={}>
            <MDBContainer >
              <br/><br/>
      <MDBRow center>
        <MDBCol md="6" lg={6} style={{
            // marginLeft:"25%"
        }}>
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h1 text-center py-4">Log In</p>
                <div className="grey-text">

                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e)=>this.setState({
                        email:e.target.value
                    })}
                    />

                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={(e)=>this.setState({
                        password:e.target.value
                    })}
                    />
                </div>
                <div className="text-center py-4 mt-3">
 
                      
      <button 
      class="btn waves-effect waves-light"
      style={{
          backgroundColor:"#59b8af",
          color:"#fff",
          width:"200px"
        }} 
        onClick={()=>this.login()}
        >
    Login
    </button>
    
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br/>
    </MDBContainer>
//     </Grid>

// </Grid>
);
}
};

export default FormPage;