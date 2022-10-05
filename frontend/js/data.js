const users = [
  {
    id: 1,
    name: "Suzi Dao",
    img: "./assets/mock-img-1.png",
    status: "online",
    interested_in: "Male",
    age: 20,
    bio: "This is me Suzi, I am looking for a partner in my life",
  },
  {
    id: 2,
    name: "Nancy Smith",
    img: "./assets/mock-img-2.png",
    status: "offline",
    interested_in: "Male",
    age: 25,
    favorite: true,
    bio: "My name is Nancy, I love hiking if you which to be my partner",
  },
];
const defaultMsgs = [
  {
    content: "hello world",
    sender_id: "17",
    reciever_id: "2",
    created_at: Date.now(),
  },

  {
    content: "hello Universe ",
    sender_id: "2",
    reciever_id: "17",
    created_at: Date.now(),
  },

  {
    content: "how are you??",
    sender_id: "2",
    reciever_id: "17",
    created_at: Date.now(),
  },
];
