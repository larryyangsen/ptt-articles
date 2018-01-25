import React from 'react';
import { Button, Icon } from 'antd';
import '../style/article-content.css';
const checkTagClassName = tag => {
    if (tag === '推') return 'reply-push';
    if (tag === '→') return 'reply-neutral';
    return 'reply-boo';
};
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
        <div className="article">
            <h1 className="article-title">
                <a href={link}>{title}</a>
            </h1>
            <h2 className="article-athor">{athor}</h2>
            <h3 className="article-datetime">{datetime}</h3>
            <p className="article-content">{content}</p>
            <Button className="return-btn" size="small" onClick={() => setArticleShowing(false)}>
                <Icon type="arrow-left" />
            </Button>
            {reply &&
                reply.map((r, i) => (
                    <div className="reply" key={i}>
                        <span className="reply-floor">{i + 1}樓 </span>
                        <span className={checkTagClassName(r.tag)}>{r.tag} </span>
                        <span className="reply-user">{r.userid}</span>
                        <span className="reply-content">{r.content} </span>
                        <span className="reply-time">{r.time}</span>
                        <span className="reply-ip">{r.ip}</span>
                    </div>
                ))}
        </div>
    );
};
