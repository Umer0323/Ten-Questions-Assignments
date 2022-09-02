// Q#1
function reverse(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse(32243)));

// Q#2
let Comb = (str) =>{
    let Comb = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            Comb.push(str.slice(i , j));
        }
    }
   return Comb;
}
console.log(Comb('Dog'));

//Q#3
function LtrInAplhabets(str)
  {
return str.split('').sort().join('');
  }
console.log(LtrInAplhabets("webmaster"));

//Q#4
function UprCase(fox)
{
var array1 = fox.split(' ');
var array2 = [];
  
for(var x = 0; x < array1.length; x++){
    array2.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
return array2.join(' ');
}
console.log(UprCase("the quick brown fox"));

//Q#5
function Longest(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(Longest('Web Development Tutorial'));

//Q#6

function count(aei)
{
  var vovels = 'aeiouAEIOU';
  var vovel = 0;
  
  for(var x = 0; x < aei.length ; x++)
  {
    if (vovels.indexOf(aei[x]) !== -1)
    {
      vovel += 1;
    }
  
  }
  return vovel;
}
console.log(count("The quick brown fox"));

//Q#7

function primeNo(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(primeNo(9));


function primeNo(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(primeNo(17));

//Q#8

function LastFirst(num)
{
  num.sort(function(x,y)
           {
           return x-y;
           });
  var sort = [num[0]];
  var result = [];
  
  for(var j=1; j < num.length; j++)
  {
    if(num[j-1] !== num[j])
    {
      sort.push(num[j]);
    }
  }
    result.push(sort[1],sort[sort.length-2]);
  return result.join(',');
  }

console.log(LastFirst([1,2,3,4,5]));


