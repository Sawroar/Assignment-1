Blog Topic-1:

Explanation of the usage of any:

the problem with any
when you declare something as any,TypeScript essentially ignores it.It stops checking.You can call methods that don't exists,acess properties that never ther,passes it into functions that expect something completely different and the compiler won't say a word.

<--------------------------------------->
Example using a Function:

function processInput(input:any){
    console.log(input.toUpperCase());    No error.But what if the input is a boolean?
}
processInput(42);   Runtime crash: Input.toUpperCase is not a function.

<-------------------------------------------------------------------------->

The editor was silent.The crash happended in the productioin line.That's the deal with any--it trades complie time safety for runtime surprise.
People reach for any when they are genuinely unsure what a value will be:data from an API,a pares JSON blob,user input.That instinct makes more sensible.The type is uncertain.But any isn't the right tool for uncertainty-it's a tool for opting out entirely.


Explanation of the usage of Unknown:

unkonwn says:"I don't know what this is and neither does TypeScript--so let's figure it out before we touch it."

<--------------------------------------->
Example using a Function:

function processInput(input:unkown){
    console.log(input.toUpperCase());    Error.But Object is type of 'unknown'
}
<-------------------------------------------------------------------------->

Good.Typscript caught the problem before it reached production.Now you're forced to actually verify what input is before using it-which is what you 


Type Narrowing:

Narrowing is how you go from "I don't know what this is" to "I know exactly what this is" Typescript tracks you runtime check and adjust what's allowed inside each branch.

```typescript
function processInput(input:unkown):string{
    if(typeof input === "string"){
        return input.toUpperCase();
    }
    if(typeof input=== "number"){
        return input.toFixed(2);
    }
    return "unsupported type"
}
```
Inside each  if block, TypeScript has *narrowed* the type. It's not a hack or a workaround — it's the language working as intended. You describe the condition, TypeScript narrows the possibilities.


This works with `typeof`, `instanceof`, `Array.isArray()`, and custom type guard functions:

```typescript
interface ApiResponse {
  status: number;
  data: unknown;
}

function isApiResponse(value: unknown): value is ApiResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value &&
    "data" in value
  );
}

function handleResponse(raw: unknown) {
  if (isApiResponse(raw)) {
    // TypeScript now knows: raw is ApiResponse
    console.log(raw.status); // ✅
  }
}
```

The  syntax is a *type predicate — it tells TypeScript that if this function returns, the argument should be treated as  from that point on.






