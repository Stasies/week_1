const { Server } = require('https');
const { createReadStream: cRS, writeFileSync:  wFS} = require('fs');
const finalhandler = require('finalhandler');
const { runInNewContext } = require('vm');
const serve = require('serve-static')('.');
const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Origin': 'Content-Type, Access-Control-Allow-Headers'
};
const s = Server((req, res) => {
    if (req.url === '/ru'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.write('Да\n');
    } else if(req.url.startsWith('/timer')){
        const secs = req.url.substring(1 + req.url.indexOf('?'));
        return setTimeout(() => res.end(`<h1><i>Seconds: ${secs}</i></h1>\n`), secs);
    } else if(req.url === '/download'){
        res.writeHead(200, { 'Content-Disposition': 'attachment; filename="file.txt"'
        });
        res.write('File\n');
    } else if (req.url === '/challenge') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write('x\n');

    } else if(req.url.indexOf('/api/rv/') >= 0){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        const blue = req.url.substring(1 + req.url.lastIndexOf('/'));
        let potato = blue.split("").reverse().join("");
        res.end(`${potato}\n`);
        // return blue;
    } else{
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.write('No\n');
    }
    res.end();
});
s.listen(443);
