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
          const newNum = parseInt(num);  // This line is just to make the function act as though it was called with a number instead of a string
            return newNum % 2 === 0 ? 'Even' : 'Odd';
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
            const newNum = parseInt(num) // This line is just to make the function act as though it was called with a number instead of a string
            // return num.toString(); would be the correct impletmentation for the function
            return(`"${newNum}"`)
          }
    },
    'How good are you really?': {
        challengeName: 'How good are you really?', //Must be the same as the object key to keep the code working
        challengeLevel: '8KYU',
        challengeURL: 'https://www.codewars.com/kata/5601409514fc93442500010b',
        placeholderText: 'Please enter an array, see below for further instructions',
        code: `function betterThanAverage(classPoints, yourPoints) {
                const averageCP = classPoints.reduce((a,b) => a + b, 0) / classPoints.length;
                return (yourPoints >= averageCP)
          }
          
          
Instructions          
Enter an array of your classmates points split with commas
Enter your points
Split the array of class points and your points with a pipe '|'
There should be no spaces in the input string


example : 22,35,43,24,32,54|44
             class points  |your points`,
        function: function betterThanAverage(input) {
            const arr1 = [...input.split('|')[0].split(',')];
            const arr2 = [...input.split('|')[1].split(',')];
            const averageCP = arr1.reduce((a,b) => parseInt(a) + parseInt(b), 0) / arr1.length;
            return (arr2 >= averageCP ? 'True' : 'False')
          }
    },
    'Find the smallest integer in the array': {
        challengeName: 'Find the smallest integer in the array', //Must be the same as the object key to keep the code working
        challengeLevel: '8KYU',
        challengeURL: 'https://www.codewars.com/kata/55a2d7ebe362935a210000b2',
        placeholderText: 'Please enter an array of integers, see below for further instructions',
        code: `function findSmallestInt(args) {
              let sorted = args.sort(function(a, b){return a - b});
              return sorted[0];
          }
          
          
//instructions
Enter an array of numbers, seperated by a comma with no spaces

example - 1,2,3,4,5
          `,
        function: function findSmallestInt(args) {
              const newArgs = [...args.split(',')]
              let sorted = newArgs.sort(function(a, b){return a - b});
              if(sorted[0] === '') {
                return 0
              }
              else {
                return sorted[0];
              }
            }
    },
}

export default challengeData;

