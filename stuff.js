function star(t,num,len,num2,len2){
	for(let j=1;j<=num;j=j+1){
		t.fd(len);star1(t,num2,len2);t.bk(len);t.rt(360/num);
	}
	}
	
function star1(t,num,len){
	for(let j=1;j<=num;j=j+1){
		t.fd(len);t.bk(len);t.rt(360/num);
	}
	}
	
	function newStar(){
	str=document.getElementById("tex1").value;
	strAr=str.split(',');
	}
	
	function poly(t,n,len){
		for(let j=1;j<=n;j=j+1){
		t.fd(len);t.rt(360/n);		
		}
	}
		
	function polyAr(t,n,len){
		for(let j=0;j<n;j=j+1){
		t.fd(len);x[j]=t.xpos();
		y[j]=t.ypos();t.rt(360/n);		
		}
	for(let k=0;k<n;k++){
	for(let j=0;j<n;j++){
	lAr.drawLine(x[k],y[k],x[j],y[j]);
	
	
	}}}	
		
function lineAr(){
	tur.set1(200,400,-90);
	polyAr(tur,12,100);
		
}		
			
		
		
		function lines(){
		l=new line(50,50,"can1");
		//tur=new logo(300,300,0,"can1");
		for(let j=1;j<21;j=j+1){
			l.drawLine(50,50,300,30*j);			
		}
	tur.lt(90);		
		for(let j=3;j<16;j=j+1){
		poly(tur,j,100);}
		}
		
		
function lineDesign(len,num,ang){
tur.set1(300,300,-90,"can1");	
	for(let j=0;j<num;j=j+1){
	tur.fd(len);x[j]=tur.xpos();y[j]=tur.ypos();
	}
	tur.bk(len*num);tur.rt(ang);
	for(let j=num;j<2*num;j=j+1){
	tur.fd(len);x[j]=tur.xpos();y[j]=tur.ypos();
	}
	for(let j=0;j<num;j=j+1){
	lAr.drawLine(x[num-1-j],y[num-1-j],x[num+1+j],y[num+1+j]);
	}
}	
		
function newLine(){
str=document.getElementById("tex2").value;
	strLines=str.split(',');	
	tur.set1(200,400,-90,"can1");
	lineDesign(strLines[0],strLines[1],strLines[2]);
	
}	
