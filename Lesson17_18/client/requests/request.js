import request from 'superagent';

export const getUsersRequest = () =>{
	return new Promise((resolve,reject)=>{
		request
			.get('/list')
			.end((err,res)=>{
				if(err) reject(err); else resolve(res.body);
			})
	})
}

export const addUserRequest = ({name,age}) => {
  return new Promise((resolve,reject)=>{
    request
	.post('/add_user')
	.send({name,age})
	.end((err,res)=>{
		if(res.body == null || err) {reject(res.text,err);alert(res.text);} else {resolve(res.body)};
	})
  })
}

export const deleteUserRequest = (id) => {
	return new Promise((resolve,reject)=>{
		request
		.delete('/delete/'+id)
		.end((err,res)=>{
			if(err)reject(err); else resolve(res.body);
		})
	})	
}

export const editUserRequest =(id)=>{
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
};

export const getVideosRequest = (name) => {
    return new Promise((resolve,reject)=>{
        request
            .get('/videos')
            .query({name: name})
            .end((err,res)=>{
                if(err) reject(err);

                console.log(res.body);

                resolve(res.body);
            })
    })
}