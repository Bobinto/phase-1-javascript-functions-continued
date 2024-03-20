function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }
  


function saturdayFun(activity = 'roller-skate') {
    return function(override = activity) {
      console.log(`This Saturday, let's ${override}!`);
    };
  }
  
 
  const saturdayFunDefault = saturdayFun();
  const saturdayFunOverridden = saturdayFun('hike');
  

  saturdayFunDefault(); 
 
  saturdayFunOverridden(); 

  
   
  
  function wrapAdjective(flair = "*", defaultAdjective = "special") {
    return function(adjective = defaultAdjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  function mondayWork(activity = 'go to the office') {
    return function(override = activity) {
      console.log(`This Monday, let's ${override}!`);
    };
  }
  
  demoChain("Dr. Stephen Strange")()();
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction());
  console.log(encouragingPromptFunction("awesome")); 
  console.log(saturdayFun()()); 
  console.log(saturdayFun()("picnic")); 
  
  console.log(mondayWork()()); 
  console.log(mondayWork()("work from home"));
  
        