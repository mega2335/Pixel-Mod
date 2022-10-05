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
