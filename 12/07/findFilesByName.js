import path from 'path';
import { isFile } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const search = (tree, subStr) => {
	const iter = (newTree, fullPath, acc) => {
		const { name, children } = newTree;
		const newFullPath = path.join(fullPath, name);
		console.log(newFullPath);
		if (isFile(newTree)) {
			if (name.includes(subStr)) {
			  return [...acc, newFullPath];
			}
			return acc;
		}
		return children.reduce((iAcc, item) => iter(item, newFullPath, iAcc), acc);
	};
	return iter(tree, '', []);
}

export default search; 

// END


// const findEmptyDirsDepth = (root, depth = 1) => {
//   const iter = (n, currentDepth, acc) => {
//     if (isFile(n) || currentDepth > depth) {
//       return acc;
//     }

//     if (n.children.length === 0) {
//       return [...acc, n.name];
//     }
//     return n.children.reduce((cAcc, nn) => iter(nn, currentDepth + 1, cAcc), acc);
//   };

//   return iter(root, 0, []);
// };

// const dirs = findEmptyDirsDepth(tree, 2);
// console.log(dirs); // => ['apache']