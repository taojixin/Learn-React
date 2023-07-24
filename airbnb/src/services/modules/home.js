import request from "../request";

export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice"
  })
}