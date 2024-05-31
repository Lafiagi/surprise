import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import GiftSelection from './GiftSelection';
import MessageForm from './MessageForm';
import SurpriseMessage from './SurpriseLink';
import ChoseGift from './ChoseGift';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"element={<HomePage />} />
        <Route path="/create-gift" element={<MessageForm />} />
        <Route path="/select-gift" element={<GiftSelection />} />
        <Route path="/gift-link" element={<SurpriseMessage />} />
        <Route path="/chose-gift" element={<ChoseGift />} />
      </Routes>
    </Router>
  );
}

export default App;
