// this is a react component
// ES6 arrow function
// returns html div tags BUT it is actually JSX

// const App = () => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// allow dynamic value inside curly brackets

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// const Hello = () => { return (<div>      <p>Hello world</p>    </div>) }

// can include props to pass data into components
// set the props accordingly to pass relevant data
// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old      </p>
//     </div>
//   )
// }

// calling Hello as a JSX div tag
// component can be reused

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }

// example below using variables inside curly brackets and hardcoding.
// component tag need to be Capitalized
// must wrap element in a tag
// const App = () => {
//   const name = 'Peter'
//   const age = 10
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// can wrap elements returned by components with an empty element

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

// const Hello = ({ name, age }) => { // destructure props into the 2 variable
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// const App = (props) => {
//   const { counter } = props
//   return (
//     <div>{counter}</div>
//   )
// }


// this part is on
// destruction props so to refactor code
// usestate function to re-render screen
// building component to be reused i.e button

// import { useState } from 'react'

// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text='plus' />
//       <Button onClick={setToZero} text='zero' />
//       <Button onClick={decreaseByOne} text='minus' />
//     </div>
//   )
// }

import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>    {text}  </button>)
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />      <Button handleClick={handleRightClick} text='right' />      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
