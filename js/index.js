function Fighter({
    name,
    damage,
    hp,
    strength,
    agility
}) {

    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.strength = strength;
    this.agility = agility;
    this.wins = 0;
    this.losses = 0;

    this.addWin = () => {
        return this.wins++
    }

    this.addLoss = () => {
        return this.losses++;
    }

    this.getName = () => {
        return this.name;
    }

    this.getDamage = () => {
        return this.damage;
    }

    this.getHealth = () => {
        return this.hp;
    }

    this.getStrength = () => {
        return this.strength;
    }

    this.getAgility = () => {
        return this.agility;
    }

    this.dealDamage = (num) => {
        let currentHealth = this.hp - num;
        this.hp = currentHealth;
        if (currentHealth < 0 || num > this.totalHP) {
            this.hp = 0;
            return this.hp;
        }
        return currentHealth;
    }
    this.totalHP = hp;
    this.heal = (num) => {
        let healedHealth = this.hp + num 
        if (num > this.totalHP || healedHealth > this.totalHP) {
            this.hp = this.totalHP
            return this.hp;
        }
        this.hp = this.hp + num;
        return this.hp;
    }

    this.logCombatHistory = () => {
        return 'Name: ' + this.name + ' ,' + ' Wins: ' + this.wins + ' ,' + ' Losses: ' + this.losses;
    }


    this.attack = (Fighter) => {
        let attackProb = (100 - (Fighter.getStrength() + Fighter.getAgility())) / 100;
        if (attackProb >= 0 && attackProb <= 0.5) {
            if (Math.floor(Math.random() * 2) > 0) {
                console.log(this.name + ' makes ' + this.damage + ' damage to ' + Fighter.getName());
                return Fighter.dealDamage(this.getDamage());
            } else {
                console.log(this.name + ' attack missed');
                return Fighter.dealDamage(0);
            }
        } else if (attackProb > 0.5 && attackProb <= 0.8) {
            if (Math.floor(Math.random() * 4) > 0) {
                console.log(this.name + ' makes ' + this.damage + ' damage to ' + Fighter.getName());
                return Fighter.dealDamage(this.getDamage());
            } else {
                return Fighter.getHealth();
            }
        } else if (attackProb > 0.8 && attackProb <= 1) {
            if (Math.floor(Math.random() * 8) > 0) {
                console.log(this.name + ' makes ' + this.damage + ' damage to ' + Fighter.getName());
                return Fighter.dealDamage(this.getDamage());
            } else {
                return Fighter.getHealth();
            }
        }
    }
}

function battle(Fighter1, Fighter2) {
    if (Fighter1.getHealth() === 0) {
        return Fighter1.getName() + ' is dead and can\'t fight';
    } else if (Fighter2.getHealth() === 0) {
        return Fighter2.getName() + ' is dead and can\'t fight';
    } else {
        do {
            Fighter1.attack(Fighter2);
            if (Fighter2.getHealth() === 0) {
                Fighter1.addWin();
                Fighter2.addLoss();
                return Fighter1.getName() + ' has won';
            }
            Fighter2.attack(Fighter1);
            if (Fighter1.getHealth() === 0) {
                Fighter2.addWin();
                Fighter1.addLoss();
                return Fighter2.getName() + ' has won';
            }
        } while (Fighter1.getHealth() !== 0 || Fighter2.getHealth() !== 0);
    }
}