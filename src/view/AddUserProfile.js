import React, { Component } from "react";

class AddProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            designation:"",
            email:""
        }
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

     // @parm
     // I don't have api hence , i am redirecting to userprofile page

      save(){
        this.props.history.push('/UserProfile');
      }

      cancel(){
        this.props.history.push('/UserProfile');
      }

      handleChange(event){
          this.setState({name:event.target.name}, {designation:event.target.designation} , {email:event.target.email})
      }

  render() {
    return (
        
        <div className="container">
            <div className="user_form">

                    <h2 style={{textAlign:"center"}}> Add User Profile</h2>    
            
                <div style={{textAlign:"center" ,padding:"5px"}}>
                    <input type="text" name="name" placeholder="User Name" onChange={this.handleChange} 
                    disabled=""/>
                </div>
                <div style={{textAlign:"center" , padding:"5px"}}>
                     <input type="text" name="designation" placeholder="Designation" 
                    disabled=""/>
                </div>
                <div style={{textAlign:"center" , padding:"5px"}}>
                    <input type="email" name="email" placeholder="Email" 
                    disabled=""/>
                </div>
                <div style={{textAlign:"center" , padding:"5px"}}>
                        <button type="button" className="cancelBtn" onClick={this.save} >Save</button>
                        <button type="button" className="cancelBtn" onClick={this.cancel} >Cancel</button>
                </div>
            </div>
        </div>
    );
  }
}

export default AddProfile;