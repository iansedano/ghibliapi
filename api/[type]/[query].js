import data from "../../data.json";

export const config = {
  runtime: "edge",
};

export default (req) => {
  const params = new URL(req.url).searchParams;
  const type = params.get("type");
  const query = params.get("query");
  const out = {};
  out[type] = data[type].filter((item) => item.id == query);
  return Response.json({
    data: data[type].filter((item) => item.id == query),
  });
};
