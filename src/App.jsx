import Header from './header'
import Content from './content'
import Total from './total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header course = {course} /> </h1>
      <p>
        <Content part = {part1} exercises = {exercises1} />
      </p>
      <p>
      <Content part = {part2} exercises = {exercises2} />
      </p>
      <p>
      <Content part = {part3} exercises = {exercises3} />
      </p>
      <p>Number of exercises <Total items={[exercises1, exercises2, exercises3]} /></p>

    </div>
  )
}

export default App