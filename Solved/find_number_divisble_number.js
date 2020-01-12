//https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

//Find numbers which are divisible by given number

divisibleBy = (numbers, divisor) =>{

    const numbersThatDiv = [];
  
    for(const element of numbers){
      if(element % divisor === 0)
        {
          numbersThatDiv.push(element);
        }
    
      }
  
      return numbersThatDiv;
  
  }
  
  divisibleBy([1, 2, 3, 4, 5, 6,], 2)