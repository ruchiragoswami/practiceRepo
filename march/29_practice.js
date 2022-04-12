// Codesandbox link
// https://codesandbox.io/s/class-live-practice-07bgkf?file=/src/App.js

// App.js
import "./styles.css";
import { Answer1 } from "./Answer1";
// import { Answer2 } from "./Answer2";
import { Answer3 } from "./Answer3";

export default function App() {
  return (
    <div className="App">
      <h1> Re-watching </h1>
      <h2>29 March 2022</h2>

      <Answer1 />
      {/* <Answer2 /> */}
      <Answer3 />
    </div>
  );
}

//answer1 component
const numList = [1, 3, 55, 22, 44, 2, 1.5, 1.25, 4.25];

const oddEvenSumReducer = (acc, curr) =>
  curr % 2 === 0
    ? { ...acc, even: curr + acc.even }
    : { ...acc, odd: curr + acc.odd };

const answer1 = numList.reduce(oddEvenSumReducer, { even: 0, odd: 0 });

function Answer1() {
  return (
    <section className="answers">
      <h3> answer 1 </h3>
      <p> odd: {answer1.odd}</p>
      <p> even: {answer1.even} </p>
    </section>
  );
}

export { Answer1 };

// Extra

        //Currying 
        const giveYourName2 = someName => msg => `${someName} says ${msg}`;

        const myLogger2 = giveYourName2('Ramyaa');

        myLogger2("I like volleyball");
        'Ramyaa says I like volleyball'