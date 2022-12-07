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
export function pow(base:number,power:number):number{
    if(power == 0){
        return 1;
    }
    if((power&1) != 0){
        return base * pow(base,power-1);
    }
    return pow(base*base,power/2);
}