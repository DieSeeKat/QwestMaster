import {sql} from "@vercel/postgres"

export async function GET(req: Request, { params } : { params: { id: string }})
{

    const { rows } = await sql`SELECT * FROM mission WHERE id = ${params.id}`;

    if (!rows.length) {
        return new Response("Not Found", { status: 404 });
    }

    return Response.json({
       hint: rows[0].hint,
       image: rows[0].image,
    });
}