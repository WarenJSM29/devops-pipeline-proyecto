document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
        alert("Datos enviados exitosamente");
    } else {
        alert("Error al enviar datos");
    }
});
