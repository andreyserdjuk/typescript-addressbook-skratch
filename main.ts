/// <reference path="Kernel.ts" />

try {
    let kernel = new Application.Kernel; 
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}