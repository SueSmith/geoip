/// <reference types="@fastly/js-compute" />


function handler(event) {
  let clientGeo = event.client.geo

  event.request.headers.set("client-geo-continent", clientGeo.continent)
  event.request.headers.set("client-geo-country", clientGeo.country_code)
  event.request.headers.set("client-geo-latitude", clientGeo.latitude)
  event.request.headers.set("client-geo-longitude", clientGeo.longitude)

  return fetch(event.request, { backend: "origin_0" })
}

addEventListener("fetch", (event) => event.respondWith(handler(event)))
/*
function handler(event) {
  let clientGeo = event.client.geo

  let respBody = JSON.stringify({
    as: {
      name: clientGeo.as_name,
      number: clientGeo.as_number,
    },
    geo: {
      city: clientGeo.city,
      country_code: clientGeo.country_code,
      country_name: clientGeo.country_name,
      gmt_offset: clientGeo.gmt_offset,
    },
  })

  return new Response(respBody, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

// eslint-disable-next-line no-restricted-globals
addEventListener("fetch", (event) => event.respondWith(handler(event)))*/