const fs = require('fs');
let code = fs.readFileSync('scripts/generate_apollo_artifacts.cjs', 'utf8');

const qnaCrew = `    curatedQnA: [
      {
        question: "Who walked on the Moon during Apollo 11?",
        answer: "Neil Armstrong was the first human to set foot upon the surface at 02:56 UTC on July 21, 1969, followed 20 minutes later by Buzz Aldrin. Michael Collins orbited 60 miles above aboard Columbia.",
        source: "NASA History Division (Apollo 11 Crew Summary)"
      },
      {
        question: "Why was Michael Collins alone in Columbia?",
        answer: "The Command Module required a pilot to maintain life support, orbital navigation, and communications, and to execute the critical orbital rendezvous burn to recover Eagle after ascent.",
        source: "Carrying the Fire by Michael Collins"
      },
      {
        question: "How were the Apollo spacesuits constructed?",
        answer: "The Apollo A7L spacesuits were custom-crafted by seamstresses at ILC Dover with 21 layers of nylon, Kapton, and Teflon Beta cloth to withstand temperatures from -250°F to +250°F.",
        source: "Smithsonian National Air and Space Museum"
      }
    ],`;

const qnaSaturn = `    curatedQnA: [
      {
        question: "How powerful was the Saturn V rocket?",
        answer: "The 363-foot Saturn V generated 7.61 million pounds of liftoff thrust from its five Rocketdyne F-1 engines, burning 15 tons of fuel per second—more power than 85 Hoover Dams.",
        source: "NASA Marshall Space Flight Center"
      },
      {
        question: "What was Translunar Injection (TLI)?",
        answer: "Two hours after launch, the S-IVB third stage reignited over the Pacific for 5 minutes and 48 seconds, accelerating Apollo 11 to 24,200 mph to break free from Earth's gravity.",
        source: "NASA Flight Evaluation Report AS-506"
      },
      {
        question: "How many people watched the Saturn V liftoff?",
        answer: "An estimated one million spectators crowded the beaches of Florida, while hundreds of millions watched live worldwide as the Saturn V lifted off from Pad 39A.",
        source: "NASA Public Affairs Record (July 16, 1969)"
      }
    ],`;

const qnaEasep = `    curatedQnA: [
      {
        question: "What were Neil Armstrong's first words on the lunar surface?",
        answer: "Armstrong famously declared: 'That\\'s one small step for [a] man, one giant leap for mankind.' Earlier at touchdown, he radioed: 'Houston, Tranquility Base here. The Eagle has landed.'",
        source: "NASA Apollo Lunar Surface Journal"
      },
      {
        question: "Which Apollo 11 experiment is still operating on the Moon today?",
        answer: "The Laser Ranging Retroreflector (LRRR). Astronomers on Earth still bounce laser pulses off its 100 quartz prisms to measure Earth-Moon distance with millimeter accuracy.",
        source: "NASA Jet Propulsion Laboratory"
      },
      {
        question: "How many rock samples did the crew collect?",
        answer: "Armstrong and Aldrin gathered 21.55 kg (47.5 lbs) of basalt, microbreccia, and lunar soil core tubes during their 2-hour and 31-minute surface walk.",
        source: "NASA Lunar Sample Compendium"
      }
    ],`;

const qnaColumbia = `    curatedQnA: [
      {
        question: "What was Michael Collins' experience in solo lunar orbit?",
        answer: "Collins orbited the Moon 30 times alone. For 48 minutes of every 2-hour lap, he passed behind the far side in total radio silence, maintaining the mothership with steady discipline.",
        source: "Carrying the Fire by Michael Collins"
      },
      {
        question: "What were Collins' emergency rescue plans?",
        answer: "Collins memorized 18 separate contingency burn maneuvers to descend and rescue Eagle if the lander's ascent stage underburned or entered an elliptical abort orbit.",
        source: "NASA Flight Operations Directorate"
      },
      {
        question: "Where is Command Module Columbia preserved today?",
        answer: "Columbia is on permanent display in the Boeing Milestones of Flight Hall at the Smithsonian National Air and Space Museum in Washington, D.C.",
        source: "Smithsonian National Air and Space Museum"
      }
    ],`;

