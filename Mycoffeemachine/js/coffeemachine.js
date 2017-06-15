function Coffee(name_,price_) {
  this.name=name_;
  this.price=price_;
  this.sugar=5;
}

function CoffeeMachine(coffee){

  this.coffeeList=coffee;
  this.coffeeSelected='';
  this.cashPaid=0;
  this.cashGiveBack=0;

  //Вывод кнопок
  this.coffeeRender = function(){
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
  this.coffeeSelect = function(coffee){
    this.coffeeSelected = coffee;
    console.log(this.coffeeSelected);
  }

  //сбор наличных
  this.moneyCollect = function(money){
    this.cashPaid += money;
    document.getElementById('money-show').innerHTML= 'Внесена сумма ' + this.cashPaid;
  };

  //ввод наличных
  this.pay = function(){
    this.cashGiveBack = this.cashPaid - +this.coffeeSelected.price;
    CoffeeReady.call(this,this.coffeeSelected,this.cashGiveBack);
  }

  var CoffeeReady = function(coffeeSelected,cashGiveBack){
    document.getElementById('money-show').innerHTML = 'Наливаю';
    setTimeout(function(){
      document.getElementById('money-show').innerHTML =
        coffeeSelected.name+' готово! Остаток '+
        cashGiveBack+' рублей';
      },3000);
    this.cashPaid = this.cashGiveBack; //внесенная сумма принимает значение остатка для последующих заказов кофе
  }

  this.cashGiveBackFunction = function(){
    alert('Сдача ' + this.cashPaid);//
    this.cashGiveBack = 0;
    this.cashPaid = 0;
    document.getElementById('money-show').innerHTML = 'Добро пожаловать!'
  }

  var SugarAdd = function(){

  }

}
