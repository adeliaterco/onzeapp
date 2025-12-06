import { courses } from '../data/courses';
import { Moon, Sun, LogOut } from 'lucide-react';

interface DashboardProps {
  onSelectCourse: (url: string) => void;
  onLogout: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Dashboard({ onSelectCourse, onLogout, theme, onToggleTheme }: DashboardProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      
      {/* Header Mobile Otimizado */}
      <header className="w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-10 safe-area-top">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          
          {/* Logo + Título */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md sm:rounded-lg flex-shrink-0"></div>
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent truncate">
              Mis Cursos
            </h1>
          </div>
          
          {/* Controles */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            
            {/* Toggle Tema */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform active:scale-95 touch-manipulation"
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun size={18} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
            
            {/* Botão Logout */}
            <button
              onClick={onLogout}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 touch-manipulation"
            >
              <LogOut size={14} className="sm:hidden" />
              <LogOut size={16} className="hidden sm:block" />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Grid de Cursos Mobile First */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="responsive-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course.link)}
              className="mobile-card group cursor-pointer w-full max-w-full"
            >
              
              {/* Card Responsivo */}
              <div className="w-full bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                
                {/* Imagem Responsiva */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay Mobile Friendly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Botão de Acesso Responsivo */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-white/20 mx-4">
                      <span className="text-gray-900 dark:text-white font-semibold text-xs sm:text-sm">
                        Acceder al Curso
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo Responsivo */}
                <div className="p-4 sm:p-6">
                  <h2 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {course.title}
                  </h2>
                  
                  {/* Footer do Card */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800">
                      Disponível
                    </span>
                    
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}