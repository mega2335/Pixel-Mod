const c = require("consts");
const pal = require("palette");
const ef = require("effects");

const bloomPixel = extend(BasicBulletType, {
  damage: 37,
  hitEffect: ef.smallHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  splashDamage: 20,
  splashDamageRadius: 20,
  lifetime: c.bloomRange / 3,
  speed: 3,
  draw(b){
    Draw.color(pal.brownLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 2, 2)
  },
  trailEffect: ef.bloomTrail,
  trailInterval: 0.2,
});
exports.bloomPixel = bloomPixel;

const revampPixel = extend(BasicBulletType, {
  damage: 0,
  splashDamage: 90,
  splashDamageRadius: 20,
  lifetime: c.revampRange / 3,
  speed: 3,
  healPercent: 3,
  collidesTeam: true,
  scaleLife: true,
  collidesTiles: false,
  draw(b){
    Draw.color(pal.greenLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 3.5, 3.5)
  },
  trailEffect: ef.revampTrail,
  trailInterval: 0.2,
  hitEffect: ef.revampHit,
  despawnEffect: Fx.none,
});
exports.revampPixel = revampPixel;

const needleCopper = extend(BasicBulletType, {
  hitEffect: ef.smallHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  damage: 20,
  lifetime: c.needleRange / 3,
  speed: 3,
  pierce: true,
  pierceCap: 2,
  draw(b){
    Draw.color(Pal.bulletYellowBack)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 2, 2)
  },
});
exports.needleCopper = needleCopper;

const needleLead = extend(BasicBulletType, {
  hitEffect: ef.smallHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  damage: 35,
  lifetime: c.needleRange / 3,
  speed: 3,
  pierce: true,
  pierceCap: 2,
  draw(b){
    Draw.color(Pal.darkMetal)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 2, 2)
  },
});
exports.needleLead = needleLead;

const bladeGraphite = extend(BasicBulletType, {
  hitEffect: ef.smallHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  damage: 110,
  lifetime: c.bladeRange / 2,
  speed: 2,
  draw(b){
    Draw.color(pal.orangeLight, Pal.darkMetal, b.fin())
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 3, 3)
    Lines.square(b.x, b.y, 2 + b.fout() * 7, Time.time * 1.7)
    Lines.square(b.x, b.y, 2 + b.fout() * 7, Time.time * -1.7)
  },
	lightning: 8,
	lightningLength: 8,
	lightningDamage: 45,
	lightningColor: pal.orangeLight,
});
exports.bladeGraphite = bladeGraphite;

const bladeLaser = extend(LaserBulletType, {
	damage: 75,
	colors: [pal.orangeDark, pal.orangeLight, Color.white],
	width: 8,
	length: 173,
	sideWidth: 0,
  smokeEffect: Fx.none,
});
exports.bladeLaser = bladeLaser;

const quarkBullet = extend(BasicBulletType, {
  hitEffect: ef.quarkHit,
  despawnEffect: Fx.none,
  despawnHit: true,
	damage: 0,
	splashDamageRadius: 10,
  splashDamage: 50,
  lifetime: (c.quarkRange / 2) + c.block / 2,
  speed: 2,
  draw(b){
    Draw.color(Pal.surge, Pal.redLight, b.fin())
    Draw.z(Layer.bullet)
	  Lines.stroke(0.6 * b.fout())
	  Lines.circle(b.x, b.y, 3)
    Lines.square(b.x, b.y, 3, Time.time * 1.7)
    Lines.square(b.x, b.y, 3, Time.time * -1.7)
  },
	lightning: 4,
	lightningLength: 8,
	lightningDamage: 30,
	lightningColor: Pal.surge,
});
exports.quarkBullet = quarkBullet;

const knifePixel = extend(BasicBulletType, {
	damage: 0,
  hitEffect: ef.knifeHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  splashDamage: 120,
  splashDamageRadius: 20,
  lifetime: c.knifeRange / 3,
  speed: 3,
  draw(b){
    Draw.color(pal.orangeLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 4, 4)
  },
  trailEffect: ef.knifeTrail,
  trailInterval: 0.4,
});
exports.knifePixel = knifePixel;

