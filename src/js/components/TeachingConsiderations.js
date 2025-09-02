class TeachingConsiderations extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const topic = this.getAttribute('topic');
        const considerations = this.getConsiderations(topic);

        this.shadowRoot.innerHTML = `
            <div class="teaching-considerations border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg mt-4">
                <h4 class="font-semibold">Teaching Considerations</h4>
                <ul class="list-disc ml-6 space-y-2">
                    ${considerations.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    getConsiderations(topic) {
        const considerationsMap = {
            'number-structure': [
                'Demonstrate scientific notation with coefficient between 1-10',
                'Use integer exponents only',
                'Connect to real-world applications',
                'Explore use in measurement accuracy'
            ],
            // Add more topics
        };

        return considerationsMap[topic] || [];
    }
}

customElements.define('teaching-considerations', TeachingConsiderations);