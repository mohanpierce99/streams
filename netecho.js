var net=require('net');
var Transform=require('stream').Transform;

function through(fn){
    return new Transform({
        transform:fn
    });
}
net.createServer((stream)=>{
    stream.pipe(through(toUpper)).pipe(stream);

    stream.on('end',function(){
        console.log('Bye');
    })
}).listen(3000);


function toUpper(buff,enc,next){
next(null,(buff.toString()).toUpperCase());
}