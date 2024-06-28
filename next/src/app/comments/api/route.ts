import { text } from "stream/consumers";
import { comments } from "../page";

export async function GET(request: Request) {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },

    status: 201,
  });
}
