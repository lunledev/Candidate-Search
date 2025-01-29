import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [results, setResults] = useState<Candidate[]>([]);

  const [Individual, setIndividual] = useState<Candidate>(
    
  {  candidate_name: null,
    id:     null,
    username:  null,
    location: null,
    avatar_url: null,
    email: null,
    html_url: null,
    company:  null,
  }


  );

 const getUsers =  async() => {

 const storeUsers = await searchGithub();

   setResults(storeUsers);

 }

 const getIndividual =  async(username:string) => {

  const storeIndividual = await searchGithubUser(username);

  setIndividual(storeIndividual);
 
    
 
  }

  useEffect(() =>{


  });


  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
