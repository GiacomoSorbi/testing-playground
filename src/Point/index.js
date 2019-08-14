export default class Point {
  constructor(x, y, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }
  static distance(point1, point2) {
    return Math.sqrt(
      ['x', 'y', 'z'].reduce((a, b) => a + (point1[b] - point2[b]) ** 2, 0),
    )
  }
}
