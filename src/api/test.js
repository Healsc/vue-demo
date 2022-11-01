
import HttpRequest from "@/utils/request"

// 登录
export function sessionTest(params = {}) {
  return HttpRequest('/test/setSession', 'GET', params)
}
