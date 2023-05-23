import { Category } from '../types/category';
import { debounceRequest } from './axiosWrapper'


const baseUrl = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7002/api' : 'https://www.carline.life/api';

export const getWallpaper = (category: Category, pageStart: number = 0, pageTotal: number = 10) => {
    // category pageStart pageTotal query 拼接到url上
    const url = `${baseUrl}?category=${category}&pageStart=${pageStart}&pageTotal=${pageTotal}`;
    return debounceRequest(url, 'GET', null, 300);
}
