const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value != "") {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        qrText.style.border = "1px solid #494eea";
    }
    else {
        imgBox.classList.remove("show-img");
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 500);
        qrText.style.border = "1px solid #c9572d";
    }

}