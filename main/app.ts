const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Bun!</title>
        </head>
        <body>
          <h1>2024 WiSoft Summer WorkShop</h1>
        </body>
        </html>
      `;

      return new Response(htmlContent, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listening on ${server.url}`);
