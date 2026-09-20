const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const CATS=[
 {id:"all",icon:"⌘",name:"全部工具"},
 {id:"favorites",icon:"⭐",name:"我的收藏"},
 {id:"recent",icon:"🕘",name:"最近使用"},
 {id:"text",icon:"📝",name:"文本工具"},
 {id:"encode",icon:"🔐",name:"编码 / 安全"},
 {id:"web",icon:"🌐",name:"网络 / Web"},
 {id:"dev",icon:"💻",name:"开发工具"},
 {id:"image",icon:"🖼️",name:"图片工具"},
 {id:"utility",icon:"🧮",name:"实用工具"}
];
const TOOLS=[
{id:"json",cat:"text",icon:"{}",name:"JSON 格式化",desc:"格式化、压缩、校验 JSON",tags:"json 格式化 压缩",featured:1},
{id:"base64",cat:"encode",icon:"64",name:"Base64",desc:"Base64 编码与解码",tags:"base64 编码 解码",featured:1},
{id:"url",cat:"encode",icon:"↗",name:"URL 编解码",desc:"URL encode / decode",tags:"url uri 编码",featured:1},
{id:"jwt",cat:"encode",icon:"🔑",name:"JWT Decoder",desc:"本地解析 JWT Header / Payload",tags:"jwt token",featured:1},
{id:"sha",cat:"encode",icon:"#",name:"SHA-256 / SHA-512",desc:"Web Crypto 本地哈希",tags:"sha hash 加密",featured:1},
{id:"uuid",cat:"utility",icon:"✦",name:"UUID 生成器",desc:"一键生成 UUID v4",tags:"uuid random",featured:1},
{id:"password",cat:"utility",icon:"⚿",name:"密码生成器",desc:"生成高强度随机密码",tags:"password 密码",featured:1},
{id:"timestamp",cat:"dev",icon:"◷",name:"时间戳转换",desc:"Unix 时间戳与日期互转",tags:"timestamp 时间",featured:1},
{id:"regex",cat:"dev",icon:".*",name:"Regex Tester",desc:"实时测试正则表达式",tags:"regex regexp 正则",featured:1},
{id:"textstats",cat:"text",icon:"Aa",name:"文本统计",desc:"字数、行数、字节数、词数",tags:"text 字数 统计",featured:1},
{id:"case",cat:"text",icon:"Aa",name:"大小写转换",desc:"UPPER / lower / Title",tags:"case 大小写",featured:1},
{id:"dedupe",cat:"text",icon:"≡",name:"文本去重排序",desc:"按行去重、排序、反转",tags:"duplicate sort 行",featured:0},
{id:"html",cat:"dev",icon:"<>",name:"HTML 编解码",desc:"HTML entity encode / decode",tags:"html entity",featured:0},
{id:"color",cat:"dev",icon:"🎨",name:"颜色转换",desc:"HEX / RGB / HSL 互转",tags:"color hex rgb hsl",featured:0},
{id:"random",cat:"utility",icon:"⚄",name:"随机字符串",desc:"自定义字符集生成随机串",tags:"random 随机",featured:0},
{id:"qr",cat:"utility",icon:"▦",name:"二维码",desc:"将文本或 URL 生成二维码",tags:"qr qrcode 二维码",featured:0},
{id:"diff",cat:"text",icon:"±",name:"文本 Diff",desc:"快速比较两段文本",tags:"diff compare 对比",featured:0},
{id:"ip",cat:"web",icon:"IP",name:"我的公网 IP",desc:"通过公共服务查看当前公网 IP",tags:"ip ipv4 ipv6",featured:0},
{id:"headers",cat:"web",icon:"HTTP",name:"HTTP Headers",desc:"查看当前浏览器请求头信息",tags:"http header user agent",featured:0},
{id:"urlparse",cat:"web",icon:"URL",name:"URL 解析器",desc:"拆解 URL 的协议、主机、参数",tags:"url parser",featured:0},
{id:"image",cat:"image",icon:"🖼",name:"图片尺寸 / 压缩",desc:"浏览器本地读取、缩放、导出图片",tags:"image compress resize",featured:0},
{id:"imgbase64",cat:"image",icon:"B64",name:"图片 ↔ Base64",desc:"本地图片与 Data URL 互转",tags:"image base64",featured:0},
{id:"units",cat:"utility",icon:"↔",name:"单位转换",desc:"长度、重量、温度快速换算",tags:"unit conversion",featured:0}
];
const state={fav:new Set(JSON.parse(localStorage.getItem("ll_fav")||"[]")),recent:JSON.parse(localStorage.getItem("ll_recent")||"[]"),theme:localStorage.getItem("ll_theme")||"dark"};
document.body.classList.toggle("dark",state.theme==="dark");
$("#year").textContent=new Date().getFullYear();

