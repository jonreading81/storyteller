import { promises as fs } from "fs";

export async function GET() {
  const navigation = await fs.readFile(
    process.cwd() + "/src/data/stories.json",
    "utf8"
  );

  return Response.json(JSON.parse(navigation));
}
