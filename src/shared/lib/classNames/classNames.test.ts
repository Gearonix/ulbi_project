import axios from 'axios';
import {classNames} from './classNames';
import {helpers, returnSomeData} from './helpers';
import {beforeEach} from 'node:test';

jest.mock('axios');
describe('classNames: ', () => {
  let response = {
      data: [10, 20, 30],
  };

  beforeEach(() => {
    response = {
        data: [10, 20, 30],
    };
  });

  test('with only first param', () => {
    expect(classNames('qwe')).toBe('qwe');
  });
  test('with additional class', () => {
    const expected = 'someClass qwe';
    expect(classNames('someClass', {}, ['qwe'])).toBe(expected);
  });
    test('helpers tests', async () => {
        const result = await helpers(() => 'done!', 1000);
        expect(result).toBe('done!');
    });

  test('axios mock', async () => {
    const moxios = jest.mocked(axios);
    moxios.get.mockReturnValue(response as any);
    const res = await returnSomeData();
    expect(res).toBeDefined();
    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(3);
    expect(res[0]).toBe(10);
  });
});
