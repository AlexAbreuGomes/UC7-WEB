let isDarkMode = false;

        // Obtenha referências aos botões
        const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
        

        // Função para alternar o modo escuro
        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }
        }

        // Adicione os eventos de clique aos botões
        toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
        increaseFontSizeBtn.addEventListener