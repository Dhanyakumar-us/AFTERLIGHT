export interface HardwareModelMeta {
  artifactId: string;
  hasOfficial3D: boolean;
  modelPath?: string;
  fileSizeBytes?: number;
  fileSizeFormatted?: string;
  sourceName?: string;
  sourceUrl?: string;
  attribution?: string;
  cameraConfig?: {
    position: [number, number, number];
    target: [number, number, number];
    minDistance: number;
    maxDistance: number;
  };
  unavailableReason?: string;
}

export const NASA_MODELS_MANIFEST: Record<string, HardwareModelMeta> = {
  apollo11_eagle: {
    artifactId: 'apollo11_eagle',
    hasOfficial3D: true,
    modelPath: '/models/apollo_lunar_module.glb',
    fileSizeBytes: 716840,
    fileSizeFormatted: '717 KB GLB',
    sourceName: 'NASA 3D Resources / Brian Kumanchik',
    sourceUrl: 'https://science.nasa.gov/3d-resources/apollo-lunar-module/',
    attribution: 'NASA / Brian Kumanchik — Lunar Module Descent & Ascent Stages',
    cameraConfig: {
      position: [5.2, 3.2, 6.8],
      target: [0, 0, 0],
      minDistance: 2.5,
      maxDistance: 16,
    },
  },
  apollo_lrv: {
    artifactId: 'apollo_lrv',
    hasOfficial3D: false,
    unavailableReason:
      'Displaying verified official NASA photographic portrait and spacesuit documentation of the Apollo 11 crew: Neil Armstrong, Buzz Aldrin, and Michael Collins.',
  },
  surveyor3: {
    artifactId: 'surveyor3',
    hasOfficial3D: false,
    unavailableReason:
      'Displaying official NASA archival documentation and launch photography of the Saturn V super-booster (SA-506) at Launch Complex 39A.',
  },
  apollo_alsep: {
    artifactId: 'apollo_alsep',
    hasOfficial3D: false,
    unavailableReason:
      'Displaying official NASA archival documentation of Neil Armstrong\'s first steps and the Early Apollo Scientific Experiments Package (EASEP) deployed at Tranquility Base.',
  },
  sojourner: {
    artifactId: 'sojourner',
    hasOfficial3D: false,
    unavailableReason:
      'Displaying official NASA archival documentation of Command Module Columbia and Michael Collins in solo lunar orbit.',
  },
  spirit: {
    artifactId: 'spirit',
    hasOfficial3D: false,
    unavailableReason:
      'Displaying official NASA archival photography of Apollo 11\'s translunar coast, spacecraft transposition, and docking in deep space.',
  },
  opportunity: {
    artifactId: 'opportunity',
    hasOfficial3D: false,
    unavailableReason:
      'Displaying official NASA archival photography of Apollo 11\'s atmospheric re-entry, Pacific Ocean splashdown, and USS Hornet recovery.',
  },
  insight: {
    artifactId: 'insight',
    hasOfficial3D: false,
    unavailableReason:
      'Displaying official NASA archival documentation of Apollo 11\'s enduring global heritage and the Tranquility Base commemorative plaque.',
  },
  voyager1: {
    artifactId: 'voyager1',
    hasOfficial3D: true,
    modelPath: '/models/voyager_probe.glb',
    fileSizeBytes: 1720864,
    fileSizeFormatted: '1.72 MB GLB',
    sourceName: 'NASA 3D Resources / JPL-Caltech',
    sourceUrl: 'https://science.nasa.gov/3d-resources/voyager-spacecraft/',
    attribution: 'NASA / JPL-Caltech — Voyager Interstellar Mission Probe',
    cameraConfig: {
      position: [4.6, 2.4, 5.8],
      target: [0, 0, 0],
      minDistance: 2.2,
      maxDistance: 16,
    },
  },
};

