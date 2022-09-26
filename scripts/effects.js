const pal = require("palette");

const smallShoot = new Effect(15, e => {
	Draw.color(Pal.lighterOrange, Pal.lightOrange, e.fin());
	Lines.line(e.x, e.y, e.x + Angles.trnsx(e.rotation, 6 * e.fout()), e.y + Angles.trnsy(e.rotation, 6 * e.fout()))
	Lines.lineAngleCenter(e.x, e.y, e.rotation - 90, 3 * (e.fout() / 2))
});
exports.smallShoot = smallShoot;

const smallSmoke = new Effect(50, e => {
	Draw.color(pal.brownLight, pal.brownDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 2, 2);
	}});
	
	Angles.randLenVectors(e.id, 8, e.finpow() * 20.0, e.rotation, 30.0, hl);
});
exports.smallSmoke = smallSmoke;

const bigShoot = new Effect(20, e => {
	Draw.color(Pal.lighterOrange, Pal.lightOrange, e.fin());
	Lines.line(e.x, e.y, e.x + Angles.trnsx(e.rotation, 8.5 * e.fout()), e.y + Angles.trnsy(e.rotation, 6 * e.fout()))
	Lines.lineAngleCenter(e.x, e.y, e.rotation - 90, 4.5 * (e.fout() / 2))
});
exports.bigShoot = bigShoot;

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
		Drawf.tri(e.x + Angles.trnsx(angle, 23.6), e.y + Angles.trnsy(angle, 23.6), 4, 6 * e.fout(), angle);
	};
});
exports.revampHit = revampHit;

const smallHealShoot = new Effect(30, e => {
	Draw.color(pal.greenLight, pal.greenDark, e.fin());
	
	Lines.stroke(e.fout() * 1.2);
	Lines.square(e.x, e.y, e.finpow() * 8, Time.time * 2);
	Lines.square(e.x, e.y, e.finpow() * 8, Time.time * -2);
	Lines.circle(e.x, e.y, 8);
});
exports.smallHealShoot = smallHealShoot;

const smallHealSmoke = new Effect(50, e=> {
	Draw.color(pal.greenLight, pal.greenDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 2, 2);
	}});
	
	Angles.randLenVectors(e.id, 8, e.finpow() * 20.0, e.rotation, 30.0, hl);
});
exports.smallHealSmoke = smallHealSmoke;

const smallHit = new Effect(40, e => {
	Lines.stroke(e.fout() * 1.2);
	Draw.color(pal.brownLight, pal.brownDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 3, 3);
	}});
	
	Angles.randLenVectors(e.id, 5, e.finpow() * 7.0, e.rotation, 360.0, hl);
	
	Lines.square(e.x, e.y, 2 + e.finpow() * 8);
});
exports.smallHit = smallHit;

const quarkHit = new Effect(45, e =>{
	Draw.color(Pal.surge, Pal.redLight, e.fin());
    	Lines.stroke(e.fout() * 2);
    	Lines.square(e.x, e.y, 4 + e.finpow() * 10, Time.time * 2.6);
	Lines.square(e.x, e.y, 4 + e.finpow() * 10, Time.time * -2.6);
	Lines.circle(e.x, e.y, 4 + 10);
	let spikes = 4;
	let angle = 0;
	for(let i=0; i<spikes; i++){
		angle = ((360 / spikes) * i) + 45;
		Drawf.tri(e.x + Angles.trnsx(angle, 13.6), e.y + Angles.trnsy(angle, 13.6), 4, 6 * e.fout(), angle);
	};
});
exports.quarkHit = quarkHit;

const knifeHit = new Effect(20, e =>{
	Draw.color(pal.orangeLight, Pal.redLight, e.fin());
    	Lines.stroke(e.fout() * 2);
	Lines.square(e.x, e.y, 4 + e.fin() * 20, Time.time * 2);
	Lines.square(e.x, e.y, 4 + e.fin() * 20, Time.time * -2);
	Lines.circle(e.x, e.y, 4 + 20);
	for(let i=0; i<4; i++){
		Drawf.tri(e.x, e.y, 3, 70 * e.fout(), (90 * i) + Time.time * 2)
		Drawf.tri(e.x, e.y, 3, 70 * e.fout(), (90 * i) + Time.time * -2)
	};
});
exports.knifeHit = knifeHit;

const knifeTrail = new Effect(20, e =>{
	Draw.color(pal.orangeLight, Pal.redLight, e.fin());
	Fill.rect(e.x, e.y, 4, 4);
});
exports.knifeTrail = knifeTrail;
