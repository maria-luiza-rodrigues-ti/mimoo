"use client";

export default function StarryBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Camadas de estrelas */}
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <div className="stars-layer-3"></div>
      <div className="stars-layer-4"></div>
      <div className="stars-layer-5"></div>

      {/* Nebulosa sutil */}
      <div className="nebula"></div>

      <style jsx>{`
        .stars-layer-1,
        .stars-layer-2,
        .stars-layer-3,
        .stars-layer-4,
        .stars-layer-5,
        .nebula {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Camada 1 - estrelas distantes minúsculas */
        .stars-layer-1 {
          background-image:
            radial-gradient(1px 1px at 7% 13%, white, transparent),
            radial-gradient(1px 1px at 14% 28%, white, transparent),
            radial-gradient(1px 1px at 23% 41%, white, transparent),
            radial-gradient(1px 1px at 31% 19%, white, transparent),
            radial-gradient(1px 1px at 42% 67%, white, transparent),
            radial-gradient(1px 1px at 53% 34%, white, transparent),
            radial-gradient(1px 1px at 61% 82%, white, transparent),
            radial-gradient(1px 1px at 72% 51%, white, transparent),
            radial-gradient(1px 1px at 83% 23%, white, transparent),
            radial-gradient(1px 1px at 91% 76%, white, transparent),
            radial-gradient(1px 1px at 17% 88%, white, transparent),
            radial-gradient(1px 1px at 38% 9%, white, transparent),
            radial-gradient(1px 1px at 64% 45%, white, transparent),
            radial-gradient(1px 1px at 87% 62%, white, transparent),
            radial-gradient(1px 1px at 9% 54%, white, transparent);
          background-size: 250px 250px;
          animation:
            float-random-1 120s ease-in-out infinite,
            twinkle-random-1 7.3s ease-in-out infinite;
        }

        /* Camada 2 - estrelas pequenas */
        .stars-layer-2 {
          background-image:
            radial-gradient(2px 2px at 11% 21%, white, transparent),
            radial-gradient(
              1px 1px at 26% 47%,
              rgba(255, 255, 255, 0.9),
              transparent
            ),
            radial-gradient(2px 2px at 39% 68%, white, transparent),
            radial-gradient(
              1px 1px at 54% 29%,
              rgba(255, 255, 255, 0.8),
              transparent
            ),
            radial-gradient(2px 2px at 67% 84%, white, transparent),
            radial-gradient(
              1px 1px at 78% 38%,
              rgba(255, 255, 255, 0.9),
              transparent
            ),
            radial-gradient(2px 2px at 89% 71%, white, transparent),
            radial-gradient(
              1px 1px at 19% 93%,
              rgba(255, 255, 255, 0.85),
              transparent
            ),
            radial-gradient(2px 2px at 44% 14%, white, transparent),
            radial-gradient(
              1px 1px at 71% 57%,
              rgba(255, 255, 255, 0.9),
              transparent
            );
          background-size: 300px 300px;
          animation:
            float-random-2 95s ease-in-out infinite,
            twinkle-random-2 5.7s ease-in-out infinite;
        }

        /* Camada 3 - estrelas médias brilhantes */
        .stars-layer-3 {
          background-image:
            radial-gradient(3px 3px at 13% 31%, white, transparent),
            radial-gradient(
              2px 2px at 34% 59%,
              rgba(255, 255, 255, 0.95),
              transparent
            ),
            radial-gradient(3px 3px at 56% 17%, white, transparent),
            radial-gradient(
              2px 2px at 73% 72%,
              rgba(255, 255, 255, 0.9),
              transparent
            ),
            radial-gradient(3px 3px at 86% 43%, white, transparent),
            radial-gradient(
              2px 2px at 21% 81%,
              rgba(255, 255, 255, 0.95),
              transparent
            ),
            radial-gradient(3px 3px at 48% 26%, white, transparent),
            radial-gradient(
              2px 2px at 79% 64%,
              rgba(255, 255, 255, 0.9),
              transparent
            );
          background-size: 400px 400px;
          animation:
            float-random-3 75s ease-in-out infinite,
            twinkle-random-3 4.2s ease-in-out infinite;
          filter: blur(0.3px);
        }

        /* Camada 4 - estrelas grandes */
        .stars-layer-4 {
          background-image:
            radial-gradient(circle 4px at 18% 37%, white, transparent),
            radial-gradient(
              circle 3px at 47% 63%,
              rgba(255, 255, 255, 0.95),
              transparent
            ),
            radial-gradient(circle 4px at 68% 24%, white, transparent),
            radial-gradient(
              circle 3px at 81% 79%,
              rgba(255, 255, 255, 0.9),
              transparent
            ),
            radial-gradient(circle 5px at 29% 51%, white, transparent);
          background-size: 550px 550px;
          animation:
            float-random-4 60s ease-in-out infinite,
            twinkle-random-4 3.1s ease-in-out infinite;
          filter: blur(0.5px);
        }

        /* Camada 5 - estrelas gigantes pulsantes */
        .stars-layer-5 {
          background-image:
            radial-gradient(
              circle 6px at 18% 25%,
              rgba(255, 255, 255, 0.95),
              transparent
            ),
            radial-gradient(
              circle 7px at 65% 40%,
              rgba(255, 255, 255, 0.92),
              transparent
            ),
            radial-gradient(
              circle 6px at 38% 75%,
              rgba(255, 255, 255, 0.9),
              transparent
            ),
            radial-gradient(
              circle 7px at 82% 68%,
              rgba(255, 255, 255, 0.93),
              transparent
            );
          background-size: 700px 700px;
          animation:
            float-random-5 90s ease-in-out infinite,
            pulse-random 12s ease-in-out infinite;
          filter: blur(0.8px);
        }

        /* Nebulosa sutil */
        .nebula {
          background:
            radial-gradient(
              ellipse 1200px 800px at 23% 37%,
              rgba(99, 102, 241, 0.03),
              transparent
            ),
            radial-gradient(
              ellipse 900px 1100px at 71% 58%,
              rgba(168, 85, 247, 0.02),
              transparent
            ),
            radial-gradient(
              ellipse 1000px 900px at 47% 76%,
              rgba(59, 130, 246, 0.025),
              transparent
            );
          animation: nebula-drift 90s ease-in-out infinite alternate;
          filter: blur(100px);
        }

        @keyframes float-random-1 {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-30px, 20px);
          }
          50% {
            transform: translate(-60px, -10px);
          }
          75% {
            transform: translate(-90px, 30px);
          }
          100% {
            transform: translate(-120px, 0);
          }
        }

        @keyframes float-random-2 {
          0% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-40px, -25px);
          }
          66% {
            transform: translate(-80px, 15px);
          }
          100% {
            transform: translate(-120px, -10px);
          }
        }

        @keyframes float-random-3 {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(-25px, -30px);
          }
          40% {
            transform: translate(-50px, 10px);
          }
          60% {
            transform: translate(-75px, -20px);
          }
          80% {
            transform: translate(-100px, 5px);
          }
          100% {
            transform: translate(-125px, -15px);
          }
        }

        @keyframes float-random-4 {
          0% {
            transform: translate(0, 0);
          }
          30% {
            transform: translate(-35px, 20px);
          }
          60% {
            transform: translate(-70px, -15px);
          }
          100% {
            transform: translate(-105px, 10px);
          }
        }

        @keyframes float-random-5 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-25px, 12px) scale(1.05);
          }
          100% {
            transform: translate(-50px, -5px) scale(1);
          }
        }

        @keyframes twinkle-random-1 {
          0%,
          100% {
            opacity: 1;
          }
          17% {
            opacity: 0.3;
          }
          34% {
            opacity: 0.8;
          }
          51% {
            opacity: 0.4;
          }
          68% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.5;
          }
        }

        @keyframes twinkle-random-2 {
          0%,
          100% {
            opacity: 1;
          }
          23% {
            opacity: 0.4;
          }
          47% {
            opacity: 0.85;
          }
          71% {
            opacity: 0.35;
          }
        }

        @keyframes twinkle-random-3 {
          0%,
          100% {
            opacity: 1;
          }
          19% {
            opacity: 0.5;
          }
          41% {
            opacity: 0.9;
          }
          63% {
            opacity: 0.45;
          }
          82% {
            opacity: 0.8;
          }
        }

        @keyframes twinkle-random-4 {
          0%,
          100% {
            opacity: 1;
          }
          31% {
            opacity: 0.55;
          }
          67% {
            opacity: 0.75;
          }
        }

        @keyframes pulse-random {
          0%,
          100% {
            opacity: 0.95;
            transform: scale(1);
          }
          13% {
            opacity: 0.7;
            transform: scale(1.08);
          }
          29% {
            opacity: 0.85;
            transform: scale(0.98);
          }
          47% {
            opacity: 0.6;
            transform: scale(1.12);
          }
          71% {
            opacity: 0.8;
            transform: scale(1.03);
          }
        }

        @keyframes nebula-drift {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          100% {
            transform: translate(-20px, 15px) scale(1.1) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}
