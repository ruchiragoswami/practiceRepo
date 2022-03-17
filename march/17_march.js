//Live Coding 16 March 2022, 10PM

import "./styles.css";

export default function App() {
  // const myName = "an object { key: value}";
  const inventory = [
    { name: "fans", quantity: 3 },
    { name: "chimneys", quantity: 0 },
    { name: "bulbs", quantity: 5 },
    { name: "stove", quantity: 1 }
  ];

  const question1 =
    "Get all the items in an array whose quantity is less than 2.";

  const lessThanTwo = (accObj, currObj) =>
    currObj.quantity < 2 ? [...accObj, currObj.name] : [...accObj];

  const answer1 = inventory.reduce(lessThanTwo, []);
  // console.log(answer1);

  // Question 2 start
  const question2 =
    "Find the object which contains the item whose quantity is zero.";

  const zeroQuantity = (someObj) => someObj.quantity === 0;

  const answer2 = inventory.filter(zeroQuantity);
  // console.log(answer2);

  //Question 3 start

  const question3 = "Get the total quantity of items present in the inventory.";

  const totalQuantity = (accObj, currObj) => currObj.quantity + accObj;

  const answer3 = inventory.reduce(totalQuantity, 0);

  return (
    <div className="App">
      <h1>Live Coding 16 March 2022 </h1>
      <h2> Given an array of objects. </h2>
      <section className="left-align">
        {inventory.map((arrayItem) => (
          <li key={arrayItem.name}>
            {" "}
            {arrayItem.name} : {arrayItem.quantity}{" "}
          </li>
        ))}
      </section>
      <h3> Question 1: {question1} </h3>
      <section className="question1 left-align">
        <ol>
          {" "}
          {answer1.map((answer1Item) => (
            <li key={answer1.indexOf(answer1Item)}>{answer1Item} </li>
          ))}{" "}
        </ol>
      </section>

      <h3> Question 2: {question2} </h3>
      <section className="left-align">
        {answer2.map((obj) => (
          <li key={answer2.indexOf(obj)}>
            {" "}
            {obj.name} : {obj.quantity}{" "}
          </li>
        ))}
      </section>

      <h3> Question 3: {question3} </h3>
      <section className="left-align">
        <p>
          {" "}
          Total number of items in the inventory is :<b> {answer3} </b>{" "}
        </p>{" "}
      </section>
      {/* end here */}
    </div>
  );
}

/*

 10. Given an array of objects. 
const inventory = [
  {name: 'fans', quantity: 3},
  {name: 'chimneys', quantity: 0},
  {name: 'bulbs', quantity: 5},
  {name: 'stove', quantity: 1}    
];
 10-a. Get all the items in an array whose quantity is less than 2.

 */
