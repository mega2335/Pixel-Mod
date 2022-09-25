const pal = require("palette");

const smallShoot = new Effect(50, e => {
	Draw.color(pal.brownLight, pal.brownDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 2, 2);
	}});
	
	Angles.randLenVectors(e.id, 8, e.finpow() * 20.0, e.rotation, 30.0, hl);
});
exports.smallShoot = smallShoot;

const bloomTrail = new Effect(20, e =>{
	Draw.color(pal.brownLight, pal.brownDark, e.fin());
	Fill.rect(e.x, e.y, 2, 2);
});
exports.bloomTrail = bloomTrail;

const revampTrail = new Effect(20, e =>{
	Draw.color(pal.greenLight, pal.greenDark, e.fin());
	Fill.rect(e.x, e.y, 3.5, 3.5);
});
exports.revampTrail = revampTrail;

const revampHit = new Effect(45, e =>{
	Draw.color(pal.greenLight, pal.greenDark, e.fin());
    	Lines.stroke(e.fout() * 2);
    	Lines.square(e.x, e.y, 4 + e.finpow() * 20, Time.time * 2);
	Lines.square(e.x, e.y, 4 + e.finpow() * 20, Time.time * -2);
	Lines.circle(e.x, e.y, 4 + 20);
	let spikes = 6;
	let angle = 0;
	for(let i=0; i<spikes; i++){
		angle = (360 / spikes) * i;
		Drawf.tri(e.x + Angles.trnsx(angle, 24), e.y + Angles.trnsy(angle, 24), 4, 6 * e.fout(), angle);
	};
});
exports.revampHit = revampHit;

const smallHealShoot = new Effect(50, e => {
	Draw.color(pal.greenLight, pal.greenDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 2, 2);
	}});
	
	Angles.randLenVectors(e.id, 8, e.finpow() * 20.0, e.rotation, 30.0, hl);
	
	Lines.stroke(e.fout() * 1.2);
	Lines.square(e.x, e.y, e.finpow() * 8, Time.time * 2);
	Lines.square(e.x, e.y, e.finpow() * 8, Time.time * -2);
	Lines.circle(e.x, e.y, 8);
});
exports.smallHealShoot = smallHealShoot;

const smallFireShoot = new Effect(20, e => {
	Draw.color(Pal.lighterOrange, Pal.lightOrange, e.fin());
	Lines.line(e.x, e.y, e.x + Angles.trnsx(e.rotation, 6 * e.fout()), e.y + Angles.trnsy(e.rotation, 6 * e.fout()))
	Lines.lineAngleCenter(e.x, e.y, e.rotation - 90, 3 * (e.fout() / 2))
});
exports.smallFireShoot = smallFireShoot;

const smallHit = new Effect(40, e => {
	Draw.color(pal.brownLight, pal.brownDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 3, 3);
	}});
	
	Angles.randLenVectors(e.id, 18, e.finpow() * 25.0, e.rotation, 360.0, hl);
	
	Lines.square(e.x, e.y, e.finpow() * 6);
});
exports.smallHit = smallHit;
