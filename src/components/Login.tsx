import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Login({ onLogin, theme, onToggleTheme }: LoginProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-all duration-300">
      
      {/* Botão de Tema - Canto Superior */}
      <button
        onClick={onToggleTheme}
        className="fixed top-6 right-6 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 transform hover:scale-105 z-10"
      >
        {theme === 'light' ? (
          <Moon size={20} className="text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun size={20} className="text-gray-700 dark:text-gray-300" />
        )}
      </button>

      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300">
          
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="https://i.ibb.co/CK8F67my/Editedimage-1765052659367.png" 
              alt="Logo" 
              className="w-12 h-12 rounded-full mx-auto mb-4 object-cover"
            />
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Iniciar Sistema</h1>
            <p className="text-gray-600 dark:text-gray-400">Accede a tu Plan</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="tu@email.com"
                required
              />
            </div>

            {/* Botão Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}