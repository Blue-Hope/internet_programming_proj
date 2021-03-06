var IDVali = false;
var PWVali = false;
var EMVali = false;
var NVali = false;
var NickVali = false;
function start()
{
  document.getElementById('ID').addEventListener("change", function(){checkID(this.value);}, false);
  document.getElementById('PW').addEventListener("change", function(){checkPW(this.value);}, false);
  document.getElementById('EMN').addEventListener("change", function(){checkEM(this.value);}, false);
  document.getElementById('Nick').addEventListener("change", function(){checkNick(this.value);}, false);
  document.getElementById('NAME').addEventListener("change", function(){checkN(this.value);}, false);
}

function checkID(data)
{
  var cnt=0;
  var patternE = /[A-Z]/;
  var isOK = /\W/;
  var len = data.length;

  if(patternE.test(data)){cnt++;}
  if(isOK.test(data)){cnt++;}
  if((len>14)||(len<6)){cnt++;}

  if(cnt!=0)
  {
    IDVali = false;
    document.getElementById('eID').innerHTML = "6~14자의 영문 소문자, 숫자와 특수기호(_)만 사용 가능합니다.";
  }
  else{
    IDVali = true;
    document.getElementById('eID').innerHTML = "";
  }


  checking();
}

function checkPW(data)
{
  var cnt=0;
  var len = data.length;
  var patterne = /[a-z]/;
  var patternE = /[A-Z]/;
  var patternD = /\d+/;

  if(!patterne.test(data)){cnt++;}
  if(!patternE.test(data)){cnt++;}
  if(!patternD.test(data)){cnt++;}
  if((len>16)||(len<6)){cnt++;}

  if(cnt!=0){
    document.getElementById('ePW').innerHTML = "6~16자 영문 대 소문자, 숫자를 사용하세요.";
    PWVali = false;
  }
  else{
    PWVali = true;
    document.getElementById('ePW').innerHTML = "";
  }

  checking();
}

function checkEM(data)
{
  var pattern = /\w+@\w+\.\w+/;
  EMVali = pattern.test(data);

  if(!EMVali)
  {
    document.getElementById('eEMN').innerHTML = "알맞은 이메일 형식을 기입하세요.";
  }
  else
  {
    document.getElementById('eEMN').innerHTML = "";
  }

  checking();
}

function checkNick(data)
{
  var an = /^[^ㄱ-힣a-zA-Z0-9]*$/;
  if(data.lenth<2||data.length>12){NickVali=false;}
  else if(an.test(data)){NickVali=false;}
  else{NickVali=true;}

  if(!NickVali){  document.getElementById('eNick').innerHTML = "2~12자 영문 대 소문자, 한글, 숫자를 사용하세요.";}
  else{document.getElementById('eNick').innerHTML = "";}

  checking();
}

function checkN(data)
{
  var an = /^[^ㄱ-힣]*$/;

  if(data.length<2){NVali=false;}
  else{NVali=true;}
  if(an.test(data)){document.getElementById('eNAME').innerHTML = "올바른 이름을 기입하세요.";}
  else{document.getElementById('eNAME').innerHTML = "";}

  checking();
}

function checking()
{
  if(IDVali==true&&PWVali==true&&EMVali==true&&NVali==true&&NickVali==true)
  {
    document.getElementById('joinbutton').disabled = false;
  }
  else {
    document.getElementById('joinbutton').disabled = true;
  }
}

window.addEventListener("load", start, false);
