const c = require("consts");
const pal = require("palette");
const ef = require("effects");

const bloomPixel = extend(BasicBulletType, {
  damage: 37,
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
    Draw.color(pal.brownLight)
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
  damage: 20,
  lifetime: c.needleRange / 2,
  speed: 2,
  draw(b){
    Draw.color(Pal.bulletYellow)
    Draw.z(Layer.bullet)
    Lines.stroke(1.5)
    Lines.lineAngleCenter(b.x, b.y, b.rotation, 5)
  },
});
exports.needleCopper = needleCopper;
