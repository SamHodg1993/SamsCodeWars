import React, { useState } from 'react'
import App from './App'

import challengeData from './8KYU/challengeData8KYU';

export default function Challenge() {
    // State
    const [output, setOutput] =  useState('');
    const [test, setTest] = useState(0);
    const [currentChallenge, setCurrentChallenge] = useState('Even or Odd');

    // Variables relating to current selected challenge
    const challengeName = challengeData[currentChallenge].challengeName;
    const challengeLevel = challengeData[currentChallenge].challengeLevel;
    const challengURL = challengeData[currentChallenge].challengeURL;
    const code = challengeData[currentChallenge].code;
    const placeholderText = challengeData[currentChallenge].placeholderText;

    // function run on user input box
    const handleChange = (event) => {
        setTest(event.target.value);
    }

    // function run on selecting challenge to render
    const displayChallenge = (event) => {
        setCurrentChallenge(event.target.value);
    }

    // function run on user 'Run Code' button
    function handleClick () {
        let answer = challengeData[currentChallenge].function(test);
        setOutput(answer);

    }

  return (
    <div>
        <App challengeName={challengeName} challengeLevel={challengeLevel} code={code} output={output} handleClick={handleClick} handleChange={handleChange} challengURL={challengURL} displayChallenge={displayChallenge} currentChallenge={currentChallenge} placeholderText={placeholderText}/>
    </div>
  )
}

