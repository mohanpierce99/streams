// let fs=require('fs');
// let a=fs.createReadStream('./lool.js');
// var b=fs.createWriteStream('./mohan.txt');
// // let i=0;

// // while(i<10){
// //     b.write("Hello");
// // i+=1;
// // }
// let piped=a.pipe(b);

// piped.on('finish',function(){
//     console.log("FInished writing");
// })

// piped.on('finish',function(){
//     console.log("FInished writing");
// })

/* let {Readable}=require('stream');

let myReader=new Readable();


myReader._read=generate;

function generate(){
    for(let i=0;i<10;i++){
        myReader.push("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    }
    myReader.destroy();
}

myReader.pipe(process.stdout);
 */

 let through=require('through2');
let a=process.stdin;
 a.pipe(through(toUpper)).pipe(process.stdout);

 function toUpper(buff,enc,next){
     next(null,(buff+"").toUpperCase());
 }
a.on('data',function(data){
    console.log(data);
})