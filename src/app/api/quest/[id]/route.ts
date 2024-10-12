import {NextRequest} from "next/server";
import {sql} from "@vercel/postgres"
import NotFound from "next/dist/client/components/not-found-error";

export async function GET(req: NextRequest, { params } : { params: { id: string }}) {

    const { rows } = await sql`SELECT * FROM mission WHERE id = ${params.id}`;

    if (!rows.length) {
        return NotFound;
    }

    return Response.json({
       hint: rows[0].hint,
       image: rows[0].image,
    });
}