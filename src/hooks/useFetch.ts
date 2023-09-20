import { ofetch } from 'ofetch'

/**
 * ofetch wrapper 이며, 향후 인터셉터를 추가할 수 있습니다.
 * Request 시, 헤더의 토큰 셋팅 등 공통적인 작업을 할 수 있습니다.
 * Response 시, 공통적인 에러 처리를 할 수 있습니다.
 * Timeout 같은 헤더에 공통으로 셋팅하는 요소들을 넣을 경우, useFetch return로 추가하여 처리하면 됩니다.
 * https://github.com/unjs/ofetch
 */
const api = ofetch.create({
  onRequest({ request, options }) {
    // const authStore = useAuthStore();
    // if (authStore.isAuthenticated) {
    //   options.headers = { Authorization: `Bearer ${authStore.token}` };
    //   console.log(options);
    // } else {
    //   console.log("Not authenticated");
    // }
  }
  // onRequestError({ request, options, error }) {},
  // onResponse({ request, options, response }) {},
  // onResponseError({ request, options, response }) {},
})
export function useFetch() {
  return { api }
}
