// Simuation Parameters

export const HEIGHT = 8;
export const WIDTH = 8;
export const SPEED = 500;

// Data
export const EMPTY_DATA = Array(HEIGHT).fill(Array(WIDTH).fill(false));

export const BEACON = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, true, true, false, false, false, false],
    [false, false, true, true, false, false, false, false],
    [false, false, false, false, true, true, false, false],
    [false, false, false, false, true, true, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]
];

export const TOAD = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, true, true, true, false, false],
    [false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]
];
