const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "mrGmxH1LYmmCe1s9z7EkVOEK6gtT42MrZ8xeQrb2CQIOAh5PFyl7aSZK"

app.get("/api/definition/:word", async (req, res) => {
    try {
        const word = req.params.word;
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        const definitions = response.data.flatMap(entry =>
            entry.meanings.flatMap(meaning =>
                meaning.definitions.map(def => def.definition)
            )
        );

        const audioResource = response.data[0].phonetics
            .map(audioLink => audioLink.audio) //
            .filter(audioUrl => audioUrl.length > 0);

        console.log(audioResource)

        const limitedDefinitions = definitions.slice(0, 5)
        res.json({ limitedDefinitions, word, audioResource });
    } catch (error) {
        console.error("Error fetching definition:", error);
        res.status(500).json({ error: "Unable to fetch definition" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});