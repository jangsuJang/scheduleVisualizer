import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
import sketch  from './P5Component'
import GoogleCalendar from './GoogleCalendar';

import P5Wrapper from 'react-p5-wrapper';
import ApiCalendar from 'react-google-calendar-api';

class App extends React.Component {	
  
  render() {
    return (
      <div className="App">
      <GoogleCalendar/>
      <header className="App-header">
        <P5Wrapper sketch={sketch}/>
      </header>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
