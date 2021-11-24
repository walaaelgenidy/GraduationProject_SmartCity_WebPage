import { stringify } from 'querystring';
import { history } from 'umi';
import { fakeAccountRegister } from '@/services/register';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';

const Model = {
  namespace: 'register',
  state: {
    status: undefined,
  },
  effects: {
    *register({ payload }, { call, put }) {
      const response = yield call(fakeAccountRegister, payload);
      yield put({
        type: 'changeRegisterStatus',
        payload: response,
      }); // Register successfully

      if (response.status === 'ok') {
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }

        history.replace(redirect || '/');
      }
    },

    // logout() {
    //   const { redirect } = getPageQuery(); // Note: There may be security issues, please note

    //   if (window.location.pathname !== '/user/login' && !redirect) {
    //     history.replace({
    //       pathname: '/user/login',
    //       search: stringify({
    //         redirect: window.location.href,
    //       }),
    //     });
    //   }
    // },
  },
  reducers: {
    changeRegisterStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return { ...state, status: payload.status, type: payload.type };
    },
  },
};
export default Model;
