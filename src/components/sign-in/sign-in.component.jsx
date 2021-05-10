import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form -input/form-input.compnent";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";



class SignIn extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        };


    }

    handleSubmit =  event => {
          
       event.preventDefault();
       this.setState({email: "", password: ""})
    };

    handleChange = event => {
       
        const {value, name} = event.target;

        this.setState({[name]:value})
    };

    googleSignIn = event => {
        event.preventDefault();
        signInWithGoogle();
        
    }

    render () {

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form> 
                    <FormInput
                         name="email"
                         type="email"
                         value={this.state.email}
                         required
                         label ="email"
                         handleChange={this.handleChange}
                         />

                    

                    <FormInput
                         name="password"
                         type="password"
                         value={this.state.password}
                         required
                         label="password"
                         handleChange={this.handleChange}
                          />

                    
                <div className="buttons">
                    <CustomButton
                        onClick = {this.handleSubmit}
                        type="submit"
                        >
                        Sign In   
                    </CustomButton>
                    <CustomButton
                        onClick = {this.googleSignIn}
                        isGoogleSignIn
                        type="button"    
                        >
                        Sign In With Google  
                    </CustomButton>
                </div>
                </form>

            </div> 

        )


    }

}

export default SignIn;