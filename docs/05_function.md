## 函数

### 函数类型

函数类型包含两部分：参数类型和返回值类型。

**为函数定义类型**

```ts
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number {
    return x + y;
};
```

**书写完整函数类型**

```ts
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number {
        return x + y;
    }
```

### 推断类型

```ts
// myAdd has the full function type
let myAdd = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };
```

### 可选参数和默认参数

在参数名旁使用`?`实现可选参数的功能；可选参数必须跟在必须参数后面；

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right
```

也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是`undefined`时；

```ts
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

### 剩余参数

剩余参数会被当做个数不限的可选参数。

```ts
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

函数类型定义

```ts
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
```

### this

**this和箭头函数**

JavaScript里，this的值在函数被调用的时候才会指定。
