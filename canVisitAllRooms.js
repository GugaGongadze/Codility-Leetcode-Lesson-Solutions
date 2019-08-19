/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const keys = rooms[0]
  const visited = { 0: true }
  const queue = [...keys]

  while (queue.length > 0) {
    const key = queue.shift()
    if (!visited[key]) {
      visited[key] = true
    }
    for (roomKey of rooms[key]) {
      if (!visited[roomKey]) {
        queue.push(roomKey)
      }
    }
  }

  return Object.keys(visited).length === rooms.length
};


canVisitAllRooms([[1],[2],[3],[]])
canVisitAllRooms([[1,3],[3,0,1],[2],[0]])
