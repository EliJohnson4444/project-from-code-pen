function alertInputValues () {
  var name = document.getElementById("name").value
  var age = document.getElementById("age").value
  var output = `Name: ${name} Age: ${age}`
  if(7 > age > 0) {
    output = output + " tf!?"
  }
  if(name === "John" || name === "john") {
    output = `Name: ${name} Age: ${age}...pretty neat right?`
  }
  if(name === "loren" || name === "Loren") {
    output = "dad? wtf are you doin on here?!"
  }
    if(name === "Matt" || name === "matt") {
      output = `Name: ${name}...oh, Matt, saw dude!`
    }
  if(name === "Beth" || name === "beth") {
    output = `Name: ${name} Age: ${age}...like it mother? `
  }
  if(name === "Sare" || name === "sare") {
    output = `Name: ${name} Age: ${age} Happy Birthday!!!`
  }
  if(name === "Larry Yes" || name === "larry yes") {
    output = `Name: ${name}!!! Age: ${age}`
  }
    if(name === "pops" || name === "Pops" || name === "david" || name === "David") {
      output = `Name: ${name} Age: ${age}`
    }
  if(name === "Omi" || name === "omi" || name === "Helen" || name === "helen") {
    output =`Name: ${name} Age: ${age}`
  }
  if(name === "Noah" || name === "noah") {
    output = `Name: NERRRRRD Age: ${age}`
  }
  if(name === "Svas" || name === "svas") {
    output = `Name: UncleNugger Age: ${age}`
  }
  alert(output)
}
