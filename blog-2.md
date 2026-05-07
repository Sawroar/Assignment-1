Explanation:

```typescript
function wrapInArray(value: number): number[] {
  return [value];
}
```

Clean enough. But then someone needs it for strings. And then for a custom `User` type. So you write three functions:

```typescript
function wrapNumberInArray(value: number): number[]   { return [value]; }
function wrapStringInArray(value: string): string[]   { return [value]; }
function wrapUserInArray(value: User):     User[]     { return [value]; }
```

All three functions have identical logic. The only thing that changed is the type. This is the problem generics solve.

The Generic Version:

```typescript
function wrapInArray<T>(value: T): T[] {
  return [value];
}

wrapInArray(42);          /
wrapInArray("hello");     // 
wrapInArray({ id: 1 });   //
```

T is a type parameter — a placeholder that gets filled in at the call site. TypeScript infers it from the argument you pass in. One function, correctly typed for every case.



Sometimes you need to accept multiple types but still need to guarantee something about them. That's where extends comes in:

```typescript
// Only accept objects with an 'id' property
function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const found = findById(users, 1); // type is { id: number, name: string } | undefined
```

TypeScript knows the return type is T | undefined — not a vague object, not any. The full type is preserved through the function. That's the real value.

Generic interfaces and classes:

Generics aren't just for functions. They work on interfaces and classes too:

```typescript
interface ApiResult<T> {
  data: T;
  status: number;
  error?: string;
}



```

One interface handles every shape your API might return. No duplication, no type casting, no any.

A real-world pattern: generic data fetcher



// Usage — TypeScript knows exactly what comes back
const result = await fetchData<{ id: number; name: string }[]>("/api/users");
console.log(result.data[0].name); //
```

The caller decides the shape. The function stays generic. Everyone gets the type safety they need.



## Closing Thoughts

Neither of these features is complicated once it clicks. `unknown` just means "prove it before you use it" — and narrowing is how you do the proving. Generics just mean "write the logic once and let the types flow through."

What they share is a fundamental idea: TypeScript works best when you stop fighting the type system and start describing reality accurately. `any` is a shortcut that hides problems. Copy-pasted typed functions are a shortcut that creates maintenance debt. Both feel fast in the moment and slow you down later.

These aren't academic features — they show up in every well-structured TypeScript codebase. The sooner they become instinct, the less time you spend debugging things the compiler could have caught.
