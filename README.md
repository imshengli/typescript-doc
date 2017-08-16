### install

```
npm install -g typescript
```

### Start

```
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

```
function greeter(person: string) {
    return 'Hello, ' + person;
}
```

### interface

```
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

