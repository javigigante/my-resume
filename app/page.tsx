import Hero from "@/components/ui/Hero"

export default function Home() {
  return (
    <div
      className="w-full h-screen flex flex-col"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(50, 50, 70, 1) 50%, rgba(0, 0, 0, 0.8) 100%),
          url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 fill=%22none%22 stroke=%22rgba(255,%20255,%20255,%200.2)%22 stroke-width=%220.5%22%3E%3Crect width=%22200%22 height=%22200%22/%3E%3C/svg%3E')
        `,
        backgroundSize: "cover, 200px 200px", 
        backgroundRepeat: "no-repeat, repeat", 
      }}
    >
      
      

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-white text-xl">
          <Hero/>
        </div>
      </main>
    </div>
  );
}
