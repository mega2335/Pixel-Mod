const c = require("consts");
const pal = require("palette");

const bloomPixel = extend(BasicBulletType, {
  damage: 37,
  splashDamage: 20,
  splashDamageRadius: 20,
  lifetime: (c.bloomRange / 3) + c.block / 2,
  speed: 3,
  draw(b){
    Draw.color(pal.brownLight)
    Draw.z(Layer.bullet)
    Fill.rect(b.x, b.y, 3, 3)
  },
});
exports.bloomPixel = bloomPixel;
