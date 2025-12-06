import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Course, CourseItem } from '../data/courses';

interface ViewerProps {
  course: Course;
  item: CourseItem;
  onBack: () => void;
}

export default function Viewer({ course, item, onBack }: ViewerProps) {
  const isExternalLink = item.type === 'link';

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{item.title}</h1>
            <p className="text-sm text-gray-600">{course.title}</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {isExternalLink ? (
            <div className="w-full aspect-video flex flex-col items-center justify-center bg-gray-50 p-8">
              <ExternalLink size={48} className="text-blue-600 mb-4" />
              <p className="text-lg font-semibold text-gray-900 mb-2">Acceso Externo</p>
              <p className="text-gray-600 text-center mb-6">Este contenido se abre en una nueva ventana</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Ir al Contenido
              </a>
            </div>
          ) : (
            <iframe
              src={item.url}
              className="w-full aspect-video"
              title={item.title}
              allowFullScreen
            />
          )}
        </div>
      </main>
    </div>
  );
}
