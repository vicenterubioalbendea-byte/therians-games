"use client";

import { useEffect, useState } from "react";

type Animal = {
  image: string;
  description: string;
};

const animalsData: Record<string, Animal> = {
  Wolf: { image: "/animals/wolf.png", description: "Instinto y lealtad ancestral." },
  Lion: { image: "/animals/lion.png", description: "Rey nato y líder natural." },
  Tiger: { image: "/animals/tiger.jpg", description: "Fuerza silenciosa y letal." },
  Eagle: { image: "/animals/eagle.png", description: "Visión superior y libertad." },
  Raven: { image: "/animals/raven.jpg", description: "Mente estratégica y misteriosa." },
  Fox: { image: "/animals/fox.png", description: "Astucia y elegancia mental." },
  Panther: { image: "/animals/panther.jpg", description: "Sombra poderosa y sigilosa." },
  Dragon: { image: "/animals/dragon.jpg", description: "Energía primordial indomable." },
  Owl: { image: "/animals/owl.jpg", description: "Sabiduría profunda." },
  Bear: { image: "/animals/bear.png", description: "Protección y fuerza interior." },
  Serpent: { image: "/animals/serpent.jpg", description: "Transformación constante." },
  Stag: { image: "/animals/stag.jpg", description: "Nobleza espiritual." },
  Shark: { image: "/animals/shark.jpg", description: "Determinación imparable." },
  Horse: { image: "/animals/horse.jpg", description: "Espíritu libre." },
  Phoenix: { image: "/animals/phoenix.jpg", description: "Renacimiento eterno." },
  Crow: { image: "/animals/crow.jpg", description: "Intuición aguda." },
  Lynx: { image: "/animals/lynx.jpg", description: "Observador silencioso." },
  Hawk: { image: "/animals/hawk.jpg", description: "Precisión absoluta." },
  Jaguar: { image: "/animals/jaguar.jpg", description: "Elegancia feroz." },
  Whale: { image: "/animals/whale.jpg", description: "Profundidad emocional." },
};

const animalKeys = Object.keys(animalsData);

const questions = [
  {
    question: "1. Si caminaras solo en la noche, ¿qué sentirías realmente?",
    answers: [
      { text: "Excitación por lo desconocido", types: ["Wolf", "Panther", "Raven"] },
      { text: "Calma absoluta", types: ["Owl", "Whale", "Stag"] },
      { text: "Deseo de dominar el entorno", types: ["Lion", "Tiger", "Dragon"] },
      { text: "Curiosidad estratégica", types: ["Fox", "Lynx", "Hawk"] },
    ],
  },
  {
    question: "2. Cuando alguien te traiciona...",
    answers: [
      { text: "Nunca lo olvido", types: ["Elephant", "Wolf", "Raven"] },
      { text: "Aprendo y evoluciono", types: ["Phoenix", "Serpent", "Dragon"] },
      { text: "Ataco si es necesario", types: ["Tiger", "Shark", "Jaguar"] },
      { text: "Simplemente me alejo", types: ["Whale", "Horse", "Stag"] },
    ],
  },
  {
    question: "3. ¿Qué te define más?",
    answers: [
      { text: "Instinto puro", types: ["Wolf", "Tiger", "Shark"] },
      { text: "Intelecto estratégico", types: ["Owl", "Fox", "Raven"] },
      { text: "Fuerza interior", types: ["Bear", "Lion", "Dragon"] },
      { text: "Espíritu libre", types: ["Horse", "Eagle", "Hawk"] },
    ],
  },
  {
    question: "4. En un grupo, tú sueles ser...",
    answers: [
      { text: "El líder natural", types: ["Lion", "Wolf", "Dragon"] },
      { text: "El observador silencioso", types: ["Lynx", "Owl", "Panther"] },
      { text: "El estratega oculto", types: ["Fox", "Raven", "Serpent"] },
      { text: "El espíritu independiente", types: ["Tiger", "Horse", "Jaguar"] },
    ],
  },
  {
    question: "5. Si fueras un elemento, serías...",
    answers: [
      { text: "Fuego", types: ["Phoenix", "Dragon", "Lion"] },
      { text: "Agua profunda", types: ["Whale", "Shark", "Serpent"] },
      { text: "Aire libre", types: ["Eagle", "Hawk", "Raven"] },
      { text: "Tierra firme", types: ["Bear", "Stag", "Wolf"] },
    ],
  },
  {
    question: "6. ¿Qué te atrae más?",
    answers: [
      { text: "El misterio", types: ["Panther", "Raven", "Serpent"] },
      { text: "El poder", types: ["Lion", "Tiger", "Dragon"] },
      { text: "La sabiduría", types: ["Owl", "Whale", "Stag"] },
      { text: "La libertad", types: ["Horse", "Eagle", "Hawk"] },
    ],
  },
  {
    question: "7. Cuando tomas decisiones importantes...",
    answers: [
      { text: "Sigo mi instinto", types: ["Wolf", "Tiger", "Jaguar"] },
      { text: "Analizo cada detalle", types: ["Owl", "Fox", "Lynx"] },
      { text: "Actúo con valentía inmediata", types: ["Lion", "Dragon", "Bear"] },
      { text: "Me dejo llevar por el corazón", types: ["Whale", "Phoenix", "Horse"] },
    ],
  },
  {
    question: "8. ¿Qué tipo de energía proyectas?",
    answers: [
      { text: "Intensa y dominante", types: ["Lion", "Tiger", "Dragon"] },
      { text: "Silenciosa pero poderosa", types: ["Panther", "Lynx", "Jaguar"] },
      { text: "Sabia y profunda", types: ["Owl", "Whale", "Raven"] },
      { text: "Libre y luminosa", types: ["Phoenix", "Eagle", "Horse"] },
    ],
  },
  {
    question: "9. ¿Qué temen los demás de ti?",
    answers: [
      { text: "Mi determinación", types: ["Shark", "Tiger", "Lion"] },
      { text: "Mi inteligencia", types: ["Fox", "Owl", "Raven"] },
      { text: "Mi independencia", types: ["Horse", "Jaguar", "Panther"] },
      { text: "Mi intensidad emocional", types: ["Whale", "Phoenix", "Wolf"] },
    ],
  },
  {
    question: "10. Cuando todo se derrumba...",
    answers: [
      { text: "Me reconstruyo más fuerte", types: ["Phoenix", "Dragon", "Bear"] },
      { text: "Permanezco firme", types: ["Stag", "Wolf", "Lion"] },
      { text: "Observo y espero el momento", types: ["Lynx", "Panther", "Fox"] },
      { text: "Busco una nueva dirección", types: ["Horse", "Eagle", "Hawk"] },
    ],
  },
  {
    question: "11. Tu mayor virtud es...",
    answers: [
      { text: "Lealtad", types: ["Wolf", "Bear", "Stag"] },
      { text: "Valentía", types: ["Lion", "Tiger", "Dragon"] },
      { text: "Astucia", types: ["Fox", "Raven", "Serpent"] },
      { text: "Visión", types: ["Eagle", "Hawk", "Owl"] },
    ],
  },
  {
    question: "12. ¿Cómo reaccionas ante el peligro?",
    answers: [
      { text: "Ataco sin dudar", types: ["Tiger", "Shark", "Jaguar"] },
      { text: "Analizo la amenaza", types: ["Owl", "Lynx", "Fox"] },
      { text: "Protejo a los míos", types: ["Bear", "Wolf", "Lion"] },
      { text: "Me adapto rápidamente", types: ["Serpent", "Phoenix", "Panther"] },
    ],
  },
  {
    question: "13. Si tu alma tuviera un símbolo sería...",
    answers: [
      { text: "Una llama eterna", types: ["Phoenix", "Dragon", "Lion"] },
      { text: "Una sombra elegante", types: ["Panther", "Raven", "Jaguar"] },
      { text: "Un ojo observador", types: ["Owl", "Lynx", "Hawk"] },
      { text: "Un horizonte abierto", types: ["Horse", "Eagle", "Whale"] },
    ],
  },
  {
    question: "14. ¿Qué valoras más?",
    answers: [
      { text: "Libertad absoluta", types: ["Horse", "Eagle", "Hawk"] },
      { text: "Poder interior", types: ["Dragon", "Lion", "Tiger"] },
      { text: "Sabiduría profunda", types: ["Owl", "Whale", "Raven"] },
      { text: "Lealtad verdadera", types: ["Wolf", "Bear", "Stag"] },
    ],
  },
  {
    question: "15. Si tu espíritu despertara completamente...",
    answers: [
      { text: "Dominaría su entorno", types: ["Lion", "Tiger", "Dragon"] },
      { text: "Iluminaría a otros", types: ["Phoenix", "Eagle", "Owl"] },
      { text: "Se movería en silencio perfecto", types: ["Panther", "Lynx", "Jaguar"] },
      { text: "Guiaría con sabiduría ancestral", types: ["Raven", "Whale", "Wolf"] },
    ],
  },
];


