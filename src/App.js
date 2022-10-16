import React from "react";
import './App.css'
import challengeData from "./8KYU/challengeData8KYU";

export default function App({challengeName, challengeLevel, code, output, handleClick, handleChange, challengUrl, displayChallenge}) {

  const  challengesArray = Object.values(challengeData);

  return (
    <div className="App">
      <header className="challenge-header">
        <h1>Sam's CodeWars Challenges</h1>
        <select placeholder="Please select a challenge">
          {challengesArray.map(challenge => {
            return(
              <option key={challenge.challengeName} value={challenge.challengeName}>{challenge.challengeName}</option>
            )
          })}
        </select>
      </header>
      <main className="challenge-main">
        <div className="main-head">
          <h3><a className="challenge-name" href={challengUrl} target="_blank" rel="noopener noreferrer">{challengeName}</a></h3>
          <h3>{challengeLevel}</h3>
        </div>
        <div className="user-interface">
          <input className ="ui-input"placeholder="Please enter a number" onChange={handleChange}></input>
          <button onClick={() => handleClick()}>Run Code</button>
        </div>
        <div className="main-code">
              <textarea id="test-input" className="main-code-textarea" spellCheck="false" defaultValue={code}></textarea>
          </div>
        <div className="main-output">
          <p>{output}</p> 
        </div>  
      </main>
    </div>
  );
}

