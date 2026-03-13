import { NextResponse, NextRequest } from "next/server";
import data from "../data/MOCK_DATA.json";

// export async function GET() {
//   return NextResponse.json({
//     data,
//   });
// }

// import { NextRequest, NextResponse } from "next/server";
// import data from "../data/MOCK_DATA.json";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  const result = data.slice(start, end);

  return NextResponse.json({
    page,
    limit,
    total: data.length,
    data: result,
  });
}
