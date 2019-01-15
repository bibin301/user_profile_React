import axios from "axios";
import actionType from "./actionTypes";


const listData =[{
  "id":"1",
  "name": "sadman",
  "designation":"UI/UX Designer",
  "email":"sudman@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"


},{
  "id":"2",
  "name": "Akash",
  "designation":"UI/UX Designer",
  "email":"akash@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"

},
{
  "id":"3",
  "name": "danie",
  "designation":"UI/UX Designer",
  "email":"sarkar@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"
},
{
  "id":"4",
  "name": "vijay",
  "designation":"React js Developer",
  "email":"vijay@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"
},
{
  "id":"5",
  "name": "Bibin",
  "designation":"React js Developer",
  "email":"bibin@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"

},{
  "id":"6",
  "name": "Anto",
  "designation":"UI/UX Designer",
  "email":"anto@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"

},
{
  "id":"7",
  "name": "Antony",
  "designation":"UI/UX Designer",
  "email":"antony@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"
},
{
  "id":"8",
  "name": "Tamil",
  "designation":"UI/UX Designer",
  "email":"tamil@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"
},
{
  "id":"9",
  "name": "Vignesh",
  "designation":"UI/UX Designer",
  "email":"vignesh@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"

},{
  "id":"10",
  "name": "sadman",
  "designation":"UI/UX Designer",
  "email":"sudman@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"

},
{
  "id":"11",
  "name": "siva",
  "designation":"UI/UX Designer",
  "email":"siva@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"
},
{
  "id":"12",
  "name": "david",
  "designation":"UI/UX Designer",
  "email":"david@gmail.com",
  "image":"./src/asset/profile.png",
  "message":"./src/asset/message.png",
  "user":"./src/asset/user1.png"
}
]


export const getProfileList = () => dispatch => {

  //if API is there

  // return axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => {
      
  //   return dispatch({
  //     type: actionType.GET_LIST_SUCCESS,
  //     data: response.data
  //   })
  // })    
    return dispatch({
      type: actionType.GET_LIST_SUCCESS,
      data: listData
    })

};

export const editedListInfo = (lst) => dispatch =>{
  return dispatch({
    type:actionType.EDIT_LIST_SUCCESS,
    data:lst
  })

}