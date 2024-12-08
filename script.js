// Mendapatkan elemen-elemen HTML yang diperlukan
const menuItems = document.querySelectorAll('.menu-item');
const orderList = document.getElementById('order-list');
const whatsappLink = document.getElementById('whatsapp-link');

// Array untuk menyimpan pesanan
let order = [];

// Menambahkan event listener untuk setiap menu item
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const menuName = item.getAttribute('data-menu');
        
        // Menambahkan item ke keranjang
        addToOrder(menuName);
    });
});

// Fungsi untuk menambahkan item ke keranjang dan memperbarui tampilan
function addToOrder(menuItem) {
    // Menambahkan menu ke array pesanan
    order.push(menuItem);

    // Menampilkan pesanan di UI
    const orderItem = document.createElement('li');
    orderItem.textContent = menuItem;
    orderList.appendChild(orderItem);

    // Memperbarui link WhatsApp
    updateWhatsappLink();
}

// Fungsi untuk memperbarui link WhatsApp dengan item yang dipilih
function updateWhatsappLink() {
    if (order.length > 0) {
        const orderText = encodeURIComponent(order.join(', ')); // Menyusun teks pesanan
        whatsappLink.href = `https://wa.me/6282322112781?text=Saya%20mau%20pesan%20seblak:%20${orderText}`;
    }
}
