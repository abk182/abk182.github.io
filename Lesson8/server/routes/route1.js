const express = require('express'),
	  path = require('path'),
	  userList = require('../userlist.js');
	  router = express.Router();

router.get('/list', (req, res) => {
  res.send(userList);
});

router.post('/add_user', (req, res) => {
	userList.push(req.body);	
	console.log(req.body);
	res.send('success');
})

router.delete('/delete/:id', (req,res)=>{
	userList.map( function (item) {
		if (item['id']==req.params['id']){
			userList.splice(userList.indexOf(item),1);
		};
	})
	res.send('success');
})



module.exports = router;
