import React, { useState } from 'react'
import App from './App'

import challengeData from './8KYU/challengeData8KYU';

export default function Challenge() {
    // State
    const [output, setOutput] =  useState('');
    const [test, setTest] = useState(0);
    const [currentChallenge, setCurrentChallenge] = useState('Even or odd');

    // Variables relating to current selected challenge
    const challengeName = challengeData['Even or Odd'].challengeName;
    const challengeLevel = challengeData['Even or Odd'].challengeLevel;
    const challengURL = challengeData['Even or Odd'].challengeURL;
    const code = challengeData['Even or Odd'].code;

    // function run on user input box
    const handleChange = (event) => {
        setTest(event.target.value);
    }

    // function run on selecting challenge to render
    const dispayChallenge = (string) => {
        setCurrentChallenge(string);
        console.log(currentChallenge);
    }

    // function run on user 'Run Code' button
    function handleClick () {
        let answer = challengeData['Even or Odd'].function(test);
        setOutput(answer);

    }

  return (
    <div>
        <App challengeName={challengeName} challengeLevel={challengeLevel} code={code} output={output} handleClick={handleClick} handleChange={handleChange} challengURL={challengURL} dispayChallenge={dispayChallenge}/>
    </div>
  )
}