function save(){localStorage.setItem("ll_fav",JSON.stringify([...state.fav]));localStorage.setItem("ll_recent",JSON.stringify(state.recent));localStorage.setItem("ll_theme",state.theme)}
function toast(s){const e=document.createElement("div");e.className="toast";e.textContent=s;$("#toastWrap").append(e);setTimeout(()=>e.remove(),2200)}
function catName(id){return CATS.find(x=>x.id===id)?.name||"工具"}
function tool(id){return TOOLS.find(x=>x.id===id)}
function catNav(){
 $("#categoryNav").innerHTML=CATS.map(c=>`<button class="cat-btn" data-category="${c.id}"><span>${c.icon}</span>${c.name}</button>`).join("");
 $$(".cat-btn").forEach(b=>b.onclick=()=>showCategory(b.dataset.category));
}
function card(t){
 const on=state.fav.has(t.id);
 return `<article class="tool-card" data-tool="${t.id}">
 <button class="fav ${on?"on":""}" data-fav="${t.id}" title="收藏">${on?"★":"☆"}</button>
 <div class="tool-icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p><span class="tag">${catName(t.cat)}</span></article>`;
}
function bindCards(root=document){
 $$(root===document?".tool-card":root+" .tool-card").forEach(c=>c.onclick=e=>{if(e.target.closest("[data-fav]"))return;openTool(c.dataset.tool)});
 $$(root===document?"[data-fav]":root+" [data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(b.dataset.fav)});
}
function toggleFav(id){state.fav.has(id)?state.fav.delete(id):state.fav.add(id);save();renderAll();toast(state.fav.has(id)?"已加入收藏 ⭐":"已取消收藏")}
function renderHome(){
 const featured=TOOLS.filter(t=>t.featured).slice(0,8);
 $("#featuredGrid").innerHTML=featured.map(card).join("");
 const rec=state.recent.map(tool).filter(Boolean).slice(0,4);
 $("#recentGrid").innerHTML=rec.map(card).join("");
 $("#recentEmpty").classList.toggle("hidden",rec.length>0);
 $("#favCount").textContent=state.fav.size+" 个工具";
 $("#recentCount").textContent=rec.length?rec.length+" 个工具":"暂无记录";
 $("#toolCount").textContent=TOOLS.length+" 个工具";
 bindCards();
}
function showCategory(id){
 $("#homeView").classList.add("hidden");$("#listView").classList.remove("hidden");
 const map={all:["全部工具","全部工具都在这里"],favorites:["我的收藏","你收藏的趁手工具"],recent:["最近使用","刚刚用过的工具"]};
 let list,title,desc;
 if(id==="favorites"){list=TOOLS.filter(t=>state.fav.has(t.id));title=map[id][0];desc=map[id][1]}
 else if(id==="recent"){list=state.recent.map(tool).filter(Boolean);title=map[id][0];desc=map[id][1]}
 else {list=id==="all"?TOOLS:TOOLS.filter(t=>t.cat===id);title=id==="all"?map.all[0]:catName(id);desc=id==="all"?map.all[1]:`共 ${list.length} 个工具`}
 $("#listEyebrow").textContent=id.toUpperCase();$("#listTitle").textContent=title;$("#listDesc").textContent=desc;
 $("#listGrid").innerHTML=list.map(card).join("");$("#listEmpty").classList.toggle("hidden",list.length>0);
 $("#listEmpty").textContent=id==="favorites"?"还没有收藏工具。点卡片右上角 ☆ 收藏。":id==="recent"?"还没有使用记录。":"这个分类暂时没有工具。";
 bindCards("#listGrid");$$(".cat-btn").forEach(b=>b.classList.toggle("active",b.dataset.category===id));
}
function goHome(){$("#listView").classList.add("hidden");$("#homeView").classList.remove("hidden");$$(".cat-btn").forEach(b=>b.classList.toggle("active",b.dataset.category==="all"));renderHome()}
function renderAll(){renderHome();if(!$("#listView").classList.contains("hidden"))showCategory($(".cat-btn.active")?.dataset.category||"all");}
$("#homeBtn").onclick=goHome;
$("#themeBtn").onclick=()=>{state.theme=state.theme==="dark"?"light":"dark";document.body.classList.toggle("dark",state.theme==="dark");$("#themeBtn").textContent=state.theme==="dark"?"☀️":"🌙";save()};
$("#themeBtn").textContent=state.theme==="dark"?"☀️":"🌙";
$$(".quick-card,.text-btn").forEach(b=>b.onclick=()=>showCategory(b.dataset.category));

function addRecent(id){state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,8);save()}
function openTool(id){
 const t=tool(id);if(!t)return;addRecent(id);
 $("#modalIcon").textContent=t.icon;$("#modalTitle").textContent=t.name;$("#modalCategory").textContent=catName(t.cat);
 $("#modalFav").textContent=state.fav.has(id)?"★":"☆";$("#modalFav").onclick=()=>{toggleFav(id);$("#modalFav").textContent=state.fav.has(id)?"★":"☆"};
 $("#modalBody").innerHTML=toolUI(id);$("#toolModal").classList.remove("hidden");wireTool(id);renderHome();
}
$("#modalClose").onclick=()=>$("#toolModal").classList.add("hidden");
$("#toolModal").onclick=e=>{if(e.target===$("#toolModal"))$("#toolModal").classList.add("hidden")};
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openSearch()}if(e.key==="Escape"){$("#toolModal").classList.add("hidden");$("#searchModal").classList.add("hidden")}});

