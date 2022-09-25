const pal = require("palette");

const smallShoot = new Effect(50, e => {
	Draw.color(pal.brownLight, pal.brownDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 2, 2);
	}});
	
	Angles.randLenVectors(e.id, 5, e.finpow() * 20.0, e.rotation, 30.0, hl);
});
