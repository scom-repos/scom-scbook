const http = require('http');
const fs = require('fs');
const path = require('path');
const launcherPath = path.join(__dirname, '../node_modules/@ijstech/components/dist');
const distPath = path.join(__dirname, '../dist');
const libPath = path.join(__dirname, '../dist/lib');
const scconfig = fs.readFileSync(path.join(distPath, 'scconfig.json')).toString().replace(/{root}\/assets\/img\//g, 'img/').replace(/{root}/g, '.');
const indexHtml =  fs.readFileSync(path.join(__dirname, './index.html.template')).toString().replace("{{scconfig}}", scconfig);

http.createServer(function (request, response) {
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    var url = request.url;
    var filePath;
    var isIndexHtml = false;
    if (url == '/' || url == 'index.html') {
        filePath = path.join(__dirname, './index.html.template');
        isIndexHtml = true;
    } 
    else if (url == '/run.html')
        filePath = path.join(distPath, 'run.html')
    else if (url == '/edit.html')
        filePath = path.join(distPath, 'edit.html')
    else if (url.endsWith('/typescript/index.js'))
        filePath = path.join(distPath, 'lib/compiler/typescript/index.js')
    else if (url.endsWith('/compiler/index.js'))
        filePath = path.join(distPath, 'lib/compiler/index.js')
    else if (url.indexOf('/dist/') >= 0) 
        filePath = path.join(__dirname, '../node_modules/@ijstech/components/', url);
    else if (Object.keys(mimeTypes).indexOf(url.substr(url.lastIndexOf('.')).toLowerCase()) >= 0)
        filePath = path.join(distPath, url);
    else if (url.indexOf('/lib/') >= 0) 
        filePath = path.join(libPath, '..', url)
    else {
        filePath = path.join(__dirname, './index.html.template');
        isIndexHtml = true;
    }
    filePath = path.resolve(filePath);
    
    if (!isIndexHtml && !filePath.indexOf(launcherPath)== 0 && !filePath.indexOf(distPath) == 0){
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('', 'utf-8');
        return;
    }
    var extname = String(path.extname(filePath)).toLowerCase();

    var contentType = mimeTypes[extname] || 'application/octet-stream';
    
    if (isIndexHtml) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(indexHtml, 'utf-8');
    }
    else {
        fs.readFile(filePath, function(error, content) {
            if (error) {
                console.dir('File not found!');
                console.dir(request.url);
                if(error.code == 'ENOENT') {
                    fs.readFile('./404.html', function(error, content) {
                        response.writeHead(404, { 'Content-Type': 'text/html' });
                        response.end('404 not found!', 'utf-8');
                    });
                }
                else {
                    response.writeHead(500);
                    response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                }
            }
            else {
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            }
        });
    }
}).listen(8080);
console.log('Server running at http://localhost:8080/');