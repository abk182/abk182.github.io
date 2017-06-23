export function User(name_,age_){
  this.name=name_;
  this.age=age_;
  
  this.renderUser = function(){
    document.write(`${this.name} and ${this.age} </br>`);
  }
}
