import service from "@/api/request";

/**
 * code换取jwttoken
 * @param {*} params code
 * @returns token
 */
export function code2jwtToken(params) {
  return service.get("/auth-demo/code2Token", {
    params: params,
  });
}

/**
 * 获取工单列表
 * @param {*} params
 * @returns
 */
export function getOrderList(params) {
  return service.get("/auth-demo/resources/list", { params: params });
}
/**
 *
 * @param {*} id
 * @returns
 */
export function getOrderDetailById(id) {
  return service.get(`/auth-demo/resources/detail/${id}`);
}
/**
 *
 * @param {*} taskId
 * @param {*} postData
 * @returns
 */
export function postTaskLog(taskId, postData) {
  return service({
    url: `/auth-demo/resources/detail/${taskId}/log`,
    method: "post",
    data: postData,
  });
}
/**
 * 提交交付凭证
 * @param {*} taskId
 * @param {*} postData
 * @returns
 */
export function postTaskEdence(taskId, postData) {
  return service({
    url: `/auth-demo/resources/detail/${taskId}/evidence`,
    method: "post",
    data: postData,
  });
}