export default function TestPage() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(animalKeys.map((a) => [a, 0]))
  );
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("therian-result");
    if (saved) setResult(saved);
  }, []);

  const handleAnswer = (types: string[]) => {
    const newScores = { ...scores };

    types.forEach((type) => {
      newScores[type] += 1;
    });

    setScores(newScores);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const winner = Object.keys(newScores).reduce((a, b) =>
        newScores[a] > newScores[b] ? a : b
      );
      setResult(winner);
      localStorage.setItem("therian-result", winner);
    }
  };

  const resetTest = () => {
    localStorage.removeItem("therian-result");
    setScores(Object.fromEntries(animalKeys.map((a) => [a, 0])));
    setStep(0);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black text-white px-6">

      {!result ? (
        <div className="max-w-2xl w-full text-center bg-black/60 backdrop-blur-xl p-12 rounded-3xl border border-purple-700 shadow-2xl">

          <h1 className="text-3xl font-bold mb-10 text-purple-300">
            {questions[step].question}
          </h1>

          <div className="grid gap-6">
            {questions[step].answers.map((a, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(a.types)}
                className="py-4 px-6 rounded-xl bg-purple-900/40 hover:bg-purple-700 border border-purple-600 text-lg transition-all duration-300 hover:scale-105"
              >
                {a.text}
              </button>
            ))}
          </div>

          <p className="mt-8 text-purple-400">
            Pregunta {step + 1} de {questions.length}
          </p>

        </div>
      ) : (
        <div className="text-center max-w-xl bg-black/70 backdrop-blur-xl p-12 rounded-3xl border border-purple-700 shadow-2xl">

          <h1 className="text-5xl font-extrabold mb-8 text-purple-300">
            {result}
          </h1>

{result && animalsData[result] && (
  <>
    <img
      src={animalsData[result].image}
      alt={result}
      className="w-[400px] rounded-3xl mx-auto shadow-[0_0_60px_rgba(168,85,247,0.8)]"
    />
  </>
)}

    

          <button
            onClick={resetTest}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-purple-700 to-purple-500 rounded-full hover:scale-110 transition"
          >
            Repetir Ritual
          </button>

        </div>
      )}
    </div>
  );
}