export function User(_name,_age) {
	this.name=_name;
	this.age=_age;

	this.renderUser = function(id){
		document.getElementById('user-list').innerHTML += (`
			<li> ${this.name} ${this.age} 
				<input type="submit" class="edit" value="E" data-Id=${id}>
				<input type="submit" class="delete" value="X" 	data-Id=${id}>
			</li>
			`);
	}
}