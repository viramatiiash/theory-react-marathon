import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloCourse from './HelloCourse';
import Student from './Student';
import Counter from './Counter';

function App() {


  return (
    <div className='App'>
      {/* <HelloCourse name='Course' />
      <Student name='Paul' rating={10} isRegistered={false} /> */}
      <Counter/>
    </div>
  );
}

export default App;
