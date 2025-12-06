import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Viewer from './components/Viewer';

type Screen = 'login' | 'dashboard' | 'viewer';
type Theme = 'light' | 'dark';

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [theme, setTheme] = useState<Theme>('light');
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const handleLogin = () => {
    setScreen('dashboard');
  };

  const handleLogout = () => {
    setScreen('login');
  };

  const handleSelectCourse = (url: string) => {
    setSelectedUrl(url);
    setScreen('viewer');
  };

  const handleBack = () => {
    setScreen('dashboard');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Aplicar tema no documento
  document.documentElement.setAttribute('data-theme', theme);

  if (screen === 'login') {
    return <Login onLogin={handleLogin} theme={theme} onToggleTheme={toggleTheme} />;
  }

  if (screen === 'viewer' && selectedUrl) {
    return (
      <Viewer
        url={selectedUrl}
        onBack={handleBack}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <Dashboard 
      onSelectCourse={handleSelectCourse} 
      onLogout={handleLogout}
      theme={theme}
      onToggleTheme={toggleTheme}
    />
  );
}

export default App;