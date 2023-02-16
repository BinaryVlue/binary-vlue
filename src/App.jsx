import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import * as routes from './routes/routes';

//login-page
import Login from './pages/login/Login';

//dashboard-page
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={routes.LOGIN} element={<Login />} />
        <Route exact path={routes.ROOT} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

