function firstWord(s) {
  // your code here
	let result ="";
//   if(s == "")
//   {
//       return result;
//   }
  for(let i = 0; i<s.length; i++)
  {
      if(result.length == 0 && s[i]==" ")
      {
          i = i+1;
      }
      else if(result.length != 0 && s[i] == " ")
      {
          break;
      }
      result += s[i];
  }
  return result;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