function copyText(v){navigator.clipboard?.writeText(v).then(()=>toast("已复制到剪贴板")).catch(()=>toast("复制失败，请手动复制"))}
function toolUI(id){
 const common=(a,b)=>`<div class="row"><button class="btn" id="${a[0]}">${a[1]}</button><button class="btn secondary" id="${b[0]}">${b[1]}</button></div>`;
 if(id==="json")return `<div class="field"><label>JSON 输入</label><textarea id="jsonIn" placeholder='{"hello":"LoneWalkerLee","ok":true}'></textarea></div>${common(["jsonFmt","格式化"],["jsonMin","压缩"])}<div class="field" style="margin-top:15px"><label>结果</label><div class="result" id="jsonOut"></div></div>`;
 if(id==="base64")return `<div class="field"><label>文本</label><textarea id="b64In" placeholder="输入文本…"></textarea></div>${common(["b64Enc","编码"],["b64Dec","解码"])}<div class="field" style="margin-top:15px"><label>结果</label><div class="result" id="b64Out"></div></div>`;
 if(id==="url")return `<div class="field"><label>文本 / URL</label><textarea id="urlIn" placeholder="https://example.com/a b?x=1"></textarea></div>${common(["urlEnc","URL 编码"],["urlDec","URL 解码"])}<div class="field" style="margin-top:15px"><div class="result" id="urlOut"></div></div>`;
 if(id==="jwt")return `<div class="field"><label>JWT</label><textarea id="jwtIn" placeholder="eyJhbGciOi..."></textarea></div><button class="btn" id="jwtGo">解析</button><div class="two" style="margin-top:15px"><div><label>Header</label><div class="result" id="jwtHead"></div></div><div><label>Payload</label><div class="result" id="jwtPayload"></div></div></div>`;
 if(id==="sha")return `<div class="field"><label>输入</label><textarea id="shaIn" placeholder="输入要计算哈希的文本"></textarea></div><div class="row"><select id="shaAlg"><option>SHA-256</option><option>SHA-512</option></select><button class="btn" id="shaGo">计算</button></div><div class="field" style="margin-top:15px"><div class="result" id="shaOut"></div></div>`;
 if(id==="uuid")return `<div class="field"><label>生成数量</label><input id="uuidN" type="number" min="1" max="50" value="5"></div><button class="btn" id="uuidGo">生成 UUID</button><div class="field" style="margin-top:15px"><div class="result" id="uuidOut"></div></div>`;
 if(id==="password")return `<div class="two"><div class="field"><label>长度</label><input id="pwLen" type="number" min="4" max="128" value="20"></div><div class="field"><label>数量</label><input id="pwN" type="number" min="1" max="30" value="5"></div></div><div class="row" style="margin-bottom:15px"><label class="check"><input id="pwLower" type="checkbox" checked> 小写</label><label class="check"><input id="pwUpper" type="checkbox" checked> 大写</label><label class="check"><input id="pwNum" type="checkbox" checked> 数字</label><label class="check"><input id="pwSym" type="checkbox" checked> 符号</label></div><button class="btn" id="pwGo">生成密码</button><div class="field" style="margin-top:15px"><div class="result" id="pwOut"></div></div>`;
 if(id==="timestamp")return `<div class="two"><div class="field"><label>Unix 时间戳（秒）</label><input id="tsIn" placeholder="例如 1789785600"><button class="btn" id="tsDate" style="margin-top:8px">→ 转日期</button></div><div class="field"><label>日期</label><input id="dateIn" type="datetime-local"><button class="btn" id="dateTs" style="margin-top:8px">→ 转时间戳</button></div></div><div class="result" id="tsOut"></div>`;
 if(id==="regex")return `<div class="two"><div class="field"><label>正则</label><input id="rePat" placeholder="\\d+"></div><div class="field"><label>Flags</label><input id="reFlags" value="g"></div></div><div class="field"><label>测试文本</label><textarea id="reText"></textarea></div><button class="btn" id="reGo">测试</button><div class="result" id="reOut" style="margin-top:15px"></div>`;
 if(id==="textstats")return `<div class="field"><label>文本</label><textarea id="statIn" placeholder="粘贴文本…"></textarea></div><div class="stat-grid" id="statOut"></div>`;
 if(id==="case")return `<div class="field"><label>文本</label><textarea id="caseIn"></textarea></div><div class="row"><button class="btn" id="upper">UPPERCASE</button><button class="btn secondary" id="lower">lowercase</button><button class="btn secondary" id="title">Title Case</button></div><div class="result" id="caseOut" style="margin-top:15px"></div>`;
 if(id==="dedupe")return `<div class="field"><label>每行一项</label><textarea id="dedupeIn"></textarea></div><div class="row"><button class="btn" id="dedupeGo">去重</button><button class="btn secondary" id="sortGo">去重 + 排序</button><button class="btn secondary" id="reverseGo">反转</button></div><div class="result" id="dedupeOut" style="margin-top:15px"></div>`;
 if(id==="html")return `<div class="field"><label>HTML / 文本</label><textarea id="htmlIn"></textarea></div>${common(["htmlEnc","编码"],["htmlDec","解码"])}<div class="result" id="htmlOut" style="margin-top:15px"></div>`;
 if(id==="color")return `<div class="two"><div class="field"><label>HEX</label><input id="hexIn" value="#5865f2"></div><div class="field"><label>RGB</label><input id="rgbIn" placeholder="88, 101, 242"></div></div><div class="row"><button class="btn" id="hexRgb">HEX → RGB</button><button class="btn secondary" id="rgbHex">RGB → HEX</button></div><div class="color-preview" id="colorPrev" style="margin-top:15px">预览</div><div class="result" id="colorOut" style="margin-top:10px"></div>`;
 if(id==="random")return `<div class="two"><div class="field"><label>长度</label><input id="randLen" type="number" min="1" max="500" value="32"></div><div class="field"><label>数量</label><input id="randN" type="number" min="1" max="30" value="5"></div></div><div class="field"><label>字符集</label><input id="randChars" value="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"></div><button class="btn" id="randGo">生成</button><div class="result" id="randOut" style="margin-top:15px"></div>`;
 if(id==="qr")return `<div class="field"><label>内容</label><textarea id="qrIn" placeholder="输入 URL 或文本。二维码由第三方公共服务生成，请勿输入敏感信息。"></textarea></div><button class="btn" id="qrGo">生成二维码</button><div id="qrOut"></div>`;
 if(id==="diff")return `<div class="two"><div class="field"><label>文本 A</label><textarea id="diffA"></textarea></div><div class="field"><label>文本 B</label><textarea id="diffB"></textarea></div></div><button class="btn" id="diffGo">比较</button><div class="diff" id="diffOut" style="margin-top:15px"></div>`;
 if(id==="ip")return `<div class="field"><label>公网 IP</label><div class="result" id="ipOut">点击查询。该功能会请求公共 IP 服务。</div></div><button class="btn" id="ipGo">查询公网 IP</button>`;
 if(id==="headers")return `<div class="result" id="headersOut"></div>`;
 if(id==="urlparse")return `<div class="field"><label>URL</label><input id="parseIn" placeholder="https://example.com/path?a=1#top"></div><button class="btn" id="parseGo">解析</button><div class="result" id="parseOut" style="margin-top:15px"></div>`;
 if(id==="image")return `<div class="dropzone"><label for="imgFile">📷 选择图片<br><small>图片只在浏览器中处理</small></label><input id="imgFile" type="file" accept="image/*"></div><div class="two" style="margin-top:15px"><div class="field"><label>宽度</label><input id="imgW" type="number"></div><div class="field"><label>质量（JPG/WebP）</label><input id="imgQ" type="number" min=".1" max="1" step=".05" value=".85"></div></div><button class="btn" id="imgGo">压缩 / 导出 WebP</button><div class="result" id="imgOut" style="margin-top:15px"></div>`;
 if(id==="imgbase64")return `<div class="dropzone"><label for="ibFile">🖼️ 选择图片转 Base64</label><input id="ibFile" type="file" accept="image/*"></div><div class="field" style="margin-top:15px"><textarea id="ibOut" placeholder="Base64 结果"></textarea></div><button class="btn secondary" id="ibCopy">复制</button>`;
 if(id==="units")return `<div class="two"><div class="field"><label>数值</label><input id="uVal" type="number" value="1"></div><div class="field"><label>类别</label><select id="uType"><option value="length">长度</option><option value="weight">重量</option><option value="temp">温度</option></select></div></div><div class="two"><select id="uFrom"></select><select id="uTo"></select></div><button class="btn" id="uGo" style="margin-top:12px">转换</button><div class="result" id="uOut" style="margin-top:15px"></div>`;
 return `<div class="empty">这个工具正在施工中 🚧</div>`;
}
function wireTool(id){
 if(id==="json"){const run=min=>{try{$("#jsonOut").textContent=JSON.stringify(JSON.parse($("#jsonIn").value),null,min?0:2)}catch(e){$("#jsonOut").textContent="❌ "+e.message}};$("#jsonFmt").onclick=()=>run(false);$("#jsonMin").onclick=()=>run(true)}
 if(id==="base64"){const enc=s=>btoa(unescape(encodeURIComponent(s)));const dec=s=>decodeURIComponent(escape(atob(s)));$("#b64Enc").onclick=()=>{try{$("#b64Out").textContent=enc($("#b64In").value)}catch(e){$("#b64Out").textContent="❌ "+e.message}};$("#b64Dec").onclick=()=>{try{$("#b64Out").textContent=dec($("#b64In").value)}catch(e){$("#b64Out").textContent="❌ Base64 无效"}}}
 if(id==="url"){$("#urlEnc").onclick=()=>$("#urlOut").textContent=encodeURIComponent($("#urlIn").value);$("#urlDec").onclick=()=>{try{$("#urlOut").textContent=decodeURIComponent($("#urlIn").value)}catch(e){$("#urlOut").textContent="❌ 解码失败"}}}
 if(id==="jwt")$("#jwtGo").onclick=()=>{try{const parts=$("#jwtIn").value.split(".");const h=atob(parts[0].replace(/-/g,"+").replace(/_/g,"/"));const p=atob(parts[1].replace(/-/g,"+").replace(/_/g,"/"));$("#jwtHead").textContent=JSON.stringify(JSON.parse(h),null,2);$("#jwtPayload").textContent=JSON.stringify(JSON.parse(p),null,2)}catch(e){$("#jwtHead").textContent="❌ JWT 格式无效";$("#jwtPayload").textContent=""}}
 if(id==="sha")$("#shaGo").onclick=async()=>{const data=new TextEncoder().encode($("#shaIn").value),buf=await crypto.subtle.digest($("#shaAlg").value,data);$("#shaOut").textContent=[...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,"0")).join("")};
 if(id==="uuid")$("#uuidGo").onclick=()=>$("#uuidOut").textContent=Array.from({length:Math.min(50,+$("#uuidN").value||1)},()=>crypto.randomUUID()).join("\n");
 if(id==="password")$("#pwGo").onclick=()=>{let chars="";if($("#pwLower").checked)chars+="abcdefghijklmnopqrstuvwxyz";if($("#pwUpper").checked)chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";if($("#pwNum").checked)chars+="0123456789";if($("#pwSym").checked)chars+="!@#$%^&*()-_=+[]{}";if(!chars)return toast("至少选择一种字符集");const a=[];for(let n=0;n<Math.min(30,+$("#pwN").value||1);n++){let s="";const arr=new Uint32Array(+$("#pwLen")?.value||20);crypto.getRandomValues(arr);for(const x of arr)s+=chars[x%chars.length];a.push(s.slice(0,+$("#pwLen").value||20))}$("#pwOut").textContent=a.join("\n")};
 if(id==="timestamp"){const refresh=()=>{$("#tsOut").textContent="当前时间："+new Date().toLocaleString()+"\n当前 Unix 秒："+Math.floor(Date.now()/1000)+"\n当前 Unix 毫秒："+Date.now()};$("#tsDate").onclick=()=>{$("#tsOut").textContent=new Date(Number($("#tsIn").value)*1000).toLocaleString()+"\nISO: "+new Date(Number($("#tsIn").value)*1000).toISOString()};$("#dateTs").onclick=()=>{$("#tsOut").textContent=Math.floor(new Date($("#dateIn").value).getTime()/1000)+" 秒\n"+new Date($("#dateIn").value).getTime()+" 毫秒"};refresh()}
 if(id==="regex")$("#reGo").onclick=()=>{try{const r=new RegExp($("#rePat").value,$("#reFlags").value),m=[...$("#reText").value.matchAll(r)];$("#reOut").textContent=m.length?m.map((x,i)=>`${i+1}. ${x[0]} @ ${x.index}`).join("\n"):"无匹配"}catch(e){$("#reOut").textContent="❌ "+e.message}}
 if(id==="textstats"){const calc=()=>{const s=$("#statIn").value;const bytes=new Blob([s]).size;$("#statOut").innerHTML=`<div class="stat"><b>${s.length}</b><small>字符</small></div><div class="stat"><b>${s.split(/\r?\n/).length}</b><small>行</small></div><div class="stat"><b>${bytes}</b><small>UTF-8 字节</small></div><div class="stat"><b>${s.trim()?s.trim().split(/\s+/).length:0}</b><small>词</small></div>`};$("#statIn").oninput=calc;calc()}
 if(id==="case"){const out=()=>$("#caseOut").textContent;$("#upper").onclick=()=>out($("#caseIn").value.toUpperCase());$("#lower").onclick=()=>out($("#caseIn").value.toLowerCase());$("#title").onclick=()=>out($("#caseIn").value.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()))}
 if(id==="dedupe"){const lines=()=>$("#dedupeIn").value.split(/\r?\n/).filter(x=>x.length);$("#dedupeGo").onclick=()=>$("#dedupeOut").textContent=[...new Set(lines())].join("\n");$("#sortGo").onclick=()=>$("#dedupeOut").textContent=[...new Set(lines())].sort((a,b)=>a.localeCompare(b)).join("\n");$("#reverseGo").onclick=()=>$("#dedupeOut").textContent=lines().reverse().join("\n")}
 if(id==="html"){const box=document.createElement("textarea");$("#htmlEnc").onclick=()=>{$("#htmlOut").textContent=$("#htmlIn").value.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))};$("#htmlDec").onclick=()=>{box.innerHTML=$("#htmlIn").value;$("#htmlOut").textContent=box.value||box.textContent}}
 if(id==="color"){const set=(hex,rgb)=>{$("#colorPrev").style.background=hex;$("#colorOut").textContent=`HEX: ${hex}\nRGB: ${rgb}`};$("#hexRgb").onclick=()=>{let h=$("#hexIn").value.trim().replace("#","");if(h.length===3)h=h.split("").map(x=>x+x).join("");if(!/^[0-9a-f]{6}$/i.test(h))return toast("HEX 格式不正确");const r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4),16);set("#"+h,`${r}, ${g}, ${b}`)};$("#rgbHex").onclick=()=>{const m=$("#rgbIn").value.match(/\d+/g);if(!m||m.length<3)return toast("RGB 格式不正确");const h="#"+m.slice(0,3).map(x=>(+x).toString(16).padStart(2,"0")).join("");set(h,m.slice(0,3).join(", "))}}
 if(id==="random")$("#randGo").onclick=()=>{const chars=$("#randChars").value||"abc123",n=Math.min(30,+$("#randN").value||1),len=Math.min(500,+$("#randLen").value||32);let out=[];for(let i=0;i<n;i++){const a=new Uint32Array(len);crypto.getRandomValues(a);out.push([...a].map(x=>chars[x%chars.length]).join(""))}$("#randOut").textContent=out.join("\n")}
 if(id==="qr")$("#qrGo").onclick=()=>{const v=$("#qrIn").value;if(!v)return;$("#qrOut").innerHTML=`<img class="qr-img" alt="QR Code" src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(v)}"><div class="result">二维码由 api.qrserver.com 生成。敏感内容请勿使用。</div>`}
 if(id==="diff")$("#diffGo").onclick=()=>{const a=$("#diffA").value.split(/\r?\n/),b=$("#diffB").value.split(/\r?\n/),setB=new Set(b);$("#diffOut").innerHTML=`<pre>${a.map(x=>(setB.has(x)?"  ":"− ")+esc(x)).join("\n")}</pre><pre>${b.map(x=>(a.includes(x)?"  ":"+ ")+esc(x)).join("\n")}</pre>`}
 if(id==="ip")$("#ipGo").onclick=async()=>{try{$("#ipOut").textContent=await (await fetch("https://api.ipify.org?format=json")).then(r=>r.json()).then(x=>x.ip)}catch(e){$("#ipOut").textContent="查询失败"}}
 if(id==="headers")$("#headersOut").textContent=[["User-Agent",navigator.userAgent],["Language",navigator.language],["Platform",navigator.platform],["Online",navigator.onLine]].map(x=>x[0]+": "+x[1]).join("\n");
 if(id==="urlparse")$("#parseGo").onclick=()=>{try{const u=new URL($("#parseIn").value);$("#parseOut").textContent=`protocol: ${u.protocol}\nhost: ${u.host}\nhostname: ${u.hostname}\nport: ${u.port||"(default)"}\npathname: ${u.pathname}\nsearch: ${u.search}\nhash: ${u.hash}\norigin: ${u.origin}\nparams:\n${[...u.searchParams].map(x=>"  "+x[0]+" = "+x[1]).join("\n")}`}catch(e){$("#parseOut").textContent="❌ URL 无效"}}
 if(id==="image"){let file,img;$("#imgFile").onchange=e=>{file=e.target.files[0];if(!file)return;img=new Image();img.onload=()=>{$("#imgW").value=img.width;$("#imgOut").textContent=`原始：${img.width}×${img.height} · ${(file.size/1024).toFixed(1)} KB`};img.src=URL.createObjectURL(file)};$("#imgGo").onclick=()=>{if(!img)return toast("先选择图片");const w=Math.max(1,+$("#imgW").value||img.width),h=Math.round(img.height*w/img.width),c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(img,0,0,w,h);c.toBlob(blob=>{const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="lonewalkerlee-image.webp";a.click();$("#imgOut").textContent+=`\n导出：${w}×${h} · ${(blob.size/1024).toFixed(1)} KB`},"image/webp",Math.min(1,Math.max(.1,+$("#imgQ").value||.85)))}}
 if(id==="imgbase64"){$("#ibFile").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>$("#ibOut").value=r.result;r.readAsDataURL(f)};$("#ibCopy").onclick=()=>copyText($("#ibOut").value)}
 if(id==="units"){const units={length:{m:1,km:1000,cm:.01,mm:.001,ft:.3048,in:.0254},weight:{kg:1,g:.001,lb:.45359237,oz:.0283495},temp:{C:1,F:1,K:1}};const names={length:{m:"米",km:"千米",cm:"厘米",mm:"毫米",ft:"英尺",in:"英寸"},weight:{kg:"千克",g:"克",lb:"磅",oz:"盎司"},temp:{C:"摄氏",F:"华氏",K:"开尔文"}};function fill(){const type=$("#uType").value,a=Object.keys(units[type]);$("#uFrom").innerHTML=a.map(x=>`<option value="${x}">${names[type][x]}</option>`).join("");$("#uTo").innerHTML=a.map(x=>`<option value="${x}">${names[type][x]}</option>`).join("")}$("#uType").onchange=fill;fill();$("#uGo").onclick=()=>{const type=$("#uType").value,v=+$("#uVal").value,f=$("#uFrom").value,t=$("#uTo").value;let out;if(type==="temp"){let c=f==="C"?v:f==="F"?(v-32)*5/9:v-273.15;out=t==="C"?c:t==="F"?c*9/5+32:c+273.15}else out=v*units[type][f]/units[type][t];$("#uOut").textContent=`${v} ${names[type][f]} = ${out} ${names[type][t]}`}}
}
function esc(s){return s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}

function openSearch(){ $("#searchModal").classList.remove("hidden");$("#searchInput").value="";$("#searchInput").focus();renderSearch("")}
$("#searchBtn").onclick=openSearch;$("#heroSearch").onclick=openSearch;$("#searchModal").onclick=e=>{if(e.target===$("#searchModal"))$("#searchModal").classList.add("hidden")};
$("#searchInput").oninput=e=>renderSearch(e.target.value);
function renderSearch(q){const s=q.trim().toLowerCase(),list=TOOLS.filter(t=>!s||[t.name,t.desc,t.tags,catName(t.cat)].join(" ").toLowerCase().includes(s)).slice(0,10);$("#searchResults").innerHTML=list.length?list.map(t=>`<button class="search-result" data-s="${t.id}"><span class="mini">${t.icon}</span><span><b>${t.name}</b><small>${t.desc}</small></span></button>`).join(""):`<div class="empty">没有找到「${esc(q)}」</div>`;$$("[data-s]").forEach(b=>b.onclick=()=>{$("#searchModal").classList.add("hidden");openTool(b.dataset.s)})}

catNav();renderHome();
$$(".cat-btn").forEach(b=>b.classList.toggle("active",b.dataset.category==="all"));
