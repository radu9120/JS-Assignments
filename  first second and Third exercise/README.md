JavaScript 1

1. let – is a modern variable declaration.
   var – is an old-school variable declaration.
   const – is like let , but the value of the variable can't be changed.

2. var and the main reason is that:
   var is scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } .

3.Give them a clear name mostly based on the subject area. So that the variable name clearly describes its purpose.

4.The + operator performs concatenation, which means joining end-to-end. So we need to be careful when using it with number and strings cause it will concatenate them.

5. Modulus operator. Returns remainder of two operands.

6. (==) is a comparison operator, which transforms the operands having the same type before comparison.
   === (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type.

7. NaN, an acronym for Not a Number is an exception that usually occurs in the cases when an expression results in a number that is undefined or can't be represented.

8.Increment ++ and Decrement -- Operator as Prefix and Postfix

9. Prefix and Postfix Operators are primarily used in relation to increment and decrement operators. If the increment and decrement operators are written before the operand, then they are termed as prefix operators. However, if they are written after the operand, then they are termed as postfix operators.

10. Operator precedence describes the order in which operations are performed in an arithmetic expression. Multiplication ( \* ) and division ( / ) have higher precedence than addition ( + ) and subtraction ( - ).

11. With the Chrome browser(or any other browser like firefox) open, right-click anywhere in the browser window and select Inspect from the pop-up menu. By default, the Inspect will open the "Elements" tab in the Developer Tools. Click on the "Console" tab which is to the right of "Elements".

12. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal (0x-prefixed) formats are supported. Negative numbers are supported (though not for hex). Using the operator on BigInt values throws a TypeError.

13. undefined, null, boolean, number, bigint, string, symbol, and object.

14. Strings, Arrays, Classes, Interface.

15. null is an assigned value. It means nothing. undefined means a variable has been declared but not defined yet.

16. there is no real difference between using single quotes, double quotes, or backticks. You can choose one or multiple styles based on your preference. However, It is always good to stick to a single format throughout the project to keep it neat and consistent.

17.Strings that contain references to variables or expressions are called interpolated strings.

18. Variables in Strings with Template Literals
    One special feature of the template literal feature is the ability to include expressions and variables within a string. Instead of having to use concatenation, we can use the ${} syntax to insert a variable.

19. How do you embed variables/expressions in a string?

20. Javascript uses '\' (backslash) in front as an escape character. To print quotes, using escape characters we have two options: For single quotes: \' (backslash followed by single quote) For double quotes: \” (backslash followed by double quotes.

21. slice() extracts parts of a string and returns the extracted parts in a new string. substr() extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters. substring() extracts parts of a string and returns the extracted parts in a new string.

22. There are three logical operators: and , or , and not . The semantics (meaning) of these operators is similar to their meaning in English. For example, x > 0 and x < 10 is true only if x is greater than 0 and at the same time, x is less than 10.

23. Comparison operators can compare numbers or strings and perform evaluations. Expressions that use comparison operators do not return a number value as do arithmetic expressions. Comparison expressions return either 1 , which represents true, or 0 , which represents false.

24. Truthy values In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. Falsy values In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.

25. A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string), and false of course.

26. Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.

27. if(condition expression)
    {
    // code to be executed if condition is true
    }

28. switch(expression) {
    case x:
    // code block
    break;
    case y:
    // code block
    break;
    default:
    // code block
    }

29. condition ? exprIfTrue : exprIfFalse

30. A nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function. To summarize: The inner function can be accessed only from statements in the outer function.

31. Functions enable programmers to break down or decompose a problem into smaller chunks, each of which performs a particular task. Once a function is created, the details of how it works can almost be forgotten about.

32. function myFunction(a, b) {
    return a \* b;
    }
    myFunction(10, 2);

33. Anonymous Function is a function that does not have any name associated with it.

34. JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function.

35. Return values are just what they sound like — the values that a function returns when it completes.

36. An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.
