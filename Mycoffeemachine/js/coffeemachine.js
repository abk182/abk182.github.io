function Coffee(name_,price_) {
  this.name=name_;
  this.price=price_;
}

function CoffeeMachine(coffee){

  this.coffeeList=coffee;
  this.coffeeSelected='';
  this.cashPaid=0;
  this.cashGiveBack=0;
  this.sugarAdd='';

  //Вывод кнопок
  this.CoffeeRender = function(){
    this.coffeeList.forEach(function(item,index){
      Coffee.call(this,coffee[index].name,coffee[index].price);
      //console.log(this.name,this.price);
      document.getElementById('coffee-container').innerHTML += (
        `<li>
            <input
            type="submit"
            data-index=${index}
            value="${this.name}"
            class="coffeeItem">
            <span class='coffeePrice'>${this.price}</span>
        </li>`);
    });
  }

  //Выбор кофе
  this.CoffeeSelect = function(coffee){
    this.coffeeSelected = coffee;
    console.log(this.coffeeSelected);
  }

  //ввод наличных
  this.Pay = function(money_){
    this.cashPaid = money_;
    this.cashGiveBack = money_ - +this.coffeeSelected.price;
    console.log(this.cashPaid);
    console.log(this.cashGiveBack);
  }

  this.coffeeReady = function(){

  }
}
