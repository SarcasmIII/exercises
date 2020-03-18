// @ts-check

import fs from 'fs';

// BEGIN (write your solution here)
const dd = (filepath, data, cb) => {
	fs.writeFile(filepath, data, 'utf8', (_error) => {
		// console.log('success');
		cb(_error);
	});
};
export default dd;
// END
