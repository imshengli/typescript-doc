## 泛型

### 泛型示例

```ts
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString"); // 1.
let output = identity("myString"); // 2.
```

### Generic Type Variables

必须把这些参数当做是任意或所有类型。

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
```

### Generic Types

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
```

泛型接口

```ts
interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn = identity;
```
