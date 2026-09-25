const clips = [
    // Aquí iremos agregando los clips de Mapasaurio.
    //
    // Ejemplo:
    //
    // {
    //     titulo: "Momento épico 😂",
    //     url: "ENLACE_DEL_CLIP",
    //     miniatura: "images/clips/clip1.jpg"
    // }
];

const clipsContainer = document.getElementById("clips-container");

if (clipsContainer) {

    if (clips.length === 0) {

        clipsContainer.innerHTML = `
            <div class="clips-empty">
                <div class="clips-empty-icon">▶</div>

                <h3>Próximamente</h3>

                <p>
                    Los mejores momentos de Mapasaurio
                    aparecerán aquí.
                </p>
            </div>
        `;

    } else {

        clips.forEach((clip) => {

            const card = document.createElement("a");

            card.className = "clip-card";
            card.href = clip.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";

            card.innerHTML = `
                <div class="clip-thumbnail">

                    <img
                        src="${clip.miniatura}"
                        alt="${clip.titulo}"
                        loading="lazy"
                    >

                    <div class="clip-play">
                        ▶
                    </div>

                    <div class="clip-platform">
                        KICK
                    </div>

                </div>

                <div class="clip-info">

                    <h3>${clip.titulo}</h3>

                    <span>
                        Ver clip ↗
                    </span>

                </div>
            `;

            clipsContainer.appendChild(card);
        });
    }
}
