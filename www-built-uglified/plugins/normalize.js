define(["require","module"],function(e,t){function n(e,t,n){return e.match(/^\/|([^\:\/]*:)/)?e:s(r(e,t),n)}function r(e,t){e.substr(0,2)=="./"&&(e=e.substr(2));var n=t.split("/"),r=e.split("/");n.pop();while(curPart=r.shift())curPart==".."?n.pop():n.push(curPart);return n.join("/")}function s(e,t){var n=t.split("/");n.pop(),t=n.join("/")+"/",i=0;while(t.substr(i,1)==e.substr(i,1))i++;while(t.substr(i,1)!="/")i--;t=t.substr(i+1),e=e.substr(i+1),n=t.split("/");var r=e.split("/");out="";while(n.shift())out+="../";while(curPart=r.shift())out+=curPart+"/";return out.substr(0,out.length-1)}var o=function(e,t,r){var i=/(url\(\s*"(.*)"\s*\))|(url\(\s*'(.*)'\s*\))|(url\(\s*(.*)\s*\))/g,s,o,e;while(s=i.exec(e)){o=s[2]||s[4]||s[6];var u=n(o,t,r),a=s[2]||s[4]?1:0;e=e.substr(0,i.lastIndex-o.length-a-1)+u+e.substr(i.lastIndex-a-1),i.lastIndex=i.lastIndex+(u.length-o.length)}var f=/(@import\s*'(.*)')|(@import\s*"(.*)")/g;while(s=f.exec(e)){o=s[2]||s[4];var u=n(o,t,r);e=e.substr(0,f.lastIndex-o.length-1)+u+e.substr(f.lastIndex-1),f.lastIndex=f.lastIndex+(u.length-o.length)}return e};return o.convertURIBase=n,o});