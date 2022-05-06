const fs = require('fs');
const JSZip = require('jszip');

// Zip a provided directory.
const zip = new JSZip();


/*fs.cp("package.json","temp/package1.json", (err) => {
  console.log(err);
});*/

function myZip(path) {
    //zip the folder whose path is given here.
    //Remove the old zip file if exists.

    //Open a file for reading and display contents of file on console.
    fs.open("package.json", (err,fd) => {

    });
    fs.readFile("package.json", 'utf8', (err,data) => {
      if(!err) {
        //console.log(data);
      }
    });
    fs.readdir(path, (err, data) => {
      /*fs.stat(data[5], (des) => {
        console.log(des);
      });*/
    });

    const buf = Buffer.from("Hello World!!");
    console.log(buf);

    fs.rm("app.zip", (err) => {
      if(!err) {
        fs.readdir(path, (err,files) => {
          if(!err){
            // Read files from path directory
            for(var i=0; i<files.length; i++){
              //console.log(files[i]);
              fs.readFile(files[i], 'utf8', (err,data) => {
                if(!err) {
                  zip.file("hello1.txt",data, { binary: true });
                }
              });
              /*fs.stat(files[i], (err,stats) => {
                if(!err) {
                  //console.log(i + " " + stats.isFile());
                  //console.log(i + " " + stats.isDirectory());
                }
              });*/
            }
            //Get file name, file contents, file type

            //Add the contents of file to zip.
            //zip.file(files.)
          }
        });
        //Read files into input stream.

        zip.file("hello.txt","hello world", {binary: true});
        zip.file("text/", null, {dir: true});

        //Generate zip file from current data stream.
        zip
          .generateNodeStream({streamFile: true})
          .pipe(fs.createWriteStream('app.zip'))
          .on('finish', function(){
            console.log("Zip file generated! ")
          });
      }
    });

}

myZip("/home/abhi/projects/peace/app");
