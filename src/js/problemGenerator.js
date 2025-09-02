const topicPrompts = {
    'number-structure': {
        y9: {
            topics: [
                'Scientific notation with positive powers',
                'Cube roots of numbers up to 1000',
                'Converting between standard and scientific notation'
            ],
            context: 'Focus on real-world applications like astronomy, microscopic measurements, or population sizes.'
        },
        y10: {
            topics: [
                'Scientific notation with negative powers',
                'Comparing very small numbers',
                'Converting between different forms of scientific notation'
            ],
            context: 'Use contexts from science, technology, or real-world measurements.'
        }
    },
    'number-operations': {
        y9: {
            topics: [
                'Order of operations with positive exponents',
                'Rounding and estimation in calculations',
                'Converting remainders to fractions/decimals'
            ],
            context: 'Use practical situations that require precise calculations and estimation.'
        },
        y10: {
            topics: [
                'Complex order of operations',
                'Operations with negative numbers',
                'Multi-step word problems'
            ],
            context: 'Include financial or measurement contexts that require careful attention to order of operations.'
        }
    }
    // Add other topic configurations here
};

class ProblemGenerator {
    constructor() {
        this.loadingSpinners = {};
        this.errorMessages = {};
        this.containers = {};
    }

    initialize(section) {
        this.loadingSpinners[section] = document.getElementById(`loading-spinner-${section}`);
        this.errorMessages[section] = document.getElementById(`error-message-${section}`);
        this.containers[section] = document.getElementById(`ai-problem-container-${section}`);
    }

    async generateProblem(topic, yearLevel, section) {
        if (!this.loadingSpinners[section]) {
            this.initialize(section);
        }

        const container = this.containers[section];
        const loadingSpinner = this.loadingSpinners[section];
        const errorMessage = this.errorMessages[section];

        // UI preparation
        this.prepareUI(container, loadingSpinner, errorMessage);

        try {
            const problem = await this.fetchProblem(topic, yearLevel);
            this.displayProblem(problem, container);
        } catch (error) {
            this.handleError(error, errorMessage);
        } finally {
            this.resetUI(loadingSpinner);
        }
    }

    // ... Rest of the class implementation
}