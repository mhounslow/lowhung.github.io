// matthounslow.dev — shared behaviour (theme toggle, footer year)
// The initial theme is applied by a tiny inline script in <head> to avoid a flash.
(function () {
    var root = document.documentElement;
    var media = window.matchMedia("(prefers-color-scheme: dark)");

    function currentTheme() {
        return root.dataset.theme || (media.matches ? "dark" : "light");
    }

    function syncThemeColor() {
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", currentTheme() === "dark" ? "#21201e" : "#faf9f5");
    }

    function syncToggleLabel(button) {
        var next = currentTheme() === "dark" ? "light" : "dark";
        button.setAttribute("aria-label", "switch to " + next + " theme");
        button.setAttribute("title", "switch to " + next + " theme");
    }

    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
        syncToggleLabel(button);
        button.addEventListener("click", function () {
            var next = currentTheme() === "dark" ? "light" : "dark";
            root.dataset.theme = next;
            try {
                localStorage.setItem("theme", next);
            } catch (e) {}
            syncThemeColor();
            syncToggleLabel(button);
        });
    });

    media.addEventListener("change", syncThemeColor);
    syncThemeColor();

    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
})();
