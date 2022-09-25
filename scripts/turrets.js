const ef = require("effects");
const bul = require("bullets");
const c = require("consts");

const bloom = extend(PowerTurret, "bloom", {
  shootEffect: ef.smallShoot,
  smokeEffect: Fx.none,
  shootType: bul.bloomPixel,
  range: c.bloomRange,
});
