export const fetcher = (resource: string, init: object) =>
  fetch(resource, init).then(data => data.json())
