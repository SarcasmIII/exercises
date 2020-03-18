// @ts-check

import { compareFileSizes } from '../info.js';

test('compareFileSizes 1', (done) => {
  const filepath = `${__dirname}/test.js`;
  compareFileSizes(filepath, filepath, (_error1, result) => {
    expect(result).toBe(0);
    done();
  });
});

test('compareFileSizes 2', (done) => {
  const filepath1 = `${__dirname}/test.js`;
  const filepath2 = `${__dirname}/../Makefile`;
  compareFileSizes(filepath1, filepath2, (_error1, result) => {
    expect(result).toBe(1);
    done();
  });
});

test('compareFileSizes 3', (done) => {
  const filepath1 = `${__dirname}/../Makefile`;
  const filepath2 = `${__dirname}/test.js`;
  compareFileSizes(filepath1, filepath2, (_error1, result) => {
    expect(result).toBe(-1);
    done();
  });
});
