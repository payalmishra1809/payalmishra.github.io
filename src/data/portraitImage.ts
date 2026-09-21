// Payal Mishra's authentic portrait photograph configuration
// Prioritizes PICturehehe.jpg across standard case-variations, then falls back safely
export const CANDIDATE_PORTRAITS = [
  './PICturehehe.jpg',
  './picturehehe.jpg',
  './PIC.jpg',
  './pic.jpg',
  './payal.jpg',
  './portrait.jpg',
  './payal_formal_portrait.jpg',
];

export const AUTHENTIC_PORTRAIT_SRC = CANDIDATE_PORTRAITS[0];
export const PORTRAIT_IMAGE_SRC = AUTHENTIC_PORTRAIT_SRC;
