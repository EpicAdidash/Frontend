import React,{useContext} from 'react';
import Login from '../components/Login';
function About() {
  const noteContext = Login.noteContext
  const l = useContext(noteContext)
  return <div>
    <h1> {l}</h1>
  </div>;
}

export default About;
