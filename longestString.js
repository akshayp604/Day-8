
function longestString(value)
{
var str = value.split(" ")
var longest =0;
var newword =null
console.log(str)
for(var i=0; i<str.length; i++)
{
if(longest <str[i].length)
{
longest=str[i].length;
 newword=str[i]
}

}
return newword;
}

console.log(longestString("Lovely Professional University, Punjab"))




