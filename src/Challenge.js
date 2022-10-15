import React, { useState } from 'react'
import App from './App'

export default function Challenge() {

    const [output, setOutput] =  useState('');
    const [test, setTest] = useState(0);

    const challengeName = 'Even or Odd';
    const challengeLevel = '8KYU';
    const challengURL = 'https://www.codewars.com/kata/53da3dbb4a5168369a0000fe';

    
    const handleChange = (event) => {
        setTest(event.target.value);
    }

    function handleClick () {
        (function oddOrEven (num) {
            let answer;
            answer = (num % 2 === 0 ? answer = 'Even' : 'Odd');
            setOutput(answer);
        })(test);
    }

    const code = `
    function oddOrEven (num) {
        let answer;
        answer = (num % 2 === 0 ? answer = 'Even' : 'Odd');
        setOutput(answer);
    };`


  return (
    <div>
        <App challengeName={challengeName} challengeLevel={challengeLevel} code={code} output={output} handleClick={handleClick} handleChange={handleChange} challengURL={challengURL}/>
    </div>
  )
}

