// * ------------------------------------------------Bagian script buku----------------------------------------------------------------
// ? ----------------------------------------------- delay membalik lembaran buku ------------------------------------------------------
document.getElementById("book").addEventListener("click", function (e) {
   e = this;
   e.style.pointerEvents = "none";
   setTimeout(function () {
      e.style.pointerEvents = "";
   }, 0);
});

// ? halaman
const closed = document.querySelector(".book-closed");
const button = document.querySelector(".button-ubah");
const text = [
   "I Love You",
   "ehh, ehh, ehhhhhhh",
   "ga deng becanda",
   "ngggaaaaa",
   "gw serius put hehe",
   "liat aja deh kedepannya",
   "makasih yaa",
   "gw jujur",
   "yang kata pertama tadi",
   "itu jujur hehe",
   "udah gitu aja",
   "maacii udah di baca",
   "mainnya hebat",
   "(emot ngakak)",
   "gw tebak lu baca ini ngakak",
   "tapi gapapa deh",
   "drpd nasi jadi bubur",
   "hehe",
   "maaciii",
   "tencuuuuu",
   "emmmahhh",
   "hahahaha",
];

// ?----------------------------------------------------- membuat event pesan untuk user -------------------------------------------
let i = 0;
button.addEventListener("click", () => {
   closed.innerHTML = text[i];
   i++;
   if (i >= 22) {
      closed.innerHTML = "udah abis put";
   }
});

// *----------------------------------------------------- bagian gallery ml & foto ---------------------------------------------------------
let galleryImageMl = document.querySelector(".gallery-ml");
let galleryImageFoto = document.querySelector(".gallery-foto");

// ?--------------------------------------------------menampilkan output gallery----------------------------------------------------
let j = 1;
let m = 1;
const outputImageML = () => {
   galleryImageMl.innerHTML = `<img src="img/img-ml/${j}.jpg" alt="album-ml" class="format-image image-ml">`;
};
const outputImageFoto = () => {
   galleryImageFoto.innerHTML = `<img src="img/img-asli/${m}.jpg" alt="album-ml" class="format-image image-foto">`;
};
outputImageML();
outputImageFoto();

// ?-------------------------------------------------- tombol navigasi gallery ----------------------------------------------------------

const prevML = () => {
   if (j <= 1) {
      j = 137;
   } else {
      j--;
   }
   console.log(j);
   outputImageML();
};

const nextML = () => {
   if (j >= 137) {
      j = 1;
   } else {
      j++;
   }
   console.log(j);
   outputImageML();
};

const prevFoto = () => {
   if (m <= 1) {
      m = 6;
   } else {
      m--;
   }
   console.log(m);
   outputImageFoto();
};

const nextFoto = () => {
   if (m >= 6) {
      m = 1;
   } else {
      m++;
   }
   console.log(m);
   outputImageFoto();
};
