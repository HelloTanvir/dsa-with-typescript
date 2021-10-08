import CustomSet from "./Classes/Set";
import Stack from "./Classes/Stack";

// stack test
console.log("Stack Test");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.length());
console.log(stack.peek());

// set test
console.log("\n\n");
console.log("Set Test");

const set = new CustomSet();

set.add(1);
set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(3);
set.add(7);
set.add(7);
set.add(7);

console.log(set.values());
console.log(set.size());
console.log(set.has(7));
console.log(set.has(9));

const set2 = new CustomSet();

set2.add("a");
set2.add(2);
set2.add(2);
set2.add("b");

const union = set.union(set2);
console.log(union);
