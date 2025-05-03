import { serve } from "https://deno.land/std/http/server.ts";

const handler = (req: Request) => {
  const userAgent = req.headers.get("user-agent");
  
  // Check if the user-agent contains "roblox" (case-insensitive and allows additional characters)
  if (userAgent && userAgent.toLowerCase().includes("roblox")) {
    // Redirect to a specific URL (example: https://example.com)
    return Response.redirect("https://pastefy.app/I4IEqq3W/raw", 302); // 302 is a temporary redirect
  }

  return new Response("Not access", { status: 200 });
};

console.log("Server running on http://localhost:8000");

serve(handler);
