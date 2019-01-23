var xmlObj01;//楞伽経テキスト_TEI
var xslObj01;//経典全体
var xmlDoc01;
var xslDoc01;

var xslProc;
var str="";
var foundEntry;

// ブラウザ判別IE11対応、2015/04/18
//chang if(!document.all) into if(!isIE)
var ua, isIE;

// "http://garafu.blogspot.jp/2013/08/useragent-ie11.html"参照。
// UserAgent を小文字に正規化
ua = window.navigator.userAgent.toLowerCase();
// IE or else 判別
isIE = (ua.indexOf('msie') >= 0 || ua.indexOf('trident') >=0);

function Init(){
	//ブラウザ判別
	if(!isIE){
		// Mozilla
		xmlObj01 = new XMLHttpRequest();
		xmlObj01.open("GET","LAS.xml",false);
		xmlObj01.setRequestHeader('Content-Type', 'text/xml');
		xmlObj01.overrideMimeType('text/xml');
		xmlObj01.send();
		xmlDoc01 = xmlObj01.responseXML;

		xslObj01 = new XMLHttpRequest();
		xslObj01.open("GET","entire_text.xsl",false);
		xslObj01.setRequestHeader('Content-Type', 'text/xml');
		xslObj01.overrideMimeType('text/xml');
		xslObj01.send();
		xslDoc01 = xslObj01.responseXML;

		xslObj02 = new XMLHttpRequest();
		xslObj02.open("GET","page_line.xsl",false);
		xslObj02.setRequestHeader('Content-Type', 'text/xml');
		xslObj02.overrideMimeType('text/xml');
		xslObj02.send();
		xslDoc02 = xslObj02.responseXML;
		
	}else{
		//Internet Explorer
		xmlDoc01=new ActiveXObject("MSXML2.DOMDocument");

		xslDoc01=new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
		//*xml, *xslt読み込み
		xmlDoc01.async=false;
		xmlDoc01.load("LAS.xml");

		xslDoc01.async=false;
		xslDoc01.load("entire_text.xsl");

		xslDoc02.async=false;
		xslDoc02.load("page_line.xsl");
	}
//	ChangeImageGloss();
}

function CallText(){
	if(!isIE){
		// Mozilla
		xslProc = new XSLTProcessor();
		xslProc.importStylesheet(xslDoc01);
		var fragment = xslProc.transformToFragment(xmlDoc01, document);
		document.getElementById('dv').innerHTML = "";
		document.getElementById('dv').appendChild(fragment);
	}else{
		//Internet Explorer
		str = xmlDoc01.transformNode(xslDoc01);
		dv.innerHTML = str;
	}
}

function CallTextPageLine(){
	if(!isIE){
		// Mozilla
		xslProc = new XSLTProcessor();
		xslProc.importStylesheet(xslDoc02);
		var fragment = xslProc.transformToFragment(xmlDoc01, document);
		document.getElementById('dv').innerHTML = "";
		document.getElementById('dv').appendChild(fragment);
	}else{
		//Internet Explorer
		str = xmlDoc01.transformNode(xslDoc02);
		dv.innerHTML = str;
	}
}
