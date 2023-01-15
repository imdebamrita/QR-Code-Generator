const container = document.querySelector("#container");
const url_form = document.querySelector("#url_form");
const url_input = document.querySelector("#url");
const qr_img = document.querySelector("#qr-code");
const qr_download = document.querySelector("#download-btn");


url_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = url_input.value;
        if (!url){
            alert("Please fill the url !!!")
            return;
        }

    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${url}`;
    container.classList.add("active");
    qr_download.href = qr_img.src;
});
