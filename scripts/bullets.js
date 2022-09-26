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
