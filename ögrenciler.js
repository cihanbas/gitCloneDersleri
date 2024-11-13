const ogrenciler = [
  "Dogukan",
  "Buse Sen",
  "Nergis Kobak",
  "Hasan Sivaz",
  "Ceyda Çelik",
  "Anıl Bakır",
  "Aylin Karsanbay",
  "Batın Kasapoğlu",
  "Batuhan Cakır",
  "Bekir Kahveci",
  "Berke Coruk",
  "Cemal Arda Cetinkaya",
  "Duygu Demir",
  "Emin Kabacaoglu",
  "Esin Duman",
  "Gökberk Sezen",
  "Ibrahim Caner Coskun",
  "Kadir Can Kaya",
  "Mevlüt Sakızcı",
  "Onur Hüseyin Kocak",
  "Orcun Erdemir",
  "Seda Diril Boyraz",
  "Veysel Satıcı",
  "Yusuf Can Cömertler",
];

const getRandomUsers = (users) => {
  const groups = [];
  let group = [];
  let remainingUsers = [...users]; // kisileri kopyaladik

  while (remainingUsers.length) {
    const randomIndex = Math.floor(Math.random() * remainingUsers.length);
    group.push(...remainingUsers.splice(randomIndex, 1));
    if (group.length === 3) {
      groups.push(group);
      group = [];
    }
  }
  //   liste 3'e tam bolunmuyorsa kalan kisim grupa eklenir
  if (group.length > 0) {
    groups.push(group);
  }

  return groups;
};

console.log(getRandomUsers(ogrenciler));
