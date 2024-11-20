import Hero from "@/components/ui/Hero"

export default function Home() {
  return (
    <div
      className="w-full h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-white text-xl">
          <Hero />
        </div>
      </main>
    </div>
  );
}
