import { useState } from "react";
import CafeInfo from "./components/CafeInfo/CafeInfo";
import VoteOptions from "./components/VoteOptions/VoteOptions";

import type { Votes, VoteType } from "./types/votes";

import css from "./App.module.css";

const initialVotesState: Votes = {
  good: 0,
  neutral: 0,
  bad: 0
}

export default function App() {

  const [votes, setVotes] = useState<Votes>(initialVotesState);

  const handleVote =(voteType: VoteType) =>{
    setVotes(prevVotes => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1
    }));
  }

const  resetVotes =()=>{};

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  )
}
