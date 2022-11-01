import React, { useState } from 'react'
import App from './App'

import challengeData8KYU from './ChallengesData/8KYU';
import challengeData7KYU from "./ChallengesData/7KYU";

export default function Challenge() {
    // State
    const [output, setOutput] =  useState('');
    const [test, setTest] = useState(0);
    const [currentChallenge, setCurrentChallenge] = useState('Even or Odd');
    const [currentLevel, setCurrentLevel] = useState(challengeData8KYU)

    // Variables relating to current selected challenge
    const challengeName = currentLevel[currentChallenge].challengeName;
    const challengURL = currentLevel[currentChallenge].challengeURL;
    const code = currentLevel[currentChallenge].code;
    const placeholderText = currentLevel[currentChallenge].placeholderText;

    // function run on user input box
    const handleChangeChallenge = (event) => {
        setTest(event.target.value);
    }

    // function to run on user changing level
    const handleChangeLevel = (event) => {
        setCurrentLevel(event.target.value);
    }

    // function run on selecting challenge to render
    const displayChallenge = (event) => {
        setCurrentChallenge(event.target.value);
    }

    // function run on user 'Run Code' button
    function handleClick () {
        let answer = currentLevel[currentChallenge].function(test);
        setOutput(answer);

    }

  return (
    <div>
        <App challengeName={challengeName} code={code} output={output} handleClick={handleClick} handleChangeChallenge={handleChangeChallenge} handleChangeLevel={handleChangeLevel} challengURL={challengURL} displayChallenge={displayChallenge} currentChallenge={currentChallenge} placeholderText={placeholderText} currentLevel={Object.values(currentLevel)}/>
    </div>
  )
}

