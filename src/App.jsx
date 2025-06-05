import Post from './components/Post'

export default function App() {
  const posts = [
    { title: '⚛️ Quantum Silence', body: 'In between the clicks of time, silence hums with quantum rhyme.' },
    { title: '🌌 Cosmic Echoes', body: 'Stars whisper tales of ancient light, echoes blooming in the night.' }
  ]

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center px-4">
      <header className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase text-white">Atomic Lyrics</h1>
        <p className="text-gray-400 mt-2">fragments of thought, rhythm, and resonance</p>
      </header>
      <main className="w-full max-w-2xl flex-1">
        {posts.map((p, i) => (
          <Post key={i} title={p.title} body={p.body} />
        ))}
      </main>
      <footer className="py-6 text-gray-500 text-sm">
        © 2025 Atomic Lyrics. Crafted with stardust.
      </footer>
    </div>
  )
}
