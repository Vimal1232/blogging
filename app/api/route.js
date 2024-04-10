export default async function GET(req) {

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=c",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  return Response.json({ data }, { status: 200 });
}
