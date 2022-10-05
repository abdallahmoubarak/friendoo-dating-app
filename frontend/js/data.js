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

if (
  !localStorage.getItem("friendooJWT") ||
  !localStorage.getItem("friendooUser")
)
  window.location.replace("/sign.html");
