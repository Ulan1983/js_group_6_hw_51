import React from 'react';
import './App.css';
import CardFilm from './components/cardfilm';


function App() {
  return (
    <div className="App">
      <div className="Row">
        <div className="Card">
          <CardFilm name='Зеленая миля' year='1999' img='https://upload.wikimedia.org/wikipedia/ru/c/ce/Green_mile.jpg'/>
        </div>
        <div className="Card">
          <CardFilm name='Властелин колец' year='2001' img='https://upload.wikimedia.org/wikipedia/ru/8/89/Bakshi_Lord_of_the_Rings_animated.jpg'/>
        </div>
        <div className="Card">
          <CardFilm name='Криминальное чтиво' year='1994' img='https://upload.wikimedia.org/wikipedia/ru/9/93/Pulp_Fiction.jpg'/>
        </div>
      </div>
    </div>
    );
}

export default App;
