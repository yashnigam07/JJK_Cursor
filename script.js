document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");
    const hoverElements = document.querySelectorAll("button, a");
    const domainExpansionBtn = document.getElementById("domain-expansion-btn");

    // Initial background image
    let isExpanded = false;
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_VP5K3ll_oiwidyN-N_UfqArNYP0WywEHw&s')";

    // Set up mouse move effect
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Set up click effect
    document.addEventListener("mousedown", (event) => {
        createParticleEffect(event.clientX, event.clientY);
    });

    // Hover effect
    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("hovered");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("hovered");
        });
    });

    // Button click effect
    domainExpansionBtn.addEventListener("click", () => {
        if (isExpanded) {
            document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_VP5K3ll_oiwidyN-N_UfqArNYP0WywEHw&s')";
            domainExpansionBtn.textContent = "Domain Expansion";
        } else {
            document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/83/85/46/838546ec7d2352266b860764d8b5ece0.gif')";
            domainExpansionBtn.textContent = "Expanded";
        }
        domainExpansionBtn.classList.add("clicked");
        isExpanded = !isExpanded;
    });

    function createParticleEffect(x, y) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
});
