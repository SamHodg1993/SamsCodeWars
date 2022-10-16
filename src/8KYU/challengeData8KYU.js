let challengeData = {
    'Even or Odd': {
        challengeName: 'Even or Odd', //Must be the same as the object key to keep the code working
        challengeLevel: '8KYU',
        challengeURL: 'https://www.codewars.com/kata/53da3dbb4a5168369a0000fe',
        code: `function evenOrOdd(num) {
            return num % 2 === 0 ? 'Even' : 'Odd';
        }`,
        function: function evenOrOdd(num) {
            return num % 2 === 0 ? 'Even' : 'Odd';
        }
    },
    'Random Challenge': {
        challengeName: 'Random Challenge', //Must be the same as the object key to keep the code working
        challengeLevel: '78KYU',
        challengeURL: 'https://www.codewars.com/kata/53da3dbb4a5168369a0000fe',
        code: `Random code`,
        function: function evenOrOdd(num) {
            return num % 2 === 0 ? 'Even' : 'Odd';
        }
    },'Another Random Challenge': {
        challengeName: 'Another Random Challenge', //Must be the same as the object key to keep the code working
        challengeLevel: '78KYU',
        challengeURL: 'https://www.codewars.com/kata/53da3dbb4a5168369a0000fe',
        code: `Mode Random code`,
        function: function evenOrOdd(num) {
            return num % 2 === 0 ? 'Even' : 'Odd';
        }
    },
}

export default challengeData;