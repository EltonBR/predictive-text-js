class PredictiveText {
    allWords = [];
    keyMaps = {
        ':': 1,
        '.': 1,
        '!': 1,
        '@': 1,
        '#': 1,
        '$': 1,
        '%': 1,
        '*': 1,
        '(': 1,
        ')': 1,
        '_': 1,
        '+': 1,
        '-': 1,
        '=': 1,
        '<': 1,
        '>': 1,
        ';': 1,
        '/': 1,
        '\\': 1,
        '|': 1,
        '[': 1,
        ']': 1,
        '{': 1,
        '}': 1,
        '`': 1,
        '´': 1,
        'a': 2,
        'b': 2,
        'c': 2,
        'à': 2,
        'á': 2,
        'ã': 2,
        'â': 2,
        'c': 2,
        'ç': 2,
        'd': 3,
        'e': 3,
        'é': 3,
        'è': 3,
        'ê': 3,
        'ẽ': 3,
        'f': 3,
        'g': 4,
        'h': 4,
        'i': 4,
        'í': 4,
        'ì': 4,
        'î': 4,
        'î': 4,
        'j': 5,
        'k': 5,
        'l': 5,
        'm': 6,
        'n': 6,
        'o': 6,
        'õ': 6,
        'ô': 6,
        'ó': 6,
        'ò': 6,
        'p': 7,
        'q': 7,
        'r': 7,
        's': 7,
        't': 8,
        'u': 8,
        'ú': 8,
        'ù': 8,
        'ũ': 8,
        'û': 8,
        'w': 9,
        'x': 9,
        'y': 9,
        'z': 9
    };

    processedMap = [];

    onReady = {};

    constructor() {

        this.onReady = new Promise((resolve, _reject) => {
            fetch("./src/dictionaries/pt-BR.txt", {
                method: "GET",
            }).then((response) => {
                return response.text();
            }).then((result) => {
                this.allWords = result.split("\n");
                this.proccessDictionary();
                resolve();
            });
        });

    }

    proccessDictionary() {

        this.allWords.forEach((word) => {
            let wordMap = '';
            word.split("").forEach((character) => {
                wordMap += this.keyMaps[character.toLocaleLowerCase()];
            });

            this.processedMap.push({
                k: wordMap,
                w: word
            });
        });

        console.log(`${(JSON.stringify(this.processedMap).length / (1024 * 1024)).toFixed(2)} MB`);

    }

    getWords(wordKeys) {
        let timestart = new Date().getTime();
        let matchedWords = this.processedMap.filter((item) => {
            return item.k.indexOf(wordKeys) === 0 && wordKeys.length == item.k.length;
        });

        matchedWords = matchedWords.map(item => item.w.toLocaleLowerCase());
        console.log("time ms: ", new Date().getTime() - timestart);
        return matchedWords;
    }

}