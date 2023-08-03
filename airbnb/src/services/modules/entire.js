import request from "..";

export function getEntireRoomList(offset, size = 20) {
  return request.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
