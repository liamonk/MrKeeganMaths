document.addEventListener('DOMContentLoaded', () => {
    // Initialize problem generator
    window.problemGenerator = new ProblemGenerator();

    // Add event listeners for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            showSection(section, e.target);
        });
    });

    // Initialize solution toggles
    document.querySelectorAll('.solution-toggle').forEach(button => {
        button.addEventListener('click', () => toggleSolution(button));
    });
});