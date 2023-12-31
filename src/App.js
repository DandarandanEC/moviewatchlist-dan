import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Watched} from './components/Watched';
import {Add} from './components/Add';
import {Trending} from './components/Trending';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Watchlist/>}></Route>
            <Route exact path="/watched" element={<Watched/>}></Route>
            <Route exact path="/trending" element={<Trending/>}></Route>
            <Route exact path="/add" element={<Add/>}></Route>
          </Routes>          
      </Router>
    </GlobalProvider>
    
  );
}

export default App;
