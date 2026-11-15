const fs = require('fs');
const path = require('path');

const fileContent = `import { ArtifactData } from '../types';

export const ARTIFACTS: Record<string, ArtifactData> = {
  // =========================================================================
  // THE MOON: APOLLO 11 TRANQUILITY BASE COLLECTION
  // =========================================================================

  apollo11_eagle: {
    id: 'apollo11_eagle',
    name: 'APOLLO 11 EAGLE LUNAR MODULE',
    callsign: 'LM-5 Eagle (Tranquility Base)',
    mission: 'Apollo 11',
    year: '1969',
    destination: 'moon',
    category: 'Complete Spacecraft',
    modelType: 'Crewed Lunar Module Lower Landing Stage & Descent Propulsion System',
    landingDate: '20 July 1969 — 20:17:40 UTC',
    declarationDate: 'Tranquility Base Permanent Heritage Site',
    operationalDuration: '21 hours, 36 minutes surface stay',
    status: 'abandoned',
    statusLabel: 'Permanent Heritage Hardware — Intact at Tranquility Base',
    locationName: 'Mare Tranquillitatis (Sea of Tranquility)',
    heroImage: '/images/apollo11_surface.jpg',
    heroCaption:
      'Buzz Aldrin working beside the scientific equipment bay of Apollo 11 Lunar Module Eagle at Tranquility Base, July 20, 1969 (NASA AS11-40-5921).',
    heroNasaId: 'AS11-40-5921',
    galleryImages: [
      {
        src: '/images/apollo11_surface.jpg',
        caption: 'Lunar Module Eagle descent stage standing on Mare Tranquillitatis (AS11-40-5921).',
        nasaId: 'AS11-40-5921',
      },
      {
        src: '/images/exhibits/eagle_plaque.jpg',
        caption: 'Stainless-steel commemorative plaque mounted to Eagle’s forward landing strut (AS11-40-5899).',
        nasaId: 'AS11-40-5899',
      },
      {
        src: '/images/exhibits/apollo_boot.jpg',
        caption: 'Soil mechanics documentation photograph of a crew bootprint pressed into undisturbed lunar regolith (AS11-40-5877).',
        nasaId: 'AS11-40-5877',
      },
    ],
    has3DModel: true,
    coordinates: {
      latitude: '0.67408° N',
      longitude: '23.47297° E',
      elevation: '−1,500 m',
      planetaryRegion: 'Mare Tranquillitatis, The Moon',
      worldPosition: [0, 0, 0],
    },
    brief: 'The historic spacecraft that made humanity\\'s first landing on another world.',
    shortDescription:
      'The octagonal lower stage that lowered Eagle onto Mare Tranquillitatis and anchored humanity’s first lunar liftoff.',
    tagline:
      'Built strictly for airless spaceflight, Eagle’s gold-wrapped lower stage absorbed touchdown and served as the stationary launch pad when the upper ascent stage returned to orbit.',
    guide: {
      explanation:
        "This is the descent stage of the Apollo 11 Lunar Module Eagle. It carried Neil Armstrong and Buzz Aldrin to the Moon's surface on July 20, 1969. After the astronauts returned to lunar orbit using the ascent stage, this lower section remained on the Moon as humanity's first extraterrestrial monument.",
      purpose:
        'Controlled powered deceleration from lunar orbit to touchdown, housing descent propellants, thermal blankets, landing gear, and surface storage bays, then acting as the launch platform for the ascent stage.',
      missionUsed: 'NASA Apollo 11 (LM-5), July 16–24, 1969.',
      whyLeftBehind:
        'The Lunar Module operated in two stages to conserve mass: once surface exploration concluded, the ascent stage fired off the top of the descent stage, leaving the heavier lower section behind.',
      presentStatus:
        'Non-operational and permanently preserved intact on Mare Tranquillitatis; its ascent stage separated into lunar orbit after rendezvous with Columbia and later impacted elsewhere on the Moon.',
      spokenIntro:
        'Welcome to the Apollo 11 exhibition. Standing before you is the historic Lunar Module Eagle.',
      voiceScript:
        "Look closely at the golden structure before you. On July 20th, 1969, this very machine carried Neil Armstrong and Buzz Aldrin down to the basalt plains of Mare Tranquillitatis. Built strictly for the vacuum of space, its throttleable rocket engine fired against the Moon's gravity, while its crushable honeycomb footpads absorbed touchdown into the pristine dust. For twenty-one hours, it served as humanity's first home on another world. But here is the remarkable thing... It was never designed to bring all of itself back home. To conserve mass, the upper ascent stage fired directly off this lower chassis, using it as a stationary launch pad to carry the astronauts back to orbit. Neil and Buzz flew home, leaving this silent base behind. Today, more than half a century later, Eagle's descent stage stands exactly as they left it—a permanent monument resting under the airless sky.",
      keyFacts: [
        'Landed at Mare Tranquillitatis on July 20, 1969 at 20:17:40 UTC',
        'Served as the launch platform for Neil Armstrong and Buzz Aldrin',
        'Permanently preserved in situ at Tranquility Base',
      ],
    },
    components: [
      {
        id: 'eagle-chassis',
        name: 'Octagonal Descent Stage Chassis',
        category: 'Hardware Component',
        remainsOnSite: true,
        siteNote: 'Remains standing upright at Tranquility Base.',
        description:
          'Lightweight aluminum cruciform and octagonal structure wrapped in gold-tinted Kapton thermal foil, housing four spherical propellant tanks and the Quadrant storage bays.',
        guideExplanation:
          'This central octagonal body holds the empty fuel and oxidizer tanks along with the gold-coated Kapton foil that shielded electronics from 120°C sunlight.',
        voiceScript:
          "You are inspecting the octagonal chassis of Eagle's descent stage. Wrapped in shimmering gold Kapton and Mylar blankets, this aluminum frame housed four giant propellant tanks and shielded delicate guidance systems against extreme lunar temperature swings.",
        hotspot: { x: 50, y: 52 },
      },
      {
        id: 'eagle-legs',
        name: 'Four Landing Gear Struts',
        category: 'Landing Equipment',
        remainsOnSite: true,
        siteNote: 'All four struts remain grounded in the basalt regolith.',
        description:
          'Outrigger aluminum struts incorporating crushable honeycomb cartridges engineered to absorb vertical and lateral touchdown shock without rebounding.',
        guideExplanation:
          'Each telescoping strut uses internal crushable aluminum honeycomb designed to deform once on contact, preventing the spacecraft from tipping on sloped craters.',
        voiceScript:
          'These four outrigger struts absorbed the kinetic shock of touchdown. Inside each telescoping aluminum cylinder was a crushable honeycomb cartridge that compressed on impact, stabilizing Eagle on the uneven lunar surface.',
        hotspot: { x: 26, y: 68 },
      },
      {
        id: 'eagle-footpads',
        name: 'Circular Landing Footpads',
        category: 'Landing Equipment',
        remainsOnSite: true,
        siteNote: 'Resting lightly in shallow regolith depressions.',
        description:
          'Spun-aluminum 0.91-meter concave dishes attached to ball-joint swivels to distribute 15 metric tons of Earth-weight load safely across loose lunar dust.',
        guideExplanation:
          'Because engineers did not know how deeply spacecraft would sink into lunar soil, wide aluminum dish footpads spread the lander’s weight across loose dust.',
        voiceScript:
          "These thirty-seven-inch spun-aluminum dish footpads distributed Eagle's weight safely across powdery regolith, sinking only a few centimeters into the lunar dust during humanity's historic landing.",
        hotspot: { x: 74, y: 84 },
      },
      {
        id: 'eagle-ladder',
        name: 'Nine-Rung Egress Ladder & Plaque',
        category: 'Hardware Component',
        remainsOnSite: true,
        siteNote: 'Mounted to the forward landing strut facing north.',
        description:
          'Tubular aluminum ladder descending from the forward porch, carrying the etched stainless-steel plaque inscribed for Tranquility Base.',
        guideExplanation:
          'Neil Armstrong climbed down these nine rungs before stepping onto the surface. The stainless plaque bolted between rungs bears the date July 1969 A.D.',
        voiceScript:
          'Neil Armstrong climbed down these nine ladder rungs before taking his giant leap for mankind. Bolted between the lower rungs is the stainless-steel commemorative plaque inscribed: We came in peace for all mankind.',
        hotspot: { x: 64, y: 56 },
      },
      {
        id: 'eagle-dps',
        name: 'TRW Descent Propulsion Engine',
        category: 'Landing Equipment',
        remainsOnSite: true,
        siteNote: 'Centered beneath the octagonal stage.',
        description:
          'The first deeply throttleable crewed rocket engine (10% to 100% thrust), burning Aerozine 50 and nitrogen tetroxide for precision hovering.',
        guideExplanation:
          'Armstrong manually throttled this single gimbaled engine during the final minutes to skim past West Crater’s boulders with under 25 seconds of usable fuel.',
        voiceScript:
          'Centered beneath the lander is the Descent Propulsion Engine. The first deeply throttleable rocket engine built for space, it allowed Neil Armstrong to manually hover and navigate past boulder fields with under thirty seconds of fuel remaining.',
        hotspot: { x: 50, y: 78 },
      },
      {
        id: 'eagle-ascent-note',
        name: 'Upper Ascent Stage (Separated)',
        category: 'Complete Spacecraft',
        remainsOnSite: false,
        siteNote: 'Departed Tranquility Base on 21 July 1969; later impacted elsewhere on the Moon.',
        description:
          'Pressurized crew cabin that lifted off from atop the descent stage to dock with Command Module Columbia in lunar orbit.',
        guideExplanation:
          'Important distinction: only the lower descent stage sits at Tranquility Base today. The crew cabin separated on July 21 and later crashed into an unmapped site on the Moon.',
        voiceScript:
          'Notice that the upper crew cabin is absent. The ascent stage served as the crew compartment and fired off this lower stage to rendezvous with Michael Collins aboard Columbia, leaving only the descent stage standing at Tranquility Base.',
      },
    ],
    specs: {
      mass: '2,034 kg dry descent stage mass (15,103 kg total LM loaded)',
      powerSource: 'Silver-zinc internal batteries (1,600 Ah)',
      communication: 'S-band steerable antenna on ascent stage; VHF telemetry during descent',
      primaryInstruments: [
        'Descent Propulsion System (DPS) throttleable engine',
        'Modular Equipment Stowage Assembly (MESA)',
        'Early Apollo Scientific Experiments Package (EASEP)',
      ],
    },
    storyChapters: [
      {
        id: 'apollo-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THE MACHINE FOR VACUUM',
        headline: 'Engineered Without Sky or Air.',
        narrative:
          'Designed by Grumman Aerospace specifically for spaceflight beyond Earth’s atmosphere, the Lunar Module abandoned wings, heat shields, and aerodynamic smoothness. On July 20, 1969, in lunar orbit behind the Moon, Eagle separated from Command Module Columbia. Armstrong radioed to Houston: "The Eagle has wings," initiating the descent toward history.',
        historicalContext:
          'The descent stage carried the heavy propellant tanks, landing legs, radar antenna, and storage bays; the ascent stage above carried the pressurized cockpit and return engine.',
        archivalImage: '/images/apollo11_surface.jpg',
        imageCaption: 'Apollo 11 Lunar Module Eagle on Mare Tranquillitatis (NASA AS11-40-5921).',
        keyMetric: { label: 'Dry Descent Mass', value: '2,034 kg' },
        audioFrequency: 220,
      },
      {
        id: 'apollo-ch-2',
        chapterNumber: '02',
        chapterTitle: 'THE DESCENT TO TRANQUILITY',
        headline: 'Low Fuel Over West Crater.',
        narrative:
          'During powered descent above Mare Tranquillitatis, the Apollo Guidance Computer flashed unexpected 1202 and 1201 program alarms. Down below, the automated trajectory was guiding Eagle directly into a boulder-strewn crater the size of a football stadium. Taking semi-manual attitude control, Neil Armstrong throttled the engine forward, skimming horizontally over the rocks until settling Eagle down into the dust at 20:17:40 UTC with under 30 seconds of fuel remaining. "Houston, Tranquility Base here. The Eagle has landed."',
        historicalContext:
          'CAPCOM Charlie Duke replied from Mission Control: "Roger, Tranquility, we copy you on the ground. You got a bunch of guys about to turn blue. We\\'re breathing again. Thanks a lot."',
        archivalImage: '/images/exhibits/apollo_boot.jpg',
        imageCaption: 'Crew bootprint documenting regolith compaction beside Eagle (NASA AS11-40-5877).',
        keyMetric: { label: 'Touchdown Time', value: '20:17:40 UTC • July 20, 1969' },
        audioFrequency: 293.66,
      },
      {
        id: 'apollo-ch-3',
        chapterNumber: '03',
        chapterTitle: 'THE ASCENT FROM THE MOON',
        headline: 'Silently Anchored for Millennia.',
        narrative:
          'After 21 hours and 36 minutes on the lunar surface, Armstrong and Aldrin pressurized the ascent stage cockpit. At 17:54 UTC on July 21, the ascent engine fired directly off the top deck of the descent stage. Exhaust blast flattened the nearby flag and scattered loose dust, leaving the octagonal lower frame standing undisturbed under the airless sky as humanity\\'s first extraterrestrial monument.',
        historicalContext:
          'Decades later, NASA\\'s Lunar Reconnaissance Orbiter photographed Eagle\\'s descent stage shadow and astronaut footpaths clearly visible from lunar orbit.',
        archivalImage: '/images/exhibits/eagle_plaque.jpg',
        imageCaption: 'The Tranquility Base commemorative plaque attached to Eagle’s forward strut (NASA AS11-40-5899).',
        keyMetric: { label: 'Status', value: 'Protected Heritage Hardware' },
        audioFrequency: 440,
      },
    ],
    legacy: {
      physicalCondition:
        'Structurally intact octagonal descent stage resting upright on all four footpads at Mare Tranquillitatis, surrounded by bootprints and EASEP instruments.',
      currentMilestone:
        'Recognized under international and U.S. space heritage guidelines protecting the Tranquility Base landing site.',
      scientificImpact: [
        'Validated variable-thrust hypergolic rocket landing on an uncharted extraterrestrial world.',
        'Provided mechanical shelter, communications, and power during surface preparation for humanity\\'s first EVA.',
        'Enabled direct verification of lunar bearing strength across basaltic mare regolith.',
      ],
      whatRemainsToday:
        'The gold-blanketed octagonal descent stage, four landing legs and footpads, egress ladder with plaque, and empty propellant bay—minus the departed ascent cabin.',
      sources: [
        {
          title: 'NASA Apollo Lunar Surface Journal: Apollo 11 Operations & Hardware',
          organization: 'NASA History Division',
          url: 'https://www.nasa.gov/history/alsj/a11/a11.html',
          catalogId: 'NSSDC-ID: 1969-059C',
        },
        {
          title: 'Lunar Reconnaissance Orbiter Camera: Apollo 11 Tranquility Base Overflight',
          organization: 'NASA / GSFC / ASU',
          url: 'https://www.lroc.asu.edu/featured_sites/view_site/1',
          catalogId: 'LROC-A11-SITE',
        },
      ],
    },
    curatedQnA: [
      {
        question: "Why was the descent stage left behind at Tranquility Base?",
        answer: "The Lunar Module was an engineered two-stage vehicle. To conserve weight and maximize payload, the upper ascent stage fired directly off the top deck of the descent stage, using it as a stationary launch pad to carry Armstrong and Aldrin back to lunar orbit.",
        source: "NASA Apollo 11 Operations Handbook (LM-5)"
      },
      {
        question: "What triggered the 1202 and 1201 computer alarms during landing?",
        answer: "The rendezvous radar was accidentally left in the wrong mode, flooding the Apollo Guidance Computer with extra interrupts. Software lead Margaret Hamilton's asynchronous priority executive dropped low-priority tasks to keep thrusters and descent radar running flawlessly.",
        source: "MIT Instrumentation Laboratory / NASA Mission Archives"
      },
      {
        question: "How close did Eagle come to running out of descent propellant?",
        answer: "Armstrong had to fly manually over a field of car-sized boulders around West Crater. When Eagle settled onto Mare Tranquillitatis, only about 25 to 30 seconds of usable hovering propellant remained before a mandatory abort threshold.",
        source: "NASA Apollo Lunar Surface Journal (Tranquility Base Descent)"
      }
    ],
  },

  apollo_lrv: {
    id: 'apollo_lrv',
    name: 'THE APOLLO 11 CREW',
    callsign: 'Armstrong · Aldrin · Collins',
    mission: 'Apollo 11',
    year: '1969',
    destination: 'moon',
    category: 'Complete Spacecraft',
    modelType: 'Commander, Lunar Module Pilot & Command Module Pilot',
    landingDate: '20 July 1969 (Surface Landing)',
    declarationDate: 'Presidential Medal of Freedom Honorees',
    operationalDuration: '195 hours, 18 minutes, 35 seconds (Total Flight Duration)',
    distanceTraveled: '953,054 miles (Round-Trip Earth-Moon)',
    status: 'operational',
    statusLabel: 'Mission Accomplished — Safe Return to Earth',
    locationName: 'Tranquility Base & Command Module Columbia',
    heroImage: '/images/exhibits/apollo_lrv.jpg',
    heroCaption:
      'The Apollo 11 crew: Neil A. Armstrong (Commander), Michael Collins (Command Module Pilot), and Edwin E. "Buzz" Aldrin Jr. (Lunar Module Pilot), NASA Portrait S69-31740.',
    heroNasaId: 'S69-31740',
    galleryImages: [
      {
        src: '/images/exhibits/apollo_lrv.jpg',
        caption: 'Commander Neil Armstrong during lunar training simulations in Houston (NASA S69-38858).',
        nasaId: 'S69-38858',
      },
      {
        src: '/images/apollo11_surface.jpg',
        caption: 'Buzz Aldrin photographed on the lunar surface with Neil Armstrong reflected in his gold visor (NASA AS11-40-5903).',
        nasaId: 'AS11-40-5903',
      },
      {
        src: '/images/exhibits/mer_cleanroom.jpg',
        caption: 'Michael Collins inside the Command Module simulator preparing for solo orbital watch (NASA S69-32247).',
        nasaId: 'S69-32247',
      },
    ],
    has3DModel: false,
    coordinates: {
      latitude: '0.67408° N',
      longitude: '23.47297° E',
      elevation: 'Sea of Tranquility',
      planetaryRegion: 'Mare Tranquillitatis / Lunar Orbit',
      worldPosition: [0, 0, 0],
    },
    brief: 'Three astronauts who carried the aspirations of all humankind.',
    shortDescription:
      'Neil Armstrong, Buzz Aldrin, and Michael Collins: three seasoned military aviators and aerospace engineers selected to execute history’s first lunar landing.',
    tagline:
      'Representing over 400,000 scientists, engineers, and workers who built the Apollo program, Armstrong, Aldrin, and Collins flew with icy discipline across a quarter-million miles of space to change history forever.',
    guide: {
      explanation:
        'The Apollo 11 crew consisted of Commander Neil A. Armstrong, Lunar Module Pilot Edwin E. "Buzz" Aldrin Jr., and Command Module Pilot Michael Collins. Together, they completed the national objective set by President John F. Kennedy in May 1961: landing a human on the Moon and returning him safely to Earth.',
      purpose:
        'Piloting the Saturn V stack, guiding the Lunar Module Eagle to a precision touchdown on Mare Tranquillitatis, conducting the first human lunar extravehicular exploration, and maintaining solo orbital command aboard Columbia.',
      missionUsed: 'NASA Apollo 11 (AS-506), July 16–24, 1969.',
      whyLeftBehind:
        'While the astronauts safely splashed down in the Pacific Ocean on July 24, 1969, their physical footsteps, scientific packages, and the lower stage of Eagle remain permanently on the lunar surface.',
      presentStatus:
        'All three astronauts received the Presidential Medal of Freedom, the Congressional Gold Medal, and were celebrated worldwide as ambassadors of peaceful human exploration.',
      spokenIntro:
        'Welcome! You are exploring the legendary crew of Apollo 11: Neil Armstrong, Buzz Aldrin, and Michael Collins.',
      voiceScript:
        "Behind every great machine are the human minds that steer it into the unknown. For Apollo 11, that responsibility rested on three extraordinary men: Neil Armstrong, Buzz Aldrin, and Michael Collins. Neil Armstrong, the Commander, was a former naval combat aviator and Purdue aeronautical engineer whose calm under pressure became legendary when he saved Gemini 8 from a fatal roll. Buzz Aldrin, the Lunar Module Pilot, held a doctorate from MIT in orbital mechanics—his fellow astronauts nicknamed him 'Dr. Rendezvous' because he literally wrote the manual on how spacecraft dock in space. And Michael Collins, the Command Module Pilot, was a razor-sharp Air Force test pilot whose solo vigil in orbit around the Moon kept the lifeline open. Together, they represented four hundred thousand engineers, seamstresses, programmers, and technicians back on Earth. When they launched from Pad 39A, they carried the hope of the entire planet.",
      keyFacts: [
        'Commander: Neil Armstrong (first human to walk on the Moon)',
        'Lunar Module Pilot: Buzz Aldrin (second human to walk on the Moon)',
        'Command Module Pilot: Michael Collins (flew solo orbital watch in Columbia)',
      ],
    },
    components: [
      {
        id: 'crew-armstrong',
        name: 'Commander Neil A. Armstrong',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'First human to set foot on another celestial body at 02:56 UTC, July 21, 1969.',
        description:
          'Naval aviator, experimental X-15 rocket plane pilot, and Purdue aeronautical engineer. Flew 78 combat missions in Korea, commanded Gemini 8, and served as Apollo 11 mission commander.',
        guideExplanation:
          'Armstrong flew Eagle manually over a field of boulders with less than thirty seconds of usable descent propellant remaining, guiding humanity safely down to Tranquility Base.',
        voiceScript:
          "Neil Armstrong was renowned for his steady heart rate and split-second engineering judgment. During the final moments of Eagle's descent, when the automated computer guided them toward a boulder-strewn crater, Armstrong took manual control and skimmed horizontally until finding smooth ground at Tranquility Base.",
        hotspot: { x: 30, y: 40 },
      },
      {
        id: 'crew-aldrin',
        name: 'Lunar Module Pilot Buzz Aldrin',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Stepped onto Mare Tranquillitatis twenty minutes after Armstrong, calling it "Magnificent Desolation."',
        description:
          'West Point graduate and MIT Doctor of Science in Astronautics. Pioneered underwater neutral buoyancy training for spacewalks and calculated orbital rendezvous trajectories on Gemini 12.',
        guideExplanation:
          'Aldrin called out radar altitude and descent rates to Armstrong during landing, evaluated lunar mobility, and deployed the early Apollo science experiments on the surface.',
        voiceScript:
          "Buzz Aldrin was the technical genius of orbital mechanics. Inside Eagle's cockpit, he continuously monitored altitude radar and computer memory, calling out vital speed and fuel data while Armstrong looked out the window. On the surface, he explored the dust for over two hours, testing human gait in one-sixth gravity.",
        hotspot: { x: 50, y: 50 },
      },
      {
        id: 'crew-collins',
        name: 'Command Module Pilot Michael Collins',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Orbited the Moon 30 times alone aboard Columbia while Armstrong and Aldrin explored the surface.',
        description:
          'Air Force experimental test pilot and Gemini 10 veteran. Piloted Command Module Columbia solo across 60 nautical miles above the Moon, keeping communications and docking systems ready.',
        guideExplanation:
          'Collins was responsible for orbital navigation, tracking Eagle from orbit, and executing the critical docking maneuver that brought Armstrong and Aldrin safely home.',
        voiceScript:
          "Michael Collins held the loneliest post in human history. While Neil and Buzz walked on the surface, Collins circled sixty miles above in Columbia. Every two hours, as he slipped behind the far side of the Moon, all radio contact with Earth cut off for forty-eight minutes. He maintained total focus, knowing that if the ascent engine underperformed, he was the sole person who could navigate Columbia down to rescue them.",
        hotspot: { x: 70, y: 40 },
      },
      {
        id: 'crew-a7l-suits',
        name: 'A7L Extravehicular Mobility Unit (Spacesuits)',
        category: 'Landing Equipment',
        remainsOnSite: false,
        siteNote: 'Custom-tailored 21-layer spacesuits with Hamilton Standard Portable Life Support System backpacks.',
        description:
          'Manufactured by ILC Dover seamstresses, the Apollo A7L spacesuit provided pressure, oxygen, thermal insulation against ±250°F temperatures, and micrometeoroid protection.',
        guideExplanation:
          'Each spacesuit operated as an autonomous human spacecraft, providing 100% pure oxygen at 3.7 psi and water-cooled undergarments to prevent overheating.',
        voiceScript:
          "To walk on the surface, the astronauts wore A7L spacesuits handmade by seamstresses at ILC Dover. Composed of twenty-one distinct layers of nylon, Kapton foil, Teflon, and Beta cloth, the suit protected against micrometeoroids and extreme temperatures swinging from boiling sun to frozen shadow.",
        hotspot: { x: 50, y: 75 },
      },
    ],
    specs: {
      mass: 'Three Astronauts + Spacesuits (~360 kg combined)',
      powerSource: 'Hamilton Standard PLSS silver-zinc batteries (4-hour EVA endurance)',
      communication: 'VHF lunar surface relay & S-band direct Earth link via Goldstone & Honeysuckle Creek',
      primaryInstruments: [
        'A7L pressure suits with Liquid Cooling Garments (LCG)',
        'Portable Life Support System (PLSS) primary & secondary oxygen packs',
        'Lunar Extravehicular Visor Assembly with gold-coated thermal sunshade',
      ],
    },
    storyChapters: [
      {
        id: 'crew-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THE CHOSEN THREE',
        headline: 'Forged in Jet Cockpits and Wind Tunnels.',
        narrative:
          'In January 1969, NASA announced the crew for Apollo 11: Neil Armstrong as Commander, Buzz Aldrin as Lunar Module Pilot, and Michael Collins as Command Module Pilot. All three were born in 1930 and were seasoned military aviators who had flown Gemini orbital missions. Over six intense months, they spent hundreds of hours in vacuum chambers, lunar landing research vehicles, and centrifuge simulators to master every conceivable system failure.',
        historicalContext:
          'NASA rotated crews through a prime and backup system; Armstrong, Aldrin, and Collins had previously served together on backup crews before receiving the prime Apollo 11 assignment.',
        archivalImage: '/images/exhibits/apollo_lrv.jpg',
        imageCaption: 'The Apollo 11 crew during formal spacesuit portrait sessions at Kennedy Space Center (NASA S69-31740).',
        keyMetric: { label: 'Combined Flight Hours', value: 'Over 10,000 hrs' },
        audioFrequency: 240,
      },
      {
        id: 'crew-ch-2',
        chapterNumber: '02',
        chapterTitle: 'THE DIVISION OF DUTY',
        headline: 'Precision Teamwork in Deep Space.',
        narrative:
          'Spaceflight demands complete trust and razor-sharp specialization. Neil Armstrong concentrated on piloting the Lunar Module, practicing difficult manual landings against simulated thruster failures. Buzz Aldrin immersed himself in the Apollo Guidance Computer, developing workarounds for unexpected sensor alarms. Michael Collins memorized 18 separate rendezvous burn plans to recover Eagle from any possible abort trajectory in lunar orbit.',
        historicalContext:
          'Each astronaut knew that a single miscalculation by any member of the trio would result in the loss of the crew with no possibility of rescue.',
        archivalImage: '/images/exhibits/mer_cleanroom.jpg',
        imageCaption: 'Astronauts practicing Lunar Module egress procedures inside the mockup clean room (NASA S69-32247).',
        keyMetric: { label: 'Simulator Sessions', value: '412 hours logged' },
        audioFrequency: 320,
      },
      {
        id: 'crew-ch-3',
        chapterNumber: '03',
        chapterTitle: 'RETURN TO THE HOMELAND',
        headline: 'Ambassadors for All Humankind.',
        narrative:
          'Following splashdown in the Pacific on July 24, 1969, Armstrong, Aldrin, and Collins were placed into quarantine for 21 days inside the Mobile Quarantine Facility. Once cleared of any lunar contamination, they embarked on the 37-day Giant Leap international goodwill tour, visiting 24 countries and meeting over 100 million people who welcomed them not merely as American heroes, but as representatives of human courage.',
        historicalContext:
          'The crew insisted throughout their lives that Apollo 11 was the collective triumph of the 400,000 men and women who built the Saturn V and spacecraft.',
        archivalImage: '/images/apollo11_surface.jpg',
        imageCaption: 'Astronaut Buzz Aldrin photographed by Neil Armstrong during EVA operations (NASA AS11-40-5903).',
        keyMetric: { label: 'Countries Visited', value: '24 nations on goodwill tour' },
        audioFrequency: 480,
      },
    ],
    legacy: {
      physicalCondition:
        'All three astronauts received the Presidential Medal of Freedom. Neil Armstrong passed away in 2012, Michael Collins in 2021, and Buzz Aldrin remains an active advocate for space exploration.',
      currentMilestone:
        'Honored worldwide as the pioneers who opened the era of human planetary exploration.',
      scientificImpact: [
        'Demonstrated that human crewed coordination can override automated system anomalies during extraterrestrial descent.',
        'Validated human physiological capability to work and conduct precise geological field sampling in 1/6th gravity.',
        'Proved the reliability of complex multi-spacecraft rendezvous in lunar orbit.',
      ],
      whatRemainsToday:
        'Their names, signatures, and photographic legacy are inscribed in national archives across the world, while their bootprints and plaque remain undisturbed on the Moon.',
      sources: [
        {
          title: 'NASA Biographical Data: Neil A. Armstrong',
          organization: 'NASA History Office',
          url: 'https://www.nasa.gov/history/biographies/neil-a-armstrong/',
          catalogId: 'NASA-BIO-NAA',
        },
        {
          title: 'NASA Biographical Data: Edwin E. Aldrin Jr.',
          organization: 'NASA History Office',
          url: 'https://www.nasa.gov/history/biographies/buzz-aldrin/',
          catalogId: 'NASA-BIO-EEA',
        },
        {
          title: 'NASA Biographical Data: Michael Collins',
          organization: 'NASA History Office',
          url: 'https://www.nasa.gov/history/biographies/michael-collins/',
          catalogId: 'NASA-BIO-MC',
        },
      ],
    },
        curatedQnA: [
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
    ],
  },

  surveyor3: {
    id: 'surveyor3',
    name: 'SATURN V ROCKET LAUNCH',
    callsign: 'SA-506 (Apollo 11 Launch Vehicle)',
    mission: 'Apollo 11',
    year: '1969',
    destination: 'moon',
    category: 'Hardware Component',
    modelType: 'Three-Stage Heavy Lift Super-Booster (Saturn V)',
    landingDate: '16 July 1969 — 13:32:00 UTC (09:32 EDT)',
    declarationDate: 'National Historic Mechanical Engineering Landmark',
    operationalDuration: '11 minutes, 40 seconds to Earth orbit insertion',
    distanceTraveled: 'From Launch Pad 39A to 118-mile circular Earth orbit',
    status: 'inactive',
    statusLabel: 'Mission Executed Flawlessly — Boosted Apollo 11 to the Moon',
    locationName: 'Launch Complex 39A, Kennedy Space Center, Florida',
    heroImage: '/images/exhibits/surveyor3.jpg',
    heroCaption:
      'The 363-foot Apollo 11 Saturn V rocket lifts off from Launch Pad 39A at Kennedy Space Center on July 16, 1969 (NASA S69-39525).',
    heroNasaId: 'S69-39525',
    galleryImages: [
      {
        src: '/images/exhibits/surveyor3.jpg',
        caption: 'Saturn V liftoff from Pad 39A producing 7.61 million pounds of thrust (NASA S69-39525).',
        nasaId: 'S69-39525',
      },
      {
        src: '/images/exhibits/mer_cleanroom.jpg',
        caption: 'Assembly of the Saturn V S-IC first stage at the Michoud Assembly Facility in Louisiana (NASA S68-23215).',
        nasaId: 'S68-23215',
      },
      {
        src: '/images/exhibits/voyager.jpg',
        caption: 'Saturn V rollout to Launch Pad 39A aboard the massive Crawler-Transporter (NASA S69-34386).',
        nasaId: 'S69-34386',
      },
    ],
    has3DModel: false,
    coordinates: {
      latitude: '28.6083° N',
      longitude: '80.6043° W',
      elevation: 'Launch Pad 39A',
      planetaryRegion: 'Kennedy Space Center, Florida',
      worldPosition: [0, 0, 0],
    },
    brief: 'The 363-foot colossus that unleashed 7.6 million pounds of thrust.',
    shortDescription:
      'Wernher von Braun’s three-stage heavy-lift super-booster that propelled the 100,000-pound Apollo 11 spacecraft out of Earth’s gravitational cradle.',
    tagline:
      'Standing taller than the Statue of Liberty and consuming fifteen tons of propellant every single second at liftoff, the Saturn V stands as humanity’s greatest rocket achievement.',
    guide: {
      explanation:
        'The Saturn V was the launch vehicle for Apollo 11. Standing 363 feet tall and weighing 6.5 million pounds fully fueled, it launched on July 16, 1969 from Pad 39A at Kennedy Space Center. Over its three staging burns, it accelerated the spacecraft from a standstill to over 24,000 miles per hour toward the Moon.',
      purpose:
        'Overcoming Earth’s gravity, placing the Command, Service, and Lunar Modules into parking orbit, and providing the translunar injection burn to send the crew to the Moon.',
      missionUsed: 'NASA Apollo 11 (Launch Vehicle SA-506), July 16, 1969.',
      whyLeftBehind:
        'Each of the three stages consumed its propellant and separated in succession: S-IC into the Atlantic Ocean, S-II into the Atlantic, and S-IVB into heliocentric solar orbit after boosting the crew.',
      presentStatus:
        'Flawlessly executed launch. Preserved test stages and sister Saturn V rockets are exhibited at Kennedy Space Center, Johnson Space Center, and the U.S. Space & Rocket Center.',
      spokenIntro:
        'Welcome! You are exploring the Saturn V, the titanic rocket that launched Apollo 11 on July 16, 1969.',
      voiceScript:
        "Imagine standing at Cape Kennedy on the morning of July 16, 1969. Rising into the Florida sky is a machine taller than the Statue of Liberty: the Saturn V. Weighing six and a half million pounds, it was essentially a skyscraper packed with liquid oxygen and kerosene. At 9:32 AM Eastern Time, five gigantic F-1 engines ignited at its base. In an instant, they unleashed seven point six million pounds of thrust—consuming fifteen tons of fuel every single second. The acoustic shockwave was so immense it tore grass from the ground and shook buildings three miles away. In just eleven minutes, the Saturn V hurled the Apollo 11 crew through the atmosphere and into Earth orbit. Without this mechanical marvel, humanity could never have broken the gravitational chains of Earth.",
      keyFacts: [
        'Total Height: 363 feet (111 meters) — taller than Big Ben',
        'Liftoff Thrust: 7.61 million pounds (34.5 million Newtons)',
        'Propellant Consumption: 15 tons per second at maximum throttle',
      ],
    },
    components: [
      {
        id: 'saturn-s1c',
        name: 'S-IC First Stage (Boeing / 5 F-1 Engines)',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Burned for 168 seconds, lifted Apollo to 42 miles altitude, impacted Atlantic Ocean.',
        description:
          'Powered by five Rocketdyne F-1 engines producing 7.61 million lbs of thrust, burning 203,000 gallons of RP-1 kerosene and 331,000 gallons of liquid oxygen.',
        guideExplanation:
          'The first stage alone produced more power than eighty-five Hoover Dams combined, accelerating the stack to 6,164 mph in just two and a half minutes.',
        voiceScript:
          "The S-IC first stage was the raw muscle of Apollo 11. Its five Rocketdyne F-1 engines were the most powerful single-combustion-chamber rocket engines ever built. Burning twenty-eight hundred gallons of fuel every second, it lifted six million pounds straight off the launch pad.",
        hotspot: { x: 50, y: 75 },
      },
      {
        id: 'saturn-s2',
        name: 'S-II Second Stage (North American / 5 J-2 Engines)',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Burned for 360 seconds, propelled Apollo through upper atmosphere to 115 miles altitude.',
        description:
          'Cryogenic upper stage powered by five Rocketdyne J-2 engines burning liquid hydrogen and liquid oxygen, producing 1.15 million lbs of vacuum thrust.',
        guideExplanation:
          'Liquid hydrogen provided vastly higher efficiency than kerosene, accelerating the spacecraft nearly to orbital velocity before separation.',
        voiceScript:
          "Once the first stage fell away into the Atlantic, the S-II second stage ignited. Burning ultra-cold liquid hydrogen at minus four hundred and twenty-three degrees Fahrenheit, its five J-2 engines pushed Apollo 11 to the edge of space at fifteen thousand miles per hour.",
        hotspot: { x: 50, y: 50 },
      },
      {
        id: 'saturn-s4b',
        name: 'S-IVB Third Stage & Instrument Unit (Douglas / IBM)',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Executed two burns: Earth orbit insertion and Translunar Injection (TLI) to 24,200 mph.',
        description:
          'Single restartable J-2 engine with the IBM Instrument Unit ring—the digital electronic brain that calculated navigation vectors and steered all Saturn V stages.',
        guideExplanation:
          'The S-IVB fired twice: first to circularize into Earth parking orbit, and two hours later to fire the crew across 240,000 miles of space toward the Moon.',
        voiceScript:
          "The S-IVB third stage held the spacecraft's electronic brain: the IBM Instrument Unit ring. This stage fired twice. First, to enter Earth orbit; and then, two hours later, it reignited over the Pacific for Translunar Injection, hurling Armstrong, Aldrin, and Collins toward the Moon at twenty-four thousand miles per hour.",
        hotspot: { x: 50, y: 30 },
      },
      {
        id: 'saturn-les',
        name: 'Launch Escape System (LES Tower)',
        category: 'Landing Equipment',
        remainsOnSite: false,
        siteNote: 'Jettisoned 30 seconds after second-stage ignition once atmospheric abort risk passed.',
        description:
          '33-foot solid-propellant escape rocket mounted atop the Command Module, capable of pulling the crew capsule 1 mile away from an exploding booster in under 1 second.',
        guideExplanation:
          'A life insurance policy for the crew: if the Saturn V suffered catastrophic failure on the pad, the LES would yank the capsule to parachute altitude in the blink of an eye.',
        voiceScript:
          "Perched at the very top of the rocket was the Launch Escape System tower. If the massive rocket had exploded on the launch pad, this solid rocket motor would have fired in a split second, yanking the crew cabin a mile high into the air to parachute safely into the ocean.",
        hotspot: { x: 50, y: 10 },
      },
    ],
    specs: {
      mass: '2,970,000 kg (6,540,000 lbs fully fueled at liftoff)',
      powerSource: 'Hypergolic ignition & internal chemical battery busses',
      communication: 'VHF telemetry, S-band tracking, and radar transponders',
      primaryInstruments: [
        '5 × Rocketdyne F-1 first-stage engines (7.61M lbs thrust)',
        '5 × Rocketdyne J-2 cryogenic second-stage engines (1.15M lbs thrust)',
        'IBM Saturn V Instrument Unit digital guidance computer',
      ],
    },
    storyChapters: [
      {
        id: 'saturn-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THE DREAM OF WERNHER VON BRAUN',
        headline: 'Conquering Gravity With Chemistry.',
        narrative:
          'When President Kennedy committed the United States to landing on the Moon before 1970, no rocket capable of carrying crew, lander, and fuel across lunar distances existed. At NASA\\'s Marshall Space Flight Center in Huntsville, Alabama, team leader Wernher von Braun directed the design of the Saturn V. Over six years, tens of thousands of structural tests, turbopump overhauls, and cryogenic fuel breakthroughs transformed an impossible dream into 363 feet of engineered reality.',
        historicalContext:
          'The Saturn V remains the only launch vehicle in human history to carry humans beyond low Earth orbit with a 100% mission flight success rate.',
        archivalImage: '/images/exhibits/surveyor3.jpg',
        imageCaption: 'The Apollo 11 Saturn V climbing away from Pad 39A (NASA S69-39525).',
        keyMetric: { label: 'Development Teams', value: '400,000 Americans' },
        audioFrequency: 260,
      },
      {
        id: 'saturn-ch-2',
        chapterNumber: '02',
        chapterTitle: 'THE LAUNCH: JULY 16, 1969',
        headline: 'T-Minus Zero at Launch Pad 39A.',
        narrative:
          'At 09:32 EDT on July 16, 1969, the ignition sequence commenced. Flame deflectors flooded with 300,000 gallons of cooling water as the five F-1 engines built up full thrust against hold-down arms. When the arms released, the ground shuddered for ten miles in every direction. One million spectators lining Cocoa Beach watched in stunned silence as the Saturn V cleared the launch umbilical tower and arced smoothly toward the Atlantic sky.',
        historicalContext:
          'Public affairs officer Jack King announced over the international audio feed: "Liftoff! We have a liftoff, 32 minutes past the hour. Liftoff on Apollo 11!"',
        archivalImage: '/images/exhibits/mer_cleanroom.jpg',
        imageCaption: 'Saturn V booster stage undergoing inspection at Kennedy Space Center (NASA S68-23215).',
        keyMetric: { label: 'Liftoff Thrust', value: '7,610,000 lbs' },
        audioFrequency: 340,
      },
      {
        id: 'saturn-ch-3',
        chapterNumber: '03',
        chapterTitle: 'TRANSLUNAR INJECTION',
        headline: 'Breaking the Cradle of Earth.',
        narrative:
          'After entering a 118-mile circular parking orbit around Earth, the astronauts spent one and a half revolutions verifying every navigational gyroscope and fuel line. Over the Pacific Ocean, Capcom gave the historic call: "Apollo 11, you are Go for TLI." The S-IVB third stage reignited for five minutes and 48 seconds, accelerating the crew from 17,500 mph to 24,200 mph—escape velocity—setting their trajectory directly toward the Moon.',
        historicalContext:
          'Translunar Injection was the single highest velocity that any human being had ever achieved up to that date in history.',
        archivalImage: '/images/exhibits/voyager.jpg',
        imageCaption: 'Saturn V rollout to Launch Pad 39A across the crawlerway (NASA S69-34386).',
        keyMetric: { label: 'TLI Velocity', value: '24,200 mph (38,940 km/h)' },
        audioFrequency: 510,
      },
    ],
    legacy: {
      physicalCondition:
        'All Apollo 11 Saturn V stages performed their flight roles to 100% completion. S-IC and S-II stages rest on the Atlantic seabed; S-IVB was placed into heliocentric solar orbit.',
      currentMilestone:
        'Unquestioned benchmark of heavy-lift chemical rocketry, inspiring NASA\\'s modern Space Launch System (SLS).',
      scientificImpact: [
        'Proved that multi-stage cryogenic liquid hydrogen and hydrocarbon propulsion can safely transport humans across planetary distances.',
        'Pioneered automatic acoustic water-sound-suppression and launch complex infrastructure still used today.',
        'Delivered over 100,000 pounds of payload to translunar injection with zero loss of life.',
      ],
      whatRemainsToday:
        'Launch Pad 39A continues active orbital launches today, while sister Saturn V rockets are preserved as National Historic Mechanical Engineering Landmarks.',
      sources: [
        {
          title: 'NASA Technical Report: Saturn V Flight Evaluation Report - AS-506 (Apollo 11)',
          organization: 'NASA Marshall Space Flight Center',
          url: 'https://ntrs.nasa.gov/citations/19700010996',
          catalogId: 'NASA-TR-AS506',
        },
        {
          title: 'Stages to Saturn: A Technological History of the Apollo/Saturn Launch Vehicles',
          organization: 'NASA History Series',
          url: 'https://history.nasa.gov/SP-4206/sp4206.htm',
          catalogId: 'NASA-SP-4206',
        },
      ],
    },
        curatedQnA: [
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
    ],
  },

  apollo_alsep: {
    id: 'apollo_alsep',
    name: 'FIRST STEPS & TRANQUILITY BASE EXPERIMENTS',
    callsign: 'EASEP & Lunar Surface Deployment',
    mission: 'Apollo 11',
    year: '1969',
    destination: 'moon',
    category: 'Scientific Instrument',
    modelType: 'Early Apollo Scientific Experiments Package & Historic Artifacts',
    landingDate: '21 July 1969 — 02:56:15 UTC (First Step)',
    declarationDate: 'Permanent UNESCO Historic Heritage Site',
    operationalDuration: '2 hours, 31 minutes EVA duration',
    distanceTraveled: 'Armstrong traversed ~1 km total exploring Little West Crater',
    status: 'operational',
    statusLabel: 'Laser Reflector Still Operating & Active After 55+ Years',
    locationName: 'Tranquility Base, Mare Tranquillitatis',
    heroImage: '/images/exhibits/apollo_alsep.jpg',
    heroCaption:
      'Buzz Aldrin deploying the Early Apollo Scientific Experiments Package (EASEP) on Mare Tranquillitatis, July 21, 1969 (NASA AS11-40-5931).',
    heroNasaId: 'AS11-40-5931',
    galleryImages: [
      {
        src: '/images/exhibits/apollo_alsep.jpg',
        caption: 'Buzz Aldrin carrying the EASEP experiments away from Eagle for deployment (NASA AS11-40-5931).',
        nasaId: 'AS11-40-5931',
      },
      {
        src: '/images/exhibits/apollo_boot.jpg',
        caption: 'Neil Armstrong’s soil mechanics documentation of an Apollo 11 bootprint in lunar regolith (NASA AS11-40-5877).',
        nasaId: 'AS11-40-5877',
      },
      {
        src: '/images/exhibits/eagle_plaque.jpg',
        caption: 'Commemorative plaque mounted to Eagle: "Here men from the planet Earth first set foot upon the Moon" (NASA AS11-40-5899).',
        nasaId: 'AS11-40-5899',
      },
    ],
    has3DModel: false,
    coordinates: {
      latitude: '0.67408° N',
      longitude: '23.47297° E',
      elevation: '−1,500 m',
      planetaryRegion: 'Mare Tranquillitatis, The Moon',
      worldPosition: [0, 0, 0],
    },
    brief: 'The first footsteps, science packages, and samples harvested on another world.',
    shortDescription:
      'Neil Armstrong\\'s immortal first step, Buzz Aldrin\\'s lunar exploration, and the deployment of the Laser Ranging Retroreflector and Passive Seismometer.',
    tagline:
      'In two and a half historic hours, two human beings walked upon an alien celestial body, collected 47.5 pounds of ancient rock, and left behind laser optics that scientists still fire at today.',
    guide: {
      explanation:
        'On July 21, 1969 at 02:56 UTC, Neil Armstrong became the first human to step onto the surface of the Moon. Joined shortly by Buzz Aldrin, the two astronauts explored the lunar regolith for two hours and 31 minutes. They unveiled the lunar commemorative plaque, planted the American flag, gathered 21.55 kilograms of pristine lunar samples, and deployed the Early Apollo Scientific Experiments Package (EASEP).',
      purpose:
        'Conducting human geological exploration, testing mobility in 1/6th gravity, collecting regolith and core tubes, and establishing long-term seismic and laser distance monitoring.',
      missionUsed: 'NASA Apollo 11 EVA, July 21, 1969.',
      whyLeftBehind:
        'The experiments and commemorative plaque were designed specifically for in-situ lunar deployment, allowing scientists on Earth to monitor moonquakes and bounce laser pulses off the retroreflector array indefinitely.',
      presentStatus:
        'The Laser Ranging Retroreflector remains completely operational today, reflecting laser beams back to observatories on Earth. The bootprints, flag base, and descent hardware remain preserved in the vacuum.',
      spokenIntro:
        'Welcome! You are exploring the first steps of humanity on the Moon and the science experiments of Tranquility Base.',
      voiceScript:
        "At 02:56 UTC on July 21st, 1969, six hundred million people on Earth watched a grainy black-and-white television broadcast from a quarter-million miles away. Neil Armstrong descended the nine rungs of Eagle's ladder, paused on the footpad, and pressed his boot into the soft lunar soil. His words echoed across time: 'That's one small step for man, one giant leap for mankind.' Twenty minutes later, Buzz Aldrin joined him on the surface, looking across the horizon and whispering: 'Magnificent desolation.' Over the next two and a half hours, they gathered forty-seven point five pounds of pristine lunar rock and deployed scientific packages. Among them was the Laser Ranging Retroreflector—a grid of one hundred fused silica prisms. Incredibly, that instrument is still working today. More than half a century later, scientists on Earth continue to fire laser pulses at Tranquility Base to measure the distance to the Moon down to the millimeter.",
      keyFacts: [
        'First Step: 02:56 UTC, July 21, 1969 (Neil Armstrong)',
        'Surface Walk Duration: 2 hours, 31 minutes, 40 seconds',
        'Lunar Samples Returned: 21.55 kg (47.5 lbs) of basalt and regolith',
      ],
    },
    components: [
      {
        id: 'easep-first-step',
        name: 'Armstrong\\'s First Step & Lunar Bootprint',
        category: 'Hardware Component',
        remainsOnSite: true,
        siteNote: 'Permanently preserved in the undisturbed vacuum of Mare Tranquillitatis.',
        description:
          'Molded silicone rubber tread overshoes pressed into fine-grained basalt regolith, documenting soil cohesive strength and bearing capacity.',
        guideExplanation:
          'Armstrong reported that the lunar surface was fine and powdery like powdered charcoal, adhering in light layers to the soles of the spacesuits.',
        voiceScript:
          "The bootprint of Apollo 11 is one of the most famous images in human history. Because the Moon has no atmosphere, no wind, and no rain, Armstrong and Aldrin's bootprints in the lunar dust remain as sharp today as the moment they were made.",
        hotspot: { x: 35, y: 70 },
      },
      {
        id: 'easep-lrrr',
        name: 'Laser Ranging Retroreflector (LRRR)',
        category: 'Scientific Instrument',
        remainsOnSite: true,
        siteNote: 'Still fully active and targeted by terrestrial laser observatories today.',
        description:
          '100 corner-cube fused silica quartz prisms arranged in a square aluminum tray, engineered to reflect laser pulses back directly to their source on Earth.',
        guideExplanation:
          'The only Apollo 11 experiment still operating today: by measuring the round-trip light time of laser pulses, scientists proved the Moon is spiraling away from Earth at 3.8 cm per year.',
        voiceScript:
          "This is the Laser Ranging Retroreflector. Deployed by Buzz Aldrin, this simple grid of one hundred quartz prisms requires zero electricity. For fifty-five years, astronomers in Texas, Hawaii, and France have fired laser pulses at this exact spot, measuring the distance to the Moon with millimeter precision.",
        hotspot: { x: 65, y: 55 },
      },
      {
        id: 'easep-psep',
        name: 'Passive Seismic Experiment Package (PSEP)',
        category: 'Scientific Instrument',
        remainsOnSite: true,
        siteNote: 'Recorded data for 21 days until overheating from extreme lunar daytime temperatures.',
        description:
          'Solar-powered three-axis seismometer measuring natural moonquakes, meteoroid impacts, and vibrations generated by astronaut footsteps.',
        guideExplanation:
          'PSEP proved that the Moon is seismically quieter than Earth, possessing a rigid crust that rings like a bell when struck by meteorites.',
        voiceScript:
          "The Passive Seismic Experiment Package was the first seismometer placed on another world. Powered by dual solar arrays, it detected the footsteps of Armstrong and Aldrin walking across the dust and registered internal moonquakes deep within the lunar mantle.",
        hotspot: { x: 50, y: 60 },
      },
      {
        id: 'easep-flag-plaque',
        name: 'The American Flag & Commemorative Plaque',
        category: 'Hardware Component',
        remainsOnSite: true,
        siteNote: 'Plaque remains bolted to Eagle\\'s ladder strut; flag was planted 27 feet from the lander.',
        description:
          '3×5 foot nylon flag with horizontal telescoping support rod, and an etched stainless-steel plaque bearing the hemispheres of Earth and the signatures of the crew and President Nixon.',
        guideExplanation:
          'The plaque reads: "Here men from the planet Earth first set foot upon the Moon July 1969, A.D. We came in peace for all mankind."',
        voiceScript:
          "Between the rungs of Eagle's ladder sits the commemorative plaque. Unveiled by Armstrong before stepping onto the surface, its inscription captured the spirit of the mission: 'Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind.'",
        hotspot: { x: 50, y: 35 },
      },
    ],
    specs: {
      mass: 'EASEP Package: 77 kg (170 lbs on Earth)',
      powerSource: 'Solar cell arrays & internal thermal heaters',
      communication: 'VHF transmitter linked to Goldstone and Madrid tracking networks',
      primaryInstruments: [
        'Laser Ranging Retroreflector (LRRR - 100 quartz corner-cubes)',
        'Passive Seismic Experiment Package (PSEP seismometer)',
        'Solar Wind Composition Experiment (SWC Swiss aluminum foil sheet)',
      ],
    },
    storyChapters: [
      {
        id: 'easep-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THAT\\'S ONE SMALL STEP',
        headline: '02:56 UTC • July 21, 1969.',
        narrative:
          'Six hours after landing, Armstrong opened the forward hatch and crawled out onto the porch. Pulling a lanyard to deploy the television camera, his descent was broadcast live to an estimated 650 million viewers. Reaching the bottom of the ladder, Armstrong lowered his left boot into the lunar dust and spoke the defining words of the 20th century: "That\\'s one small step for [a] man, one giant leap for mankind."',
        historicalContext:
          'Armstrong reported: "The surface is fine and powdery. I can pick it up loosely with my toe. It does adhere like powdered charcoal to the boot soles."',
        archivalImage: '/images/exhibits/apollo_boot.jpg',
        imageCaption: 'The historic bootprint in the lunar soil of Tranquility Base (NASA AS11-40-5877).',
        keyMetric: { label: 'First Step Time', value: '02:56:15 UTC' },
        audioFrequency: 280,
      },
      {
        id: 'easep-ch-2',
        chapterNumber: '02',
        chapterTitle: 'MAGNIFICENT DESOLATION',
        headline: 'Exploring the Airless Plain.',
        narrative:
          'Twenty minutes later, Buzz Aldrin backed through the hatch and stepped onto the lunar surface. Looking out across the barren expanse of Mare Tranquillitatis, he uttered two words: "Magnificent desolation." Together, the two astronauts tested locomotion—discovering that a bounding kangaroo-style hop was the most energy-efficient way to travel in one-sixth gravity. They unveiled the plaque, spoke by telephone with President Nixon from the Oval Office, and deployed scientific experiments across the basalt plain.',
        historicalContext:
          'Armstrong spent part of the walk jogging 60 meters east of Eagle to inspect Little West Crater, taking stereoscopic panoramic photographs of the pristine ejecta blanket.',
        archivalImage: '/images/exhibits/apollo_alsep.jpg',
        imageCaption: 'Buzz Aldrin carrying the EASEP scientific packages across Tranquility Base (NASA AS11-40-5931).',
        keyMetric: { label: 'EVA Heart Rates', value: '110–160 bpm nominal' },
        audioFrequency: 360,
      },
      {
        id: 'easep-ch-3',
        chapterNumber: '03',
        chapterTitle: 'HARVESTING THE ANCIENT DUST',
        headline: '47.5 Pounds of Celestial Gold.',
        narrative:
          'Before re-entering the Lunar Module, Armstrong and Aldrin carefully collected 21.55 kilograms of lunar rocks, pebble fragments, and core tube soil samples. Using tongs, scoops, and vacuum-sealed aluminum containers, they harvested basalt specimens that had laid undisturbed for over 3.7 billion years. These samples would revolutionize planetary science, proving that the Moon was once molten and that the Earth and Moon shared a common origin.',
        historicalContext:
          'The Apollo 11 lunar samples were distributed to 142 scientists in nine countries for geochemical, petrographic, and isotope analysis.',
        archivalImage: '/images/exhibits/eagle_plaque.jpg',
        imageCaption: 'The stainless-steel plaque on Eagle\\'s ladder declaring peace for all humankind (NASA AS11-40-5899).',
        keyMetric: { label: 'Sample Return Mass', value: '21.55 kg (47.5 lbs)' },
        audioFrequency: 540,
      },
    ],
    legacy: {
      physicalCondition:
        'All deployed experiments and surface hardware remain in situ at Mare Tranquillitatis. The Laser Ranging Retroreflector continues to reflect laser pulses today.',
      currentMilestone:
        'The longest-running active scientific experiment in space exploration history.',
      scientificImpact: [
        'Enabled ongoing verification of Einstein\\'s Theory of General Relativity and lunar orbital recession rate (3.8 cm/year).',
        'Returned first pristine extraterrestrial geological samples, revealing ancient lunar volcanism and magma ocean cooling.',
        'Proved that humans can safely execute complex scientific tasks in spacesuits on another celestial body.',
      ],
      whatRemainsToday:
        'The LRRR quartz array, PSEP seismometer base, solar wind foil mast, bootprints, flagstaff base, and core tube holes remain undisturbed under the vacuum sky.',
      sources: [
        {
          title: 'NASA Apollo 11 Preliminary Science Report',
          organization: 'NASA Manned Spacecraft Center',
          url: 'https://www.hq.nasa.gov/alsj/a11/as11psr.pdf',
          catalogId: 'NASA-SP-214',
        },
        {
          title: 'Lunar Laser Ranging: 50 Years of Precision Planetary Science',
          organization: 'NASA Jet Propulsion Laboratory',
          url: 'https://science.nasa.gov/missions/apollo/lunar-laser-ranging/',
          catalogId: 'JPL-LLR-A11',
        },
      ],
    },
        curatedQnA: [
      {
        question: "What were Neil Armstrong's first words on the lunar surface?",
        answer: "Armstrong famously declared: 'That\'s one small step for [a] man, one giant leap for mankind.' Earlier at touchdown, he radioed: 'Houston, Tranquility Base here. The Eagle has landed.'",
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
    ],
  },

  // =========================================================================
  // EARTH & ORBIT: THE FLIGHT CORRIDOR & RETURN
  // =========================================================================

  sojourner: {
    id: 'sojourner',
    name: 'COMMAND MODULE COLUMBIA & MICHAEL COLLINS',
    callsign: 'CM-107 (Callsign: Columbia)',
    mission: 'Apollo 11',
    year: '1969',
    destination: 'mars',
    category: 'Complete Spacecraft',
    modelType: 'Crewed Command & Service Module (CSM-107)',
    landingDate: '16–24 July 1969 (Orbital Mission)',
    declarationDate: 'Smithsonian National Air and Space Museum Landmark',
    operationalDuration: '195 hours, 18 minutes in spaceflight',
    distanceTraveled: '30 complete lunar orbits (60 nautical miles altitude)',
    status: 'operational',
    statusLabel: 'Permanently Preserved at Smithsonian National Air and Space Museum',
    locationName: 'Lunar Orbit / National Air and Space Museum, Washington, D.C.',
    heroImage: '/images/exhibits/sojourner_ramp.jpg',
    heroCaption:
      'Command Module Columbia photographed from the Lunar Module during orbital transposition and docking maneuvers (NASA AS11-44-6574).',
    heroNasaId: 'AS11-44-6574',
    galleryImages: [
      {
        src: '/images/exhibits/sojourner_ramp.jpg',
        caption: 'Command and Service Module Columbia in lunar orbit 60 miles above the cratered surface (NASA AS11-44-6574).',
        nasaId: 'AS11-44-6574',
      },
      {
        src: '/images/exhibits/mer_cleanroom.jpg',
        caption: 'Michael Collins at the pilot controls inside Command Module Columbia during training (NASA S69-32247).',
        nasaId: 'S69-32247',
      },
      {
        src: '/images/exhibits/voyager.jpg',
        caption: 'Earth rising above the lunar horizon viewed from Command Module Columbia in lunar orbit (NASA AS11-44-6552).',
        nasaId: 'AS11-44-6552',
      },
    ],
    has3DModel: false,
    coordinates: {
      latitude: 'Orbital (Equatorial)',
      longitude: '60 Nautical Miles Altitude',
      elevation: '110 km Lunar Orbit',
      planetaryRegion: 'Lunar Orbit & Far Side Corridor',
      worldPosition: [0, 0, 0],
    },
    brief: 'The solo mothership and the loneliest astronaut in human history.',
    shortDescription:
      'Command Module Columbia, piloted by Michael Collins for 21.5 solo hours in lunar orbit, safeguarding the return vehicle for the Apollo 11 crew.',
    tagline:
      'While two men walked on the surface, Michael Collins circled the Moon thirty times alone in Columbia—spending 48 minutes of every orbit in total radio silence behind the far side.',
    guide: {
      explanation:
        'Command Module Columbia (CM-107) was the command ship of Apollo 11. While Neil Armstrong and Buzz Aldrin descended to the lunar surface in Eagle, Command Module Pilot Michael Collins remained alone in lunar orbit for 21.5 hours, performing critical navigation checks, tracking Eagle’s landing coordinates through his telescope, and standing ready for emergency rendezvous.',
      purpose:
        'Carrying the crew from Earth to lunar orbit and back, housing primary guidance systems, and providing the heat shield and parachutes for atmospheric re-entry and ocean recovery.',
      missionUsed: 'NASA Apollo 11 (CSM-107 Columbia), July 16–24, 1969.',
      whyLeftBehind:
        'Columbia was the only component of Apollo 11 that returned physically to Earth. Its conical cabin survived the 5,000°F heat of re-entry and splashed down safely in the Pacific.',
      presentStatus:
        'Permanently preserved and displayed in the central Milestones of Flight gallery at the Smithsonian National Air and Space Museum in Washington, D.C.',
      spokenIntro:
        'Welcome! You are exploring Command Module Columbia and Michael Collins\\'s solo watch in lunar orbit.',
      voiceScript:
        "While the eyes of the world were focused on Neil and Buzz walking on the Moon, sixty miles above them flew a man in absolute isolation: Michael Collins aboard Command Module Columbia. For twenty-one and a half hours, Collins circled the Moon alone. Every two hours, Columbia passed behind the far side of the Moon. The moment it slipped into the lunar shadow, all radio contact with Houston and the Earth completely vanished. Collins later wrote: 'I am alone now, truly alone, and absolutely isolated from any known life. I am it. If a count were taken on the other side of the Moon, the tally would be three billion plus two on that side, and one plus God only knows what on this side.' Collins never felt lonely—he felt fierce awareness and intense responsibility. He knew that without Columbia, Neil and Buzz could never come home.",
      keyFacts: [
        'Lunar Orbits: 30 solo orbits (21 hours, 36 minutes)',
        'Radio Silence: 48 minutes per orbit behind the Moon\\'s far side',
        'Only component of Apollo 11 to return physically to Earth',
      ],
    },
    components: [
      {
        id: 'columbia-pilot',
        name: 'Michael Collins\\'s Orbital Command Post',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Center couch and main control panel in Columbia.',
        description:
          'Flight controls, attitude translation hand controller, and sextant navigation optics used by Collins to align the spacecraft platform with distant guide stars.',
        guideExplanation:
          'Collins used the scanning telescope to spot Eagle\\'s glint on the surface and prepared 18 different contingency burns in case Eagle suffered an incomplete ascent.',
        voiceScript:
          "From his center couch, Michael Collins held total responsibility for the survival of the mission. Surrounded by hundreds of switches and circuit breakers, he monitored propellant levels and aligned his navigation sextant using guide stars like Sirius and Canopus.",
        hotspot: { x: 50, y: 50 },
      },
      {
        id: 'columbia-heatshield',
        name: 'Ablative Avcoat Heat Shield',
        category: 'Landing Equipment',
        remainsOnSite: false,
        siteNote: 'Base of the Command Module cone, charred during 5,000°F re-entry.',
        description:
          'Fiberglass honeycomb structure filled by hand with Avcoat epoxy novolac resin, engineered to melt away during atmospheric deceleration to dissipate kinetic energy.',
        guideExplanation:
          'Hurtling into Earth’s atmosphere at 24,791 mph, this shield protected the astronauts from temperatures hotter than the surface of the Sun.',
        voiceScript:
          "Beneath the crew compartment was the blunt-body Avcoat heat shield. Striking Earth's atmosphere at twenty-five thousand miles per hour, friction generated temperatures of five thousand degrees. The ablative resin melted away in a controlled burn, keeping the astronauts inside at a comfortable seventy degrees.",
        hotspot: { x: 50, y: 80 },
      },
      {
        id: 'columbia-docking',
        name: 'Orbital Docking Probe & Hatch',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Forward apex of the Command Module cone.',
        description:
          'Pneumatic probe and capture drogue mechanism designed to lock Columbia and Eagle together and allow pressurized crew and sample transfers.',
        guideExplanation:
          'Collins retracted this probe after rendezvous in lunar orbit, locking twelve mechanical latches to seal the tunnel before opening the hatch to welcome Armstrong and Aldrin back.',
        voiceScript:
          "At the nose of Columbia was the docking probe. When Eagle's ascent stage returned from the surface, Collins guided this probe into the receiving drogue with millimetric precision, sealing the tunnel and welcoming Armstrong and Aldrin back with a joyful bear hug.",
        hotspot: { x: 50, y: 20 },
      },
    ],
    specs: {
      mass: '5,557 kg (Command Module dry mass) + 24,523 kg Service Module',
      powerSource: 'Three Pratt & Whitney Bacon-type hydrogen-oxygen fuel cells',
      communication: 'VHF transceivers and steerable high-gain unified S-band dish',
      primaryInstruments: [
        'Aerojet Service Propulsion System (SPS) 20,500 lb-thrust engine',
        'Apollo Guidance Computer (AGC) with DSKY display interface',
        'Scanning Telescope & Optical Sextant navigation assembly',
      ],
    },
    storyChapters: [
      {
        id: 'col-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THE LONELIEST MAN IN HISTORY',
        headline: 'Behind the Far Side of the Moon.',
        narrative:
          'As Eagle descended toward Mare Tranquillitatis, Columbia continued along its 60-mile circular orbit. For forty-eight minutes of every two-hour lap, Collins passed behind the Moon. The towering mass of the lunar body blocked every radio wave from Earth. Inside the quiet cabin, bathed in the hum of fans and coolant pumps, Collins was more isolated than any human being had ever been before or since.',
        historicalContext:
          'Mission Control in Houston had to wait patiently through every far-side pass, listening for Collins\\'s signal to reacquire at the exact second of orbital sunrise.',
        archivalImage: '/images/exhibits/sojourner_ramp.jpg',
        imageCaption: 'Command Module Columbia in solo orbit above the lunar horizon (NASA AS11-44-6574).',
        keyMetric: { label: 'Radio Blackout', value: '48 minutes per orbit' },
        audioFrequency: 250,
      },
      {
        id: 'col-ch-2',
        chapterNumber: '02',
        chapterTitle: 'THE GUARDIAN IN ORBIT',
        headline: 'Eighteen Contingency Burn Plans.',
        narrative:
          'Collins knew the stark mathematical stakes: if Eagle\\'s descent engine had failed prematurely, or if the ascent stage engine failed to reach full orbital velocity, Collins was prepared to perform a solo rescue. He had memorized eighteen distinct rendezvous maneuver sequences, keeping Columbia primed to dive lower into orbit to intercept the stranded crew before their oxygen ran out.',
        historicalContext:
          'Collins wrote in his notebook: "My secret terror for the last six months has been leaving them on the Moon and returning to Earth alone; now I am within minutes of finding out."',
        archivalImage: '/images/exhibits/mer_cleanroom.jpg',
        imageCaption: 'Michael Collins running through guidance checkouts in the spacecraft cockpit (NASA S69-32247).',
        keyMetric: { label: 'Contingency Plans', value: '18 rescue trajectories' },
        audioFrequency: 330,
      },
      {
        id: 'col-ch-3',
        chapterNumber: '03',
        chapterTitle: 'REUNION IN LUNAR ORBIT',
        headline: 'A Joyful Lock in Vacuum.',
        narrative:
          'At 21:24 UTC on July 21, Eagle\\'s ascent stage climbed up to Columbia\\'s altitude. Through his optical sextant, Collins spotted the glittering gold-and-black foil of the lander. With master precision, he pulsed Columbia\\'s thrusters and completed the docking maneuver. When the hatches were equalized and opened, Armstrong and Aldrin transferred forty-seven pounds of lunar rocks into Columbia, and the three men were reunited as one crew.',
        historicalContext:
          'Once the crew and samples were safe inside Columbia, Eagle\\'s ascent stage was jettisoned into lunar orbit, having fulfilled its historic purpose.',
        archivalImage: '/images/exhibits/voyager.jpg',
        imageCaption: 'Earthrise viewed from lunar orbit as Columbia prepared for the journey home (NASA AS11-44-6552).',
        keyMetric: { label: 'Docking Velocity', value: '0.1 ft/s nominal closure' },
        audioFrequency: 500,
      },
    ],
    legacy: {
      physicalCondition:
        'Columbia is completely intact and preserved on permanent public display in the Boeing Milestones of Flight Hall at the Smithsonian National Air and Space Museum.',
      currentMilestone:
        'The only surviving physical spacecraft from Apollo 11 to return from the Moon.',
      scientificImpact: [
        'Demonstrated the viability of solo command module piloting during complex multi-craft orbital missions.',
        'Validated optical sextant deep-space navigation independently of ground-based tracking stations.',
        'Returned three astronauts safely through atmospheric re-entry at 36 times the speed of sound.',
      ],
      whatRemainsToday:
        'The historic capsule Columbia, charred heat shield, and original astronaut cockpit couches remain preserved in Washington, D.C.',
      sources: [
        {
          title: 'Carrying the Fire: An Astronaut\\'s Journeys by Michael Collins',
          organization: 'Farrar, Straus and Giroux',
          url: 'https://airandspace.si.edu/collection-objects/command-module-apollo-11/nasm_A19700102000',
          catalogId: 'NASM-A19700102000',
        },
        {
          title: 'Apollo 11 Command and Service Module Documentation',
          organization: 'Smithsonian National Air and Space Museum',
          url: 'https://airandspace.si.edu/collection-objects/command-module-apollo-11',
          catalogId: 'NASM-COLL-A11',
        },
      ],
    },
        curatedQnA: [
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
    ],
  },

  spirit: {
    id: 'spirit',
    name: 'JOURNEY FROM EARTH TO THE MOON',
    callsign: 'Apollo 11 Translunar Trajectory',
    mission: 'Apollo 11',
    year: '1969',
    destination: 'mars',
    category: 'Complete Spacecraft',
    modelType: 'Cislunar Deep Space Trajectory & Spacecraft Transposition',
    landingDate: '16–19 July 1969 (Translunar Coast)',
    declarationDate: 'Historic Deep-Space Flight Corridor',
    operationalDuration: '73 hours, 10 minutes translunar coast',
    distanceTraveled: '240,000 miles (386,000 km) across cislunar space',
    status: 'operational',
    statusLabel: 'Trajectory Executed With Flawless Mathematical Accuracy',
    locationName: 'Cislunar Deep Space Corridor',
    heroImage: '/images/exhibits/spirit_hero.jpg',
    heroCaption:
      'Earth photographed from Apollo 11 during the translunar coast at a distance of approximately 100,000 miles (NASA AS11-36-5337).',
    heroNasaId: 'AS11-36-5337',
    galleryImages: [
      {
        src: '/images/exhibits/spirit_hero.jpg',
        caption: 'View of Earth showing the Atlantic Ocean and African continent during translunar coast (NASA AS11-36-5337).',
        nasaId: 'AS11-36-5337',
      },
      {
        src: '/images/exhibits/mer_cleanroom.jpg',
        caption: 'Apollo 11 Command and Service Module mating with the Lunar Module adapter shroud in Florida (NASA S69-32247).',
        nasaId: 'S69-32247',
      },
      {
        src: '/images/exhibits/voyager.jpg',
        caption: 'The Moon growing in the spacecraft window as Apollo 11 approached lunar orbit insertion (NASA AS11-44-6552).',
        nasaId: 'AS11-44-6552',
      },
    ],
    has3DModel: false,
    coordinates: {
      latitude: 'Translunar Vector',
      longitude: 'Translunar Coast',
      elevation: '240,000 Miles From Earth',
      planetaryRegion: 'Cislunar Space / Neutral Gravity Point',
      worldPosition: [0, 0, 0],
    },
    brief: 'A three-day silent coast through a quarter-million miles of black vacuum.',
    shortDescription:
      'Transposition, docking, and extraction of the Lunar Module Eagle, the passive thermal "barbecue roll", and precision navigation across deep space.',
    tagline:
      'Floating between the blue marble of Earth and the growing silver disc of the Moon, Apollo 11 navigated by the stars across a silent ocean of void.',
    guide: {
      explanation:
        'Following Translunar Injection, Apollo 11 separated from the Saturn V third stage, performed a 180-degree turn, docked with Lunar Module Eagle, and extracted it from the booster shroud. Over the next three days, the combined stack coasted 240,000 miles toward the Moon, rotating slowly to distribute solar heat and making tiny midcourse adjustments.',
      purpose:
        'Bridging the distance between Earth and Moon, equalizing spacecraft temperatures, conducting live television broadcasts, and executing Lunar Orbit Insertion.',
      missionUsed: 'NASA Apollo 11 Translunar Coast, July 16–19, 1969.',
      whyLeftBehind:
        'The translunar corridor represents the celestial trajectory paved by orbital mathematicians that allowed humans to navigate between two planetary bodies.',
      presentStatus:
        'The mathematical principles, celestial navigation formulas, and thermal rotation protocols established on this flight remain standard in modern lunar exploration.',
      spokenIntro:
        'Welcome! You are exploring Apollo 11\\'s epic three-day journey across cislunar space from Earth to the Moon.',
      voiceScript:
        "Once the Saturn V pushed Apollo 11 out of Earth orbit, the real journey through the black began. Three hours after launch, Michael Collins performed a delicate ballet in space. He separated Columbia from the rocket booster, turned the ship around one hundred and eighty degrees, and gently docked nose-to-nose with Eagle, pulling the lander out of its protective metal shroud. For the next three days, the crew coasted through two hundred and forty thousand miles of deep vacuum. Because the side of the spacecraft facing the Sun would bake at over two hundred degrees while the shadow side plunged to minus two hundred, the ship was put into a slow, continuous spin—three rotations every hour. The astronauts called it the 'barbecue roll.' Through their triangular windows, they watched the Earth shrink into a fragile blue and white marble, alone in an ocean of black.",
      keyFacts: [
        'Translunar Coast Duration: 73 hours, 10 minutes',
        'Speed at Gravity Neutral Point: Slowed to 2,040 mph before lunar acceleration',
        'Passive Thermal Control: 3 revolutions per hour ("The Barbecue Roll")',
      ],
    },
    components: [
      {
        id: 'journey-transposition',
        name: 'Transposition, Docking & Extraction',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Executed 3 hours, 15 minutes after launch over the Atlantic.',
        description:
          'Precision orbital maneuver where Columbia backed away from the S-IVB stage, rotated 180°, and docked with Eagle to pull it from the booster shroud.',
        guideExplanation:
          'Had docking failed, Apollo 11 could not have landed on the Moon, and the mission would have been forced to loop around the Moon and return to Earth.',
        voiceScript:
          "Transposition and docking was a critical pass-fail gate. Floating backward at eighteen thousand miles per hour, Collins fired tiny reaction control thrusters to bring Columbia's nose into the landing module's docking ring with zero room for error.",
        hotspot: { x: 50, y: 50 },
      },
      {
        id: 'journey-ptc',
        name: 'Passive Thermal Control ("The Barbecue Roll")',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Maintained continuously during translunar and trans-Earth coasts.',
        description:
          'Continuous slow roll of 3 revolutions per hour around the spacecraft\\'s longitudinal axis to distribute solar radiation evenly across the hull.',
        guideExplanation:
          'Without this rotation, solar heat would have boiled cryogenic propellant tanks on one side while freezing electronics on the shadow side.',
        voiceScript:
          "To survive the extreme heat and cold of deep space, the spacecraft had to roll like meat on a spit. This 'barbecue roll' kept temperatures balanced across the four-ton propellant tanks and delicate instrument panels.",
        hotspot: { x: 50, y: 75 },
      },
      {
        id: 'journey-loi',
        name: 'Lunar Orbit Insertion (LOI Burn)',
        category: 'Landing Equipment',
        remainsOnSite: false,
        siteNote: 'Executed at 75 hours, 49 minutes mission time behind the Moon.',
        description:
          'Six-minute retro-burn of the 20,500-lb thrust Service Propulsion System engine to brake the spacecraft into lunar gravitational capture.',
        guideExplanation:
          'Fired behind the Moon out of radio contact with Earth: if the engine fired too long, it would crash into the Moon; if it underfired, it would slingshot into solar orbit.',
        voiceScript:
          "On July 19th, Apollo 11 slipped behind the dark limb of the Moon. Cut off from Mission Control, the Service Module engine fired for six tense minutes, braking the spacecraft into lunar gravity. When radio contact returned, Collins reported calmly: 'Apollo 11 is in lunar orbit.'",
        hotspot: { x: 50, y: 25 },
      },
    ],
    specs: {
      mass: 'Combined CSM-LM Stack: ~45,000 kg (100,000 lbs in transit)',
      powerSource: 'Three hydrogen-oxygen fuel cells generating 1.4 kW continuous power',
      communication: 'Unified S-band steerable high-gain antenna tracking Madrid, Goldstone, and Canberra',
      primaryInstruments: [
        'Aerojet 20,500-lb thrust Service Propulsion System (SPS)',
        '16 × Marquardt R-4D reaction control thrusters (100 lbs thrust each)',
        'Westinghouse color television field-sequential camera for live broadcasts',
      ],
    },
    storyChapters: [
      {
        id: 'tra-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THE EXTRACTION IN VACUUM',
        headline: 'A Delicate Ballet in Deep Space.',
        narrative:
          'At 3 hours and 15 minutes after launch, Apollo 11 was hurtling away from Earth at 20,000 mph. Michael Collins fired forward RCS thrusters, moving Columbia fifty feet ahead of the Saturn V booster. With smooth hand-controller inputs, he rotated the spacecraft 180 degrees, lining up nose-to-nose with Eagle nestled inside the booster adapter. Latching the docking ring with an audible thunk, he backed away, extracting the Lunar Module into open space.',
        historicalContext:
          'The empty S-IVB booster was then commanded by ground stations to vent its remaining propellant, sending it into a solar orbit where it orbits the Sun to this day.',
        archivalImage: '/images/exhibits/mer_cleanroom.jpg',
        imageCaption: 'Command Module and Lunar Module mating demonstration before launch (NASA S69-32247).',
        keyMetric: { label: 'Distance at Docking', value: '18,000 miles from Earth' },
        audioFrequency: 270,
      },
      {
        id: 'tra-ch-2',
        chapterNumber: '02',
        chapterTitle: 'THE PALE BLUE MARBLE',
        headline: 'Looking Back at Home.',
        narrative:
          'During the 73-hour coast, the astronauts broadcast three live television transmissions back to Earth. Armstrong held the camera to the window, showing the whole planet Earth floating like a bright sapphire against pitch-black velvet. At 60 hours into the flight, Apollo 11 crossed the neutral gravity point—the invisible boundary where the Moon\\'s gravitational pull became stronger than Earth\\'s—and began accelerating toward the lunar surface.',
        historicalContext:
          'Over 500 million people watched the live Sunday broadcast as Armstrong demonstrated floating weightless water droplets in the cabin.',
        archivalImage: '/images/exhibits/spirit_hero.jpg',
        imageCaption: 'Earth photographed from 100,000 miles out during translunar coast (NASA AS11-36-5337).',
        keyMetric: { label: 'Earth Diameter in Window', value: 'Size of a quarter at arm\\'s length' },
        audioFrequency: 350,
      },
      {
        id: 'tra-ch-3',
        chapterNumber: '03',
        chapterTitle: 'SLIPPING INTO LUNAR CAPTURE',
        headline: 'The Burning on the Dark Side.',
        narrative:
          'At 75 hours and 49 minutes mission time, Apollo 11 disappeared behind the eastern limb of the Moon, entering radio blackout. In the shadow of the lunar far side, the Service Propulsion System engine ignited for 357 seconds. When Columbia and Eagle emerged from behind the western limb, telemetry locked back onto the Goldstone tracking station in California, confirming that Apollo 11 had arrived safely in lunar orbit.',
        historicalContext:
          'Jim Lovell in Mission Control called out: "Apollo 11, this is Houston. You are looking great to us," and Collins replied: "It was a beautiful burn."',
        archivalImage: '/images/exhibits/voyager.jpg',
        imageCaption: 'The lunar surface crater Daedalus viewed from lunar orbit (NASA AS11-44-6552).',
        keyMetric: { label: 'Burn Duration', value: '357.5 seconds nominal' },
        audioFrequency: 520,
      },
    ],
    legacy: {
      physicalCondition:
        'The translunar trajectory established the definitive deep-space navigation pathway used by Apollo 12 through 17 and now utilized by NASA\\'s Artemis program.',
      currentMilestone:
        'First crewed transit of the cislunar gravitational neutral point.',
      scientificImpact: [
        'Refined mathematical models of cislunar gravitational mass concentrations (mascons).',
        'Validated passive thermal spin dynamics for deep-space human habitats.',
        'Established operational protocols for live interplanetary television broadcasts.',
      ],
      whatRemainsToday:
        'The deep-space cislunar corridor remains the highway between worlds, soon to be re-traversed by the Artemis crewed missions.',
      sources: [
        {
          title: 'NASA Apollo 11 Mission Report: Translunar Phase',
          organization: 'NASA Manned Spacecraft Center',
          url: 'https://history.nasa.gov/alsj/a11/A11_MissionReport.pdf',
          catalogId: 'MSC-00171',
        },
      ],
    },
        curatedQnA: [
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
    ],
  },

  opportunity: {
    id: 'opportunity',
    name: 'RETURN JOURNEY & PACIFIC SPLASHDOWN',
    callsign: 'Apollo 11 Recovery (USS Hornet)',
    mission: 'Apollo 11',
    year: '1969',
    destination: 'mars',
    category: 'Complete Spacecraft',
    modelType: 'Trans-Earth Return, Atmospheric Re-entry & Oceanic Recovery',
    landingDate: '24 July 1969 — 16:50:35 UTC (Splashdown)',
    declarationDate: 'National Historic Recovery Site',
    operationalDuration: '195 hours, 18 minutes, 35 seconds (Full Mission)',
    distanceTraveled: 'Returned from 240,000 miles to a pinpoint 13-mile target',
    status: 'operational',
    statusLabel: 'Mission Fulfilled — Astronauts Recovered in Perfect Health',
    locationName: 'Pacific Ocean (13°19′N, 169°9′W) — 812 nm SW of Hawaii',
    heroImage: '/images/exhibits/opportunity.jpg',
    heroCaption:
      'Apollo 11 Command Module Columbia floating in the Pacific Ocean with Navy Pararescue team and flotation collar attached, July 24, 1969 (NASA S69-40024).',
    heroNasaId: 'S69-40024',
    galleryImages: [
      {
        src: '/images/exhibits/opportunity.jpg',
        caption: 'Columbia supported by its three orange-and-white flotation spheres after splashdown (NASA S69-40024).',
        nasaId: 'S69-40024',
      },
      {
        src: '/images/exhibits/opp_heatshield_rock.jpg',
        caption: 'Astronauts Neil Armstrong, Michael Collins, and Buzz Aldrin inside the Mobile Quarantine Facility on USS Hornet (NASA S69-40757).',
        nasaId: 'S69-40757',
      },
      {
        src: '/images/exhibits/mer_cleanroom.jpg',
        caption: 'President Richard Nixon welcoming the Apollo 11 crew through the window of the Mobile Quarantine Facility (NASA S69-40025).',
        nasaId: 'S69-40025',
      },
    ],
    has3DModel: false,
    coordinates: {
      latitude: '13.3167° N (13°19′ N)',
      longitude: '-169.1500° W (169°9′ W)',
      elevation: 'Sea Level (Pacific Ocean)',
      planetaryRegion: 'Pacific Ocean Recovery Zone (USS Hornet)',
      worldPosition: [0, 0, 0],
    },
    brief: 'The fiery 25,000 mph plunge through the atmosphere and safe return home.',
    shortDescription:
      'Trans-Earth Injection, atmospheric re-entry at Mach 36, ionization communications blackout, parachute deployment, and recovery by the USS Hornet.',
    tagline:
      'Braving 5,000°F re-entry temperatures hotter than the surface of the Sun, Columbia punched through Earth\\'s atmosphere to fulfill John F. Kennedy\\'s national promise.',
    guide: {
      explanation:
        'On July 24, 1969, Apollo 11 completed its historic voyage. After firing the Service Propulsion engine behind the Moon for Trans-Earth Injection, the crew coasted home across 60 hours. Fifteen minutes before atmospheric entry, Columbia jettisoned the Service Module and slammed into the upper atmosphere at 24,791 mph. Protected by its ablative heat shield and lowered by three main parachutes, Columbia splashed down in the Pacific Ocean, where Navy SEALs and the aircraft carrier USS Hornet recovered the crew.',
      purpose:
        'Safely decelerating the crew capsule from interplanetary speed, dissipating immense kinetic energy, deploying parachutes, and ensuring biological quarantine.',
      missionUsed: 'NASA Apollo 11 Re-entry & Recovery, July 24, 1969.',
      whyLeftBehind:
        'The Service Module was jettisoned prior to re-entry and burned up in the upper atmosphere, while the Command Module Columbia was hoisted aboard the USS Hornet.',
      presentStatus:
        'Mission complete. The recovery site in the Pacific Ocean is honored in naval history, and the recovery aircraft carrier USS Hornet is preserved as a museum ship in Alameda, California.',
      spokenIntro:
        'Welcome! You are exploring the dramatic return journey and Pacific Ocean splashdown of Apollo 11.',
      voiceScript:
        "The voyage home was every bit as perilous as the landing itself. At midnight on July 22nd, behind the Moon, the Service Propulsion engine fired for Trans-Earth Injection. If that engine had failed, the crew would have been permanently stranded in lunar orbit. For sixty hours, Columbia raced back toward Earth, accelerating under gravity to twenty-five thousand miles per hour. At that speed, hitting the atmosphere at the wrong angle would mean burning up or skipping off into space like a stone on water. But Columbia struck the entry corridor with absolute precision. Friction tore the air into glowing white plasma at five thousand degrees, cutting off all radio communication for four agonizing minutes. Finally, three massive orange-and-white parachutes blossomed in the sky, and Columbia settled gently into the Pacific Ocean. Eight days, three hours, and eighteen minutes after launching, the astronauts were home.",
      keyFacts: [
        'Re-entry Speed: 24,791 mph (39,897 km/h / Mach 36)',
        'Heat Shield Temperature: 5,000°F (2,760°C)',
        'Splashdown Time: 16:50:35 UTC, July 24, 1969 in Pacific Ocean',
      ],
    },
    components: [
      {
        id: 'return-tei',
        name: 'Trans-Earth Injection (TEI Burn)',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Executed behind the Moon at 135 hours, 23 minutes mission time.',
        description:
          '150-second critical rocket burn by the Service Propulsion System engine, boosting Columbia out of lunar orbit onto an Earth-return trajectory.',
        guideExplanation:
          'The single most stressful burn for ground controllers: had the engine refused to ignite, the crew had zero alternative propulsion to break free from lunar gravity.',
        voiceScript:
          "The Trans-Earth Injection burn was the moment of truth. Behind the Moon, with zero radio contact with Houston, Collins fired the engine for two and a half minutes. When Columbia cleared the limb, Armstrong confirmed: 'Houston, Apollo 11 is on its way home.'",
        hotspot: { x: 50, y: 30 },
      },
      {
        id: 'return-reentry',
        name: 'Avcoat Atmospheric Entry & Blackout',
        category: 'Landing Equipment',
        remainsOnSite: false,
        siteNote: 'Hit atmospheric entry interface at 400,000 feet altitude at Mach 36.',
        description:
          'Blunt-body heat shield compression creating an envelope of ionized plasma gas, cutting off radio communications for 3 minutes and 57 seconds.',
        guideExplanation:
          'The guidance computer used the Command Module’s asymmetrical center of gravity to generate aerodynamic lift, steering the capsule directly toward the recovery fleet.',
        voiceScript:
          "Slamming into the upper atmosphere at Mach thirty-six, Columbia was engulfed in a blinding sheath of fire. The ionized gas completely blocked radio transmissions. In Mission Control, four hundred controllers stared at their clocks in absolute silence until Capcom called: 'Columbia, this is Houston, standing by.' A crackle of static broke, and Armstrong replied: 'We read you, Houston.'",
        hotspot: { x: 50, y: 60 },
      },
      {
        id: 'return-parachutes',
        name: 'Three Main Ring-Sail Parachutes',
        category: 'Landing Equipment',
        remainsOnSite: false,
        siteNote: 'Deployed at 10,000 feet altitude; slowed descent to 22 mph.',
        description:
          'Three 83.5-foot diameter orange and white ring-sail parachutes manufactured by Pioneer Parachute Company, designed to lower the 12,000-lb capsule into the sea.',
        guideExplanation:
          'Dual drogue parachutes deployed first at 24,000 feet to stabilize the tumbling spacecraft before the three main canopies reefed open.',
        voiceScript:
          "At ten thousand feet above the Pacific, three massive orange-and-white parachutes blossomed overhead, slowing Columbia from two hundred miles per hour to a gentle twenty-two miles per hour at water contact.",
        hotspot: { x: 50, y: 80 },
      },
      {
        id: 'return-quarantine',
        name: 'Mobile Quarantine Facility (USS Hornet)',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Airstream aluminum trailer aboard USS Hornet; crew remained isolated for 21 days.',
        description:
          'Hermetically sealed negative-pressure habitat equipped with living quarters, medical laboratory, and communication window to prevent potential extraterrestrial contamination.',
        guideExplanation:
          'Because scientists could not rule out lunar microorganisms, the crew wore biological isolation garments and lived in quarantine until August 10, 1969.',
        voiceScript:
          "Upon splashdown, Navy frogmen tossed biological isolation suits to the astronauts before hoisting them onto helicopters. For the next twenty-one days, Armstrong, Aldrin, and Collins lived inside an Airstream trailer called the Mobile Quarantine Facility, celebrating their triumph through a glass window.",
        hotspot: { x: 50, y: 15 },
      },
    ],
    specs: {
      mass: '5,557 kg at re-entry interface',
      powerSource: 'Internal silver-zinc entry batteries (200 Ah)',
      communication: 'VHF recovery beacon (243.0 MHz) and HF dye-marker strobe radio',
      primaryInstruments: [
        'Avcoat epoxy novolac ablative heat shield',
        '2 × 16.5-ft drogue parachutes & 3 × 83.5-ft main ring-sail parachutes',
        'Inflatable self-righting flotation collar and spherical bags',
      ],
    },
    storyChapters: [
      {
        id: 'ret-ch-1',
        chapterNumber: '01',
        chapterTitle: 'TRANS-EARTH INJECTION',
        headline: 'Saying Farewell to the Moon.',
        narrative:
          'At 135 hours and 23 minutes mission time, with Columbia in its 30th orbit around the Moon, the crew prepared for the critical return burn. Firing behind the far side, the Service Propulsion System engine burned for two and a half minutes, accelerating Columbia out of lunar orbit. When radio contact was re-established, Capcom called: "Apollo 11, you are headed home." For the next two days, the astronauts watched the Moon recede as Earth expanded once again.',
        historicalContext:
          'Collins radioed to Houston: "It\\'s nice to look at that blue marble again, and this time we\\'re getting bigger and bigger, and it\\'s getting better and better."',
        archivalImage: '/images/exhibits/opp_heatshield_rock.jpg',
        imageCaption: 'The crew inside the Mobile Quarantine Facility after splashdown (NASA S69-40757).',
        keyMetric: { label: 'Return Speed', value: '24,791 mph at entry interface' },
        audioFrequency: 290,
      },
      {
        id: 'ret-ch-2',
        chapterNumber: '02',
        chapterTitle: 'THE CORRIDOR OF FIRE',
        headline: 'Mach 36 Over the Pacific.',
        narrative:
          'On July 24, at 400,000 feet above the Pacific Ocean, Columbia struck the upper atmosphere. Kinetic energy compressed the air ahead into a blinding incandescent shockwave reaching 5,000°F. The crew experienced 6.5 g\\'s of deceleration as the computer guided Columbia along a delicate trajectory. After four minutes of dead radio silence caused by the ionization sheath, Capcom\\'s voice pierced the static, and Armstrong confirmed they had survived the inferno.',
        historicalContext:
          'The entry corridor was only 40 miles wide; a steeper angle would crush the crew with excessive g-forces, while a shallower angle would bounce the craft into space.',
        archivalImage: '/images/exhibits/opportunity.jpg',
        imageCaption: 'Columbia floating in the Pacific Ocean awaiting recovery (NASA S69-40024).',
        keyMetric: { label: 'Peak Deceleration', value: '6.5 g force' },
        audioFrequency: 380,
      },
      {
        id: 'ret-ch-3',
        chapterNumber: '03',
        chapterTitle: 'SPLASHDOWN & RECOVERY',
        headline: 'Mission Accomplished: July 24, 1969.',
        narrative:
          'At 16:50 UTC on July 24, 1969, Columbia hit the waters of the Pacific Ocean 812 nautical miles southwest of Hawaii, just 13 miles from the recovery ship USS Hornet. Elite Navy SEAL Pararescuemen jumped from helicopters, secured the flotation collar, and assisted the astronauts into Biological Isolation Garments. Eight days after leaving Earth, President John F. Kennedy\\'s challenge had been fulfilled: humans had walked upon the Moon and returned safely home.',
        historicalContext:
          'A plaque in the Mission Operations Control Room in Houston was unveiled shortly after splashdown, inscribed: "Task accomplished, July 1969."',
        archivalImage: '/images/exhibits/mer_cleanroom.jpg',
        imageCaption: 'President Nixon welcomes the Apollo 11 crew aboard the USS Hornet (NASA S69-40025).',
        keyMetric: { label: 'Total Mission Time', value: '195 hrs, 18 min, 35 sec' },
        audioFrequency: 560,
      },
    ],
    legacy: {
      physicalCondition:
        'Columbia was safely hoisted aboard the USS Hornet and shipped to Ford Island, Hawaii, before transfer to the Smithsonian Institution.',
      currentMilestone:
        'The triumphant fulfillment of humanity\\'s first interplanetary round-trip voyage.',
      scientificImpact: [
        'Proved that steep-angle ablative re-entry can safely protect crews returning from deep space.',
        'Validated oceanic recovery protocols and emergency biological containment systems.',
        'Demonstrated that human beings can adapt to zero-gravity spaceflight and return without permanent physiological harm.',
      ],
      whatRemainsToday:
        'The USS Hornet is preserved as a museum ship in Alameda, California, complete with the Apollo 11 recovery footprint markings on its hangar deck.',
      sources: [
        {
          title: 'NASA Apollo 11 Recovery Operations Report',
          organization: 'NASA Manned Spacecraft Center / US Navy',
          url: 'https://history.nasa.gov/alsj/a11/a11.html',
          catalogId: 'NAVY-HORNET-A11',
        },
      ],
    },
        curatedQnA: [
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
    ],
  },

  insight: {
    id: 'insight',
    name: 'APOLLO 11 HISTORICAL ACHIEVEMENTS & LEGACY',
    callsign: 'Tranquility Base Heritage & The Artemis Horizon',
    mission: 'Apollo 11',
    year: '1969 — ETERNITY',
    destination: 'mars',
    category: 'Scientific Instrument',
    modelType: 'Global Historical Monument & Scientific Archive',
    landingDate: '20 July 1969 — Permanent Legacy',
    declarationDate: 'Universal Heritage for All Humankind',
    operationalDuration: 'Over 55 years of enduring historical influence',
    distanceTraveled: 'From the first lunar steps to the future of Mars',
    status: 'operational',
    statusLabel: 'Enduring Legacy — Inspiration for the Artemis Program & Deep Space',
    locationName: 'Tranquility Base & Worldwide Heritage',
    heroImage: '/images/exhibits/eagle_plaque.jpg',
    heroCaption:
      'The Apollo 11 commemorative plaque left mounted on the Lunar Module descent stage: "Here men from the planet Earth first set foot upon the Moon July 1969, A.D. We came in peace for all mankind" (NASA AS11-40-5899).',
    heroNasaId: 'AS11-40-5899',
    galleryImages: [
      {
        src: '/images/exhibits/eagle_plaque.jpg',
        caption: 'The commemorative plaque on Eagle’s ladder declaring peace for all humankind (NASA AS11-40-5899).',
        nasaId: 'AS11-40-5899',
      },
      {
        src: '/images/exhibits/apollo_boot.jpg',
        caption: 'The immortal bootprint in lunar regolith preserving humanity’s first step on another world (NASA AS11-40-5877).',
        nasaId: 'AS11-40-5877',
      },
      {
        src: '/images/apollo11_surface.jpg',
        caption: 'Tranquility Base standing intact on the lunar plain under the black vacuum sky (NASA AS11-40-5921).',
        nasaId: 'AS11-40-5921',
      },
    ],
    has3DModel: false,
    coordinates: {
      latitude: 'Universal Heritage',
      longitude: 'Tranquility Base',
      elevation: 'Permanent Lunar Landmark',
      planetaryRegion: 'The Moon, Earth & Deep Space',
      worldPosition: [0, 0, 0],
    },
    brief: 'How one mission united the world and opened the door to the cosmos.',
    shortDescription:
      'The scientific revolution, computing breakthroughs, global cultural unity, and the enduring stepping stone toward Artemis and human missions to Mars.',
    tagline:
      'One mission. One giant leap for mankind. The timeless achievement that proved nothing is impossible when humanity unites behind a bold vision.',
    guide: {
      explanation:
        'Apollo 11 was far more than a Cold War political triumph; it was a watershed moment in the history of life on Earth. For the first time in four billion years, living beings departed their home planet, set foot upon another world, and looked back at Earth with newfound reverence. It catalyzed the modern computer revolution, rewritten our understanding of lunar geology, and left behind an immortal standard of human courage.',
      purpose:
        'Documenting the scientific discoveries, technological spin-offs, and cultural transformation sparked by Apollo 11, and connecting its heritage to future Mars exploration.',
      missionUsed: 'NASA Apollo 11 Historical Register, 1969 — Present.',
      whyLeftBehind:
        'The inscription on the lunar plaque speaks for the entire human race: "We came in peace for all mankind." It remains on the Moon as an eternal symbol of peace.',
      presentStatus:
        'Tranquility Base is legally protected under the U.S. One Small Step to Protect Human Heritage in Space Act and international heritage conventions.',
      spokenIntro:
        'Welcome! You are exploring the enduring historical achievements and legacy of Apollo 11.',
      voiceScript:
        "On July 20, 1969, an estimated six hundred and fifty million people—one out of every five people living on Earth—watched Apollo 11 in unified wonder. For a brief, shining moment in human history, there were no borders, no rivalries, no divisions. People on every continent celebrated not what one nation had accomplished, but what humanity had achieved together. Apollo 11 gave us the modern world: the silicon microchips developed for the Apollo guidance computer catalyzed the personal computer revolution. The rocks brought back from Tranquility Base proved that the Moon and Earth were forged in a colossal planetary collision four and a half billion years ago. And above all, it gave us a new perspective on our home. Looking back from the Moon, Earth was seen for what it truly is: a fragile, breathtaking oasis of life suspended in a dark and silent cosmos. We came in peace for all mankind.",
      keyFacts: [
        'Global Audience: 650 million viewers (largest television event in history)',
        'Technological Legacy: Catalyzed modern silicon computing & telecommunications',
        'Enduring Inscription: "We came in peace for all mankind"',
      ],
    },
    components: [
      {
        id: 'legacy-samples',
        name: '21.55 kg of Pristine Lunar Samples',
        category: 'Scientific Instrument',
        remainsOnSite: false,
        siteNote: 'Preserved in cleanrooms at Johnson Space Center in Houston.',
        description:
          'Basalt, microbreccias, and regolith samples dated to 3.7 billion years old, proving ancient lunar volcanic flooding and magma ocean crystallization.',
        guideExplanation:
          'These samples revealed that the Moon is dry, devoid of organic life, and fundamentally connected to the geological infancy of Earth.',
        voiceScript:
          "The forty-seven pounds of rocks brought back by Armstrong and Aldrin revolutionized planetary science. For the first time, geologists could touch and date an extraterrestrial world, proving the Moon was born from a violent collision between Earth and a Mars-sized planet four and a half billion years ago.",
        hotspot: { x: 50, y: 70 },
      },
      {
        id: 'legacy-computing',
        name: 'The Apollo Guidance Computer & Silicon Revolution',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Pioneered silicon integrated circuits for all modern electronics.',
        description:
          'First digital computer to use silicon integrated circuit chips, developed by the MIT Instrumentation Laboratory and programmed by Margaret Hamilton\\'s software team.',
        guideExplanation:
          'NASA bought 60% of all integrated circuits produced in the United States in the mid-1960s, directly funding the birth of Silicon Valley.',
        voiceScript:
          "Every smartphone, laptop, and satellite in the world today owes its existence to Apollo 11. NASA purchased sixty percent of all silicon microchips produced in America to build the Apollo guidance computer, kickstarting the modern digital computer revolution.",
        hotspot: { x: 50, y: 40 },
      },
      {
        id: 'legacy-artemis',
        name: 'The Artemis Horizon & Path to Mars',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'The direct operational foundation for NASA\\'s return to the Moon and Mars.',
        description:
          'Apollo 11 established the technical benchmark: deep-space trajectories, lunar rendezvous, spacesuit life support, and planetary sample extraction.',
        guideExplanation:
          'NASA\\'s Artemis program builds directly on Apollo 11, establishing sustainable lunar bases to prepare human explorers for the voyage to Mars.',
        voiceScript:
          "Apollo 11 was not the end of a journey; it was the opening chapter. Today, NASA's Artemis program is preparing to return astronauts to the lunar south pole—building permanent bases, water extraction plants, and orbital gateways that will carry humanity on to Mars.",
        hotspot: { x: 50, y: 15 },
      },
    ],
    specs: {
      mass: 'Universal Historical Heritage',
      powerSource: 'Enduring cultural and scientific inspiration',
      communication: 'Global archives, UNESCO documentation, and NASA historical records',
      primaryInstruments: [
        'Apollo 11 Lunar Sample Repository (Johnson Space Center)',
        'Tranquility Base in-situ historical landmark',
        'Apollo Guidance Computer software archives (MIT / GitHub)',
      ],
    },
    storyChapters: [
      {
        id: 'leg-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THE DREAM AND THE PROMISE',
        headline: 'We Choose to Go to the Moon.',
        narrative:
          'On May 25, 1961, President John F. Kennedy addressed a joint session of Congress: "I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the Moon and returning him safely to the Earth." At that moment, American astronauts had logged only fifteen minutes in suborbital space. Fulfilling the pledge required mobilizing 400,000 engineers, scientists, and technicians across 20,000 industrial firms, culminating in the triumphant launch of Apollo 11 eight years later.',
        historicalContext:
          'Kennedy famously declared at Rice University in 1962: "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard."',
        archivalImage: '/images/exhibits/eagle_plaque.jpg',
        imageCaption: 'The Apollo 11 plaque stating the peaceful intent of the mission (NASA AS11-40-5899).',
        keyMetric: { label: 'Program Budget', value: '$25.4 billion (1969 dollars)' },
        audioFrequency: 300,
      },
      {
        id: 'leg-ch-2',
        chapterNumber: '02',
        chapterTitle: 'WHAT THE STONES TAUGHT US',
        headline: 'Unlocking 4.5 Billion Years.',
        narrative:
          'Before Apollo 11, the origin of the Moon was completely unknown. Some thought it was a captured asteroid; others believed it formed alongside Earth. Analysis of the 21.55 kg of basalt and anorthosite returned by Armstrong and Aldrin proved that the Moon had once undergone massive melting, forming a global magma ocean. This supported the Giant Impact Hypothesis: that a young proto-Earth collided with a Mars-sized planet named Theia, and the debris coalesced into our Moon.',
        historicalContext:
          'Samples from Tranquility Base continue to be studied today with modern mass spectrometers, revealing trace water molecules trapped inside volcanic glass beads.',
        archivalImage: '/images/exhibits/apollo_boot.jpg',
        imageCaption: 'Neil Armstrong\\'s bootprint pressed into the ancient lunar regolith (NASA AS11-40-5877).',
        keyMetric: { label: 'Oldest Rock Sample', value: '3.7 billion years old' },
        audioFrequency: 420,
      },
      {
        id: 'leg-ch-3',
        chapterNumber: '03',
        chapterTitle: 'WE CAME IN PEACE FOR ALL MANKIND',
        headline: 'The Undying Legacy.',
        narrative:
          'When Apollo 11 concluded, the astronauts did not claim the Moon for any single nation. On the forward leg of the Lunar Module, the plaque remained: "We came in peace for all mankind." Along with the plaque, the crew left a silicon disc etched with messages of goodwill from seventy-three world leaders and an olive branch cast in gold. As humanity prepares to return to the Moon through the Artemis program and venture onward to Mars, Apollo 11 remains the shining beacon of what human beings can achieve together.',
        historicalContext:
          'Neil Armstrong reflected in his final years: "It was special and memorable, but it was only the beginning. Humanity has a destiny among the stars."',
        archivalImage: '/images/apollo11_surface.jpg',
        imageCaption: 'Tranquility Base: humanity\\'s permanent monument on another world (NASA AS11-40-5921).',
        keyMetric: { label: 'Historical Status', value: 'Immortal Benchmark of Human Courage' },
        audioFrequency: 600,
      },
    ],
    legacy: {
      physicalCondition:
        'Tranquility Base remains intact and protected in the lunar vacuum. Its legacy inspires generations of scientists, engineers, and dreamers around the world.',
      currentMilestone:
        'Universal cultural, scientific, and technological touchstone for the human race.',
      scientificImpact: [
        'Established the Giant Impact Hypothesis of Moon formation as the leading scientific theory.',
        'Pioneered modern system engineering, redundancy architecture, and mission control protocols.',
        'Proved that bold national commitment can solve seemingly insurmountable technical hurdles in under a decade.',
      ],
      whatRemainsToday:
        'Tranquility Base stands as an eternal monument on the Sea of Tranquility, preserving the first footsteps of humanity under the stars.',
      sources: [
        {
          title: 'NASA History Series: Apollo by the Numbers',
          organization: 'NASA History Division',
          url: 'https://history.nasa.gov/SP-4029/Apollo_11a_Summary.htm',
          catalogId: 'NASA-SP-4029',
        },
        {
          title: 'Where No Man Has Gone Before: A History of Apollo Lunar Exploration Missions',
          organization: 'NASA History Division',
          url: 'https://history.nasa.gov/SP-4214/sp4214.htm',
          catalogId: 'NASA-SP-4214',
        },
      ],
    },
        curatedQnA: [
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
    ],
  },

  voyager1: {
    id: 'voyager1',
    name: 'BEYOND THE MOON: THE INTERSTELLAR HORIZON',
    callsign: 'Apollo\\'s Legacy Into Deep Space',
    mission: 'Apollo 11 & The Horizon',
    year: '1977 — ETERNITY',
    destination: 'deep_space',
    category: 'Complete Spacecraft',
    modelType: 'Interstellar Deep Space Probe',
    landingDate: 'Continuous Journey Beyond the Moon',
    declarationDate: 'Farthest Human Artifact in History',
    operationalDuration: 'Over 47 years in active flight',
    distanceTraveled: 'Over 15 billion miles (24 billion km) from Earth',
    status: 'travelling',
    statusLabel: 'Travelling Through Interstellar Space — Carrying Humanity\\'s Golden Record',
    locationName: 'Interstellar Space (Constellation Ophiuchus)',
    heroImage: '/images/exhibits/voyager.jpg',
    heroCaption:
      'Voyager carrying humanity’s Golden Record into interstellar space, continuing the deep-space voyage pioneered by Apollo 11 (NASA JPL).',
    heroNasaId: 'PIA17046',
    galleryImages: [
      {
        src: '/images/exhibits/voyager.jpg',
        caption: 'Artist rendering of the spacecraft entering the interstellar plasma medium (NASA JPL).',
        nasaId: 'PIA17046',
      },
      {
        src: '/images/exhibits/voyager_model.png',
        caption: 'Engineering schematic of the 3.7-meter high-gain dish and RTG power booms (NASA JPL).',
        nasaId: 'ED-1977-084',
      },
    ],
    has3DModel: true,
    coordinates: {
      latitude: 'Declination +12° 05′',
      longitude: 'Right Ascension 17h 14m',
      elevation: '162 AU from the Sun',
      planetaryRegion: 'Interstellar Space (Beyond the Heliosphere)',
      worldPosition: [0, 0, 0],
    },
    brief: 'The journeys that carried Apollo\\'s courage into the stars.',
    shortDescription:
      'Building on the navigation, computing, and deep-space communications developed for Apollo 11, humanity sent its voice into the galactic ocean.',
    tagline:
      'Apollo 11 proved humanity could leave its home planet. The missions that followed took that courage across billions of miles into interstellar space.',
    guide: {
      explanation:
        'The deep-space tracking stations, trajectory calculations, and communications networks built to guide Apollo 11 to the Moon became the direct foundation for humanity\\'s deep-space exploration. Missions like Voyager pushed Apollo\\'s legacy into interstellar space, carrying greetings from Earth to the cosmos.',
      purpose:
        'Expanding human exploration beyond the Moon and solar system, carrying the Golden Record to potential galactic civilizations.',
      missionUsed: 'Deep Space Planetary Exploration, 1969 — Eternity.',
      whyLeftBehind:
        'Sailing forever through the interstellar vacuum, untethered to any planetary body.',
      presentStatus:
        'Actively communicating across 15 billion miles of interstellar space, returning telemetry to Earth.',
      spokenIntro:
        'Welcome! You are exploring the interstellar horizon opened by Apollo 11\\'s historic triumph.',
      voiceScript:
        "When Apollo 11 landed on the Moon, it proved that humanity was no longer bound to a single world. The deep-space tracking antennas, celestial navigation, and computing systems created for Apollo paved the way for our grandest voyages into the cosmos. Today, the spirit of Apollo 11 travels fifteen billion miles away in the black of interstellar space, carrying our greetings, our music, and our memories across the stars.",
      keyFacts: [
        'Farthest Human Artifact: Over 15 billion miles from Earth',
        'Built on the deep-space communications network designed for Apollo',
        'Carrying the Golden Record across the galactic ocean for billions of years',
      ],
    },
    components: [
      {
        id: 'voy-antenna',
        name: '3.7-Meter High-Gain Parabolic Reflector',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Oriented directly at Earth\\'s Deep Space Network antennas.',
        description:
          'Carbon-composite parabolic dish transmitting radio signals across 22 light-hours of interstellar vacuum.',
        guideExplanation:
          'Direct descendant of the Goldstone and Honeysuckle Creek tracking antennas developed to receive Apollo 11\\'s television transmissions.',
        voiceScript:
          "This high-gain antenna sends radio signals across billions of miles. Operating on just twenty-three watts of power—less than a refrigerator bulb—its signal travels at lightspeed for over twenty-two hours before reaching Earth.",
        hotspot: { x: 50, y: 40 },
      },
      {
        id: 'voy-golden-record',
        name: 'The Golden Record (A Message From Earth)',
        category: 'Hardware Component',
        remainsOnSite: false,
        siteNote: 'Mounted to the spacecraft bus, designed to endure for over a billion years.',
        description:
          '12-inch gold-plated copper phonograph record containing 115 images, sounds of Earth, greetings in 55 languages, and 90 minutes of musical masterpieces.',
        guideExplanation:
          'Like the Apollo 11 plaque on the Moon, the Golden Record carries our peaceful greetings to the cosmos.',
        voiceScript:
          "Mounted to the side of the spacecraft is the Golden Record. Carrying the greetings of fifty-five languages, the laughter of children, and music from Bach to Chuck Berry, it will wander the Milky Way for billions of years as a message of hope from planet Earth.",
        hotspot: { x: 65, y: 62 },
      },
    ],
    specs: {
      mass: '722 kg dry spacecraft mass',
      powerSource: 'Three Plutonium-238 Multi-Hundred-Watt RTGs',
      communication: '3.7 m High-Gain parabolic X/S-band dish (23 W transmitter)',
      primaryInstruments: [
        'Cosmic Ray & Low-Energy Charged Particle Subsystems',
        '13-Meter Fluxgate Magnetometer Boom',
        'Plasma Wave Subsystem & Golden Record',
      ],
    },
    storyChapters: [
      {
        id: 'voy-ch-1',
        chapterNumber: '01',
        chapterTitle: 'THE LEGACY THAT REACHED THE STARS',
        headline: 'Beyond the Cradle.',
        narrative:
          'The triumphs of Apollo 11 transformed humanity into a spacefaring species. The engineering audacity that carried three men to the Moon in 1969 inspired the grand planetary tours of the 1970s and the deep-space probes that have now crossed the termination shock into the interstellar ocean. In the words of Neil Armstrong: "We came in peace for all mankind"—a message that now travels forever among the stars.',
        historicalContext:
          'Radio signals traveling at lightspeed take over 22 hours each way to reach Earth today.',
        archivalImage: '/images/exhibits/voyager.jpg',
        imageCaption: 'The spacecraft entering interstellar plasma space (NASA JPL).',
        keyMetric: { label: 'Speed Relative to Sun', value: '17 km/s (38,000 mph)' },
        audioFrequency: 440,
      },
    ],
    legacy: {
      physicalCondition: 'Fully intact, flying through interstellar plasma at ~17 km/s.',
      currentMilestone: 'Farthest human-built spacecraft operating in history.',
      scientificImpact: [
        'First spacecraft to directly sample the interstellar medium outside the heliopause.',
        'Discovered active volcanism on Io and intricate ring dynamics around Saturn.',
      ],
      whatRemainsToday:
        'Complete spacecraft sailing through the constellation Ophiuchus into the galactic void.',
      sources: [
        {
          title: 'NASA JPL: Voyager Interstellar Mission Telemetry & Archive',
          organization: 'NASA / JPL-Caltech',
          url: 'https://voyager.jpl.nasa.gov/',
          catalogId: 'NSSDC-ID: 1977-084A',
        },
      ],
    },
        curatedQnA: [
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
    ],
  },
};

export const EXHIBITION_COLLECTIONS: Record<string, string[]> = {
  moon: ['apollo11_eagle', 'apollo_lrv', 'surveyor3', 'apollo_alsep'],
  mars: ['sojourner', 'spirit', 'opportunity', 'insight'],
  deep_space: ['voyager1'],
};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/artifacts.ts'), fileContent, 'utf8');
console.log('Successfully written src/data/artifacts.ts');
