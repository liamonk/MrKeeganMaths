const WorkedExamples = {
    generateExample(topic, difficulty) {
        const examples = {
            'scientific-notation': {
                basic: {
                    problem: "Convert 5,280,000 to scientific notation",
                    steps: [
                        "Move decimal point left until number is between 1-10",
                        "Count moves to determine power",
                        "Write as coefficient × 10^power"
                    ],
                    solution: "5.28 × 10⁶"
                },
                advanced: {
                    problem: "Compare 7.35 × 10⁻³ and 0.008",
                    steps: [
                        "Convert 0.008 to scientific notation: 8 × 10⁻³",
                        "Compare coefficients since powers match",
                        "7.35 < 8, so 7.35 × 10⁻³ < 0.008"
                    ],
                    solution: "0.008 is larger"
                }
            }
            // Add more topics and examples
        };

        return examples[topic]?.[difficulty] || null;
    }
};