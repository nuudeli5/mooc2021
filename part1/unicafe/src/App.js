import React, { useState } from 'react'


const Button = (props) => {

    //console.log('hi:', props.average)

    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const StatisticLine = (props) => {
    return (
        <div> 
            <p>  {props.text}  {props.grade}</p>
        </div>

    )
}

const GetAverage = (props) => {

    //console.log('hi:', props.average)
    const good = props.average[0]
    const neutral = props.average[1]
    const bad = props.average[2]
    //This could be in else and else could be here. Maybe.
    if (props.average[0] + props.average[1] + props.average[2] > 0) {
        return (
            <div>

                <h2> Statistics </h2>

                <table >
                    <tbody>
                    <tr>
                            <td> Good reviews:</td>  <td>
                                <StatisticLine text=" " grade={good} /> </td>
                            </tr><tr>
                            <td> Neutral reviews:</td><td>
                                <StatisticLine text=" " grade={neutral} /> </td>
                            </tr><tr>
                            <td> Bad reviews:</td> <td>
                                <StatisticLine text=" " grade={bad} /> </td>
                            </tr><tr>
                            <td> All: </td><td>
                                <StatisticLine text=" " grade={good + neutral + bad} /> </td>
                        </tr><tr>
                            <td> Average: </td><td>
                                <StatisticLine text=" " grade={(good + -(bad)) / (good + neutral + bad)} /> </td>
                        </tr><tr>
                            <td> Positive: </td>
                            <td> <StatisticLine text=" " grade={(good / (good + neutral + bad) * 100)} /> </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
    else {
        return (
        <div> <h3> No feedback yet...  </h3></div> 

        )
    }
}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const average = [good, neutral, bad]

    return (
        <div>
        <h1>Click a button to give feedback</h1>

            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />

            <GetAverage average={average} />

        </div>
    )
}

export default App