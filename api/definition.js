const axios = require("axios");

export default async function handler(req, res) {
    const { word } = req.query; // Use query params for word (e.g., /api/definition?word=apple)

    try {
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

        const limitedDefinitions = definitions.slice(0, 5);
        
        res.status(200).json({ limitedDefinitions, word, audioResource });
    } catch (error) {
        console.error("Error fetching definition:", error);
        res.status(500).json({ error: "Unable to fetch definition" });
    }
}