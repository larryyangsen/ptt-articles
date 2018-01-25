import { scraper, content, hot } from 'ptt-scr';
import express from 'express';
import http from 'http';
import serveStatic from 'serve-static';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 9999;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get('/ptt/:boardName/:startPage', async (req, res) => {
    req.params = {
        ...req.params,
        ...req.query,
        startPage: req.params.startPage === 'index' ? 0 : req.params.startPage
    };
    const option = Object.assign(
        {
            pageCounts: 1,
            startPage: 0,
            categoryPatten: /\[(.+)\]/,
            boardName: 'Gamesale'
        },
        req.params
    );
    const list = await scraper(option);
    // const item = await content(list.items[5]);
    res.json(list);
});
app.get('/ptt/hot-boards', async (req, res) => {
    const boards = await hot();
    res.json(boards);
});
app.post('/ptt/article', async (req, res) => {
    const article = await content(req.body.link);
    const { link, content: contents } = article;
    res.json({ link, ...contents });
});
process.env.NODE_ENV === 'production' && app.use(serveStatic(path.join(__dirname, '../client')));
process.env.NODE_ENV === 'development' && app.use(serveStatic(path.join(__dirname, '../build')));

server.listen(port, () => {
    console.log('server listen on 9999');
});
