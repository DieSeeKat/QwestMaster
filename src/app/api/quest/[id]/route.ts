import {NextRequest} from "next/server";

export async function GET(req: NextRequest, { params } : { params: { id: string }}) {
    console.log(params.id);
    return Response.json({
       hint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar, orci non sodales accumsan, nisi ante consequat arcu, vel venenatis mauris justo ac ex. Aenean ac dolor at augue scelerisque.",
       image: false,
    });
}