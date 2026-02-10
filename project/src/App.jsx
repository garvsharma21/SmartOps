import { useState } from 'react';
// import { useAuth } from './contexts/AuthContext';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  // const { user, loading } = useAuth();
  const user = null;      // 👈 temporary
  const loading = false;// 👈 temporary
  const [showLogin, setShowLogin] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  if (user) {
    return <Dashboard />;
  }

  if (showLogin) {
    return <LoginPage onNavigateToSignup={() => setShowLogin(false)} />;
  }

  return <SignupPage onNavigateToLogin={() => setShowLogin(true)} />;
}

export default App;
