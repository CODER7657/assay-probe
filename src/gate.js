/** The promotion floor the rubric applies. */
export const FLOOR = 38;

/** True when a score clears the floor. */
export const promoted = (score) => score >= FLOOR;
