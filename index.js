// 1. Define a Function Using Function Declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 2. Define a Function Expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // 3. Define an IIFE (Immediately Invoked Function Expression)
  (function(baseNumber) {
    console.log(baseNumber + 3); // Output: 5
  })(2);
  
  // 4. Define wrapAdjective Function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage of wrapAdjective
  const encouragingPromptFunction = wrapAdjective("%");
  console.log(encouragingPromptFunction("a dedicated programmer")); 
  // Output: "You are %a dedicated programmer%!"
  
  // 5. Test for Saturday Fun (with default argument and override)
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("go bowling")); // Output: "This Saturday, I want to go bowling!"
  
  // 6. Test for Monday Work (with default argument and override)
  console.log(mondayWork()); // Output: "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."
  
 
  