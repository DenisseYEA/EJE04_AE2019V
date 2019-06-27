const sendmail = require("./sendmail");

const nombre = "Denisse Yaneth Espinosa Abando";

const env = {
    to: "deyaespinosaab@ittepic.edu.mx",
    subject: "Ejercicio 04 - AE2019V",
    text: `Este es un mensaje que se "envio" a ${nombre}`,
    html: `<strong>Envío de HTML</strong>`
}

sendmail.send(env);