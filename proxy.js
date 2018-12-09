var net=require('net');
net.createServer((stream)=>{
    stream.pipe(net.connect(3000,'localhost')).pipe(stream);
}).listen(3001);