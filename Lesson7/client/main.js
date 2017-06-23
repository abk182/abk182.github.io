import {User} from './classes/user.js'
import request from 'superagent'

request
  .get('/list')
  .end((err,res)=>{ // err=error res=response
    // for(let i = 0; i<res.body.length; i++){ //
    //   render(res.body[i]);
    // }
    //console.log(i); //i задана только в контексте for выше
    res.body.forEach(item => {render(item)})
  })

  const render = (user) => {
    let userNew = new User(user.name,user.age);
    console.log(userNew);
    userNew.renderUser();
  }

var user0= new User('Damir',24);

console.log(user0);
