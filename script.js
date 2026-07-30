function whatsapp(plano) {

    let numero = "5511940786729";

    let mensagem = 
    "Olá, tenho interesse neste plano:%0A%0A" 
    + plano 
    + "%0A%0AGostaria de mais informações.";

    let link = 
    "https://wa.me/" + numero + "?text=" + mensagem;


    window.open(link, "_blank");

}