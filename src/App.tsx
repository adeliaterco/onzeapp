import { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Viewer from './components/Viewer';
import Register from './components/Register';

type Screen = 'login' | 'dashboard' | 'viewer' | 'plana';
type Theme = 'light' | 'dark';

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [theme, setTheme] = useState<Theme>('light');
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedScreen = localStorage.getItem('currentScreen') as Screen;
    const savedUrl = localStorage.getItem('selectedUrl');

    if (savedTheme) {
      setTheme(savedTheme);
    }

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

  useEffect(() => {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

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
    