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
}

export default challengeData7KYU;