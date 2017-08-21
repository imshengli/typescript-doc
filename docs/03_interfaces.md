## Interfaces

### Our First Interface

```ts
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

```ts
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

const myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);
```

### Optional Properties

```ts
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
```

### Readonly properties

```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

**readonly vs const**

Variables use const whereas properties use readonly.

### Excess Property Checks

> 应该避免进行额外属性检查；

```ts
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
// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
// success
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

```ts
// add a string index signature
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```

```ts
// assign the object to another variable
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

### Function Types

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
```

参数名可以不一致，但对应位置上的参数类型是兼容的；

```
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
```

### Indexable Types
