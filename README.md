### install

```
npm install -g typescript
```

### Start

```js
function greeter(person) {
    return 'Hello, ' + person;
}

var user = 'Jim Green';
document.body.innerHTML = greeter(user);
```

### compiler

```
tsc greeter.ts
```

### type

```ts
function greeter(person: string) {
    return 'Hello, ' + person;
}
```

### interface

```ts
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

var user = {
    firstName: 'Jim',
    lastName: 'Green'
};
document.body.innerHTML = greeter(user);
```

