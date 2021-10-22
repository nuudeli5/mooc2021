import React from 'react'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const Header = () => {
        return (
            <div>
                <p>This is {course}. Welcome!</p>
            </div>
        )
    }

    const Part = (props) => {
    
        return (
            <div>
                <p>{props.part} and {props.exercises} exercises have been done.</p>
            </div>
        )
    }


    const Content = () => {
        return (
            <div>
                <Part part={part1} exercises={exercises1} />
                <Part part={part2} exercises={exercises2} />
                <Part part={part3} exercises={exercises3} />
            </div>
        )
    }

    const Total = () => {
        return (
            <div>
                <p> Total of {exercises1 + exercises2 + exercises3} have been done.</p>
            </div>
        )
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} />
            <Total exercises1={exercises1} />
        </div>
    )

    /* return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
    )*/
}

export default App