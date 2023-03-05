import data from "../../data.json"

export const config = {
	runtime: 'edge',
};

export default (req) => {
	const params = new URL(req.url).searchParams
	const type = params.get('type')
	const out = {}
	out[type] = data[type]
	return Response.json({
		name: `${params}`,
		file: '[type]/index.js',
		data: out
	});
};

