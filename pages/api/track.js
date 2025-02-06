export async function GET(req) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
  const userAgent = req.headers.get("user-agent");

  await fetch('/api/sendEmail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        to: `m4gii.dev@gmail.com`,
        name: `IP: ${ip}, userAgent: ${userAgent}`,
        date: "",
        time: 'time',
        location: ``,
        locationUrl: ''
    }),
  });

  console.log(`Visitor IP: ${ip}, User-Agent: ${userAgent}`);
}
