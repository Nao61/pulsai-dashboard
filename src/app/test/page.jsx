// src/app/test/page.jsx
export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full space-y-6">
        {/* Test couleurs custom */}
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
          <span className="text-white text-2xl font-bold">P</span>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Test Tailwind V4
          </h1>
          <p className="text-neutral-600">
            Si tu vois ce design, Tailwind V4 fonctionne parfaitement !
          </p>
        </div>

        {/* Test des couleurs */}
        <div className="space-y-2">
          <div className="bg-primary text-white p-3 rounded-lg text-sm font-medium">
            Couleur Primary
          </div>
          <div className="bg-secondary text-neutral-900 p-3 rounded-lg text-sm font-medium">
            Couleur Secondary
          </div>
          <div className="bg-success text-white p-3 rounded-lg text-sm font-medium">
            Couleur Success
          </div>
        </div>

        {/* Test boutons */}
        <div className="space-y-3">
          <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Bouton Primary
          </button>
          <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-lg transition-all">
            Bouton Outline
          </button>
        </div>

        {/* Test ombres */}
        <div className="bg-neutral-50 p-4 rounded-lg shadow-intercom hover:shadow-intercom-hover transition-shadow">
          <p className="text-sm text-neutral-700">
            Survole-moi pour voir ombre Intercom
          </p>
        </div>
      </div>
    </div>
  );
}