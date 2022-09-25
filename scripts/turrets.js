const ef = require("effects");
const bul = require("bullets");
const c = require("consts");


const needle = extend(ItemTurret, "needle", {
  shootEffect: ef.smallFireShoot,
  smokeEffect: Fx.none,
  range: c.needleRange,
});
needle.ammo(
  Items.copper, bul.needleCopper,
  Items.lead, bul.needleLead
)
exports.needle = needle;

const bloom = extend(PowerTurret, "bloom", {
  shootType: bul.bloomPixel,
  shootEffect: ef.smallShoot,
  smokeEffect: Fx.none,
  range: c.bloomRange,
});
exports.bloom = bloom;

const revamp = extend(PowerTurret, "revamp", {
  shootType: bul.revampPixel,
  shootEffect: ef.smallHealShoot,
  smokeEffect: Fx.none,
  range: c.revampRange,
});
exports.revamp = revamp;
