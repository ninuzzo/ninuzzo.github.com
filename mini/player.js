function pl_$(a){return document.getElementById("pl_"+a)}var pl_sampa={};window.addEventListener("DOMContentLoaded",function(){function b(j,l){var k=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript";i.src=j;i.onreadystatechange=l;i.onload=l;k.appendChild(i)}function a(){var n,k=lesson.length,j={de:"German",es:"Spanish",it:"Italian"};function o(){var q=[],u;for(var t=1;t<=k;t++){var p=lesson[t-1],s=p[0],r;switch(s){case"tra":case"def":r=f?5:4;break;case"com":r=2;break;default:q.push("Unknown slide type "+s);continue}if(p[r]){q.push("Unused argument on "+s+" slide #"+t)}}if(u=q.join("\n")){alert(u)}}function m(p){var q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];p=new Date(p);return p.getDate()+" "+q[p.getMonth()]+" "+p.getFullYear()}function l(s){function r(y){return y instanceof Array?y:[y]}function q(y,z){y.play();if(z){y.onended=z}}function p(y){var z=0;function A(){if(z+1===y.length){q(y[z],null)}else{q(y[z],function(){z++;A()})}}if(y){A()}}function w(){function z(A){return[].slice.call(pl_$("definitions_"+A).getElementsByTagName("audio"))}var y;if(pl_$("l1").checked){y=z("l1")}if(f&&pl_$("l2").checked){if(y){y.concat(z("l2"))}else{y=z("l2")}}p(y)}function t(A,K,J){function E(N){var M="",O=["ogg","mp3"];for(var L=0;L<2;L++){M+='<source src="'+c+"/"+A+"/"+(typeof audio_dir!="undefined"?audio_dir+"/":"")+N[0]+"/"+(N[1]?N[1]+"/":"")+encodeURIComponent(N.replace(/\?/g,"Q"))+"."+O[L]+'" type="audio/'+O[L]+'" />'}return M}function H(L){var M=pl_$("definitions_"+L);M.style.display="block";p(M.getElementsByTagName("audio"))}function y(R,O){function Q(S){return S.replace(/^[?!,.]+|[?!,.]+$/g,"")}var L="/",P=O.split(/\s+/);for(var N=0;N<P.length;N++){var M;if(typeof(M=pl_sampa[R][Q(P[N]).toLowerCase()])=="undefined"){M="?"}if(L!="/"){L+=" "}L+=M}return L+"/"}var F,C,B=A==lk,I;switch(A){case lk:C="lk";break;case l1:C="l1";break;case l2:C="l2";break;default:console.warn("Undefined lesson language "+A);return}if(B){F='<dt lang="'+A+'"><ul>'}else{F='<dd lang="'+A+'">';if((I=pl_$(C).checked)&&J){F+='<textarea rows="2" cols="40" autofocus="" placeholder="speak your answer and optionally write it here in '+j[A]+' and then compare"></textarea><button id="pl_check_'+C+'">check</button><ul id="pl_definitions_'+C+'" style="display: none">';setTimeout(function(){pl_$("check_"+C).onclick=function(){H(C)}},0)}else{F+='<ul id="pl_definitions_'+C+'">'}}K=r(K);for(var D=0;D<K.length;D++){var G=K[D];F+="<li>";if(B){F+=G}else{var z=A+D;F+='<audio id="pl_'+z+'"'+(I?' preload="auto"':' preload="none"')+">"+E(G)+"</audio><button onclick=\"pl_$('"+z+"').play()\" title='"+y(A,K[D])+"'>"+K[D]+"</button>"}F+="</li>"}F+="</ul>"+(B?"</dt>":"</dd>");return F}function v(y){var A="";if(y){y=r(y);for(var z=0;z<y.length;z++){A+="<p>"+y[z]+"</p>"}}return A}pl_$("step").value=n=+s;if(n==1){pl_$("first").disabled=true;pl_$("previous").disabled=true}else{pl_$("first").disabled=false;pl_$("previous").disabled=false}if(n==k){pl_$("next").disabled=true;pl_$("last").disabled=true}else{pl_$("next").disabled=false;pl_$("last").disabled=false}var u=lesson[n-1],x;switch(u[0]){case"tra":x=true;case"def":pl_$("translations").innerHTML="<dl>"+t(lk,u[1])+t(l1,u[2],x)+(f?t(l2,u[3],x):"")+"</dl>";if(!x){setTimeout(function(){w()},1*1000)}pl_$("comments").innerHTML=v(u[f?4:3]);break;case"com":pl_$("translations").innerHTML="";pl_$("comments").innerHTML=v(u[1]);break}}o();pl_$("first").onclick=function(){l(1);return false};pl_$("previous").onclick=function(){l(n-1);return false};pl_$("step_form").onsubmit=function(){l(pl_$("step").value);return false};pl_$("step").onclick=function(){this.select()};pl_$("step").onblur=function(){if(this.value<1||this.value>k){this.value=n}};pl_$("next").onclick=function(){l(n+1);return false};pl_$("last").onclick=function(){l(k);return false};pl_$("l1").onchange=function(){l(n)};if(f){pl_$("l2").onchange=function(){l(n)}}pl_$("step").min=1;pl_$("step").max=pl_$("steps").textContent=k;pl_$("ll1").textContent=j[l1];if(f){var i=pl_$("idx");if(i){i.setAttribute("href",l1+".html");i.textContent=j[l1]+"-"+j[l2]+" chat index"}}if(f){pl_$("ll2").textContent=j[l2]}pl_$("title").textContent=title;pl_$("date").setAttribute("datetime",date);pl_$("date").textContent=m(date);l(1)}var c="audio",e="mini/sampa";var g=location.pathname,d=location.search.substring(1),h=g.lastIndexOf("/")+1,f;if(d!=""){b(g.substr(h,g.lastIndexOf(".")-h)+"/"+location.search.substring(1)+".js",function(){b(e+"/"+l1+".js",function(){f=typeof l2!="undefined";if(f){b(e+"/"+l2+".js",a)}else{a()}})})}},false);