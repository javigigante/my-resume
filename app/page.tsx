export default function Home() {
  return (
    <div className="w-full h-screen bg-blue-950 flex flex-col">
      {/* Header */}
      <header className="w-full text-center py-4">
        <h1 className="text-white text-3xl">Bienvenido a mi página personal</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-white text-xl">Contenido principal aquí</div>
      </main>
    </div>
  );
}
