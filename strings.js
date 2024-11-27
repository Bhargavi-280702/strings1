// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

var a="Hello    "
var b="       World"
var trimstr=a.trimEnd();
var trimstr2=b.trimStart();
var concatstr=trimstr.concat(trimstr2);
var uppercase=concatstr.toUpperCase();
console.log(uppercase)


// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

var str="JavaScriptishard";
var slicestr=str.slice(4,10);
var lastindex=slicestr.lastIndexOf('t');
var lowerCase=slicestr.toLocaleLowerCase();
console.log(slicestr)
console.log(lastindex)
console.log(lowerCase)


// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

var char="a";
var str="mazing";
var concatstr=char.concat(str);
var uppercase=concatstr.toUpperCase();
var lstsecondchar=uppercase.charAt(uppercase.length-2);
console.log(concatstr)
console.log(uppercase)
console.log(lstsecondchar)


// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase

var str1="java";
var str2="script";
var frststr=str1.slice(0,3);
var secondstr=str2.slice(-3);
var concatstr=frststr.concat(secondstr);
var uppercase=concatstr.charAt(0).toUpperCase()+concatstr.slice(1,concatstr.length-1)+
              concatstr.charAt(concatstr.length-1).toUpperCase();
console.log(frststr)
console.log(secondstr)
console.log(concatstr)
console.log(uppercase)


// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

var str1="    javascript    ";
var str2="programming";
var trimstr=str1.trim();
var uppercase=trimstr.charAt(0).toUpperCase()+trimstr.slice(1,-1)+
               trimstr.charAt(trimstr.length-1).toUpperCase();
var extract=uppercase.slice(0,4);
var concatstr=extract.concat(str2);
console.log(trimstr)               
console.log(uppercase)    
console.log(extract)
console.log(concatstr)     


// 6."hello there , how are you " find the index of are word in the sentence

var sentence="hello there , how are you ";
var index=sentence.indexOf("are");
console.log(index)
