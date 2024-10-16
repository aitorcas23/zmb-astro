type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export function notProvidedError(prop: string) {
	console.error(`"${prop}" was not provided`);
}

export function notANumberError(prop: string) {
	console.error(`The given "${prop}" was not a number`);
}

type PropValue = Prettify<{
	prop: string;
	value: string;
}>;

export function notFoundError(databaseObject: string, ...propValues: PropValue[]) {
	const propValueStringList = propValues.map(({ prop, value }) => `"${prop}": ${value}`);
	console.error(`No ${databaseObject} found with ${propValueStringList.join(" and ")}`);
}

export function notAuthorizedError() {
	console.error("Tried to access admin without login");
}
