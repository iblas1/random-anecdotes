const MostVote = (props) => {
  return (
    <>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.highestVote}</p>
        <p>has {props.highestVoteNo} votes</p>
      </div>
    </>
  );
};

export default MostVote;
