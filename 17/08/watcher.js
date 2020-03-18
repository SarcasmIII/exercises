// @ts-check
import fs from 'fs';

// BEGIN (write your solution here)
const watch = (file, interval, cb) => {
	let prevStateFile = 0;
	fs.stat(file, (error, stats) => {
		if (error) {
			cb(error);
			return;
		}
		const nowStateFile = stats.mtimeMs;
		prevStateFile = nowStateFile;
	});
	  const id = setInterval(() => {
		fs.stat(file, (error, stats) => {
			if (error) {
				clearInterval(id);
				cb(error);
				return;
			}
			const nowStateFile =  stats.mtimeMs;
			if ((prevStateFile !== nowStateFile) && (prevStateFile !== 0)) {
				prevStateFile = nowStateFile;
				console.log(nowStateFile);
				cb(null);
			} else {
				prevStateFile = nowStateFile;
			}
		});
	  }, interval);
  return id;
}

export default watch;
// END
