import React, { Component } from "react";
import {map as _map} from 'lodash'
import { connect } from 'react-redux';
import { getProfileList , editedListInfo} from '../service/common/action.js';

class Profile extends Component {
  constructor(props){
    super(props)
    this.getListInfo = this.getListInfo.bind(this);
    this.addProfile = this.addProfile.bind(this);
    
  }
  componentDidMount(){
    this.props.getProfileList()
  }

  getListInfo (lst){
    this.props.editedListInfo(lst)
    this.props.history.push('/ViewProfile');
  }

  addProfile(){
    this.props.history.push('/AddUserProfile'); 
  };
  
  render() {
  
  
  return (
    
      <div className="container">
        <div className="addProfile">
            <button  onClick={this.addProfile} type="button">
                                        Add Profile
                                      </button>
        </div>

     
       {_map(this.props.profileList, (opt, index) => (

          <div className="div_container">
            <div className="image_div">
              <div className="imh">
              <img src={opt.image} style={{height:"43px"}} alt=""/>
              </div>

            </div>
            <div>
              <div className="title_one"> {opt.name}</div>
              <div className="title_two"> {opt.designation}</div>
              <div className="title_three"> {opt.email}</div>
            </div>
            <hr></hr>
            <div>
              <div className="message_section">
                   message
              </div>
              <div className="profile_section">
                <div  onClick={() => this.getListInfo(opt)} >
                                        view Profile
                                      </div>
               
                </div>
            </div>
          </div>
                    
      ))}
  
      </div>
    );
  }
}

// export default Profile;

const mapStateToProps = (state) => ({
  profileList: state.commonReducer.profileList
});

const mapDispatchToProps = dispatch => ({
  getProfileList: () => dispatch(getProfileList()),
  editedListInfo:(lst) =>dispatch(editedListInfo(lst))

});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);