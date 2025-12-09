import { Button } from "@/components/ui/button";
import StarryBackground from "@/components/StarryBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <StarryBackground />
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 relative z-10 px-4">
        <div className="text-center space-y-8 max-w-3xl">
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl text-foreground/70 font-light">
              Chá de Bebê
            </p>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-foreground drop-shadow-2xl tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Iandê
            </span>{" "}
            e{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Niara
            </span>
          </h1>
          <div className="space-y-3">
            <p className="text-2xl md:text-3xl text-foreground/80 font-medium">
              Venha celebrar com a gente!
            </p>
          </div>
        </div>
        <Link href="/confirmation" className="mt-2">
          <Button
            variant="default"
            size="lg"
            className="shadow-2xl px-12 py-8 text-xl font-bold hover:scale-105 transition-transform duration-200 rounded-full"
          >
            CONFIRMAR PRESENÇA
          </Button>
        </Link>
      </div>
    </main>
  );
}
