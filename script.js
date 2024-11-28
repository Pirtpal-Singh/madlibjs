document.getElementById("button1").addEventListener("click", madLib1);

function madLib1() {
  let pluralNoun = document.getElementById("pluralNoun").value;
  let adjective = document.getElementById("adjective").value;
  let presentTenseVerb = document.getElementById("presentTenseVerb").value;
  let noun = document.getElementById("noun").value;

  let output = `there are too many ${pluralNoun} on this ${adjective} airplane!", I screamed. "somebody
  has to ${presentTenseVerb} on the ${noun} to solve this problem`;

  document.getElementById("result1").innerHTML = output;
}

document.getElementById("button2").addEventListener("click", madLib2);

function madLib2() {
  let pluralNoun = document.getElementById("pluralNoun").value;
  let adjective = document.getElementById("adjective").value;
  let presentTenseVerb = document.getElementById("presentTenseVerb").value;
  let noun = document.getElementById("noun").value;

  let output = `HELP there are so many ${pluralNoun} this is a ${adjective} nightmare!", I screamed.
      "somebody help me by ${presentTenseVerb} on the ${noun} to save me from this nightmare!!`;

  document.getElementById("result2").innerHTML = output;
}
