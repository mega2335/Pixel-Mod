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
blade.buildType = () => extend(PowerTurret.PowerTurretBuild, blade, {
	//reload of attack
creload : 0,
  trns: new Vec2(),
  trns2: new Vec2(),
    updateTile(){
        this.super$updateTile();
        
        if(this.isShooting() && this.isActive() && this.hasAmmo() && this.creload >= 14){
            this.creload = 0
          this.trns2.trns(this.rotation, this.shootY)
          //vector
          this.trns.trns(this.rotation, -2)
            //bullet creating
            bul.bladeLaser.create(this, this.team, (this.x + this.trns.x) + this.trns2.x, (this.y + this.trns.y) + this.trns2.y, this.rotation)
          //vector
          this.trns.trns(this.rotation, 2)
            //bullet creating
            bul.bladeLaser.create(this, this.team, (this.x + this.trns.x) + this.trns2.x, (this.y + this.trns.y) + this.trns2.y, this.rotation)
            //shoot sound
            Sounds.bigshot.at(this)
            
        }
        else{
            if(this.creload < 14){this.creload += 1} 
        }
    },
});
blade.ammo(
  Items.graphite, bul.bladeGraphite
)
exports.blade = blade;

const bloom = extend(PowerTurret, "bloom", {
  shootType: bul.bloomPixel,
  shootEffect: ef.smallShoot,
  smokeEffect: ef.smallSmoke,
  range: c.bloomRange,
});
exports.bloom = bloom;

const revamp = extend(PowerTurret, "revamp", {
  shootType: bul.revampPixel,
  shootEffect: ef.smallHealShoot,
  smokeEffect: ef.smallHealSmoke,
  range: c.revampRange,
});
exports.revamp = revamp;
