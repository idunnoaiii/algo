
// let edge = [
//     [1,	2],
//     [2,	3],
//     [2,	4],
//     [3,	4],
//     [6,	4],
//     [1,	5],
//     [2,	5],
//     [1,	6],
//     [5,	6]
// ];


let edge = [
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 4],
    [6, 4],
    [1, 5],
    [2, 5],
    [1, 6],
    [5, 6],
    [4, 6]
];

const findCyclic = (root) => {

    let stack = []
    stack.push(root)
    let ancestor = []

    let visited = []

    let cur;

    while (stack.length != 0) {

        cur = stack.pop()
        
        if (visited.indexOf(cur) == -1) {
            visited.push(cur)
            console.log(`${cur} -> `)
        }

        let adj = edge.filter(x => x[0] == cur).map(x => x[1])

        for (let v of adj) {

            ancestor.push([cur, v])

            if (visited.indexOf(v) == -1)
                stack.push(v)   

        }
    }

}

/**
 * 1 find all vertexes connect to the node
 * 2 foreach vertexes loop througth all the vertexes
 *  */



findCyclic(1)