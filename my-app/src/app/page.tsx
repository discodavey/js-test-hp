import React from "react";
import styles from "./page.module.css";

export default function Home() {

  const burger = "The quick brown fox";

  const sentenced = burger.split("").reverse().join("");

  const reverseSentence = (str: string) => {
    return str.split(' ').map((word: string) => word.split('').reverse().join('')).join(' ');
  }

  const reversedSentence = reverseSentence(burger);

  return (
    <div className={styles.page}>
      <h1>HP Test</h1>
      <div className="summary">This was the first part of the test. I took a photo of the url but it is no longer on my photo. It's not even in my deleted section. This was the only part I can remember.</div>
      <p>I have done the first part of the test (the trip up as you called it).</p>
      <div className="sentence-forward">This is the sentence forward - {burger}</div>
      <div className="sentence-backwards">This is the sentence reversed = {sentenced}</div>
      <div className="sentence-backwards-correct-order">This is the sentence reversed in the correct order = {reversedSentence}</div>
    </div>
  );
}