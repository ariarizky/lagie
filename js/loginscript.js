//mengubah judul web
let judul = document.getElementsByTagName('title')[0];

judul.innerHTML = 'Sign in to - PT HERALDI BAWANA INMARK';

//mengubah font color label
const label = document.getElementsByTagName("label");
for(i=0;i <= label.length ;i++){
	label[i].style.color = "#003366";
}