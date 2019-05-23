// function demoKaraoke() {
//   // var fileSong = document.getElementById("fileSong");
//   // var fileLyric = document.getElementById("fileLyric");
//   // fileSong.src = "./public/media/NguoiAmPhu-MaiQuangNam-5430437.mp3"
//   // fileLyric.src = "./public/lyrics/nguoiamphu.lrc"
//   // console.log(fileSong.src);
//   // console.log(fileLyric.src);
//   // uploadFile(fileToUpload)

//   var input = $('<input/>')
//     .attr('type', "file")
//     .attr('name', "file")
//     .attr('id', "someName");
//   //append the created file input
//   $('#target_div').append(input);
//   //initializing Multifile on the input element
//   input.MultiFile();
// }

// var dropzone = document.getElementById('fileSong'); // <-- ID of your drag area
//   attachEvent(dropzone, 'click', function(event) {
    
//     var dt = event.dataTransfer;
//     console.log("type")
//     console.log(dt)
//     var fileList = dt.files;
//     var file = fileList[0]; // you would have to change this if you allow multi-file upload

//     uploadFile(fileList);

// });


// function uploadFile(fileToUpload) {

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "./public/media/NguoiAmPhu-MaiQuangNam-5430437.mp3", true);   // <-- provide the proper URL

//     var form_data = new FormData();
//     form_data.append('file', fileToUpload);
//     xhr.send(form_data);

// }

// function attachEvent(element, type, fn) {
  
//   if (element.addEventListener) {
//     element.addEventListener(type, fn, false);
//   } else if (element.attachEvent) {
//     element.attachEvent('on' + type, fn);
//   }
// }