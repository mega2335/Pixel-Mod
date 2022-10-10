const DrawPixelParticles = require("libs/drawers/DrawPixelParticles");
const pal = require("palette");
const c = require("consts");
const ef = require("effects");

const pixellitePress = extend(GenericCrafter, "pixellite-press", {
  drawer: new DrawMulti(new DrawRegion("bottom"), DrawPixelParticles.newDrawer({color: pal.lightOrange, particles: 20, particleLife: 50, particleRad: 4, particleSize: 2, reverse: true, interp: new PowIn(1.5), alpha: 0.8, blending: Blending.normal}), new DrawRegion("top")),
  craftEffect: Fx.none,
});
