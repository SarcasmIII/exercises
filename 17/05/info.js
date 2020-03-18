// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const compareFileSizes = (filepath1, filepath2, cb) => {
	const readFileStat = (items, result) => {
		if (items.length === 0) {
			cb(null, Math.sign(result[0]-result[1]));
			return;
		}
		const [first, ...rest] = items;
		fs.stat(first, (_error, stat) => {
			readFileStat(rest, [...result, stat.size]);
		});
	}
	readFileStat([filepath1, filepath2], []);
};

// END
