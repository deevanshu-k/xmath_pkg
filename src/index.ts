export function multiply(...args:number[]) {
    let ans:number = 1;
    args.forEach((v:number) => {
        ans = ans * v;
    });
    return ans;
}
export function add(...args:number[]) {
    let sum : number = 0;
    args.forEach((v:number) => {
        sum = sum + v;
    });
    return sum;
}