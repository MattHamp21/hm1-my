const { user1, user2, user3, user4, user5, user6 } = require("../src/data");
const { userInfo,getNames,manyPost } = require("../src/dataDemo");





// let user1 = {
//     id: 1,
//     dateJoined: new Date(2010, 3, 21),
//     name: "Forged Fire",
//     friends: [],
//     posts: [
//       {
//         text: "it will Keal",
//         likes: 321,
//         comments: ["Sweet", "Yeah"],
//       },
//       {
//         text: "it will Cut",
//         likes: 121,
//         comments: ["Noice", "COol"],
//       },
//     ],
//   };

it("test user1", () => {
  expect(user1.id).toBe(1);
  expect(user1["id"]).toBe(1);
  expect(user1.name).toBe("Forged Fire");
  // length of posts
  expect(user1.posts.length).toBe(2);
  expect(user1.posts[0].text).toBe("it will Keal");
  expect(user1.posts[1].likes).toBe(121);
  expect(user1.posts[1].comments).toEqual(["Noice", "COol"]);
  expect(user1.posts[1].comments[0]).toEqual("Noice");
});

it("tests userInfo", () => {
  let u1Info = userInfo(user1);
  expect(u1Info).toEqual({ name: "Forged Fire", postCount: 2 });
});

it('gets users names',()=>{
  let users = [user1,user2,user3]
  expect(getNames(users)).toEqual([user1.name, user2.name, user3.name])
  expect(users).toEqual(cloneUsers)
})
