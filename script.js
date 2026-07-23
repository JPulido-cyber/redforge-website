document.addEventListener("DOMContentLoaded", () => {
    const labPage = document.querySelector(".lab-page");

    if (!labPage) {
        return;
    }

    const viewToggle = document.querySelector("#lab-view-toggle");
    const themeToggle = document.querySelector("#lab-theme-toggle");

    viewToggle?.addEventListener("click", () => {
        const listViewEnabled = labPage.classList.toggle("lab-list-view");
        viewToggle.setAttribute("aria-pressed", String(listViewEnabled));

        const label = viewToggle.querySelector("span");
        if (label) {
            label.textContent = listViewEnabled
                ? "VIEW MODE: SYSTEMS"
                : "VIEW MODE: TOPOLOGY";
        }
    });

    themeToggle?.addEventListener("click", () => {
        const highContrastEnabled = labPage.classList.toggle("lab-high-contrast");
        themeToggle.setAttribute("aria-pressed", String(highContrastEnabled));

        const label = themeToggle.querySelector("span");
        if (label) {
            label.textContent = highContrastEnabled
                ? "THEME: HIGH CONTRAST"
                : "THEME: DARK";
        }
    });
});
