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
    document.getElementById('coffee-container').innerHTML='';
    this.coffeeList.forEach(function(item,index){
      document.getElementById('coffee-container').innerHTML += (
        `<li>
            <input
            type="submit"
            data-index=${index}
            value="${item.name}"
            class="coffeeItem">
            <span class='coffeePrice'>${item.price}</span>
        </li>`);
    });
    document.getElementById('coffee-machine').innerHTML += (`
        <input type="submit" id="btn" value="Налить">
        <input type="submit" id="btnback" value="Выдать сдачу">
        <input type='text' id='coffeeNameAdd' placeholder="Название кофе">
        <input type='number' id ='coffeePriceAdd' placeholder="Цена кофе">
        <input type='submit' class='coffeeItem' id='coffeeAdd' value = 'Добавить кофе'>
        `);
  }

  //Добавление кофе
  this.newCoffee = function(name_,price_){
    var newCof = {
      name:name_,
      price:price_,
      sugar:5,
    }
    this.coffeeList.push(newCof);
    document.getElementById('coffee-container').innerHTML += (
        `<li>
            <input
            type="submit"
            value="${newCof.name}"
            class="coffeeItem">
            <span class='coffeePrice'>${newCof.price}</span>
        </li>`);
    console.log(this.coffeeList);
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
  function CoffeeReady(coffeeSelected,cashGiveBack){
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
