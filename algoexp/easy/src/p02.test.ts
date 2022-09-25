import { solve } from "./p02";

interface Input {
    Arr: number[],
    Seq: number[]
}

interface TestCase {
    Input: Input,
    Expect: boolean
}

describe('Run test', () => {
    it('case 1', () => {
        let tests: TestCase[] = [
            {
                Input: {
                    Arr : [5, 1, 22, 25, 6, -1, 8, 10],
                    Seq : [1, 6, -1, 10] 
                },
                Expect : true
            }
        ]

        for (let test of tests) {
            expect(solve(test.Input.Arr, test.Input.Seq)).toEqual(test.Expect)
        }
    })
})