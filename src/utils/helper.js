export const arrayToObjectMapper = (arrObj) => {
	let mappedObj = {};
	if (Array.isArray(arrObj)) {
		arrObj.forEach((arr) => {
			mappedObj = {
				...mappedObj,
				[arr.id]: {
					...arr
				}
			};
		});
	}
	return mappedObj;
};
