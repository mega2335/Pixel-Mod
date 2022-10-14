exports.newDrawer = function(obj){
  obj = Object.assign(obj, obj);
  const color = obj.color;
  const particles = obj.particles
  const particleLife = obj.particleLife, particleRad = obj.particleRad, particleSize = obj.particleSize;
  const reverse = obj.reverse;
  const interp = obj.interp;
  const alpha = obj.alpha;
  const blending = obj.blending;
  
  const newObj = Object.assign({
    draw(build){
      if(build.warmup() > 0){
            const a = alpha * build.warmup();
            Draw.blend(blending);
            Draw.color(color);
            const base = (Time.time / particleLife);
            rand.setSeed(build.id);
            for(let i = 0; i < particles; i++){
                const fin = (rand.random(2) + base) % 1;
                if(reverse) fin = 1 - fin;
                const fout = 1 - fin;
                const len = particleRad * interp.apply(fout);
                Draw.alpha(a);
                Fill.rect(
                    build.x + Angles.trnsx(angle, len),
                    build.y + Angles.trnsy(angle, len),
                    particleSize
                );
            }
            Draw.blend();
            Draw.reset();
        }
    }
    },
  }, obj);
  
  return extend(DrawBlock, newObj);
};
