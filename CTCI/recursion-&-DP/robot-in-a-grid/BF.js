/**
 * Grid with r rows and c columns
 * Robot is sitting in 0, 0
 * Robot can only move down and right
 * Certain cells are off limits
 * Design an algo for robot to find a path to bottom right
 *
 * Frame grid as matrix of r x c
 * 0's on available paths, 1 as obstacles
 * I: matrix
 * O: side effect of moving robot to bottom right;
 *    null output if no path is possible
 * E: no possible path (accounted for above)
 * C: optimize time and space
 *
 * There are different paths to take
 * This creates a tree of possible paths
 * Shortest path is done best with breadth-first search
 * BFS can be implemented with a queue and while loop
 * Add each possible robot position to the queue
 * Iterate until solution is found or all paths are exhausteds
 *
 * BF: Can define N = r + c as the max amount of moves possible in any path
 * O(2^N) time and O(2^N) space (correct!)
 *
 */

const Queue = require('../../trees-&-graphs/queue.js');

const findPath = (matrix) => {
  // initialize robot & queue
  const robot = {
    c: 0,
    r: 0
  };
  const length = matrix[0].length;
  const height = matrix.length;
  const queue = new Queue();
  queue.enqueue(robot);

  // for testing purposes
  let count = 0;

  // loop that continues until end case is met (i.e. while loop)
  // end case is robot position is correct or no more moves can be made
  //    (i.e. queue ends)
  while (queue.size()) {
    // inside loop:
    //    dequeue, check ending condition
    let { c, r } = queue.dequeue();
    console.log([r, c], count++);
    if (c === length - 1 && r === height - 1) {
      return true;
    }
    //    enqueue any possible moves
    // see if right move is available
    if (matrix[r][c + 1] === 0) {
      // if so, enqueue that move
      queue.enqueue({
        r,
        c: c + 1
      });
    }
    // see if down move is available
    if (matrix[r + 1] !== undefined && matrix[r + 1][c] === 0) {
      // if so, enqueue that move
      queue.enqueue({
        r: r + 1,
        c
      });
    }
  }
  return null;
};


const matrix = [[0, 1, 0, 0], [0, 0, 0, 1], [0, 1, 0, 0], [0, 0, 1, 0]];
const matrix2 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
console.log(findPath(matrix2));