const storyStages = {
    start: 
	{
        text: "Welcome to the Bridge. At each stop, you can either go left, or go right. One path will break below you.",
        bridgeChoice: ["Go left", "Go right"],
        bridgeConsequence: {
            "Go left": "Correct1",
            "Go right": "sadEnding"
        },
    },

    Correct1: 
	{
        text: "You Finish crossing the bridge, and are met with another. There is a steep one to the left, and a regular one to the right. Which seems safer?",
        bridgeChoice: ["Go left", "Go right"],
        bridgeConsequence: {
            "Go left": "sadEnding",
            "Go right": "Correct2"
        },
    },

    Correct2: 
	{
        text: "Good intuition. Now its pitch black, however you can still feel the side handles to multiple bridges. It's completely random, left or right?",
        bridgeChoice: ["Go left", "Go right"],
        bridgeConsequence: {
            "Go left": "sadEnding",
            "Go right": "Correct3"
        },
    },

    Correct3: 
	{
        text: "The last bridge breaks beneath you as you finish crossing. Lucky break. To the left theres a bridge with broken steps, but has a rope handle on both sides, but to the right theres a relatively sturdy bridge with no handles.",
        bridgeChoice: ["Go left", "Go right"],
        bridgeConsequence: {
            "Go left": "Correct4",
            "Go right": "sadEnding"
        },
    },

    Correct4: 
	{
        text: "As you near the end of your journey, you feel tense knowing any wrong decision could be your last.",
        bridgeChoice: ["Go left", "Go right"],
        bridgeConsequence: {
            "Go left": "sadEnding",
            "Go right": "Correct5"
        },
    },

    Correct5: 
	{
        text: "You are now at the end of your journey. Be genuinely honest... Did you beat the game without any fails?",
        bridgeChoice: ["Yes", "No, I died at least once"],
        bridgeConsequence: {
            "Yes": "sadEnding",
            "No, I died at least once": "happyEnding"
        },
    },

    happyEnding: 
	{
        text: "Congratulations! Honesty always wins out.",
        bridgeChoice: [],
        bridgeConsequence: {},
    },

    sadEnding: 
	{
        text: "Remember what you've learned, and continue another time.",
        bridgeChoice: [],
        bridgeConsequence: {},
    }
};

let currentStage = storyStages.start;

function makeChoice(choice) 
{
    const nextStageKey = currentStage.bridgeConsequence[choice];
    if (nextStageKey) 
	{
        currentStage = storyStages[nextStageKey];
        updateStory();
    } else {
        console.error("Invalid choice bridgeConsequence:", choice);
    }
}

function updateStory() 
{
    const storyElement = document.getElementById("bridge");
    const bridgeChoiceElement = document.getElementById("bridgeChoice");

    storyElement.innerHTML = `<p>${currentStage.text}</p>`;

    bridgeChoiceElement.innerHTML = "";
    currentStage.bridgeChoice.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => makeChoice(choice));
        bridgeChoiceElement.appendChild(button);
    }
);
}

function makeChoice(choice) 
{
    const nextStageKey = currentStage.bridgeConsequence[choice];
    if (nextStageKey) 
	{
        currentStage = storyStages[nextStageKey];
        updateStory();
	}
}

updateStory();
