const HOME_TEAM_WON = 1

function solve(tour = [], result = []) {

    let score = new Map()
    let curBestScore = 0
    let curBestTeam = ""

    for (let i = 0; i < tour.length; i ++) {

        let [team1, team2] = tour[i]

        let curWinTeam = result[i] == HOME_TEAM_WON ? team1 : team2

        score.set(curWinTeam, (score.get(curWinTeam) || 0) + 3)

        if (score.get(curWinTeam) > curBestScore) {
            curBestScore = score.get(curWinTeam)
            curBestTeam = curWinTeam
        }

    }

    return curBestTeam

} 

console.log(solve([
    ["a", "b"],
    ["b", "c"],
    ["c", "a"]
], [0, 0, 1]))