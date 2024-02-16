function getCookie(name) {
  const cookieValue = document.cookie.match(
    "(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}

let visitas = parseInt(getCookie("contadorVisitas")) || 0;
visitas++;
document.cookie = `contadorVisitas=${visitas};`;

if (visitas === 1) {
    let idioma = prompt("Indique el idioma");
    let tema = prompt("Indique el tema de la pagina");
    let usuario = prompt("Nombre de usuario");
    let preferencia = prompt("Nivel de preferencia");
    let ult_visita = new Date().toString()
    
    document.cookie = `idioma=${idioma};max-age=+10`;
    document.cookie = `tema=${tema};max-age=+15`;
    document.cookie = `usuario=${usuario};max-age=+20`;
    document.cookie = `preferencia=${preferencia};`;
    document.cookie = `ultimaVisita=${ult_visita};`;
    
}

if (visitas === 2) {
    let idioma = prompt("Indique el idioma");
    let tema = prompt("Indique el tema de la pagina");
    let usuario = prompt("Nombre de usuario");
    let preferencia = "";
    let ult_visita = "";
    document.cookie = `idioma=${idioma};max-age=+10`;
    document.cookie = `tema=${tema};max-age=+15`;
    document.cookie = `usuario=${usuario};max-age=+20`;
    document.cookie = `preferencia=${preferencia};max-age=+0`;
    document.cookie = `ultimaVisita=${ult_visita};max-age=+0`;
    document.cookie = `contadorVisitas=${visitas};max-age=+0`
}

function mostrarCookiesVigentes() {
  let cookies = document.cookie.split(";");
  console.log("Cookies Vigentes:");
  cookies.forEach((cookie) => {
    console.log(cookie.trim());
  });
}

setInterval(mostrarCookiesVigentes, 2000);
