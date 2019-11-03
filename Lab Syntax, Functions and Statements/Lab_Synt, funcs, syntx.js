function solve(x,y,operator)
{
// return params.reduce((a, b)=>eval('${a} ${operator} ${b}'),params.shift());
if(operator=="-")
{
    return x-y;
}
if(operator=="+")
{
    return x+y;
}
if(operator=="/")
{
    return x/y;
}
if(operator=="*")
{
    return x*y;
}
if(operator=="%")
{
    return x%y;
}
if(operator=="**")
{
    return x**y;
}
}