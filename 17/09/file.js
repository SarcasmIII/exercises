// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import { waterfall } from 'async';

// BEGIN (write your solution here)

export const unionFiles = (input1, input2, output, cb) => {
	waterfall([firstRead, secondRead, write], function (err, result) {
		cb(err);
	});
	
	function firstRead(callback) {
		fs.readFile(input1, 'utf-8', (error1, data1) => {
			if (error1) {
				callback(error1);
				return;
			}
			callback(null, data1);
		});
	}
	
	function secondRead(data1, callback) {
		fs.readFile(input2, 'utf-8', (error2, data2) => {
			if (error2) {
				callback(error2);
				return;
			}
			callback(null, data1, data2);
		});
	}
	
	function write(data1, data2, callback) {
		fs.writeFile(output, `${data1}${data2}`, (error3) => {
			callback(error3);
		});
	}
}

// END
