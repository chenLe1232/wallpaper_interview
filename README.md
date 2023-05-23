## 谷罗英面试项目
基于ios 万能小组件核心功能之一的壁纸项目进行，在浏览器中实现壁纸查看 、壁纸下载、壁纸分享(链接)功能。

### 项目结构
- `src/`: 存放项目源代码
  - `components/`: 存放项目组件
    - `WallpaperList/`: 壁纸列表组件
    - `WallpaperDetails/`: 壁纸详情组件
    - `DownloadButton/`: 下载按钮组件(TODO)
    - `ShareButton/`: 分享按钮组件(TODO)
  - `assets/`: 存放项目资源文件，如图片、样式等
  - `utils/`: 存放项目工具函数
  - `index.js`: 项目入口文件
- `public/`: 存放项目公共文件，如 HTML 模板、图标等
- `README.md`: 项目说明文档
- `package.json`: 项目依赖和配置信息

### 项目构建
项目采用vite作为基建，采用阿里云的流水线进行项目部署
