function copiarTexto() {
    var footerTexto = document.getElementById("footer").innerText;

    var textarea = document.createElement("textarea");
    textarea.value = footerTexto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Texto copiado para a área de transferência!");
}