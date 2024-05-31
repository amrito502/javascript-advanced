const platform = [
    {id: 1, name: "code abc1", havePlaylist: 12},
    {id: 2, name: "code abc2", havePlaylist: 4},
    {id: 3, name: "code abc3", havePlaylist: 33},
    {id: 4, name: "code abc4", havePlaylist: 2},
]

// for

// for(let i = 0; i < platform.length; i++){
//     console.log(platform[i]);
// }

// forEach

// platform.forEach(function(item, index, array) {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// })

// map

// const platformName = platform.map(function(item){
//     return item.name
// })

// console.log(platformName);

// const multipleHavePlayList = platform.map(item => item.havePlaylist * 2)

// console.log(multipleHavePlayList);

// function hello(callback){
//     return callback()
// }

// function anything(){
//     return "i am a callback function from anything"
// }

// function anotherone(){
//     return "i am a callback function from anotherone"
// }

// console.log(hello(anotherone));


// filter

// const over10Playlist = platform.filter(function(item){
//     return item.havePlaylist > 10
// })

// const over10Playlist = platform.filter(item => item.havePlaylist > 10)

// console.log(over10Playlist);


// reduce
// let totalPlayList = 0

// for(let i = 0; i < platform.length; i++){
//     console.log(platform[i]);
//     totalPlayList += platform[i].havePlaylist
// }

// console.log(totalPlayList);

const totalPlayList = platform.reduce((total, currentValue) => {
    return total + currentValue.havePlaylist
},0)

console.log(totalPlayList);


// end playlist of code ABC
// https://www.youtube.com/playlist?list=PL2ozzDVxiDaclzuYm212uT76Z_JR_z6aJ
// end of videos- 11
// next oop js