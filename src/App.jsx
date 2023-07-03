import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';

const HomeCard = lazy(() => import('./pages/Home/HomeCard'));

function App() {
  return (
    <Router>
      <Header title="redeem" subTitle="redeem your tokens" />
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomeCard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
