class Picture {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

class PictureFactory {
  pictures = [];

  createPicture(name, url) {
    const picture = this.getPicture(name);
    if (picture) return picture;
    const pic = new Picture(name, url);
    this.pictures.push(pic);
    return pic;
  }

  getPicture(name) {
    return this.pictures.find((p) => p.name === name);
  }
}

// Test

const pictureFactory = new PictureFactory();

const potatoPicture = pictureFactory.createPicture(
  'potato',
  'http//example.com/potato.jpg'
);
const catPicture = pictureFactory.createPicture(
  'cat',
  'http//example.com/cat.jpg'
);

const potatoPicture2 = pictureFactory.createPicture(
  'potato',
  'A different url here'
);

console.log(potatoPicture === potatoPicture2);
console.log(potatoPicture.url);
