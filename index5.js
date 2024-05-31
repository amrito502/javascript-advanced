// Optional Chaining Operator In Javascript error fixing

const company = {
  companyName: "Code ABC",
  employee: 9,
  address: {
      street: "702, new chadgaon",
      location: "chattogram, Bangladesh"
  },
  playList: ["Datastructure and Algo", "Advanced Javascript"]
};







// function findName(object) {
//   if (object && object.address && object.address.street) {
//     console.log(object.address.street);
//   }
// }

function findName(object) {
    //   console.log(object?.address?.street);
    // console.log(object.playList)
    console.log(object?.playList?.[0])
  }

findName(company);