const pyroclastCoal = extend(BasicBulletType, {
  damage: 53,
  hitEffect: ef.pyroclastHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  splashDamage: 30,
  splashDamageRadius: 20,
  lifetime: c.pyroclastRange / 8,
  speed: 8,
  draw(b){
    Draw.color(pal.orangeLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 2, 2)
  },
  trailEffect: ef.pyroclastTrail,
  trailInterval: 0.2,
	statusEffect: StatusEffects.burning,
	statusDuration: 120,
});
exports.pyroclastCoal = pyroclastCoal;

const pyroclastPyra = extend(BasicBulletType, {
  damage: 97,
  hitEffect: ef.pyroclastHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  splashDamage: 60,
  splashDamageRadius: 20,
  lifetime: c.pyroclastRange / 8,
  speed: 8,
  draw(b){
    Draw.color(pal.orangeLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 2, 2)
  },
  trailEffect: ef.pyroclastTrail,
  trailInterval: 0.2,
	statusEffect: StatusEffects.melting,
	statusDuration: 90,
});
exports.pyroclastPyra = pyroclastPyra;

const energyPixel = extend(BasicBulletType, {
  damage: 0,
  splashDamage: 120,
  splashDamageRadius: 20,
  lifetime: c.energyRange / 3,
  speed: 3,
  draw(b){
    Draw.color(pal.redLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 2, 2)
  },
  trailEffect: ef.energyTrail,
  trailInterval: 0.2,
  hitEffect: ef.energyHit,
  despawnEffect: Fx.none,
	chargeEffect: ef.energyCharge,
});
exports.energyPixel = energyPixel;

const downpourExplosion = extend(BasicBulletType, {
  damage: 0,
	splashDamage: 95,
	splashDamageRadius: 32,
  hitEffect: ef.strikeMissileHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  lifetime: 0,
  speed: 0,
	keepVelocity: false,
	collides: false,
	collidesAir: false,
	hittable: false,
  draw(b){},
});
exports.downpourExplosion = downpourExplosion;

const downpourTracker = extend(BasicBulletType, {
  damage: 0,
  hitEffect: Fx.none,
  despawnEffect: Fx.none,
  despawnHit: true,
  lifetime: c.downpourRange / 4.5,
  speed: 4.5,
	homingPower: Number.MAX_VALUE,
	homingRange: 12 * c.block,
	collidesAir: false,
	hittable: false,
  draw(b){
    Draw.color(pal.redLight)
    Draw.z(Layer.bullet)
    Lines.lineAngleCenter(b.x, b.y, Time.time * 2, 3)
	  Lines.lineAngleCenter(b.x, b.y, (Time.time * 2) + 90, 3)
  },
	fragBullet: downpourExplosion,
	fragBullets: 1,
});
exports.downpourTracker = downpourTracker;

const blastBullet = extend(BasicBulletType, {
  damage: 0,
  hitEffect: ef.blastHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  splashDamage: 70,
  splashDamageRadius: 20,
  lifetime: c.blastRange / 3,
  speed: 3,
  draw(b){
    Draw.color(pal.redLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 2, 2)
  },
});
exports.blastBullet = blastBullet;

const speedOrb = extend(BasicBulletType, {
  damage: 100,
  hitEffect: ef.speedHit,
  despawnEffect: Fx.none,
  despawnHit: true,
  lifetime: c.speedRange / 8,
  speed: 8,
	pierce: true,
	pierceCap: 3,
  draw(b){
    Draw.color(pal.redLight)
    Draw.z(Layer.bullet)
    Lines.circle(b.x, b.y, 2)
  },
	trailEffect: ef.speedTrail,
	trailSpacing: 0.4,
});
exports.speedOrb = speedOrb;
