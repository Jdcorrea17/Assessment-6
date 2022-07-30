const {shuffleArray} = require('./utils')

let randomArray = {
    array: "coding",
    length: 6
}

describe('shuffleArray should', () => {
    const sameArray = shuffleArray(randomArray.array)

    test("return same array", () => {
        expect(sameArray).toBe("coding")
    });

    const arrayLength = shuffleArray(randomArray.length)

    test("return same length", () => {
        expect(arrayLength).toBe(6)
    })
})
