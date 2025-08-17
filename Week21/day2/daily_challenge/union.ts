
function validateUnionType(value:any, allowedTypes: string[]): boolean {
    return allowedTypes.includes(typeof value);
}

console.log(validateUnionType("Hello", ["string", "number"])); // true
console.log(validateUnionType(42, ["boolean", "string"]));     // false
console.log(validateUnionType(true, ["boolean"]));             // true
