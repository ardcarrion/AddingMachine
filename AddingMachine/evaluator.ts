import KrisStack from "krisstack";

export default class Evaluator{
    vals : KrisStack<number>; 
    ops : KrisStack<string>; 
    
    constructor() {
        this.vals = new KrisStack;
        this.ops = new KrisStack;
    }

    run(toEvaluate: string) {
        let tokens : string[] = toEvaluate.split(" ");
        for (let token of tokens) {
            if (token === "(") continue;
            else if (token === "+") this.ops.push(token);
            else if (token === "-") this.ops.push(token);
            else if (token === "*") this.ops.push(token);
            else if (token === "/") this.ops.push(token);
            else if (token === "sqrt") this.ops.push(token);
            else if (token === ")") {
                let op  : string = this.ops.pop();
                let v : number = this.vals.pop();
                if (op === "+") v = this.vals.pop() + v;
                else if (op === "-") v = this.vals.pop() - v;
                else if (op === "*") v = this.vals.pop() * v;
                else if (op === "/") v = this.vals.pop() / v;
                else if (op === "sqrt") v = Math.sqrt(v);
                this.vals.push(v);    
            }
            else this.vals.push(Number(token));
        }
        return this.vals.pop();
    }
}