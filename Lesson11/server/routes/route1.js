const express = require('express'),
	  path = require('path'),
	  fs = require('fs'),
	  router = express.Router();

const file = fs.readFileSync(path.join(__dirname, '../userlist.json'));

const userList = JSON.parse(file);

router.get('/list', (req, res) => {
  res.send(userList);
});

router.post('/add_user', (req, res) => {
	if(req.body.name==""||req.body.age==""){
		res.send("Empty field");
	}else{
		let newUser=req.body;
		newUser.id= new Date();
		userList.push(newUser);
		// fs.writeFileSync(path.join(__dirname,'../userlist.json'), JSON.stringify(userList));	
		console.log(req.body);
		res.send('success');
	}	
})

router.delete('/delete/:id', (req,res)=>{
	userList.map( function (item) {
		if (item['id']==req.params['id']){
			userList.splice(userList.indexOf(item),1);
			fs.writeFileSync(path.join(__dirname,'../userlist.json'), JSON.stringify(userList));
		};
	})
	res.send('success');
})

router.put('/put/:id', (req,res)=>{
	userList.map( function (item) {
		if (item['id']==req.params['id']){
			userList.splice(userList.indexOf(item),1,req.body);
			fs.writeFileSync(path.join(__dirname,'../userlist.json'), JSON.stringify(userList));
		};
	})
	console.log(userList);
	res.send('success');
})

module.exports = router;