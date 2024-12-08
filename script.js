function orderSeblak() {
    const phoneNumber = '6282322112781';
    const message = encodeURIComponent('Halo, saya ingin memesan seblak. Bisa bantu?');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}
