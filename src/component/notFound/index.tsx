import { Button, Typography } from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";
import './index.css';

const NotFound = () => {
    const navigate = useNavigate();
    // 404 全屏页面 文字上下垂直居中
    return (
        <div className="not-found">
            <div className="not-found-content">
                <Typography.Title heading={2}>404</Typography.Title>
                <Typography.Text>抱歉，您访问的页面不存在</Typography.Text>
                <Button type="text" onClick={() => navigate('/')}>
                    返回首页
                </Button>
            </div>
        </div>
    )
}

export default NotFound