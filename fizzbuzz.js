
function BaseNumber(n){

  this.n = n;
  this.showNumber = true;
  this.getNumber = () => {
    return this.showNumber ? this.n.toString() : '';
  }
}

function BaseDecorator(baseNumber) {
  this.number = '';

  baseNumber.showNumber = false;
  this.baseNumber = baseNumber;
  this.getNumber = () => {
    return this.baseNumber.getNumber() + this.number;
  };

}

function FizzDecorator(baseNumber){
  let fizzDecorator = new BaseDecorator(baseNumber);
  fizzDecorator.number = 'fizz';
  return fizzDecorator;
}

function BuzzDecorator(baseNumber){
  let fizzDecorator = new  BaseDecorator(baseNumber);
  fizzDecorator.number = 'buzz';
  return fizzDecorator;
}

function DecoratorFactory() {

  this.getDecoratedNumber = (n) => {
    let number =  new BaseNumber(n);
    if(n % 3 === 0){
      number = new FizzDecorator(number);
    }
    if(n.toString().includes(3)){
      number = new FizzDecorator(number);
    }

    if(n % 5 === 0) {
      number = new BuzzDecorator(number);
    }

    if(n.toString().includes(5)){
      number = new BuzzDecorator(number);
    }
  
    return number;
  }
}

console.log('FizzBuzz');
let numbers = [...Array(101).keys()];

const factory = new DecoratorFactory();
let baseNumbers = numbers.map(n => factory.getDecoratedNumber(n));
baseNumbers.forEach(n => console.log(n.getNumber()));

let n = 0;
setInterval(() => {
  n++;
  console.log(factory.getDecoratedNumber(n).getNumber());
}, 100);
