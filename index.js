function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return "This one is on me!"
  }
  else if (feet > 400 && feet < 2000){
    return "That will be twenty bucks."
  }
  else if (feet > 2000 && feet < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if(feet > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(City){
  // Write your code here!
  return City === "NYC"?"Ok, sounds good." 
      : City !=="NYC"? "No go."
      : result
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case "generous":
      return "Thank you so much."
      case "not as generous":
      return "Thank you."
      case "thanks for everything":
      return "Bye."
  }
}