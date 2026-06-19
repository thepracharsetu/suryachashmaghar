function sendWhatsApp(){

let name =
document.getElementById("name").value;

let mobile =
document.getElementById("mobile").value;

let message =
document.getElementById("message").value;

let text =
`Name: ${name}%0AMobile: ${mobile}%0ARequirement: ${message}`;

window.open(
`https://wa.me/919876543210?text=${text}`,
'_blank'
);

}
