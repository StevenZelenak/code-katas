//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

//Convert number to reversed array of digits

digitize = (n) =>{
    //code here
    return n.toString().split('').reverse().map(Number);
  }

  console.log(digitize(13252));