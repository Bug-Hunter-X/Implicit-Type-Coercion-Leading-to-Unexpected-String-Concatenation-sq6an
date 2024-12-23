function combine(a: string, b: number): string {
  return a + b;
}

let result = combine("hello", 5); // This will compile without error
console.log(result); // Output: "hello5"