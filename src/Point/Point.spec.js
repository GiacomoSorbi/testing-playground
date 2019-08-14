import Point from './'

describe('Point class should', () => {
  it('generate a point object with at least 2 coordinates', () => {
    const [x, y] = [2, 3]
    const point = new Point(x, y)
    expect(point.x).toBe(x)
    expect(point.y).toBe(y)
  })

  it('generate a point 3 coordinates when passed or default `z` to 0 if not passed', () => {
    let [x, y] = [2, 3]
    let point = new Point(x, y)
    expect(point.x).toBe(x)
    expect(point.y).toBe(y)
    expect(point.z).toBe(0)
    let z = -1
    point = new Point(x, y, z)
    expect(point.x).toBe(x)
    expect(point.y).toBe(y)
    expect(point.z).toBe(z)
  })

  it('compute the distance of 2 points', () => {
    let point1 = new Point(3, 4)
    let point2 = new Point(6, 8)
    expect(Point.distance(point1, point2)).toBe(5)
    point1 = new Point(0, 10, 13)
    point2 = new Point(10, 20, 3)
    expect(Point.distance(point1, point2)).toBeCloseTo(Math.pow(300, 0.5))
  })
})
