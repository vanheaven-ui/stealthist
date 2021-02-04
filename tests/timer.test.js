import Timer from '../src/utils/timer';

const timer = new Timer(0);

test('Timer class is defined', () => {
  expect(Timer).toBeDefined();
});

test('printTime function works correctly', () => {
  expect(timer.printTime(1, 30)).toBe('01:30');
  expect(timer.printTime(10, 0)).toBe('10:00');
  expect(timer.printTime(1, 0)).toBe('01:00');
});