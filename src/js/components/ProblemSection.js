class ProblemSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const topic = this.getAttribute('topic');
        const yearLevel = this.getAttribute('year-level');
        
        this.shadowRoot.innerHTML = `
            <div class="problem-section">
                <h4 class="font-semibold text-lg">Practice Problems</h4>
                <button class="btn btn-primary" 
                        onclick="problemGenerator.generateProblem('${topic}', '${yearLevel}', '${topic}-${yearLevel}')">
                    ✨ Generate New Problem
                </button>
                <div id="problem-container-${topic}-${yearLevel}" class="mt-4 hidden"></div>
                <div id="loading-spinner-${topic}-${yearLevel}" class="hidden">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
                </div>
                <div id="error-message-${topic}-${yearLevel}" class="hidden text-red-600"></div>
            </div>
        `;
    }
}

customElements.define('problem-section', ProblemSection);