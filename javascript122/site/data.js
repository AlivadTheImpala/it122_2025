let albums = [
  {
    albumTitle: "Issues",
    artist: "Korn",
    released: "November 16, 1999",
    genre: "Nu Metal",
    id: 1,
  },
  {
    albumTitle: "Horizons",
    artist: "Parkway Drive",
    released: "October 6, 2007",
    genre: "Metalcore",
    id: 2,
  },
  {
    albumTitle: "Exhibition of Prowess",
    artist: "Kublai Khan TX",
    released: "September 20, 2024",
    genre: "Beatdown Hardcore",
    id: 3,
  },
  {
    albumTitle: "Introspection",
    artist: "Luiz Bonfá",
    released: "October 1, 1972",
    genre: "Bossa Nova",
    id: 4,
  },
  {
    albumTitle: "Classical Current",
    artist: "Laurindo Almeida",
    released: "September 15, 1969",
    genre: "Jazz",
    id: 5,
  },
];

const getAll = () => {
  return albums;
};

const getItem = (id) => {
  return albums.id;
};

export { getAll };
export { getItem };
