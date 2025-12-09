import { Button } from "@/components/ui/button";
import StarryBackground from "@/components/StarryBackground";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <StarryBackground />
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground drop-shadow-lg">
          Bem-vinde ao Mimoo
        </h1>
        <p className="text-muted-foreground text-center max-w-md px-4">
          Aplicação para confirmação de chá de bebê de Iandê e Niara
        </p>
        <Button variant="default" size="lg" className="mt-2 shadow-lg">
          CONFIRME SUA PRESENÇA
        </Button>
      </div>
    </main>
  );
}
