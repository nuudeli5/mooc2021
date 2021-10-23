import React, { useState } from 'react'

const Button = (props) => {

    //console.log('hi:', props.average)

    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
    ]


    //setTimeout(() => setCounter(counter + 1), 1000)

    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(0)

    const increaseByOne = () => setVote(vote + 1)

    const random = Math.floor(Math.random() * 6)

    var points = new Uint8Array(anecdotes.length); // you can add more anecdotes and not worry about this.

    //var points = [2,3,4,5,6,7,8]; // you can add more anecdotes and not worry about this.


    //const merged = anecdotes.reduce((obj, key, index) => ({ ...obj, [key]: points[index] }), {});

    /*const better = {
        pairs: [
           
            {
                anec: anecdotes[0],
                votes: points[0],
            },                           
            {
                anec: anecdotes[1],
                votes: points[1],
            },           
            {
                anec: anecdotes[2],
                votes: points[2],
            },
            {
                anec: anecdotes[3],
                votes: points[3],
            },
            {
                anec: anecdotes[4],
                votes: points[4],
            },
            {
                anec: anecdotes[5],
                votes: points[5],
            },
            {
                anec: anecdotes[6],
                votes: points[6],
            }
        ]
    }*/

    const copy = { ...points }

    console.log(copy)

    return (
        <div>
            <p> {anecdotes[selected]} </p>
            <p>Has {vote} Votes </p>
            <Button handleClick={() => setSelected(random)} text="Get Random" />
            <Button handleClick={() => setVote(vote + 1)} text="Vote" />
            <p>Has {points[0]} Votes </p>


        </div>
    )

}
//            <Button handleClick={() => setCounter(counter + 1), copy.list[random].votes + 1} text="Vote" />

export default App