function Pokemon(name, health, attackBonus){
        this.name = name;
        this.health = health;
        this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function() {
	return this.attackBonus + 2;
}

Pokemon.prototype.isDefeated = function() {
	if(this.health > 0){
        return false;
    }
    else{
        return true;
    };
}

function simulateBattle (pokemon1, pokemon2, firstMove){
    let winner = pokemon1.name;
    while(pokemon1.health > 0 && pokemon2.health > 0){
        pokemon1.health = 0;
    }
    
    
    return winner;
}