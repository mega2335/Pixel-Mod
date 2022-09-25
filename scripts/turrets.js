const ef = require("effects");
const bul = require("bullets");
const c = require("consts");

const bloom = extend(PowerTurret, "bloom", {
  shootType: bul.bloomPixel,
  shootEffect: ef.smallShoot,
  smokeEffect: Fx.none,
  range: c.bloomRange,
});
exports.bloom = bloom;

const revamp = extend(PowerTurret, "revamp", {
  shootType: bul.revampPixel,
  shootEffect: ef.smallShoot,
  smokeEffect: Fx.none,
  range: c.revampRange,
});
exports.revamp = revamp;
