import { sortArrayByScore } from "../src/utils/utils";

test('sortArrayByScore function is defined', () => {
  const arr = [];
  expect(sortArrayByScore(arr)).toBeDefined();
});

test('sortingArrayByScore should receive array as aurgument', () => {

});

test('sortArrayByScore function returns a decending order sorted array', () => {
  const array = [
    {user: '', score: {min: '6', sec: '31' }},
    {user: '', score: {min: '2', sec: '31' }},
    {user: '', score: {min: '1', sec: '31' }},
    {user: '', score: {min: '0', sec: '31' }},
    {user: '', score: {min: '5', sec: '31' }},
  ];

  const expected = [
    {user: '', score: {min: '6', sec: '31' }},
    {user: '', score: {min: '5', sec: '31' }},
    {user: '', score: {min: '2', sec: '31' }},
    {user: '', score: {min: '1', sec: '31' }},
    {user: '', score: {min: '0', sec: '31' }},
  ];
  expect(sortArrayByScore(array)).toEqual(expected);
});