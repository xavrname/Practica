const tiempomin = 40;

const TiempoTotalPreparacion = (capas) => {
    if (capas == null || capas < 0 || capas === '') {
        alert("Error, ponga un valor válido");
        return 0;
    }
    return capas * 2;
};

const TiempoRestanteHorno = (tiempomin, tiempoPrevio) => {
    if (tiempoPrevio == null || tiempoPrevio < 0) {
        alert("Error, ponga un valor válido");
        return "error";
    }
    return tiempomin - tiempoPrevio;
};

const TiempoTotalTrabajo = (TiempoHorno, tiempoPreparacion) => {
    if (TiempoHorno == null || tiempoPreparacion == null || TiempoHorno < 0 || tiempoPreparacion < 0) {
        alert("Error, valores invalidos");
        return "error";
    }
    return TiempoHorno + tiempoPreparacion;
};


const tiempoPrevio = Number(prompt("Ingrese el tiempo que la lasaña ha estado previamente en el horno"));
const capas = Number(prompt("Ingrese el numero de capas que tendra la lasaña"));

const tiempoPreparacion = TiempoTotalPreparacion(capas);
const TiempoRestante = TiempoRestanteHorno(tiempomin, tiempoPrevio);
const TiempoTotal = TiempoTotalTrabajo(TiempoRestante, tiempoPreparacion);

document.write(`<p>El tiempo restante en el horno es de: ${TiempoRestante}</p>`);
document.write(`<p>El tiempo total de trabajo fue de: ${TiempoTotal}</p>`);
document.write(`<p>El tiempo total de preparación fue de: ${tiempoPreparacion}</p>`);
