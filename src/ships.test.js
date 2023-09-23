import { Ships } from "./ships";

test("fresh ship doesnt sunk", () => {
  const twoHpShip = new Ships(2);
  expect(twoHpShip.isSunk()).toBe(false);
  //should all these tests be done? i mean i will be the one
  // who makes the ships in the end right?
  //const zeroHpShip = new Ships(0);
  //expect(zeroHpShip.isSunk()).toBe(false);
  //const minusHpShip = new Ships
});

test("hp of 2 hit 2 times", () => {
  const cruise = new Ships(2);
  cruise.hit();
  cruise.hit();
  expect(cruise.isSunk()).toBe(true);
});

test("hp of 5 hit 5 times", () => {
  const cruise = new Ships(5);
  cruise.hit();
  cruise.hit();
  cruise.hit();
  cruise.hit();
  cruise.hit();
  expect(cruise.isSunk()).toBe(true);
});

test("out of range hits", () => {
  const cruise = new Ships(2);
  cruise.hit();
  cruise.hit();
  cruise.hit();
  cruise.hit();
  cruise.hit();
  expect(cruise.isSunk()).toBe(true);
});
