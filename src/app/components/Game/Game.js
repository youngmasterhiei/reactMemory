import React, { Component } from 'react';
import './Game.css';
import Images from "../Images.json";


let randomImageArray = Images;
console.log(Images);

var score = 0;
let topScore = 0;


const randomizeImages = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
randomizeImages(randomImageArray);


// const placeImages = (array) => {
//     for(let i = 0; i<array.length; i++){
//         <button><img src={randomImageArray[i].image} className="gameImage" alt="game" /></button>

//     }
// }

const checkClicked = () => {
    console.log();
score++;
console.log(score);
    // if(this.clicked === true){
    //     console.log("game over");

    // }
    // else {
    //     this.clicked = true;
    //     console.log("selected");
    //     console.log(this);
    //     score++;
    // }
}



class Game extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">

                    <button onClick={() =>checkClicked()}><img src={randomImageArray[0].image} className="gameImage" alt="game" /></button>
                    <button onClick={() =>checkClicked()}><img src={randomImageArray[1].image} className="gameImage" alt="game" /></button>
                    <button onClick={() =>checkClicked()}><img src={randomImageArray[2].image} className="gameImage" alt="game" /></button>
                    <button><img src={randomImageArray[3].image} className="gameImage" alt="game" /></button>


                </div>
                <div className="row">

                <button><img src={randomImageArray[4].image} className="gameImage" alt="game" /></button>
                <button><img src={randomImageArray[5].image} className="gameImage" alt="game" /></button>
                <button><img src={randomImageArray[6].image} className="gameImage" alt="game" /></button>
                <button><img src={randomImageArray[7].image} className="gameImage" alt="game" /></button>

                </div>
                <div className="row">

                <button><img src={randomImageArray[8].image} className="gameImage" alt="game" /></button>
                <button><img src={randomImageArray[9].image} className="gameImage" alt="game" /></button>
                <button><img src={randomImageArray[10].image} className="gameImage" alt="game" /></button>
                <button><img src={randomImageArray[11].image} className="gameImage" alt="game" /></button>

                </div>
                <div className="row">

                <h1>Score: {score}</h1>
                <h1> Top Score: {topScore} </h1>

                </div>



            </div>
        );
    }
}

export default Game;