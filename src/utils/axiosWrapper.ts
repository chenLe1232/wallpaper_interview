import axios, { AxiosResponse, Method } from 'axios';
import { debounce } from 'lodash-es';

// 创建axios实例
const instance = axios.create();

// 用于存储取消请求的函数
const cancelTokenMap = new Map<string, (message?: string) => void>();

// 封装请求方法
const request = (
    url: string,
    method: Method,
    data: any,

): Promise<AxiosResponse<any, any> | undefined> => {
    // 如果已存在相同的请求，则取消上一个请求
    if (cancelTokenMap.has(url)) {
        cancelTokenMap?.get(url)?.('取消重复请求');
        cancelTokenMap.delete(url);
    }

    // 创建取消请求的token
    const cancelToken = axios.CancelToken.source();
    cancelTokenMap.set(url, cancelToken.cancel);

    // 发送请求
    return instance({
        url,
        method,
        data,
        cancelToken: cancelToken.token,
    })
        .then((response) => {
            // 请求成功后，删除取消请求的函数
            cancelTokenMap.delete(url);
            return response;
        })
        .catch((error) => {
            if (axios.isCancel(error)) {
                console.log('请求已取消:', error.message);
            } else {
                // 处理其他错误
                console.error('请求错误:', error);
            }
            return undefined;
        });
};

// 封装带有debounce功能的请求方法
const debounceRequest = (
    url: string,
    method: Method,
    data: any,
    debounceTime: number = 0
) => {
    return debounce(
        () => request(url, method, data),
        debounceTime
    );
};

export { request, debounceRequest };