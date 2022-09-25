const ef = require("effects");
const bul = require("bullets");
const c = require("consts");
/*
const bloom = extend(PowerTurret, "bloom", {
  shootEffect: ef.smallShoot,
  smokeEffect: Fx.none,
  shootType: bul.bloomPixel,
  range: c.bloomRange,
});
*/
const bloom = extend(PowerTurret, "bloom", {
  shootSound: Sounds.bigshot, // Now's your chance to be a [[BIG SHOT]]
  shootType: bul.bloomPixel,
  shootEffect: ef.smallShoot,
  smokeEffect: Fx.none,
  range: c.bloomRange,
});
