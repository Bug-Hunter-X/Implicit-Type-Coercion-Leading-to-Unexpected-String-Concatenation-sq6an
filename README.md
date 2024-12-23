# TypeScript Implicit Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript related to implicit type coercion. The `combine` function is declared to return a string, but it implicitly concatenates a string and a number without raising a type error. This can lead to unexpected behavior and difficult-to-debug issues.

## Bug Description

The core issue lies in TypeScript's handling of type coercion. While the function signature promises a string return value, TypeScript doesn't prevent the concatenation of a string and a number. This results in string concatenation instead of a type error as one might expect.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts`.
3. Run the TypeScript compiler (tsc) on the file.
4. Observe that the code compiles successfully without any errors.
5. Run the compiled JavaScript code. The output will be "hello5", demonstrating the unintended concatenation.

## Solution

Refer to `bugSolution.ts` for a corrected version of the code.