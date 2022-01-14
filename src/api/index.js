import service from "@/api/request";

export function code2jwtToken(params) {
  return service({
    url: "/auth-demo/code2Token",
    params: params,
  });
}

export function getOrderList() {
  return service({
    url: "/auth-demo/resources/list",
  });
}
