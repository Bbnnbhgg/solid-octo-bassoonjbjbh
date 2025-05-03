export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get("user-agent") || "";

    if (userAgent.toLowerCase().includes("roblox")) {
      return Response.redirect("https://pastefy.app/RifWPB5P/raw", 302);
    }

    return new Response("Not access", { status: 200 });
  },
};
