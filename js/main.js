function preveriGeslo() {
    let vnesenoIme = document.querySelector("input[name='ime']").value;
    let vnesenoGeslo = document.querySelector("input[name='geslo']").value;
    if (vnesenoIme == "mukic@t-online.hu" && vnesenoGeslo == "Naprej00") {
        window.open("/dodajNovico.html");
    }
}
