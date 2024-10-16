export async function getCollection(
	collection: string,
	locale: string,
	depth = 0,
	sort = "-createdAt",
	limit?: number,
	where?: string,
): Promise<any[]> {
	if (limit === undefined) {
		return getCollectionAll(collection, locale, depth, sort, where);
	} else {
		return getCollectionLimit(collection, locale, depth, sort, limit, where);
	}
}

export async function getDocument(
	collection: string,
	id: number,
	locale: string,
	depth: number,
	where?: string,
): Promise<any | undefined> {
	const fetchUrl = where
		? `${import.meta.env.PAYLOAD_URL}/api/${collection}/${id}?locale=${locale}&depth=${depth}&where${where}`
		: `${import.meta.env.PAYLOAD_URL}/api/${collection}/${id}?locale=${locale}&depth=${depth}`;
	const response = await fetch(fetchUrl, {
		headers: {
			Authorization: `users API-Key ${import.meta.env.PAYLOAD_API_KEY}`,
		},
	})
		.then((res) => res.json())
		.catch(() => undefined);
	return response;
}

async function getCollectionLimit(
	collection: string,
	locale: string,
	depth: number,
	sort: string,
	limit: number,
	where?: string,
) {
	const fetchUrl = where
		? `${import.meta.env.PAYLOAD_URL}/api/${collection}?locale=${locale}&limit=${limit}&sort=${sort}&depth=${depth}&where${where}`
		: `${import.meta.env.PAYLOAD_URL}/api/${collection}?locale=${locale}&limit=${limit}&sort=${sort}&depth=${depth}`;

	const collections = await fetch(fetchUrl, {
		headers: {
			Authorization: `users API-Key ${import.meta.env.PAYLOAD_API_KEY}`,
		},
	})
		.then((res) => res.json())
		.catch(() => undefined);

	return collections?.docs ?? [];
}

async function getCollectionAll(
	collection: string,
	locale: string,
	depth: number,
	sort: string,
	where?: string,
) {
	let collections = [];
	let response = undefined;
	let page = 1;

	do {
		const fetchUrl = where
			? `${import.meta.env.PAYLOAD_URL}/api/${collection}?page=${page}&locale=${locale}&sort=${sort}&depth=${depth}&where${where}`
			: `${import.meta.env.PAYLOAD_URL}/api/${collection}?page=${page}&locale=${locale}&sort=${sort}&depth=${depth}`;

		response = await fetch(fetchUrl, {
			headers: {
				Authorization: `users API-Key ${import.meta.env.PAYLOAD_API_KEY}`,
			},
		})
			.then((res) => res.json())
			.catch(() => undefined);

		if (response) collections.push(...response.docs);
		page++;
	} while (response && response.hasNextPage);

	return collections;
}

export async function getGlobal(
	global: string,
	locale: string,
	depth: number,
): Promise<any | undefined> {
	return await fetch(
		`${import.meta.env.PAYLOAD_URL}/api/globals/${global}?locale=${locale}&depth=${depth}`,
		{
			headers: {
				Authorization: `users API-Key ${import.meta.env.PAYLOAD_API_KEY}`,
			},
		},
	)
		.then((res) => res.json())
		.catch(() => undefined);
}
