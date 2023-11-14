// Define stages of the story
const storyStages = {
    start: {
        text: "Welcome to the Bridge. At each stop, you can either go left, or go right. One path will break below you.",
        choices: ["Go left", "Go right"],
        consequence: {
            "Go left": "Correct1",
            "Go right": "sadEnding"
        },
    },

    Correct1: {
        text: "You Finish crossing the bridge, and are met with another. There is a steep one to the left, and a regular one to the right. Which seems safer?",
        choices: ["Go left", "Go right"],
        consequence: {
            "Go left": "sadEnding",
            "Go right": "Correct2"
        },
    },

    Correct2: {
        text: "Good intuition. Now its pitch black, however you can still feel the side handles to multiple bridges. It's completely random, left or right?",
        choices: ["Go left", "Go right"],
        consequence: {
            "Go left": "sadEnding",
            "Go right": "Correct3"
        },
    },

    Correct3: {
        text: "The last bridge breaks beneath you as you finish crossing. Lucky break. To the left theres a bridge with broken steps, but has a rope handle on both sides, but to the right theres a relatively sturdy bridge with no handles.",
        choices: ["Go left", "Go right"],
        consequence: {
            "Go left": "Correct4",
            "Go right": "sadEnding"
        },
    },

    Correct4: {
        text: "As you near the end of your journey, you feel tense knowing any wrong decision could be your last.",
        choices: ["Go left", "Go right"],
        consequence: {
            "Go left": "sadEnding",
            "Go right": "Correct5"
        },
    },

    Correct5: {
        text: "You are now at the end of your journey. Be genuinely honest... Did you beat the game without any fails?",
        choices: ["Yes", "No, I died at least once"],
        consequence: {
            "Yes": "sadEnding",
            "No, I died at least once": "happyEnding"
        },
    },

    happyEnding: {
        text: "Congratulations! Honesty always wins out.",
        choices: [],
        consequence: {},
    },

    sadEnding: {
        text: "Remember what you've learned, and continue another time.",
        choices: [],
        consequence: {},
    }
};

// Initial stage of the story
let currentStage = storyStages.start;

// Function to update the story based on user choices
function makeChoice(choice) {
    const nextStageKey = currentStage.consequence[choice];
    if (nextStageKey) {
        currentStage = storyStages[nextStageKey];
        updateStory();
    } else {
        console.error("Invalid choice consequence:", choice);
    }
}

// Function to update the HTML with the current story stage
function updateStory() {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");

    // Update story text
    storyElement.innerHTML = `<p>${currentStage.text}</p>`;

    // Update choices
    choicesElement.innerHTML = "";
    currentStage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => makeChoice(choice));
        choicesElement.appendChild(button);
    });


}

// Function to update the story based on user choices
function makeChoice(choice) {
    const nextStageKey = currentStage.consequence[choice];
    if (nextStageKey) {
        currentStage = storyStages[nextStageKey];
        updateStory();
        // Check for a condition to end the game
        if (nextStageKey === "happyEnding" || nextStageKey === "sadEnding") {
            endGame(nextStageKey === "happyEnding" ? "Happy Ending" : "Sad Ending");
        }
    } else {
        console.error("Invalid choice consequence:", choice);
    }
}

// ... (your existing code)


// Initial update
updateStory();
