exports.seed = function (knex) {
  return knex("rooms").del()
    .then(function () {
      return knex("rooms").insert([
        {
          roomType: "Standard Room",
          description: "A comfortable and practical room with essential amenities, including a cozy bed, a private bathroom, and basic furnishings. Perfect for travelers seeking a simple and budget-friendly stay.",
          imageURL: "https://firebasestorage.googleapis.com/v0/b/computer-shop-management-a2cdd.appspot.com/o/hotel-img%2Fstandard-room.jpg?alt=media&token=c3a26d9b-1347-4a84-96b6-2aa4817b9fcd",
          price: 500000,
          amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom"]
        },
        {
          roomType: "Family Room",
          description: "A spacious and cozy room designed for families, featuring multiple beds, a seating area, and modern amenities to ensure comfort for every member. Perfect for bonding moments and quality time together",
          imageURL: "https://firebasestorage.googleapis.com/v0/b/computer-shop-management-a2cdd.appspot.com/o/hotel-img%2Ffamily-room.jpg?alt=media&token=886693ff-5e86-41b9-a9da-00cfd92945c9",
          price: 750000,
          amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Mini Fridge", "Room Service"]
        },
        {
          roomType: "Deluxe Room",
          description: "An elegant and well-appointed room offering upgraded furnishings, luxurious linens, and premium amenities. Ideal for guests seeking extra comfort and sophistication during their stay.",
          imageURL: "https://firebasestorage.googleapis.com/v0/b/computer-shop-management-a2cdd.appspot.com/o/hotel-img%2Fdeluxe-room.jpg?alt=media&token=db7364a6-f4ad-48b9-ada7-352725aa7c91",
          price: 1000000,
          amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Mini Bar", "Room Service"]
        },
        {
          roomType: "Dormitory Room",
          description: "A shared accommodation designed for budget-conscious travelers, equipped with bunk beds, secure lockers, and communal facilities. Perfect for group travelers or backpackers.",
          imageURL: "https://firebasestorage.googleapis.com/v0/b/computer-shop-management-a2cdd.appspot.com/o/hotel-img%2FDormitory-Room.jpg?alt=media&token=e0210d3f-de2d-40df-bf45-28ac496fe862",
          price: 1250000,
          amenities: ["Free Wi-Fi", "Air Conditioning", "Lockers", "Shared Bathroom"]
        },
        {
          roomType: "Presidential Suite Room",
          description: "The pinnacle of luxury and grandeur, featuring a spacious layout, a private living room, a dining area, and exclusive services. Designed for those who seek an unforgettable and opulent experience.",
          imageURL: "https://firebasestorage.googleapis.com/v0/b/computer-shop-management-a2cdd.appspot.com/o/hotel-img%2FPresidential-Suite-Room.jpg?alt=media&token=0a8d40a7-19f5-4894-943f-17fa7c3b70be",
          price: 2500000,
          amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Personal Butler", "Jacuzzi", "Mini Bar", "Private Pool"]
        }
      ]);
    });
};
