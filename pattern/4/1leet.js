/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {

    /*
    * sort using built-in function
    * */
    intervals.sort((a, b) => {
        if (a[0] === b[0])
            return a[1] - b[1]

        return a[0] - b[0]
    })

    let result = [intervals[0]]

    /*
    * The first time will be between same pair but
    * it's ok because the same pair will keep the same at the end
    * */
    for (let i = 0; i < intervals.length; i++) {
        let [s1, e1] = result[0]
        let [s2, e2] = intervals[i]

        if (s2 <= e1) {
            /*
            * No need to use flag to keep current of result , use length instead
            * */
            result[result.length - 1][1] = Math.max(e1, e2)
        } else {
            result.push(intervals[i])
        }
    }

    return result
}