export const onlyUnique = <T>(value: T, index: number, array: T[]) =>
	array.indexOf(value) === index;

export const onlyUniqueJson = (value: object, index: number, array: object[]) =>
	array.map((m) => JSON.stringify(m)).indexOf(JSON.stringify(value)) === index;

export const notNull = <T>(value: T | null | undefined): value is T =>
	value !== null && value !== undefined;
