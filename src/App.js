import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Game } from './components/Game';

function App() {
  let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  /* SORT RANDOMIZER  */

  const sortArr = () => {
    numberList.sort(()=>Math.random()-.5)
    console.log(numberList);
  }

  return (
    <div className="App">
      <Header sortArr={sortArr} numberList={numberList}></Header>
      <Game numberList={numberList}></Game>
      <Footer></Footer>
    </div>
  );
}


export default App;
