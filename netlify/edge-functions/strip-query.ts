export default function handler(
  request: Request,
  context: { rewrite(url: string | URL): Response | Promise<Response> }
) {
  const q = request.url.indexOf('?');
  if (q === -1) return;
  return context.rewrite(request.url.slice(0, q));
}

export const config = {
  path: '/decks',
};
