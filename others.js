class ClassHero {
    constructor(name, superPower) {
      this.name = name;
      this.superPower = superPower;
    }
    
    throwSpiderWeb() {
      console.log('*spider web noise*');
    }
  }
  
  const SpiderMan = new ClassHero('spider-man', ['swing', 'stick to the walls', 'spider sense']);
  console.log(SpiderMan);
  
  /* ----- */
  
  function factoryHero(name, superPower) {
    this.name = name;
    this.superPower = superPower;
    
    function getMjolnir() {
      console.log('*Mjolnir is on the way*');
    }
    
    return {
      name: name,
      getMjolnir: getMjolnir,
    }
  }
  
  const Thor = new factoryHero('Thor', 'be a GOD!');
  console.log(Thor);
  
  /* ----- */
  
  const Batman = {
    name: 'Batman',
    throwBatarang: function() {
      console.log('*batarang noise*');
    }
  };
  console.log(Batman);
  
  const EnhancedBatman = {
    ...Batman,
    alterEgo: 'Bruce Wayne',
  }
  
  console.log(EnhancedBatman);
  
  /* ----- */
  
  