import service from "@/api/request";

export function code2jwtToken(params) {
  return service.get("/auth-demo/code2Token", {
    params: params,
  });
}

export function getOrderList() {
  return service.get("/auth-demo/resources/list");
}

export function getOrderDetailById(id) {
  return service.get(`/auth-demo/resources/detail/${id}`);
}
