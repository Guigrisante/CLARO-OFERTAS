/*=========================
  WHATSAPP
==========================*/

const telefone = "5511940786729";

function enviarPlano(plano){

    const mensagem =
`Olá! 👋

Tenho interesse no seguinte plano:

📦 ${plano}

Gostaria de mais informações e de realizar a contratação.`;

    const url =
`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || navigator.vendor || window.opera);

    if(isMobile){
        // Em dispositivos móveis, redireciona para a URL (abre no app se instalado)
        window.location.href = url;
        return;
    }

    const opened = window.open(url, "_blank");
    if(!opened){
        window.location.href = url;
    }

}


/*=========================
  ANIMAÇÃO AO ROLAR
==========================*/

const elementos = document.querySelectorAll(".card, .prime-box, .contato");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";

            entrada.target.style.transform = "translateY(0)";

        }

    });

});

elementos.forEach((elemento)=>{

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(40px)";

    elemento.style.transition = ".7s";

    observador.observe(elemento);

});


/*=========================
  BOTÃO VOLTAR AO TOPO
==========================*/

const botaoTopo = document.createElement("div");

botaoTopo.innerHTML = "↑";

botaoTopo.className = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.right = "25px";
botaoTopo.style.bottom = "110px";
botaoTopo.style.width = "55px";
botaoTopo.style.height = "55px";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#d60000";
botaoTopo.style.color = "#fff";
botaoTopo.style.display = "flex";
botaoTopo.style.justifyContent = "center";
botaoTopo.style.alignItems = "center";
botaoTopo.style.fontSize = "28px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
botaoTopo.style.transition = ".3s";
botaoTopo.style.opacity = "0";
botaoTopo.style.pointerEvents = "none";
botaoTopo.style.zIndex = "9999";


window.addEventListener("scroll",()=>{

    if(window.scrollY > 350){

        botaoTopo.style.opacity = "1";

        botaoTopo.style.pointerEvents = "auto";

    }

    else{

        botaoTopo.style.opacity = "0";

        botaoTopo.style.pointerEvents = "none";

    }

});


botaoTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
  EFEITO BOTÕES
==========================*/

const botoes = document.querySelectorAll("button");

botoes.forEach((botao)=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.25)";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.boxShadow = "none";

    });

});


/*=========================
  ANO AUTOMÁTICO
==========================*/

const rodape = document.querySelector("footer p:last-child");

if(rodape){

    rodape.innerHTML =
    `© ${new Date().getFullYear()} Todos os direitos reservados.`;

}