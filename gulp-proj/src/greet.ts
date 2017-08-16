export function sayHello(name: string) {
    enum Color { Red = 10, Green, Blue }
    let c: Color = Color.Green;
    let colorName: string = Color[11]
    return `Hello from ${name}, ${c}, ${colorName}`;
}
