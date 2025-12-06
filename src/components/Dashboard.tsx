import { courses, Course, CourseItem } from '../data/courses';

interface DashboardProps {
  onSelectItem: (course: Course, item: CourseItem) => void;
  onLogout: () => void;
}

export default function Dashboard({ onSelectItem, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Mis Cursos</h1>
          <button
            onClick={onLogout}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Salir
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">{course.title}</h2>
                <div className="space-y-2">
                  {course.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onSelectItem(course, item)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded border border-gray-200"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
