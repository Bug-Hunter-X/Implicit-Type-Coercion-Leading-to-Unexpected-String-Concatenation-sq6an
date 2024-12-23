function combine(a: string, b: number): string {
  return a + b.toString();
}

let result = combine("hello", 5); //Explicit Conversion to String
console.log(result); // Output: "hello5"

//Alternative, More Robust Solution using Template Literals:
function combine2(a: string, b: number): string {
  return `${a}${b}`;
}

let result2 = combine2("hello", 5);
console.log(result2); // Output: "hello5"