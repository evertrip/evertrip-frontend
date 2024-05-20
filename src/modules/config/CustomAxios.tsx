import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Cookies } from 'react-cookie';

interface HookState {
  code: number | null;
  data: any;
}
const CustomAxios = (url: string): HookState => {
  const [code, setCode] = useState<number | null>(null); 
  const [data, setData] = useState<any>(null);
  const cookies = new Cookies();
  const getCookie = (name: string) => {
    return cookies.get(name); 
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${getCookie('Authorization')}`
          }
        });
        setCode(response.status);
        setData(response.data);
      } catch (error: any) {
        if (error.response) {
          setCode(error.response.status);
          setData(error.response.data);
        }
      }
    };

    fetchData();
  }, [url]);

  return { code, data };
}

export default CustomAxios;