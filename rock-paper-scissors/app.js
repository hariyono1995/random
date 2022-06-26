const pilihanKomputer = document.getElementById('computer-choice');
const pilihanUser = document.getElementById('user-choice');
const tampilkanHasil = document.getElementById('result');

const kemungkinanPilihan = document.querySelectorAll('button');

let pilihanKu;
let hasil;
let pilihanKomp;
let jenisPilihan = [
    'batu', 'kertas', 'gunting'
]

kemungkinanPilihan.forEach(pilih => {
    pilih.addEventListener('click', (e) => {
        pilihanKu = e.target.id
        pilihanUser.innerHTML = pilihanKu;
        dapatkanPilihanKomputer()
        dapatkanHasil()
    })
})


function dapatkanPilihanKomputer () {
     pilihanKomp = jenisPilihan[Math.floor(Math.random() * jenisPilihan.length)]
    pilihanKomputer.innerHTML = pilihanKomp;
}

function dapatkanHasil() {
    if(pilihanKomp === pilihanKu) {
        hasil = 'hasilnya bedu'
    }

    if (pilihanKomp === 'batu' && pilihanKu === "kertas") {
        hasil = 'Kamu menang!'
      }
      if (pilihanKomp === 'batu' && pilihanKu === "gunting") {
        hasil = 'kamu kalah!'
      }
      if (pilihanKomp === 'kertas' && pilihanKu === "gunting") {
        hasil = 'Kamu menang!'
      }
      if (pilihanKomp === 'kertas' && pilihanKu === "batu") {
        hasil = 'kamu kalah!'
      }
      if (pilihanKomp === 'gunting' && pilihanKu === "batu") {
        hasil = 'Kamu menang!'
      }
      if (pilihanKomp === 'gunting' && pilihanKu === "kertas") {
        hasil = 'kamu kalah!'
      }

      setTimeout(() => {
          tampilkanHasil.innerHTML = hasil;

      }, 300)
    }