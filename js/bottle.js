var bottle1={bottleId : 1, bottleName : "Bisleri", bottleType: "Plastic"}
var bottle2={bottleId : 2, bottleName : "Kinley", bottleType: "Plastic"}
var bottle3={bottleId : 3, bottleName : "RailNeer", bottleType: "Plastic"}
var manufacturer=[bottle1,bottle2,bottle3]
var names=[3];
for(i=0;i<3;i++){
names[i]=manufacturer[i].bottleName;
}
for(i=0;i<3;i++){
    
    console.log(names[i].charAt(0) + names[i].charAt((names[i].length)-1));
}