let challengeData = {
    'Even or Odd': {
        challengeName: 'Even or Odd', //Must be the same as the object key to keep the code working
        challengeLevel: '8KYU',
        challengeURL: 'https://www.codewars.com/kata/53da3dbb4a5168369a0000fe',
        placeholderText: 'Please enter a number',
        code: `function evenOrOdd(num) {
            return num % 2 === 0 ? 'Even' : 'Odd';
        }`,
        function: function evenOrOdd(num) {
            return num % 2 === 0 ? 'Even' : 'Odd';
        }
    },
    'Convert a Number to a String!': {
        challengeName: 'Convert a Number to a String!', //Must be the same as the object key to keep the code working
        challengeLevel: '8KYU',
        challengeURL: 'https://www.codewars.com/kata/5265326f5fda8eb1160004c8',
        placeholderText: 'Please enter a number',
        code: `function numberToString(num) {
            return num.toString();
          }`,
        function: function numberToString(num) {
            return num.toString();
          }
    },
    'How good are you really?': {
        challengeName: 'How good are you really?', //Must be the same as the object key to keep the code working
        challengeLevel: '8KYU',
        challengeURL: 'https://www.codewars.com/kata/5601409514fc93442500010b',
        placeholderText: 'Please enter an array, [Class Points, Your Points]',
        code: `function betterThanAverage(classPoints, yourPoints) {
            const averageCP = classPoints.reduce((a,b) => a + b, 0) / classPoints.length;
            return (yourPoints >= averageCP)
          }`,
        function: function betterThanAverage(classPoints, yourPoints) {
            const averageCP = classPoints.reduce((a,b) => a + b, 0) / classPoints.length;
            return (yourPoints >= averageCP ? 'True' : 'False')
          }
    },
    'Find the smallest integer in the array': {
        challengeName: 'Find the smallest integer in the array', //Must be the same as the object key to keep the code working
        challengeLevel: '8KYU',
        challengeURL: 'https://www.codewars.com/kata/55a2d7ebe362935a210000b2',
        placeholderText: 'Please enter an array of integers',
        code: `function findSmallestInt(args) {
              let sorted = args.sort(function(a, b){return a - b});
              return sorted[0];
          }`,
        function: function findSmallestInt(args) {
              let sorted = args.sort(function(a, b){return a - b});
              return sorted[0];
            }
    },
}

export default challengeData;

