import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Viewer from './components/Viewer';
import { Course, CourseItem } from './data/courses';

type Screen = 'login' | 'dashboard' | 'viewer';

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedItem, setSelectedItem] = useState<CourseItem | null>(null);

  const handleLogin = () => {
    setScreen('dashboard');
  };

  const handleLogout = () => {
    setScreen('login');
  };

  const handleSelectItem = (course: Course, item: CourseItem) => {
    setSelectedCourse(course);
    setSelectedItem(item);
    setScreen('viewer');
  };

  const handleBack = () => {
    setScreen('dashboard');
  };

  if (screen === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  if (screen === 'viewer' && selectedCourse && selectedItem) {
    return (
      <Viewer
        course={selectedCourse}
        item={selectedItem}
        onBack={handleBack}
      />
    );
  }

  return <Dashboard onSelectItem={handleSelectItem} onLogout={handleLogout} />;
}

export default App;
