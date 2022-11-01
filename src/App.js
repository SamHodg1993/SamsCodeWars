import React from "react";
import './App.css'
import challengeData8KYU from "./ChallengesData/8KYU";
import challengeData7KYU from "./ChallengesData/7KYU";

export default function App({challengeName, code, output, handleClick, handleChangeChallenge, handleChangeLevel, challengUrl, displayChallenge, currentChallenge, placeholderText, currentLevel}) {

  return (
    <div className="App">
      <header className="challenge-header">
        <h1>Sam's CodeWars Challenges</h1>
        <select value={currentChallenge} onChange={(event) => displayChallenge(event)} >
          {currentLevel.map(challenge => {
            return(
              <option key={challenge.challengeName} value={challenge.challengeName}>{challenge.challengeName}</option>
            )
          })}
        </select>
      </header>
      <main className="challenge-main">
        <div className="main-head">
          <h3><a className="challenge-name" href={challengUrl} target="_blank" rel="noopener noreferrer">{challengeName}</a></h3>
          <select className="level-dropdown" onChange={(event) => handleChangeLevel(event)}>
            <option value={challengeData8KYU}>8KYU</option>
            <option value={challengeData7KYU}>7KYU</option>
          </select>
        </div>
        <div className="user-interface">
          <input className ="ui-input" placeholder={placeholderText} onChange={handleChangeChallenge}></input>
          <button onClick={() => handleClick()}>Run Code</button>
        </div>
        <div className="main-code">
              <textarea id="test-input" className="main-code-textarea" spellCheck="false" disabled={true} value={code}></textarea>
          </div>
        <div className="main-output">
          <p>{output}</p> 
        </div>  
      </main>
    </div>
  );
}

