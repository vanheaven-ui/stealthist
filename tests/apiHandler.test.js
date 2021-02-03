import { TestScheduler } from 'jest';
import APIHandler from '../src/utils/apiHandler';

test('Module  APIhandler is an Object', () => {
  expect(APIHandler).toBeInstanceOf(Object);
});

test('APIHandler async functions resolve correctly', () => {
  const URL = '';
  const gameData = { 
    'user': 'Ezekiel',
    "score": {
      min: '2',
      sec: '30'
    },
  };

  global.fetch = jest.fn(() => {
    Promise.resolve({
      json: () => Promise.resolve({ result: 'It mocked!' }),
    });
  });

  beforeEach(() => {
    fetch.mockClear();
  });

  expect(fetch).not.toHaveBeenCalled();
  const data = APIHandler.postData(URL, gameData);
  expect(data).toBeInstanceOf(Promise);
  expect(fetch).toHaveBeenCalledTimes(1);
  const res = APIHandler.getData(URL);
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(res).toBeInstanceOf(Promise);
});

test('modifyTime function is defined', () => {
  expect(APIHandler.modifyTime()).toBeDefined();
});

test('modifyTime function converts wrong time format', () => {
  expect(APIHandler.modifyTime('4', '101')).toEqual({ min: '5', sec: '41' });
});

test('modifyTime function doesn\'t convert correct time format', () => {
  expect(APIHandler.modifyTime('4', '59')).toEqual({ min: '4', sec: '59' });
});

