import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Scramblies</h1>
`;

function scramble(str1, str2) {
  var igaz = true;

  for (let i = 0; i < str2.length; i++) {
    if (str1.search(str2[i]) >= 0) {
      str1 = str1.replace(str2[i], ".");
    } else {
      igaz = false;
      break;
    }
  }
  return igaz;
}

console.clear();
//console.log(scramble("world", "world")); //t
//console.log(scramble("rkqodlw", "world")); //t
//console.log(scramble("cedewaraaossoqqyt", "codewars")); //t
//console.log(scramble("katas", "steak")); //f
//console.log(scramble('scriptjavx',        'javascript' )); //f
//console.log(scramble("scriptingjava", "javascript")); //t
//console.log(scramble("scriptsjava", "javascripts")); //t
//console.log(scramble("javscripts", "javascript")); //f
//console.log(scramble("jscripts", "javascript")); //f

let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10000);
let s2 = "zyxcba".repeat(9000);
console.log(scramble(s1, s2));
