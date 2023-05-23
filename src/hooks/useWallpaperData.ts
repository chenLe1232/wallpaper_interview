import { useState, useEffect, useCallback } from 'react';
import { Category } from '../types/category';
import { getWallpaper } from '../utils/wallpaper';
//! TODO: 补充测试用例
interface WallpaperData {
  img: string;
  tag: string[];
  preview: string;
}

export const useWallpaperData = (
  category: Category,
  pageStart: number = 0,
  pageTotal: number = 10,
  loadMore: boolean = false,
  resetLoadMore: () => void
) => {
  const [wallpaperData, setWallpaperData] = useState<WallpaperData[]>([]);
  const fetchWallpaperData = useCallback(async () => {
    try {
      const response = await getWallpaper(category, pageStart, pageTotal) as any;
      if (response?.code === 0) {
        const data = response?.res?.vertical.map((item: any) => ({
          img: item.img,
          tag: item.tag,
          preview: item.preview,
        }));
        if (loadMore) {
          setWallpaperData((prevData) => [...prevData, ...data]);
          resetLoadMore?.();
        } else {
          setWallpaperData(data);
        }
      } else {
        console.error('Error fetching wallpaper data:', response?.msg);
      }
    } catch (error) {
      console.error('Error fetching wallpaper data:', error);
    }
  }, [category, pageStart, pageTotal, loadMore]);
  useEffect(() => {
    fetchWallpaperData();
  }, [category, pageStart, pageTotal]);

  return wallpaperData;
};

