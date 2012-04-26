function pl_$(a){return document.getElementById("pl_"+a)}var pl_sampa={};window.onload=function(){function b(i,k){var j=document.getElementsByTagName("head")[0],h=document.createElement("script");h.type="text/javascript";h.src=i;h.onreadystatechange=k;h.onload=k;j.appendChild(h)}function a(){var n,k=lesson.length,j={de:"German",es:"Spanish",it:"Italian"},i="http://web.tiscali.it/insegnanteitaliano/audio";function m(o){var p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];o=new Date(o);return o.getDate()+" "+p[o.getMonth()]+" "+o.getFullYear()}function l(r){function q(x){return x instanceof Array?x:[x]}function p(x,y){x.play();if(y){x.onended=y}}function o(x){var y=0;function z(){if(y+1===x.length){p(x[y],null)}else{p(x[y],function(){y++;z()})}}if(x){z()}}function v(){function y(z){return[].slice.call(pl_$("definitions_"+z).getElementsByTagName("audio"))}var x;if(pl_$("l1").checked){x=y("l1")}if(e&&pl_$("l2").checked){if(x){x.concat(y("l2"))}else{x=y("l2")}}o(x)}function s(z,J,I){function D(M){var L="",N=["ogg","mp3"];for(var K=0;K<2;K++){L+='<source src="'+i+"/"+z+"/"+(audio?audio+"/":"")+encodeURIComponent(M.replace(/\?/g,"Q"))+"."+N[K]+'" type="audio/'+N[K]+'" />'}return L}function G(K){var L=pl_$("definitions_"+K);L.style.display="block";o(L.getElementsByTagName("audio"))}function x(Q,N){function P(R){return R.replace(/^[?!,.]+|[?!,.]+$/g,"")}var K="/",O=N.split(/\s+/);for(var M=0;M<O.length;M++){var L;if(typeof(L=pl_sampa[Q][P(O[M])])=="undefined"){L="?"}if(K!="/"){K+=" "}K+=L}return K+"/"}var E,B,A=z==lk,H;switch(z){case lk:B="lk";break;case l1:B="l1";break;case l2:B="l2";break;default:console.warn("Undefined lesson language "+z);return}if(A){E='<dt lang="'+z+'"><ul>'}else{E='<dd lang="'+z+'">';if((H=pl_$(B).checked)&&I){E+='<textarea rows="2" cols="40" autofocus="" placeholder="speak your answer and optionally write it here in '+j[z]+' and then compare"></textarea><button id="pl_check_'+B+'">check</button><ul id="pl_definitions_'+B+'" style="display: none">';setTimeout(function(){pl_$("check_"+B).onclick=function(){G(B)}},0)}else{E+='<ul id="pl_definitions_'+B+'">'}}J=q(J);for(var C=0;C<J.length;C++){var F=J[C];E+="<li>";if(A){E+=F}else{var y=z+C;E+='<audio id="'+y+'"'+(H?' preload="auto"':' preload="none"')+">"+D(F)+"</audio><button onclick=\"pl_$('"+y+"').play()\" title='"+x(z,J[C])+"'>"+J[C]+"</button>"}E+="</li>"}E+="</ul>"+(A?"</dt>":"</dd>");return E}function u(x){var z="";if(x){x=q(x);for(var y=0;y<x.length;y++){z+="<p>"+x[y]+"</p>"}}return z}pl_$("step").value=n=+r;if(n==1){pl_$("first").disabled=true;pl_$("previous").disabled=true}else{pl_$("first").disabled=false;pl_$("previous").disabled=false}if(n==k){pl_$("next").disabled=true;pl_$("last").disabled=true}else{pl_$("next").disabled=false;pl_$("last").disabled=false}var t=lesson[n-1],w;switch(t[0]){case"tra":w=true;case"def":pl_$("translations").innerHTML="<dl>"+s(lk,t[1])+s(l1,t[2],w)+(e?s(l2,t[3],w):"")+"</dl>";if(!w){setTimeout(function(){v()},1*1000)}pl_$("comments").innerHTML=u(t[e?4:3]);break;case"com":pl_$("translations").innerHTML="";pl_$("comments").innerHTML=u(t[1]);break;default:console.warn("Unknown slide type "+t[0])}}pl_$("first").onclick=function(){l(1);return false};pl_$("previous").onclick=function(){l(n-1);return false};pl_$("step_form").onsubmit=function(){l(pl_$("step").value);return false};pl_$("step").onclick=function(){this.select()};pl_$("step").onblur=function(){if(this.value<1||this.value>k){this.value=n}};pl_$("next").onclick=function(){l(n+1);return false};pl_$("last").onclick=function(){l(k);return false};pl_$("l1").onchange=function(){l(n)};if(e){pl_$("l2").onchange=function(){l(n)}}pl_$("step").min=1;pl_$("step").max=pl_$("steps").textContent=k;pl_$("ll1").textContent=j[l1];if(e){var h=pl_$("idx");if(h){h.setAttribute("href",l1+".html");h.textContent=j[l1]+"-"+j[l2]+" chat index"}}if(e){pl_$("ll2").textContent=j[l2]}pl_$("title").textContent=title;pl_$("date").setAttribute("datetime",date);pl_$("date").textContent=m(date);l(1)}var f=location.pathname,d=location.search.substring(1),g=f.lastIndexOf("/")+1,e,c="mini/sampa";if(d!=""){b(f.substr(g,f.lastIndexOf(".")-g)+"/"+location.search.substring(1)+".js",function(){b(c+"/"+l1+".js",function(){e=typeof l2!="undefined";if(e){b(c+"/"+l2+".js",a)}else{a()}})})}};