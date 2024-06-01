import axios, { AxiosResponse } from 'axios';
import { Cookies } from 'react-cookie';

// 정확한 HTTP 메소드 타입을 정의합니다.
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const CustomAxios = async (method: HttpMethod, url: string, param?: any) => {
  const cookies = new Cookies();

  const getCookie = (name: string) => {
    return cookies.get(name);
  }

  const config = {
    headers: {
      'Authorization': `Bearer ${getCookie('Authorization')}`
    }
  };

  let response: AxiosResponse<any>;

  try {
    switch (method) {
      case 'GET':
        response = await axios.get(url, config);
        break;
      case 'POST':
        response = await axios.post(url, param, config);
        break;
      case 'PUT':
        response = await axios.put(url, param, config);
        break;
      case 'DELETE':
        response = await axios.delete(url, config);
        break;
      default:
        throw new Error('Invalid HTTP method');
    }

    return { code: response.status, data: response.data };
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return { code: error.response.status, data: error.response.data.error };
    } else {
      console.error('An unknown error occurred:', error);
      return { code: null, data: null };
    }
  }
}

export default CustomAxios;
