const tools=[
{id:"json",name:"JSON Formatter",icon:"{} ",cat:"开发者",desc:"格式化、压缩和校验 JSON",kind:"json"},
{id:"base64",name:"Base64",icon:"🔤",cat:"编码",desc:"Base64 编码与解码",kind:"base64"},
{id:"url",name:"URL 编码",icon:"🔗",cat:"编码",desc:"URL Encode / Decode",kind:"url"},
{id:"jwt",name:"JWT Decoder",icon:"🎫",cat:"安全",desc:"在本地解析 JWT Payload",kind:"jwt"},
{id:"hash",name:"SHA-256",icon:"#️⃣",cat:"安全",desc:"生成 SHA-256 哈希",kind:"hash"},
{id:"uuid",name:"UUID Generator",icon:"🆔",cat:"开发者",desc:"生成随机 UUID",kind:"uuid"},
{id:"password",name:"密码生成器",icon:"🔐",cat:"安全",desc:"生成高强度随机密码",kind:"password"},
{id:"timestamp",name:"时间戳",icon:"⏱️",cat:"时间",desc:"Unix 时间戳转换",kind:"timestamp"},
{id:"regex",name:"Regex Tester",icon:"🔎",cat:"开发者",desc:"快速测试 JavaScript 正则",kind:"regex"},
{id:"text",name:"文本统计",icon:"📝",cat:"文本",desc:"统计字符、单词和行数",kind:"text"},
{id:"case",name:"大小写转换",icon:"Aa",cat:"文本",desc:"UPPER / lower / Title",kind:"case"},
{id:"diff",name:"文本 Diff",icon:"↔️",cat:"文本",desc:"快速比较两段文字",kind:"diff"},
{id:"qr",name:"QR Code",icon:"▦",cat:"图片",desc:"将文字生成二维码",kind:"qr"},
{id:"color",name:"颜色转换",icon:"🎨",cat:"转换",desc:"HEX / RGB 基础转换",kind:"color"},
{id:"html",name:"HTML Encode",icon:"</>",cat:"编码",desc:"HTML 实体编码与解码",kind:"html"},
{id:"random",name:"随机字符串",icon:"🎲",cat:"开发者",desc:"生成随机字符串",kind:"random"}
];
const cats=["全部",...new Set(tools.map(x=>x.cat))];
let active="全部", query="", favs=JSON.parse(localStorage.getItem("lw_favs")||"[]");
const $=s=>document.querySelector(s);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderCats(){$("#categories").innerHTML=cats.map(c=>`<button class="cat ${c===active?"active":""}" data-cat="${c}">${c}</button>`).join("");document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{active=b.dataset.cat;render()})}
function filtered(){return tools.filter(t=>(active==="全部"||t.cat===active)&&(`${t.name} ${t.desc} ${t.cat}`.toLowerCase().includes(query.toLowerCase())))}
function card(t){return `<article class="tool-card" data-id="${t.id}"><button class="fav ${favs.includes(t.id)?"on":""}" data-fav="${t.id}" title="收藏">${favs.includes(t.id)?"★":"☆"}</button><div class="tool-icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p></article>`}
function render(){renderCats();const list=filtered();$("#tools").innerHTML=list.length?list.map(card).join(""):`<div class="empty">没有找到匹配的工具</div>`;$("#resultCount").textContent=`${list.length} 个工具`;const fs=tools.filter(t=>favs.includes(t.id));$("#favCount").textContent=`${fs.length} 个`;$("#favorites").innerHTML=fs.length?fs.map(card).join(""):`<div class="empty">收藏工具后会显示在这里</div>`;bindCards()}
function bindCards(){document.querySelectorAll(".tool-card").forEach(c=>c.onclick=e=>{if(e.target.dataset.fav)return;openTool(c.dataset.id)});document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();const id=b.dataset.fav;favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];localStorage.setItem("lw_favs",JSON.stringify(favs));render()})}
function openTool(id){const t=tools.find(x=>x.id===id);$("#modalIcon").textContent=t.icon;$("#modalTitle").textContent=t.name;$("#modalDesc").textContent=t.desc;$("#toolBody").innerHTML=toolUI(t);$("#modal").classList.remove("hidden");wireTool(t.kind)}
function toolUI(k){if(k==="uuid")return `<div class="tool-form"><button class="btn" id="run">生成 UUID</button><div class="output" id="out">点击生成</div></div>`;
if(k==="password")return `<div class="tool-form"><input id="len" type="number" min="6" max="128" value="20"><div class="actions"><button class="btn" id="run">生成密码</button></div><div class="output" id="out"></div></div>`;
if(k==="timestamp")return `<div class="tool-form"><input id="ts" placeholder="留空使用当前时间戳"><div class="actions"><button class="btn" id="run">转换</button></div><div class="output" id="out"></div></div>`;
if(k==="hash")return `<div class="tool-form"><textarea id="input" placeholder="输入要计算 SHA-256 的内容"></textarea><div class="actions"><button class="btn" id="run">计算 Hash</button></div><div class="output" id="out"></div></div>`;
if(k==="text")return `<div class="tool-form"><textarea id="input" placeholder="输入文本"></textarea><div class="output" id="out">等待输入</div></div>`;
if(k==="case")return `<div class="tool-form"><textarea id="input" placeholder="输入文本"></textarea><div class="actions"><button class="btn" data-mode="upper">大写</button><button class="btn secondary" data-mode="lower">小写</button><button class="btn secondary" data-mode="title">首字母大写</button></div><div class="output" id="out"></div></div>`;
if(k==="random")return `<div class="tool-form"><input id="len" type="number" min="1" max="200" value="32"><div class="actions"><button class="btn" id="run">生成</button></div><div class="output" id="out"></div></div>`;
if(k==="jwt")return `<div class="tool-form"><textarea id="input" placeholder="粘贴 JWT"></textarea><div class="actions"><button class="btn" id="run">解析</button></div><div class="output" id="out"></div></div>`;
if(k==="json")return `<div class="tool-form"><textarea id="input" placeholder='{"name":"LoneWalkerLee","cloud":"Cloudflare"}'></textarea><div class="actions"><button class="btn" data-mode="pretty">格式化</button><button class="btn secondary" data-mode="min">压缩</button></div><div class="output" id="out"></div></div>`;
if(k==="base64")return `<div class="tool-form"><textarea id="input" placeholder="输入文本"></textarea><div class="actions"><button class="btn" data-mode="enc">编码</button><button class="btn secondary" data-mode="dec">解码</button></div><div class="output" id="out"></div></div>`;
if(k==="url")return `<div class="tool-form"><textarea id="input" placeholder="输入 URL 或文字"></textarea><div class="actions"><button class="btn" data-mode="enc">Encode</button><button class="btn secondary" data-mode="dec">Decode</button></div><div class="output" id="out"></div></div>`;
if(k==="html")return `<div class="tool-form"><textarea id="input" placeholder="输入 HTML / 实体"></textarea><div class="actions"><button class="btn" data-mode="enc">编码</button><button class="btn secondary" data-mode="dec">解码</button></div><div class="output" id="out"></div></div>`;
if(k==="regex")return `<div class="tool-form"><input id="pattern" placeholder="正则，例如 ^hello"><input id="input" placeholder="测试文本" style="margin-top:9px"><div class="actions"><button class="btn" id="run">测试</button></div><div class="output" id="out"></div></div>`;
if(k==="diff")return `<div class="tool-form"><textarea id="a" placeholder="原文本"></textarea><textarea id="b" placeholder="新文本" style="margin-top:9px"></textarea><div class="actions"><button class="btn" id="run">比较</button></div><div class="output" id="out"></div></div>`;
if(k==="color")return `<div class="tool-form"><input id="input" placeholder="#7f8cff"><div class="actions"><button class="btn" id="run">转换</button></div><div class="output" id="out"></div></div>`;
if(k==="qr")return `<div class="tool-form"><input id="input" placeholder="输入网址或文字"><div class="actions"><button class="btn" id="run">生成二维码</button></div><div id="out" class="output"></div><p class="result">二维码采用浏览器在线图片服务生成；不建议输入敏感内容。</p></div>`}
function wireTool(k){const out=$("#out"),input=$("#input");const run=$("#run");
if(input&&k==="text"){input.oninput=()=>{const s=input.value;out.textContent=`字符：${[...s].length}\n字节：${new Blob([s]).size}\n行数：${s?s.split(/\n/).length:0}\n非空字符：${s.replace(/\s/g,"").length}`}}
if(run)run.onclick=async()=>{try{
if(k==="uuid")out.textContent=crypto.randomUUID();
if(k==="password"){const n=+$("#len").value||20, chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";out.textContent=Array.from({length:n},()=>chars[Math.floor(Math.random()*chars.length)]).join("")}
if(k==="random"){const n=+$("#len").value||32, chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";out.textContent=Array.from({length:n},()=>chars[Math.floor(Math.random()*chars.length)]).join("")}
if(k==="timestamp"){const v=$("#ts").value.trim();if(v){const d=new Date(Number(v.length===10?v*1000:v));out.textContent=isNaN(d)?"无法解析":d.toLocaleString("zh-CN")+" | "+d.getTime()}else out.textContent=Date.now()+"\n"+new Date().toLocaleString("zh-CN")}
if(k==="hash"){const buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(input.value));out.textContent=[...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("")}
if(k==="jwt"){const p=input.value.split(".")[1];if(!p)throw Error("JWT 格式不正确");out.textContent=JSON.stringify(JSON.parse(atob(p.replace(/-/g,"+").replace(/_/g,"/"))),null,2)}
if(k==="regex"){const re=new RegExp($("#pattern").value);out.textContent=re.test(input.value)?"✅ 匹配":"❌ 不匹配"}
if(k==="diff"){const a=$("#a").value.split("\n"),b=$("#b").value.split("\n"),m=Math.max(a.length,b.length),r=[];for(let i=0;i<m;i++){if(a[i]===b[i])r.push("  "+(a[i]??""));else{if(a[i]!==undefined)r.push("- "+a[i]);if(b[i]!==undefined)r.push("+ "+b[i])}}out.textContent=r.join("\n")}
if(k==="color"){let h=input.value.trim().replace("#","");if(h.length===3)h=h.split("").map(x=>x+x).join("");const n=parseInt(h,16);out.textContent=`HEX: #${h}\nRGB: rgb(${n>>16&255}, ${n>>8&255}, ${n&255})`}
if(k==="qr"){out.innerHTML=`<img alt="QR Code" style="max-width:280px;background:#fff;padding:10px;border-radius:12px" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(input.value)}">`}
}catch(e){out.textContent="❌ "+e.message}}
document.querySelectorAll(".actions [data-mode]").forEach(b=>b.onclick=()=>{try{const s=input.value;if(k==="json")out.textContent=JSON.stringify(JSON.parse(s),null,b.dataset.mode==="pretty"?2:0);if(k==="base64")out.textContent=b.dataset.mode==="enc"?btoa(unescape(encodeURIComponent(s))):decodeURIComponent(escape(atob(s)));if(k==="url")out.textContent=b.dataset.mode==="enc"?encodeURIComponent(s):decodeURIComponent(s);if(k==="html"){const el=document.createElement("textarea");if(b.dataset.mode==="enc"){el.textContent=s;out.textContent=el.innerHTML}else{el.innerHTML=s;out.textContent=el.value}}if(k==="case"){out.textContent=b.dataset.mode==="upper"?s.toUpperCase():b.dataset.mode==="lower"?s.toLowerCase():s.replace(/\b\w/g,c=>c.toUpperCase())}}catch(e){out.textContent="❌ "+e.message}})}
$("#closeModal").onclick=()=>$("#modal").classList.add("hidden");$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.add("hidden")}}
$("#search").oninput=e=>{query=e.target.value;render()};document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#search").focus()}if(e.key==="Escape")$("#modal").classList.add("hidden")});
$("#themeBtn").onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("lw_theme",document.body.classList.contains("light")?"light":"dark");$("#themeBtn").textContent=document.body.classList.contains("light")?"🌙":"☀️"};if(localStorage.getItem("lw_theme")==="light"){$("body").classList.add("light");$("#themeBtn").textContent="🌙"}render();
