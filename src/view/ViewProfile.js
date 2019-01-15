import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

class ViewProfile extends React.Component {

  render() {
  return (
    
      <div className="container">
        <h2 style={{textAlign:"center"}}> View User Profile</h2>
        <div className="image_div1" style={{textAlign:"center"}}>
            <div className="imh">
              <img src={this.props.editList.image} style={{height:"43px"}} alt=""/>
            </div>
        </div>
        <div style={{textAlign:"center" ,padding:"5px"}}>
            <input type="text" name="firstname" value={this.props.editList.name} disabled="true"/>
        </div>
        <div style={{textAlign:"center" , padding:"5px"}}>
           <input type="text" name="firstname" value={this.props.editList.designation} disabled="true"/>
        </div>

        <div style={{textAlign:"center" , padding:"5px"}}>
            <input type="text" name="firstname" value={this.props.editList.email} disabled="true"/>
        </div>
        <div style={{textAlign:"center" , padding:"5px"}}>
        <NavLink
             to={"/UserProfile"}
             href=""
              >
             Back
        </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    editList: state.commonReducer.editList,
    profileList: state.commonReducer.profileList
    
});

export default connect(mapStateToProps, null)(ViewProfile);