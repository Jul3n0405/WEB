class ComponentFooterElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Trafy</a>
            <! –– ################# BOTÓN ################# ––>
            <button class="button-three navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Toggle navigation">
                <svg stroke="var(--button-color)" fill="none" class="hamburger" viewBox="-10 -10 120 120" width="25">
                    <path class="line" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"
                        d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                    </path>
                </svg>
            </button>
                <! –– ######################################## ––>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link hovereffect" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hovereffect" href="#">Reserva</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hovereffect" href="#">Contacto</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                    <button class="btn btn-outline-dark" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>`
    }
}

window.customElements.define("component-footer", ComponentFooterElement);

//BOTÓN//
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");

        if (!currentState || currentState === "closed") {
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    });
});
