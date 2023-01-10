import { ObjectId } from "mongodb";

export const userMock = {
  _id: new ObjectId("63bdd1a05f2e722b6af53a32"),
  username: "admin",
  email: "admin@email.com",
  password: "$2a$10$u/LEockk7b0e6JbRpbxe8.QJTh27bWs2ZVQGrveCOFK4wLJzb9wS.",
  __v: 0,
};

export const passwordHashed =
  "$2a$10$u/LEockk7b0e6JbRpbxe8.QJTh27bWs2ZVQGrveCOFK4wLJzb9wS.";

export const token = "aksdnkasjn23endlnd23oielasmdlaskdnlk332432";
