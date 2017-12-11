function UnClustered(rncData, hrs, scene) {
    var pntGeo = new THREE.Geometry();
    for (let h = 0; h < hrs; h++) {
        let unc = rncData[h].unC;
        if (rncData[h].unC.lat.length > 0) {
            for (let i = 0; i < rncData[h].unC.lat.length; i++) {
                let p = new THREE.Vector3();
                p.x = 100 * ((100 * (unc.lat[i])) - 4250);
                p.z = 100 * ((unc.lon[i] * 100) - 150);
                p.y = h * 100;
                pntGeo.vertices.push(p);
            }
        }
    }
    var pntMaterial = new THREE.PointsMaterial({
        color: 0xffffff
    });
    var geometry = new THREE.Points(pntGeo, pntMaterial)
    scene.add(geometry);
}


function Clustered(rncData, hrs, scene) {
    var particleGroup, particleAttributes;
    var particleTexture = new THREE.TextureLoader().load("img/lf2.png");
    particleGroup = new THREE.Object3D();
    particleAttributes = {
        startSize: [],
        startPosition: [],
        randomness: []
    };
    for (let h = 0; h < hrs; h++) {
        let c = rncData[h].C;
        if (rncData[h].C.lat.length > 0) {
            for (let i = 0; i < rncData[h].C.lat.length; i++) {
                //
                let p = new THREE.Vector3();
                p.x = 100 * ((100 * (c.lat[i])) - 4250);
                p.z = 100 * ((c.lon[i] * 100) - 150);
                p.y = h * 100;
                //
                var spriteMaterial = new THREE.SpriteMaterial({
                    map: particleTexture,
                    color: 0xffffff
                });
                //
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(5, 5, 1); // imageWidth, imageHeight
                sprite.position.set(p.x, p.y, p.z);

                sprite.material.color.setHSL(Math.random(), 0.9, 0.5);
                sprite.material.blending = THREE.AdditiveBlending; // "glowing" particles
                particleGroup.add(sprite);

                // console.log(sprite)
            }
        }
    }
    scene.add(particleGroup);
}




// function Clustered(rncData, hrs, scene) {
//     var textureLoader = new THREE.TextureLoader();
//     var textureFlare = textureLoader.load("img/lf.png");
//     var flareColor = new THREE.Color(0xffffff);
//     flareColor.setHSL(0, 0, 100 + 1);
//     for (let h = 0; h < hrs; h++) {
//         let c = rncData[h].C;
//         if (rncData[h].C.lat.length > 0) {
//             for (let i = 0; i < rncData[h].C.lat.length; i++) {
//                 let p = new THREE.Vector3();
//                 p.x = 100 * ((100 * (c.lat[i])) - 4250);
//                 p.z = 100 * ((c.lon[i] * 100) - 150);
//                 p.y = h * 100;
//                 var light = new THREE.PointLight(0xffffff, 1.5, 0);
//                 light.position.set(p.x, p.y, p.z);
//                 var lensFlare = new THREE.LensFlare(textureFlare, 10, 0.0, THREE.AdditiveBlending, flareColor);
//                 lensFlare.position.copy(light.position);
//                 scene.add(lensFlare);
//             }
//         }
//     }
// }

/////////////////// Points
// function Clustered(rncData, hrs, scene) {
//     var textureLoader = new THREE.TextureLoader();
//     var textureFlare = textureLoader.load("img/lf.png");
//     textureFlare.minFilter = THREE.LinearFilter;
//     var pntMaterial = new THREE.PointsMaterial({
//         // color: 0xFF0000,
//         map: textureFlare,
//         alphaTest: 0.5,
//         transparent: true,
//         size: 100
//     });
//     var pntGeo = new THREE.Geometry();
//     for (let h = 0; h < hrs; h++) {
//         let c = rncData[h].C;
//         if (rncData[h].C.lat.length > 0) {
//             for (let i = 0; i < rncData[h].C.lat.length; i++) {
//                 let p = new THREE.Vector3();
//                 p.x = 100 * ((100 * (c.lat[i])) - 4250);
//                 p.z = 100 * ((c.lon[i] * 100) - 150);
//                 p.y = h * 100;
//                 pntGeo.vertices.push(p);

//             }
//         }
//     }
//     var geometry = new THREE.Points(pntGeo, pntMaterial)
//     scene.add(geometry);
// }