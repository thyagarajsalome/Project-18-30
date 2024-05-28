const emojiButton = document.getElementById("btn"); // Corrected element ID
const emojiNameElement = document.getElementById("emoji-name"); // Corrected typo

const fetchedEmojis = []; // More descriptive array name

async function fetchEmojis() {
  try {
    const response = await fetch("https://emoji-api.com/emojis?access_key=51102d4ecad8f6fb9ded8e174c9a3d8a9298f38a");
    const data = await response.json(); // Use json() instead of jason()

    console.log("Fetched emoji data:", data); // Informative logging

    // Process fetched emojis
    fetchedEmojis.length = 0; // Clear the array before adding new data
    for (const emoji of data) {
      fetchedEmojis.push(emoji); // Add each emoji object to the array
    }

  } catch (error) {
    console.error("Error fetching emojis:", error);
  }
}

fetchEmojis(); // Call the function to fetch emojis initially

emojiButton.addEventListener("click", async () => {
  console.log("Button clicked!");

  // Handle button click:
  // 1. Check if emojis have been fetched
  if (!fetchedEmojis.length) {
    console.warn("Emojis haven't been fetched yet. Please wait.");
    return; // Prevent further processing if emojis are not available
  }

  // 2. Randomly select an emoji from the fetchedEmojis array
  const randomIndex = Math.floor(Math.random() * fetchedEmojis.length);
  const randomEmoji = fetchedEmojis[randomIndex];

  // 3. Update the emoji name element's content
  emojiNameElement.textContent = randomEmoji.name; // Use textContent for text updates
});
