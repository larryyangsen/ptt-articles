import React from 'react';
import { Button, Icon } from 'antd';
import '../style/article.css';
export default ({
    athor,
    boo,
    content,
    datetime,
    editIP,
    neutral,
    publishIP,
    push,
    reply,
    title,
    urls,
    link,
    setArticleShowing
}) => {
    return (
        <div className="article-content">
            <div>
                <Button className="return-btn" onClick={() => setArticleShowing(false)}>
                    <Icon type="arrow-left" />
                </Button>
                <h1 className="article-title">{title}</h1>
            </div>
            <div className="article-content">{content}</div>
            {reply &&
                reply.map((r, i) => (
                    <div className="reply" key={i}>
                        <span className="reply-floor">{i + 1}樓 </span>
                        <span className="reply-tag">{r.tag} </span>
                        <span className="reply-user">{r.userid}</span>
                        <span className="reply-content">{r.content} </span>
                        <span className="reply-time">{r.time}</span>
                        <span className="reply-ip">{r.ip}</span>
                    </div>
                ))}
        </div>
    );
};
