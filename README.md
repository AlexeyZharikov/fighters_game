Fighters game steps: 
1. Open index.html;
2. Open Developer console (F12);
3. In console input field type f.e.: 

const figter1 = new Fighter({
name: 'Leo', 
damage: '20', 
strength: '20', 
agility: '15',
hp: '100'});

and press Enter button. This command creates 1-st fighter;
4. In same way create 2-nd fighter, f.e.:

const figter2 = new Fighter({
name: 'Garro', 
damage: '25', 
strength: '25', 
agility: '10',
hp: '100'}); 

PAY ATTENTION that damage, strength, agility and hp are depends on fight.
5. In console field input:

battle(fighter1, fighter2);

and press Enter button;
6. You can check hp of fighters:

fighter1.getHealth();
or
fighter2.getHealth();

and press Enter button;
Another commands(can use for fighter2 too):
- fighter1.heal(50) - heals fighter1 for 50 hp. You can heal any ammount but not more 100 hp;
- fighter1.logCombatHistory() - it show name, all wins, all losses;
- fighter1.getStrength() - show strength of fighter1;




