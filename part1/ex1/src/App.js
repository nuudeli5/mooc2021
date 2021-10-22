import React from 'react'

const App = () => {

    const course = {
    name: 'Half Stack application development',
    parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    const Header = () => {
        return (
            <div>
                <p>This is {course.name}. Welcome!</p>
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

        const m1 = course.parts.map(value => 'This is ' + value.name)
        const m2 = course.parts.map(value => ' and ' + value.exercises + ' exercises have been done')

        return (
            <div>

                <p> {m1[0]} {m2[0]} </p>
                <p> {m1[1]} {m2[1]} </p>
                <p> {m1[2]} {m2[2]} </p>
            </div>
        )
    }

    const Total = () => {

        const m3 = course.parts.map(value => value.exercises )

        return (
            <div>
                <p> Total of {m3[0] + m3[1] + m3[2]} have been done.</p>
            </div>
        )
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={course} />
            <Total parts={course} />
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