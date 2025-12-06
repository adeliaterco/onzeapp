import { ArrowLeft, Moon, Sun, RefreshCw, Home } from 'lucide-react';

interface ViewerProps {
  url: string;
  onBack: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Viewer({ url, onBack, theme, onToggleTheme }: ViewerProps) {
  const handleRefresh = () => {
    const iframe = document.getElementById('content-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      {/* Header Moderno */}
      <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Navegação Esquerda */}
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <ArrowLeft size={18} />
                <span className="font-medium">Voltar</span>
              </button>
              
              <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <Home size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Visualizando Conteúdo
                </span>
              </div>
            </div>

            {/* Controles Direita */}
            <div className="flex items-center gap-3">
              {/* Botão Refresh */}
              <button
                onClick={handleRefresh}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 hover:rotate-180"
                title="Atualizar conteúdo"
              >
                <RefreshCw size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
              
              {/* Toggle Tema */}
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
                title="Alterar tema"
              >
                {theme === 'light' ? (
                  <Moon size={18} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun size={18} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Container do*