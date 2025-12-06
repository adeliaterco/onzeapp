import { ArrowLeft, Moon, Sun, RefreshCw } from 'lucide-react';

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
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      
      {/* Header Mobile Otimizado */}
      <header className="w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-20 shadow-sm safe-area-top">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            
            {/* Navegação Esquerda */}
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <button
                onClick={onBack}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all duration-200 transform active:scale-95 touch-manipulation flex-shrink-0"
              >
                <ArrowLeft size={16} className="sm:hidden" />
                <ArrowLeft size={18} className="hidden sm:block" />
                <span className="font-medium text-sm sm:text-base hidden sm:inline">Voltar</span>
                <span className="font-medium text-sm sm:hidden">Back</span>
              </button>
            </div>

            {/* Controles Direita */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              
              {/* Refresh Button */}
              <button
                onClick={handleRefresh}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform active:scale-95 hover:rotate-180 touch-manipulation"
                title="Atualizar conteúdo"
              >
                <RefreshCw size={16} className="sm:hidden text-gray-700 dark:text-gray-300" />
                <RefreshCw size={18} className="hidden sm:block text-gray-700 dark:text-gray-300" />
              </button>
              
              {/* Toggle Tema */}
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform active:scale-95 touch-manipulation"
                title="Alterar tema"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={16} className="sm:hidden text-gray-700 dark:text-gray-300" />
                    <Moon size={18} className="hidden sm:block text-gray-700 dark:text-gray-300" />
                  </>
                ) : (
                  <>
                    <Sun size={16} className="sm:hidden text-gray-700 dark:text-gray-300" />
                    <Sun size={18} className="hidden sm:block text-gray-700 dark:text-gray-300" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Container do WebView Mobile Otimizado */}
      <main className="w-full h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] safe-area-bottom">
        <div className="w-full h-full bg-white dark:bg-gray-800">
          
          {/* Loading State */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-10" id="loading-overlay">
            <div className="text-center px-4">
              <div className="inline-block animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Carregando conteúdo...</p>
            </div>
          </div>

          {/* WebView Iframe Responsivo */}
          <iframe
            id="content-iframe"
            src={url}
            className="responsive-iframe"
            title="Conteúdo do Curso"
            onLoad={() => {
              const overlay = document.getElementById('loading-overlay');
              if (overlay) {
                overlay.style.display = 'none';
              }
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}