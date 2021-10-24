import React from 'react'


const Header = ({ course }) => {

    //const headerMap = course.map(name => <li key={name.id}> {name.name},{name.id} </li>) //t‰m‰ aiheutti p‰‰nvaivaa aivan liikaa

    //console.log(headerMap)

    return (
        <div>
            <h2>{course}</h2>
        </div>
    )
}

const Total = ({ course }) => {

    //console.log(course)

    const sumMap = course.parts.map(parts => parts.exercises) //t‰m‰ aiheutti p‰‰nvaivaa aivan liikaa.

    //console.log(sumMap)

    const sum = (previousValue, currentValue) => previousValue + currentValue
    const reducedSum = sumMap.reduce(sum)
    return (
        <p>Number of exercises {reducedSum}</p>
    )
}

const Part = (props) => {

    //console.log(props)

    const courseMap = props.part.map(parts => <li key={parts.id}> Course: {parts.name}  and {parts.exercises} exercises have been done.</li>)

    //console.log(props.part)   {courseMap}
    return (
        <div>
                {courseMap}
        </div>
    ) 

}

const Content = ({ course }) => {

    //const parts = course.parts

    //console.log(course)

    //const result = course.parts.map(name =>  name.name + " hi ")
    //const result2 = result.map(name => name + " hi ")


    //console.log(result)
    //console.log(result2)


    return (
        <div>
            <Part part={course} />
        </div>
    )
} 

const Course = ({ course }) => {


    //const first = course[0]
    const courseMap = course.map(course =>
        <div key={course.id}> <Header course={course.name} />
            <Content course={course.parts} />            <Total course={course} />
        </div>)

    //console.log(first)

    /*return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    ) */

        //console.log(courseMap)


        return (
            <div>
                {courseMap}
            </div>
    )

} 


export default Course
