import React from 'react';
import './App.css';
import deysi from './deysi.png';
import narutoTheme from './naruto.mp3';
import narutoGif from './naruto_gif.gif';
import danceGif from './dance_gif.gif';
import background from './background.jpg';

var sectionStyle = {
  backgroundImage: `url(${background})`
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section style={ sectionStyle }>
          <img src={narutoGif} alt="Naruto"></img>
          <div>
            <span>❤</span>
            <span>P</span>
            <span>a</span>
            <span>r</span>
            <span>a</span>
            <span>b</span>
            <span>é</span>
            <span>n</span>
            <span>s</span>
            <span>❤</span>
          </div>
          <div>
            <span>❤</span>
            <span>D</span>
            <span>e</span>
            <span>y</span>
            <span>s</span>
            <span>i</span>
            <span>❤</span>
          </div>
          <img src={deysi} alt="Deysi"></img>
          <img src={danceGif} alt="Naruto"></img>
        </section>
      </header>    
      <audio src={narutoTheme} controls autoPlay/>
    </div>
  );
}

export default App;
