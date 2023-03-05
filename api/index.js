import data from "../data.json";

export const config = {
	runtime: 'edge',
};

export default (req) => Response.json(data);

