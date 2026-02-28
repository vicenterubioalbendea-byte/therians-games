export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-widest text-purple-300 font-[Cinzel]">
        THERIANS
      </h1>

      <p className="max-w-xl text-lg text-gray-300 mb-10">
        Descubre la criatura ancestral que habita en tu alma.
        Un ritual. Una decisión. Una verdad.
      </p>

      <a
        href="/test"
        className="px-10 py-4 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
      >
        Comenzar Ritual
      </a>

    </div>
  );
}