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
  this.coffeeSelect = function(coffeeSel){
    this.coffeeSelected = coffeeSel;
    console.log(this.coffeeSelected);
    document.getElementById('displayCoffee').innerHTML = this.coffeeSelected.name;
    Sugar.call(this);
  }

  //сбор наличных
  this.moneyCollect = function(money){
    this.cashPaid += money;
    document.getElementById('displayMoney').innerHTML = 'Внесена сумма ' + this.cashPaid;
  };

  //оплата кофе
  this.pay = function(){
    this.cashGiveBack = this.cashPaid - +this.coffeeSelected.price;
    CoffeeReady.call(this,this.coffeeSelected,this.cashGiveBack);
  }

  //готовит кофе считает деньги
  var CoffeeReady = function(coffeeSelected,cashGiveBack){
    document.getElementById('displayCoffee').innerHTML = 'Наливаю';
    document.getElementById('displayMoney').innerHTML ='';
    setTimeout(function(){
      document.getElementById('displayCoffee').innerHTML =
        coffeeSelected.name+' готово!';
      document.getElementById('displayMoney').innerHTML='Остаток '+
        cashGiveBack+' рублей';
      },3000);
    this.cashPaid = this.cashGiveBack; //внесенная сумма принимает значение остатка для последующих заказов кофе
  }

  //выдает сдачу
  this.cashGiveBackFunction = function(){
    alert('Сдача ' + this.cashPaid);//
    this.cashGiveBack = 0;
    this.cashPaid = 0;
    document.getElementById('displayCoffee').innerHTML = 'Добро пожаловать!';
    document.getElementById('displayMoney').innerHTML = '';
    console.log(this.coffeeList);
  }

  //Изменение кол-ва сахара в выбранном кофе
  var Sugar = function(){
    document.getElementById('displayCoffee').innerHTML += (`
      </br>Сахар
      <input type='submit' value='<' id='sugarDec'>
      <span id='sugar'>${this.coffeeSelected.sugar}</span>
      <input type='submit' value='>' id='sugarInc'>
      `);
    document.getElementById('sugarInc').addEventListener('click',function(){
      this.coffeeSelected.sugar++;
      document.getElementById('sugar').innerHTML=this.coffeeSelected.sugar;
    }.bind(this))
    document.getElementById('sugarDec').addEventListener('click',function(){
      this.coffeeSelected.sugar--;
      document.getElementById('sugar').innerHTML=this.coffeeSelected.sugar;
    }.bind(this))
  }
}
