const pal = require("palette");
const c = require("consts");

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

const pyroclastTrail = new Effect(7, e =>{
	Draw.color(pal.orangeLight, pal.brownDark, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 2, 2);
	}});
	
	Angles.randLenVectors(e.id, 17, e.finpow() * -10.0, e.rotation, 30, hl);
});
exports.pyroclastTrail = pyroclastTrail;

const pyroclastHit = new Effect(40, e => {
	Draw.color(pal.orangeLight, Pal.redLight, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 1.5, 1.5);
	}});
	
	Angles.randLenVectors(e.id, 17, e.finpow() * 10.0, e.rotation, 360.0, hl);
	
	Draw.color(Pal.darkMetal, Pal.darkestMetal, e.fin());
	const hr = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 3, 3);
	}});
	
	Angles.randLenVectors(e.id, 12, e.finpow() * 8.3, e.rotation, 360.0, hr);
});
exports.pyroclastHit = pyroclastHit;

const energyChargeBegin = new Effect(c.energyChargeTime, e => {
	Draw.color(pal.redLight);
	const r = [9, 10, 11, 12];

        e.scaled(60, ee => r[0] *= ee.fin());
        e.scaled(40, ee => r[1] *= ee.fin());
        e.scaled(40, ee => r[2] *= ee.fin());
        e.scaled(60, ee => r[3] *= ee.fin());

        Lines.arc(e.x, e.y, r[0], 0.6, Time.time*8-60);
        Lines.arc(e.x, e.y, r[1], 0.6, Time.time*5);
        Lines.arc(e.x, e.y, r[2], 0.4, Time.time*-6+121);
        Lines.arc(e.x, e.y, r[3], 0.4, Time.time*-4+91);
});
energyChargeBegin.followParent = true;
energyChargeBegin.rotWithParent = true;

const energyCharge = new Effect(c.energyChargeTime + 30, e => {
	const radius = 10 * c.block;
        const p = [0, 0];

        Angles.randLenVectors(e.id, 7, radius/2 + Interp.pow3Out.apply(1 - e.fout(0.5)) * radius * 1.25, (x, y) => {
            e.scaled(60, ee => {
		Draw.color(pal.redLight);
                ee.scaled(30, e1 =>{
                    p[0] = Mathf.lerp(x, 0, e1.fin(Interp.pow2));
                    p[1] = Mathf.lerp(y, 0, e1.fin(Interp.pow2));
                });

                Lines.stroke(ee.fout(0.5));
                Lines.line(e.x+x, e.y+y, e.x+p[0], e.y+p[1]);
            });
        });
});
energyCharge.followParent = true;
energyCharge.rotWithParent = true;
exports.energyCharge = new MultiEffect(energyChargeBegin, energyCharge);

const energyTrail = new Effect(20, e =>{
	Draw.color(pal.redLight, pal.redDark, e.fin());
	Fill.rect(e.x, e.y, 2, 2);
});
exports.energyTrail = energyTrail;

const energyHit = new Effect(c.second, e =>{
	Draw.color(pal.redLight, pal.redDark, e.fin());
    	Lines.stroke(e.fout() * 2);
	Fill.rect(e.x, e.y, 2, 2);
	Lines.circle(e.x, e.y, 4 + 20);
});
exports.energyHit = energyHit;

const strikeMissileShoot = new Effect(11, e =>{
		Draw.color(pal.orangeLight, pal.brownDark, e.fin());
		const hl = new Floatc2({get: function(x, y){
			Fill.rect(e.x + x, e.y + y, 1.2, 1.2);
		}});
		
		Angles.randLenVectors(e.id, 8, e.finpow() * 12.0, -90, 38, hl);
});
exports.strikeMissileShoot = strikeMissileShoot;

const strikeMissileHit = new Effect(40, e => {
	Draw.color(pal.orangeLight, Pal.redLight, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 1.5, 1.5);
	}});
	
	Angles.randLenVectors(e.id, 20, e.finpow() * 24.0, e.rotation, 360.0, hl);
	
	Draw.color(Pal.darkMetal, Pal.darkestMetal, e.fin());
	const hr = new Floatc2({get: function(x, y){
		Fill.rect(e.x + x, e.y + y, 3, 3);
	}});
	
	Angles.randLenVectors(e.id, 12, e.finpow() * 17.0, e.rotation, 360.0, hr);
	
	Lines.circle(e.x, e.y, 4 + 32 * e.finpow());
});
exports.strikeMissileHit = strikeMissileHit;

const blastHit = new Effect(40, e => {
	Draw.color(Color.white, pal.redLight, e.fin());
	const hl = new Floatc2({get: function(x, y){
		const ang = Mathf.angle(x, y);
		Drawf.tri(e.x, e.y, 3 * e.fout(), 12.0 * e.finpow(), ang)
	}});
	
	Angles.randLenVectors(e.id, 20, e.finpow() * 13.0, e.rotation, 60.0, hl);
	
	Draw.color(pal.redLight, Pal.redLight, e.fin());
	const hr = new Floatc2({get: function(x, y){
		const ang = Mathf.angle(x, y);
		Lines.lineAngle(e.x + x, e.y + y, ang, 3.0 * e.fout())
	}});
	
	Angles.randLenVectors(e.id, 20, e.finpow() * 24.0, e.rotation, 360.0, hr);
	
	Lines.circle(e.x, e.y, 4 + 20 * e.finpow());
});
exports.blastHit = blastHit;

const blastShoot = new Effect(40, e => {
	Draw.color(Color.white, pal.redLight, e.fin());
	const hl = new Floatc2({get: function(x, y){
		const ang = Mathf.angle(x, y);
		Lines.lineAngle(e.x + x, e.y + y, ang, 3.0 * e.fout())
	}});
	
	Angles.randLenVectors(e.id, 20, e.finpow() * 8.0, e.rotation, 45.0, hl);
});
exports.blastShoot = blastShoot;

const speedShoot = new Effect(17, e => {
	Draw.color(Color.white, pal.redLight, e.fin());
	const hl = new Floatc2({get: function(x, y){
		const ang = Mathf.angle(x, y);
		Lines.lineAngle(e.x + x, e.y + y, ang, 3.0 * e.fout())
	}});
	
	Angles.randLenVectors(e.id, 30, e.finpow() * 9.5, e.rotation, 25.0, hl);
	
	Draw.color(pal.redLight, pal.redDark, e.fin());
	const hr = new Floatc2({get: function(x, y){
		const ang = Mathf.angle(x, y);
		Lines.lineAngle(e.x + x, e.y + y, ang, 3.0 * e.fout())
	}});
	
	Angles.randLenVectors(e.id, 15, e.finpow() * 3.5, e.rotation, 90.0, hr);
});
exports.speedShoot = speedShoot;

const speedHit = new Effect(30, e => {
	Draw.color(Color.white, pal.redLight, e.fin());
	const hl = new Floatc2({get: function(x, y){
		const ang = Mathf.angle(x, y);
		Lines.lineAngle(e.x + x, e.y + y, ang, 3.0 * e.fout())
	}});
	
	Angles.randLenVectors(e.id, 25, 4 + e.finpow() * 20.0, e.rotation, 360.0, hl);
});
exports.speedHit = speedHit;

const speedTrail = new Effect(30, e=>{
	Draw.color(pal.redLight, pal.redDark, e.fin())
	Lines.stroke(1 * e.fout())
    	Lines.circle(e.x, e.y, 2 * e.fout())
});
exports.speedTrail = speedTrail;
