import React from 'react';
import { Badge } from 'antd';
import '../style/article-title.css';
const checkPush = push => {
    const base = {
        fontSize: '1.2rem',
        left: 0
    };
    if (push === '爆') return Object.assign({ color: '#fff', backgroundColor: '#f00' }, base);
    if (push.indexOf('X') != -1) return Object.assign({ color: '#fff', backgroundColor: '#aaa' }, base);
    return Object.assign({ color: '#000', backgroundColor: '#fff' }, base);
};
export default ({ title, athor, catrgory, date, push, link, fetch }) => (
    <div className="article-title">
        <Badge count={push} style={checkPush(push)}>
            <a onClick={() => fetch(link)}>{title}</a>
            <p className="date">
                {date} {athor}
            </p>
        </Badge>
    </div>
);
