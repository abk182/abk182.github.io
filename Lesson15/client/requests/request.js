import request from 'superagent';

export const getUsers = () =>{
	return new Promise((resolve,reject)=>{
		request
			.get('/list')
			.end((err,res)=>{
				if(err) reject(err); else resolve(res.body);
			})
	})
}

export const addUser = ({name,age}) => {
  return new Promise((resolve,reject)=>{
    request
	.post('/add_user')
	.send({name,age})
	.end((err,res)=>{
		if(res.body == null) reject(err); else resolve(res.body);
	})
  })
}

export const deleteUser = (id) => {
	return new Promise((resolve,reject)=>{
		request
		.delete('/delete/'+id)
		.end((err,res)=>{
			if(err)reject(err); else resolve(res.body);
		})
	})	
}

export const editUser =(id)=>{
	let name = prompt("Имя","");
	let age = prompt("Возраст",'');
	return new Promise((resolve,reject) =>{
		if(name!= null && age!= null){
			request
				.put('/put/'+id)
				.send({id: id, name: name, age: age})
				.end((err,res)=>{
					if(err)reject(err); else resolve(res.body);
				})
		}
	})

}
