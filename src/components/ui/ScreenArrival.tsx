import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Film } from 'lucide-react';
import { useExperienceStore } from '../../store/useExperienceStore';
import { navigation } from '../../navigation/navigationController';

export const ScreenArrival: React.FC = () => {
  const beginArrival = useExperienceStore((s) => s.beginArrival);

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-16 pointer-events-none select-none">
      {/* Top Bar: Wordmark & Historical Register */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-signal" />
          <span className="font-mono text-xs uppercase tracking-wider text-bone font-medium">
            APOLLO 11
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-xs font-mono tracking-wider text-stone-secondary">
          <span>ARMSTRONG · ALDRIN · COLLINS</span>
          <span>NASA HISTORICAL MISSION REGISTER</span>
        </div>
      </motion.div>

      {/* Center Editorial Title & Subtitle */}
      <div className="max-w-3xl space-y-6 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <span className="font-mono text-xs tracking-wider text-signal uppercase block">
            THE FIRST JOURNEY TO ANOTHER WORLD
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-bone">
            APOLLO 11.
            <br />
            <span className="italic font-normal text-bone/90">ONE GIANT LEAP FOR MANKIND.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-stone-secondary font-sans text-base md:text-lg leading-relaxed font-light"
        >
          On July 16, 1969, three American astronauts—Neil Armstrong, Buzz Aldrin, and Michael
          Collins—embarked aboard the Saturn V rocket to fulfill humanity's oldest dream.
          Explore the hardware, the astronauts, and the historic sites of the first crewed landing on the Moon.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={beginArrival}
            className="pointer-events-auto group relative inline-flex items-center space-x-4 px-8 py-4 bg-signal text-obsidian hover:bg-bone transition-colors duration-300 font-semibold shadow-lg shadow-signal/15"
          >
            <Compass className="w-4 h-4 text-obsidian group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              ENTER THE MISSION
            </span>
            <ArrowUpRight className="w-4 h-4 text-obsidian group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>

          <button
            type="button"
            onClick={() => navigation.toArtifact('apollo11_eagle')}
            className="pointer-events-auto group inline-flex items-center space-x-3 px-6 py-4 bg-surface-raised/90 hover:bg-surface border border-meteorite text-bone hover:border-signal/50 transition-all duration-300 font-semibold"
          >
            <Film className="w-4 h-4 text-signal group-hover:scale-110 transition-transform duration-200" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              WATCH APOLLO 11 FILM
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Editorial Coordinates & Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between text-xs font-mono tracking-wider text-stone-muted pt-6 border-t border-meteorite"
      >
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5">
            <span className="text-lunar">01.</span>
            <span>TRANQUILITY BASE (MOON)</span>
          </span>
          <span className="text-meteorite">•</span>
          <span className="flex items-center space-x-1.5">
            <span className="text-signal">02.</span>
            <span>COLUMBIA & HORIZON (ORBIT)</span>
          </span>
        </div>
        <div className="mt-3 md:mt-0 text-stone-muted">
          <span>JULY 16 – JULY 24, 1969 · PRESERVED IN SITU</span>
        </div>
      </motion.div>
    </div>
  );
};
