const menuItems = ['Seblak Original', 'Seblak Ceker', 'Seblak Sosis', 'Seblak Tahu Tempe', 'Kerupuk', 'Telur'];
const orderList = document.getElementById('order-list');
const userForm = document.getElementById('user-form');
const whatsappLink = document.getElementById('whatsapp-link');
let order = [];

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => addToOrder(item));
    document.getElementById('menu').appendChild(li);
});

function addToOrder(item) {
    order.push(item);
    updateOrderList();
}

function updateOrderList() {
    orderList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        orderList.appendChild(li);
    });
}

document.getElementById('clear-cart').addEventListener('click', () => {
    order = [];
    updateOrderList();
});

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    if (order.length > 0) {
        const orderText = encodeURIComponent(order.join(', '));
        const userMessage = encodeURIComponent(`Nama: ${nama}, Alamat: ${alamat}, Pesanan: ${orderText}`);
        whatsappLink.href = `https://wa.me/6282322112781?text=${userMessage}`;
        alert('Pesanan Anda sudah siap untuk dikirim!');
    } else {
        alert('Harap pilih pesanan terlebih dahulu!');
    }
});
