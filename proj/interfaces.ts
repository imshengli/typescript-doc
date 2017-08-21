interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    return {
        color: 'color',
        area: 1
    };
}
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
