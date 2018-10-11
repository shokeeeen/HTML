image=new Array(
	"img/welcome.jpg","img/ringcyclotron.jpg","img/kyocera.jpg","img/grandraiden.jpg"
);
NowCnt=-1;
flg=0;
function slide(){
NowCnt=(NowCnt<image.length-1) ? NowCnt+1 : 0;
flg=(flg==0) ? 1 : 0;
if(flg==0){
	document.getElementById("idshow1").src=image[NowCnt];
	document.getElementById("idshow1").className="fadein";
	document.getElementById("idshow2").className="fadeout";
}else{
	document.getElementById("idshow2").src=image[NowCnt];
	document.getElementById("idshow1").className="fadeout";
	document.getElementById("idshow2").className="fadein";
}
	setTimeout("slide()",6000);
}
