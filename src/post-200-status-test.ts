import { check } from 'k6';
import http from 'k6/http';

const url = `${__ENV.URL}`

const payload = '{ "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"], "id": "123" }'

export default () => {
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  check(res, {
    'status is 200': () => res.status === 200,
  });
};
