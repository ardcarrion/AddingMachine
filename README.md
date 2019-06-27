# Adding Machine - Happy Independence Day 2019.

For your long weekend project, 
create a client-side adding machine that runs in a browser, in [Typescript](https://www.typescriptlang.org/), using Dijkstra’s two-stack evaluator. Your app needs have only one page, so carefully read the notes in the diagram below.

But first, you should `learn you some Typescript`. Read why it was created and why people use it. Find out how to implement a single page web using Typescript. 

It should look something like this when you load the app's URL into a Chrome browser:
![Mockup](AddingMachine.png)

And you should use this evaluator (but first translate it into Typescript) for a start:
```java

public class Calculate {
    private Stack<String> ops  = new Stack<String>();
    private Stack<Double> vals = new Stack<Double>();

    public Calculate() { }
    
    public double run(String toEvaluate) {

        String[] tokens = toEvaluate.split(" ");
        for (String token : tokens) {
            if      (token.equals("("))               ;
            else if (token.equals("+"))    ops.push(token);
            else if (token.equals("-"))    ops.push(token);
            else if (token.equals("*"))    ops.push(token);
            else if (token.equals("/"))    ops.push(token);
            else if (token.equals("sqrt")) ops.push(token);
            else if (token.equals(")")) {
                String op = ops.pop();
                double v = vals.pop();
                if      (op.equals("+"))    v = vals.pop() + v;
                else if (op.equals("-"))    v = vals.pop() - v;
                else if (op.equals("*"))    v = vals.pop() * v;
                else if (op.equals("/"))    v = vals.pop() / v;
                else if (op.equals("sqrt")) v = Math.sqrt(v);
                vals.push(v);
            }
            else vals.push(Double.parseDouble(token));
        }
        return vals.pop();
    }
}
```
You should also translate the `Stack.java` class to typescript as well. I've given you an example. Can you make yours better?

You might wish to apply all your new fancy skills from doing the [YouAreEllClient](https://github.com/Zipcoder/ZCW-MesoLab-YouAreEllClient) la.b

## Node, npm & Angular

You probably need to install Node/NPM and Angular. [TS and Node install](https://dzone.com/articles/how-to-install-typescript-and-nodejs-typescript-tu-1)

You can install angular once you've installed TS and Node. 
`npm install -g @angular/cli`

## Visual Studio Code

I heartily recommend you download and use [Visual Studio Code](https://code.visualstudio.com/) as your IDE for this project. VSC has all kinds of cool Typescript tools (and it is in fact written in Typescript itself). VSC has many of the same features that IntelliJ has, so it should feel quite familiar. Once you have downloaded VSC, you can install Typescript itself, and then see all the magic VSC can do for you when working in Typescript. See [VSC Support For Typescript](https://code.visualstudio.com/Docs/languages/typescript)

-K