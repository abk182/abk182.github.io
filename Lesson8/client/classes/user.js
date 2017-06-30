export class User {
	constructor({name, age}, ...rest){
		this.name = name;
		this.age = age;}

	renderUser(id){
		document.getElementById('user-list').innerHTML += (`
			<li> ${this.name} ${this.age} 
				<input type="submit" class="edit" value="E" data-Id=${id}>
				<input type="submit" class="delete" value="X" 	data-Id=${id}>
			</li>
			`);
	}
walk() {
		console.log(this.name + "ходит");
	}
}

export class Admin extends User {
	constructor() {
		super({name: "user", age: 23});
	}

	walkLikeAdmin() {
		super.walk()
		console.log('like Admin');
	}
}