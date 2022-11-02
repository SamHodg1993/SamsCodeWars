let challengeData7KYU = {
    'You are a square': {
        challengeName: 'You are a square', //Must be the same as the object key to keep the code working
        challengeLevel: '7KYU',
        challengeURL: 'https://www.codewars.com/kata/54c27a33fb7da0db0100040e',
        placeholderText: 'Please enter a number',
        code: `var isSquare = function(n){
            return( Number.isInteger(Math.sqrt(n)) ? true: false);
          }`,
        function: function(n){
            return( Number.isInteger(Math.sqrt(n)) ? true: false);
          }
    },
    
    'XO': {
          challengeName: 'XO', //Must be the same as the object key to keep the code working
          challengeLevel: '7KYU',
          challengeURL: 'https://www.codewars.com/kata/55908aad6620c066bc00002a',
          placeholderText: 'Please enter a string',
          code: `function XO(str) {
            const inArray = str.split(''); //turns the string into an array to search through it
            let counterX = 0;
            let counterO = 0;
            let regexX = /x/i; // searches for the letter x in the array 'inArray' case insensitive
            let regexO = /o/i; // searches for the letter o in the array 'inArray' case insensitive
            for(let i = 0; i < inArray.length; i++) {
              if(regexX.test(inArray[i])) {
                counterX++; // increments the counter by 1 if 'i' is equal to x || X
              }
              if(regexO.test(inArray[i])) {
                counterO++; // increments the counter by 1 if 'i' is equal to o || O
              }
            }
            return(counterX === counterO ? true : false);
          }`,
          function: function XO(str) {
            const inArray = str.split(''); //turns the string into an array to search through it
            let counterX = 0;
            let counterO = 0;
            let regexX = /x/i; // searches for the letter x in the array 'inArray' case insensitive
            let regexO = /o/i; // searches for the letter o in the array 'inArray' case insensitive
            for(let i = 0; i < inArray.length; i++) {
              if(regexX.test(inArray[i])) {
                counterX++; // increments the counter by 1 if 'i' is equal to x || X
              }
              if(regexO.test(inArray[i])) {
                counterO++; // increments the counter by 1 if 'i' is equal to o || O
              }
            }
            return(counterX === counterO ? true : false);
          }
      },
}

export default challengeData7KYU;