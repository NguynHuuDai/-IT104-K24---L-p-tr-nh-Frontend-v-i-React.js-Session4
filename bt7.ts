function processInput(input: string | number | boolean) {
    if (typeof input === "string") {
        if (!isNaN(Number(input))) { // ktra so
            const num = Number(input);
            console.log(num * num);
        } else {
            let count = 0;
            for (let i = 0; i < input.length; i++) {
                const check = input[i];
                if ((check >= 'a' && check <= 'z') || (check >= 'A' && check <= 'Z')) {
                    count++;
                }
            }
            console.log(count + " ký tự chữ cái");
        }
    } else if (typeof input === "number") {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        } else {
            console.log("Không phải số nguyên tố");
        }
    } else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}

function isPrime(n: number) {       // so ng to
    if (n < 2 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


processInput("hieu36");
processInput(26);
processInput("hieufake");