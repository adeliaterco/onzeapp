import { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Viewer from './components/Viewer';

type Screen = 'login' | 'dashboard' | 'viewer';
type Theme = 'light' | 'dark';

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [theme, setTheme] = useState<Theme>('light');
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🔥 RECUPERAR ESTADO DO LOCALSTORAGE AO INICIAR
  useEffect(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedScreen = localStorage.getItem('currentScreen') as Screen;
    const savedUrl = localStorage.getItem('selectedUrl');

    // Restaurar tema
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Restaurar login
    if (savedLoginState === 'true') {
      if (savedScreen === 'viewer' && savedUrl) {
        setSelectedUrl(savedUrl);
        setScreen('viewer');
      } else {
        setScreen('dashboard');
      }
    } else {
      setScreen('login');
    }

    setIsLoading(false);
  }, []);

  // 🔥 APLICAR TEMA NO HTML
  useEffect(() => {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // 🔥 SALVAR ESTADO ATUAL
  useEffect(() => {
    if (screen !== 'login') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentScreen', screen);
    }
  }, [screen]);

  useEffect(() => {
    if (selectedUrl) {
      localStorage.setItem('selectedUrl', selectedUrl);
    }
  }, [selectedUrl]);

  const handleLogin = () => {
    setScreen('dashboard');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.removeItem('selectedUrl');
  };

  const handleLogout = () => {
    setScreen('login');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentScreen');
    localStorage.removeItem('selectedUrl');
  };

  const handleSelectCourse = (url: string) => {
    setSelectedUrl(url);
    setScreen('viewer');
  };

  const handleBack = () => {
    setScreen('dashboard');
    localStorage.removeItem('selectedUrl');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 🔥 TELA DE LOADING INICIAL
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

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