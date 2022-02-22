// С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно.
"use strict";

for(var i = 0; i <= 10; i++)
{
    if(i == 0)
    {
        console.log(i + " ноль")
    }
    else if(i % 2 == 0)
    {
        console.log(i + " четное число");
    }
    else
    {
        console.log(i + " не четное число");
    }
}