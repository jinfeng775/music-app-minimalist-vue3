import request from "../utils/request";
const UserApi = {
  GetUserList: "/api/get/user/list",
  SaveUser: "/api/save/user",
  DeleteUser: "/api/delete/user",
};
export function testLogin(parameter) {
  return request({
    url: "/login",
    method: "post",
    data: parameter,
  });
}
export function getUserList(parameter) {
  return request({
    url: UserApi.GetUserList,
    parameter,
  });
}
export function saveUser(parameter) {
  return post({
    url: UserApi.SaveUser,
    data: parameter,
  });
}
export function deleteUser(parameter) {
  return requestDelete({
    url: `${UserApi.DeleteUser}/${parameter}`,
  });
}
