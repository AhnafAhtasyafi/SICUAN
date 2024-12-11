const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');



menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block"
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})

function setActive(element) {
    // Menghapus kelas 'active' dari semua link dalam sidebar
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Menambahkan kelas 'active' pada link yang diklik
    element.classList.add('active');
}

// Tunggu sampai DOM siap
// document.addEventListener("DOMContentLoaded", function () {
//     // Ambil tombol logout berdasarkan ID
//     const logoutButton = document.getElementById("logout-button");

//     // Tambahkan event listener untuk klik tombol
//     logoutButton.addEventListener("click", function (event) {
//         event.preventDefault(); // Mencegah default link action

//         // Tambahkan dialog dengan z-index tinggi menggunakan Bootbox
//         bootbox.confirm({
//             size: 'small',
//             message: 'Apakah Anda yakin ingin logout?',
//             callback: function (result) {
//                 if (result) {
//                     // Jika user memilih "OK", arahkan ke halaman index.html
//                     window.location.href = 'index.html';
//                 }
//                 // Jika user memilih "Cancel", tidak melakukan apa-apa
//             }
//         });

//         // Pastikan modal tidak tertutupi
//         const modalElement = document.querySelector('.bootbox.modal');
//         const backdropElement = document.querySelector('.bootbox.modal-backdrop');

//         if (modalElement) {
//             modalElement.style.zIndex = '1050'; // Pastikan modal tetap di atas
//         }
//         if (backdropElement) {
//             backdropElement.style.zIndex = '1049'; // Backdrop tetap di bawah modal
//         }
//     });
// });