const qnaJourney = `    curatedQnA: [
      {
        question: "How did Apollo 11 extract the Lunar Module in space?",
        answer: "Three hours after launch, Collins detached Columbia, flipped 180 degrees, and docked with Eagle's nose, gently pulling it out of the Saturn V's third-stage adapter shroud.",
        source: "NASA Apollo 11 Mission Report"
      },
      {
        question: "What was the barbecue roll?",
        answer: "Passive Thermal Control: the combined spacecraft rolled continuously at 3 revolutions per hour to distribute solar heating evenly between the sunny and shaded sides.",
        source: "NASA Apollo Spacecraft Operations Handbook"
      },
      {
        question: "How long did the translunar coast take?",
        answer: "The journey across 240,000 miles of deep vacuum took 73 hours and 10 minutes until the Lunar Orbit Insertion retro-burn behind the Moon.",
        source: "NASA History Division"
      }
    ],`;

const qnaRecovery = `    curatedQnA: [
      {
        question: "How fast did Apollo 11 re-enter Earth's atmosphere?",
        answer: "Columbia entered the atmosphere at 24,791 mph (Mach 36), generating friction temperatures of 5,000°F against its ablative heat shield and causing a 4-minute radio blackout.",
        source: "NASA Mission Operations Report"
      },
      {
        question: "Where did Apollo 11 splash down?",
        answer: "In the Pacific Ocean 812 nautical miles southwest of Hawaii at 16:50 UTC on July 24, 1969, just 13 miles from the recovery aircraft carrier USS Hornet.",
        source: "US Navy Recovery Task Force / USS Hornet"
      },
      {
        question: "Why were the astronauts quarantined after splashdown?",
        answer: "To protect Earth from potential unknown lunar microorganisms, the crew wore biological isolation suits and lived inside the Mobile Quarantine Facility trailer for 21 days.",
        source: "NASA Lunar Receiving Laboratory Archives"
      }
    ],`;

const qnaLegacy = `    curatedQnA: [
      {
        question: "What is the message on the Apollo 11 lunar plaque?",
        answer: "Bolted between the rungs of Eagle's ladder, the stainless-steel plaque reads: 'Here men from the planet Earth first set foot upon the Moon July 1969, A.D. We came in peace for all mankind.'",
        source: "Tranquility Base Commemorative Plaque (AS11-40-5899)"
      },
      {
        question: "How did Apollo 11 revolutionize computing?",
        answer: "NASA's demand for small, lightweight guidance computers required silicon integrated circuits, consuming 60% of all US microchips in the 1960s and birthing modern microcomputing.",
        source: "MIT Computer Science & Artificial Intelligence Lab"
      },
      {
        question: "How does Apollo 11 connect to the Artemis program and Mars?",
        answer: "Apollo 11 proved humans can travel to and survive on another world. Artemis builds directly on Apollo's trajectory and landing lessons to establish permanent lunar bases for the voyage to Mars.",
        source: "NASA Exploration Systems Development"
      }
    ],`;

const qnaVoyager = `    curatedQnA: [
      {
        question: "How does deep space exploration build on Apollo 11?",
        answer: "The worldwide Deep Space Network tracking stations, celestial navigation methods, and mission control architectures built for Apollo 11 enabled humanity's probes to travel beyond Pluto.",
        source: "NASA Jet Propulsion Laboratory"
      },
      {
        question: "What is the Golden Record?",
        answer: "A 12-inch gold-plated copper phonograph record carrying sounds, music, and greetings in 55 languages, sailing through interstellar space for billions of years.",
        source: "Voyager Interstellar Mission Archives"
      }
    ],`;

function replaceQnA(key, newQnA) {
  const marker = key + ': {';
  const startIdx = code.indexOf(marker);
  if (startIdx === -1) { console.error('Key not found:', key); return; }
  const qnaIdx = code.indexOf('curatedQnA: [', startIdx);
  const qnaEnd = code.indexOf('],', qnaIdx);
  code = code.slice(0, qnaIdx) + newQnA + code.slice(qnaEnd + 2);
}

replaceQnA('apollo_lrv', qnaCrew);
replaceQnA('surveyor3', qnaSaturn);
replaceQnA('apollo_alsep', qnaEasep);
replaceQnA('sojourner', qnaColumbia);
replaceQnA('spirit', qnaJourney);
replaceQnA('opportunity', qnaRecovery);
replaceQnA('insight', qnaLegacy);
replaceQnA('voyager1', qnaVoyager);

fs.writeFileSync('scripts/generate_apollo_artifacts.cjs', code, 'utf8');
console.log('Updated scripts/generate_apollo_artifacts.cjs with tailored QnAs');
