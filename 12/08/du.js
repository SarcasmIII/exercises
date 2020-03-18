// @ts-check

import { reduce, isDirectory } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)

const calculateFilesSizes = (tree) => {
	return reduce((acc, item) => {
		if (isDirectory(item)) {
			return acc;
		}
		return acc + item.meta.size;
	}, tree, 0);
};

const myDu = (tree) => {
	const result = tree.children.map(n => [n.name, calculateFilesSizes(n)]);
	return result.sort((a, b) => b[1] - a[1]);
};

export default myDu;

// END




// const calculateFilesCount = tree =>
  // reduce((acc, node) => (isFile(node) ? acc + 1 : acc), tree, 0);


// const result = tree.children
  // .filter(isDirectory)
  // .map(n => [n.name, calculateFilesCount(n)]);

// console.log(result);