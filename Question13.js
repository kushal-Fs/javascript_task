<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Anonymous Function</h1>
    <div>
        A function Expressions defines a named or anonymous function. An anonymous function is a function that has no name.                                    A function expression can be stored in a variable:
        <br>A function expression can be stored in a variable:
        <br>
        Example<br>
        var x = function (a, b) {return a * b};
        <br>
        After a function expression has been stored in a variable, the variable can be used as a function:
        <br>
        Example
        var x = function (a, b) {return a * b};
        var z = x(4, 3);
    </div>
<script>
        var display=function() 
        { 
        document.writeln("Anonymous Function"); 
        } 
        display(); 
    </script>
</body>
</html>
