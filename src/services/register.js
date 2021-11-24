import request from '@/utils/request';

export async function fakeAccountRegister(params) {
  return request('/api/register/account', {
    method: 'POST',
    data: params,
  });
}
