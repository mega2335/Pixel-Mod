const ef = require("effects");
const bul = require("bullets");
const c = require("consts");


const needle = extend(ItemTurret, "needle", {
  shootEffect: ef.smallShoot,
  smokeEffect: Fx.none,
  range: c.needleRange,
});
needle.ammo(
  Items.copper, bul.needleCopper,
  Items.lead, bul.needleLead
)
exports.needle = needle;

const blade = extend(ItemTurret, "blade", {
  shootEffect: ef.bigShoot,
  smokeEffect: ef.smallSmoke,
  range: c.bladeRange,
  setStats(){
    this.super$setStats();
    this.stats.add(Stat.ammo, StatValues.ammo(ObjectMap.of(this, bul.bladeLaser)));
  },
});
blade.buildType = () => extend(ItemTurret.ItemTurretBuild, blade, {
	//reload of attack
creload : 0,
	randX: 0,
	randY: 0,
	randMax: 6,
    updateTile(){
        this.super$updateTile();
        
        if(this.isShooting() && this.isActive() && this.hasAmmo() && this.power.status > 0.5 && this.creload >= 49){
		this.randX = Mathf.range(-this.randMax, this.randMax)
		this.randY = Mathf.range(-this.randMax, this.randMax)
            this.creload = 0
            //bullet creating
            bul.bladeLaser.create(this, this.team, this.x + this.randX, this.y + this.randY, this.rotation)
            //shoot sound
            Sounds.bigshot.at(this)
            
        }
        else{
            if(this.creload < 49){this.creload += 1} 
        }
    },
});
blade.ammo(
  Items.graphite, bul.bladeGraphite
)
exports.blade = blade;

const knife = extend(PowerTurret, "knife", {
	shootType: bul.knifePixel,
  shootEffect: ef.bigShoot,
  smokeEffect: ef.smallSmoke,
  range: c.knifeRange,
  setStats(){
    this.super$setStats();
    this.stats.add(Stat.ammo, StatValues.ammo(ObjectMap.of(this, bul.bladeLaser)));
  },
});
knife.buildType = () => extend(PowerTurret.PowerTurretBuild, knife, {
	//reload of attack
creload : 0,
    updateTile(){
        this.super$updateTile();
        
        if(this.isShooting() && this.isActive() && this.hasAmmo() && this.power.status > 0.5 && this.creload >= 199){
            this.creload = 0
            //bullet creating
            bul.bladeLaser.create(this, this.team, this.x, this.y, this.rotation)
            //shoot sound
            Sounds.plasmaboom.at(this)
		//shoot effect
            ef.smallHit.at(this.x, this.y)
        }
        else{
            if(this.creload < 199){this.creload += 1} 
        }
    },
});
exports.knife = knife;

const bloom = extend(PowerTurret, "bloom", {
  shootType: bul.bloomPixel,
  shootEffect: ef.smallShoot,
  smokeEffect: ef.smallSmoke,
  range: c.bloomRange,
});
exports.bloom = bloom;

const quark = extend(PowerTurret, "quark", {
  shootType: bul.quarkBullet,
  shootEffect: Fx.none,
  smokeEffect: ef.smallSmoke,
  range: c.quarkRange,
});
exports.quark = quark;

const revamp = extend(PowerTurret, "revamp", {
  shootType: bul.revampPixel,
  shootEffect: ef.smallHealShoot,
  smokeEffect: ef.smallHealSmoke,
  range: c.revampRange,
});
exports.revamp = revamp;

const pyroclast = extend(ItemTurret, "pyroclast", {
  shootEffect: ef.bigShoot,
  smokeEffect: Fx.none,
  range: c.pyroclastRange,
});
pyroclast.ammo(
  Items.coal, bul.pyroclastCoal,
  Items.pyratite, bul.pyroclastPyra
)
exports.pyroclast = pyroclast;

const energy = extend(PowerTurret, "energy", {
  shootType: bul.energyPixel,
  shootEffect: Fx.none,
  smokeEffect: Fx.none,
  range: c.energyRange,
});
energy.shoot.firstShotDelay = c.energyChargeTime - 10;
exports.energy = energy;
