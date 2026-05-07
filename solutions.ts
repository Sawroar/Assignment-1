// Solution of Problem 1
function filterEvenNumbers(numbers:number[]){
numbers.map(number=>{
      if(number%2===0){
        //   console.log(number);
        return number;
    }
   
})
}
filterEvenNumbers([1,2,3,4,5,6]);


// <---------------------------------------------------------------------->

// Solution of Problem 2

function reverseString(str:string):String{
   const reverse= str.split("").reverse().join("")
//    console.log(reverse);
   return reverse;
}
reverseString("typescript");

// <---------------------------------------------------------------------->

// Solution of Problem 3

function checkType(input:string|number):string|Number{
if(typeof input === 'string'){
    // console.log("It is a string");
    return input ;
}
else{
    // console.log( "It is a Number");
    return input;
}
}

checkType(8)

// <---------------------------------------------------------------------->

// Solution of Problem 4
type User={
    id:number;
    name:string;
    age:number
}
const user:User = { id: 1, name: "John Doe", age: 21 };

function getProperty(obj:User,key:keyof User){
    return obj[key]
}
const result =getProperty(user,'name')
// console.log(result)


// <---------------------------------------------------------------------->

// Solution of Problem 5

interface Book{
    title:string;
    author:string;
    publishedYear:number;
   
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

interface BookWithReadStatus extends Book{
    isRead:boolean
}

function toggleReadStatus(book:Book):BookWithReadStatus & {isRead:boolean}{
   return  { ...book,isRead:true}
   
}

const output=toggleReadStatus(myBook)
// console.log(output)

// <---------------------------------------------------------------------->

// Solution of Problem 6

class Person{
  name:string;
 age:number;

    constructor(name:string,age:number){
this.name=name;
this.age=age;

 }
}
class Student extends Person{
    grade:string ;
constructor(name:string,age:number,grade:string){
    super(name,age,)
    this.grade=grade
}
    getDetails(){
        return(String(`${this.name} ${this.age} ${this.grade}`))
    } 

}
const student = new Student("Alice", 20, "A");
// const final =student.getDetails();

// <---------------------------------------------------------------------->

// Solution of Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(item => arr2.includes(item));
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
// const final =getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
// console.log(final)
