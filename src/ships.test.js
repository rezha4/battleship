import { Ships } from "./ships";

test("fresh ship doesnt sunk", () => {
    const cruise = new Ships(2);
    expect(cruise.isSunk()).toBe(false);
    const patrol = new Ships(0);
    expect(cruise.isSunk()).toBe(false);
});

test("hp of 2 hit 2 times", () => {
    const cruise = new Ships(2);
    cruise.hit();
    cruise.hit();
    expect(cruise.isSunk()).toBe(true);
});