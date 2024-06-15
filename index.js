// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) return reject('I could not find the file');
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) return reject('I could not write to the file');
//       resolve('success');
//     });
//   });
// };
// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed then: ${data}`);
//     // const res = await superagent.get(
//     //   `https://dog.ceo/api/breed/${data}/images/random`
//     // );
//     // console.log(res.body.message);
//     const res1Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res2Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res3Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
//     const imgs = all.map((el) => el.body.message);
//     console.log(imgs);

//     await writeFilePro('dog-img.txt', imgs.join('\n'));
//     console.log('Random dog image save to file!');
//   } catch (err) {
//     console.log(err);
//   }
//   return '2: ready';
// };

// (async () => {
//   try {
//     console.log('1: Will get the dog pics!');
//     const x = await getDogPic();
//     console.log(x);
//     console.log('3:"Done getting dog pics');
//   } catch (err) {
//     console.log(err);
//   }
// })();

// // console.log('1: Will get dog pic');
// // getDogPic()
// //   .then((x) => {
// //     console.log(x);
// //     console.log('3: Done getting dog pics');
// //   })
// //   .catch(() => {
// //     console.log('error ');
// //   });

// // readFilePro(`${__dirname}/dog.txt`)
// //   .then((data) => {
// //     console.log(`Breed then: ${data}`);
// //     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
// //   })
// //   .then((res) => {
// //     console.log(res.body.message);
// //     return writeFilePro('dog-img.txt', res.body.message);
// //   })
// //   .then(() => {
// //     console.log('Random dog image save to file!');
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // const readFilePro = (file) => {
// //   return new Promise((resolve, reject) => {
// //     fs.readFile(file, (err, data) => {
// //       if (err) reject('I could not find the file');
// //       resolve(data);
// //     });
// //   });
// // };
// // readFilePro(`${__dirname}/dog.txt`)
// //   .then((data) => {
// //     console.log(`Breed then: ${data}`);
// //   })
// //   .catch((err) => reject);
// // fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
// //   console.log(`Breed: ${data}`);
// // });

const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 🥲');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file 🥲');
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};
getDogPic();

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image saved to file!');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {});
