import { useState } from "react";

import MostVote from "./components/MostVote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const nextHandler = () => {
    const randomNo = Math.floor(Math.random() * 7);
    setSelected(randomNo);
  };

  const highestVoteNo = Math.max(...votes);
  const maxPos = votes.findIndex((vote) => vote === highestVoteNo);
  const highestVote = anecdotes[maxPos];

  const voteHandler = () => {
    const voteCopy = [...votes];
    voteCopy[selected] += 1;
    setVotes(voteCopy);
  };
  const eachVote = votes[selected];

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <p>has {eachVote} votes</p>
      <button onClick={voteHandler}>vote</button>
      <button onClick={nextHandler}>next</button>
      <button>anecdote</button>
      <MostVote highestVote={highestVote} highestVoteNo={highestVoteNo} />
    </>
  );
};

export default App;
