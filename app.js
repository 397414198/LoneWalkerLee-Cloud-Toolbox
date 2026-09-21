const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

const CATS = [
  {id:"all", icon:"⌘", name:"全部工具"},
  {id:"favorites", icon:"⭐", name:"我的收藏"},
  {id:"recent", icon:"🕘", name:"最近使用"},
  {id:"text", icon:"📝", name:"文本工具"},
  {id:"encode", icon:"🔐", name:"编码 / 安全"},
  {id:"web", icon:"🌐", name:"网络 / Web"},
  {id:"dev", icon:"💻", name:"开发工具"},
  {id:"image", icon:"🖼️", name:"图片工具"},
  {id:"design", icon:"🎨", name:"设计 / 颜色"},
  {id:"math", icon:"∑", name:"数学工具"},
  {id:"time", icon:"⏰", name:"时间 / 日期"},
  {id:"fun", icon:"🎮", name:"趣味 / 随机"},
  {id:"life", icon:"🏠", name:"生活助手"},
  {id:"office", icon:"📎", name:"办公效率"},
  {id:"health", icon:"💪", name:"健康运动"},
  {id:"security", icon:"🛡️", name:"安全检测"},
  {id:"edu", icon:"📚", name:"学习教育"},
  {id:"finance", icon:"💳", name:"理财记账"},
  {id:"travel", icon:"✈️", name:"出行旅行"},
  {id:"food", icon:"🍳", name:"美食烹饪"},
  {id:"social", icon:"💬", name:"社交文案"},
  {id:"game", icon:"🕹️", name:"小游戏"},
  {id:"legal", icon:"⚖️", name:"法律 / 合同"},
  {id:"music", icon:"🎵", name:"音乐 / 音频"},
  {id:"photo", icon:"📷", name:"摄影参数"},
  {id:"sport", icon:"⚽", name:"体育 / 赛事"},
  {id:"pet", icon:"🐾", name:"宠物养育"},
  {id:"utility", icon:"🧮", name:"实用工具"},
  {id:"convert", icon:"🔄", name:"转换工具"},
  {id:"calc", icon:"📐", name:"计算工具"}
];

const TOOLS = [
  // ========== 文本工具 ==========
  {id:"json", cat:"text", icon:"{}", name:"JSON 格式化", desc:"格式化、压缩、校验 JSON", tags:"json 格式化 压缩", featured:1},
  {id:"textstats", cat:"text", icon:"Aa", name:"文本统计", desc:"字数、行数、字节数、词数", tags:"text 字数 统计", featured:1},
  {id:"case", cat:"text", icon:"Aa", name:"大小写转换", desc:"UPPER / lower / Title / camel / snake", tags:"case 大小写", featured:1},
  {id:"dedupe", cat:"text", icon:"≡", name:"文本去重排序", desc:"按行去重、排序、反转、去空行", tags:"duplicate sort 行", featured:0},
  {id:"diff", cat:"text", icon:"±", name:"文本 Diff", desc:"快速比较两段文本差异", tags:"diff compare 对比", featured:0},
  {id:"slug", cat:"text", icon:"#", name:"Slug 生成", desc:"中英文转 URL 友好 slug", tags:"slug url 中文", featured:0},
  {id:"wordfreq", cat:"text", icon:"📊", name:"词频统计", desc:"统计文本中单词出现次数", tags:"word frequency 词频", featured:0},
  {id:"markdown", cat:"text", icon:"MD", name:"Markdown 预览", desc:"实时 Markdown 转 HTML 预览", tags:"markdown md 预览", featured:1},
  {id:"findreplace", cat:"text", icon:"🔍", name:"查找替换", desc:"文本批量查找与替换", tags:"find replace 替换", featured:0},
  {id:"reverse", cat:"text", icon:"⇄", name:"文本反转", desc:"字符串反转 / 按行反转", tags:"reverse 反转", featured:0},
  {id:"linenumber", cat:"text", icon:"#", name:"添加行号", desc:"给文本每行添加序号", tags:"line number 行号", featured:0},
  {id:"morse", cat:"text", icon:"·−", name:"摩斯密码", desc:"文本与摩斯密码互转", tags:"morse 摩斯", featured:0},
  {id:"rot13", cat:"text", icon:"13", name:"ROT13 / 凯撒", desc:"ROT13 与凯撒密码加解密", tags:"rot13 caesar 凯撒", featured:0},
  {id:"textbin", cat:"text", icon:"01", name:"文本 ↔ 二进制", desc:"文本与二进制字符串互转", tags:"binary 二进制", featured:0},

  // ========== 编码 / 安全 ==========
  {id:"base64", cat:"encode", icon:"64", name:"Base64", desc:"Base64 编码与解码（支持中文）", tags:"base64 编码 解码", featured:1},
  {id:"url", cat:"encode", icon:"↗", name:"URL 编解码", desc:"URL encode / decode", tags:"url uri 编码", featured:1},
  {id:"jwt", cat:"encode", icon:"🔑", name:"JWT Decoder", desc:"本地解析 JWT Header / Payload", tags:"jwt token", featured:1},
  {id:"sha", cat:"encode", icon:"#", name:"哈希计算", desc:"SHA-1 / SHA-256 / SHA-512 / MD5", tags:"sha hash md5 加密", featured:1},
  {id:"html", cat:"encode", icon:"<>", name:"HTML 编解码", desc:"HTML entity encode / decode", tags:"html entity", featured:0},
  {id:"aes", cat:"encode", icon:"🔒", name:"AES 加解密", desc:"AES-GCM 本地加密解密（Web Crypto）", tags:"aes encrypt decrypt", featured:0},
  {id:"hmac", cat:"encode", icon:"🔏", name:"HMAC 签名", desc:"HMAC-SHA256 本地签名", tags:"hmac signature", featured:0},
  {id:"pwcheck", cat:"encode", icon:"💪", name:"密码强度检测", desc:"检测密码强度并给出建议", tags:"password strength 强度", featured:0},
  {id:"hashcmp", cat:"encode", icon:"⇔", name:"哈希对比", desc:"对比两个哈希值是否一致", tags:"hash compare", featured:0},

  // ========== 网络 / Web ==========
  {id:"ip", cat:"web", icon:"IP", name:"我的公网 IP", desc:"查询当前公网 IP 地址", tags:"ip ipv4 ipv6", featured:0},
  {id:"headers", cat:"web", icon:"HTTP", name:"HTTP Headers", desc:"查看当前浏览器请求头", tags:"http header user agent", featured:0},
  {id:"urlparse", cat:"web", icon:"URL", name:"URL 解析器", desc:"拆解协议、主机、参数等", tags:"url parser", featured:0},
  {id:"cidr", cat:"web", icon:"🌐", name:"CIDR 计算器", desc:"计算子网掩码、可用 IP 范围", tags:"cidr subnet 子网", featured:0},
  {id:"useragent", cat:"web", icon:"UA", name:"User-Agent 解析", desc:"解析当前或自定义 UA 信息", tags:"useragent ua 浏览器", featured:0},
  {id:"meta", cat:"web", icon:"🏷️", name:"Meta 标签生成", desc:"生成 SEO / Open Graph Meta 标签", tags:"meta seo og", featured:0},

  // ========== 开发工具 ==========
  {id:"timestamp", cat:"dev", icon:"◷", name:"时间戳转换", desc:"Unix 时间戳与日期互转", tags:"timestamp 时间", featured:1},
  {id:"regex", cat:"dev", icon:".*", name:"Regex Tester", desc:"实时测试正则表达式 + 替换", tags:"regex regexp 正则", featured:1},
  {id:"color", cat:"dev", icon:"🎨", name:"颜色转换", desc:"HEX / RGB / HSL 互转 + 预览", tags:"color hex rgb hsl", featured:0},
  {id:"cron", cat:"dev", icon:"⏰", name:"Cron 表达式", desc:"解析常见 Cron 表达式含义", tags:"cron schedule 定时", featured:0},
  {id:"chmod", cat:"dev", icon:"🛡️", name:"Unix 权限计算", desc:"chmod 数字与权限互转", tags:"chmod permission 权限", featured:0},
  {id:"cssmin", cat:"dev", icon:"{}", name:"CSS 压缩/美化", desc:"简单 CSS 压缩与格式化", tags:"css minify beautify", featured:0},
  {id:"jsmin", cat:"dev", icon:"JS", name:"JS 压缩", desc:"简单 JavaScript 压缩（去空格注释）", tags:"js minify", featured:0},
  {id:"sqlfmt", cat:"dev", icon:"SQL", name:"SQL 格式化", desc:"简单 SQL 关键字格式化", tags:"sql format", featured:0},
  {id:"uuid", cat:"utility", icon:"✦", name:"UUID 生成器", desc:"一键生成 UUID v4", tags:"uuid random", featured:1},
  {id:"password", cat:"utility", icon:"⚿", name:"密码生成器", desc:"生成高强度随机密码", tags:"password 密码", featured:1},
  {id:"random", cat:"utility", icon:"⚄", name:"随机字符串", desc:"自定义字符集生成随机串", tags:"random 随机", featured:0},
  {id:"lorem", cat:"utility", icon:"¶", name:"Lorem Ipsum", desc:"快速生成占位文本", tags:"lorem ipsum 占位", featured:0},
  {id:"qr", cat:"utility", icon:"▦", name:"二维码生成", desc:"文本或 URL 生成二维码", tags:"qr qrcode 二维码", featured:0},
  {id:"dice", cat:"utility", icon:"🎲", name:"骰子 / 随机数", desc:"掷骰子、生成指定范围随机数", tags:"dice random 骰子", featured:0},
  {id:"stopwatch", cat:"utility", icon:"⏱️", name:"秒表 / 计时器", desc:"简单秒表与倒计时", tags:"stopwatch timer 计时", featured:0},

  // ========== 转换工具 ==========
  {id:"number", cat:"convert", icon:"123", name:"进制转换", desc:"二进制 / 八进制 / 十进制 / 十六进制", tags:"bin oct hex 进制", featured:0},
  {id:"units", cat:"convert", icon:"↔", name:"单位转换", desc:"长度、重量、温度快速换算", tags:"unit conversion", featured:0},
  {id:"jsonyaml", cat:"convert", icon:"⇄", name:"JSON ↔ YAML", desc:"简单 JSON 与 YAML 互转", tags:"json yaml 转换", featured:0},
  {id:"datasize", cat:"convert", icon:"💾", name:"数据大小转换", desc:"B / KB / MB / GB / TB 互转", tags:"byte kb mb gb", featured:0},
  {id:"roman", cat:"convert", icon:"XII", name:"罗马数字", desc:"阿拉伯数字与罗马数字互转", tags:"roman 罗马", featured:0},
  {id:"percent", cat:"convert", icon:"%", name:"百分比计算", desc:"百分比增减、占比计算", tags:"percent 百分比", featured:0},

  // ========== 图片工具 ==========
  {id:"image", cat:"image", icon:"🖼", name:"图片压缩", desc:"浏览器本地读取、缩放、导出 WebP", tags:"image compress resize", featured:0},
  {id:"imgbase64", cat:"image", icon:"B64", name:"图片 ↔ Base64", desc:"本地图片与 Data URL 互转", tags:"image base64", featured:0},
  {id:"imginfo", cat:"image", icon:"ℹ️", name:"图片信息", desc:"查看图片尺寸、大小、类型", tags:"image info 尺寸", featured:0},
  {id:"imgrotate", cat:"image", icon:"🔄", name:"图片旋转翻转", desc:"本地旋转 90° / 翻转图片", tags:"rotate flip 旋转", featured:0},

  // ========== 计算 / 生活 ==========
  {id:"bmi", cat:"calc", icon:"⚖️", name:"BMI 计算器", desc:"身体质量指数计算与评价", tags:"bmi 体重", featured:0},
  {id:"age", cat:"calc", icon:"🎂", name:"年龄计算器", desc:"根据生日计算精确年龄", tags:"age 年龄 生日", featured:0},
  {id:"loan", cat:"calc", icon:"💰", name:"贷款利息计算", desc:"等额本息月供估算", tags:"loan 贷款 利息", featured:0},
  {id:"aspect", cat:"calc", icon:"▭", name:"宽高比计算", desc:"常见屏幕/图片比例计算", tags:"aspect ratio 比例", featured:0},
  {id:"tip", cat:"calc", icon:"🧾", name:"小费 / 分账", desc:"小费计算与多人分账", tags:"tip split 分账", featured:0},

  // ========== 市面热门补充 ==========
  {id:"unicode", cat:"encode", icon:"U+", name:"Unicode 编码", desc:"字符与 Unicode / UTF-8 互转", tags:"unicode utf8 编码", featured:0},
  {id:"escapejs", cat:"encode", icon:"\\", name:"JS Escape", desc:"JavaScript escape / unescape", tags:"escape unescape js", featured:0},
  {id:"textclean", cat:"text", icon:"🧹", name:"文本清理", desc:"去除多余空格、空行、特殊空白", tags:"clean trim 空白", featured:0},
  {id:"fullhalf", cat:"text", icon:"Ａ", name:"全角半角转换", desc:"全角字符与半角字符互转", tags:"fullwidth halfwidth 全角", featured:0},
  {id:"ascii", cat:"dev", icon:"ASCII", name:"ASCII 码转换", desc:"字符与 ASCII 码互转", tags:"ascii 码表", featured:0},
  {id:"cnupper", cat:"convert", icon:"壹", name:"中文金额大写", desc:"数字金额转中文大写", tags:"人民币 大写 金额", featured:0},
  {id:"htmlfmt", cat:"dev", icon:"HTML", name:"HTML 格式化", desc:"HTML 美化与简单压缩", tags:"html format minify", featured:0},
  {id:"xmlfmt", cat:"dev", icon:"XML", name:"XML 格式化", desc:"简单 XML 缩进格式化", tags:"xml format", featured:0},
  {id:"jsoncsv", cat:"convert", icon:"CSV", name:"JSON ↔ CSV", desc:"简单 JSON 数组与 CSV 互转", tags:"json csv 转换", featured:0},
  {id:"colorcontrast", cat:"dev", icon:"◐", name:"颜色对比度", desc:"WCAG 颜色对比度检查", tags:"contrast wcag 可访问性", featured:0},
  {id:"gradient", cat:"dev", icon:"🌈", name:"CSS 渐变生成", desc:"生成 CSS linear-gradient 代码", tags:"gradient css 渐变", featured:0},
  {id:"randomcolor", cat:"dev", icon:"🎨", name:"随机颜色", desc:"批量生成随机 HEX / RGB 颜色", tags:"random color 颜色", featured:0},
  {id:"coin", cat:"utility", icon:"🪙", name:"抛硬币", desc:"正面 / 反面随机结果", tags:"coin flip 硬币", featured:0},
  {id:"picker", cat:"utility", icon:"🎯", name:"随机抽取", desc:"从列表中随机抽取一个或多个", tags:"random pick 点名 抽签", featured:0},
  {id:"placeholder", cat:"image", icon:"🖼️", name:"占位图生成", desc:"生成指定尺寸纯色占位图", tags:"placeholder 占位图", featured:0},
  {id:"worldclock", cat:"utility", icon:"🌍", name:"世界时钟", desc:"主要城市当前时间", tags:"world clock 时区", featured:0},
  {id:"countdown", cat:"utility", icon:"⏳", name:"倒计时", desc:"自定义倒计时（分钟）", tags:"countdown 倒计时", featured:0},
  {id:"datediff", cat:"calc", icon:"📅", name:"日期差计算", desc:"计算两个日期之间的天数", tags:"date diff 天数", featured:0},
  {id:"compound", cat:"calc", icon:"📈", name:"复利计算", desc:"本金、利率、期数复利计算", tags:"compound interest 复利", featured:0},
  {id:"blood", cat:"calc", icon:"🩸", name:"血型遗传", desc:"父母血型推算子女可能血型", tags:"blood type 血型", featured:0},
  {id:"idcheck", cat:"utility", icon:"🪪", name:"身份证校验", desc:"校验 18 位身份证号码校验码", tags:"idcard 身份证", featured:0},
  {id:"grayscale", cat:"image", icon:"🌫️", name:"图片转灰度", desc:"本地将图片转为灰度图", tags:"grayscale 灰度", featured:0},
  {id:"watermark", cat:"image", icon:"💧", name:"图片加水印", desc:"给图片添加文字水印", tags:"watermark 水印", featured:0},
  {id:"timeunit", cat:"convert", icon:"⌛", name:"时间单位转换", desc:"秒 / 分 / 时 / 天 / 周互转", tags:"time unit 时间", featured:0},

  // ========== 继续扩充热门工具 ==========
  {id:"striphtml", cat:"text", icon:"</>", name:"去除 HTML 标签", desc:"从文本中剥离所有 HTML 标签", tags:"strip html 标签", featured:0},
  {id:"xor", cat:"encode", icon:"⊕", name:"异或加密", desc:"简单 XOR 对称加密解密", tags:"xor encrypt", featured:0},
  {id:"cssunit", cat:"dev", icon:"px", name:"CSS 单位转换", desc:"px / rem / em / pt 互转", tags:"css unit px rem", featured:0},
  {id:"boxshadow", cat:"dev", icon:"▦", name:"Box Shadow 生成", desc:"可视化生成 CSS box-shadow", tags:"box-shadow css", featured:0},
  {id:"borderradius", cat:"dev", icon:"⬜", name:"圆角生成器", desc:"生成 border-radius 代码", tags:"border-radius 圆角", featured:0},
  {id:"shade", cat:"dev", icon:"🎨", name:"颜色深浅生成", desc:"根据基准色生成深浅色阶", tags:"shade tint 色阶", featured:0},
  {id:"favicon", cat:"image", icon:"🔖", name:"Favicon 生成", desc:"从文字生成简单 Favicon", tags:"favicon icon", featured:0},
  {id:"invert", cat:"image", icon:"🔄", name:"图片反色", desc:"图片颜色反相", tags:"invert 反色", featured:0},
  {id:"discount", cat:"calc", icon:"🏷️", name:"折扣计算", desc:"原价、折扣、折后价互算", tags:"discount 折扣", featured:0},
  {id:"vat", cat:"calc", icon:"🧾", name:"增值税计算", desc:"含税/未税金额互算", tags:"vat tax 增值税", featured:0},
  {id:"idealweight", cat:"calc", icon:"⚖️", name:"理想体重", desc:"根据身高估算理想体重范围", tags:"ideal weight 体重", featured:0},
  {id:"daysuntil", cat:"calc", icon:"📆", name:"距离某日还有几天", desc:"计算距离目标日期的天数", tags:"days until 倒计时", featured:0},
  {id:"randomname", cat:"utility", icon:"👤", name:"随机姓名", desc:"生成随机中文姓名", tags:"random name 姓名", featured:0},
  {id:"guid", cat:"utility", icon:"GUID", name:"GUID 生成", desc:"生成 GUID（带花括号格式）", tags:"guid uuid", featured:0},
  {id:"loremcn", cat:"utility", icon:"中", name:"中文占位文本", desc:"生成中文乱数假文", tags:"lorem 中文 占位", featured:0},
  {id:"repeat", cat:"text", icon:"🔁", name:"文本重复", desc:"将文本重复指定次数", tags:"repeat 重复", featured:0},
  {id:"splitlen", cat:"text", icon:"✂️", name:"按长度分割", desc:"按固定字符长度分割文本", tags:"split length", featured:0},
  {id:"num2words", cat:"convert", icon:"ABC", name:"数字转英文", desc:"数字转英文单词", tags:"number words english", featured:0},
  {id:"binarytext", cat:"encode", icon:"01", name:"二进制文本（增强）", desc:"支持空格分隔与连续二进制", tags:"binary", featured:0},
  {id:"urlparser2", cat:"web", icon:"🔗", name:"URL 参数编辑", desc:"解析并编辑 URL 查询参数", tags:"url query params", featured:0},
  {id:"jwtgen", cat:"encode", icon:"🔑", name:"JWT 生成（简单）", desc:"生成无签名的简单 JWT", tags:"jwt generate", featured:0},
  {id:"base32", cat:"encode", icon:"32", name:"Base32 编解码", desc:"Base32 编码与解码", tags:"base32", featured:0},
  {id:"colorpalette", cat:"dev", icon:"🎨", name:"调色板生成", desc:"根据主色生成和谐色板", tags:"palette 调色板", featured:0},
  {id:"textstat2", cat:"text", icon:"📊", name:"详细文本分析", desc:"字符类型统计 + 最长最短词", tags:"text analysis", featured:0},
  {id:"fuel", cat:"calc", icon:"⛽", name:"油耗计算", desc:"油耗与花费估算", tags:"fuel 油耗", featured:0},

  // ========== 第四批扩充 ==========
  {id:"textencrypt", cat:"encode", icon:"🔐", name:"简易文本加密", desc:"基于密钥的可逆文本混淆", tags:"encrypt text", featured:0},
  {id:"hashfile", cat:"encode", icon:"📄", name:"文件哈希", desc:"计算本地文件 SHA-256", tags:"file hash", featured:0},
  {id:"jsonpath", cat:"dev", icon:"$.", name:"JSON Path 提取", desc:"简单路径提取 JSON 值", tags:"jsonpath", featured:0},
  {id:"cssprefix", cat:"dev", icon:"-webkit", name:"CSS 前缀补全", desc:"常见属性添加浏览器前缀", tags:"css prefix", featured:0},
  {id:"mimetype", cat:"dev", icon:"📎", name:"MIME 类型查询", desc:"常见扩展名对应 MIME", tags:"mime type", featured:0},
  {id:"httpstatus", cat:"web", icon:"📡", name:"HTTP 状态码", desc:"查询 HTTP 状态码含义", tags:"http status", featured:0},
  {id:"useragentgen", cat:"web", icon:"UA", name:"User-Agent 生成", desc:"生成常见浏览器 UA", tags:"useragent generate", featured:0},
  {id:"robots", cat:"web", icon:"🤖", name:"Robots.txt 生成", desc:"快速生成 robots.txt", tags:"robots.txt", featured:0},
  {id:"sitemap", cat:"web", icon:"🗺️", name:"Sitemap 片段", desc:"生成简单 sitemap URL 条目", tags:"sitemap", featured:0},
  {id:"ogimage", cat:"web", icon:"🖼️", name:"OG 图片尺寸参考", desc:"常用社交平台 OG 图片尺寸", tags:"og image", featured:0},
  {id:"passwordpin", cat:"utility", icon:"🔢", name:"PIN / 数字密码", desc:"生成纯数字 PIN 码", tags:"pin password", featured:0},
  {id:"colorname", cat:"dev", icon:"🏷️", name:"颜色名称近似", desc:"HEX 转近似英文颜色名", tags:"color name", featured:0},
  {id:"aspectratio2", cat:"calc", icon:"📐", name:"比例缩放计算", desc:"已知一边求另一边", tags:"aspect scale", featured:0},
  {id:"percentage2", cat:"calc", icon:"%", name:"百分比工具增强", desc:"增减百分比 / 占比 / 差值", tags:"percent", featured:0},
  {id:"randomnumber", cat:"utility", icon:"🎲", name:"随机数生成器", desc:"指定范围与数量生成随机数", tags:"random number", featured:0},
  {id:"listsort", cat:"text", icon:"↕️", name:"列表高级排序", desc:"数字/字母/长度排序", tags:"sort list", featured:0},
  {id:"textwrap", cat:"text", icon:"↩️", name:"文本自动换行", desc:"按宽度插入换行", tags:"wrap text", featured:0},
  {id:"camelcase", cat:"text", icon:"Aa", name:"命名风格转换", desc:"camel / snake / kebab / Pascal", tags:"case naming", featured:0},
  {id:"loremhtml", cat:"utility", icon:"<>", name:"HTML 占位段落", desc:"生成带标签的占位 HTML", tags:"lorem html", featured:0},
  {id:"qrwifi", cat:"utility", icon:"📶", name:"WiFi 二维码", desc:"生成连接 WiFi 的二维码内容", tags:"wifi qr", featured:0},
  {id:"timestampms", cat:"dev", icon:"⏱️", name:"毫秒时间戳", desc:"毫秒级时间戳转换", tags:"timestamp ms", featured:0},
  {id:"cronnext", cat:"dev", icon:"⏰", name:"Cron 下次运行", desc:"简单估算下次执行时间", tags:"cron next", featured:0},
  {id:"base64file", cat:"encode", icon:"📁", name:"文件转 Base64", desc:"本地文件转 Data URL", tags:"file base64", featured:0},
  {id:"imageinfo2", cat:"image", icon:"ℹ️", name:"图片详细信息", desc:"尺寸、类型、估算色彩", tags:"image info", featured:0},
  {id:"canvascolor", cat:"image", icon:"🎨", name:"图片取色", desc:"点击图片获取像素颜色", tags:"color picker image", featured:0},
  {id:"text2img", cat:"image", icon:"🔤", name:"文字生成图片", desc:"文字转 PNG 图片下载", tags:"text image", featured:0},
  {id:"progress", cat:"utility", icon:"📊", name:"进度条 CSS", desc:"生成进度条 CSS 代码", tags:"progress bar css", featured:0},
  {id:"loading", cat:"dev", icon:"⟳", name:"Loading 动画 CSS", desc:"简单旋转 Loading 代码", tags:"loading spinner", featured:0},
  {id:"buttoncss", cat:"dev", icon:"🔘", name:"按钮样式生成", desc:"生成基础按钮 CSS", tags:"button css", featured:0},
  {id:"tablegen", cat:"dev", icon:"▦", name:"HTML 表格生成", desc:"快速生成表格 HTML", tags:"table html", featured:0},
  {id:"listgen", cat:"dev", icon:"≡", name:"HTML 列表生成", desc:"生成 ul/ol 列表代码", tags:"list html", featured:0},
  {id:"metagen", cat:"web", icon:"🏷️", name:"基础 Meta 生成增强", desc:"viewport + charset + description", tags:"meta", featured:0},
  {id:"htaccess", cat:"web", icon:"⚙️", name:"htaccess 常用片段", desc:"常用 Apache 重写规则", tags:"htaccess", featured:0},
  {id:"nginx", cat:"web", icon:"🌐", name:"Nginx 常用配置", desc:"简单反向代理/HTTPS 片段", tags:"nginx", featured:0},
  {id:"docker", cat:"dev", icon:"🐳", name:"Docker 常用命令", desc:"常用 Docker 命令速查", tags:"docker", featured:0},
  {id:"gitcmd", cat:"dev", icon:"🌿", name:"Git 常用命令", desc:"Git 日常命令速查", tags:"git", featured:0},
  {id:"regexlib", cat:"dev", icon:".*", name:"常用正则库", desc:"邮箱/手机/URL 等常用正则", tags:"regex library", featured:0},
  {id:"emoji", cat:"utility", icon:"😀", name:"Emoji 搜索", desc:"常用 Emoji 分类复制", tags:"emoji", featured:0},
  {id:"symbol", cat:"utility", icon:"★", name:"特殊符号", desc:"常用特殊符号一键复制", tags:"symbol special", featured:0},
  {id:"currencyfmt", cat:"calc", icon:"💰", name:"货币格式化", desc:"数字格式化为货币样式", tags:"currency format", featured:0},
  {id:"bytesize", cat:"convert", icon:"📦", name:"字节格式化", desc:"字节数友好显示", tags:"byte format", featured:0},
  {id:"temperature", cat:"convert", icon:"🌡️", name:"温度转换增强", desc:"支持更多温度单位", tags:"temperature", featured:0},
  {id:"lengthunit", cat:"convert", icon:"📏", name:"长度单位增强", desc:"更多长度单位换算", tags:"length", featured:0},
  {id:"weightunit", cat:"convert", icon:"⚖️", name:"重量单位增强", desc:"更多重量单位换算", tags:"weight", featured:0},
  {id:"speedunit", cat:"convert", icon:"🚀", name:"速度单位转换", desc:"km/h mph m/s 等", tags:"speed", featured:0},
  {id:"datarate", cat:"convert", icon:"📶", name:"网速单位转换", desc:"Mbps MB/s 等互转", tags:"data rate", featured:0},
  {id:"angle", cat:"convert", icon:"∠", name:"角度弧度转换", desc:"度 / 弧度互转", tags:"angle radian", featured:0},
  {id:"fibonacci", cat:"calc", icon:"🔢", name:"斐波那契数列", desc:"生成斐波那契数列", tags:"fibonacci", featured:0},
  {id:"prime", cat:"calc", icon:"🔢", name:"质数判断", desc:"判断数字是否为质数", tags:"prime", featured:0},
  {id:"gcdlcm", cat:"calc", icon:"➗", name:"最大公约数/最小公倍数", desc:"计算 GCD 与 LCM", tags:"gcd lcm", featured:0},

  // ========== 第五批扩充 ==========
  {id:"textreverse", cat:"text", icon:"🔄", name:"文本反转", desc:"反转字符串或按行反转", tags:"reverse text", featured:0},
  {id:"textcount", cat:"text", icon:"🔢", name:"字符出现次数", desc:"统计某字符或词出现次数", tags:"count char", featured:0},
  {id:"slug", cat:"text", icon:"🔗", name:"URL Slug 生成", desc:"标题转 URL 友好 slug", tags:"slug url", featured:0},
  {id:"markdown2html", cat:"text", icon:"MD", name:"Markdown 转 HTML（简易）", desc:"常用 Markdown 语法转 HTML", tags:"markdown html", featured:0},
  {id:"html2text", cat:"text", icon:"📄", name:"HTML 转纯文本", desc:"提取 HTML 中的纯文本", tags:"html text", featured:0},
  {id:"diff2", cat:"text", icon:"±", name:"文本对比增强", desc:"高亮显示两段文本差异", tags:"diff compare", featured:0},
  {id:"rot13", cat:"encode", icon:"13", name:"ROT13 编解码", desc:"经典 ROT13 替换密码", tags:"rot13", featured:0},
  {id:"caesar", cat:"encode", icon:"🔐", name:"凯撒密码", desc:"可自定义位移的凯撒加密", tags:"caesar cipher", featured:0},
  {id:"morse2", cat:"encode", icon:"•–", name:"摩斯密码增强", desc:"支持中文拼音与空格", tags:"morse", featured:0},
  {id:"base58", cat:"encode", icon:"58", name:"Base58 编解码", desc:"比特币风格 Base58", tags:"base58", featured:0},
  {id:"urlsafe", cat:"encode", icon:"🔗", name:"URL Safe Base64", desc:"URL 安全的 Base64 编解码", tags:"urlsafe base64", featured:0},
  {id:"hexdump", cat:"dev", icon:"0x", name:"Hex Dump", desc:"文本转十六进制转储", tags:"hex dump", featured:0},
  {id:"asciiart", cat:"utility", icon:"🎨", name:"简易 ASCII 艺术", desc:"文字转简单 ASCII 风格", tags:"ascii art", featured:0},
  {id:"passwordgen2", cat:"utility", icon:"🔑", name:"高级密码生成", desc:"可自定义字符集与规则", tags:"password advanced", featured:0},
  {id:"qrtext", cat:"utility", icon:"▦", name:"二维码内容生成", desc:"生成文本/URL/邮件二维码内容", tags:"qr content", featured:0},
  {id:"colorconvert", cat:"dev", icon:"🎨", name:"颜色格式转换", desc:"HEX / RGB / HSL 互转", tags:"color convert", featured:0},
  {id:"gradient2", cat:"dev", icon:"🌈", name:"渐变代码生成增强", desc:"多色渐变 CSS 生成", tags:"gradient css", featured:0},
  {id:"flexbox", cat:"dev", icon:"▭", name:"Flexbox 速查", desc:"常用 Flex 属性与示例", tags:"flexbox", featured:0},
  {id:"gridcss", cat:"dev", icon:"▦", name:"CSS Grid 速查", desc:"常用 Grid 属性速查", tags:"css grid", featured:0},
  {id:"keyframes", cat:"dev", icon:"🎬", name:"CSS 动画关键帧", desc:"生成简单 @keyframes", tags:"keyframes animation", featured:0},
  {id:"mediaquery", cat:"dev", icon:"📱", name:"媒体查询生成", desc:"常用响应式断点代码", tags:"media query", featured:0},
  {id:"seo", cat:"web", icon:"🔍", name:"SEO Meta 检查清单", desc:"基础 SEO 标签清单", tags:"seo meta", featured:0},
  {id:"opengraph", cat:"web", icon:"📢", name:"Open Graph 生成", desc:"生成 OG 社交分享标签", tags:"open graph", featured:0},
  {id:"twittercard", cat:"web", icon:"🐦", name:"Twitter Card 生成", desc:"生成 Twitter Card 标签", tags:"twitter card", featured:0},
  {id:"faviconlink", cat:"web", icon:"🔖", name:"Favicon 链接代码", desc:"生成 favicon link 标签", tags:"favicon link", featured:0},
  {id:"canonical", cat:"web", icon:"🔗", name:"Canonical 标签", desc:"生成 canonical 链接标签", tags:"canonical", featured:0},
  {id:"json2ts", cat:"dev", icon:"TS", name:"JSON 转 TypeScript 接口", desc:"简单 JSON 转 interface", tags:"json typescript", featured:0},
  {id:"csv2json2", cat:"convert", icon:"📊", name:"CSV 转 JSON 增强", desc:"支持自定义分隔符", tags:"csv json", featured:0},
  {id:"yaml2json", cat:"convert", icon:"YAML", name:"YAML 简易转 JSON", desc:"基础 YAML 转 JSON", tags:"yaml json", featured:0},
  {id:"numberfmt", cat:"calc", icon:"1,000", name:"数字千分位格式化", desc:"添加或去除千分位", tags:"number format", featured:0},
  {id:"scientific", cat:"calc", icon:"🔬", name:"科学计数法转换", desc:"数字与科学计数法互转", tags:"scientific notation", featured:0},
  {id:"percentage3", cat:"calc", icon:"%", name:"百分比计算全家桶", desc:"多种百分比场景一键算", tags:"percentage", featured:0},
  {id:"tip", cat:"calc", icon:"💸", name:"小费计算", desc:"根据比例计算小费与总价", tags:"tip calculator", featured:0},
  {id:"splitbill", cat:"calc", icon:"🧾", name:"AA 制分账", desc:"多人分账计算", tags:"split bill", featured:0},
  {id:"agecalc2", cat:"calc", icon:"🎂", name:"精确年龄计算", desc:"计算岁数与天数", tags:"age exact", featured:0},
  {id:"workdays", cat:"calc", icon:"📅", name:"工作日计算", desc:"计算两个日期间工作日", tags:"workdays", featured:0},
  {id:"countdown2", cat:"utility", icon:"⏳", name:"目标倒计时", desc:"距离目标日期的详细倒计时", tags:"countdown", featured:0},
  {id:"randomcolor2", cat:"utility", icon:"🎨", name:"随机颜色批量", desc:"一次生成多个随机颜色", tags:"random color", featured:0},
  {id:"uuidbatch", cat:"utility", icon:"UUID", name:"批量 UUID", desc:"一次生成多个 UUID", tags:"uuid batch", featured:0},
  {id:"lorem2", cat:"utility", icon:"📝", name:"多语言占位文本", desc:"英文 / 中文占位切换", tags:"lorem", featured:0},
  {id:"keyboard", cat:"utility", icon:"⌨️", name:"特殊按键符号", desc:"Mac / Windows 按键符号", tags:"keyboard symbol", featured:0},
  {id:"br", cat:"text", icon:"↵", name:"换行符转换", desc:"LF / CRLF / CR 互转", tags:"newline linebreak", featured:0},
  {id:"tabspace", cat:"text", icon:"⇥", name:"Tab 与空格转换", desc:"Tab 和空格互相替换", tags:"tab space", featured:0},
  {id:"duplicate", cat:"text", icon:"📋", name:"查找重复行", desc:"找出文本中的重复行", tags:"duplicate lines", featured:0},
  {id:"unique", cat:"text", icon:"✨", name:"去重保留顺序", desc:"去除重复行并保持顺序", tags:"unique lines", featured:0},
  {id:"sortcn", cat:"text", icon:"中", name:"中文拼音排序", desc:"按拼音对中文列表排序", tags:"chinese sort", featured:0},

  // ========== 第六批扩充 ==========
  {id:"textreplace", cat:"text", icon:"🔄", name:"批量替换增强", desc:"支持多组查找替换", tags:"replace batch", featured:0},
  {id:"lineNumber", cat:"text", icon:"#", name:"添加行号", desc:"给文本每行添加行号", tags:"line number", featured:0},
  {id:"prefixsuffix", cat:"text", icon:"➕", name:"批量前后缀", desc:"给每行添加前缀或后缀", tags:"prefix suffix", featured:0},
  {id:"extractemails", cat:"text", icon:"📧", name:"提取邮箱", desc:"从文本中提取所有邮箱", tags:"extract email", featured:0},
  {id:"extracturls", cat:"text", icon:"🔗", name:"提取链接", desc:"从文本中提取所有 URL", tags:"extract url", featured:0},
  {id:"extractphones", cat:"text", icon:"📱", name:"提取手机号", desc:"从文本中提取中国手机号", tags:"extract phone", featured:0},
  {id:"wordcount2", cat:"text", icon:"📊", name:"中英文词数统计", desc:"分别统计中英文词数", tags:"word count", featured:0},
  {id:"textcompress", cat:"text", icon:"📦", name:"去除多余空白", desc:"压缩连续空格与空行", tags:"compress whitespace", featured:0},
  {id:"base64url", cat:"encode", icon:"🔗", name:"Base64URL 编解码", desc:"JWT 风格 Base64URL", tags:"base64url", featured:0},
  {id:"htmlentity", cat:"encode", icon:"&", name:"HTML 实体编解码", desc:"&amp; &lt; 等实体转换", tags:"html entity", featured:0},
  {id:"quotedprintable", cat:"encode", icon:"QP", name:"Quoted-Printable", desc:"邮件编码简易实现", tags:"quoted printable", featured:0},
  {id:"punycode", cat:"encode", icon:"🌐", name:"Punycode 转换", desc:"中文域名与 Punycode 互转", tags:"punycode", featured:0},
  {id:"jwtpayload", cat:"encode", icon:"JWT", name:"JWT 一键解码", desc:"快速查看 JWT Payload", tags:"jwt decode", featured:0},
  {id:"hashcompare", cat:"encode", icon:"🔍", name:"哈希对比", desc:"对比两段文本哈希是否一致", tags:"hash compare", featured:0},
  {id:"cssminify", cat:"dev", icon:"CSS", name:"CSS 压缩/格式化", desc:"简易 CSS 压缩与美化", tags:"css minify", featured:0},
  {id:"jsminify", cat:"dev", icon:"JS", name:"JS 注释移除", desc:"移除 JavaScript 注释", tags:"js minify", featured:0},
  {id:"jsonminify", cat:"dev", icon:"{}", name:"JSON 压缩美化增强", desc:"一键压缩或格式化 JSON", tags:"json format", featured:0},
  {id:"regexreplace", cat:"dev", icon:".*", name:"正则替换", desc:"使用正则进行查找替换", tags:"regex replace", featured:0},
  {id:"cronexplain", cat:"dev", icon:"⏰", name:"Cron 表达式说明", desc:"解读常见 Cron 表达式", tags:"cron explain", featured:0},
  {id:"chmodcalc", cat:"dev", icon:"🔒", name:"chmod 权限计算", desc:"可视化计算文件权限", tags:"chmod", featured:0},
  {id:"useragent", cat:"web", icon:"UA", name:"解析当前 UA", desc:"解析浏览器 User-Agent", tags:"useragent parse", featured:0},
  {id:"ipcalc", cat:"web", icon:"🌐", name:"IP 地址计算", desc:"简单 IP 与子网信息", tags:"ip calc", featured:0},
  {id:"portcheck", cat:"web", icon:"🔌", name:"常用端口速查", desc:"常见服务默认端口", tags:"port", featured:0},
  {id:"httpheaders", cat:"web", icon:"📋", name:"常用 HTTP 头", desc:"常见请求/响应头说明", tags:"http headers", featured:0},
  {id:"statuscode", cat:"web", icon:"📡", name:"HTTP 状态码大全", desc:"完整状态码速查", tags:"http status", featured:0},
  {id:"imageplaceholder", cat:"image", icon:"🖼️", name:"占位图链接生成", desc:"生成占位图 URL", tags:"placeholder image", featured:0},
  {id:"imageresize", cat:"image", icon:"📐", name:"图片尺寸计算", desc:"按比例计算新尺寸", tags:"image resize", featured:0},
  {id:"colornamer", cat:"dev", icon:"🎨", name:"颜色名查询", desc:"常见颜色英文名与 HEX", tags:"color name", featured:0},
  {id:"contrast", cat:"dev", icon:"◐", name:"对比度检查", desc:"检查前景背景对比度", tags:"contrast", featured:0},
  {id:"randomstring", cat:"utility", icon:"🔤", name:"随机字符串增强", desc:"自定义长度与字符集", tags:"random string", featured:0},
  {id:"passwordstrength", cat:"utility", icon:"💪", name:"密码强度检测", desc:"检测密码强度等级", tags:"password strength", featured:0},
  {id:"qrcode", cat:"utility", icon:"▦", name:"二维码内容构造", desc:"构造文本/URL/WiFi内容", tags:"qrcode", featured:0},
  {id:"timestamp", cat:"utility", icon:"⏱️", name:"时间戳增强", desc:"秒/毫秒时间戳互转", tags:"timestamp", featured:0},
  {id:"dateformat", cat:"utility", icon:"📅", name:"日期格式化", desc:"自定义日期时间格式", tags:"date format", featured:0},
  {id:"weeknumber", cat:"utility", icon:"📆", name:"周数计算", desc:"计算某日是第几周", tags:"week number", featured:0},
  {id:"zodiac", cat:"calc", icon:"♈", name:"星座查询", desc:"根据生日查星座", tags:"zodiac", featured:0},
  {id:"constellation", cat:"calc", icon:"🌟", name:"生肖查询", desc:"根据年份查生肖", tags:"chinese zodiac", featured:0},
  {id:"bmi2", cat:"calc", icon:"⚖️", name:"BMI 增强版", desc:"BMI + 健康建议", tags:"bmi", featured:0},
  {id:"loan", cat:"calc", icon:"🏠", name:"贷款月供计算", desc:"等额本息月供估算", tags:"loan", featured:0},
  {id:"compound2", cat:"calc", icon:"📈", name:"复利增强", desc:"支持期数与追加投入", tags:"compound", featured:0},
  {id:"discount2", cat:"calc", icon:"🏷️", name:"满减计算", desc:"满减活动优惠计算", tags:"discount", featured:0},
  {id:"tax", cat:"calc", icon:"🧾", name:"个人所得税估算", desc:"简单版个税计算", tags:"tax", featured:0},
  {id:"exchange", cat:"calc", icon:"💱", name:"汇率换算（静态）", desc:"常用货币快速换算", tags:"exchange", featured:0},
  {id:"unitarea", cat:"convert", icon:"⬜", name:"面积单位转换", desc:"平方米/亩/公顷等", tags:"area", featured:0},
  {id:"unitvolume", cat:"convert", icon:"🧊", name:"体积单位转换", desc:"升/毫升/立方米等", tags:"volume", featured:0},
  {id:"unitdata", cat:"convert", icon:"💾", name:"数据存储转换", desc:"B/KB/MB/GB/TB", tags:"data storage", featured:0},
  {id:"unitenergy", cat:"convert", icon:"⚡", name:"能量单位转换", desc:"焦耳/卡路里/千瓦时", tags:"energy", featured:0},
  {id:"unitpressure", cat:"convert", icon:"🌡️", name:"压强单位转换", desc:"帕/标准大气压/毫米汞柱", tags:"pressure", featured:0},

  // ========== 第七批扩充 ==========
  {id:"textsort", cat:"text", icon:"↕️", name:"文本排序增强", desc:"正序/倒序/按长度排序", tags:"sort text", featured:0},
  {id:"textfilter", cat:"text", icon:"🔍", name:"文本过滤", desc:"按关键词包含/排除行", tags:"filter text", featured:0},
  {id:"charfreq", cat:"text", icon:"📊", name:"字符频率统计", desc:"统计每个字符出现次数", tags:"char frequency", featured:0},
  {id:"removeempty", cat:"text", icon:"🧹", name:"删除空行", desc:"去除所有空行", tags:"remove empty", featured:0},
  {id:"joinlines", cat:"text", icon:"🔗", name:"合并行", desc:"用指定分隔符合并多行", tags:"join lines", featured:0},
  {id:"splittext", cat:"text", icon:"✂️", name:"分隔符拆分", desc:"按自定义分隔符拆分文本", tags:"split text", featured:0},
  {id:"caseconvert", cat:"text", icon:"Aa", name:"大小写转换增强", desc:"全大写/全小写/首字母大写", tags:"case", featured:0},
  {id:"titlecase", cat:"text", icon:"Tt", name:"标题格式化", desc:"每个单词首字母大写", tags:"title case", featured:0},
  {id:"encodeuri", cat:"encode", icon:"%", name:"encodeURI 编解码", desc:"完整 URI 编解码", tags:"encodeURI", featured:0},
  {id:"encodeuricomponent", cat:"encode", icon:"%23", name:"encodeURIComponent", desc:"URI 组件编解码", tags:"encodeURIComponent", featured:0},
  {id:"escapehtml", cat:"encode", icon:"<>", name:"HTML 转义/反转义", desc:"转义 HTML 特殊字符", tags:"escape html", featured:0},
  {id:"md5", cat:"encode", icon:"MD5", name:"MD5 哈希（简易）", desc:"计算文本 MD5（纯JS实现）", tags:"md5", featured:0},
  {id:"sha1", cat:"encode", icon:"SHA1", name:"SHA-1 哈希", desc:"计算 SHA-1", tags:"sha1", featured:0},
  {id:"hashlist", cat:"encode", icon:"#", name:"多哈希一次生成", desc:"同时生成多种哈希", tags:"hash multi", featured:0},
  {id:"uuidv4", cat:"utility", icon:"UUID", name:"UUID v4 生成", desc:"标准 UUID v4", tags:"uuid", featured:0},
  {id:"nanoid", cat:"utility", icon:"ID", name:"NanoID 风格短ID", desc:"生成短唯一ID", tags:"nanoid", featured:0},
  {id:"randomint", cat:"utility", icon:"🎲", name:"随机整数批量", desc:"指定范围批量生成", tags:"random int", featured:0},
  {id:"coinflip", cat:"utility", icon:"🪙", name:"抛硬币", desc:"正面/反面随机", tags:"coin flip", featured:0},
  {id:"diceroll", cat:"utility", icon:"🎲", name:"骰子增强", desc:"多面骰 + 多次投掷", tags:"dice", featured:0},
  {id:"pickone", cat:"utility", icon:"🎯", name:"随机抽取", desc:"从列表中随机抽一个", tags:"pick random", featured:0},
  {id:"pickmulti", cat:"utility", icon:"🎯", name:"随机抽取多个", desc:"不重复抽取多个", tags:"pick multi", featured:0},
  {id:"yesno", cat:"utility", icon:"❓", name:"是/否 随机", desc:"随机回答是或否", tags:"yes no", featured:0},
  {id:"progressgen", cat:"dev", icon:"▰", name:"进度条生成器", desc:"文字进度条", tags:"progress", featured:0},
  {id:"tablemarkdown", cat:"dev", icon:"▦", name:"Markdown 表格生成", desc:"快速生成 MD 表格", tags:"markdown table", featured:0},
  {id:"listmarkdown", cat:"dev", icon:"•", name:"Markdown 列表生成", desc:"生成无序/有序列表", tags:"markdown list", featured:0},
  {id:"badge", cat:"dev", icon:"🏷️", name:"徽章代码生成", desc:"生成 Shields 风格徽章代码", tags:"badge", featured:0},
  {id:"loremipsum", cat:"utility", icon:"📝", name:"Lorem Ipsum 增强", desc:"可控制段落与长度", tags:"lorem", featured:0},
  {id:"chineseid", cat:"calc", icon:"🪪", name:"身份证信息解析", desc:"解析身份证号信息", tags:"id card", featured:0},
  {id:"mobilearea", cat:"calc", icon:"📱", name:"手机号段查询", desc:"简单号段归属参考", tags:"mobile", featured:0},
  {id:"bankcard", cat:"calc", icon:"💳", name:"银行卡号校验", desc:"Luhn 算法校验", tags:"bank card", featured:0},
  {id:"creditcard", cat:"calc", icon:"💳", name:"信用卡类型识别", desc:"识别卡组织", tags:"credit card", featured:0},
  {id:"passwordentropy", cat:"utility", icon:"🔒", name:"密码熵计算", desc:"估算密码熵值", tags:"password entropy", featured:0},
  {id:"colorpalette2", cat:"dev", icon:"🎨", name:"互补色生成", desc:"生成互补色与邻近色", tags:"color palette", featured:0},
  {id:"boxmodel", cat:"dev", icon:"📦", name:"盒模型计算", desc:"content + padding + border", tags:"box model", featured:0},
  {id:"aspect", cat:"calc", icon:"📐", name:"宽高比计算", desc:"计算并简化宽高比", tags:"aspect ratio", featured:0},
  {id:"percentage4", cat:"calc", icon:"%", name:"占比计算", desc:"部分占总体的百分比", tags:"percentage", featured:0},
  {id:"ruleofthree", cat:"calc", icon:"➗", name:"正比计算", desc:"A/B = C/x 求 x", tags:"proportion", featured:0},
  {id:"average", cat:"calc", icon:"📊", name:"平均值计算", desc:"计算一组数的平均", tags:"average", featured:0},
  {id:"median", cat:"calc", icon:"📊", name:"中位数计算", desc:"计算中位数", tags:"median", featured:0},
  {id:"sum", cat:"calc", icon:"∑", name:"求和 / 积", desc:"一列数字求和与积", tags:"sum product", featured:0},
  {id:"temperature2", cat:"convert", icon:"🌡️", name:"温度转换", desc:"℃ ℉ K 互转", tags:"temperature", featured:0},
  {id:"length2", cat:"convert", icon:"📏", name:"长度转换", desc:"常用长度单位", tags:"length", featured:0},
  {id:"weight2", cat:"convert", icon:"⚖️", name:"重量转换", desc:"常用重量单位", tags:"weight", featured:0},
  {id:"speed2", cat:"convert", icon:"🚀", name:"速度转换", desc:"km/h mph m/s", tags:"speed", featured:0},
  {id:"timeconvert", cat:"convert", icon:"⏱️", name:"时间单位转换", desc:"时分秒毫秒互转", tags:"time", featured:0},
  {id:"byteconvert", cat:"convert", icon:"💾", name:"字节转换", desc:"B KB MB GB TB", tags:"byte", featured:0},
  {id:"angle2", cat:"convert", icon:"∠", name:"角度弧度", desc:"度与弧度互转", tags:"angle", featured:0},
  {id:"roman", cat:"convert", icon:"XII", name:"罗马数字转换", desc:"阿拉伯数字与罗马数字互转", tags:"roman", featured:0},
  {id:"binary", cat:"convert", icon:"01", name:"进制转换增强", desc:"2/8/10/16 进制互转", tags:"binary hex", featured:0},

  // ========== 第八批扩充 ==========
  {id:"textstats", cat:"text", icon:"📈", name:"文本完整统计", desc:"字符/词/行/字节全方位统计", tags:"text stats", featured:0},
  {id:"findreplace", cat:"text", icon:"🔎", name:"查找替换（正则）", desc:"支持正则的查找替换", tags:"find replace regex", featured:0},
  {id:"linestats", cat:"text", icon:"📏", name:"行长度统计", desc:"最长/最短/平均行长度", tags:"line length", featured:0},
  {id:"duplicatecount", cat:"text", icon:"🔢", name:"重复行计数", desc:"统计每行出现次数", tags:"duplicate count", featured:0},
  {id:"shuffle", cat:"text", icon:"🔀", name:"随机打乱行", desc:"随机打乱文本行顺序", tags:"shuffle", featured:0},
  {id:"reversewords", cat:"text", icon:"🔄", name:"单词反转", desc:"反转每个单词或整句", tags:"reverse words", featured:0},
  {id:"wraptext", cat:"text", icon:"↩️", name:"固定宽度换行", desc:"按指定宽度插入换行", tags:"word wrap", featured:0},
  {id:"base64img", cat:"encode", icon:"🖼️", name:"图片 Base64 互转", desc:"图片与 DataURL 转换", tags:"base64 image", featured:0},
  {id:"jwtfull", cat:"encode", icon:"JWT", name:"JWT 完整解析", desc:"Header + Payload 一起看", tags:"jwt full", featured:0},
  {id:"aesgcm", cat:"encode", icon:"🔐", name:"AES-GCM 加解密", desc:"Web Crypto AES-GCM", tags:"aes gcm", featured:0},
  {id:"hmacsha", cat:"encode", icon:"🔑", name:"HMAC-SHA256", desc:"计算 HMAC-SHA256", tags:"hmac", featured:0},
  {id:"pbkdf2", cat:"encode", icon:"🔒", name:"PBKDF2 派生", desc:"密码派生密钥演示", tags:"pbkdf2", featured:0},
  {id:"cssunit2", cat:"dev", icon:"px", name:"CSS 单位换算", desc:"px rem em pt vh vw", tags:"css unit", featured:0},
  {id:"clamp", cat:"dev", icon:"⏸", name:"CSS clamp 生成", desc:"生成响应式 clamp 代码", tags:"clamp", featured:0},
  {id:"aspectcss", cat:"dev", icon:"📐", name:"CSS 宽高比", desc:"aspect-ratio 代码生成", tags:"aspect-ratio", featured:0},
  {id:"shadow2", cat:"dev", icon:"☁", name:"多层阴影生成", desc:"生成复杂 box-shadow", tags:"box-shadow", featured:0},
  {id:"gradient3", cat:"dev", icon:"🌈", name:"多色渐变生成", desc:"线性/径向渐变代码", tags:"gradient", featured:0},
  {id:"animation", cat:"dev", icon:"🎬", name:"CSS 动画模板", desc:"常用动画关键帧模板", tags:"animation", featured:0},
  {id:"mediaq", cat:"dev", icon:"📱", name:"响应式断点", desc:"常用媒体查询模板", tags:"media query", featured:0},
  {id:"htmltable", cat:"dev", icon:"▦", name:"HTML 表格增强", desc:"带表头的表格生成", tags:"html table", featured:0},
  {id:"formgen", cat:"dev", icon:"📝", name:"表单代码生成", desc:"快速生成表单 HTML", tags:"form", featured:0},
  {id:"metaall", cat:"web", icon:"🏷️", name:"完整 Meta 生成", desc:"SEO + OG + Twitter Card", tags:"meta seo", featured:0},
  {id:"robots2", cat:"web", icon:"🤖", name:"Robots.txt 增强", desc:"更多规则的 robots.txt", tags:"robots", featured:0},
  {id:"sitemap2", cat:"web", icon:"🗺️", name:"Sitemap 生成增强", desc:"带 lastmod 的 sitemap", tags:"sitemap", featured:0},
  {id:"htaccess2", cat:"web", icon:"⚙️", name:"htaccess 常用规则", desc:"重定向/压缩/缓存规则", tags:"htaccess", featured:0},
  {id:"nginx2", cat:"web", icon:"🌐", name:"Nginx 配置片段", desc:"常用 Nginx 配置", tags:"nginx", featured:0},
  {id:"docker2", cat:"dev", icon:"🐳", name:"Dockerfile 模板", desc:"常用 Dockerfile 示例", tags:"dockerfile", featured:0},
  {id:"gitignore", cat:"dev", icon:"📄", name:".gitignore 模板", desc:"常用 gitignore 规则", tags:"gitignore", featured:0},
  {id:"editorconfig", cat:"dev", icon:"⚙️", name:"EditorConfig 生成", desc:"生成 .editorconfig", tags:"editorconfig", featured:0},
  {id:"randomname2", cat:"utility", icon:"👤", name:"随机英文名", desc:"生成随机英文姓名", tags:"random name", featured:0},
  {id:"randomcolor3", cat:"utility", icon:"🎨", name:"随机颜色（HSL）", desc:"HSL 模式随机颜色", tags:"random color", featured:0},
  {id:"passwordpin2", cat:"utility", icon:"🔢", name:"数字验证码", desc:"生成数字验证码", tags:"pin otp", featured:0},
  {id:"loremcn2", cat:"utility", icon:"中", name:"中文假文增强", desc:"更自然的中文占位文本", tags:"lorem chinese", featured:0},
  {id:"qrcontent", cat:"utility", icon:"▦", name:"二维码内容构造器", desc:"文本/URL/WiFi/邮件", tags:"qr content", featured:0},
  {id:"worldclock2", cat:"utility", icon:"🌍", name:"多时区时间", desc:"查看多个城市当前时间", tags:"world clock", featured:0},
  {id:"stopwatch", cat:"utility", icon:"⏱️", name:"秒表", desc:"简易秒表计时", tags:"stopwatch", featured:0},
  {id:"timer", cat:"utility", icon:"⏳", name:"倒计时器", desc:"设定分钟倒计时", tags:"timer", featured:0},
  {id:"ageprecise", cat:"calc", icon:"🎂", name:"精确年龄", desc:"岁/月/天精确计算", tags:"age", featured:0},
  {id:"daysbetween", cat:"calc", icon:"📅", name:"日期间隔", desc:"计算两日期间隔天数", tags:"days between", featured:0},
  {id:"workdays2", cat:"calc", icon:"💼", name:"工作日计算增强", desc:"排除周末的工作日", tags:"workdays", featured:0},
  {id:"pregnancy", cat:"calc", icon:"👶", name:"预产期估算", desc:"根据末次月经估算", tags:"pregnancy", featured:0},
  {id:"calorie", cat:"calc", icon:"🔥", name:"基础代谢估算", desc:"BMR 简易计算", tags:"bmr calorie", featured:0},
  {id:"water", cat:"calc", icon:"💧", name:"每日饮水量", desc:"根据体重建议饮水量", tags:"water", featured:0},
  {id:"fuel2", cat:"calc", icon:"⛽", name:"油耗花费", desc:"油耗与花费计算", tags:"fuel", featured:0},
  {id:"discount3", cat:"calc", icon:"🏷️", name:"折扣对比", desc:"多个折扣哪个更划算", tags:"discount compare", featured:0},
  {id:"vat2", cat:"calc", icon:"🧾", name:"税费计算", desc:"含税未税互算", tags:"vat tax", featured:0},
  {id:"interest", cat:"calc", icon:"💰", name:"简单利息", desc:"单利计算", tags:"interest", featured:0},
  {id:"compound3", cat:"calc", icon:"📈", name:"复利终极版", desc:"本金+定投复利计算", tags:"compound", featured:0},

  // ========== 设计 / 颜色 ==========
  {id:"colorpicker", cat:"design", icon:"🎨", name:"颜色选择器", desc:"可视化选色并复制色值", tags:"color picker", featured:1},
  {id:"palettegen", cat:"design", icon:"🌈", name:"配色方案生成", desc:"根据主色生成配色方案", tags:"palette", featured:1},
  {id:"contrastcheck", cat:"design", icon:"◐", name:"对比度检测", desc:"WCAG 对比度检查", tags:"contrast wcag", featured:0},
  {id:"colormix", cat:"design", icon:"🧪", name:"颜色混合", desc:"混合两个颜色", tags:"color mix", featured:0},
  {id:"gradientgen", cat:"design", icon:"🌈", name:"渐变生成器", desc:"线性/径向渐变可视化", tags:"gradient", featured:0},
  {id:"shadowgen", cat:"design", icon:"☁", name:"阴影生成器", desc:"可视化 box-shadow", tags:"shadow", featured:0},
  {id:"borderradius2", cat:"design", icon:"⬜", name:"圆角可视化", desc:"四角独立圆角调整", tags:"border radius", featured:0},
  {id:"fontpair", cat:"design", icon:"🔤", name:"字体搭配建议", desc:"常见中英文字体搭配", tags:"font pair", featured:0},
  {id:"spacing", cat:"design", icon:"↔", name:"间距尺", desc:"常用间距参考", tags:"spacing", featured:0},
  {id:"iconsize", cat:"design", icon:"⬜", name:"图标尺寸参考", desc:"常用图标尺寸速查", tags:"icon size", featured:0},

  // ========== 数学工具 ==========
  {id:"calculator", cat:"math", icon:"🧮", name:"简易计算器", desc:"四则运算计算器", tags:"calculator", featured:1},
  {id:"percentagecalc", cat:"math", icon:"%", name:"百分比计算器", desc:"多种百分比场景", tags:"percent", featured:0},
  {id:"quadratic", cat:"math", icon:"𝑥²", name:"一元二次方程", desc:"求根公式求解", tags:"quadratic", featured:0},
  {id:"triangle", cat:"math", icon:"△", name:"三角形计算", desc:"面积/周长/角度", tags:"triangle", featured:0},
  {id:"circle", cat:"math", icon:"○", name:"圆相关计算", desc:"面积/周长/直径", tags:"circle", featured:0},
  {id:"factorial", cat:"math", icon:"!", name:"阶乘计算", desc:"n! 计算", tags:"factorial", featured:0},
  {id:"combination", cat:"math", icon:"𝐶", name:"排列组合", desc:"P(n,k) 与 C(n,k)", tags:"combination", featured:0},
  {id:"prime2", cat:"math", icon:"🔢", name:"质数工具", desc:"判断 + 生成质数表", tags:"prime", featured:0},
  {id:"gcdlcm2", cat:"math", icon:"➗", name:"GCD / LCM", desc:"最大公约数与最小公倍数", tags:"gcd lcm", featured:0},
  {id:"matrix", cat:"math", icon:"▦", name:"矩阵加法", desc:"简单 2x2 矩阵加法", tags:"matrix", featured:0},
  {id:"statistics", cat:"math", icon:"📊", name:"统计量计算", desc:"平均/中位/方差/标准差", tags:"statistics", featured:0},
  {id:"logarithm", cat:"math", icon:"㏒", name:"对数计算", desc:"log / ln 计算", tags:"logarithm", featured:0},
  {id:"power", cat:"math", icon:"𝑥ⁿ", name:"幂与开方", desc:"幂运算与开方", tags:"power root", featured:0},
  {id:"fraction", cat:"math", icon:"¾", name:"分数运算", desc:"分数加减乘除", tags:"fraction", featured:0},
  {id:"percentchange", cat:"math", icon:"📈", name:"变化率计算", desc:"增长/下降百分比", tags:"percent change", featured:0},

  // ========== 时间 / 日期 ==========
  {id:"timestampfull", cat:"time", icon:"⏱️", name:"时间戳全家桶", desc:"秒/毫秒/日期互转", tags:"timestamp", featured:1},
  {id:"datediff2", cat:"time", icon:"📅", name:"日期差计算", desc:"两日期间隔详细信息", tags:"date diff", featured:0},
  {id:"adddate", cat:"time", icon:"➕", name:"日期加减", desc:"给日期加/减天数", tags:"date add", featured:0},
  {id:"weekday", cat:"time", icon:"📆", name:"星期几查询", desc:"查询某日是星期几", tags:"weekday", featured:0},
  {id:"weeknum", cat:"time", icon:"🔢", name:"一年第几周", desc:"计算周数", tags:"week number", featured:0},
  {id:"countdown3", cat:"time", icon:"⏳", name:"节日倒计时", desc:"距离下一个节日还有多久", tags:"countdown festival", featured:0},
  {id:"workdaycalc", cat:"time", icon:"💼", name:"工作日推算", desc:"N个工作日后是哪天", tags:"workday", featured:0},
  {id:"agefull", cat:"time", icon:"🎂", name:"完整年龄", desc:"岁/月/天/总天数", tags:"age", featured:0},
  {id:"timezone", cat:"time", icon:"🌍", name:"时区转换", desc:"常用城市时间对比", tags:"timezone", featured:0},
  {id:"cronhelper", cat:"time", icon:"⏰", name:"Cron 表达式助手", desc:"生成与解读 Cron", tags:"cron", featured:0},
  {id:"duration", cat:"time", icon:"⌛", name:"时长格式化", desc:"秒转 时:分:秒", tags:"duration", featured:0},
  {id:"calendar", cat:"time", icon:"🗓️", name:"月历生成", desc:"生成指定月份日历", tags:"calendar", featured:0},

  // ========== 趣味 / 随机 ==========
  {id:"dice2", cat:"fun", icon:"🎲", name:"多面骰子", desc:"自定义面数与次数", tags:"dice", featured:1},
  {id:"coin2", cat:"fun", icon:"🪙", name:"抛硬币", desc:"正面反面随机", tags:"coin", featured:0},
  {id:"lottery", cat:"fun", icon:"🎰", name:"随机抽奖", desc:"从名单中随机抽取", tags:"lottery", featured:1},
  {id:"randomteam", cat:"fun", icon:"👥", name:"随机分组", desc:"把名单随机分成几组", tags:"team random", featured:0},
  {id:"yesorno", cat:"fun", icon:"❓", name:"是或否", desc:"帮你做决定", tags:"yes no", featured:0},
  {id:"rockpaper", cat:"fun", icon:"✊", name:"石头剪刀布", desc:"和电脑玩一局", tags:"rock paper scissors", featured:0},
  {id:"numberguess", cat:"fun", icon:"🔢", name:"猜数字", desc:"1-100 猜数字游戏", tags:"guess number", featured:0},
  {id:"randomquote", cat:"fun", icon:"💬", name:"随机一言", desc:"随机显示一句激励语", tags:"quote", featured:0},
  {id:"passwordfun", cat:"fun", icon:"🔑", name:"趣味密码", desc:"用形容词+名词生成密码", tags:"password fun", featured:0},
  {id:"emoji2", cat:"fun", icon:"😀", name:"Emoji 表情包", desc:"分类 Emoji 一键复制", tags:"emoji", featured:0},
  {id:"randomcolor4", cat:"fun", icon:"🎨", name:"随机调色板", desc:"一次生成一套随机色", tags:"random palette", featured:0},
  {id:"lucky", cat:"fun", icon:"🍀", name:"今日运势", desc:"随机运势指数", tags:"lucky", featured:0},

  // ========== 生活助手 ==========
  {id:"bmi3", cat:"life", icon:"⚖️", name:"BMI 健康评估", desc:"BMI + 建议", tags:"bmi", featured:1},
  {id:"water2", cat:"life", icon:"💧", name:"喝水提醒计算", desc:"每日建议饮水量", tags:"water", featured:0},
  {id:"sleep", cat:"life", icon:"😴", name:"睡眠时间建议", desc:"根据起床时间推算入睡", tags:"sleep", featured:0},
  {id:"recipe", cat:"life", icon:"🍳", name:"菜谱份量换算", desc:"按人数调整食材用量", tags:"recipe", featured:0},
  {id:"tip2", cat:"life", icon:"💸", name:"小费与AA", desc:"小费 + 分账一站式", tags:"tip split", featured:0},
  {id:"fuel3", cat:"life", icon:"⛽", name:"出行油费估算", desc:"距离+油耗+油价", tags:"fuel", featured:0},
  {id:"loan2", cat:"life", icon:"🏠", name:"房贷月供", desc:"等额本息计算", tags:"loan", featured:0},
  {id:"tax2", cat:"life", icon:"🧾", name:"个税速算", desc:"简单版工资个税", tags:"tax", featured:0},
  {id:"zodiac2", cat:"life", icon:"♈", name:"星座运势日", desc:"查星座", tags:"zodiac", featured:0},
  {id:"shengxiao", cat:"life", icon:"🐉", name:"生肖查询", desc:"年份对应生肖", tags:"zodiac chinese", featured:0},
  {id:"blood2", cat:"life", icon:"🩸", name:"血型遗传", desc:"父母血型推子女", tags:"blood", featured:0},
  {id:"pregnancy2", cat:"life", icon:"👶", name:"预产期计算", desc:"末次月经推预产期", tags:"pregnancy", featured:0},
  {id:"clothing", cat:"life", icon:"👕", name:"尺码对照", desc:"常见服装尺码参考", tags:"size chart", featured:0},
  {id:"packing", cat:"life", icon:"🎒", name:"旅行清单", desc:"旅行物品清单模板", tags:"packing list", featured:0},

  // ========== 办公效率 ==========
  {id:"wordcount3", cat:"office", icon:"📊", name:"文案字数统计", desc:"中英文案字数与阅读时间", tags:"word count", featured:1},
  {id:"readingtime", cat:"office", icon:"📖", name:"阅读时间估算", desc:"根据字数估算阅读时长", tags:"reading time", featured:0},
  {id:"meetingcost", cat:"office", icon:"💼", name:"会议成本估算", desc:"人数×时薪×时长", tags:"meeting cost", featured:0},
  {id:"pomodoro", cat:"office", icon:"🍅", name:"番茄钟", desc:"25分钟专注计时", tags:"pomodoro", featured:1},
  {id:"checklist", cat:"office", icon:"✅", name:"待办清单模板", desc:"常用待办模板", tags:"todo checklist", featured:0},
  {id:"emailtemp", cat:"office", icon:"📧", name:"邮件模板", desc:"常用商务邮件模板", tags:"email template", featured:0},
  {id:"resume", cat:"office", icon:"📄", name:"简历要点检查", desc:"简历自查清单", tags:"resume", featured:0},
  {id:"invoice", cat:"office", icon:"🧾", name:"简单账单生成", desc:"生成简易账单文本", tags:"invoice", featured:0},
  {id:"pricecalc", cat:"office", icon:"💰", name:"报价计算", desc:"成本+利润率报价", tags:"price quote", featured:0},
  {id:"discounttable", cat:"office", icon:"🏷️", name:"折扣对照表", desc:"生成折扣价格表", tags:"discount table", featured:0},
  {id:"workhours", cat:"office", icon:"⏱️", name:"工时统计", desc:"上下班工时计算", tags:"work hours", featured:0},
  {id:"overtime", cat:"office", icon:"🌙", name:"加班费估算", desc:"加班时长与费用", tags:"overtime", featured:0},

  // ========== 健康运动 ==========
  {id:"bmr2", cat:"health", icon:"🔥", name:"基础代谢 BMR", desc:"Mifflin 公式计算", tags:"bmr", featured:1},
  {id:"tdee", cat:"health", icon:"⚡", name:"每日总消耗 TDEE", desc:"根据活动量估算", tags:"tdee", featured:0},
  {id:"macros", cat:"health", icon:"🥗", name:"宏量营养素", desc:"蛋白/碳水/脂肪分配", tags:"macros", featured:0},
  {id:"pace", cat:"health", icon:"🏃", name:"配速计算", desc:"跑步配速与完赛时间", tags:"pace running", featured:0},
  {id:"heartrate", cat:"health", icon:"❤️", name:"目标心率", desc:"运动目标心率区间", tags:"heart rate", featured:0},
  {id:"steps", cat:"health", icon:"👟", name:"步数热量", desc:"步数估算消耗热量", tags:"steps calorie", featured:0},
  {id:"water3", cat:"health", icon:"💧", name:"饮水量建议", desc:"按体重与活动量", tags:"water", featured:0},
  {id:"sleepcycle", cat:"health", icon:"😴", name:"睡眠周期", desc:"最佳起床/入睡时间", tags:"sleep cycle", featured:0},
  {id:"bmi4", cat:"health", icon:"⚖️", name:"BMI + 体脂估算", desc:"BMI 与简易体脂", tags:"bmi bodyfat", featured:0},
  {id:"idealweight2", cat:"health", icon:"🎯", name:"理想体重范围", desc:"多种公式参考", tags:"ideal weight", featured:0},
  {id:"oneRm", cat:"health", icon:"🏋️", name:"1RM 推算", desc:"根据负重推最大重量", tags:"1rm strength", featured:0},
  {id:"plank", cat:"health", icon:"🧘", name:"平板支撑计时", desc:"简易计时器", tags:"plank timer", featured:0},

  // ========== 安全检测 ==========
  {id:"pwdcheck", cat:"security", icon:"🔑", name:"密码强度详细", desc:"多维度密码评分", tags:"password strength", featured:1},
  {id:"pwdleak", cat:"security", icon:"⚠️", name:"密码常见泄露库", desc:"检测是否在常见弱密码中", tags:"password leak", featured:0},
  {id:"urlcheck", cat:"security", icon:"🔗", name:"链接安全提示", desc:"检查链接特征", tags:"url safety", featured:0},
  {id:"headersafe", cat:"security", icon:"🛡️", name:"安全响应头检查", desc:"常用安全头清单", tags:"security headers", featured:0},
  {id:"csp", cat:"security", icon:"📋", name:"CSP 策略生成", desc:"内容安全策略示例", tags:"csp", featured:0},
  {id:"jwtcheck", cat:"security", icon:"JWT", name:"JWT 安全检查", desc:"检查 JWT 基本风险", tags:"jwt security", featured:0},
  {id:"hashid", cat:"security", icon:"#", name:"哈希识别", desc:"根据长度猜测哈希类型", tags:"hash identify", featured:0},
  {id:"randomsecure", cat:"security", icon:"🎲", name:"安全随机数", desc:"密码学安全随机", tags:"secure random", featured:0},
  {id:"token", cat:"security", icon:"🎫", name:"访问令牌生成", desc:"生成随机 Token", tags:"token", featured:0},
  {id:"apikey", cat:"security", icon:"🔑", name:"API Key 生成", desc:"生成风格化 API Key", tags:"api key", featured:0},
  {id:"uuidsecure", cat:"security", icon:"UUID", name:"安全 UUID", desc:"批量安全 UUID", tags:"uuid", featured:0},
  {id:"entropy", cat:"security", icon:"📊", name:"熵值估算", desc:"密码/字符串熵", tags:"entropy", featured:0},

  // ========== 更多文本 ==========
  {id:"textsummary", cat:"text", icon:"📝", name:"文本摘要（截取）", desc:"按句子或字数截取摘要", tags:"summary", featured:0},
  {id:"keyword", cat:"text", icon:"🔑", name:"关键词提取", desc:"简单词频关键词", tags:"keyword", featured:0},
  {id:"sentiment", cat:"text", icon:"😊", name:"情感倾向（简易）", desc:"基于词典的正负向", tags:"sentiment", featured:0},
  {id:"readability", cat:"text", icon:"📖", name:"可读性评估", desc:"句子与词长评估", tags:"readability", featured:0},
  {id:"textcompare", cat:"text", icon:"↔", name:"文本相似度", desc:"简单字符重合度", tags:"similarity", featured:0},
  {id:"pinyin", cat:"text", icon:"拼音", name:"拼音首字母", desc:"提取中文拼音首字母", tags:"pinyin", featured:0},
  {id:"tradsimp", cat:"text", icon:"繁简", name:"简繁转换（常用字）", desc:"常用字简繁互转", tags:"traditional simplified", featured:0},
  {id:"numbercn", cat:"text", icon:"壹", name:"数字转中文", desc:"阿拉伯数字转中文大写", tags:"chinese number", featured:0},

  // ========== 更多开发 ==========
  {id:"regexlab", cat:"dev", icon:".*", name:"正则实验室", desc:"测试正则匹配结果", tags:"regex lab", featured:1},
  {id:"jsonpath2", cat:"dev", icon:"$.", name:"JSON 路径提取", desc:"点路径提取值", tags:"jsonpath", featured:0},
  {id:"sqlfmt", cat:"dev", icon:"SQL", name:"SQL 格式化（简易）", desc:"基础 SQL 美化", tags:"sql format", featured:0},
  {id:"cronui", cat:"dev", icon:"⏰", name:"Cron 可视化", desc:"选择生成 Cron", tags:"cron", featured:0},
  {id:"useragent2", cat:"dev", icon:"UA", name:"UA 生成器", desc:"多浏览器 UA", tags:"useragent", featured:0},
  {id:"httpcode", cat:"dev", icon:"📡", name:"HTTP 状态大全", desc:"完整状态码说明", tags:"http status", featured:0},
  {id:"mimetype2", cat:"dev", icon:"📎", name:"MIME 大全", desc:"扩展名与 MIME", tags:"mime", featured:0},
  {id:"colorcss", cat:"dev", icon:"🎨", name:"CSS 颜色函数", desc:"rgb/hsl/hex 互转代码", tags:"css color", featured:0},

  // ========== 更多转换 ==========
  {id:"base64file2", cat:"convert", icon:"📁", name:"文件 Base64", desc:"本地文件转 Base64", tags:"file base64", featured:0},
  {id:"csvjson", cat:"convert", icon:"📊", name:"CSV ↔ JSON", desc:"互相转换", tags:"csv json", featured:0},
  {id:"xmljson", cat:"convert", icon:"XML", name:"简易 XML 转 JSON", desc:"基础 XML 转 JSON", tags:"xml json", featured:0},
  {id:"yamljson2", cat:"convert", icon:"YAML", name:"YAML ↔ JSON 提示", desc:"格式对照说明", tags:"yaml json", featured:0},
  {id:"markdownhtml", cat:"convert", icon:"MD", name:"MD → HTML 增强", desc:"更多 Markdown 语法", tags:"markdown html", featured:0},
  {id:"htmlmarkdown", cat:"convert", icon:"HTML", name:"HTML → 纯文本", desc:"剥离标签保留文本", tags:"html text", featured:0},

  // ========== 更多趣味 ==========
  {id:"wheel", cat:"fun", icon:"🎡", name:"随机转盘", desc:"输入选项随机选一个", tags:"wheel random", featured:1},
  {id:"truthdare", cat:"fun", icon:"🎲", name:"真心话大冒险", desc:"随机题目", tags:"truth dare", featured:0},
  {id:"wouldyourather", cat:"fun", icon:"🤔", name:"你更愿意", desc:"二选一问题", tags:"would you rather", featured:0},
  {id:"namegen", cat:"fun", icon:"🧙", name:"幻想名字生成", desc:"随机奇幻风格名字", tags:"name generator", featured:0},
  {id:"story", cat:"fun", icon:"📖", name:"随机故事开头", desc:"创意写作开头", tags:"story prompt", featured:0},
  {id:"joke", cat:"fun", icon:"😂", name:"随机冷笑话", desc:"来一句冷笑话", tags:"joke", featured:0},
  {id:"compliment", cat:"fun", icon:"💝", name:"随机夸夸", desc:"正能量夸人", tags:"compliment", featured:0},
  {id:"decision", cat:"fun", icon:"🎯", name:"选择困难症", desc:"帮你做决定", tags:"decision", featured:0},

  // ========== 学习教育 ==========
  {id:"flashcard", cat:"edu", icon:"🃏", name:"记忆卡片", desc:"正反面记忆卡片练习", tags:"flashcard", featured:1},
  {id:"quiz", cat:"edu", icon:"❓", name:"随机测验", desc:"从题库随机出题", tags:"quiz", featured:0},
  {id:"pomodoro2", cat:"edu", icon:"🍅", name:"学习番茄钟", desc:"专注学习计时", tags:"pomodoro study", featured:0},
  {id:"wordmemorize", cat:"edu", icon:"🔤", name:"单词本", desc:"简单单词记忆列表", tags:"vocabulary", featured:0},
  {id:"mathdrill", cat:"edu", icon:"🔢", name:"口算练习", desc:"随机加减乘除练习", tags:"math drill", featured:1},
  {id:"typing", cat:"edu", icon:"⌨️", name:"打字速度测试", desc:"简易打字测速", tags:"typing speed", featured:0},
  {id:"formula", cat:"edu", icon:"📐", name:"常用公式速查", desc:"数学物理公式", tags:"formula", featured:0},
  {id:"periodic", cat:"edu", icon:"🧪", name:"元素周期表速查", desc:"常见元素信息", tags:"periodic table", featured:0},
  {id:"unitscience", cat:"edu", icon:"🔬", name:"科学单位换算", desc:"常用科学单位", tags:"science unit", featured:0},
  {id:"score", cat:"edu", icon:"📊", name:"成绩加权平均", desc:"学分绩点计算", tags:"gpa score", featured:0},
  {id:"studyplan", cat:"edu", icon:"📅", name:"学习计划模板", desc:"每日/周学习计划", tags:"study plan", featured:0},
  {id:"citestyle", cat:"edu", icon:"📚", name:"引用格式示例", desc:"APA/MLA 等格式示例", tags:"citation", featured:0},

  // ========== 理财记账 ==========
  {id:"budget", cat:"finance", icon:"💰", name:"月度预算", desc:"收入支出预算分配", tags:"budget", featured:1},
  {id:"savings", cat:"finance", icon:"🏦", name:"存款目标", desc:"达到目标需要多久", tags:"savings", featured:0},
  {id:"interest2", cat:"finance", icon:"📈", name:"利息对比", desc:"单利复利对比", tags:"interest", featured:0},
  {id:"loan3", cat:"finance", icon:"🏠", name:"贷款对比", desc:"不同方案月供对比", tags:"loan compare", featured:0},
  {id:"inflation", cat:"finance", icon:"📉", name:"通货膨胀影响", desc:"购买力变化估算", tags:"inflation", featured:0},
  {id:"exchangerate", cat:"finance", icon:"💱", name:"汇率速算", desc:"常用货币换算", tags:"exchange", featured:0},
  {id:"tip3", cat:"finance", icon:"🧾", name:"账单拆分", desc:"多人账单智能拆分", tags:"bill split", featured:0},
  {id:"salary", cat:"finance", icon:"💵", name:"税后工资估算", desc:"简易税后收入", tags:"salary tax", featured:0},
  {id:"invest", cat:"finance", icon:"📊", name:"投资回报估算", desc:"年化收益粗算", tags:"investment", featured:0},
  {id:"debt", cat:"finance", icon:"💳", name:"还债计划", desc:"每月还款与周期", tags:"debt payoff", featured:0},
  {id:"networth", cat:"finance", icon:"💎", name:"净资产速算", desc:"资产-负债", tags:"net worth", featured:0},
  {id:"fire", cat:"finance", icon:"🔥", name:"FIRE 计算器", desc:"财务自由粗算", tags:"fire retire", featured:0},

  // ========== 出行旅行 ==========
  {id:"packing2", cat:"travel", icon:"🎒", name:"旅行打包清单", desc:"按行程生成清单", tags:"packing", featured:1},
  {id:"timezone2", cat:"travel", icon:"🌍", name:"时差查询", desc:"城市时差对比", tags:"timezone", featured:0},
  {id:"jetlag", cat:"travel", icon:"😴", name:"时差调整建议", desc:"飞时差作息建议", tags:"jetlag", featured:0},
  {id:"currency", cat:"travel", icon:"💴", name:"旅行货币换算", desc:"常用旅行货币", tags:"currency", featured:0},
  {id:"distance", cat:"travel", icon:"📍", name:"距离与油费", desc:"路程油费估算", tags:"distance fuel", featured:0},
  {id:"itinerary", cat:"travel", icon:"🗺️", name:"行程模板", desc:"一日/多日行程模板", tags:"itinerary", featured:0},
  {id:"checklist2", cat:"travel", icon:"✅", name:"出发前检查", desc:"出门检查清单", tags:"checklist travel", featured:0},
  {id:"weather", cat:"travel", icon:"🌤️", name:"穿衣建议", desc:"根据温度穿衣参考", tags:"weather clothes", featured:0},
  {id:"visa", cat:"travel", icon:"🛂", name:"签证材料清单", desc:"常见签证材料", tags:"visa", featured:0},
  {id:"adapter", cat:"travel", icon:"🔌", name:"电源转换头", desc:"各国插头类型", tags:"adapter plug", featured:0},
  {id:"luggage", cat:"travel", icon:"🧳", name:"行李额计算", desc:"托运行李估算", tags:"luggage", featured:0},
  {id:"tiptravel", cat:"travel", icon:"💸", name:"旅行小费参考", desc:"各国小费习惯", tags:"tip travel", featured:0},

  // ========== 继续狂加各分类 ==========
  {id:"textclean2", cat:"text", icon:"🧹", name:"文本深度清理", desc:"去空行、空格、特殊符", tags:"clean text", featured:0},
  {id:"extractnum", cat:"text", icon:"🔢", name:"提取所有数字", desc:"从文本提取数字", tags:"extract number", featured:0},
  {id:"extractcn", cat:"text", icon:"中", name:"提取中文", desc:"只保留中文字符", tags:"extract chinese", featured:0},
  {id:"extracten", cat:"text", icon:"A", name:"提取英文", desc:"只保留英文字母", tags:"extract english", featured:0},
  {id:"sortbylen", cat:"text", icon:"↕️", name:"按长度排序行", desc:"行按字符数排序", tags:"sort length", featured:0},
  {id:"dedupekeep", cat:"text", icon:"✨", name:"去重保序增强", desc:"智能去重", tags:"dedupe", featured:0},
  {id:"insertline", cat:"text", icon:"➕", name:"隔行插入", desc:"每隔N行插入内容", tags:"insert line", featured:0},
  {id:"column", cat:"text", icon:"▦", name:"文本分列", desc:"按分隔符分列对齐", tags:"column", featured:0},

  {id:"uuidnil", cat:"encode", icon:"UUID", name:"Nil UUID", desc:"生成全零 UUID", tags:"uuid nil", featured:0},
  {id:"ulid", cat:"encode", icon:"ULID", name:"ULID 生成", desc:"有序唯一 ID", tags:"ulid", featured:0},
  {id:"objectid", cat:"encode", icon:"OID", name:"ObjectId 生成", desc:"Mongo 风格 ObjectId", tags:"objectid", featured:0},
  {id:"shortid", cat:"encode", icon:"ID", name:"短 ID 生成", desc:"8-12 位短 ID", tags:"short id", featured:0},
  {id:"hashfile2", cat:"encode", icon:"📄", name:"文本多哈希", desc:"MD5/SHA 一次出", tags:"hash multi", featured:0},

  {id:"ipinfo", cat:"web", icon:"🌐", name:"IP 信息解析", desc:"解析 IPv4 结构", tags:"ip", featured:0},
  {id:"subnet", cat:"web", icon:"📡", name:"子网计算", desc:"CIDR 子网信息", tags:"subnet cidr", featured:0},
  {id:"dnsrecord", cat:"web", icon:"DNS", name:"DNS 记录类型", desc:"常见 DNS 记录说明", tags:"dns", featured:0},
  {id:"httpmethod", cat:"web", icon:"📡", name:"HTTP 方法说明", desc:"GET POST 等说明", tags:"http method", featured:0},
  {id:"cors", cat:"web", icon:"🔒", name:"CORS 配置示例", desc:"跨域配置参考", tags:"cors", featured:0},

  {id:"flexplay", cat:"dev", icon:"▭", name:"Flex 游乐场", desc:"常用 Flex 组合", tags:"flex", featured:0},
  {id:"gridplay", cat:"dev", icon:"▦", name:"Grid 游乐场", desc:"常用 Grid 模板", tags:"grid", featured:0},
  {id:"animcss", cat:"dev", icon:"🎬", name:"动画预设", desc:"淡入淡出等动画", tags:"animation css", featured:0},
  {id:"breakpoint", cat:"dev", icon:"📱", name:"响应式断点", desc:"常用断点代码", tags:"breakpoint", featured:0},
  {id:"zindex", cat:"dev", icon:"📚", name:"z-index 管理", desc:"层级命名建议", tags:"z-index", featured:0},
  {id:"gitignore2", cat:"dev", icon:"📄", name:"gitignore 生成", desc:"多场景 gitignore", tags:"gitignore", featured:0},
  {id:"dockerfile2", cat:"dev", icon:"🐳", name:"Dockerfile 模板", desc:"Node/Python/静态", tags:"dockerfile", featured:0},
  {id:"makefile", cat:"dev", icon:"⚙️", name:"Makefile 模板", desc:"常用 Makefile", tags:"makefile", featured:0},

  {id:"imageratio", cat:"image", icon:"📐", name:"图片比例计算", desc:"保持比例求边长", tags:"image ratio", featured:0},
  {id:"favicon2", cat:"image", icon:"🔖", name:"Favicon 代码", desc:"多尺寸 favicon 链接", tags:"favicon", featured:0},
  {id:"placeholder2", cat:"image", icon:"🖼️", name:"占位图服务", desc:"多占位图链接", tags:"placeholder", featured:0},
  {id:"colorfromimg", cat:"image", icon:"🎨", name:"主色提取说明", desc:"图片取色方法", tags:"color extract", featured:0},

  {id:"colortint", cat:"design", icon:"🎨", name:"色调明暗", desc:"生成浅色深色变体", tags:"tint shade", featured:0},
  {id:"palette5", cat:"design", icon:"🌈", name:"五色配色", desc:"一键五色方案", tags:"palette", featured:0},
  {id:"contrast2", cat:"design", icon:"◐", name:"文字可读性", desc:"前景背景是否可读", tags:"contrast", featured:0},
  {id:"cssfilter", cat:"design", icon:"✨", name:"CSS 滤镜", desc:"常用 filter 代码", tags:"css filter", featured:0},

  {id:"matrix2", cat:"math", icon:"▦", name:"2x2 矩阵运算", desc:"加减乘", tags:"matrix", featured:0},
  {id:"vector", cat:"math", icon:"→", name:"向量点积", desc:"二维向量点积", tags:"vector", featured:0},
  {id:"quadratic2", cat:"math", icon:"𝑥²", name:"二次方程增强", desc:"求根+顶点", tags:"quadratic", featured:0},
  {id:"series", cat:"math", icon:"∑", name:"数列求和", desc:"等差等比数列", tags:"series", featured:0},
  {id:"probability", cat:"math", icon:"🎲", name:"概率计算", desc:"简单古典概率", tags:"probability", featured:0},

  {id:"ageplanet", cat:"fun", icon:"🪐", name:"星球年龄", desc:"其他星球上的年龄", tags:"planet age", featured:0},
  {id:"dayofyear", cat:"time", icon:"📅", name:"一年第几天", desc:"今天是今年第几天", tags:"day of year", featured:0},
  {id:"weekdaycn", cat:"time", icon:"📆", name:"中文星期", desc:"日期转中文星期", tags:"weekday", featured:0},
  {id:"moon", cat:"time", icon:"🌙", name:"月相估算", desc:"简易月相", tags:"moon phase", featured:0},

  {id:"habit", cat:"life", icon:"✅", name:"习惯打卡模板", desc:"习惯追踪列表", tags:"habit", featured:0},
  {id:"grocery", cat:"life", icon:"🛒", name:"购物清单", desc:"超市购物模板", tags:"grocery", featured:0},
  {id:"meal", cat:"life", icon:"🍽️", name:"一周菜单", desc:"简单一周食谱", tags:"meal plan", featured:0},
  {id:"chore", cat:"life", icon:"🧹", name:"家务分工", desc:"家务随机分配", tags:"chore", featured:0},

  {id:"invoice2", cat:"office", icon:"🧾", name:"发票信息模板", desc:"开票信息填写", tags:"invoice", featured:0},
  {id:"agenda", cat:"office", icon:"📋", name:"会议议程", desc:"会议议程模板", tags:"agenda", featured:0},
  {id:"okr", cat:"office", icon:"🎯", name:"OKR 模板", desc:"目标与关键结果", tags:"okr", featured:0},
  {id:"standup", cat:"office", icon:"🗣️", name:"站会模板", desc:"每日站会内容", tags:"standup", featured:0},

  {id:"fasting", cat:"health", icon:"⏰", name:"轻断食计时", desc:"16:8 断食计时", tags:"fasting", featured:0},
  {id:"waterlog", cat:"health", icon:"💧", name:"喝水记录", desc:"今日饮水量记录", tags:"water log", featured:0},
  {id:"stretch", cat:"health", icon:"🧘", name:"久坐拉伸提醒", desc:"拉伸动作建议", tags:"stretch", featured:0},
  {id:"posture", cat:"health", icon:"🪑", name:"坐姿检查", desc:"办公坐姿要点", tags:"posture", featured:0},

  {id:"passphrase", cat:"security", icon:"🔐", name:"密码短语", desc:"多词密码短语生成", tags:"passphrase", featured:0},
  {id:"otp", cat:"security", icon:"🔢", name:"OTP 验证码", desc:"6位数字 OTP", tags:"otp", featured:0},
  {id:"secret", cat:"security", icon:"🤫", name:"密钥生成", desc:"Base64 随机密钥", tags:"secret key", featured:0},
  {id:"checklistsec", cat:"security", icon:"🛡️", name:"安全检查清单", desc:"网站安全自查", tags:"security checklist", featured:0},

  // ========== 美食烹饪 ==========
  {id:"recipe2", cat:"food", icon:"🍳", name:"菜谱份量", desc:"按人数缩放食材", tags:"recipe scale", featured:1},
  {id:"cooktime", cat:"food", icon:"⏱️", name:"烹饪时间换算", desc:"烤箱温度与时间参考", tags:"cook time", featured:0},
  {id:"measure", cat:"food", icon:"🥄", name:"厨房用量换算", desc:"杯/勺/克互转", tags:"kitchen measure", featured:0},
  {id:"waterboil", cat:"food", icon:"💧", name:"煮面水位", desc:"面条水量参考", tags:"boil water", featured:0},
  {id:"coffee", cat:"food", icon:"☕", name:"手冲咖啡比例", desc:"粉水比计算", tags:"coffee ratio", featured:0},
  {id:"tea", cat:"food", icon:"🍵", name:"泡茶时间", desc:"常见茶类冲泡参考", tags:"tea", featured:0},
  {id:"baking", cat:"food", icon:"🧁", name:"烘焙温度转换", desc:"℃ ℉ 烤箱转换", tags:"baking", featured:0},
  {id:"nutrition", cat:"food", icon:"🥗", name:"简单热量估算", desc:"常见食物热量", tags:"nutrition", featured:0},
  {id:"menuweek", cat:"food", icon:"📅", name:"一周菜单生成", desc:"随机一周菜谱", tags:"menu", featured:0},
  {id:"shoppingfood", cat:"food", icon:"🛒", name:"买菜清单", desc:"按菜品生成采购", tags:"shopping food", featured:0},

  // ========== 社交文案 ==========
  {id:"copywriting", cat:"social", icon:"✍️", name:"文案语气改写", desc:"正式/轻松/热情切换", tags:"copywriting", featured:1},
  {id:"hashtag", cat:"social", icon:"#", name:"话题标签生成", desc:"根据主题生成标签", tags:"hashtag", featured:0},
  {id:"bio", cat:"social", icon:"👤", name:"个人简介模板", desc:"社交媒体 Bio 模板", tags:"bio", featured:0},
  {id:"greeting", cat:"social", icon:"👋", name:"问候语生成", desc:"不同场景问候", tags:"greeting", featured:0},
  {id:"thankyou", cat:"social", icon:"🙏", name:"感谢语模板", desc:"多种感谢表达", tags:"thank you", featured:0},
  {id:"apology2", cat:"social", icon:"😔", name:"道歉话术", desc:"得体道歉模板", tags:"apology", featured:0},
  {id:"invite", cat:"social", icon:"📨", name:"邀请文案", desc:"活动/聚会邀请", tags:"invite", featured:0},
  {id:"reply", cat:"social", icon:"💬", name:"回复话术", desc:"常见场景回复", tags:"reply", featured:0},
  {id:"slogan", cat:"social", icon:"💡", name:"口号生成", desc:"简短口号灵感", tags:"slogan", featured:0},
  {id:"emoji3", cat:"social", icon:"😊", name:"表情包推荐", desc:"场景配表情", tags:"emoji", featured:0},

  // ========== 大批量补充 ==========
  {id:"textpad", cat:"text", icon:"📝", name:"文本垫高", desc:"左侧填充空格对齐", tags:"pad text", featured:0},
  {id:"centertext", cat:"text", icon:"↔", name:"居中对齐文本", desc:"空格居中每行", tags:"center text", featured:0},
  {id:"repeatline", cat:"text", icon:"🔁", name:"重复行生成", desc:"重复某行 N 次", tags:"repeat line", featured:0},
  {id:"numberlines", cat:"text", icon:"#", name:"行号（自定义）", desc:"自定义行号格式", tags:"line number", featured:0},
  {id:"trimlines", cat:"text", icon:"✂️", name:"修剪每行首尾", desc:"去掉每行空白", tags:"trim", featured:0},
  {id:"quoteblock", cat:"text", icon:"❝", name:"引用块包裹", desc:"每行加引用前缀", tags:"quote", featured:0},
  {id:"bullet", cat:"text", icon:"•", name:"项目符号添加", desc:"批量加 bullet", tags:"bullet", featured:0},
  {id:"checkbox", cat:"text", icon:"☑", name:"待办复选框", desc:"转 Markdown 待办", tags:"checkbox", featured:0},
  {id:"tabletext", cat:"text", icon:"▦", name:"纯文本表格", desc:"对齐成表格样式", tags:"text table", featured:0},
  {id:"diffchar", cat:"text", icon:"±", name:"字符级差异", desc:"标出不同字符位置", tags:"diff char", featured:0},

  {id:"btoa", cat:"encode", icon:"64", name:"btoa / atob", desc:"浏览器原生 Base64", tags:"btoa atob", featured:0},
  {id:"encodeuri2", cat:"encode", icon:"%", name:"URI 全套", desc:"encodeURI 全家桶", tags:"uri encode", featured:0},
  {id:"htmlentities2", cat:"encode", icon:"&", name:"HTML 实体大全", desc:"常用实体对照", tags:"html entity", featured:0},
  {id:"rot47", cat:"encode", icon:"47", name:"ROT47", desc:"可打印字符 ROT47", tags:"rot47", featured:0},
  {id:"vigenere", cat:"encode", icon:"🔐", name:"维吉尼亚密码", desc:"经典多表替换", tags:"vigenere", featured:0},
  {id:"railfence", cat:"encode", icon:"🚧", name:"栅栏密码", desc:"按行重排加密", tags:"rail fence", featured:0},
  {id:"a1z26", cat:"encode", icon:"A1", name:"A1Z26 密码", desc:"字母转数字", tags:"a1z26", featured:0},
  {id:"binaryascii", cat:"encode", icon:"01", name:"二进制 ASCII", desc:"文本与二进制互转", tags:"binary ascii", featured:0},

  {id:"cssgridgen", cat:"dev", icon:"▦", name:"Grid 代码生成", desc:"快速生成 grid 布局", tags:"css grid", featured:0},
  {id:"flexgen", cat:"dev", icon:"▭", name:"Flex 代码生成", desc:"常用 flex 组合", tags:"flex", featured:0},
  {id:"buttoncss2", cat:"dev", icon:"🔘", name:"按钮样式包", desc:"多种按钮 CSS", tags:"button css", featured:0},
  {id:"cardcss", cat:"dev", icon:"🃏", name:"卡片样式", desc:"卡片组件 CSS", tags:"card css", featured:0},
  {id:"skeleton", cat:"dev", icon:"💀", name:"骨架屏 CSS", desc:"loading 骨架屏", tags:"skeleton", featured:0},
  {id:"scrollbar", cat:"dev", icon:"📜", name:"滚动条美化", desc:"自定义 scrollbar", tags:"scrollbar", featured:0},
  {id:"selection", cat:"dev", icon:"🖱", name:"选中样式", desc:"::selection 样式", tags:"selection", featured:0},
  {id:"placeholder3", cat:"dev", icon:"✏️", name:"placeholder 样式", desc:"输入框占位符样式", tags:"placeholder css", featured:0},
  {id:"truncate", cat:"dev", icon:"…", name:"文本截断 CSS", desc:"单行/多行省略", tags:"truncate", featured:0},
  {id:"aspectcss2", cat:"dev", icon:"📐", name:"宽高比盒子", desc:"aspect-ratio 容器", tags:"aspect ratio css", featured:0},

  {id:"colorblind", cat:"design", icon:"👁️", name:"色盲友好检查", desc:"对比度与色盲提示", tags:"colorblind", featured:0},
  {id:"paletteweb", cat:"design", icon:"🌐", name:"Web 安全色", desc:"216 安全色参考", tags:"web safe color", featured:0},
  {id:"material", cat:"design", icon:"🎨", name:"Material 色板", desc:"Material 主色参考", tags:"material color", featured:0},
  {id:"tailwind", cat:"design", icon:"🌊", name:"Tailwind 色阶", desc:"常用 Tailwind 色", tags:"tailwind color", featured:0},

  {id:"prime3", cat:"math", icon:"🔢", name:"质数区间", desc:"生成区间内质数", tags:"prime range", featured:0},
  {id:"fib2", cat:"math", icon:"🌀", name:"斐波那契增强", desc:"第 n 项与前 n 项", tags:"fibonacci", featured:0},
  {id:"pascal", cat:"math", icon:"🔺", name:"杨辉三角", desc:"生成杨辉三角", tags:"pascal triangle", featured:0},
  {id:"baseconv", cat:"math", icon:"🔢", name:"任意进制", desc:"2-36 进制互转", tags:"base convert", featured:0},
  {id:"modulo", cat:"math", icon:"%", name:"模运算", desc:"取模与同余", tags:"modulo", featured:0},
  {id:"gcd3", cat:"math", icon:"➗", name:"多数 GCD", desc:"多个数的最大公约数", tags:"gcd multi", featured:0},

  {id:"stopwatch2", cat:"time", icon:"⏱️", name:"多段秒表", desc:"可记录分段时间", tags:"stopwatch lap", featured:0},
  {id:"alarm", cat:"time", icon:"⏰", name:"简易闹钟", desc:"设定时刻提醒", tags:"alarm", featured:0},
  {id:"timezone3", cat:"time", icon:"🌍", name:"世界时钟墙", desc:"多城市时间", tags:"world clock", featured:0},
  {id:"holiday", cat:"time", icon:"🎉", name:"节日倒数", desc:"距离节日天数", tags:"holiday", featured:0},

  {id:"rps2", cat:"fun", icon:"✊", name:"石头剪刀布增强", desc:"三局两胜", tags:"rock paper", featured:0},
  {id:"numberguess2", cat:"fun", icon:"🎯", name:"猜数字增强", desc:"可调范围猜数字", tags:"guess", featured:0},
  {id:"memory", cat:"fun", icon:"🧠", name:"记忆翻牌", desc:"简单记忆游戏说明", tags:"memory game", featured:0},
  {id:"wordle", cat:"fun", icon:"🟩", name:"单词猜测提示", desc:"Wordle 类提示", tags:"wordle", featured:0},
  {id:"riddle", cat:"fun", icon:"🧩", name:"随机谜语", desc:"来一条谜语", tags:"riddle", featured:0},
  {id:"fact", cat:"fun", icon:"💡", name:"冷知识", desc:"随机冷知识", tags:"fact", featured:0},

  {id:"bmi5", cat:"health", icon:"⚖️", name:"儿童 BMI", desc:"年龄相关 BMI 参考", tags:"bmi child", featured:0},
  {id:"pregnancy3", cat:"health", icon:"👶", name:"孕周计算", desc:"根据末次月经算孕周", tags:"pregnancy week", featured:0},
  {id:"vaccine", cat:"health", icon:"💉", name:"疫苗时间参考", desc:"儿童疫苗时间表概要", tags:"vaccine", featured:0},
  {id:"firstaid", cat:"health", icon:"🩹", name:"急救要点", desc:"常见急救口诀", tags:"first aid", featured:0},

  {id:"rent", cat:"finance", icon:"🏠", name:"租房成本", desc:"月租+中介+押金", tags:"rent", featured:0},
  {id:"mortgage", cat:"finance", icon:"🏦", name:"房贷提前还", desc:"提前还款节省利息", tags:"mortgage", featured:0},
  {id:"subscribe", cat:"finance", icon:"📱", name:"订阅年费", desc:"月费转年费对比", tags:"subscription", featured:0},
  {id:"tipcalc3", cat:"finance", icon:"💸", name:"小费多档", desc:"10/15/20% 对比", tags:"tip", featured:0},

  {id:"unitlength3", cat:"convert", icon:"📏", name:"长度全家桶", desc:"更多长度单位", tags:"length", featured:0},
  {id:"unitweight3", cat:"convert", icon:"⚖️", name:"重量全家桶", desc:"更多重量单位", tags:"weight", featured:0},
  {id:"unittemp3", cat:"convert", icon:"🌡️", name:"温度全家桶", desc:"更多温度单位", tags:"temperature", featured:0},
  {id:"unitdata3", cat:"convert", icon:"💾", name:"数据量全家桶", desc:"bit 到 PB", tags:"data size", featured:0},
  {id:"unitfuel", cat:"convert", icon:"⛽", name:"油耗单位", desc:"L/100km 与 MPG", tags:"fuel economy", featured:0},

  {id:"qrwifi2", cat:"utility", icon:"📶", name:"WiFi 二维码内容", desc:"标准 WIFI: 格式", tags:"wifi qr", featured:0},
  {id:"vcard", cat:"utility", icon:"👤", name:"vCard 生成", desc:"电子名片文本", tags:"vcard", featured:0},
  {id:"ics", cat:"utility", icon:"📅", name:"日历事件", desc:"ICS 事件文本", tags:"ics calendar", featured:0},
  {id:"barcode", cat:"utility", icon:"||", name:"条码内容", desc:"Code128 内容说明", tags:"barcode", featured:0},
  {id:"lorem4", cat:"utility", icon:"📄", name:"多语言 Lorem", desc:"中英拉丁占位", tags:"lorem", featured:0},
  {id:"randomdate", cat:"utility", icon:"📆", name:"随机日期", desc:"范围内随机日期", tags:"random date", featured:0},
  {id:"randomtime", cat:"utility", icon:"⏰", name:"随机时间", desc:"随机时刻", tags:"random time", featured:0},
  {id:"coin2flip", cat:"utility", icon:"🪙", name:"抛硬币记录", desc:"多次抛硬币统计", tags:"coin flip", featured:0},

  // ========== 小游戏 ==========
  {id:"minesweeper", cat:"game", icon:"💣", name:"扫雷提示", desc:"扫雷规则与技巧", tags:"minesweeper", featured:0},
  {id:"sudoku", cat:"game", icon:"🔢", name:"数独助手", desc:"数独规则与候选数", tags:"sudoku", featured:0},
  {id:"tictactoe", cat:"game", icon:"⭕", name:"井字棋", desc:"和电脑下井字棋", tags:"tictactoe", featured:1},
  {id:"snake", cat:"game", icon:"🐍", name:"贪吃蛇说明", desc:"经典贪吃蛇玩法", tags:"snake", featured:0},
  {id:"2048", cat:"game", icon:"🔢", name:"2048 技巧", desc:"2048 玩法与策略", tags:"2048", featured:0},
  {id:"hangman", cat:"game", icon:"🎪", name:"猜单词", desc:"简单猜词游戏", tags:"hangman", featured:0},
  {id:"quiz2", cat:"game", icon:"❓", name:"知识问答", desc:"随机常识题", tags:"quiz", featured:0},
  {id:"reaction", cat:"game", icon:"⚡", name:"反应速度测试", desc:"点击测反应", tags:"reaction", featured:1},
  {id:"memory2", cat:"game", icon:"🧠", name:"数字记忆", desc:"短时数字记忆挑战", tags:"memory", featured:0},
  {id:"typing2", cat:"game", icon:"⌨️", name:"打字挑战", desc:"限时打字练习", tags:"typing", featured:0},

  // ========== 法律 / 合同 ==========
  {id:"contract", cat:"legal", icon:"📄", name:"合同检查清单", desc:"签合同前注意点", tags:"contract", featured:1},
  {id:"nda", cat:"legal", icon:"🔒", name:"保密协议要点", desc:"NDA 关键条款", tags:"nda", featured:0},
  {id:"lease", cat:"legal", icon:"🏠", name:"租房合同要点", desc:"租房必看条款", tags:"lease", featured:0},
  {id:"labor", cat:"legal", icon:"💼", name:"劳动合同要点", desc:"入职合同注意", tags:"labor", featured:0},
  {id:"privacy", cat:"legal", icon:"🛡️", name:"隐私政策要点", desc:"隐私政策必备内容", tags:"privacy", featured:0},
  {id:"disclaimer", cat:"legal", icon:"⚠️", name:"免责声明模板", desc:"网站免责声明", tags:"disclaimer", featured:0},
  {id:"terms", cat:"legal", icon:"📋", name:"用户协议大纲", desc:"服务条款结构", tags:"terms", featured:0},
  {id:"copyright", cat:"legal", icon:"©", name:"版权声明模板", desc:"版权页文案", tags:"copyright", featured:0},
  {id:"invoicelegal", cat:"legal", icon:"🧾", name:"发票与合同", desc:"开票与合同关系", tags:"invoice", featured:0},
  {id:"witness", cat:"legal", icon:"✍️", name:"签署清单", desc:"文件签署检查", tags:"sign", featured:0},

  // ========== 继续狂加 ==========
  {id:"textstats3", cat:"text", icon:"📊", name:"阅读难度", desc:"简易可读性评分", tags:"readability", featured:0},
  {id:"anagram", cat:"text", icon:"🔀", name:"字母重排", desc:"打乱字母顺序", tags:"anagram", featured:0},
  {id:"palindrome", cat:"text", icon:"🔄", name:"回文检测", desc:"是否回文串", tags:"palindrome", featured:0},
  {id:"wordfreq2", cat:"text", icon:"📈", name:"词频 TopN", desc:"最高频词统计", tags:"word frequency", featured:0},
  {id:"sentencelen", cat:"text", icon:"📏", name:"句长分析", desc:"平均句长与分布", tags:"sentence", featured:0},
  {id:"textmask", cat:"text", icon:"*", name:"敏感词打码", desc:"简单打码替换", tags:"mask", featured:0},
  {id:"template", cat:"text", icon:"📝", name:"模板填充", desc:"{{变量}} 替换", tags:"template", featured:0},
  {id:"csvpretty", cat:"text", icon:"📊", name:"CSV 美化", desc:"对齐显示 CSV", tags:"csv", featured:0},

  {id:"bcryptinfo", cat:"encode", icon:"🔐", name:"Bcrypt 说明", desc:"Bcrypt 参数说明", tags:"bcrypt", featured:0},
  {id:"jwtparts", cat:"encode", icon:"JWT", name:"JWT 三段拆解", desc:"Header.Payload.Signature", tags:"jwt", featured:0},
  {id:"certinfo", cat:"encode", icon:"📜", name:"证书字段说明", desc:"SSL 证书常见字段", tags:"certificate", featured:0},
  {id:"keypair", cat:"encode", icon:"🔑", name:"密钥对说明", desc:"RSA/ECC 概念", tags:"keypair", featured:0},
  {id:"otp2", cat:"encode", icon:"🔢", name:"TOTP 说明", desc:"动态口令原理", tags:"totp otp", featured:0},
  {id:"hashchain", cat:"encode", icon:"🔗", name:"哈希链演示", desc:"多次哈希", tags:"hash chain", featured:0},

  {id:"restapi", cat:"web", icon:"🌐", name:"REST 状态码", desc:"API 常用状态码", tags:"rest api", featured:0},
  {id:"graphql", cat:"web", icon:"◆", name:"GraphQL 入门", desc:"查询示例", tags:"graphql", featured:0},
  {id:"websocket", cat:"web", icon:"🔌", name:"WebSocket 说明", desc:"WS 基本用法", tags:"websocket", featured:0},
  {id:"cdn", cat:"web", icon:"☁️", name:"CDN 概念", desc:"CDN 工作原理", tags:"cdn", featured:0},
  {id:"http2", cat:"web", icon:"⚡", name:"HTTP/2 要点", desc:"HTTP/2 特性", tags:"http2", featured:0},
  {id:"cache", cat:"web", icon:"💾", name:"缓存头说明", desc:"Cache-Control 等", tags:"cache", featured:0},

  {id:"gitflow", cat:"dev", icon:"🌿", name:"Git Flow", desc:"分支模型说明", tags:"git flow", featured:0},
  {id:"semver", cat:"dev", icon:"🏷️", name:"语义化版本", desc:"SemVer 规则", tags:"semver", featured:0},
  {id:"changelog", cat:"dev", icon:"📋", name:"Changelog 模板", desc:"更新日志格式", tags:"changelog", featured:0},
  {id:"readme", cat:"dev", icon:"📖", name:"README 模板", desc:"项目 README 结构", tags:"readme", featured:0},
  {id:"eslint", cat:"dev", icon:"ES", name:"ESLint 规则", desc:"常用 ESLint 配置", tags:"eslint", featured:0},
  {id:"prettier", cat:"dev", icon:"✨", name:"Prettier 配置", desc:"代码格式化配置", tags:"prettier", featured:0},
  {id:"env", cat:"dev", icon:"🔧", name:".env 示例", desc:"环境变量模板", tags:"env", featured:0},
  {id:"dockercompose", cat:"dev", icon:"🐳", name:"Compose 模板", desc:"docker-compose 示例", tags:"docker compose", featured:0},
  {id:"nginx3", cat:"dev", icon:"🌐", name:"Nginx 反代", desc:"反向代理配置", tags:"nginx", featured:0},
  {id:"ci", cat:"dev", icon:"🔄", name:"CI 模板", desc:"GitHub Actions 示例", tags:"ci cd", featured:0},

  {id:"colorharmony", cat:"design", icon:"🎨", name:"色彩和谐", desc:"互补/类似色", tags:"color harmony", featured:0},
  {id:"spacing2", cat:"design", icon:"↔", name:"8pt 间距系统", desc:"间距规范", tags:"spacing", featured:0},
  {id:"typeScale", cat:"design", icon:"Aa", name:"字号阶梯", desc:"模块化字号", tags:"type scale", featured:0},
  {id:"shadow3", cat:"design", icon:"☁", name:"阴影层级", desc:"elevation 阴影", tags:"shadow", featured:0},

  {id:"stats2", cat:"math", icon:"📊", name:"描述统计", desc:"均/中/众/方差", tags:"statistics", featured:0},
  {id:"normdist", cat:"math", icon:"📈", name:"正态分布说明", desc:"正态曲线概念", tags:"normal distribution", featured:0},
  {id:"permutation", cat:"math", icon:"𝑃", name:"排列数", desc:"P(n,k) 计算", tags:"permutation", featured:0},
  {id:"binomial", cat:"math", icon:"𝐶", name:"组合概率", desc:"二项分布简单算", tags:"binomial", featured:0},

  {id:"pomodoro3", cat:"office", icon:"🍅", name:"自定义番茄钟", desc:"可调专注/休息", tags:"pomodoro", featured:0},
  {id:"eisenhower", cat:"office", icon:"▦", name:"四象限法则", desc:"紧急重要矩阵", tags:"eisenhower", featured:0},
  {id:"smartgoal", cat:"office", icon:"🎯", name:"SMART 目标", desc:"目标设定模板", tags:"smart goal", featured:0},
  {id:"swot", cat:"office", icon:"📊", name:"SWOT 分析", desc:"SWOT 模板", tags:"swot", featured:0},

  {id:"calorie2", cat:"health", icon:"🔥", name:"食物热量速查", desc:"常见食物热量", tags:"calorie food", featured:0},
  {id:"protein", cat:"health", icon:"🥩", name:"蛋白质需求", desc:"每日蛋白估算", tags:"protein", featured:0},
  {id:"imc", cat:"health", icon:"⚖️", name:"腰高比", desc:"腰围身高比", tags:"whr", featured:0},
  {id:"vo2", cat:"health", icon:"💨", name:"配速与消耗", desc:"跑步消耗粗算", tags:"vo2 running", featured:0},

  {id:"compound4", cat:"finance", icon:"📈", name:"复利表", desc:"逐年复利明细", tags:"compound table", featured:0},
  {id:"rule72", cat:"finance", icon:"72", name:"72 法则", desc:"翻倍年数估算", tags:"rule of 72", featured:0},
  {id:"debt2", cat:"finance", icon:"💳", name:"债务雪球", desc:"还债顺序建议", tags:"debt snowball", featured:0},
  {id:"emergency", cat:"finance", icon:"🆘", name:"应急基金", desc:"应急金建议额度", tags:"emergency fund", featured:0},

  {id:"tzconvert", cat:"travel", icon:"🌍", name:"会议时区", desc:"跨时区会议时间", tags:"timezone meeting", featured:0},
  {id:"jetlag2", cat:"travel", icon:"✈️", name:"时差恢复", desc:"时差调整日程", tags:"jetlag", featured:0},
  {id:"luggage2", cat:"travel", icon:"🧳", name:"手提 vs 托运", desc:"行李分类建议", tags:"luggage", featured:0},
  {id:"tipworld", cat:"travel", icon:"💸", name:"全球小费", desc:"主要国家小费", tags:"tip world", featured:0},

  {id:"measure2", cat:"food", icon:"🥄", name:"烘焙用量", desc:"杯勺克对照", tags:"baking measure", featured:0},
  {id:"spice", cat:"food", icon:"🌶️", name:"香料搭配", desc:"常见香料组合", tags:"spice", featured:0},
  {id:"wine", cat:"food", icon:"🍷", name:"酒餐搭配", desc:"简单酒餐建议", tags:"wine food", featured:0},
  {id:"storage", cat:"food", icon:"🧊", name:"食材保鲜", desc:"冷藏冷冻建议", tags:"food storage", featured:0},

  {id:"caption", cat:"social", icon:"📸", name:"配文模板", desc:"朋友圈/动态配文", tags:"caption", featured:0},
  {id:"comment", cat:"social", icon:"💬", name:"评论话术", desc:"得体评论模板", tags:"comment", featured:0},
  {id:"dm", cat:"social", icon:"✉️", name:"私信开场", desc:"私信第一句", tags:"dm", featured:0},
  {id:"announcement", cat:"social", icon:"📢", name:"公告文案", desc:"群公告模板", tags:"announcement", featured:0},

  {id:"uuid7", cat:"utility", icon:"UUID", name:"时间有序 ID", desc:"类 UUID 时间戳 ID", tags:"uuid time", featured:0},
  {id:"slug2", cat:"utility", icon:"🔗", name:"多语言 Slug", desc:"标题转 slug", tags:"slug", featured:0},
  {id:"qrmail", cat:"utility", icon:"📧", name:"邮件二维码内容", desc:"mailto 格式", tags:"qr email", featured:0},
  {id:"qrsms", cat:"utility", icon:"💬", name:"短信二维码内容", desc:"sms 格式", tags:"qr sms", featured:0},
  {id:"randomcolor5", cat:"utility", icon:"🎨", name:"渐变随机色", desc:"随机双色渐变", tags:"gradient random", featured:0},
  {id:"lorem5", cat:"utility", icon:"📄", name:"段落 Lorem", desc:"可控段落假文", tags:"lorem", featured:0},
  {id:"password4", cat:"utility", icon:"🔑", name:"可读密码", desc:"易记随机密码", tags:"password readable", featured:0},
  {id:"dice3", cat:"utility", icon:"🎲", name:"骰子统计", desc:"多次投掷分布", tags:"dice stats", featured:0},

  // ========== 音乐 / 音频 ==========
  {id:"bpm", cat:"music", icon:"🥁", name:"BPM 节拍", desc:"点击测曲速", tags:"bpm tempo", featured:1},
  {id:"note", cat:"music", icon:"🎹", name:"音名频率", desc:"音符与频率对照", tags:"note frequency", featured:0},
  {id:"chord", cat:"music", icon:"🎸", name:"和弦构成", desc:"常见和弦组成音", tags:"chord", featured:0},
  {id:"scale", cat:"music", icon:"🎼", name:"音阶", desc:"大调小调音阶", tags:"scale", featured:0},
  {id:"metronome", cat:"music", icon:"⏱️", name:"节拍器说明", desc:"节拍器用法", tags:"metronome", featured:0},
  {id:"interval", cat:"music", icon:"↕️", name:"音程", desc:"音程名称与半音", tags:"interval", featured:0},
  {id:"capo", cat:"music", icon:"🎸", name:"变调夹换算", desc:"吉他变调夹", tags:"capo", featured:0},
  {id:"tuning", cat:"music", icon:"🎵", name:"调弦参考", desc:"吉他标准调弦", tags:"tuning", featured:0},
  {id:"songkey", cat:"music", icon:"🔑", name:"歌曲调性", desc:"常见调性说明", tags:"key", featured:0},
  {id:"playlist", cat:"music", icon:"📜", name:"歌单模板", desc:"歌单整理格式", tags:"playlist", featured:0},

  // ========== 摄影参数 ==========
  {id:"exposure", cat:"photo", icon:"📷", name:"曝光三角", desc:"光圈快门感光度", tags:"exposure", featured:1},
  {id:"dof", cat:"photo", icon:"🔍", name:"景深说明", desc:"影响景深的因素", tags:"depth of field", featured:0},
  {id:"focallength", cat:"photo", icon:"🔭", name:"焦距与视角", desc:"焦距对照", tags:"focal length", featured:0},
  {id:"shutter", cat:"photo", icon:"⚡", name:"快门速度", desc:"快门与运动模糊", tags:"shutter", featured:0},
  {id:"aperture", cat:"photo", icon:"⭕", name:"光圈档位", desc:"f 档与进光量", tags:"aperture", featured:0},
  {id:"iso", cat:"photo", icon:"📊", name:"ISO 噪点", desc:"感光度与噪点", tags:"iso", featured:0},
  {id:"wb", cat:"photo", icon:"🌤️", name:"白平衡", desc:"色温参考", tags:"white balance", featured:0},
  {id:"rulethirds", cat:"photo", icon:"▦", name:"三分法", desc:"构图三分法", tags:"composition", featured:0},
  {id:"golden", cat:"photo", icon:"φ", name:"黄金比例构图", desc:"黄金分割构图", tags:"golden ratio", featured:0},
  {id:"hist", cat:"photo", icon:"📊", name:"直方图解读", desc:"曝光直方图", tags:"histogram", featured:0},

  // ========== 继续各方向 ==========
  {id:"textwrap2", cat:"text", icon:"↩️", name:"强制换行", desc:"每N字插入换行", tags:"wrap", featured:0},
  {id:"indent", cat:"text", icon:"⇥", name:"段落缩进", desc:"首行缩进两字符", tags:"indent", featured:0},
  {id:"unindent", cat:"text", icon:"⇤", name:"取消缩进", desc:"去掉行首空白", tags:"unindent", featured:0},
  {id:"doubleline", cat:"text", icon:"📄", name:"双倍行距", desc:"行间插入空行", tags:"line spacing", featured:0},
  {id:"removespaces", cat:"text", icon:"␣", name:"去除所有空格", desc:"去掉全部空白字符", tags:"remove space", featured:0},
  {id:"keepnum", cat:"text", icon:"123", name:"只留数字", desc:"剥离非数字", tags:"digits only", featured:0},
  {id:"keepalpha", cat:"text", icon:"ABC", name:"只留字母", desc:"剥离非字母", tags:"alpha only", featured:0},
  {id:"reverse2", cat:"text", icon:"🔄", name:"逐词反转", desc:"每个单词内部反转", tags:"reverse words", featured:0},
  {id:"initials", cat:"text", icon:"Aa", name:"提取首字母", desc:"每个词首字母", tags:"initials", featured:0},
  {id:"acronym", cat:"text", icon:"缩", name:"缩写生成", desc:"短语转缩写", tags:"acronym", featured:0},

  {id:"base64url2", cat:"encode", icon:"64", name:"Base64URL 增强", desc:"URL 安全 Base64", tags:"base64url", featured:0},
  {id:"hexencode", cat:"encode", icon:"0x", name:"十六进制编码", desc:"文本转 Hex", tags:"hex", featured:0},
  {id:"urlencode2", cat:"encode", icon:"%", name:"完整 URL 编码", desc:"encodeURIComponent", tags:"url encode", featured:0},
  {id:"htmlescape2", cat:"encode", icon:"<>", name:"HTML 转义增强", desc:"全量实体转义", tags:"html escape", featured:0},
  {id:"jsescape", cat:"encode", icon:"\\", name:"JS 字符串转义", desc:"转义为 JS 字符串", tags:"js escape", featured:0},
  {id:"unicode2", cat:"encode", icon:"U+", name:"Unicode 码点", desc:"字符与码点互转", tags:"unicode", featured:0},
  {id:"punycode2", cat:"encode", icon:"🌐", name:"域名 Punycode", desc:"国际化域名", tags:"punycode", featured:0},
  {id:"crc32", cat:"encode", icon:"CRC", name:"CRC32 说明", desc:"校验和概念", tags:"crc32", featured:0},

  {id:"httpstatus2", cat:"web", icon:"📡", name:"状态码速查增强", desc:"更多状态码", tags:"http status", featured:0},
  {id:"mime2", cat:"web", icon:"📎", name:"MIME 增强", desc:"更多文件类型", tags:"mime", featured:0},
  {id:"cors2", cat:"web", icon:"🔒", name:"CORS 配置生成", desc:"Access-Control 头", tags:"cors", featured:0},
  {id:"robots3", cat:"web", icon:"🤖", name:"Robots 全规则", desc:"完整 robots 示例", tags:"robots", featured:0},
  {id:"sitemap3", cat:"web", icon:"🗺️", name:"Sitemap 索引", desc:"sitemap index 格式", tags:"sitemap", featured:0},
  {id:"manifest", cat:"web", icon:"📱", name:"Web Manifest", desc:"PWA manifest 模板", tags:"pwa manifest", featured:0},
  {id:"serviceworker", cat:"web", icon:"⚙️", name:"Service Worker", desc:"SW 基础模板", tags:"service worker", featured:0},
  {id:"fetch", cat:"web", icon:"📡", name:"Fetch 示例", desc:"fetch API 代码", tags:"fetch", featured:0},

  {id:"cssvar", cat:"dev", icon:"--", name:"CSS 变量", desc:"自定义属性模板", tags:"css variables", featured:0},
  {id:"cssreset", cat:"dev", icon:"🔄", name:"CSS Reset", desc:"简易 reset", tags:"css reset", featured:0},
  {id:"cssnormalize", cat:"dev", icon:"📐", name:"Normalize 要点", desc:"normalize 思想", tags:"normalize", featured:0},
  {id:"tailwind2", cat:"dev", icon:"🌊", name:"Tailwind 常用类", desc:"高频 utility class", tags:"tailwind", featured:0},
  {id:"bootstrap", cat:"dev", icon:"B", name:"Bootstrap 栅格", desc:"栅格类名速查", tags:"bootstrap", featured:0},
  {id:"reacthook", cat:"dev", icon:"⚛️", name:"React Hooks", desc:"常用 Hook 说明", tags:"react hooks", featured:0},
  {id:"vue3", cat:"dev", icon:"💚", name:"Vue3 组合式", desc:"setup 语法要点", tags:"vue3", featured:0},
  {id:"tsutility", cat:"dev", icon:"TS", name:"TS 工具类型", desc:"Partial/Pick 等", tags:"typescript", featured:0},
  {id:"regex2", cat:"dev", icon:".*", name:"正则速查表", desc:"常用正则元字符", tags:"regex cheat", featured:0},
  {id:"bigO", cat:"dev", icon:"O", name:"复杂度速查", desc:"常见算法复杂度", tags:"big o", featured:0},

  {id:"colornamer2", cat:"design", icon:"🏷️", name:"颜色命名", desc:"HEX 近似英文名", tags:"color name", featured:0},
  {id:"gradient4", cat:"design", icon:"🌈", name:"CSS 渐变预设", desc:"常用渐变代码", tags:"gradient", featured:0},
  {id:"neumorphism", cat:"design", icon:"⬜", name:"新拟态", desc:"neumorphism CSS", tags:"neumorphism", featured:0},
  {id:"glass", cat:"design", icon:"🔮", name:"毛玻璃", desc:"glassmorphism CSS", tags:"glassmorphism", featured:0},

  {id:"matrix3", cat:"math", icon:"▦", name:"行列式 2x2", desc:"二阶行列式", tags:"determinant", featured:0},
  {id:"pythagoras", cat:"math", icon:"△", name:"勾股定理", desc:"求第三边", tags:"pythagoras", featured:0},
  {id:"area2", cat:"math", icon:"⬜", name:"常见面积", desc:"矩形圆三角", tags:"area", featured:0},
  {id:"volume2", cat:"math", icon:"🧊", name:"常见体积", desc:"球柱锥", tags:"volume", featured:0},
  {id:"percent5", cat:"math", icon:"%", name:"占比与差值", desc:"多种百分比", tags:"percent", featured:0},
  {id:"ratio", cat:"math", icon:"∶", name:"比例化简", desc:"约分比例", tags:"ratio", featured:0},

  {id:"timer2", cat:"time", icon:"⏳", name:"倒计时分钟", desc:"N 分钟倒计时", tags:"timer", featured:0},
  {id:"agehours", cat:"time", icon:"🕐", name:"活了多少小时", desc:"从生日算小时数", tags:"age hours", featured:0},
  {id:"workweek", cat:"time", icon:"📅", name:"本周工作日", desc:"本周剩余工作日", tags:"workweek", featured:0},
  {id:"quarter", cat:"time", icon:"Q", name:"季度计算", desc:"日期所在季度", tags:"quarter", featured:0},

  {id:"coinflip3", cat:"fun", icon:"🪙", name:"抛硬币连续", desc:"连续正反统计", tags:"coin", featured:0},
  {id:"dice4", cat:"fun", icon:"🎲", name:"骰子对决", desc:"双方各投比大小", tags:"dice duel", featured:0},
  {id:"lottery2", cat:"fun", icon:"🎰", name:"双色球机选", desc:"随机红蓝球", tags:"lottery", featured:0},
  {id:"eightball", cat:"fun", icon:"🎱", name:"魔术八球", desc:"是/否/再说", tags:"magic 8 ball", featured:0},

  {id:"water4", cat:"health", icon:"💧", name:"喝水目标", desc:"今日进度记录", tags:"water", featured:0},
  {id:"steps2", cat:"health", icon:"👟", name:"步数目标", desc:"步数与距离热量", tags:"steps", featured:0},
  {id:"sleep2", cat:"health", icon:"😴", name:"睡眠债", desc:"欠睡估算", tags:"sleep debt", featured:0},
  {id:"bmi6", cat:"health", icon:"⚖️", name:"BMI 分类表", desc:"中国标准分类", tags:"bmi", featured:0},

  {id:"salary2", cat:"finance", icon:"💵", name:"时薪日薪", desc:"月薪换算时/日", tags:"salary", featured:0},
  {id:"raise", cat:"finance", icon:"📈", name:"加薪计算", desc:"涨薪前后对比", tags:"raise", featured:0},
  {id:"bonus", cat:"finance", icon:"🎁", name:"年终奖估算", desc:"月薪×月数", tags:"bonus", featured:0},
  {id:"tax3", cat:"finance", icon:"🧾", name:"税率表参考", desc:"个税税率档", tags:"tax bracket", featured:0},

  {id:"packing3", cat:"travel", icon:"🎒", name:"出差清单", desc:"商务出差打包", tags:"packing business", featured:0},
  {id:"flight", cat:"travel", icon:"✈️", name:"航班时间差", desc:"起飞降落时差", tags:"flight", featured:0},
  {id:"hotel", cat:"travel", icon:"🏨", name:"住宿预算", desc:"每晚×晚数", tags:"hotel budget", featured:0},
  {id:"visa2", cat:"travel", icon:"🛂", name:"护照有效期", desc:"有效期是否够", tags:"passport", featured:0},

  {id:"coffee2", cat:"food", icon:"☕", name:"意式咖啡参数", desc:"浓缩粉量萃取", tags:"espresso", featured:0},
  {id:"rice", cat:"food", icon:"🍚", name:"米水比例", desc:"煮饭米水比", tags:"rice water", featured:0},
  {id:"egg", cat:"food", icon:"🥚", name:"煮蛋时间", desc:"溏心/全熟", tags:"egg boil", featured:0},
  {id:"steak", cat:"food", icon:"🥩", name:"牛排熟度", desc:"温度与熟度", tags:"steak", featured:0},

  {id:"post", cat:"social", icon:"📱", name:"发帖结构", desc:"短内容结构模板", tags:"post", featured:0},
  {id:"hook", cat:"social", icon:"🪝", name:"开头钩子", desc:"吸引注意的开头", tags:"hook", featured:0},
  {id:"cta", cat:"social", icon:"👉", name:"行动号召", desc:"CTA 文案示例", tags:"cta", featured:0},
  {id:"headline", cat:"social", icon:"📰", name:"标题公式", desc:"标题写作公式", tags:"headline", featured:0},

  {id:"tictactoe2", cat:"game", icon:"⭕", name:"井字棋规则", desc:"规则说明", tags:"tictactoe", featured:0},
  {id:"rps3", cat:"game", icon:"✊", name:"猜拳概率", desc:"随机策略说明", tags:"rps", featured:0},
  {id:"numberbase", cat:"game", icon:"🔢", name:"猜数字进阶", desc:"高低提示", tags:"guess number", featured:0},
  {id:"wordscramble", cat:"game", icon:"🔤", name:"单词乱序", desc:"打乱字母猜词", tags:"scramble", featured:0},

  {id:"nda2", cat:"legal", icon:"🔒", name:"保密条款示例", desc:"简单保密条款", tags:"nda", featured:0},
  {id:"license", cat:"legal", icon:"📜", name:"开源协议选择", desc:"MIT/Apache/GPL", tags:"license", featured:0},
  {id:"cookie", cat:"legal", icon:"🍪", name:"Cookie 提示文案", desc:"Cookie 横幅文案", tags:"cookie", featured:0},
  {id:"gdpr", cat:"legal", icon:"🛡️", name:"GDPR 要点", desc:"数据保护要点", tags:"gdpr", featured:0},

  {id:"uuidbatch2", cat:"utility", icon:"UUID", name:"UUID 批量带格式", desc:"带花括号/连字符", tags:"uuid", featured:0},
  {id:"randomhex", cat:"utility", icon:"#", name:"随机 HEX 色", desc:"批量随机色值", tags:"random hex", featured:0},
  {id:"lorem6", cat:"utility", icon:"📝", name:"标题假文", desc:"随机标题风格", tags:"lorem title", featured:0},
  {id:"pickratio", cat:"utility", icon:"🎯", name:"加权随机", desc:"带权重抽取", tags:"weighted random", featured:0},
  {id:"shuffle2", cat:"utility", icon:"🔀", name:"洗牌算法", desc:"列表随机打乱", tags:"shuffle", featured:0},
  {id:"sample", cat:"utility", icon:"🎲", name:"随机抽样", desc:"不放回抽样", tags:"sample", featured:0},
  {id:"range", cat:"utility", icon:"↕", name:"数字序列", desc:"生成等差序列", tags:"range", featured:0},
  {id:"zipcode", cat:"utility", icon:"📮", name:"邮编格式", desc:"中国邮编说明", tags:"zipcode", featured:0}
,
// ========== 体育 / 赛事 ==========
  {id:"scoreboard", cat:"sport", icon:"🏆", name:"比分记录", desc:"简单比分计数", tags:"score", featured:1},
  {id:"bmiSport", cat:"sport", icon:"🏃", name:"运动 BMI", desc:"运动人群参考", tags:"bmi sport", featured:0},
  {id:"pace2", cat:"sport", icon:"⏱️", name:"配速表", desc:"常见完赛配速", tags:"pace table", featured:0},
  {id:"marathon", cat:"sport", icon:"🏅", name:"马拉松配速", desc:"目标成绩配速", tags:"marathon", featured:0},
  {id:"yoyolevel", cat:"sport", icon:"🏸", name:"运动消耗", desc:"常见运动卡路里", tags:"calories sport", featured:0},
  {id:"teamsize", cat:"sport", icon:"👥", name:"球队阵容", desc:"常见项目人数", tags:"team size", featured:0},
  {id:"olympic", cat:"sport", icon:"🥇", name:"奥运项目", desc:"常见奥运项目列表", tags:"olympic", featured:0},
  {id:"fifa", cat:"sport", icon:"⚽", name:"足球场尺寸", desc:"标准球场规格", tags:"football field", featured:0},
  {id:"basketball", cat:"sport", icon:"🏀", name:"篮球场规格", desc:"球场与篮筐", tags:"basketball", featured:0},
  {id:"swim", cat:"sport", icon:"🏊", name:"泳姿与距离", desc:"泳池常见距离", tags:"swim", featured:0},

  // ========== 宠物养育 ==========
  {id:"dogage", cat:"pet", icon:"🐕", name:"狗狗年龄换算", desc:"犬龄与人龄", tags:"dog age", featured:1},
  {id:"catage", cat:"pet", icon:"🐱", name:"猫咪年龄换算", desc:"猫龄与人龄", tags:"cat age", featured:0},
  {id:"petfood", cat:"pet", icon:"🍖", name:"宠物食量", desc:"体重与日粮参考", tags:"pet food", featured:0},
  {id:"petvaccine", cat:"pet", icon:"💉", name:"疫苗时间", desc:"犬猫疫苗概要", tags:"pet vaccine", featured:0},
  {id:"petname", cat:"pet", icon:"🏷️", name:"宠物起名", desc:"随机宠物名", tags:"pet name", featured:0},
  {id:"petbmi", cat:"pet", icon:"⚖️", name:"宠物体型", desc:"是否超重参考", tags:"pet weight", featured:0},
  {id:"fishTank", cat:"pet", icon:"🐠", name:"鱼缸容积", desc:"长宽高算升数", tags:"aquarium", featured:0},
  {id:"hamster", cat:"pet", icon:"🐹", name:"仓鼠护理", desc:"基础护理要点", tags:"hamster", featured:0},
  {id:"bird", cat:"pet", icon:"🐦", name:"鸟类护理", desc:"笼养基础", tags:"bird", featured:0},
  {id:"petchecklist", cat:"pet", icon:"✅", name:"养宠清单", desc:"接新宠物准备", tags:"pet checklist", featured:0},

  // ========== 批量补充 ==========
  {id:"textrot13", cat:"text", icon:"13", name:"ROT13 文本", desc:"一键 ROT13", tags:"rot13", featured:0},
  {id:"textleet", cat:"text", icon:"1337", name:"Leet 语转换", desc:"简单 1337 语", tags:"leet", featured:0},
  {id:"textmorse2", cat:"text", icon:"•–", name:"摩斯编码文本", desc:"文本转摩斯", tags:"morse", featured:0},
  {id:"textbinary2", cat:"text", icon:"01", name:"文本二进制", desc:"UTF 近似二进制", tags:"binary text", featured:0},
  {id:"findline", cat:"text", icon:"🔍", name:"查找所在行", desc:"关键词所在行号", tags:"find line", featured:0},
  {id:"replaceline", cat:"text", icon:"🔄", name:"按行号替换", desc:"替换指定行", tags:"replace line", featured:0},
  {id:"headtail", cat:"text", icon:"📄", name:"取头取尾", desc:"前N行/后N行", tags:"head tail", featured:0},
  {id:"uniqcount", cat:"text", icon:"🔢", name:"唯一行计数", desc:"不重复行数量", tags:"unique count", featured:0},
  {id:"sortnum", cat:"text", icon:"🔢", name:"数字行排序", desc:"按数值排序行", tags:"sort numeric", featured:0},
  {id:"padzero", cat:"text", icon:"000", name:"数字补零", desc:"固定宽度补零", tags:"pad zero", featured:0},

  {id:"md5info", cat:"encode", icon:"MD5", name:"MD5 说明", desc:"MD5 特性与用途", tags:"md5", featured:0},
  {id:"sha256info", cat:"encode", icon:"SHA", name:"SHA 家族", desc:"SHA-1/256/512", tags:"sha", featured:0},
  {id:"salt", cat:"encode", icon:"🧂", name:"盐值生成", desc:"随机 salt", tags:"salt", featured:0},
  {id:"nonce", cat:"encode", icon:"🎲", name:"Nonce 生成", desc:"随机 nonce", tags:"nonce", featured:0},
  {id:"apiSecret", cat:"encode", icon:"🔑", name:"API Secret", desc:"高熵密钥", tags:"api secret", featured:0},
  {id:"bearertoken", cat:"encode", icon:"🎫", name:"Bearer Token", desc:"示例 Authorization", tags:"bearer", featured:0},

  {id:"httpstatus3", cat:"web", icon:"📡", name:"REST 错误码", desc:"API 错误设计", tags:"api error", featured:0},
  {id:"oauth", cat:"web", icon:"🔐", name:"OAuth 流程", desc:"授权码模式说明", tags:"oauth", featured:0},
  {id:"jwtbest", cat:"web", icon:"JWT", name:"JWT 最佳实践", desc:"安全使用建议", tags:"jwt best", featured:0},
  {id:"rateLimit", cat:"web", icon:"🚦", name:"限流策略", desc:"常见限流思路", tags:"rate limit", featured:0},
  {id:"webhook", cat:"web", icon:"🪝", name:"Webhook 说明", desc:"回调基本概念", tags:"webhook", featured:0},
  {id:"graphql2", cat:"web", icon:"◆", name:"GraphQL 查询", desc:"简单 query 示例", tags:"graphql", featured:0},

  {id:"gitrebase", cat:"dev", icon:"🌿", name:"Rebase 说明", desc:"rebase vs merge", tags:"git rebase", featured:0},
  {id:"gitstash", cat:"dev", icon:"📦", name:"Stash 命令", desc:"暂存常用命令", tags:"git stash", featured:0},
  {id:"gitlog", cat:"dev", icon:"📜", name:"优雅 Log", desc:"git log 美化", tags:"git log", featured:0},
  {id:"npm", cat:"dev", icon:"📦", name:"npm 常用", desc:"npm 命令速查", tags:"npm", featured:0},
  {id:"yarn", cat:"dev", icon:"🧶", name:"Yarn 常用", desc:"yarn 命令", tags:"yarn", featured:0},
  {id:"pnpm", cat:"dev", icon:"📦", name:"pnpm 常用", desc:"pnpm 命令", tags:"pnpm", featured:0},
  {id:"vite", cat:"dev", icon:"⚡", name:"Vite 起步", desc:"Vite 项目命令", tags:"vite", featured:0},
  {id:"webpack", cat:"dev", icon:"📦", name:"Webpack 概念", desc:"核心概念", tags:"webpack", featured:0},
  {id:"babel", cat:"dev", icon:"🌀", name:"Babel 说明", desc:"转译用途", tags:"babel", featured:0},
  {id:"postcss", cat:"dev", icon:"🎨", name:"PostCSS", desc:"插件化 CSS", tags:"postcss", featured:0},

  {id:"flexcheatsheet", cat:"design", icon:"▭", name:"Flex 速查", desc:"属性一览", tags:"flex cheat", featured:0},
  {id:"gridcheatsheet", cat:"design", icon:"▦", name:"Grid 速查", desc:"属性一览", tags:"grid cheat", featured:0},
  {id:"animation2", cat:"design", icon:"🎬", name:"动画缓动", desc:"easing 函数", tags:"easing", featured:0},
  {id:"zindex2", cat:"design", icon:"📚", name:"层级规范", desc:"z-index 约定", tags:"z-index", featured:0},

  {id:"mean", cat:"math", icon:"μ", name:"平均数族", desc:"算数/几何/调和", tags:"mean", featured:0},
  {id:"stddev", cat:"math", icon:"σ", name:"标准差", desc:"样本标准差", tags:"std dev", featured:0},
  {id:"factorial2", cat:"math", icon:"!", name:"双阶乘说明", desc:"n!! 概念", tags:"factorial", featured:0},
  {id:"modulo2", cat:"math", icon:"%", name:"同余运算", desc:"a ≡ b (mod m)", tags:"modulo", featured:0},

  {id:"countdown4", cat:"time", icon:"⏳", name:"新年倒计时", desc:"距下一年元旦", tags:"new year", featured:0},
  {id:"weekend", cat:"time", icon:"🎉", name:"距周末", desc:"还有几天到周六", tags:"weekend", featured:0},
  {id:"monthdays", cat:"time", icon:"📅", name:"月天数", desc:"某月有多少天", tags:"month days", featured:0},
  {id:"leap", cat:"time", icon:"📅", name:"闰年判断", desc:"是否闰年", tags:"leap year", featured:0},

  {id:"randomteam2", cat:"fun", icon:"👥", name:"两队对战", desc:"随机分两队", tags:"team", featured:0},
  {id:"yesno2", cat:"fun", icon:"❓", name:"概率决定", desc:"可调概率的是/否", tags:"yes no", featured:0},
  {id:"compliment2", cat:"fun", icon:"💝", name:"夸夸生成器", desc:"随机夸奖", tags:"compliment", featured:0},
  {id:"insult", cat:"fun", icon:"😈", name:"温和吐槽", desc:"无伤大雅吐槽", tags:"roast", featured:0},

  {id:"water5", cat:"health", icon:"💧", name:"运动补水", desc:"运动时补水建议", tags:"hydration", featured:0},
  {id:"stretch2", cat:"health", icon:"🧘", name:"办公室拉伸", desc:"5分钟拉伸", tags:"stretch office", featured:0},
  {id:"eye", cat:"health", icon:"👁️", name:"护眼 20-20-20", desc:"护眼法则", tags:"eye care", featured:0},
  {id:"posture2", cat:"health", icon:"🪑", name:"站立办公", desc:"站坐交替建议", tags:"standing desk", featured:0},

  {id:"fire2", cat:"finance", icon:"🔥", name:"FIRE 年数", desc:"多久财务自由", tags:"fire years", featured:0},
  {id:"savingsrate", cat:"finance", icon:"💰", name:"储蓄率", desc:"储蓄占收入比", tags:"savings rate", featured:0},
  {id:"networth2", cat:"finance", icon:"💎", name:"净资产变化", desc:"简单增减记录", tags:"net worth", featured:0},
  {id:"cpi", cat:"finance", icon:"📉", name:"购买力换算", desc:"通胀粗算", tags:"cpi", featured:0},

  {id:"checklist3", cat:"travel", icon:"✅", name:"出境清单", desc:"出国准备", tags:"travel abroad", featured:0},
  {id:"timezone4", cat:"travel", icon:"🌍", name:"三地时间", desc:"三城市对照", tags:"timezone 3", featured:0},
  {id:"currency2", cat:"travel", icon:"💱", name:"旅行预算", desc:"日预算×天数", tags:"travel budget", featured:0},
  {id:"adapter2", cat:"travel", icon:"🔌", name:"插头对照表", desc:"国家与插头", tags:"plug adapter", featured:0},

  {id:"coffee3", cat:"food", icon:"☕", name:"咖啡因估算", desc:"常见饮品咖啡因", tags:"caffeine", featured:0},
  {id:"waterdrink", cat:"food", icon:"🥤", name:"饮料糖分", desc:"含糖量参考", tags:"sugar drink", featured:0},
  {id:"salt", cat:"food", icon:"🧂", name:"盐分建议", desc:"每日盐摄入", tags:"salt", featured:0},
  {id:"oil", cat:"food", icon:"🫒", name:"用油量", desc:"烹饪用油参考", tags:"cooking oil", featured:0},

  {id:"hashtag2", cat:"social", icon:"#", name:"标签云", desc:"关键词扩标签", tags:"hashtag", featured:0},
  {id:"bio2", cat:"social", icon:"👤", name:"多行 Bio", desc:"三行简介模板", tags:"bio", featured:0},
  {id:"story2", cat:"social", icon:"📖", name:"故事结构", desc:"起承转合", tags:"story structure", featured:0},
  {id:"hook2", cat:"social", icon:"🪝", name:"视频开头", desc:"短视频钩子", tags:"video hook", featured:0},

  {id:"uuidv1", cat:"utility", icon:"UUID", name:"时间戳 UUID 说明", desc:"v1 特点", tags:"uuid v1", featured:0},
  {id:"nanoid2", cat:"utility", icon:"ID", name:"自定义字母表 ID", desc:"短 ID 生成", tags:"nanoid", featured:0},
  {id:"randombool", cat:"utility", icon:"真假", name:"随机布尔", desc:"true/false", tags:"random bool", featured:0},
  {id:"randompick", cat:"utility", icon:"🎯", name:"加权抽奖", desc:"权重随机", tags:"weighted", featured:0},
  {id:"clipboard", cat:"utility", icon:"📋", name:"剪贴板说明", desc:"异步剪贴板 API", tags:"clipboard", featured:0},
  {id:"qrphone", cat:"utility", icon:"📞", name:"电话二维码", desc:"tel: 格式", tags:"qr phone", featured:0},
  {id:"qrgeo", cat:"utility", icon:"📍", name:"地理二维码", desc:"geo: 格式", tags:"qr geo", featured:0},
  {id:"lorem7", cat:"utility", icon:"📝", name:"列表假文", desc:"假列表项", tags:"lorem list", featured:0}
];

const state = {
  fav: new Set(JSON.parse(localStorage.getItem("ll_fav") || "[]")),
  recent: JSON.parse(localStorage.getItem("ll_recent") || "[]"),
  theme: localStorage.getItem("ll_theme") || "dark"
};

document.body.classList.toggle("dark", state.theme === "dark");
$("#year").textContent = new Date().getFullYear();

function save() {
  localStorage.setItem("ll_fav", JSON.stringify([...state.fav]));
  localStorage.setItem("ll_recent", JSON.stringify(state.recent));
  localStorage.setItem("ll_theme", state.theme);
}

function toast(s) {
  const e = document.createElement("div");
  e.className = "toast";
  e.textContent = s;
  $("#toastWrap").append(e);
  setTimeout(() => e.remove(), 2200);
}

function catName(id) { return CATS.find(x => x.id === id)?.name || "工具"; }
function tool(id) { return TOOLS.find(x => x.id === id); }

function catNav() {
  $("#categoryNav").innerHTML = CATS.map(c =>
    `<button class="cat-btn" data-category="${c.id}"><span>${c.icon}</span>${c.name}</button>`
  ).join("");
  $$(".cat-btn").forEach(b => b.onclick = () => showCategory(b.dataset.category));
}

function card(t) {
  const on = state.fav.has(t.id);
  return `<article class="tool-card" data-tool="${t.id}">
    <button class="fav ${on ? "on" : ""}" data-fav="${t.id}" title="收藏">${on ? "★" : "☆"}</button>
    <div class="tool-icon">${t.icon}</div>
    <h3>${t.name}</h3>
    <p>${t.desc}</p>
    <span class="tag">${catName(t.cat)}</span>
  </article>`;
}

function bindCards(root = document) {
  const sel = root === document ? ".tool-card" : root + " .tool-card";
  $$(sel).forEach(c => c.onclick = e => {
    if (e.target.closest("[data-fav]")) return;
    openTool(c.dataset.tool);
  });
  const favSel = root === document ? "[data-fav]" : root + " [data-fav]";
  $$(favSel).forEach(b => b.onclick = e => {
    e.stopPropagation();
    toggleFav(b.dataset.fav);
  });
}

function toggleFav(id) {
  state.fav.has(id) ? state.fav.delete(id) : state.fav.add(id);
  save();
  renderAll();
  toast(state.fav.has(id) ? "已加入收藏 ⭐" : "已取消收藏");
}

function renderHome() {
  const featured = TOOLS.filter(t => t.featured).slice(0, 8);
  $("#featuredGrid").innerHTML = featured.map(card).join("");
  const rec = state.recent.map(tool).filter(Boolean).slice(0, 4);
  $("#recentGrid").innerHTML = rec.map(card).join("");
  $("#recentEmpty").classList.toggle("hidden", rec.length > 0);
  $("#favCount").textContent = state.fav.size + " 个工具";
  $("#recentCount").textContent = rec.length ? rec.length + " 个工具" : "暂无记录";
  $("#toolCount").textContent = TOOLS.length + " 个工具";
  bindCards();
}

function showCategory(id) {
  $("#homeView").classList.add("hidden");
  $("#listView").classList.remove("hidden");
  const map = {
    all: ["全部工具", "全部工具都在这里"],
    favorites: ["我的收藏", "你收藏的趁手工具"],
    recent: ["最近使用", "刚刚用过的工具"]
  };
  let list, title, desc;
  if (id === "favorites") {
    list = TOOLS.filter(t => state.fav.has(t.id));
    title = map[id][0]; desc = map[id][1];
  } else if (id === "recent") {
    list = state.recent.map(tool).filter(Boolean);
    title = map[id][0]; desc = map[id][1];
  } else {
    list = id === "all" ? TOOLS : TOOLS.filter(t => t.cat === id);
    title = id === "all" ? map.all[0] : catName(id);
    desc = id === "all" ? map.all[1] : `共 ${list.length} 个工具`;
  }
  $("#listEyebrow").textContent = id.toUpperCase();
  $("#listTitle").textContent = title;
  $("#listDesc").textContent = desc;
  $("#listGrid").innerHTML = list.map(card).join("");
  $("#listEmpty").classList.toggle("hidden", list.length > 0);
  $("#listEmpty").textContent =
    id === "favorites" ? "还没有收藏工具。点卡片右上角 ☆ 收藏。" :
    id === "recent" ? "还没有使用记录。" : "这个分类暂时没有工具。";
  bindCards("#listGrid");
  $$(".cat-btn").forEach(b => b.classList.toggle("active", b.dataset.category === id));
}

function goHome() {
  $("#listView").classList.add("hidden");
  $("#homeView").classList.remove("hidden");
  $$(".cat-btn").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
  renderHome();
}

function renderAll() {
  renderHome();
  if (!$("#listView").classList.contains("hidden")) {
    showCategory($(".cat-btn.active")?.dataset.category || "all");
  }
}

$("#homeBtn").onclick = goHome;
$("#themeBtn").onclick = () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.body.classList.toggle("dark", state.theme === "dark");
  $("#themeBtn").textContent = state.theme === "dark" ? "☀️" : "🌙";
  save();
};
$("#themeBtn").textContent = state.theme === "dark" ? "☀️" : "🌙";
$$(".quick-card, .text-btn").forEach(b => b.onclick = () => showCategory(b.dataset.category));

function addRecent(id) {
  state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, 12);
  save();
}

function openTool(id) {
  const t = tool(id);
  if (!t) return;
  addRecent(id);
  $("#modalIcon").textContent = t.icon;
  $("#modalTitle").textContent = t.name;
  $("#modalCategory").textContent = catName(t.cat);
  $("#modalFav").textContent = state.fav.has(id) ? "★" : "☆";
  $("#modalFav").onclick = () => {
    toggleFav(id);
    $("#modalFav").textContent = state.fav.has(id) ? "★" : "☆";
  };
  $("#modalBody").innerHTML = toolUI(id);
  $("#toolModal").classList.remove("hidden");
  wireTool(id);
  wireSmartTool(id);
  renderHome();
}

$("#modalClose").onclick = () => $("#toolModal").classList.add("hidden");
$("#toolModal").onclick = e => { if (e.target === $("#toolModal")) $("#toolModal").classList.add("hidden"); };

document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openSearch();
  }
  if (e.key === "Escape") {
    $("#toolModal").classList.add("hidden");
    $("#searchModal").classList.add("hidden");
  }
});

function copyText(v) {
  navigator.clipboard?.writeText(v).then(() => toast("已复制到剪贴板")).catch(() => toast("复制失败，请手动复制"));
}

// ========== Pure MD5 (compact) ==========
function md5(str) {
  function cmn(q, a, b, x, s, t) {
    a = (a + q + x + t) | 0;
    return (((a << s) | (a >>> (32 - s))) + b) | 0;
  }
  function ff(a, b, c, d, x, s, t) { return cmn((b & c) | (~b & d), a, b, x, s, t); }
  function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & ~d), a, b, x, s, t); }
  function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
  function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }
  function md5cycle(x, k) {
    let a = x[0], b = x[1], c = x[2], d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936); d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819); b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897); d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341); b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416); d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063); b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682); d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290); b = ff(b, c, d, a, k[15], 22, 1236535329);
    a = gg(a, b, c, d, k[1], 5, -165796510); d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713); b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691); d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335); b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438); d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961); b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467); d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473); b = gg(b, c, d, a, k[12], 20, -1926607734);
    a = hh(a, b, c, d, k[5], 4, -378558); d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562); b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060); d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632); b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174); d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979); b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487); d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520); b = hh(b, c, d, a, k[2], 23, -995338651);
    a = ii(a, b, c, d, k[0], 6, -198630844); d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905); b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571); d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523); b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359); d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380); b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070); d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259); b = ii(b, c, d, a, k[9], 21, -343485551);
    x[0] = (a + x[0]) | 0; x[1] = (b + x[1]) | 0; x[2] = (c + x[2]) | 0; x[3] = (d + x[3]) | 0;
  }
  function md51(s) {
    const n = s.length, state = [1732584193, -271733879, -1732584194, 271733878];
    let i;
    for (i = 64; i <= n; i += 64) md5cycle(state, md5blk(s.substring(i - 64, i)));
    s = s.substring(i - 64);
    const tail = new Array(16).fill(0);
    for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) { md5cycle(state, tail); for (let j = 0; j < 16; j++) tail[j] = 0; }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }
  function md5blk(s) {
    const md5blks = [];
    for (let i = 0; i < 64; i += 4)
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    return md5blks;
  }
  function rhex(n) {
    let s = "", j;
    for (j = 0; j < 4; j++) s += ((n >> (j * 8 + 4)) & 0x0F).toString(16) + ((n >> (j * 8)) & 0x0F).toString(16);
    return s;
  }
  return md51(unescape(encodeURIComponent(str))).map(rhex).join("");
}


/* ========== 3.1 Smart fallback: every registered tool gets a usable local UI ========== */
function escHTML(v){
  return String(v ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}
function smartToolMeta(id){
  const t = tool(id) || {};
  return {
    id,
    name: t.name || id,
    desc: t.desc || "本地浏览器工具",
    cat: t.cat || "utility"
  };
}
function smartToolUI(id){
  const t = smartToolMeta(id);
  const hint = /json|yaml|xml|sql|html|css|js|regex|code|代码|格式/.test(id)
    ? "粘贴内容后点击「处理」"
    : /image|img|photo|图片|favicon|barcode|avatar/.test(id)
    ? "部分图片类工具需要选择文件；本基础版提供本地文本/参数处理入口"
    : "输入内容后点击「处理」，所有基础处理均在浏览器本地完成";
  return `
    <div class="smart-tool">
      <div class="smart-intro"><strong>${escHTML(t.name)}</strong><span>${escHTML(t.desc)}</span></div>
      <div class="field"><label>输入</label>
        <textarea id="smartIn" rows="9" placeholder="${escHTML(hint)}"></textarea>
      </div>
      <div class="row smart-actions">
        <button class="btn" id="smartGo">⚡ 处理</button>
        <button class="btn secondary" id="smartCopy">复制结果</button>
        <button class="btn secondary" id="smartClear">清空</button>
      </div>
      <div class="field" style="margin-top:15px">
        <label>结果</label>
        <pre class="result smart-result" id="smartOut">等待输入…</pre>
      </div>
      <div class="smart-note">💡 这是 3.1 的通用兼容实现。后续可以继续把单个工具升级为更专业的专用面板。</div>
    </div>`;
}
function smartRandomInt(n){
  n = Math.max(1, Number(n) || 1);
  const max = Math.floor(0x100000000 / n) * n;
  const a = new Uint32Array(1);
  do { crypto.getRandomValues(a); } while (a[0] >= max);
  return a[0] % n;
}
function smartUuid(){
  if (crypto.randomUUID) return crypto.randomUUID();
  const a = new Uint8Array(16); crypto.getRandomValues(a);
  a[6]=(a[6]&15)|64; a[8]=(a[8]&63)|128;
  const h=[...a].map(x=>x.toString(16).padStart(2,"0")).join("");
  return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
function smartBytes(s){
  return new TextEncoder().encode(s).length;
}
function smartHash(text, alg="SHA-256"){
  return crypto.subtle.digest(alg, new TextEncoder().encode(text)).then(buf =>
    [...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,"0")).join(""));
}
function smartProcess(id, raw){
  const s = String(raw ?? "");
  const lower = id.toLowerCase();
  const lines = s.split(/\r?\n/);
  if (!s.trim()) return "请输入内容后再处理。";

  if (/uuid/.test(lower)) return Array.from({length:Math.min(20,Math.max(1,Number(s)||5))}, smartUuid).join("\n");
  if (/password|passwd|passgen/.test(lower)){
    const len=Math.min(128,Math.max(6,Number(s)||20)), chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*_-";
    return Array.from({length:5},()=>Array.from({length:len},()=>chars[smartRandomInt(chars.length)]).join("")).join("\n");
  }
  if (/base64|b64/.test(lower)){
    try { return btoa(unescape(encodeURIComponent(s))); } catch {}
  }
  if (/urlencode|urlencode|urlenc/.test(lower)) return encodeURIComponent(s);
  if (/urldecode|urldec/.test(lower)){ try{return decodeURIComponent(s)}catch{return "URL 解码失败：内容可能不是合法编码。"} }
  if (/json/.test(lower)){
    try { return JSON.stringify(JSON.parse(s), null, 2); }
    catch(e){ return "JSON 解析失败：\n"+e.message; }
  }
  if (/dedupe|unique|去重/.test(lower)) return [...new Set(lines)].join("\n");
  if (/sort/.test(lower)) return lines.slice().sort((a,b)=>a.localeCompare(b,"zh-Hans")).join("\n");
  if (/reverse/.test(lower)) return lines.map(x=>[...x].reverse().join("")).join("\n");
  if (/linenumber|line.?number/.test(lower)) return lines.map((x,i)=>`${i+1}. ${x}`).join("\n");
  if (/uppercase|upper|大写/.test(lower)) return s.toUpperCase();
  if (/lowercase|lower|小写/.test(lower)) return s.toLowerCase();
  if (/slug/.test(lower)) return s.trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"");
  if (/striphtml|htmlstrip/.test(lower)) return new DOMParser().parseFromString(s,"text/html").body.textContent || "";
  if (/textstats|stats|wordcount|count/.test(lower))
    return `字符数：${[...s].length}\n行数：${lines.length}\n非空行：${lines.filter(x=>x.trim()).length}\nUTF-8 字节：${smartBytes(s)}\n词数：${(s.match(/[\p{L}\p{N}_]+/gu)||[]).length}`;
  if (/ascii/.test(lower)){
    return [...s].map(ch=>`${ch} = ${ch.codePointAt(0)}`).join("\n");
  }
  if (/unicode|codepoint/.test(lower)){
    return [...s].map(ch=>`U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4,"0")} ${ch}`).join("\n");
  }
  if (/binary|二进制/.test(lower)) return [...new TextEncoder().encode(s)].map(b=>b.toString(2).padStart(8,"0")).join(" ");
  if (/hex|十六进制/.test(lower)) return [...new TextEncoder().encode(s)].map(b=>b.toString(16).padStart(2,"0")).join(" ");
  if (/timestamp|unix/.test(lower)){
    const n=Number(s.trim());
    if(Number.isFinite(n)) return new Date(n < 1e12 ? n*1000 : n).toLocaleString();
    const d=new Date(s); return Number.isNaN(d.getTime()) ? "无法识别时间" : String(Math.floor(d.getTime()/1000));
  }
  if (/percent|百分比/.test(lower)){
    const nums=s.match(/-?\d+(?:\.\d+)?/g)?.map(Number)||[];
    if(nums.length>=2) return `${nums[0]} ÷ ${nums[1]} = ${(nums[0]/nums[1]*100).toFixed(2)}%`;
  }
  if (/sha256|sha-256/.test(lower)) return smartHash(s,"SHA-256");
  if (/sha512|sha-512/.test(lower)) return smartHash(s,"SHA-512");
  if (/sha1|sha-1/.test(lower)) return smartHash(s,"SHA-1");
  if (/hash|md5|crc/.test(lower)) return "此工具的完整算法实现尚未启用；当前先保留输入并提示，避免给出错误的算法结果。";
  if (/random|随机|抽签|pick/.test(lower)){
    const a=lines.filter(x=>x.trim()); return a.length ? a[smartRandomInt(a.length)] : String(Math.floor(Math.random()*100));
  }
  if (/regex|regexp|正则/.test(lower)) return `输入长度：${[...s].length}\n请在专用 Regex 工具中输入表达式与测试文本。`;
  if (/color|hex|rgb|hsl|颜色/.test(lower)) return `检测到颜色工具：${s.trim()}\n建议输入 HEX（如 #667eea）或 RGB（如 102,126,234）。`;
  if (/date|calendar|日期|age|年龄/.test(lower)) return `输入：${s}\n日期类工具建议使用 YYYY-MM-DD 格式。`;
  if (/number|convert|转换|unit|单位/.test(lower)){
    const n=Number(s.trim()); if(Number.isFinite(n)) return `数值：${n}\n二进制：${Math.trunc(n).toString(2)}\n八进制：${Math.trunc(n).toString(8)}\n十六进制：${Math.trunc(n).toString(16).toUpperCase()}`;
  }
  return `【${smartToolMeta(id).name}】\n\n${s}\n\n本地处理完成。`;
}
function wireSmartTool(id){
  const input=$("#smartIn"), out=$("#smartOut");
  if(!input || !out) return;
  $("#smartGo")?.addEventListener("click", async ()=>{
    out.textContent="处理中…";
    try{
      const r=smartProcess(id,input.value);
      out.textContent = r && typeof r.then==="function" ? await r : r;
    }catch(e){ out.textContent="处理失败："+(e?.message||e); }
  });
  $("#smartCopy")?.addEventListener("click",()=>copyText(out.textContent||""));
  $("#smartClear")?.addEventListener("click",()=>{input.value="";out.textContent="等待输入…";input.focus();});
  input.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="Enter") $("#smartGo")?.click();});
}

function toolUI(id) {
  const common = (a, b) =>
    `<div class="row"><button class="btn" id="${a[0]}">${a[1]}</button><button class="btn secondary" id="${b[0]}">${b[1]}</button></div>`;

  const map = {
    json: `<div class="field"><label>JSON 输入</label><textarea id="jsonIn" placeholder='{"hello":"LoneWalkerLee","ok":true}'></textarea></div>${common(["jsonFmt","格式化"],["jsonMin","压缩"])}<div class="field" style="margin-top:15px"><label>结果</label><div class="result" id="jsonOut"></div></div><button class="btn secondary" id="jsonCopy" style="margin-top:10px">复制结果</button>`,
    base64: `<div class="field"><label>文本</label><textarea id="b64In" placeholder="输入文本…"></textarea></div>${common(["b64Enc","编码"],["b64Dec","解码"])}<div class="field" style="margin-top:15px"><label>结果</label><div class="result" id="b64Out"></div></div><button class="btn secondary" id="b64Copy" style="margin-top:10px">复制结果</button>`,
    url: `<div class="field"><label>文本 / URL</label><textarea id="urlIn" placeholder="https://example.com/a b?x=1"></textarea></div>${common(["urlEnc","URL 编码"],["urlDec","URL 解码"])}<div class="field" style="margin-top:15px"><div class="result" id="urlOut"></div></div>`,
    jwt: `<div class="field"><label>JWT</label><textarea id="jwtIn" placeholder="eyJhbGciOi..."></textarea></div><button class="btn" id="jwtGo">解析</button><div class="two" style="margin-top:15px"><div><label>Header</label><div class="result" id="jwtHead"></div></div><div><label>Payload</label><div class="result" id="jwtPayload"></div></div></div>`,
    sha: `<div class="field"><label>输入</label><textarea id="shaIn" placeholder="输入要计算哈希的文本"></textarea></div><div class="row"><select id="shaAlg"><option value="SHA-256">SHA-256</option><option value="SHA-512">SHA-512</option><option value="SHA-1">SHA-1</option><option value="MD5">MD5</option></select><button class="btn" id="shaGo">计算</button></div><div class="field" style="margin-top:15px"><div class="result" id="shaOut"></div></div>`,
    uuid: `<div class="field"><label>生成数量</label><input id="uuidN" type="number" min="1" max="50" value="5"></div><button class="btn" id="uuidGo">生成 UUID</button><div class="field" style="margin-top:15px"><div class="result" id="uuidOut"></div></div><button class="btn secondary" id="uuidCopy" style="margin-top:10px">复制全部</button>`,
    password: `<div class="two"><div class="field"><label>长度</label><input id="pwLen" type="number" min="4" max="128" value="20"></div><div class="field"><label>数量</label><input id="pwN" type="number" min="1" max="30" value="5"></div></div><div class="row" style="margin-bottom:15px"><label class="check"><input id="pwLower" type="checkbox" checked> 小写</label><label class="check"><input id="pwUpper" type="checkbox" checked> 大写</label><label class="check"><input id="pwNum" type="checkbox" checked> 数字</label><label class="check"><input id="pwSym" type="checkbox" checked> 符号</label></div><button class="btn" id="pwGo">生成密码</button><div class="field" style="margin-top:15px"><div class="result" id="pwOut"></div></div>`,
    timestamp: `<div class="two"><div class="field"><label>Unix 时间戳（秒）</label><input id="tsIn" placeholder="例如 1789785600"><button class="btn" id="tsDate" style="margin-top:8px">→ 转日期</button></div><div class="field"><label>日期</label><input id="dateIn" type="datetime-local"><button class="btn" id="dateTs" style="margin-top:8px">→ 转时间戳</button></div></div><div class="result" id="tsOut" style="margin-top:15px"></div>`,
    regex: `<div class="two"><div class="field"><label>正则</label><input id="rePat" placeholder="\\d+"></div><div class="field"><label>Flags</label><input id="reFlags" value="g"></div></div><div class="field"><label>测试文本</label><textarea id="reText"></textarea></div><div class="field"><label>替换为（可选）</label><input id="reRep" placeholder="留空则只匹配"></div><button class="btn" id="reGo">测试 / 替换</button><div class="result" id="reOut" style="margin-top:15px"></div>`,
    textstats: `<div class="field"><label>文本</label><textarea id="statIn" placeholder="粘贴文本…"></textarea></div><div class="stat-grid" id="statOut"></div>`,
    case: `<div class="field"><label>文本</label><textarea id="caseIn"></textarea></div><div class="row"><button class="btn" id="upper">UPPER</button><button class="btn secondary" id="lower">lower</button><button class="btn secondary" id="title">Title</button><button class="btn secondary" id="camel">camel</button><button class="btn secondary" id="snake">snake</button></div><div class="result" id="caseOut" style="margin-top:15px"></div>`,
    dedupe: `<div class="field"><label>每行一项</label><textarea id="dedupeIn"></textarea></div><div class="row"><button class="btn" id="dedupeGo">去重</button><button class="btn secondary" id="sortGo">去重+排序</button><button class="btn secondary" id="reverseGo">反转</button><button class="btn secondary" id="emptyGo">去空行</button></div><div class="result" id="dedupeOut" style="margin-top:15px"></div>`,
    html: `<div class="field"><label>HTML / 文本</label><textarea id="htmlIn"></textarea></div>${common(["htmlEnc","编码"],["htmlDec","解码"])}<div class="result" id="htmlOut" style="margin-top:15px"></div>`,
    color: `<div class="two"><div class="field"><label>HEX</label><input id="hexIn" value="#5865f2"></div><div class="field"><label>RGB</label><input id="rgbIn" placeholder="88, 101, 242"></div></div><div class="row"><button class="btn" id="hexRgb">HEX → RGB</button><button class="btn secondary" id="rgbHex">RGB → HEX</button></div><div class="color-preview" id="colorPrev" style="margin-top:15px">预览</div><div class="result" id="colorOut" style="margin-top:10px"></div>`,
    random: `<div class="two"><div class="field"><label>长度</label><input id="randLen" type="number" min="1" max="500" value="32"></div><div class="field"><label>数量</label><input id="randN" type="number" min="1" max="30" value="5"></div></div><div class="field"><label>字符集</label><input id="randChars" value="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"></div><button class="btn" id="randGo">生成</button><div class="result" id="randOut" style="margin-top:15px"></div>`,
    qr: `<div class="field"><label>内容</label><textarea id="qrIn" placeholder="输入 URL 或文本。二维码由第三方公共服务生成，请勿输入敏感信息。"></textarea></div><button class="btn" id="qrGo">生成二维码</button><div id="qrOut"></div>`,
    diff: `<div class="two"><div class="field"><label>文本 A</label><textarea id="diffA"></textarea></div><div class="field"><label>文本 B</label><textarea id="diffB"></textarea></div></div><button class="btn" id="diffGo">比较</button><div class="diff" id="diffOut" style="margin-top:15px"></div>`,
    ip: `<div class="field"><label>公网 IP</label><div class="result" id="ipOut">点击查询。该功能会请求公共 IP 服务。</div></div><button class="btn" id="ipGo">查询公网 IP</button>`,
    headers: `<div class="result" id="headersOut"></div>`,
    urlparse: `<div class="field"><label>URL</label><input id="parseIn" placeholder="https://example.com/path?a=1#top"></div><button class="btn" id="parseGo">解析</button><div class="result" id="parseOut" style="margin-top:15px"></div>`,
    image: `<div class="dropzone"><label for="imgFile">📷 选择图片<br><small>图片只在浏览器中处理</small></label><input id="imgFile" type="file" accept="image/*"></div><div class="two" style="margin-top:15px"><div class="field"><label>宽度（留空保持比例）</label><input id="imgW" type="number" placeholder="可选"></div><div class="field"><label>质量（JPG/WebP）</label><input id="imgQ" type="number" min=".1" max="1" step=".05" value=".85"></div></div><button class="btn" id="imgGo">压缩 / 导出 WebP</button><div class="result" id="imgOut" style="margin-top:15px"></div>`,
    imgbase64: `<div class="dropzone"><label for="ibFile">🖼️ 选择图片转 Base64</label><input id="ibFile" type="file" accept="image/*"></div><div class="field" style="margin-top:15px"><textarea id="ibOut" placeholder="Base64 结果"></textarea></div><button class="btn secondary" id="ibCopy">复制</button>`,
    units: `<div class="two"><div class="field"><label>数值</label><input id="uVal" type="number" value="1"></div><div class="field"><label>类别</label><select id="uType"><option value="length">长度</option><option value="weight">重量</option><option value="temp">温度</option></select></div></div><div class="two"><select id="uFrom"></select><select id="uTo"></select></div><button class="btn" id="uGo" style="margin-top:12px">转换</button><div class="result" id="uOut" style="margin-top:15px"></div>`,
    markdown: `<div class="field"><label>Markdown 输入</label><textarea id="mdIn" placeholder="# Hello&#10;&#10;**粗体** *斜体*&#10;&#10;- 列表1&#10;- 列表2"></textarea></div><div class="field"><label>预览</label><div class="md-preview" id="mdOut"></div></div>`,
    slug: `<div class="field"><label>文本</label><textarea id="slugIn" placeholder="输入中文或英文标题"></textarea></div><button class="btn" id="slugGo">生成Slug</button><div class="result" id="slugOut" style="margin-top:15px"></div>`,
    wordfreq: `<div class="field"><label>文本</label><textarea id="wfIn" placeholder="粘贴英文或中文文本…"></textarea></div><button class="btn" id="wfGo">统计词频</button><div class="result" id="wfOut" style="margin-top:15px"></div>`,
    cron: `<div class="field"><label>Cron 表达式（5 位）</label><input id="cronIn" placeholder="*/5 * * * *  或  0 9 * * 1-5"></div><button class="btn" id="cronGo">解析</button><div class="result" id="cronOut" style="margin-top:15px"></div>`,
    lorem: `<div class="two"><div class="field"><label>段落数</label><input id="loremN" type="number" min="1" max="20" value="3"></div><div class="field"><label>类型</label><select id="loremType"><option value="para">段落</option><option value="sent">句子</option><option value="words">单词</option></select></div></div><button class="btn" id="loremGo">生成</button><div class="result" id="loremOut" style="margin-top:15px"></div><button class="btn secondary" id="loremCopy" style="margin-top:10px">复制</button>`,
    number: `<div class="field"><label>输入数值</label><input id="numIn" placeholder="例如 255 或 FF 或 11111111"></div><div class="field"><label>当前进制</label><select id="numFrom"><option value="10">十进制 (Dec)</option><option value="2">二进制 (Bin)</option><option value="8">八进制 (Oct)</option><option value="16">十六进制 (Hex)</option></select></div><button class="btn" id="numGo">转换</button><div class="result" id="numOut" style="margin-top:15px"></div>`,
    jsonyaml: `<div class="field"><label>输入（JSON 或简单 YAML）</label><textarea id="jyIn" placeholder='{"name":"LoneWalkerLee","ver":3}'></textarea></div><div class="row"><button class="btn" id="jsonToYaml">JSON → YAML</button><button class="btn secondary" id="yamlToJson">YAML → JSON</button></div><div class="result" id="jyOut" style="margin-top:15px"></div>`,
    // 新增工具 UI
    findreplace: `<div class="field"><label>原文</label><textarea id="frIn"></textarea></div><div class="two"><div class="field"><label>查找</label><input id="frFind"></div><div class="field"><label>替换为</label><input id="frRep"></div></div><label class="check"><input id="frAll" type="checkbox" checked> 全部替换</label><button class="btn" id="frGo" style="margin-top:12px">执行替换</button><div class="result" id="frOut" style="margin-top:15px"></div>`,
    reverse: `<div class="field"><label>文本</label><textarea id="revIn"></textarea></div><div class="row"><button class="btn" id="revStr">字符串反转</button><button class="btn secondary" id="revLine">按行反转</button></div><div class="result" id="revOut" style="margin-top:15px"></div>`,
    linenumber: `<div class="field"><label>文本</label><textarea id="lnIn"></textarea></div><div class="two"><div class="field"><label>起始数字</label><input id="lnStart" type="number" value="1"></div><div class="field"><label>分隔符</label><input id="lnSep" value=". "></div></div><button class="btn" id="lnGo">添加行号</button><div class="result" id="lnOut" style="margin-top:15px"></div>`,
    morse: `<div class="field"><label>文本 或 摩斯密码</label><textarea id="morseIn" placeholder="HELLO 或 .... . .-.. .-.. ---"></textarea></div>${common(["morseEnc","转摩斯"],["morseDec","转文本"])}<div class="result" id="morseOut" style="margin-top:15px"></div>`,
    rot13: `<div class="field"><label>文本</label><textarea id="rotIn"></textarea></div><div class="two"><div class="field"><label>偏移量（凯撒）</label><input id="rotShift" type="number" value="13" min="1" max="25"></div></div><button class="btn" id="rotGo">加密 / 解密</button><div class="result" id="rotOut" style="margin-top:15px"></div>`,
    textbin: `<div class="field"><label>文本 或 二进制</label><textarea id="tbIn"></textarea></div>${common(["tbEnc","转二进制"],["tbDec","转文本"])}<div class="result" id="tbOut" style="margin-top:15px"></div>`,
    aes: `<div class="field"><label>明文 / 密文（Base64）</label><textarea id="aesIn"></textarea></div><div class="field"><label>密钥（任意字符串）</label><input id="aesKey" placeholder="至少 8 位建议"></div>${common(["aesEnc","加密"],["aesDec","解密"])}<div class="result" id="aesOut" style="margin-top:15px"></div>`,
    hmac: `<div class="field"><label>消息</label><textarea id="hmacMsg"></textarea></div><div class="field"><label>密钥</label><input id="hmacKey"></div><button class="btn" id="hmacGo">计算 HMAC-SHA256</button><div class="result" id="hmacOut" style="margin-top:15px"></div>`,
    pwcheck: `<div class="field"><label>密码</label><input id="pwCheckIn" type="password" placeholder="输入要检测的密码"></div><button class="btn" id="pwCheckGo">检测强度</button><div class="result" id="pwCheckOut" style="margin-top:15px"></div>`,
    hashcmp: `<div class="field"><label>哈希 A</label><input id="hcA"></div><div class="field"><label>哈希 B</label><input id="hcB"></div><button class="btn" id="hcGo">对比</button><div class="result" id="hcOut" style="margin-top:15px"></div>`,
    cidr: `<div class="field"><label>CIDR（如 192.168.1.0/24）</label><input id="cidrIn" placeholder="192.168.1.0/24"></div><button class="btn" id="cidrGo">计算</button><div class="result" id="cidrOut" style="margin-top:15px"></div>`,
    useragent: `<div class="field"><label>User-Agent（留空使用当前）</label><textarea id="uaIn" placeholder="留空则使用当前浏览器"></textarea></div><button class="btn" id="uaGo">解析</button><div class="result" id="uaOut" style="margin-top:15px"></div>`,
    meta: `<div class="field"><label>标题</label><input id="metaTitle" placeholder="页面标题"></div><div class="field"><label>描述</label><textarea id="metaDesc" placeholder="页面描述"></textarea></div><div class="field"><label>关键词</label><input id="metaKw" placeholder="keyword1, keyword2"></div><div class="field"><label>图片 URL（OG）</label><input id="metaImg" placeholder="https://..."></div><button class="btn" id="metaGo">生成 Meta 标签</button><div class="result" id="metaOut" style="margin-top:15px"></div>`,
    chmod: `<div class="field"><label>权限数字（如 755）或符号（如 rwxr-xr-x）</label><input id="chmodIn" placeholder="755 或 rwxr-xr-x"></div><button class="btn" id="chmodGo">转换</button><div class="result" id="chmodOut" style="margin-top:15px"></div>`,
    cssmin: `<div class="field"><label>CSS</label><textarea id="cssIn"></textarea></div>${common(["cssMin","压缩"],["cssBeautify","美化"])}<div class="result" id="cssOut" style="margin-top:15px"></div>`,
    jsmin: `<div class="field"><label>JavaScript</label><textarea id="jsIn"></textarea></div><button class="btn" id="jsMin">简单压缩</button><div class="result" id="jsOut" style="margin-top:15px"></div>`,
    sqlfmt: `<div class="field"><label>SQL</label><textarea id="sqlIn" placeholder="select * from users where id=1"></textarea></div><button class="btn" id="sqlGo">格式化</button><div class="result" id="sqlOut" style="margin-top:15px"></div>`,
    dice: `<div class="two"><div class="field"><label>骰子面数</label><input id="diceSides" type="number" min="2" max="1000" value="6"></div><div class="field"><label>数量</label><input id="diceN" type="number" min="1" max="50" value="2"></div></div><button class="btn" id="diceGo">掷骰子</button><div class="result" id="diceOut" style="margin-top:15px"></div>`,
    stopwatch: `<div style="text-align:center;font-size:42px;font-weight:700;margin:20px 0" id="swDisplay">00:00:00.00</div><div class="row"><button class="btn" id="swStart">开始</button><button class="btn secondary" id="swPause">暂停</button><button class="btn secondary" id="swReset">重置</button></div>`,
    datasize: `<div class="field"><label>数值</label><input id="dsVal" type="number" value="1"></div><div class="two"><select id="dsFrom"><option value="B">B</option><option value="KB">KB</option><option value="MB" selected>MB</option><option value="GB">GB</option><option value="TB">TB</option></select><select id="dsTo"><option value="B">B</option><option value="KB">KB</option><option value="MB">MB</option><option value="GB" selected>GB</option><option value="TB">TB</option></select></div><button class="btn" id="dsGo" style="margin-top:12px">转换</button><div class="result" id="dsOut" style="margin-top:15px"></div>`,
    roman: `<div class="field"><label>数字 或 罗马数字</label><input id="romanIn" placeholder="2024 或 MMXXIV"></div>${common(["romanTo","→ 罗马"],["romanFrom","→ 数字"])}<div class="result" id="romanOut" style="margin-top:15px"></div>`,
    percent: `<div class="field"><label>计算类型</label><select id="pctType"><option value="pct">求百分比（A 是 B 的百分之几）</option><option value="of">求数值（B 的 X%）</option><option value="change">增减百分比</option></select></div><div class="two"><div class="field"><label>数值 A / 原值</label><input id="pctA" type="number"></div><div class="field"><label>数值 B / 百分比</label><input id="pctB" type="number"></div></div><button class="btn" id="pctGo">计算</button><div class="result" id="pctOut" style="margin-top:15px"></div>`,
    imginfo: `<div class="dropzone"><label for="iiFile">📷 选择图片查看信息</label><input id="iiFile" type="file" accept="image/*"></div><div class="result" id="iiOut" style="margin-top:15px"></div>`,
    imgrotate: `<div class="dropzone"><label for="irFile">📷 选择图片</label><input id="irFile" type="file" accept="image/*"></div><div class="row" style="margin-top:12px"><button class="btn" id="irLeft">左转 90°</button><button class="btn secondary" id="irRight">右转 90°</button><button class="btn secondary" id="irFlipH">水平翻转</button><button class="btn secondary" id="irFlipV">垂直翻转</button></div><div id="irPreview" style="margin-top:15px;text-align:center"></div>`,
    bmi: `<div class="two"><div class="field"><label>身高 (cm)</label><input id="bmiH" type="number" placeholder="170"></div><div class="field"><label>体重 (kg)</label><input id="bmiW" type="number" placeholder="65"></div></div><button class="btn" id="bmiGo">计算 BMI</button><div class="result" id="bmiOut" style="margin-top:15px"></div>`,
    age: `<div class="field"><label>出生日期</label><input id="ageBirth" type="date"></div><button class="btn" id="ageGo">计算年龄</button><div class="result" id="ageOut" style="margin-top:15px"></div>`,
    loan: `<div class="field"><label>贷款金额（元）</label><input id="loanAmt" type="number" placeholder="500000"></div><div class="two"><div class="field"><label>年利率（%）</label><input id="loanRate" type="number" step="0.01" placeholder="4.2"></div><div class="field"><label>期限（年）</label><input id="loanYear" type="number" placeholder="30"></div></div><button class="btn" id="loanGo">计算月供</button><div class="result" id="loanOut" style="margin-top:15px"></div>`,
    aspect: `<div class="two"><div class="field"><label>宽度</label><input id="aspW" type="number" value="1920"></div><div class="field"><label>高度</label><input id="aspH" type="number" value="1080"></div></div><button class="btn" id="aspGo">计算比例</button><div class="result" id="aspOut" style="margin-top:15px"></div>`,
    tip: `<div class="field"><label>账单金额</label><input id="tipAmt" type="number" placeholder="200"></div><div class="two"><div class="field"><label>小费比例（%）</label><input id="tipPct" type="number" value="10"></div><div class="field"><label>分账人数</label><input id="tipPeople" type="number" value="1" min="1"></div></div><button class="btn" id="tipGo">计算</button><div class="result" id="tipOut" style="margin-top:15px"></div>`,

    unicode: `<div class="field"><label>文本</label><textarea id="uniIn"></textarea></div><div class="row"><button class="btn" id="uniEnc">转 Unicode</button><button class="btn secondary" id="uniDec">转文本</button></div><div class="result" id="uniOut" style="margin-top:15px"></div>`,
    escapejs: `<div class="field"><label>文本</label><textarea id="escIn"></textarea></div><div class="row"><button class="btn" id="escEnc">Escape</button><button class="btn secondary" id="escDec">Unescape</button></div><div class="result" id="escOut" style="margin-top:15px"></div>`,
    textclean: `<div class="field"><label>文本</label><textarea id="tcIn"></textarea></div><div class="row"><button class="btn" id="tcSpace">去多余空格</button><button class="btn secondary" id="tcEmpty">去空行</button><button class="btn secondary" id="tcAll">全面清理</button></div><div class="result" id="tcOut" style="margin-top:15px"></div>`,
    fullhalf: `<div class="field"><label>文本</label><textarea id="fhIn"></textarea></div><div class="row"><button class="btn" id="fhToFull">转全角</button><button class="btn secondary" id="fhToHalf">转半角</button></div><div class="result" id="fhOut" style="margin-top:15px"></div>`,
    ascii: `<div class="field"><label>文本 或 ASCII 码（空格分隔）</label><textarea id="ascIn"></textarea></div><div class="row"><button class="btn" id="ascEnc">转 ASCII</button><button class="btn secondary" id="ascDec">转文本</button></div><div class="result" id="ascOut" style="margin-top:15px"></div>`,
    cnupper: `<div class="field"><label>金额数字</label><input id="cnuIn" type="number" step="0.01" placeholder="12345.67"></div><button class="btn" id="cnuGo">转大写</button><div class="result" id="cnuOut" style="margin-top:15px"></div>`,
    htmlfmt: `<div class="field"><label>HTML</label><textarea id="hfIn"></textarea></div><div class="row"><button class="btn" id="hfBeautify">美化</button><button class="btn secondary" id="hfMin">压缩</button></div><div class="result" id="hfOut" style="margin-top:15px"></div>`,
    xmlfmt: `<div class="field"><label>XML</label><textarea id="xfIn"></textarea></div><button class="btn" id="xfGo">格式化</button><div class="result" id="xfOut" style="margin-top:15px"></div>`,
    jsoncsv: `<div class="field"><label>JSON 数组 或 CSV</label><textarea id="jcIn" placeholder='[{"name":"A","age":20}] 或 name,age\nA,20'></textarea></div><div class="row"><button class="btn" id="jcToCsv">JSON → CSV</button><button class="btn secondary" id="jcToJson">CSV → JSON</button></div><div class="result" id="jcOut" style="margin-top:15px"></div>`,
    colorcontrast: `<div class="two"><div class="field"><label>前景色 HEX</label><input id="ccFg" value="#ffffff"></div><div class="field"><label>背景色 HEX</label><input id="ccBg" value="#000000"></div></div><button class="btn" id="ccGo">检查对比度</button><div class="result" id="ccOut" style="margin-top:15px"></div>`,
    gradient: `<div class="two"><div class="field"><label>颜色1</label><input id="grC1" value="#7c8cff"></div><div class="field"><label>颜色2</label><input id="grC2" value="#36d5c8"></div></div><div class="field"><label>角度</label><input id="grAngle" type="number" value="135"></div><button class="btn" id="grGo">生成</button><div id="grPreview" style="height:80px;border-radius:12px;margin-top:15px"></div><div class="result" id="grOut" style="margin-top:10px"></div>`,
    randomcolor: `<div class="field"><label>生成数量</label><input id="rcN" type="number" min="1" max="30" value="8"></div><button class="btn" id="rcGo">生成随机颜色</button><div id="rcOut" style="margin-top:15px;display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px"></div>`,
    coin: `<div style="text-align:center;font-size:64px;margin:30px 0" id="coinResult">🪙</div><button class="btn" id="coinGo" style="width:100%">抛硬币</button><div class="result" id="coinOut" style="margin-top:15px;text-align:center"></div>`,
    picker: `<div class="field"><label>选项列表（每行一个）</label><textarea id="pkIn" placeholder="张三\n李四\n王五"></textarea></div><div class="field"><label>抽取数量</label><input id="pkN" type="number" min="1" value="1"></div><button class="btn" id="pkGo">随机抽取</button><div class="result" id="pkOut" style="margin-top:15px"></div>`,
    placeholder: `<div class="two"><div class="field"><label>宽度</label><input id="phW" type="number" value="400"></div><div class="field"><label>高度</label><input id="phH" type="number" value="300"></div></div><div class="field"><label>背景色</label><input id="phColor" value="#7c8cff"></div><div class="field"><label>文字（可选）</label><input id="phText" placeholder="400×300"></div><button class="btn" id="phGo">生成并下载</button><div id="phPreview" style="margin-top:15px;text-align:center"></div>`,
    worldclock: `<div class="result" id="wcOut" style="line-height:2"></div><button class="btn" id="wcRefresh" style="margin-top:10px">刷新</button>`,
    countdown: `<div class="field"><label>倒计时分钟数</label><input id="cdMin" type="number" min="1" value="5"></div><div style="text-align:center;font-size:42px;font-weight:700;margin:20px 0" id="cdDisplay">05:00</div><div class="row"><button class="btn" id="cdStart">开始</button><button class="btn secondary" id="cdReset">重置</button></div>`,
    datediff: `<div class="two"><div class="field"><label>开始日期</label><input id="ddStart" type="date"></div><div class="field"><label>结束日期</label><input id="ddEnd" type="date"></div></div><button class="btn" id="ddGo">计算</button><div class="result" id="ddOut" style="margin-top:15px"></div>`,
    compound: `<div class="field"><label>本金</label><input id="cpP" type="number" placeholder="10000"></div><div class="two"><div class="field"><label>年利率（%）</label><input id="cpR" type="number" step="0.01" placeholder="5"></div><div class="field"><label>年数</label><input id="cpN" type="number" placeholder="10"></div></div><div class="field"><label>复利次数（每年）</label><select id="cpFreq"><option value="1">每年</option><option value="4">每季</option><option value="12" selected>每月</option><option value="365">每天</option></select></div><button class="btn" id="cpGo">计算</button><div class="result" id="cpOut" style="margin-top:15px"></div>`,
    blood: `<div class="two"><div class="field"><label>父亲血型</label><select id="blF"><option>A</option><option>B</option><option>AB</option><option>O</option></select></div><div class="field"><label>母亲血型</label><select id="blM"><option>A</option><option>B</option><option>AB</option><option>O</option></select></div></div><button class="btn" id="blGo">推算</button><div class="result" id="blOut" style="margin-top:15px"></div>`,
    idcheck: `<div class="field"><label>18 位身份证号</label><input id="idIn" maxlength="18" placeholder="110101199001011234"></div><button class="btn" id="idGo">校验</button><div class="result" id="idOut" style="margin-top:15px"></div>`,
    grayscale: `<div class="dropzone"><label for="gsFile">📷 选择图片转灰度</label><input id="gsFile" type="file" accept="image/*"></div><div id="gsPreview" style="margin-top:15px;text-align:center"></div>`,
    watermark: `<div class="dropzone"><label for="wmFile">📷 选择图片</label><input id="wmFile" type="file" accept="image/*"></div><div class="field" style="margin-top:12px"><label>水印文字</label><input id="wmText" value="LoneWalkerLee"></div><div class="two"><div class="field"><label>字体大小</label><input id="wmSize" type="number" value="24"></div><div class="field"><label>透明度 (0-1)</label><input id="wmAlpha" type="number" step="0.1" min="0.1" max="1" value="0.4"></div></div><button class="btn" id="wmGo">添加水印并下载</button><div id="wmPreview" style="margin-top:15px;text-align:center"></div>`,
    timeunit: `<div class="field"><label>数值</label><input id="tuVal" type="number" value="1"></div><div class="two"><select id="tuFrom"><option value="s">秒</option><option value="m">分</option><option value="h" selected>时</option><option value="d">天</option><option value="w">周</option></select><select id="tuTo"><option value="s">秒</option><option value="m">分</option><option value="h">时</option><option value="d" selected>天</option><option value="w">周</option></select></div><button class="btn" id="tuGo" style="margin-top:12px">转换</button><div class="result" id="tuOut" style="margin-top:15px"></div>`,

    striphtml: `<div class="field"><label>含 HTML 的文本</label><textarea id="shIn"></textarea></div><button class="btn" id="shGo">去除标签</button><div class="result" id="shOut" style="margin-top:15px"></div>`,
    xor: `<div class="field"><label>文本</label><textarea id="xorIn"></textarea></div><div class="field"><label>密钥</label><input id="xorKey" value="key"></div><div class="row"><button class="btn" id="xorEnc">加密</button><button class="btn secondary" id="xorDec">解密</button></div><div class="result" id="xorOut" style="margin-top:15px"></div>`,
    cssunit: `<div class="field"><label>数值</label><input id="cuVal" type="number" value="16"></div><div class="two"><select id="cuFrom"><option value="px" selected>px</option><option value="rem">rem</option><option value="em">em</option><option value="pt">pt</option></select><select id="cuTo"><option value="px">px</option><option value="rem" selected>rem</option><option value="em">em</option><option value="pt">pt</option></select></div><div class="field"><label>根字体大小 (px)</label><input id="cuRoot" type="number" value="16"></div><button class="btn" id="cuGo" style="margin-top:12px">转换</button><div class="result" id="cuOut" style="margin-top:15px"></div>`,
    boxshadow: `<div class="two"><div class="field"><label>X 偏移</label><input id="bsX" type="number" value="0"></div><div class="field"><label>Y 偏移</label><input id="bsY" type="number" value="4"></div></div><div class="two"><div class="field"><label>模糊</label><input id="bsBlur" type="number" value="12"></div><div class="field"><label>扩散</label><input id="bsSpread" type="number" value="0"></div></div><div class="field"><label>颜色</label><input id="bsColor" value="rgba(0,0,0,0.15)"></div><button class="btn" id="bsGo">生成</button><div id="bsPreview" style="height:80px;margin-top:15px;border-radius:12px;background:var(--card)"></div><div class="result" id="bsOut" style="margin-top:10px"></div>`,
    borderradius: `<div class="two"><div class="field"><label>左上</label><input id="brTL" type="number" value="12"></div><div class="field"><label>右上</label><input id="brTR" type="number" value="12"></div></div><div class="two"><div class="field"><label>右下</label><input id="brBR" type="number" value="12"></div><div class="field"><label>左下</label><input id="brBL" type="number" value="12"></div></div><button class="btn" id="brGo">生成</button><div id="brPreview" style="height:80px;margin-top:15px;background:var(--accent)"></div><div class="result" id="brOut" style="margin-top:10px"></div>`,
    shade: `<div class="field"><label>基准 HEX</label><input id="shColor" value="#7c8cff"></div><div class="field"><label>生成数量</label><input id="shN" type="number" min="3" max="11" value="7"></div><button class="btn" id="shGo">生成色阶</button><div id="shOut" style="margin-top:15px;display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:6px"></div>`,
    favicon: `<div class="field"><label>文字（1-2 字）</label><input id="fvText" value="L" maxlength="2"></div><div class="field"><label>背景色</label><input id="fvBg" value="#7c8cff"></div><div class="field"><label>文字色</label><input id="fvFg" value="#ffffff"></div><button class="btn" id="fvGo">生成 Favicon</button><div id="fvPreview" style="margin-top:15px;text-align:center"></div>`,
    invert: `<div class="dropzone"><label for="invFile">📷 选择图片反色</label><input id="invFile" type="file" accept="image/*"></div><div id="invPreview" style="margin-top:15px;text-align:center"></div>`,
    discount: `<div class="field"><label>原价</label><input id="dcPrice" type="number" placeholder="100"></div><div class="field"><label>折扣（如 8.5 表示 85 折）</label><input id="dcOff" type="number" step="0.1" placeholder="8.5"></div><button class="btn" id="dcGo">计算</button><div class="result" id="dcOut" style="margin-top:15px"></div>`,
    vat: `<div class="field"><label>金额</label><input id="vatAmt" type="number" placeholder="100"></div><div class="field"><label>税率（%）</label><input id="vatRate" type="number" value="13"></div><div class="row"><button class="btn" id="vatAdd">未税 → 含税</button><button class="btn secondary" id="vatSub">含税 → 未税</button></div><div class="result" id="vatOut" style="margin-top:15px"></div>`,
    idealweight: `<div class="field"><label>身高 (cm)</label><input id="iwH" type="number" placeholder="170"></div><div class="field"><label>性别</label><select id="iwSex"><option value="m">男</option><option value="f">女</option></select></div><button class="btn" id="iwGo">计算</button><div class="result" id="iwOut" style="margin-top:15px"></div>`,
    daysuntil: `<div class="field"><label>目标日期</label><input id="duDate" type="date"></div><button class="btn" id="duGo">计算</button><div class="result" id="duOut" style="margin-top:15px"></div>`,
    randomname: `<div class="field"><label>生成数量</label><input id="rnN" type="number" min="1" max="50" value="10"></div><button class="btn" id="rnGo">生成随机姓名</button><div class="result" id="rnOut" style="margin-top:15px"></div>`,
    guid: `<div class="field"><label>数量</label><input id="guidN" type="number" min="1" max="30" value="5"></div><button class="btn" id="guidGo">生成 GUID</button><div class="result" id="guidOut" style="margin-top:15px"></div>`,
    loremcn: `<div class="field"><label>段落数</label><input id="lcN" type="number" min="1" max="10" value="3"></div><button class="btn" id="lcGo">生成中文占位</button><div class="result" id="lcOut" style="margin-top:15px"></div>`,
    repeat: `<div class="field"><label>文本</label><textarea id="rpIn"></textarea></div><div class="field"><label>重复次数</label><input id="rpN" type="number" min="1" max="1000" value="5"></div><button class="btn" id="rpGo">重复</button><div class="result" id="rpOut" style="margin-top:15px"></div>`,
    splitlen: `<div class="field"><label>文本</label><textarea id="slIn"></textarea></div><div class="field"><label>每段长度</label><input id="slLen" type="number" min="1" value="10"></div><button class="btn" id="slGo">分割</button><div class="result" id="slOut" style="margin-top:15px"></div>`,
    num2words: `<div class="field"><label>数字（0-999999）</label><input id="nwIn" type="number" min="0" max="999999" placeholder="12345"></div><button class="btn" id="nwGo">转换</button><div class="result" id="nwOut" style="margin-top:15px"></div>`,
    jwtgen: `<div class="field"><label>Header (JSON)</label><textarea id="jgHead" placeholder='{"alg":"none","typ":"JWT"}'></textarea></div><div class="field"><label>Payload (JSON)</label><textarea id="jgPay" placeholder='{"sub":"123","name":"LoneWalkerLee"}'></textarea></div><button class="btn" id="jgGo">生成 JWT（无签名）</button><div class="result" id="jgOut" style="margin-top:15px"></div>`,
    base32: `<div class="field"><label>文本</label><textarea id="b32In"></textarea></div><div class="row"><button class="btn" id="b32Enc">编码</button><button class="btn secondary" id="b32Dec">解码</button></div><div class="result" id="b32Out" style="margin-top:15px"></div>`,
    colorpalette: `<div class="field"><label>主色 HEX</label><input id="cpColor" value="#7c8cff"></div><button class="btn" id="cpGo">生成调色板</button><div id="cpOut" style="margin-top:15px;display:grid;grid-template-columns:repeat(5,1fr);gap:8px"></div>`,
    textstat2: `<div class="field"><label>文本</label><textarea id="ts2In"></textarea></div><button class="btn" id="ts2Go">详细分析</button><div class="result" id="ts2Out" style="margin-top:15px"></div>`,
    fuel: `<div class="field"><label>距离 (km)</label><input id="fuDist" type="number" placeholder="100"></div><div class="two"><div class="field"><label>油耗 (L/100km)</label><input id="fuConsume" type="number" step="0.1" placeholder="7.5"></div><div class="field"><label>油价 (元/L)</label><input id="fuPrice" type="number" step="0.01" placeholder="7.8"></div></div><button class="btn" id="fuGo">计算</button><div class="result" id="fuOut" style="margin-top:15px"></div>`,
    urlparser2: `<div class="field"><label>URL</label><input id="up2In" placeholder="https://example.com/path?a=1&b=2"></div><button class="btn" id="up2Go">解析参数</button><div class="result" id="up2Out" style="margin-top:15px"></div>`,

    textencrypt: `<div class="field"><label>文本</label><textarea id="teIn"></textarea></div><div class="field"><label>密钥</label><input id="teKey" value="secret"></div><div class="row"><button class="btn" id="teEnc">加密</button><button class="btn secondary" id="teDec">解密</button></div><div class="result" id="teOut" style="margin-top:15px"></div>`,
    hashfile: `<div class="dropzone"><label for="hfFile">📄 选择文件计算 SHA-256</label><input id="hfFile" type="file"></div><div class="result" id="hfOut" style="margin-top:15px"></div>`,
    jsonpath: `<div class="field"><label>JSON</label><textarea id="jpJson" placeholder='{"user":{"name":"Lee"}}'></textarea></div><div class="field"><label>路径（如 user.name）</label><input id="jpPath" placeholder="user.name"></div><button class="btn" id="jpGo">提取</button><div class="result" id="jpOut" style="margin-top:15px"></div>`,
    cssprefix: `<div class="field"><label>CSS 属性</label><textarea id="cpIn" placeholder="transform: scale(1.1);\nuser-select: none;"></textarea></div><button class="btn" id="cpGo">添加前缀</button><div class="result" id="cpOut" style="margin-top:15px"></div>`,
    mimetype: `<div class="field"><label>文件扩展名（如 png / pdf）</label><input id="mtIn" placeholder="png"></div><button class="btn" id="mtGo">查询</button><div class="result" id="mtOut" style="margin-top:15px"></div>`,
    httpstatus: `<div class="field"><label>状态码</label><input id="hsIn" type="number" placeholder="404"></div><button class="btn" id="hsGo">查询</button><div class="result" id="hsOut" style="margin-top:15px"></div>`,
    useragentgen: `<div class="field"><label>浏览器</label><select id="uagType"><option value="chrome">Chrome</option><option value="firefox">Firefox</option><option value="safari">Safari</option><option value="edge">Edge</option></select></div><button class="btn" id="uagGo">生成</button><div class="result" id="uagOut" style="margin-top:15px"></div>`,
    robots: `<div class="field"><label>允许的爬虫（* 表示全部）</label><input id="rbAgent" value="*"></div><div class="field"><label>禁止路径（每行一个）</label><textarea id="rbDis" placeholder="/admin\n/private"></textarea></div><div class="field"><label>Sitemap URL（可选）</label><input id="rbSite" placeholder="https://example.com/sitemap.xml"></div><button class="btn" id="rbGo">生成</button><div class="result" id="rbOut" style="margin-top:15px"></div>`,
    sitemap: `<div class="field"><label>URL 列表（每行一个）</label><textarea id="smIn" placeholder="https://example.com/\nhttps://example.com/about"></textarea></div><button class="btn" id="smGo">生成片段</button><div class="result" id="smOut" style="margin-top:15px"></div>`,
    ogimage: `<div class="result" id="ogOut" style="line-height:1.8"></div>`,
    passwordpin: `<div class="two"><div class="field"><label>长度</label><input id="pinLen" type="number" min="4" max="12" value="6"></div><div class="field"><label>数量</label><input id="pinN" type="number" min="1" max="20" value="5"></div></div><button class="btn" id="pinGo">生成 PIN</button><div class="result" id="pinOut" style="margin-top:15px"></div>`,
    colorname: `<div class="field"><label>HEX 颜色</label><input id="cnIn" value="#7c8cff"></div><button class="btn" id="cnGo">近似名称</button><div class="result" id="cnOut" style="margin-top:15px"></div>`,
    aspectratio2: `<div class="two"><div class="field"><label>原宽</label><input id="ar2W" type="number" value="1920"></div><div class="field"><label>原高</label><input id="ar2H" type="number" value="1080"></div></div><div class="field"><label>新宽度（求高度）</label><input id="ar2NewW" type="number" value="800"></div><button class="btn" id="ar2Go">计算</button><div class="result" id="ar2Out" style="margin-top:15px"></div>`,
    percentage2: `<div class="field"><label>模式</label><select id="pc2Mode"><option value="inc">增加百分比</option><option value="dec">减少百分比</option><option value="what">A 是 B 的百分之几</option></select></div><div class="two"><div class="field"><label>数值 A</label><input id="pc2A" type="number"></div><div class="field"><label>数值 B / 百分比</label><input id="pc2B" type="number"></div></div><button class="btn" id="pc2Go">计算</button><div class="result" id="pc2Out" style="margin-top:15px"></div>`,
    randomnumber: `<div class="two"><div class="field"><label>最小值</label><input id="rnMin" type="number" value="1"></div><div class="field"><label>最大值</label><input id="rnMax" type="number" value="100"></div></div><div class="field"><label>生成数量</label><input id="rnCount" type="number" min="1" max="100" value="10"></div><button class="btn" id="rnGo2">生成</button><div class="result" id="rnOut2" style="margin-top:15px"></div>`,
    listsort: `<div class="field"><label>列表（每行一项）</label><textarea id="lsIn"></textarea></div><div class="row"><button class="btn" id="lsAlpha">字母排序</button><button class="btn secondary" id="lsNum">数字排序</button><button class="btn secondary" id="lsLen">按长度</button></div><div class="result" id="lsOut" style="margin-top:15px"></div>`,
    textwrap: `<div class="field"><label>文本</label><textarea id="twIn"></textarea></div><div class="field"><label>每行字符数</label><input id="twW" type="number" value="40"></div><button class="btn" id="twGo">换行</button><div class="result" id="twOut" style="margin-top:15px"></div>`,
    camelcase: `<div class="field"><label>文本</label><input id="ccIn" placeholder="hello world / hello_world"></div><div class="row"><button class="btn" id="ccCamel">camelCase</button><button class="btn secondary" id="ccSnake">snake_case</button><button class="btn secondary" id="ccKebab">kebab-case</button><button class="btn secondary" id="ccPascal">PascalCase</button></div><div class="result" id="ccOut" style="margin-top:15px"></div>`,
    loremhtml: `<div class="field"><label>段落数</label><input id="lhN" type="number" min="1" max="10" value="3"></div><button class="btn" id="lhGo">生成</button><div class="result" id="lhOut" style="margin-top:15px"></div>`,
    qrwifi: `<div class="field"><label>WiFi 名称 (SSID)</label><input id="qwSsid"></div><div class="field"><label>密码</label><input id="qwPass" type="password"></div><div class="field"><label>加密类型</label><select id="qwEnc"><option value="WPA">WPA/WPA2</option><option value="WEP">WEP</option><option value="nopass">无密码</option></select></div><button class="btn" id="qwGo">生成二维码内容</button><div class="result" id="qwOut" style="margin-top:15px"></div>`,
    timestampms: `<div class="two"><div class="field"><label>毫秒时间戳</label><input id="tmsIn" placeholder="1700000000000"><button class="btn" id="tmsToDate" style="margin-top:8px">→ 日期</button></div><div class="field"><label>当前毫秒</label><div class="result" id="tmsNow"></div></div></div>`,
    cronnext: `<div class="field"><label>Cron（5位）</label><input id="cnIn" placeholder="0 9 * * 1-5"></div><button class="btn" id="cnGo">说明</button><div class="result" id="cnOut" style="margin-top:15px"></div>`,
    base64file: `<div class="dropzone"><label for="bfFile">📁 选择文件转 Base64</label><input id="bfFile" type="file"></div><div class="field" style="margin-top:12px"><textarea id="bfOut" rows="6"></textarea></div><button class="btn secondary" id="bfCopy">复制</button>`,
    imageinfo2: `<div class="dropzone"><label for="ii2File">📷 选择图片</label><input id="ii2File" type="file" accept="image/*"></div><div class="result" id="ii2Out" style="margin-top:15px"></div>`,
    canvascolor: `<div class="dropzone"><label for="ccFile">📷 选择图片后点击取色</label><input id="ccFile" type="file" accept="image/*"></div><canvas id="ccCanvas" style="max-width:100%;margin-top:12px;cursor:crosshair;border-radius:8px"></canvas><div class="result" id="ccOut" style="margin-top:10px"></div>`,
    text2img: `<div class="field"><label>文字</label><input id="tiText" value="LoneWalkerLee"></div><div class="two"><div class="field"><label>字体大小</label><input id="tiSize" type="number" value="48"></div><div class="field"><label>背景色</label><input id="tiBg" value="#7c8cff"></div></div><button class="btn" id="tiGo">生成图片</button><div id="tiPreview" style="margin-top:15px;text-align:center"></div>`,
    progress: `<div class="field"><label>进度 (0-100)</label><input id="pgVal" type="number" min="0" max="100" value="65"></div><div class="field"><label>颜色</label><input id="pgColor" value="#7c8cff"></div><button class="btn" id="pgGo">生成 CSS</button><div class="result" id="pgOut" style="margin-top:15px"></div>`,
    loading: `<button class="btn" id="ldGo">生成 Loading CSS</button><div class="result" id="ldOut" style="margin-top:15px"></div>`,
    buttoncss: `<div class="field"><label>按钮文字</label><input id="btnText" value="Click Me"></div><div class="field"><label>背景色</label><input id="btnBg" value="#7c8cff"></div><button class="btn" id="btnGo">生成</button><div class="result" id="btnOut" style="margin-top:15px"></div>`,
    tablegen: `<div class="two"><div class="field"><label>行数</label><input id="tgRows" type="number" min="1" max="20" value="3"></div><div class="field"><label>列数</label><input id="tgCols" type="number" min="1" max="10" value="3"></div></div><button class="btn" id="tgGo">生成表格</button><div class="result" id="tgOut" style="margin-top:15px"></div>`,
    listgen: `<div class="field"><label>列表项（每行一个）</label><textarea id="lgIn" placeholder="项目一\n项目二\n项目三"></textarea></div><div class="field"><label>类型</label><select id="lgType"><option value="ul">无序列表 ul</option><option value="ol">有序列表 ol</option></select></div><button class="btn" id="lgGo">生成</button><div class="result" id="lgOut" style="margin-top:15px"></div>`,
    metagen: `<div class="field"><label>标题</label><input id="mgTitle"></div><div class="field"><label>描述</label><textarea id="mgDesc"></textarea></div><button class="btn" id="mgGo">生成 Meta</button><div class="result" id="mgOut" style="margin-top:15px"></div>`,
    htaccess: `<div class="result" id="htOut" style="line-height:1.7"></div>`,
    nginx: `<div class="result" id="nxOut" style="line-height:1.7"></div>`,
    docker: `<div class="result" id="dkOut" style="line-height:1.7"></div>`,
    gitcmd: `<div class="result" id="gtOut" style="line-height:1.7"></div>`,
    regexlib: `<div class="result" id="rlOut" style="line-height:1.8"></div>`,
    emoji: `<div id="emOut" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(60px,1fr));gap:8px;font-size:24px"></div>`,
    symbol: `<div id="syOut" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(50px,1fr));gap:8px;font-size:20px"></div>`,
    currencyfmt: `<div class="field"><label>金额</label><input id="cfAmt" type="number" step="0.01" value="12345.67"></div><div class="field"><label>货币</label><select id="cfCur"><option value="CNY">人民币 CNY</option><option value="USD">美元 USD</option><option value="EUR">欧元 EUR</option><option value="JPY">日元 JPY</option></select></div><button class="btn" id="cfGo">格式化</button><div class="result" id="cfOut" style="margin-top:15px"></div>`,
    bytesize: `<div class="field"><label>字节数</label><input id="bsIn" type="number" value="1048576"></div><button class="btn" id="bsGo">格式化</button><div class="result" id="bsOut" style="margin-top:15px"></div>`,
    temperature: `<div class="field"><label>数值</label><input id="tpVal" type="number" value="25"></div><div class="two"><select id="tpFrom"><option value="C">摄氏 °C</option><option value="F">华氏 °F</option><option value="K">开尔文 K</option></select><select id="tpTo"><option value="C">摄氏 °C</option><option value="F" selected>华氏 °F</option><option value="K">开尔文 K</option></select></div><button class="btn" id="tpGo" style="margin-top:12px">转换</button><div class="result" id="tpOut" style="margin-top:15px"></div>`,
    lengthunit: `<div class="field"><label>数值</label><input id="luVal" type="number" value="1"></div><div class="two"><select id="luFrom"><option value="m">米</option><option value="km">千米</option><option value="cm">厘米</option><option value="mm">毫米</option><option value="mi">英里</option><option value="yd">码</option><option value="ft">英尺</option><option value="in">英寸</option></select><select id="luTo"><option value="m">米</option><option value="km">千米</option><option value="cm" selected>厘米</option><option value="mm">毫米</option><option value="mi">英里</option><option value="yd">码</option><option value="ft">英尺</option><option value="in">英寸</option></select></div><button class="btn" id="luGo" style="margin-top:12px">转换</button><div class="result" id="luOut" style="margin-top:15px"></div>`,
    weightunit: `<div class="field"><label>数值</label><input id="wuVal" type="number" value="1"></div><div class="two"><select id="wuFrom"><option value="kg">千克</option><option value="g">克</option><option value="mg">毫克</option><option value="lb">磅</option><option value="oz">盎司</option><option value="t">吨</option></select><select id="wuTo"><option value="kg">千克</option><option value="g" selected>克</option><option value="mg">毫克</option><option value="lb">磅</option><option value="oz">盎司</option><option value="t">吨</option></select></div><button class="btn" id="wuGo" style="margin-top:12px">转换</button><div class="result" id="wuOut" style="margin-top:15px"></div>`,
    speedunit: `<div class="field"><label>数值</label><input id="suVal" type="number" value="100"></div><div class="two"><select id="suFrom"><option value="kmh">km/h</option><option value="mph">mph</option><option value="ms">m/s</option><option value="knot">节</option></select><select id="suTo"><option value="kmh">km/h</option><option value="mph" selected>mph</option><option value="ms">m/s</option><option value="knot">节</option></select></div><button class="btn" id="suGo" style="margin-top:12px">转换</button><div class="result" id="suOut" style="margin-top:15px"></div>`,
    datarate: `<div class="field"><label>数值</label><input id="drVal" type="number" value="100"></div><div class="two"><select id="drFrom"><option value="Mbps">Mbps</option><option value="Mb/s">Mb/s</option><option value="MB/s">MB/s</option><option value="Gbps">Gbps</option></select><select id="drTo"><option value="Mbps">Mbps</option><option value="Mb/s">Mb/s</option><option value="MB/s" selected>MB/s</option><option value="Gbps">Gbps</option></select></div><button class="btn" id="drGo" style="margin-top:12px">转换</button><div class="result" id="drOut" style="margin-top:15px"></div>`,
    angle: `<div class="field"><label>数值</label><input id="agVal" type="number" value="180"></div><div class="two"><select id="agFrom"><option value="deg">度</option><option value="rad">弧度</option></select><select id="agTo"><option value="deg">度</option><option value="rad" selected>弧度</option></select></div><button class="btn" id="agGo" style="margin-top:12px">转换</button><div class="result" id="agOut" style="margin-top:15px"></div>`,
    fibonacci: `<div class="field"><label>生成个数</label><input id="fbN" type="number" min="1" max="100" value="15"></div><button class="btn" id="fbGo">生成</button><div class="result" id="fbOut" style="margin-top:15px"></div>`,
    prime: `<div class="field"><label>数字</label><input id="prIn" type="number" placeholder="97"></div><button class="btn" id="prGo">判断</button><div class="result" id="prOut" style="margin-top:15px"></div>`,
    gcdlcm: `<div class="two"><div class="field"><label>数字 A</label><input id="glA" type="number" value="12"></div><div class="field"><label>数字 B</label><input id="glB" type="number" value="18"></div></div><button class="btn" id="glGo">计算</button><div class="result" id="glOut" style="margin-top:15px"></div>`,

    textreverse: `<div class="field"><label>文本</label><textarea id="trIn"></textarea></div><div class="row"><button class="btn" id="trChar">按字符反转</button><button class="btn secondary" id="trLine">按行反转</button></div><div class="result" id="trOut" style="margin-top:15px"></div>`,
    textcount: `<div class="field"><label>文本</label><textarea id="tcIn"></textarea></div><div class="field"><label>要统计的字符/词</label><input id="tcWord"></div><button class="btn" id="tcGo">统计</button><div class="result" id="tcOut" style="margin-top:15px"></div>`,
    slug: `<div class="field"><label>标题</label><input id="slIn" placeholder="Hello World 你好"></div><button class="btn" id="slGo">生成Slug</button><div class="result" id="slOut" style="margin-top:15px"></div>`,
    markdown2html: `<div class="field"><label>Markdown</label><textarea id="mdIn" placeholder="# 标题\n**粗体** *斜体*\n- 列表"></textarea></div><button class="btn" id="mdGo">转换</button><div class="result" id="mdOut" style="margin-top:15px"></div>`,
    html2text: `<div class="field"><label>HTML</label><textarea id="htIn"></textarea></div><button class="btn" id="htGo">提取文本</button><div class="result" id="htOut" style="margin-top:15px"></div>`,
    rot13: `<div class="field"><label>文本</label><textarea id="roIn"></textarea></div><button class="btn" id="roGo">ROT13 转换</button><div class="result" id="roOut" style="margin-top:15px"></div>`,
    caesar: `<div class="field"><label>文本</label><textarea id="caIn"></textarea></div><div class="field"><label>位移（1-25）</label><input id="caShift" type="number" min="1" max="25" value="3"></div><div class="row"><button class="btn" id="caEnc">加密</button><button class="btn secondary" id="caDec">解密</button></div><div class="result" id="caOut" style="margin-top:15px"></div>`,
    base58: `<div class="field"><label>文本</label><textarea id="b58In"></textarea></div><div class="row"><button class="btn" id="b58Enc">编码</button><button class="btn secondary" id="b58Dec">解码</button></div><div class="result" id="b58Out" style="margin-top:15px"></div>`,
    urlsafe: `<div class="field"><label>文本</label><textarea id="usIn"></textarea></div><div class="row"><button class="btn" id="usEnc">编码</button><button class="btn secondary" id="usDec">解码</button></div><div class="result" id="usOut" style="margin-top:15px"></div>`,
    hexdump: `<div class="field"><label>文本</label><textarea id="hdIn"></textarea></div><button class="btn" id="hdGo">生成 Hex Dump</button><div class="result" id="hdOut" style="margin-top:15px;font-family:monospace"></div>`,
    passwordgen2: `<div class="two"><div class="field"><label>长度</label><input id="pg2Len" type="number" value="16"></div><div class="field"><label>数量</label><input id="pg2N" type="number" value="5"></div></div><div class="field"><label>字符集</label><div class="row"><label><input type="checkbox" id="pg2Lower" checked> 小写</label><label><input type="checkbox" id="pg2Upper" checked> 大写</label><label><input type="checkbox" id="pg2Num" checked> 数字</label><label><input type="checkbox" id="pg2Sym"> 符号</label></div></div><button class="btn" id="pg2Go">生成</button><div class="result" id="pg2Out" style="margin-top:15px"></div>`,
    colorconvert: `<div class="field"><label>颜色值（HEX 或 RGB）</label><input id="ccIn" value="#7c8cff"></div><button class="btn" id="ccGo">转换</button><div class="result" id="ccOut" style="margin-top:15px"></div>`,
    numberfmt: `<div class="field"><label>数字</label><input id="nfIn" value="1234567.89"></div><div class="row"><button class="btn" id="nfAdd">添加千分位</button><button class="btn secondary" id="nfRem">去除千分位</button></div><div class="result" id="nfOut" style="margin-top:15px"></div>`,
    tip: `<div class="field"><label>账单金额</label><input id="tipAmt" type="number" value="100"></div><div class="field"><label>小费比例 (%)</label><input id="tipPct" type="number" value="15"></div><button class="btn" id="tipGo">计算</button><div class="result" id="tipOut" style="margin-top:15px"></div>`,
    splitbill: `<div class="field"><label>总金额</label><input id="sbAmt" type="number" value="300"></div><div class="field"><label>人数</label><input id="sbN" type="number" value="3"></div><button class="btn" id="sbGo">分账</button><div class="result" id="sbOut" style="margin-top:15px"></div>`,
    uuidbatch: `<div class="field"><label>数量</label><input id="ubN" type="number" min="1" max="50" value="10"></div><button class="btn" id="ubGo">批量生成</button><div class="result" id="ubOut" style="margin-top:15px"></div>`,
    randomcolor2: `<div class="field"><label>数量</label><input id="rc2N" type="number" min="1" max="30" value="12"></div><button class="btn" id="rc2Go">生成</button><div id="rc2Out" style="margin-top:15px;display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:6px"></div>`,
    br: `<div class="field"><label>文本</label><textarea id="brIn"></textarea></div><div class="row"><button class="btn" id="brLF">转 LF</button><button class="btn secondary" id="brCRLF">转 CRLF</button><button class="btn secondary" id="brCR">转 CR</button></div><div class="result" id="brOut" style="margin-top:15px"></div>`,
    tabspace: `<div class="field"><label>文本</label><textarea id="tsIn"></textarea></div><div class="field"><label>空格数</label><input id="tsN" type="number" value="2"></div><div class="row"><button class="btn" id="ts2space">Tab→空格</button><button class="btn secondary" id="ts2tab">空格→Tab</button></div><div class="result" id="tsOut" style="margin-top:15px"></div>`,
    duplicate: `<div class="field"><label>文本（每行一项）</label><textarea id="duIn"></textarea></div><button class="btn" id="duGo">找出重复行</button><div class="result" id="duOut" style="margin-top:15px"></div>`,
    unique: `<div class="field"><label>文本（每行一项）</label><textarea id="unIn"></textarea></div><button class="btn" id="unGo">去重保留顺序</button><div class="result" id="unOut" style="margin-top:15px"></div>`,
    opengraph: `<div class="field"><label>标题</label><input id="ogTitle"></div><div class="field"><label>描述</label><textarea id="ogDesc"></textarea></div><div class="field"><label>图片 URL</label><input id="ogImg"></div><div class="field"><label>页面 URL</label><input id="ogUrl"></div><button class="btn" id="ogGo">生成</button><div class="result" id="ogOut" style="margin-top:15px"></div>`,
    json2ts: `<div class="field"><label>JSON</label><textarea id="jtIn" placeholder='{"name":"Lee","age":18}'></textarea></div><button class="btn" id="jtGo">转 TypeScript</button><div class="result" id="jtOut" style="margin-top:15px"></div>`,
    flexbox: `<div class="result" id="fxOut" style="line-height:1.8"></div>`,
    mediaquery: `<div class="result" id="mqOut" style="line-height:1.8"></div>`,
    seo: `<div class="result" id="seoOut" style="line-height:1.8"></div>`,
    keyboard: `<div id="kbOut" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:8px;font-size:18px"></div>`,
    workdays: `<div class="two"><div class="field"><label>开始日期</label><input id="wdStart" type="date"></div><div class="field"><label>结束日期</label><input id="wdEnd" type="date"></div></div><button class="btn" id="wdGo">计算工作日</button><div class="result" id="wdOut" style="margin-top:15px"></div>`,
    agecalc2: `<div class="field"><label>出生日期</label><input id="ac2Birth" type="date"></div><button class="btn" id="ac2Go">计算精确年龄</button><div class="result" id="ac2Out" style="margin-top:15px"></div>`,
    percentage3: `<div class="field"><label>模式</label><select id="pc3Mode"><option value="p1">A 的 B% 是多少</option><option value="p2">A 是 B 的百分之几</option><option value="p3">从 A 到 B 增长了百分之几</option></select></div><div class="two"><div class="field"><label>A</label><input id="pc3A" type="number"></div><div class="field"><label>B</label><input id="pc3B" type="number"></div></div><button class="btn" id="pc3Go">计算</button><div class="result" id="pc3Out" style="margin-top:15px"></div>`,
    scientific: `<div class="field"><label>数字</label><input id="scIn" value="123456789"></div><div class="row"><button class="btn" id="scTo">转科学计数法</button><button class="btn secondary" id="scFrom">转普通数字</button></div><div class="result" id="scOut" style="margin-top:15px"></div>`,
    countdown2: `<div class="field"><label>目标日期时间</label><input id="cd2In" type="datetime-local"></div><button class="btn" id="cd2Go">开始倒计时</button><div class="result" id="cd2Out" style="margin-top:15px;font-size:1.2em"></div>`,

    textreplace: `<div class="field"><label>文本</label><textarea id="trepIn"></textarea></div><div class="field"><label>查找</label><input id="trepFind"></div><div class="field"><label>替换为</label><input id="trepTo"></div><button class="btn" id="trepGo">全部替换</button><div class="result" id="trepOut" style="margin-top:15px"></div>`,
    lineNumber: `<div class="field"><label>文本</label><textarea id="lnIn"></textarea></div><button class="btn" id="lnGo">添加行号</button><div class="result" id="lnOut" style="margin-top:15px"></div>`,
    prefixsuffix: `<div class="field"><label>文本（每行一项）</label><textarea id="psIn"></textarea></div><div class="two"><div class="field"><label>前缀</label><input id="psPre"></div><div class="field"><label>后缀</label><input id="psSuf"></div></div><button class="btn" id="psGo">添加</button><div class="result" id="psOut" style="margin-top:15px"></div>`,
    extractemails: `<div class="field"><label>文本</label><textarea id="eeIn"></textarea></div><button class="btn" id="eeGo">提取邮箱</button><div class="result" id="eeOut" style="margin-top:15px"></div>`,
    extracturls: `<div class="field"><label>文本</label><textarea id="euIn"></textarea></div><button class="btn" id="euGo">提取链接</button><div class="result" id="euOut" style="margin-top:15px"></div>`,
    extractphones: `<div class="field"><label>文本</label><textarea id="epIn"></textarea></div><button class="btn" id="epGo">提取手机号</button><div class="result" id="epOut" style="margin-top:15px"></div>`,
    wordcount2: `<div class="field"><label>文本</label><textarea id="wc2In"></textarea></div><button class="btn" id="wc2Go">统计</button><div class="result" id="wc2Out" style="margin-top:15px"></div>`,
    textcompress: `<div class="field"><label>文本</label><textarea id="tcoIn"></textarea></div><button class="btn" id="tcoGo">压缩空白</button><div class="result" id="tcoOut" style="margin-top:15px"></div>`,
    base64url: `<div class="field"><label>文本</label><textarea id="b64uIn"></textarea></div><div class="row"><button class="btn" id="b64uEnc">编码</button><button class="btn secondary" id="b64uDec">解码</button></div><div class="result" id="b64uOut" style="margin-top:15px"></div>`,
    htmlentity: `<div class="field"><label>文本</label><textarea id="heIn"></textarea></div><div class="row"><button class="btn" id="heEnc">编码</button><button class="btn secondary" id="heDec">解码</button></div><div class="result" id="heOut" style="margin-top:15px"></div>`,
    jwtpayload: `<div class="field"><label>JWT</label><textarea id="jwpIn" placeholder="eyJhbGciOi..."></textarea></div><button class="btn" id="jwpGo">解码 Payload</button><div class="result" id="jwpOut" style="margin-top:15px"></div>`,
    hashcompare: `<div class="field"><label>文本 A</label><textarea id="hcA"></textarea></div><div class="field"><label>文本 B</label><textarea id="hcB"></textarea></div><button class="btn" id="hcGo">对比 SHA-256</button><div class="result" id="hcOut" style="margin-top:15px"></div>`,
    regexreplace: `<div class="field"><label>文本</label><textarea id="rrIn"></textarea></div><div class="field"><label>正则</label><input id="rrReg" placeholder="\\d+"></div><div class="field"><label>替换为</label><input id="rrTo"></div><button class="btn" id="rrGo">替换</button><div class="result" id="rrOut" style="margin-top:15px"></div>`,
    chmodcalc: `<div class="field"><label>权限数字（如 755）</label><input id="cmIn" value="755" maxlength="3"></div><button class="btn" id="cmGo">解析</button><div class="result" id="cmOut" style="margin-top:15px"></div>`,
    portcheck: `<div class="result" id="pcOut" style="line-height:1.8"></div>`,
    statuscode: `<div class="field"><label>状态码</label><input id="scIn" type="number" placeholder="404"></div><button class="btn" id="scGo">查询</button><div class="result" id="scOut" style="margin-top:15px"></div>`,
    imageplaceholder: `<div class="two"><div class="field"><label>宽</label><input id="ipW" type="number" value="400"></div><div class="field"><label>高</label><input id="ipH" type="number" value="300"></div></div><button class="btn" id="ipGo">生成链接</button><div class="result" id="ipOut" style="margin-top:15px"></div>`,
    randomstring: `<div class="two"><div class="field"><label>长度</label><input id="rsLen" type="number" value="16"></div><div class="field"><label>数量</label><input id="rsN" type="number" value="5"></div></div><button class="btn" id="rsGo">生成</button><div class="result" id="rsOut" style="margin-top:15px"></div>`,
    passwordstrength: `<div class="field"><label>密码</label><input id="pwsIn" type="password"></div><button class="btn" id="pwsGo">检测强度</button><div class="result" id="pwsOut" style="margin-top:15px"></div>`,
    dateformat: `<div class="field"><label>日期时间</label><input id="dfIn" type="datetime-local"></div><button class="btn" id="dfGo">格式化</button><div class="result" id="dfOut" style="margin-top:15px"></div>`,
    weeknumber: `<div class="field"><label>日期</label><input id="wnIn" type="date"></div><button class="btn" id="wnGo">计算周数</button><div class="result" id="wnOut" style="margin-top:15px"></div>`,
    zodiac: `<div class="field"><label>生日</label><input id="zoIn" type="date"></div><button class="btn" id="zoGo">查询星座</button><div class="result" id="zoOut" style="margin-top:15px"></div>`,
    constellation: `<div class="field"><label>出生年份</label><input id="coIn" type="number" placeholder="1995"></div><button class="btn" id="coGo">查询生肖</button><div class="result" id="coOut" style="margin-top:15px"></div>`,
    bmi2: `<div class="two"><div class="field"><label>身高 (cm)</label><input id="bmi2H" type="number"></div><div class="field"><label>体重 (kg)</label><input id="bmi2W" type="number"></div></div><button class="btn" id="bmi2Go">计算</button><div class="result" id="bmi2Out" style="margin-top:15px"></div>`,
    loan: `<div class="field"><label>贷款金额</label><input id="lnAmt" type="number" value="1000000"></div><div class="two"><div class="field"><label>年利率 (%)</label><input id="lnRate" type="number" step="0.01" value="4.1"></div><div class="field"><label>期限（月）</label><input id="lnMonth" type="number" value="360"></div></div><button class="btn" id="lnGo">计算月供</button><div class="result" id="lnOut" style="margin-top:15px"></div>`,
    discount2: `<div class="field"><label>订单金额</label><input id="dc2Amt" type="number" value="200"></div><div class="field"><label>满减规则（如 满100减20）</label><input id="dc2Rule" placeholder="100-20"></div><button class="btn" id="dc2Go">计算</button><div class="result" id="dc2Out" style="margin-top:15px"></div>`,
    unitarea: `<div class="field"><label>数值</label><input id="uaVal" type="number" value="1"></div><div class="two"><select id="uaFrom"><option value="m2">平方米</option><option value="mu">亩</option><option value="ha">公顷</option><option value="km2">平方公里</option><option value="ft2">平方英尺</option></select><select id="uaTo"><option value="m2">平方米</option><option value="mu" selected>亩</option><option value="ha">公顷</option><option value="km2">平方公里</option><option value="ft2">平方英尺</option></select></div><button class="btn" id="uaGo" style="margin-top:12px">转换</button><div class="result" id="uaOut" style="margin-top:15px"></div>`,
    unitvolume: `<div class="field"><label>数值</label><input id="uvVal" type="number" value="1"></div><div class="two"><select id="uvFrom"><option value="l">升</option><option value="ml">毫升</option><option value="m3">立方米</option><option value="gal">加仑</option></select><select id="uvTo"><option value="l">升</option><option value="ml" selected>毫升</option><option value="m3">立方米</option><option value="gal">加仑</option></select></div><button class="btn" id="uvGo" style="margin-top:12px">转换</button><div class="result" id="uvOut" style="margin-top:15px"></div>`,
    unitdata: `<div class="field"><label>数值</label><input id="udVal" type="number" value="1"></div><div class="two"><select id="udFrom"><option value="B">B</option><option value="KB">KB</option><option value="MB" selected>MB</option><option value="GB">GB</option><option value="TB">TB</option></select><select id="udTo"><option value="B">B</option><option value="KB">KB</option><option value="MB">MB</option><option value="GB" selected>GB</option><option value="TB">TB</option></select></div><button class="btn" id="udGo" style="margin-top:12px">转换</button><div class="result" id="udOut" style="margin-top:15px"></div>`,

    textsort: `<div class="field"><label>文本（每行一项）</label><textarea id="tsortIn"></textarea></div><div class="row"><button class="btn" id="tsortAsc">正序</button><button class="btn secondary" id="tsortDesc">倒序</button><button class="btn secondary" id="tsortLen">按长度</button></div><div class="result" id="tsortOut" style="margin-top:15px"></div>`,
    textfilter: `<div class="field"><label>文本</label><textarea id="tfIn"></textarea></div><div class="field"><label>关键词</label><input id="tfKey"></div><div class="row"><button class="btn" id="tfInclude">包含保留</button><button class="btn secondary" id="tfExclude">包含排除</button></div><div class="result" id="tfOut" style="margin-top:15px"></div>`,
    charfreq: `<div class="field"><label>文本</label><textarea id="cfIn"></textarea></div><button class="btn" id="cfGo">统计频率</button><div class="result" id="cfOut" style="margin-top:15px"></div>`,
    removeempty: `<div class="field"><label>文本</label><textarea id="reIn"></textarea></div><button class="btn" id="reGo">删除空行</button><div class="result" id="reOut" style="margin-top:15px"></div>`,
    joinlines: `<div class="field"><label>文本</label><textarea id="jlIn"></textarea></div><div class="field"><label>分隔符</label><input id="jlSep" value=", "></div><button class="btn" id="jlGo">合并</button><div class="result" id="jlOut" style="margin-top:15px"></div>`,
    splittext: `<div class="field"><label>文本</label><textarea id="stIn"></textarea></div><div class="field"><label>分隔符</label><input id="stSep" value=","></div><button class="btn" id="stGo">拆分</button><div class="result" id="stOut" style="margin-top:15px"></div>`,
    caseconvert: `<div class="field"><label>文本</label><textarea id="ccvIn"></textarea></div><div class="row"><button class="btn" id="ccvUp">全大写</button><button class="btn secondary" id="ccvLow">全小写</button><button class="btn secondary" id="ccvCap">首字母大写</button></div><div class="result" id="ccvOut" style="margin-top:15px"></div>`,
    titlecase: `<div class="field"><label>文本</label><input id="tcIn2"></div><button class="btn" id="tcGo2">标题格式化</button><div class="result" id="tcOut2" style="margin-top:15px"></div>`,
    encodeuri: `<div class="field"><label>文本</label><textarea id="eu2In"></textarea></div><div class="row"><button class="btn" id="eu2Enc">编码</button><button class="btn secondary" id="eu2Dec">解码</button></div><div class="result" id="eu2Out" style="margin-top:15px"></div>`,
    encodeuricomponent: `<div class="field"><label>文本</label><textarea id="eucIn"></textarea></div><div class="row"><button class="btn" id="eucEnc">编码</button><button class="btn secondary" id="eucDec">解码</button></div><div class="result" id="eucOut" style="margin-top:15px"></div>`,
    escapehtml: `<div class="field"><label>文本</label><textarea id="ehIn"></textarea></div><div class="row"><button class="btn" id="ehEnc">转义</button><button class="btn secondary" id="ehDec">反转义</button></div><div class="result" id="ehOut" style="margin-top:15px"></div>`,
    uuidv4: `<div class="field"><label>数量</label><input id="uv4N" type="number" min="1" max="50" value="5"></div><button class="btn" id="uv4Go">生成 UUID v4</button><div class="result" id="uv4Out" style="margin-top:15px"></div>`,
    nanoid: `<div class="two"><div class="field"><label>长度</label><input id="nanoLen" type="number" value="21"></div><div class="field"><label>数量</label><input id="nanoN" type="number" value="5"></div></div><button class="btn" id="nanoGo">生成</button><div class="result" id="nanoOut" style="margin-top:15px"></div>`,
    coinflip: `<button class="btn" id="coinGo">抛硬币</button><div class="result" id="coinOut" style="margin-top:15px;font-size:1.5em"></div>`,
    diceroll: `<div class="two"><div class="field"><label>面数</label><input id="diceFace" type="number" value="6"></div><div class="field"><label>次数</label><input id="diceN" type="number" value="2"></div></div><button class="btn" id="diceGo">投掷</button><div class="result" id="diceOut" style="margin-top:15px"></div>`,
    pickone: `<div class="field"><label>选项（每行一个）</label><textarea id="poIn"></textarea></div><button class="btn" id="poGo">随机抽一个</button><div class="result" id="poOut" style="margin-top:15px;font-size:1.3em"></div>`,
    pickmulti: `<div class="field"><label>选项（每行一个）</label><textarea id="pmIn"></textarea></div><div class="field"><label>抽取数量</label><input id="pmN" type="number" value="3"></div><button class="btn" id="pmGo">抽取</button><div class="result" id="pmOut" style="margin-top:15px"></div>`,
    yesno: `<button class="btn" id="ynGo">是 还是 否？</button><div class="result" id="ynOut" style="margin-top:15px;font-size:1.5em"></div>`,
    tablemarkdown: `<div class="two"><div class="field"><label>行数</label><input id="tmRows" type="number" value="3"></div><div class="field"><label>列数</label><input id="tmCols" type="number" value="3"></div></div><button class="btn" id="tmGo">生成 Markdown 表格</button><div class="result" id="tmOut" style="margin-top:15px"></div>`,
    chineseid: `<div class="field"><label>身份证号</label><input id="cidIn" maxlength="18" placeholder="18位身份证号"></div><button class="btn" id="cidGo">解析</button><div class="result" id="cidOut" style="margin-top:15px"></div>`,
    bankcard: `<div class="field"><label>银行卡号</label><input id="bcIn" placeholder="卡号"></div><button class="btn" id="bcGo">Luhn 校验</button><div class="result" id="bcOut" style="margin-top:15px"></div>`,
    aspect: `<div class="two"><div class="field"><label>宽</label><input id="asW" type="number" value="1920"></div><div class="field"><label>高</label><input id="asH" type="number" value="1080"></div></div><button class="btn" id="asGo">计算比例</button><div class="result" id="asOut" style="margin-top:15px"></div>`,
    average: `<div class="field"><label>数字（每行一个或逗号分隔）</label><textarea id="avgIn" placeholder="1\n2\n3\n4\n5"></textarea></div><button class="btn" id="avgGo">计算平均值</button><div class="result" id="avgOut" style="margin-top:15px"></div>`,
    sum: `<div class="field"><label>数字（每行一个或逗号分隔）</label><textarea id="sumIn"></textarea></div><button class="btn" id="sumGo">求和 / 求积</button><div class="result" id="sumOut" style="margin-top:15px"></div>`,
    roman: `<div class="field"><label>数字或罗马数字</label><input id="rmIn" placeholder="2024 或 MMXXIV"></div><div class="row"><button class="btn" id="rmTo">转罗马</button><button class="btn secondary" id="rmFrom">转数字</button></div><div class="result" id="rmOut" style="margin-top:15px"></div>`,
    binary: `<div class="field"><label>数值</label><input id="binIn" value="255"></div><div class="two"><select id="binFrom"><option value="10">十进制</option><option value="2">二进制</option><option value="8">八进制</option><option value="16">十六进制</option></select><select id="binTo"><option value="10">十进制</option><option value="2" selected>二进制</option><option value="8">八进制</option><option value="16">十六进制</option></select></div><button class="btn" id="binGo" style="margin-top:12px">转换</button><div class="result" id="binOut" style="margin-top:15px"></div>`,
    temperature2: `<div class="field"><label>数值</label><input id="tmpVal" type="number" value="25"></div><div class="two"><select id="tmpFrom"><option value="C">摄氏</option><option value="F">华氏</option><option value="K">开尔文</option></select><select id="tmpTo"><option value="C">摄氏</option><option value="F" selected>华氏</option><option value="K">开尔文</option></select></div><button class="btn" id="tmpGo" style="margin-top:12px">转换</button><div class="result" id="tmpOut" style="margin-top:15px"></div>`,

    textstats: `<div class="field"><label>文本</label><textarea id="tstIn"></textarea></div><button class="btn" id="tstGo">完整统计</button><div class="result" id="tstOut" style="margin-top:15px"></div>`,
    findreplace: `<div class="field"><label>文本</label><textarea id="frIn"></textarea></div><div class="field"><label>查找（支持正则）</label><input id="frFind"></div><div class="field"><label>替换为</label><input id="frTo"></div><button class="btn" id="frGo">替换</button><div class="result" id="frOut" style="margin-top:15px"></div>`,
    linestats: `<div class="field"><label>文本</label><textarea id="ls2In"></textarea></div><button class="btn" id="ls2Go">行长度统计</button><div class="result" id="ls2Out" style="margin-top:15px"></div>`,
    duplicatecount: `<div class="field"><label>文本（每行一项）</label><textarea id="dcIn"></textarea></div><button class="btn" id="dcGo">统计重复</button><div class="result" id="dcOut" style="margin-top:15px"></div>`,
    shuffle: `<div class="field"><label>文本（每行一项）</label><textarea id="shfIn"></textarea></div><button class="btn" id="shfGo">随机打乱</button><div class="result" id="shfOut" style="margin-top:15px"></div>`,
    jwtfull: `<div class="field"><label>JWT</label><textarea id="jwfIn"></textarea></div><button class="btn" id="jwfGo">完整解析</button><div class="result" id="jwfOut" style="margin-top:15px"></div>`,
    hmacsha: `<div class="field"><label>消息</label><textarea id="hmIn"></textarea></div><div class="field"><label>密钥</label><input id="hmKey" value="secret"></div><button class="btn" id="hmGo">计算 HMAC-SHA256</button><div class="result" id="hmOut" style="margin-top:15px"></div>`,
    cssunit2: `<div class="field"><label>数值</label><input id="cu2Val" type="number" value="16"></div><div class="two"><select id="cu2From"><option value="px">px</option><option value="rem">rem</option><option value="em">em</option><option value="pt">pt</option></select><select id="cu2To"><option value="px">px</option><option value="rem" selected>rem</option><option value="em">em</option><option value="pt">pt</option></select></div><div class="field"><label>根字体 (px)</label><input id="cu2Root" type="number" value="16"></div><button class="btn" id="cu2Go">转换</button><div class="result" id="cu2Out" style="margin-top:15px"></div>`,
    metaall: `<div class="field"><label>标题</label><input id="maTitle"></div><div class="field"><label>描述</label><textarea id="maDesc"></textarea></div><div class="field"><label>图片URL</label><input id="maImg"></div><div class="field"><label>页面URL</label><input id="maUrl"></div><button class="btn" id="maGo">生成完整 Meta</button><div class="result" id="maOut" style="margin-top:15px"></div>`,
    randomname2: `<div class="field"><label>数量</label><input id="rn2N" type="number" value="10"></div><button class="btn" id="rn2Go">生成英文名</button><div class="result" id="rn2Out" style="margin-top:15px"></div>`,
    passwordpin2: `<div class="two"><div class="field"><label>位数</label><input id="ppLen" type="number" value="6"></div><div class="field"><label>数量</label><input id="ppN" type="number" value="5"></div></div><button class="btn" id="ppGo">生成验证码</button><div class="result" id="ppOut" style="margin-top:15px"></div>`,
    stopwatch: `<div class="result" id="swDisplay" style="font-size:2em;text-align:center;margin:20px 0">00:00:00</div><div class="row"><button class="btn" id="swStart">开始</button><button class="btn secondary" id="swPause">暂停</button><button class="btn secondary" id="swReset">重置</button></div>`,
    daysbetween: `<div class="two"><div class="field"><label>开始日期</label><input id="dbStart" type="date"></div><div class="field"><label>结束日期</label><input id="dbEnd" type="date"></div></div><button class="btn" id="dbGo">计算间隔</button><div class="result" id="dbOut" style="margin-top:15px"></div>`,
    calorie: `<div class="two"><div class="field"><label>体重 (kg)</label><input id="calW" type="number"></div><div class="field"><label>身高 (cm)</label><input id="calH" type="number"></div></div><div class="two"><div class="field"><label>年龄</label><input id="calAge" type="number"></div><div class="field"><label>性别</label><select id="calSex"><option value="m">男</option><option value="f">女</option></select></div><button class="btn" id="calGo">计算 BMR</button><div class="result" id="calOut" style="margin-top:15px"></div>`,
    water: `<div class="field"><label>体重 (kg)</label><input id="watW" type="number" placeholder="70"></div><button class="btn" id="watGo">建议饮水量</button><div class="result" id="watOut" style="margin-top:15px"></div>`,
    interest: `<div class="field"><label>本金</label><input id="intP" type="number" value="10000"></div><div class="two"><div class="field"><label>年利率 (%)</label><input id="intR" type="number" step="0.1" value="3.5"></div><div class="field"><label>年数</label><input id="intY" type="number" value="1"></div><button class="btn" id="intGo">计算单利</button><div class="result" id="intOut" style="margin-top:15px"></div>`,
    compound3: `<div class="field"><label>本金</label><input id="cp3P" type="number" value="10000"></div><div class="two"><div class="field"><label>年利率 (%)</label><input id="cp3R" type="number" step="0.1" value="5"></div><div class="field"><label>年数</label><input id="cp3Y" type="number" value="10"></div></div><div class="field"><label>每年追加投入</label><input id="cp3Add" type="number" value="0"></div><button class="btn" id="cp3Go">计算复利</button><div class="result" id="cp3Out" style="margin-top:15px"></div>`,
    gitignore: `<div class="result" id="giOut" style="line-height:1.7"></div>`,
    editorconfig: `<div class="result" id="ecOut" style="line-height:1.7"></div>`,
    worldclock2: `<div class="result" id="wc2Out" style="line-height:2"></div>`,
    qrcontent: `<div class="field"><label>类型</label><select id="qrcType"><option value="text">文本</option><option value="url">URL</option><option value="wifi">WiFi</option><option value="email">邮件</option></select></div><div class="field"><label>内容</label><textarea id="qrcIn"></textarea></div><button class="btn" id="qrcGo">生成内容</button><div class="result" id="qrcOut" style="margin-top:15px"></div>`,

    // 设计
    colorpicker: `<div class="field"><label>选择颜色</label><input id="cpPick" type="color" value="#7c8cff" style="width:100%;height:50px"></div><div class="result" id="cpPickOut" style="margin-top:15px"></div>`,
    palettegen: `<div class="field"><label>主色</label><input id="pgColor" type="color" value="#7c8cff"></div><button class="btn" id="pgGen">生成配色</button><div id="pgOut" style="margin-top:15px;display:grid;grid-template-columns:repeat(5,1fr);gap:8px"></div>`,
    contrastcheck: `<div class="two"><div class="field"><label>前景色</label><input id="ctFg" type="color" value="#ffffff"></div><div class="field"><label>背景色</label><input id="ctBg" type="color" value="#7c8cff"></div></div><button class="btn" id="ctGo">检测对比度</button><div class="result" id="ctOut" style="margin-top:15px"></div>`,
    // 数学
    calculator: `<div class="field"><label>表达式</label><input id="calcIn" placeholder="例如 12*(3+4)"></div><button class="btn" id="calcGo">计算</button><div class="result" id="calcOut" style="margin-top:15px;font-size:1.3em"></div>`,
    quadratic: `<div class="field"><label>a</label><input id="qdA" type="number" value="1"></div><div class="two"><div class="field"><label>b</label><input id="qdB" type="number" value="-3"></div><div class="field"><label>c</label><input id="qdC" type="number" value="2"></div></div><button class="btn" id="qdGo">求解</button><div class="result" id="qdOut" style="margin-top:15px"></div>`,
    factorial: `<div class="field"><label>n (0-170)</label><input id="faIn" type="number" min="0" max="170" value="10"></div><button class="btn" id="faGo">计算阶乘</button><div class="result" id="faOut" style="margin-top:15px"></div>`,
    combination: `<div class="two"><div class="field"><label>n</label><input id="cbN" type="number" value="10"></div><div class="field"><label>k</label><input id="cbK" type="number" value="3"></div></div><button class="btn" id="cbGo">计算</button><div class="result" id="cbOut" style="margin-top:15px"></div>`,
    statistics: `<div class="field"><label>数字（逗号或换行）</label><textarea id="stIn2" placeholder="1,2,3,4,5"></textarea></div><button class="btn" id="stGo2">统计</button><div class="result" id="stOut2" style="margin-top:15px"></div>`,
    // 时间
    timestampfull: `<div class="field"><label>时间戳或日期</label><input id="tsfIn" placeholder="秒/毫秒时间戳或日期"></div><div class="row"><button class="btn" id="tsfToDate">→ 日期</button><button class="btn secondary" id="tsfToTs">→ 时间戳</button></div><div class="result" id="tsfOut" style="margin-top:15px"></div>`,
    adddate: `<div class="field"><label>基准日期</label><input id="adDate" type="date"></div><div class="field"><label>加减天数</label><input id="adDays" type="number" value="7"></div><button class="btn" id="adGo">计算</button><div class="result" id="adOut" style="margin-top:15px"></div>`,
    weekday: `<div class="field"><label>日期</label><input id="wdIn2" type="date"></div><button class="btn" id="wdGo2">查询星期</button><div class="result" id="wdOut2" style="margin-top:15px"></div>`,
    duration: `<div class="field"><label>总秒数</label><input id="duIn2" type="number" value="3661"></div><button class="btn" id="duGo2">格式化</button><div class="result" id="duOut2" style="margin-top:15px"></div>`,
    // 趣味
    dice2: `<div class="two"><div class="field"><label>面数</label><input id="d2Face" type="number" value="6"></div><div class="field"><label>次数</label><input id="d2N" type="number" value="2"></div></div><button class="btn" id="d2Go">投掷</button><div class="result" id="d2Out" style="margin-top:15px;font-size:1.3em"></div>`,
    lottery: `<div class="field"><label>名单（每行一个）</label><textarea id="lotIn"></textarea></div><div class="field"><label>抽取人数</label><input id="lotN" type="number" value="1"></div><button class="btn" id="lotGo">抽奖</button><div class="result" id="lotOut" style="margin-top:15px;font-size:1.2em"></div>`,
    randomteam: `<div class="field"><label>名单（每行一个）</label><textarea id="rtIn"></textarea></div><div class="field"><label>分成几组</label><input id="rtN" type="number" value="2"></div><button class="btn" id="rtGo">随机分组</button><div class="result" id="rtOut" style="margin-top:15px"></div>`,
    rockpaper: `<div class="row"><button class="btn" id="rpRock">✊ 石头</button><button class="btn" id="rpPaper">✋ 布</button><button class="btn" id="rpScissors">✌ 剪刀</button></div><div class="result" id="rpOut" style="margin-top:15px;font-size:1.2em"></div>`,
    randomquote: `<button class="btn" id="rqGo">来一句</button><div class="result" id="rqOut" style="margin-top:15px;font-size:1.1em;line-height:1.6"></div>`,
    lucky: `<button class="btn" id="lkGo">查看今日运势</button><div class="result" id="lkOut" style="margin-top:15px;font-size:1.2em"></div>`,
    // 生活
    bmi3: `<div class="two"><div class="field"><label>身高 (cm)</label><input id="bmi3H" type="number"></div><div class="field"><label>体重 (kg)</label><input id="bmi3W" type="number"></div></div><button class="btn" id="bmi3Go">评估</button><div class="result" id="bmi3Out" style="margin-top:15px"></div>`,
    sleep: `<div class="field"><label>计划起床时间</label><input id="slTime" type="time" value="07:00"></div><button class="btn" id="slGo">推荐入睡时间</button><div class="result" id="slOut" style="margin-top:15px"></div>`,
    tip2: `<div class="field"><label>账单金额</label><input id="tp2Amt" type="number" value="200"></div><div class="two"><div class="field"><label>小费%</label><input id="tp2Pct" type="number" value="10"></div><div class="field"><label>人数</label><input id="tp2N" type="number" value="2"></div></div><button class="btn" id="tp2Go">计算</button><div class="result" id="tp2Out" style="margin-top:15px"></div>`,
    clothing: `<div class="result" id="clOut" style="line-height:1.8"></div>`,
    packing: `<div class="result" id="pkOut" style="line-height:1.8"></div>`,
    blood2: `<div class="two"><div class="field"><label>父亲血型</label><select id="blF"><option>A</option><option>B</option><option>AB</option><option>O</option></select></div><div class="field"><label>母亲血型</label><select id="blM"><option>A</option><option>B</option><option>AB</option><option>O</option></select></div><button class="btn" id="blGo">推算子女</button><div class="result" id="blOut" style="margin-top:15px"></div>`,
    pregnancy2: `<div class="field"><label>末次月经日期</label><input id="prDate" type="date"></div><button class="btn" id="prGo">计算预产期</button><div class="result" id="prOut" style="margin-top:15px"></div>`,

    // 办公
    wordcount3: `<div class="field"><label>文案</label><textarea id="wc3In"></textarea></div><button class="btn" id="wc3Go">统计</button><div class="result" id="wc3Out" style="margin-top:15px"></div>`,
    meetingcost: `<div class="field"><label>人数</label><input id="mcN" type="number" value="5"></div><div class="two"><div class="field"><label>平均时薪</label><input id="mcWage" type="number" value="100"></div><div class="field"><label>时长(小时)</label><input id="mcH" type="number" step="0.5" value="1"></div></div><button class="btn" id="mcGo">估算成本</button><div class="result" id="mcOut" style="margin-top:15px"></div>`,
    pomodoro: `<div class="result" id="pomDisplay" style="font-size:2.5em;text-align:center;margin:20px 0">25:00</div><div class="row"><button class="btn" id="pomStart">开始</button><button class="btn secondary" id="pomReset">重置</button></div>`,
    emailtemp: `<div class="field"><label>类型</label><select id="etType"><option value="follow">跟进邮件</option><option value="thanks">感谢邮件</option><option value="meeting">会议邀请</option><option value="apology">致歉邮件</option></select></div><button class="btn" id="etGo">生成模板</button><div class="result" id="etOut" style="margin-top:15px"></div>`,
    pricecalc: `<div class="field"><label>成本</label><input id="pcCost" type="number" value="100"></div><div class="field"><label>利润率 (%)</label><input id="pcMargin" type="number" value="30"></div><button class="btn" id="pcGo">计算报价</button><div class="result" id="pcOut" style="margin-top:15px"></div>`,
    // 健康
    bmr2: `<div class="two"><div class="field"><label>体重kg</label><input id="bmrW" type="number"></div><div class="field"><label>身高cm</label><input id="bmrH" type="number"></div></div><div class="two"><div class="field"><label>年龄</label><input id="bmrAge" type="number"></div><div class="field"><label>性别</label><select id="bmrSex"><option value="m">男</option><option value="f">女</option></select></div><button class="btn" id="bmrGo">计算 BMR</button><div class="result" id="bmrOut" style="margin-top:15px"></div>`,
    pace: `<div class="field"><label>距离 (km)</label><input id="paceDist" type="number" step="0.1" value="5"></div><div class="field"><label>目标时间 (分:秒)</label><input id="paceTime" placeholder="25:00"></div><button class="btn" id="paceGo">计算配速</button><div class="result" id="paceOut" style="margin-top:15px"></div>`,
    heartrate: `<div class="field"><label>年龄</label><input id="hrAge" type="number" value="30"></div><button class="btn" id="hrGo">目标心率区间</button><div class="result" id="hrOut" style="margin-top:15px"></div>`,
    oneRm: `<div class="two"><div class="field"><label>重量 (kg)</label><input id="ormW" type="number"></div><div class="field"><label>次数</label><input id="ormR" type="number" value="5"></div></div><button class="btn" id="ormGo">推算 1RM</button><div class="result" id="ormOut" style="margin-top:15px"></div>`,
    // 安全
    pwdcheck: `<div class="field"><label>密码</label><input id="pwdIn" type="password"></div><button class="btn" id="pwdGo">详细评分</button><div class="result" id="pwdOut" style="margin-top:15px"></div>`,
    hashid: `<div class="field"><label>哈希字符串</label><input id="hidIn" placeholder="粘贴哈希"></div><button class="btn" id="hidGo">识别类型</button><div class="result" id="hidOut" style="margin-top:15px"></div>`,
    token: `<div class="field"><label>长度</label><input id="tokLen" type="number" value="32"></div><button class="btn" id="tokGo">生成 Token</button><div class="result" id="tokOut" style="margin-top:15px"></div>`,
    entropy: `<div class="field"><label>字符串</label><input id="entIn"></div><button class="btn" id="entGo">估算熵</button><div class="result" id="entOut" style="margin-top:15px"></div>`,
    // 更多文本
    numbercn: `<div class="field"><label>数字</label><input id="ncnIn" type="number" value="12345.67"></div><button class="btn" id="ncnGo">转中文大写</button><div class="result" id="ncnOut" style="margin-top:15px"></div>`,
    textcompare: `<div class="field"><label>文本 A</label><textarea id="tcA"></textarea></div><div class="field"><label>文本 B</label><textarea id="tcB"></textarea></div><button class="btn" id="tcGo3">相似度</button><div class="result" id="tcOut3" style="margin-top:15px"></div>`,
    // 趣味
    wheel: `<div class="field"><label>选项（每行一个）</label><textarea id="whIn" placeholder="选项1\n选项2\n选项3"></textarea></div><button class="btn" id="whGo">转起来！</button><div class="result" id="whOut" style="margin-top:15px;font-size:1.4em"></div>`,
    joke: `<button class="btn" id="jkGo">来个冷笑话</button><div class="result" id="jkOut" style="margin-top:15px;line-height:1.6"></div>`,
    decision: `<div class="field"><label>选项（每行一个）</label><textarea id="decIn"></textarea></div><button class="btn" id="decGo">帮我选</button><div class="result" id="decOut" style="margin-top:15px;font-size:1.3em"></div>`,
    namegen: `<div class="field"><label>数量</label><input id="ngN" type="number" value="8"></div><button class="btn" id="ngGo">生成幻想名</button><div class="result" id="ngOut" style="margin-top:15px"></div>`,
    // 开发
    regexlab: `<div class="field"><label>正则</label><input id="rlReg" placeholder="\\d+"></div><div class="field"><label>测试文本</label><textarea id="rlText"></textarea></div><button class="btn" id="rlGo">匹配</button><div class="result" id="rlOut" style="margin-top:15px"></div>`,
    httpcode: `<div class="field"><label>状态码</label><input id="hcIn2" type="number" placeholder="404"></div><button class="btn" id="hcGo2">查询</button><div class="result" id="hcOut2" style="margin-top:15px"></div>`,

    // 学习
    mathdrill: `<div class="field"><label>题型</label><select id="mdType"><option value="add">加法</option><option value="sub">减法</option><option value="mul">乘法</option><option value="div">除法</option></select></div><button class="btn" id="mdGo">出题</button><div class="result" id="mdOut" style="margin-top:15px;font-size:1.3em"></div><div class="field" style="margin-top:10px"><label>你的答案</label><input id="mdAns" type="number"><button class="btn" id="mdCheck" style="margin-top:8px">检查</button></div><div class="result" id="mdResult" style="margin-top:10px"></div>`,
    score: `<div class="field"><label>成绩（格式：分数,学分 每行一门）</label><textarea id="scIn3" placeholder="90,3&#10;85,2&#10;78,4"></textarea></div><button class="btn" id="scGo3">计算加权平均</button><div class="result" id="scOut3" style="margin-top:15px"></div>`,
    formula: `<div class="result" id="fmOut" style="line-height:1.8"></div>`,
    // 理财
    budget: `<div class="field"><label>月收入</label><input id="bdIncome" type="number" value="10000"></div><div class="field"><label>固定支出</label><input id="bdFixed" type="number" value="4000"></div><div class="field"><label>储蓄目标比例%</label><input id="bdSave" type="number" value="20"></div><button class="btn" id="bdGo">分配预算</button><div class="result" id="bdOut" style="margin-top:15px"></div>`,
    savings: `<div class="field"><label>目标金额</label><input id="svGoal" type="number" value="50000"></div><div class="field"><label>每月存入</label><input id="svMonth" type="number" value="2000"></div><div class="field"><label>年利率%</label><input id="svRate" type="number" step="0.1" value="2"></div><button class="btn" id="svGo">计算月数</button><div class="result" id="svOut" style="margin-top:15px"></div>`,
    inflation: `<div class="field"><label>金额</label><input id="infAmt" type="number" value="10000"></div><div class="field"><label>年通胀率%</label><input id="infRate" type="number" step="0.1" value="3"></div><div class="field"><label>年数</label><input id="infY" type="number" value="10"></div><button class="btn" id="infGo">计算购买力</button><div class="result" id="infOut" style="margin-top:15px"></div>`,
    fire: `<div class="field"><label>年支出</label><input id="fireExp" type="number" value="100000"></div><div class="field"><label>安全提取率%</label><input id="fireRate" type="number" step="0.1" value="4"></div><button class="btn" id="fireGo">FIRE 数字</button><div class="result" id="fireOut" style="margin-top:15px"></div>`,
    // 旅行
    packing2: `<div class="field"><label>行程类型</label><select id="pk2Type"><option value="weekend">周末短途</option><option value="business">商务出行</option><option value="long">长途旅行</option></select></div><button class="btn" id="pk2Go">生成清单</button><div class="result" id="pk2Out" style="margin-top:15px"></div>`,
    weather: `<div class="field"><label>温度 (°C)</label><input id="weTemp" type="number" value="20"></div><button class="btn" id="weGo">穿衣建议</button><div class="result" id="weOut" style="margin-top:15px"></div>`,
    adapter: `<div class="result" id="adOut" style="line-height:1.8"></div>`,
    // 文本
    extractnum: `<div class="field"><label>文本</label><textarea id="enIn"></textarea></div><button class="btn" id="enGo">提取数字</button><div class="result" id="enOut" style="margin-top:15px"></div>`,
    extractcn: `<div class="field"><label>文本</label><textarea id="ecnIn"></textarea></div><button class="btn" id="ecnGo">提取中文</button><div class="result" id="ecnOut" style="margin-top:15px"></div>`,
    // 编码
    ulid: `<div class="field"><label>数量</label><input id="ulidN" type="number" value="5"></div><button class="btn" id="ulidGo">生成 ULID</button><div class="result" id="ulidOut" style="margin-top:15px"></div>`,
    shortid: `<div class="two"><div class="field"><label>长度</label><input id="sidLen" type="number" value="10"></div><div class="field"><label>数量</label><input id="sidN" type="number" value="5"></div></div><button class="btn" id="sidGo">生成</button><div class="result" id="sidOut" style="margin-top:15px"></div>`,
    // 趣味/时间
    ageplanet: `<div class="field"><label>地球年龄（岁）</label><input id="apAge" type="number" value="25"></div><button class="btn" id="apGo">其他星球年龄</button><div class="result" id="apOut" style="margin-top:15px"></div>`,
    dayofyear: `<div class="field"><label>日期</label><input id="doyIn" type="date"></div><button class="btn" id="doyGo">计算</button><div class="result" id="doyOut" style="margin-top:15px"></div>`,
    // 生活
    grocery: `<div class="result" id="grOut" style="line-height:1.8"></div>`,
    chore: `<div class="field"><label>家务项目（每行一个）</label><textarea id="chIn" placeholder="洗碗&#10;扫地&#10;倒垃圾"></textarea></div><div class="field"><label>人员（每行一个）</label><textarea id="chPeople" placeholder="小明&#10;小红"></textarea></div><button class="btn" id="chGo">随机分配</button><div class="result" id="chOut" style="margin-top:15px"></div>`,
    // 办公
    agenda: `<div class="result" id="agOut" style="line-height:1.8"></div>`,
    standup: `<div class="result" id="suOut" style="line-height:1.8"></div>`,
    // 健康
    fasting: `<div class="field"><label>开始禁食时间</label><input id="fsStart" type="datetime-local"></div><button class="btn" id="fsGo">开始 16 小时计时</button><div class="result" id="fsOut" style="margin-top:15px"></div>`,
    stretch: `<div class="result" id="stOut3" style="line-height:1.8"></div>`,
    // 安全
    passphrase: `<div class="field"><label>词数</label><input id="ppN2" type="number" value="4"></div><button class="btn" id="ppGo2">生成密码短语</button><div class="result" id="ppOut2" style="margin-top:15px;font-size:1.2em"></div>`,
    otp: `<div class="field"><label>数量</label><input id="otpN" type="number" value="5"></div><button class="btn" id="otpGo">生成 OTP</button><div class="result" id="otpOut" style="margin-top:15px"></div>`,
    // 数学
    series: `<div class="field"><label>类型</label><select id="seType"><option value="arith">等差</option><option value="geo">等比</option></select></div><div class="two"><div class="field"><label>首项 a1</label><input id="seA" type="number" value="1"></div><div class="field"><label>公差/比</label><input id="seD" type="number" value="2"></div></div><div class="field"><label>项数 n</label><input id="seN" type="number" value="10"></div><button class="btn" id="seGo">求和</button><div class="result" id="seOut" style="margin-top:15px"></div>`,
    // 开发
    breakpoint: `<div class="result" id="bpOut" style="line-height:1.8"></div>`,
    animcss: `<div class="result" id="anOut" style="line-height:1.7"></div>`,

    // 美食
    recipe2: `<div class="field"><label>原份量（人数）</label><input id="rp2Old" type="number" value="2"></div><div class="field"><label>目标人数</label><input id="rp2New" type="number" value="4"></div><div class="field"><label>食材（每行：名称 数量 单位）</label><textarea id="rp2In" placeholder="面粉 200 克&#10;鸡蛋 2 个"></textarea></div><button class="btn" id="rp2Go">换算</button><div class="result" id="rp2Out" style="margin-top:15px"></div>`,
    coffee: `<div class="field"><label>咖啡粉 (g)</label><input id="cfG" type="number" value="15"></div><div class="field"><label>粉水比 (1:x)</label><input id="cfRatio" type="number" value="15"></div><button class="btn" id="cfGo2">计算水量</button><div class="result" id="cfOut2" style="margin-top:15px"></div>`,
    baking: `<div class="field"><label>温度</label><input id="bkVal" type="number" value="180"></div><div class="two"><select id="bkFrom"><option value="C">℃</option><option value="F">℉</option></select><select id="bkTo"><option value="C">℃</option><option value="F" selected>℉</option></select></div><button class="btn" id="bkGo" style="margin-top:12px">转换</button><div class="result" id="bkOut" style="margin-top:15px"></div>`,
    // 社交
    hashtag: `<div class="field"><label>主题关键词</label><input id="htIn" placeholder="旅行 摄影 美食"></div><button class="btn" id="htGo">生成标签</button><div class="result" id="htOut" style="margin-top:15px"></div>`,
    bio: `<div class="field"><label>身份/职业</label><input id="bioJob" placeholder="设计师"></div><div class="field"><label>兴趣</label><input id="bioHobby" placeholder="摄影、旅行"></div><button class="btn" id="bioGo">生成 Bio</button><div class="result" id="bioOut" style="margin-top:15px"></div>`,
    greeting: `<div class="field"><label>场景</label><select id="grType"><option value="morning">早安</option><option value="meeting">会议开场</option><option value="customer">客户问候</option><option value="festival">节日祝福</option></select></div><button class="btn" id="grGo2">生成</button><div class="result" id="grOut2" style="margin-top:15px"></div>`,
    // 文本
    bullet: `<div class="field"><label>文本（每行一项）</label><textarea id="buIn"></textarea></div><button class="btn" id="buGo">添加 • </button><div class="result" id="buOut" style="margin-top:15px"></div>`,
    checkbox: `<div class="field"><label>待办（每行一项）</label><textarea id="cbIn2"></textarea></div><button class="btn" id="cbGo2">转 Markdown 待办</button><div class="result" id="cbOut2" style="margin-top:15px"></div>`,
    trimlines: `<div class="field"><label>文本</label><textarea id="tlIn"></textarea></div><button class="btn" id="tlGo">修剪每行</button><div class="result" id="tlOut" style="margin-top:15px"></div>`,
    // 编码
    a1z26: `<div class="field"><label>文本或数字</label><textarea id="a1In"></textarea></div><div class="row"><button class="btn" id="a1Enc">字母→数字</button><button class="btn secondary" id="a1Dec">数字→字母</button></div><div class="result" id="a1Out" style="margin-top:15px"></div>`,
    binaryascii: `<div class="field"><label>文本或二进制</label><textarea id="baIn"></textarea></div><div class="row"><button class="btn" id="baEnc">文本→二进制</button><button class="btn secondary" id="baDec">二进制→文本</button></div><div class="result" id="baOut" style="margin-top:15px"></div>`,
    // 数学
    prime3: `<div class="two"><div class="field"><label>起始</label><input id="pr3A" type="number" value="1"></div><div class="field"><label>结束</label><input id="pr3B" type="number" value="100"></div></div><button class="btn" id="pr3Go">生成质数</button><div class="result" id="pr3Out" style="margin-top:15px"></div>`,
    pascal: `<div class="field"><label>行数</label><input id="pasN" type="number" min="1" max="20" value="8"></div><button class="btn" id="pasGo">生成杨辉三角</button><div class="result" id="pasOut" style="margin-top:15px;font-family:monospace"></div>`,
    baseconv: `<div class="field"><label>数值</label><input id="bcIn2" value="255"></div><div class="two"><div class="field"><label>从进制</label><input id="bcFrom" type="number" min="2" max="36" value="10"></div><div class="field"><label>到进制</label><input id="bcTo" type="number" min="2" max="36" value="16"></div></div><button class="btn" id="bcGo2">转换</button><div class="result" id="bcOut2" style="margin-top:15px"></div>`,
    // 趣味
    riddle: `<button class="btn" id="rdGo">来条谜语</button><div class="result" id="rdOut" style="margin-top:15px;line-height:1.6"></div>`,
    fact: `<button class="btn" id="fcGo">来条冷知识</button><div class="result" id="fcOut" style="margin-top:15px;line-height:1.6"></div>`,
    // 理财
    subscribe: `<div class="field"><label>月费</label><input id="subM" type="number" value="15"></div><div class="field"><label>年费优惠价</label><input id="subY" type="number" value="148"></div><button class="btn" id="subGo">对比</button><div class="result" id="subOut" style="margin-top:15px"></div>`,
    tipcalc3: `<div class="field"><label>账单</label><input id="tc3Amt" type="number" value="200"></div><button class="btn" id="tc3Go">多档小费</button><div class="result" id="tc3Out" style="margin-top:15px"></div>`,
    // 转换
    unitfuel: `<div class="field"><label>数值</label><input id="ufVal" type="number" value="8"></div><div class="two"><select id="ufFrom"><option value="l100">L/100km</option><option value="mpg">MPG (美)</option></select><select id="ufTo"><option value="l100">L/100km</option><option value="mpg" selected>MPG (美)</option></select></div><button class="btn" id="ufGo" style="margin-top:12px">转换</button><div class="result" id="ufOut" style="margin-top:15px"></div>`,
    // 实用
    vcard: `<div class="field"><label>姓名</label><input id="vcName"></div><div class="field"><label>电话</label><input id="vcTel"></div><div class="field"><label>邮箱</label><input id="vcEmail"></div><div class="field"><label>公司</label><input id="vcOrg"></div><button class="btn" id="vcGo">生成 vCard</button><div class="result" id="vcOut" style="margin-top:15px"></div>`,
    randomdate: `<div class="two"><div class="field"><label>开始</label><input id="rdStart" type="date"></div><div class="field"><label>结束</label><input id="rdEnd" type="date"></div></div><div class="field"><label>数量</label><input id="rdN" type="number" value="5"></div><button class="btn" id="rdGo2">生成随机日期</button><div class="result" id="rdOut2" style="margin-top:15px"></div>`,
    // 开发
    truncate: `<div class="result" id="trOut" style="line-height:1.7"></div>`,
    skeleton: `<div class="result" id="skOut" style="line-height:1.7"></div>`,
    // 健康
    pregnancy3: `<div class="field"><label>末次月经</label><input id="pr3Date" type="date"></div><button class="btn" id="pr3Go2">计算孕周</button><div class="result" id="pr3Out2" style="margin-top:15px"></div>`,
    firstaid: `<div class="result" id="faOut2" style="line-height:1.8"></div>`,

    tictactoe: `<div id="tttBoard" style="display:grid;grid-template-columns:repeat(3,70px);gap:6px;justify-content:center;margin:15px 0"></div><div class="result" id="tttOut" style="text-align:center"></div><button class="btn" id="tttReset" style="margin-top:10px">重新开始</button>`,
    reaction: `<div class="result" id="rxOut" style="text-align:center;padding:40px;font-size:1.2em;cursor:pointer;background:var(--panel2);border-radius:12px">点击开始</div>`,
    contract: `<div class="result" id="ctOut2" style="line-height:1.8"></div>`,
    lease: `<div class="result" id="leOut" style="line-height:1.8"></div>`,
    disclaimer: `<div class="result" id="dsOut" style="line-height:1.8"></div>`,
    palindrome: `<div class="field"><label>文本</label><input id="pdIn"></div><button class="btn" id="pdGo">检测回文</button><div class="result" id="pdOut" style="margin-top:15px"></div>`,
    template: `<div class="field"><label>模板（用 {{name}} 表示变量）</label><textarea id="tpIn" placeholder="你好，{{name}}！今天是 {{day}}。"></textarea></div><div class="field"><label>变量（name=值 每行一个）</label><textarea id="tpVars" placeholder="name=小明&#10;day=周一"></textarea></div><button class="btn" id="tpGo">填充</button><div class="result" id="tpOut" style="margin-top:15px"></div>`,
    wordfreq2: `<div class="field"><label>文本</label><textarea id="wf2In"></textarea></div><div class="field"><label>Top N</label><input id="wf2N" type="number" value="10"></div><button class="btn" id="wf2Go">统计</button><div class="result" id="wf2Out" style="margin-top:15px"></div>`,
    rule72: `<div class="field"><label>年化收益率 %</label><input id="r72" type="number" step="0.1" value="7"></div><button class="btn" id="r72Go">估算翻倍年数</button><div class="result" id="r72Out" style="margin-top:15px"></div>`,
    eisenhower: `<div class="result" id="eiOut" style="line-height:1.8"></div>`,
    smartgoal: `<div class="result" id="sgOut" style="line-height:1.8"></div>`,
    protein: `<div class="field"><label>体重 (kg)</label><input id="prW" type="number" value="70"></div><div class="field"><label>活动</label><select id="prAct"><option value="0.8">久坐</option><option value="1.2" selected>一般运动</option><option value="1.6">增肌</option><option value="2.0">高强度</option></select></div><button class="btn" id="prGo2">计算蛋白需求</button><div class="result" id="prOut2" style="margin-top:15px"></div>`,
    measure2: `<div class="result" id="msOut" style="line-height:1.8"></div>`,
    caption: `<div class="field"><label>场景</label><select id="capType"><option value="travel">旅行</option><option value="food">美食</option><option value="work">工作</option><option value="mood">心情</option></select></div><button class="btn" id="capGo">生成配文</button><div class="result" id="capOut" style="margin-top:15px"></div>`,
    password4: `<div class="field"><label>数量</label><input id="pw4N" type="number" value="5"></div><button class="btn" id="pw4Go">生成易记密码</button><div class="result" id="pw4Out" style="margin-top:15px"></div>`,
    dice3: `<div class="two"><div class="field"><label>面数</label><input id="d3F" type="number" value="6"></div><div class="field"><label>次数</label><input id="d3N" type="number" value="100"></div></div><button class="btn" id="d3Go">投掷统计</button><div class="result" id="d3Out" style="margin-top:15px"></div>`,
    semver: `<div class="result" id="svOut2" style="line-height:1.8"></div>`,
    readme: `<div class="result" id="rmOut" style="line-height:1.8"></div>`,
    gitflow: `<div class="result" id="gfOut" style="line-height:1.8"></div>`,
    quiz2: `<div class="result" id="qzOut" style="margin-bottom:10px"></div><button class="btn" id="qzGo">下一题</button><div class="result" id="qzAns" style="margin-top:10px"></div>`,

    bpm: `<div class="result" id="bpmOut" style="text-align:center;padding:30px;font-size:1.4em;cursor:pointer;background:var(--panel2);border-radius:12px">点击打拍子测 BPM</div><button class="btn secondary" id="bpmReset" style="margin-top:10px">重置</button>`,
    exposure: `<div class="result" id="exOut" style="line-height:1.8"></div>`,
    note: `<div class="result" id="ntOut" style="line-height:1.8"></div>`,
    pythagoras: `<div class="two"><div class="field"><label>边 a</label><input id="pyA" type="number" value="3"></div><div class="field"><label>边 b</label><input id="pyB" type="number" value="4"></div></div><button class="btn" id="pyGo">求斜边 c</button><div class="result" id="pyOut" style="margin-top:15px"></div>`,
    timer2: `<div class="field"><label>分钟</label><input id="tm2M" type="number" value="5"></div><div class="result" id="tm2Out" style="font-size:2em;text-align:center;margin:15px 0">05:00</div><div class="row"><button class="btn" id="tm2Start">开始</button><button class="btn secondary" id="tm2Reset">重置</button></div>`,
    lottery2: `<button class="btn" id="lot2Go">机选一注</button><div class="result" id="lot2Out" style="margin-top:15px;font-size:1.2em"></div>`,
    eightball: `<button class="btn" id="ebGo">摇一摇</button><div class="result" id="ebOut" style="margin-top:15px;font-size:1.3em;text-align:center"></div>`,
    rulethirds: `<div class="result" id="rtOut" style="line-height:1.8"></div>`,
    glass: `<div class="result" id="glOut" style="line-height:1.7"></div>`,
    salary2: `<div class="field"><label>月薪</label><input id="sa2M" type="number" value="15000"></div><div class="field"><label>每月工作天数</label><input id="sa2D" type="number" value="21.75"></div><div class="field"><label>每天小时</label><input id="sa2H" type="number" value="8"></div><button class="btn" id="sa2Go">换算</button><div class="result" id="sa2Out" style="margin-top:15px"></div>`,
    rice: `<div class="field"><label>米的量 (杯)</label><input id="rcCup" type="number" step="0.5" value="1"></div><button class="btn" id="rcGo">计算水量</button><div class="result" id="rcOut" style="margin-top:15px"></div>`,
    egg: `<div class="result" id="egOut" style="line-height:1.8"></div>`,
    headline: `<div class="result" id="hlOut" style="line-height:1.8"></div>`,
    license: `<div class="result" id="lcOut" style="line-height:1.8"></div>`,
    keepnum: `<div class="field"><label>文本</label><textarea id="knIn"></textarea></div><button class="btn" id="knGo">只留数字</button><div class="result" id="knOut" style="margin-top:15px"></div>`,
    acronym: `<div class="field"><label>短语</label><input id="acIn" placeholder="Hyper Text Markup Language"></div><button class="btn" id="acGo">生成缩写</button><div class="result" id="acOut" style="margin-top:15px"></div>`,
    range: `<div class="two"><div class="field"><label>起始</label><input id="rgA" type="number" value="1"></div><div class="field"><label>结束</label><input id="rgB" type="number" value="10"></div></div><div class="field"><label>步长</label><input id="rgS" type="number" value="1"></div><button class="btn" id="rgGo">生成序列</button><div class="result" id="rgOut" style="margin-top:15px"></div>`,
    shuffle2: `<div class="field"><label>列表（每行一项）</label><textarea id="sh2In"></textarea></div><button class="btn" id="sh2Go">洗牌</button><div class="result" id="sh2Out" style="margin-top:15px"></div>`,
    agehours: `<div class="field"><label>生日</label><input id="ahIn" type="date"></div><button class="btn" id="ahGo">计算</button><div class="result" id="ahOut" style="margin-top:15px"></div>`,
    bigO: `<div class="result" id="boOut" style="line-height:1.8"></div>`,
    regex2: `<div class="result" id="rx2Out" style="line-height:1.8"></div>`,

    scoreboard: `<div class="two"><div class="field"><label>队伍 A</label><input id="sbA" value="主队"><div style="font-size:2em;text-align:center" id="sbAScore">0</div><button class="btn" id="sbAPlus">+1</button></div><div class="field"><label>队伍 B</label><input id="sbB" value="客队"><div style="font-size:2em;text-align:center" id="sbBScore">0</div><button class="btn" id="sbBPlus">+1</button></div></div><button class="btn secondary" id="sbReset" style="margin-top:10px">重置比分</button>`,
    dogage: `<div class="field"><label>狗狗年龄（岁）</label><input id="dgAge" type="number" step="0.5" value="3"></div><button class="btn" id="dgGo">换算人龄</button><div class="result" id="dgOut" style="margin-top:15px"></div>`,
    catage: `<div class="field"><label>猫咪年龄（岁）</label><input id="ctAge" type="number" step="0.5" value="3"></div><button class="btn" id="ctGo">换算人龄</button><div class="result" id="ctOut" style="margin-top:15px"></div>`,
    fishTank: `<div class="field"><label>长 (cm)</label><input id="ftL" type="number" value="60"></div><div class="two"><div class="field"><label>宽 (cm)</label><input id="ftW" type="number" value="30"></div><div class="field"><label>高 (cm)</label><input id="ftH" type="number" value="40"></div></div><button class="btn" id="ftGo">计算容积</button><div class="result" id="ftOut" style="margin-top:15px"></div>`,
    petname: `<div class="field"><label>数量</label><input id="pnN" type="number" value="10"></div><button class="btn" id="pnGo">随机起名</button><div class="result" id="pnOut" style="margin-top:15px"></div>`,
    leap: `<div class="field"><label>年份</label><input id="lpY" type="number" value="2024"></div><button class="btn" id="lpGo">判断闰年</button><div class="result" id="lpOut" style="margin-top:15px"></div>`,
    weekend: `<button class="btn" id="weGo2">距周末还有几天</button><div class="result" id="weOut2" style="margin-top:15px"></div>`,
    eye: `<div class="result" id="eyOut" style="line-height:1.8"></div>`,
    fire2: `<div class="field"><label>当前净资产</label><input id="f2Net" type="number" value="200000"></div><div class="field"><label>每年储蓄</label><input id="f2Save" type="number" value="50000"></div><div class="field"><label>年化收益%</label><input id="f2Rate" type="number" step="0.1" value="5"></div><div class="field"><label>FIRE 目标</label><input id="f2Goal" type="number" value="2500000"></div><button class="btn" id="f2Go">估算年数</button><div class="result" id="f2Out" style="margin-top:15px"></div>`,
    marathon: `<div class="field"><label>目标成绩 (时:分:秒)</label><input id="maTime" placeholder="4:00:00" value="4:00:00"></div><div class="field"><label>距离 (km)</label><input id="maDist" type="number" value="42.195"></div><button class="btn" id="maGo">计算配速</button><div class="result" id="maOut" style="margin-top:15px"></div>`,
    textleet: `<div class="field"><label>文本</label><textarea id="ltIn"></textarea></div><button class="btn" id="ltGo">转 Leet</button><div class="result" id="ltOut" style="margin-top:15px"></div>`,
    padzero: `<div class="field"><label>数字（每行一个）</label><textarea id="pzIn" placeholder="1&#10;12&#10;123"></textarea></div><div class="field"><label>宽度</label><input id="pzW" type="number" value="4"></div><button class="btn" id="pzGo">补零</button><div class="result" id="pzOut" style="margin-top:15px"></div>`,
    salt: `<div class="field"><label>字节长度</label><input id="saltLen" type="number" value="16"></div><button class="btn" id="saltGo">生成 Salt</button><div class="result" id="saltOut" style="margin-top:15px"></div>`,
    mean: `<div class="field"><label>数字（逗号或换行）</label><textarea id="mnIn" placeholder="1,2,3,4,5"></textarea></div><button class="btn" id="mnGo">计算</button><div class="result" id="mnOut" style="margin-top:15px"></div>`,
    npm: `<div class="result" id="npmOut" style="line-height:1.8"></div>`,
    gitlog: `<div class="result" id="glOut2" style="line-height:1.8"></div>`,
    flexcheatsheet: `<div class="result" id="fx2Out" style="line-height:1.8"></div>`,
    randombool: `<button class="btn" id="rbGo">随机真假</button><div class="result" id="rbOut" style="margin-top:15px;font-size:1.5em;text-align:center"></div>`,
    compliment2: `<button class="btn" id="cp2Go">夸夸我</button><div class="result" id="cp2Out" style="margin-top:15px;font-size:1.2em"></div>`
  };
  return map[id] || smartToolUI(id);
}

function wireTool(id) {
  // ---- 原有工具 ----
  if (id === "json") {
    const run = min => { try { $("#jsonOut").textContent = JSON.stringify(JSON.parse($("#jsonIn").value), null, min ? 0 : 2); } catch (e) { $("#jsonOut").textContent = "❌ " + e.message; } };
    $("#jsonFmt").onclick = () => run(false);
    $("#jsonMin").onclick = () => run(true);
    $("#jsonCopy").onclick = () => copyText($("#jsonOut").textContent);
  }
  if (id === "base64") {
    const enc = s => btoa(unescape(encodeURIComponent(s)));
    const dec = s => decodeURIComponent(escape(atob(s)));
    $("#b64Enc").onclick = () => { try { $("#b64Out").textContent = enc($("#b64In").value); } catch (e) { $("#b64Out").textContent = "❌ " + e.message; } };
    $("#b64Dec").onclick = () => { try { $("#b64Out").textContent = dec($("#b64In").value); } catch (e) { $("#b64Out").textContent = "❌ Base64 无效"; } };
    $("#b64Copy").onclick = () => copyText($("#b64Out").textContent);
  }
  if (id === "url") {
    $("#urlEnc").onclick = () => $("#urlOut").textContent = encodeURIComponent($("#urlIn").value);
    $("#urlDec").onclick = () => { try { $("#urlOut").textContent = decodeURIComponent($("#urlIn").value); } catch (e) { $("#urlOut").textContent = "❌ 解码失败"; } };
  }
  if (id === "jwt") {
    $("#jwtGo").onclick = () => {
      try {
        const parts = $("#jwtIn").value.trim().split(".");
        const h = atob(parts[0].replace(/-/g, "+").replace(/_/g, "/"));
        const p = atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"));
        $("#jwtHead").textContent = JSON.stringify(JSON.parse(h), null, 2);
        $("#jwtPayload").textContent = JSON.stringify(JSON.parse(p), null, 2);
      } catch (e) { $("#jwtHead").textContent = "❌ JWT 格式无效"; $("#jwtPayload").textContent = ""; }
    };
  }
  if (id === "sha") {
    $("#shaGo").onclick = async () => {
      const text = $("#shaIn").value;
      const alg = $("#shaAlg").value;
      if (alg === "MD5") {
        $("#shaOut").textContent = md5(text);
        return;
      }
      const data = new TextEncoder().encode(text);
      const buf = await crypto.subtle.digest(alg, data);
      $("#shaOut").textContent = [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, "0")).join("");
    };
  }
  if (id === "uuid") {
    $("#uuidGo").onclick = () => { $("#uuidOut").textContent = Array.from({ length: Math.min(50, +$("#uuidN").value || 1) }, () => crypto.randomUUID()).join("\n"); };
    $("#uuidCopy").onclick = () => copyText($("#uuidOut").textContent);
  }
  if (id === "password") {
    $("#pwGo").onclick = () => {
      let chars = "";
      if ($("#pwLower").checked) chars += "abcdefghijklmnopqrstuvwxyz";
      if ($("#pwUpper").checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if ($("#pwNum").checked) chars += "0123456789";
      if ($("#pwSym").checked) chars += "!@#$%^&*()-_=+[]{}";
      if (!chars) return toast("至少选择一种字符集");
      const a = [], len = +$("#pwLen").value || 20;
      for (let n = 0; n < Math.min(30, +$("#pwN").value || 1); n++) {
        let s = ""; const arr = new Uint32Array(len); crypto.getRandomValues(arr);
        for (const x of arr) s += chars[x % chars.length];
        a.push(s);
      }
      $("#pwOut").textContent = a.join("\n");
    };
  }
  if (id === "timestamp") {
    const refresh = () => { $("#tsOut").textContent = "当前时间：" + new Date().toLocaleString() + "\n当前 Unix 秒：" + Math.floor(Date.now() / 1000) + "\n当前 Unix 毫秒：" + Date.now(); };
    $("#tsDate").onclick = () => { const d = new Date(Number($("#tsIn").value) * 1000); $("#tsOut").textContent = d.toLocaleString() + "\nISO: " + d.toISOString(); };
    $("#dateTs").onclick = () => { const t = new Date($("#dateIn").value).getTime(); $("#tsOut").textContent = Math.floor(t / 1000) + " 秒\n" + t + " 毫秒"; };
    refresh();
  }
  if (id === "regex") {
    $("#reGo").onclick = () => {
      try {
        const r = new RegExp($("#rePat").value, $("#reFlags").value);
        const text = $("#reText").value;
        const rep = $("#reRep").value;
        if (rep !== "") {
          $("#reOut").textContent = text.replace(r, rep);
        } else {
          const m = [...text.matchAll(r)];
          $("#reOut").textContent = m.length ? m.map((x, i) => `${i + 1}. ${x[0]} @ ${x.index}`).join("\n") : "无匹配";
        }
      } catch (e) { $("#reOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "textstats") {
    const calc = () => {
      const s = $("#statIn").value; const bytes = new Blob([s]).size;
      $("#statOut").innerHTML = `<div class="stat"><b>${s.length}</b><small>字符</small></div><div class="stat"><b>${s.split(/\r?\n/).length}</b><small>行</small></div><div class="stat"><b>${bytes}</b><small>UTF-8 字节</small></div><div class="stat"><b>${s.trim() ? s.trim().split(/\s+/).length : 0}</b><small>词</small></div>`;
    };
    $("#statIn").oninput = calc; calc();
  }
  if (id === "case") {
    const out = v => $("#caseOut").textContent = v;
    $("#upper").onclick = () => out($("#caseIn").value.toUpperCase());
    $("#lower").onclick = () => out($("#caseIn").value.toLowerCase());
    $("#title").onclick = () => out($("#caseIn").value.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
    $("#camel").onclick = () => {
      const s = $("#caseIn").value.trim();
      out(s.replace(/(?:^\w|[A-Z]|\b\w)/g, (w, i) => i === 0 ? w.toLowerCase() : w.toUpperCase()).replace(/[\s-_]+/g, ""));
    };
    $("#snake").onclick = () => out($("#caseIn").value.trim().replace(/\s+/g, "_").replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "").replace(/_+/g, "_"));
  }
  if (id === "dedupe") {
    const lines = () => $("#dedupeIn").value.split(/\r?\n/);
    $("#dedupeGo").onclick = () => $("#dedupeOut").textContent = [...new Set(lines().filter(x => x.length))].join("\n");
    $("#sortGo").onclick = () => $("#dedupeOut").textContent = [...new Set(lines().filter(x => x.length))].sort((a, b) => a.localeCompare(b)).join("\n");
    $("#reverseGo").onclick = () => $("#dedupeOut").textContent = lines().reverse().join("\n");
    $("#emptyGo").onclick = () => $("#dedupeOut").textContent = lines().filter(x => x.trim().length).join("\n");
  }
  if (id === "html") {
    const box = document.createElement("textarea");
    $("#htmlEnc").onclick = () => { $("#htmlOut").textContent = $("#htmlIn").value.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); };
    $("#htmlDec").onclick = () => { box.innerHTML = $("#htmlIn").value; $("#htmlOut").textContent = box.value || box.textContent; };
  }
  if (id === "color") {
    const set = (hex, rgb) => { $("#colorPrev").style.background = hex; $("#colorOut").textContent = `HEX: ${hex}\nRGB: ${rgb}`; };
    $("#hexRgb").onclick = () => {
      let h = $("#hexIn").value.trim().replace("#", "");
      if (h.length === 3) h = h.split("").map(x => x + x).join("");
      if (!/^[0-9a-f]{6}$/i.test(h)) return toast("HEX 格式不正确");
      const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4), 16);
      set("#" + h, `${r}, ${g}, ${b}`);
    };
    $("#rgbHex").onclick = () => {
      const m = $("#rgbIn").value.match(/\d+/g);
      if (!m || m.length < 3) return toast("RGB 格式不正确");
      const h = "#" + m.slice(0, 3).map(x => (+x).toString(16).padStart(2, "0")).join("");
      set(h, m.slice(0, 3).join(", "));
    };
  }
  if (id === "random") {
    $("#randGo").onclick = () => {
      const chars = $("#randChars").value || "abc123", n = Math.min(30, +$("#randN").value || 1), len = Math.min(500, +$("#randLen").value || 32);
      const out = [];
      for (let i = 0; i < n; i++) { const a = new Uint32Array(len); crypto.getRandomValues(a); out.push([...a].map(x => chars[x % chars.length]).join("")); }
      $("#randOut").textContent = out.join("\n");
    };
  }
  if (id === "qr") {
    $("#qrGo").onclick = () => {
      const v = $("#qrIn").value.trim();
      if (!v) return toast("请输入内容");
      $("#qrOut").innerHTML = `<img class="qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(v)}" alt="QR">`;
    };
  }
  if (id === "diff") {
    $("#diffGo").onclick = () => {
      const a = $("#diffA").value.split(/\r?\n/), b = $("#diffB").value.split(/\r?\n/), max = Math.max(a.length, b.length);
      let left = "", right = "";
      for (let i = 0; i < max; i++) {
        const la = a[i] ?? "", lb = b[i] ?? "";
        if (la === lb) { left += `<span>${esc(la)}</span>\n`; right += `<span>${esc(lb)}</span>\n`; }
        else { left += `<span class="minus">${esc(la)}</span>\n`; right += `<span class="plus">${esc(lb)}</span>\n`; }
      }
      $("#diffOut").innerHTML = `<pre>${left}</pre><pre>${right}</pre>`;
    };
  }
  if (id === "ip") {
    $("#ipGo").onclick = async () => {
      $("#ipOut").textContent = "查询中…";
      try { const r = await fetch("https://api.ipify.org?format=json"); const j = await r.json(); $("#ipOut").textContent = j.ip || "无法获取"; }
      catch { $("#ipOut").textContent = "查询失败，请检查网络"; }
    };
  }
  if (id === "headers") {
    $("#headersOut").textContent = `User-Agent: ${navigator.userAgent}\nLanguage: ${navigator.language}\nPlatform: ${navigator.platform}\nCookies Enabled: ${navigator.cookieEnabled}\nOnline: ${navigator.onLine}`;
  }
  if (id === "urlparse") {
    $("#parseGo").onclick = () => {
      try {
        const u = new URL($("#parseIn").value);
        const params = [...u.searchParams.entries()].map(([k, v]) => `  ${k}: ${v}`).join("\n") || "  (无)";
        $("#parseOut").textContent = `协议: ${u.protocol}\n主机: ${u.host}\n路径: ${u.pathname}\n查询参数:\n${params}\n哈希: ${u.hash || "(无)"}`;
      } catch { $("#parseOut").textContent = "❌ 无效的 URL"; }
    };
  }
  if (id === "image") {
    $("#imgGo").onclick = () => {
      const file = $("#imgFile").files[0];
      if (!file) return toast("请先选择图片");
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const w = +$("#imgW").value || img.width, h = Math.round(img.height * (w / img.width));
          const canvas = document.createElement("canvas"); canvas.width = w; canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          canvas.toBlob(blob => {
            const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "lonewalkerlee-image.webp"; a.click();
            $("#imgOut").textContent = `原尺寸: ${img.width}×${img.height}\n导出: ${w}×${h} · ${(blob.size / 1024).toFixed(1)} KB`;
          }, "image/webp", Math.min(1, Math.max(0.1, +$("#imgQ").value || 0.85)));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    };
  }
  if (id === "imgbase64") {
    $("#ibFile").onchange = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => $("#ibOut").value = r.result; r.readAsDataURL(f); };
    $("#ibCopy").onclick = () => copyText($("#ibOut").value);
  }
  if (id === "units") {
    const units = { length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, ft: 0.3048, in: 0.0254 }, weight: { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.0283495 }, temp: { C: 1, F: 1, K: 1 } };
    const names = { length: { m: "米", km: "千米", cm: "厘米", mm: "毫米", ft: "英尺", in: "英寸" }, weight: { kg: "千克", g: "克", lb: "磅", oz: "盎司" }, temp: { C: "摄氏", F: "华氏", K: "开尔文" } };
    function fill() { const type = $("#uType").value, a = Object.keys(units[type]); $("#uFrom").innerHTML = a.map(x => `<option value="${x}">${names[type][x]}</option>`).join(""); $("#uTo").innerHTML = a.map(x => `<option value="${x}">${names[type][x]}</option>`).join(""); }
    $("#uType").onchange = fill; fill();
    $("#uGo").onclick = () => {
      const type = $("#uType").value, v = +$("#uVal").value, f = $("#uFrom").value, t = $("#uTo").value;
      let out;
      if (type === "temp") { let c = f === "C" ? v : f === "F" ? (v - 32) * 5 / 9 : v - 273.15; out = t === "C" ? c : t === "F" ? c * 9 / 5 + 32 : c + 273.15; }
      else out = v * units[type][f] / units[type][t];
      $("#uOut").textContent = `${v} ${names[type][f]} = ${out} ${names[type][t]}`;
    };
  }
  if (id === "markdown") {
    const render = () => {
      let s = $("#mdIn").value
        .replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>").replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/`([^`]+)`/g, "<code>$1</code>").replace(/^\- (.*$)/gim, "<li>$1</li>")
        .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>").replace(/\n\n/g, "<br><br>");
      $("#mdOut").innerHTML = s || "<span style='color:var(--muted)'>预览区域</span>";
    };
    $("#mdIn").oninput = render; render();
  }
  if (id === "slug") {
    $("#slugGo").onclick = () => {
      let s = $("#slugIn").value.trim().toLowerCase();
      s = s.replace(/[\u4e00-\u9fa5]/g, c => "cn" + c.codePointAt(0).toString(16));
      s = s.replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
      $("#slugOut").textContent = s || "(空)";
    };
  }
  if (id === "wordfreq") {
    $("#wfGo").onclick = () => {
      const text = $("#wfIn").value.toLowerCase();
      const words = text.match(/[\u4e00-\u9fa5]|[a-z0-9]+/g) || [];
      const map = {}; words.forEach(w => map[w] = (map[w] || 0) + 1);
      const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 50);
      $("#wfOut").textContent = sorted.length ? sorted.map(([w, c]) => `${w}: ${c}`).join("\n") : "没有统计到有效词汇";
    };
  }
  if (id === "cron") {
    $("#cronGo").onclick = () => {
      const exp = $("#cronIn").value.trim().split(/\s+/);
      if (exp.length !== 5) { $("#cronOut").textContent = "请输入标准 5 位 Cron 表达式（分 时 日 月 周）"; return; }
      const [min, hour, day, month, week] = exp;
      $("#cronOut").textContent = `分钟: ${min === "*" ? "每分钟" : min}\n小时: ${hour === "*" ? "每小时" : hour}\n日期: ${day === "*" ? "每天" : day}\n月份: ${month === "*" ? "每月" : month}\n星期: ${week === "*" ? "每周" : week}\n\n（简易解析，复杂表达式请参考 crontab 文档）`;
    };
  }
  if (id === "lorem") {
    const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
    $("#loremGo").onclick = () => {
      const n = Math.min(20, +$("#loremN").value || 3), type = $("#loremType").value;
      let out = [];
      if (type === "words") { for (let i = 0; i < n; i++) out.push(words[Math.floor(Math.random() * words.length)]); $("#loremOut").textContent = out.join(" "); }
      else if (type === "sent") {
        for (let i = 0; i < n; i++) { const len = 8 + Math.floor(Math.random() * 10); let s = []; for (let j = 0; j < len; j++) s.push(words[Math.floor(Math.random() * words.length)]); out.push(s.join(" ").replace(/^\w/, c => c.toUpperCase()) + "."); }
        $("#loremOut").textContent = out.join(" ");
      } else {
        for (let i = 0; i < n; i++) {
          const sents = 3 + Math.floor(Math.random() * 3); let p = [];
          for (let k = 0; k < sents; k++) { const len = 8 + Math.floor(Math.random() * 10); let s = []; for (let j = 0; j < len; j++) s.push(words[Math.floor(Math.random() * words.length)]); p.push(s.join(" ").replace(/^\w/, c => c.toUpperCase()) + "."); }
          out.push(p.join(" "));
        }
        $("#loremOut").textContent = out.join("\n\n");
      }
    };
    $("#loremCopy").onclick = () => copyText($("#loremOut").textContent);
  }
  if (id === "number") {
    $("#numGo").onclick = () => {
      try {
        const from = +$("#numFrom").value, raw = $("#numIn").value.trim().replace(/^0x/i, ""), num = parseInt(raw, from);
        if (isNaN(num)) throw new Error("无效数字");
        $("#numOut").textContent = `十进制: ${num}\n二进制: ${num.toString(2)}\n八进制: ${num.toString(8)}\n十六进制: ${num.toString(16).toUpperCase()}`;
      } catch (e) { $("#numOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "jsonyaml") {
    $("#jsonToYaml").onclick = () => { try { $("#jyOut").textContent = jsonToSimpleYaml(JSON.parse($("#jyIn").value)); } catch (e) { $("#jyOut").textContent = "❌ JSON 解析失败: " + e.message; } };
    $("#yamlToJson").onclick = () => {
      try {
        const lines = $("#jyIn").value.split(/\r?\n/).filter(l => l.trim() && !l.trim().startsWith("#"));
        const obj = {};
        lines.forEach(line => { const m = line.match(/^(\s*)([^:]+):\s*(.*)$/); if (m) obj[m[2].trim()] = m[3].trim().replace(/^["']|["']$/g, "") || null; });
        $("#jyOut").textContent = JSON.stringify(obj, null, 2);
      } catch (e) { $("#jyOut").textContent = "❌ 转换失败（仅支持简单 YAML）"; }
    };
  }

  // ---- 新增工具逻辑 ----
  if (id === "findreplace") {
    $("#frGo").onclick = () => {
      const text = $("#frIn").value, find = $("#frFind").value, rep = $("#frRep").value;
      if (!find) return toast("请输入查找内容");
      $("#frOut").textContent = $("#frAll").checked ? text.split(find).join(rep) : text.replace(find, rep);
    };
  }
  if (id === "reverse") {
    $("#revStr").onclick = () => $("#revOut").textContent = [...$("#revIn").value].reverse().join("");
    $("#revLine").onclick = () => $("#revOut").textContent = $("#revIn").value.split(/\r?\n/).reverse().join("\n");
  }
  if (id === "linenumber") {
    $("#lnGo").onclick = () => {
      const start = +$("#lnStart").value || 1, sep = $("#lnSep").value;
      $("#lnOut").textContent = $("#lnIn").value.split(/\r?\n/).map((l, i) => (start + i) + sep + l).join("\n");
    };
  }
  if (id === "morse") {
    const MORSE = { A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", " ": "/" };
    const REV = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));
    $("#morseEnc").onclick = () => {
      $("#morseOut").textContent = $("#morseIn").value.toUpperCase().split("").map(c => MORSE[c] || c).join(" ");
    };
    $("#morseDec").onclick = () => {
      $("#morseOut").textContent = $("#morseIn").value.trim().split(/\s+/).map(c => REV[c] || c).join("");
    };
  }
  if (id === "rot13") {
    $("#rotGo").onclick = () => {
      const shift = +$("#rotShift").value || 13;
      $("#rotOut").textContent = $("#rotIn").value.replace(/[a-zA-Z]/g, c => {
        const base = c <= "Z" ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
      });
    };
  }
  if (id === "textbin") {
    $("#tbEnc").onclick = () => {
      $("#tbOut").textContent = [...$("#tbIn").value].map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
    };
    $("#tbDec").onclick = () => {
      try {
        $("#tbOut").textContent = $("#tbIn").value.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join("");
      } catch { $("#tbOut").textContent = "❌ 无效二进制"; }
    };
  }
  if (id === "aes") {
    const getKey = async (pwd) => {
      const enc = new TextEncoder();
      const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(pwd), "PBKDF2", false, ["deriveKey"]);
      return crypto.subtle.deriveKey({ name: "PBKDF2", salt: enc.encode("lonewalkerlee-salt"), iterations: 100000, hash: "SHA-256" }, keyMaterial, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
    };
    $("#aesEnc").onclick = async () => {
      try {
        const key = await getKey($("#aesKey").value || "default");
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode($("#aesIn").value));
        const buf = new Uint8Array(iv.length + ct.byteLength);
        buf.set(iv, 0); buf.set(new Uint8Array(ct), iv.length);
        $("#aesOut").textContent = btoa(String.fromCharCode(...buf));
      } catch (e) { $("#aesOut").textContent = "❌ " + e.message; }
    };
    $("#aesDec").onclick = async () => {
      try {
        const key = await getKey($("#aesKey").value || "default");
        const data = Uint8Array.from(atob($("#aesIn").value), c => c.charCodeAt(0));
        const iv = data.slice(0, 12), ct = data.slice(12);
        const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
        $("#aesOut").textContent = new TextDecoder().decode(pt);
      } catch (e) { $("#aesOut").textContent = "❌ 解密失败（密钥错误或数据损坏）"; }
    };
  }
  if (id === "hmac") {
    $("#hmacGo").onclick = async () => {
      try {
        const key = await crypto.subtle.importKey("raw", new TextEncoder().encode($("#hmacKey").value), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
        const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode($("#hmacMsg").value));
        $("#hmacOut").textContent = [...new Uint8Array(sig)].map(x => x.toString(16).padStart(2, "0")).join("");
      } catch (e) { $("#hmacOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "pwcheck") {
    $("#pwCheckGo").onclick = () => {
      const p = $("#pwCheckIn").value;
      let score = 0, tips = [];
      if (p.length >= 8) score++; else tips.push("长度建议 ≥ 8");
      if (p.length >= 12) score++;
      if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score++; else tips.push("建议包含大小写字母");
      if (/\d/.test(p)) score++; else tips.push("建议包含数字");
      if (/[^a-zA-Z0-9]/.test(p)) score++; else tips.push("建议包含特殊符号");
      const level = ["极弱", "弱", "一般", "较强", "强", "非常强"][score];
      $("#pwCheckOut").textContent = `强度：${level}（${score}/5）\n${tips.length ? "建议：\n- " + tips.join("\n- ") : "密码强度不错！"}`;
    };
  }
  if (id === "hashcmp") {
    $("#hcGo").onclick = () => {
      const a = $("#hcA").value.trim().toLowerCase(), b = $("#hcB").value.trim().toLowerCase();
      $("#hcOut").textContent = a && b ? (a === b ? "✅ 两个哈希一致" : "❌ 两个哈希不一致") : "请填写两个哈希值";
    };
  }
  if (id === "cidr") {
    $("#cidrGo").onclick = () => {
      try {
        const [ip, bits] = $("#cidrIn").value.trim().split("/");
        const maskBits = +bits;
        if (!ip || isNaN(maskBits) || maskBits < 0 || maskBits > 32) throw new Error("格式错误");
        const parts = ip.split(".").map(Number);
        if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) throw new Error("IP 无效");
        let ipNum = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
        const mask = maskBits === 0 ? 0 : (~0 << (32 - maskBits)) >>> 0;
        const network = (ipNum & mask) >>> 0;
        const broadcast = (network | (~mask >>> 0)) >>> 0;
        const toIp = n => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
        const hosts = maskBits >= 31 ? (maskBits === 32 ? 1 : 2) : (broadcast - network - 1);
        $("#cidrOut").textContent = `网络地址: ${toIp(network)}\n广播地址: ${toIp(broadcast)}\n子网掩码: ${toIp(mask)}\n可用主机数: ${hosts}\n第一可用: ${maskBits < 31 ? toIp(network + 1) : "-"}\n最后可用: ${maskBits < 31 ? toIp(broadcast - 1) : "-"}`;
      } catch (e) { $("#cidrOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "useragent") {
    $("#uaGo").onclick = () => {
      const ua = $("#uaIn").value.trim() || navigator.userAgent;
      const browser = /Edg\//.test(ua) ? "Edge" : /Chrome\//.test(ua) ? "Chrome" : /Firefox\//.test(ua) ? "Firefox" : /Safari\//.test(ua) ? "Safari" : "Unknown";
      const os = /Windows/.test(ua) ? "Windows" : /Mac OS/.test(ua) ? "macOS" : /Android/.test(ua) ? "Android" : /iPhone|iPad/.test(ua) ? "iOS" : /Linux/.test(ua) ? "Linux" : "Unknown";
      const mobile = /Mobile|Android|iPhone/.test(ua);
      $("#uaOut").textContent = `UA: ${ua}\n\n浏览器: ${browser}\n系统: ${os}\n移动设备: ${mobile ? "是" : "否"}`;
    };
  }
  if (id === "meta") {
    $("#metaGo").onclick = () => {
      const t = $("#metaTitle").value, d = $("#metaDesc").value, k = $("#metaKw").value, img = $("#metaImg").value;
      $("#metaOut").textContent = `<title>${t}</title>
<meta name="description" content="${d}">
<meta name="keywords" content="${k}">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${d}">
${img ? `<meta property="og:image" content="${img}">` : ""}
<meta name="twitter:card" content="summary_large_image">`;
    };
  }
  if (id === "chmod") {
    $("#chmodGo").onclick = () => {
      const v = $("#chmodIn").value.trim();
      if (/^\d{3,4}$/.test(v)) {
        const n = v.slice(-3);
        const map = n => {
          let s = "";
          s += n & 4 ? "r" : "-"; s += n & 2 ? "w" : "-"; s += n & 1 ? "x" : "-";
          return s;
        };
        $("#chmodOut").textContent = `符号: ${map(+n[0])}${map(+n[1])}${map(+n[2])}\n数字: ${v}`;
      } else if (/^[rwx-]{9}$/.test(v)) {
        const toNum = s => (s[0] === "r" ? 4 : 0) + (s[1] === "w" ? 2 : 0) + (s[2] === "x" ? 1 : 0);
        $("#chmodOut").textContent = `数字: ${toNum(v.slice(0, 3))}${toNum(v.slice(3, 6))}${toNum(v.slice(6))}\n符号: ${v}`;
      } else $("#chmodOut").textContent = "❌ 格式错误，请输入 755 或 rwxr-xr-x";
    };
  }
  if (id === "cssmin") {
    $("#cssMin").onclick = () => {
      $("#cssOut").textContent = $("#cssIn").value.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*([{}:;,])\s*/g, "$1").trim();
    };
    $("#cssBeautify").onclick = () => {
      let s = $("#cssIn").value.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
      s = s.replace(/\{/g, " {\n  ").replace(/;/g, ";\n  ").replace(/\}/g, "\n}\n").replace(/\n\s*\n/g, "\n");
      $("#cssOut").textContent = s;
    };
  }
  if (id === "jsmin") {
    $("#jsMin").onclick = () => {
      $("#jsOut").textContent = $("#jsIn").value
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s*([=+\-*/%&|!<>?:;,{}()[\]])\s*/g, "$1")
        .trim();
    };
  }
  if (id === "sqlfmt") {
    $("#sqlGo").onclick = () => {
      const keywords = ["SELECT", "FROM", "WHERE", "AND", "OR", "JOIN", "LEFT", "RIGHT", "INNER", "ON", "GROUP BY", "ORDER BY", "LIMIT", "INSERT", "UPDATE", "DELETE", "CREATE", "TABLE", "VALUES", "SET", "HAVING"];
      let s = $("#sqlIn").value;
      keywords.forEach(k => { s = s.replace(new RegExp("\\b" + k + "\\b", "gi"), "\n" + k); });
      $("#sqlOut").textContent = s.replace(/^\n/, "").trim();
    };
  }
  if (id === "dice") {
    $("#diceGo").onclick = () => {
      const sides = Math.max(2, +$("#diceSides").value || 6), n = Math.min(50, +$("#diceN").value || 1);
      const results = Array.from({ length: n }, () => 1 + Math.floor(Math.random() * sides));
      $("#diceOut").textContent = `结果: ${results.join(", ")}\n总和: ${results.reduce((a, b) => a + b, 0)}`;
    };
  }
  if (id === "stopwatch") {
    let start = 0, elapsed = 0, timer = null;
    const display = () => {
      const t = elapsed + (timer ? Date.now() - start : 0);
      const ms = Math.floor((t % 1000) / 10), s = Math.floor(t / 1000) % 60, m = Math.floor(t / 60000) % 60, h = Math.floor(t / 3600000);
      $("#swDisplay").textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(ms).padStart(2, "0")}`;
    };
    $("#swStart").onclick = () => { if (timer) return; start = Date.now(); timer = setInterval(display, 30); };
    $("#swPause").onclick = () => { if (!timer) return; elapsed += Date.now() - start; clearInterval(timer); timer = null; };
    $("#swReset").onclick = () => { clearInterval(timer); timer = null; elapsed = 0; start = 0; display(); };
  }
  if (id === "datasize") {
    const units = { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4 };
    $("#dsGo").onclick = () => {
      const v = +$("#dsVal").value, from = $("#dsFrom").value, to = $("#dsTo").value;
      const result = v * units[from] / units[to];
      $("#dsOut").textContent = `${v} ${from} = ${result} ${to}`;
    };
  }
  if (id === "roman") {
    const toRoman = num => {
      if (num < 1 || num > 3999) return "范围 1-3999";
      const map = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
      let res = "";
      for (const [v, s] of map) while (num >= v) { res += s; num -= v; }
      return res;
    };
    const fromRoman = str => {
      const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
      let i = 0, num = 0;
      str = str.toUpperCase();
      while (i < str.length) {
        if (i + 1 < str.length && map[str.substr(i, 2)]) { num += map[str.substr(i, 2)]; i += 2; }
        else if (map[str[i]]) { num += map[str[i]]; i++; }
        else return "无效罗马数字";
      }
      return num;
    };
    $("#romanTo").onclick = () => { const n = +$("#romanIn").value; $("#romanOut").textContent = isNaN(n) ? "请输入数字" : toRoman(n); };
    $("#romanFrom").onclick = () => { $("#romanOut").textContent = String(fromRoman($("#romanIn").value.trim())); };
  }
  if (id === "percent") {
    $("#pctGo").onclick = () => {
      const type = $("#pctType").value, a = +$("#pctA").value, b = +$("#pctB").value;
      if (type === "pct") $("#pctOut").textContent = b === 0 ? "除数不能为 0" : `${a} 是 ${b} 的 ${((a / b) * 100).toFixed(2)}%`;
      else if (type === "of") $("#pctOut").textContent = `${b}% 的 ${a} = ${(a * b / 100).toFixed(4)}`;
      else $("#pctOut").textContent = a === 0 ? "原值不能为 0" : `从 ${a} 到 ${b} 变化了 ${(((b - a) / a) * 100).toFixed(2)}%`;
    };
  }
  if (id === "imginfo") {
    $("#iiFile").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => { $("#iiOut").textContent = `文件名: ${f.name}\n类型: ${f.type}\n大小: ${(f.size / 1024).toFixed(1)} KB\n尺寸: ${img.width} × ${img.height}`; };
      img.src = URL.createObjectURL(f);
    };
  }
  if (id === "imgrotate") {
    let currentImg = null, angle = 0, flipH = 1, flipV = 1;
    const draw = () => {
      if (!currentImg) return;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const rad = angle * Math.PI / 180;
      const w = currentImg.width, h = currentImg.height;
      if (angle % 180 === 0) { canvas.width = w; canvas.height = h; }
      else { canvas.width = h; canvas.height = w; }
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rad);
      ctx.scale(flipH, flipV);
      ctx.drawImage(currentImg, -w / 2, -h / 2);
      $("#irPreview").innerHTML = "";
      $("#irPreview").appendChild(canvas);
      canvas.style.maxWidth = "100%";
      canvas.style.borderRadius = "8px";
    };
    $("#irFile").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => { currentImg = img; angle = 0; flipH = 1; flipV = 1; draw(); };
      img.src = URL.createObjectURL(f);
    };
    $("#irLeft").onclick = () => { angle = (angle - 90) % 360; draw(); };
    $("#irRight").onclick = () => { angle = (angle + 90) % 360; draw(); };
    $("#irFlipH").onclick = () => { flipH *= -1; draw(); };
    $("#irFlipV").onclick = () => { flipV *= -1; draw(); };
  }
  if (id === "bmi") {
    $("#bmiGo").onclick = () => {
      const h = +$("#bmiH").value / 100, w = +$("#bmiW").value;
      if (!h || !w) return toast("请填写身高和体重");
      const bmi = w / (h * h);
      let level = "偏瘦"; if (bmi >= 28) level = "肥胖"; else if (bmi >= 24) level = "超重"; else if (bmi >= 18.5) level = "正常";
      $("#bmiOut").textContent = `BMI: ${bmi.toFixed(1)}\n评价: ${level}\n（亚洲标准参考）`;
    };
  }
  if (id === "age") {
    $("#ageGo").onclick = () => {
      const birth = new Date($("#ageBirth").value);
      if (isNaN(birth)) return toast("请选择出生日期");
      const now = new Date();
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
      if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
      if (months < 0) { years--; months += 12; }
      const totalDays = Math.floor((now - birth) / 86400000);
      $("#ageOut").textContent = `年龄: ${years} 岁 ${months} 个月 ${days} 天\n总天数: ${totalDays} 天`;
    };
  }
  if (id === "loan") {
    $("#loanGo").onclick = () => {
      const P = +$("#loanAmt").value, annual = +$("#loanRate").value / 100, years = +$("#loanYear").value;
      if (!P || !annual || !years) return toast("请填写完整信息");
      const r = annual / 12, n = years * 12;
      const monthly = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const total = monthly * n, interest = total - P;
      $("#loanOut").textContent = `每月还款: ${monthly.toFixed(2)} 元\n还款总额: ${total.toFixed(2)} 元\n支付利息: ${interest.toFixed(2)} 元`;
    };
  }
  if (id === "aspect") {
    $("#aspGo").onclick = () => {
      const w = +$("#aspW").value, h = +$("#aspH").value;
      if (!w || !h) return;
      const g = (a, b) => b === 0 ? a : g(b, a % b);
      const d = g(w, h);
      $("#aspOut").textContent = `比例: ${w / d}:${h / d}\n约分后: ${(w / d).toFixed(0)}:${(h / d).toFixed(0)}\n小数: ${(w / h).toFixed(4)}`;
    };
  }
  if (id === "tip") {
    $("#tipGo").onclick = () => {
      const amt = +$("#tipAmt").value, pct = +$("#tipPct").value, people = Math.max(1, +$("#tipPeople").value || 1);
      if (!amt) return toast("请输入金额");
      const tip = amt * pct / 100, total = amt + tip;
      $("#tipOut").textContent = `小费: ${tip.toFixed(2)}\n总计: ${total.toFixed(2)}\n每人: ${(total / people).toFixed(2)}`;
    };
  }

  // ===== 新增热门工具逻辑 =====
  if (id === "unicode") {
    $("#uniEnc").onclick = () => {
      $("#uniOut").textContent = [...$("#uniIn").value].map(c => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0")).join("");
    };
    $("#uniDec").onclick = () => {
      try {
        $("#uniOut").textContent = $("#uniIn").value.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
      } catch { $("#uniOut").textContent = "❌ 解码失败"; }
    };
  }
  if (id === "escapejs") {
    $("#escEnc").onclick = () => $("#escOut").textContent = escape($("#escIn").value);
    $("#escDec").onclick = () => { try { $("#escOut").textContent = unescape($("#escIn").value); } catch { $("#escOut").textContent = "❌ 失败"; } };
  }
  if (id === "textclean") {
    $("#tcSpace").onclick = () => $("#tcOut").textContent = $("#tcIn").value.replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").trim();
    $("#tcEmpty").onclick = () => $("#tcOut").textContent = $("#tcIn").value.split(/\r?\n/).filter(l => l.trim()).join("\n");
    $("#tcAll").onclick = () => $("#tcOut").textContent = $("#tcIn").value.replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").split(/\r?\n/).filter(l => l.trim()).join("\n").trim();
  }
  if (id === "fullhalf") {
    $("#fhToFull").onclick = () => {
      $("#fhOut").textContent = [...$("#fhIn").value].map(c => {
        const code = c.charCodeAt(0);
        if (code === 32) return "　";
        if (code >= 33 && code <= 126) return String.fromCharCode(code + 65248);
        return c;
      }).join("");
    };
    $("#fhToHalf").onclick = () => {
      $("#fhOut").textContent = [...$("#fhIn").value].map(c => {
        const code = c.charCodeAt(0);
        if (code === 12288) return " ";
        if (code >= 65281 && code <= 65374) return String.fromCharCode(code - 65248);
        return c;
      }).join("");
    };
  }
  if (id === "ascii") {
    $("#ascEnc").onclick = () => $("#ascOut").textContent = [...$("#ascIn").value].map(c => c.charCodeAt(0)).join(" ");
    $("#ascDec").onclick = () => {
      try {
        $("#ascOut").textContent = $("#ascIn").value.trim().split(/\s+/).map(n => String.fromCharCode(+n)).join("");
      } catch { $("#ascOut").textContent = "❌ 无效"; }
    };
  }
  if (id === "cnupper") {
    $("#cnuGo").onclick = () => {
      const n = +$("#cnuIn").value;
      if (isNaN(n)) return toast("请输入有效数字");
      const cnNums = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];
      const cnInt = ["","拾","佰","仟"];
      const cnUnit = ["","万","亿"];
      function intToCn(num) {
        if (num === 0) return "零";
        let str = "", unitPos = 0, needZero = false;
        while (num > 0) {
          let section = num % 10000;
          if (needZero) str = "零" + str;
          let sectionStr = "";
          for (let i = 0; i < 4 && section > 0; i++) {
            const d = section % 10;
            if (d === 0) { if (sectionStr && !sectionStr.startsWith("零")) sectionStr = "零" + sectionStr; }
            else sectionStr = cnNums[d] + cnInt[i] + sectionStr;
            section = Math.floor(section / 10);
          }
          str = (sectionStr + cnUnit[unitPos]) + str;
          needZero = (num % 10000) < 1000 && (num % 10000) > 0;
          num = Math.floor(num / 10000);
          unitPos++;
        }
        return str.replace(/零+/g, "零").replace(/零(万|亿)/g, "$1").replace(/零+$/, "") || "零";
      }
      const yuan = Math.floor(n);
      const jiao = Math.floor((n - yuan) * 10 + 1e-6);
      const fen = Math.floor((n - yuan) * 100 % 10 + 1e-6);
      let result = intToCn(yuan) + "元";
      if (jiao === 0 && fen === 0) result += "整";
      else {
        if (jiao > 0) result += cnNums[jiao] + "角";
        if (fen > 0) result += cnNums[fen] + "分";
      }
      $("#cnuOut").textContent = result;
    };
  }
  if (id === "htmlfmt") {
    $("#hfBeautify").onclick = () => {
      let s = $("#hfIn").value;
      s = s.replace(/>\s*</g, ">\n<").replace(/(<\/?\w+[^>]*>)/g, "\n$1\n");
      let indent = 0;
      $("#hfOut").textContent = s.split("\n").map(line => {
        line = line.trim();
        if (!line) return "";
        if (line.startsWith("</")) indent = Math.max(0, indent - 1);
        const out = "  ".repeat(indent) + line;
        if (line.startsWith("<") && !line.startsWith("</") && !line.endsWith("/>") && !line.includes("</")) indent++;
        return out;
      }).filter(Boolean).join("\n");
    };
    $("#hfMin").onclick = () => $("#hfOut").textContent = $("#hfIn").value.replace(/>\s+</g, "><").replace(/\s+/g, " ").trim();
  }
  if (id === "xmlfmt") {
    $("#xfGo").onclick = () => {
      let s = $("#xfIn").value.replace(/>\s*</g, ">\n<");
      let indent = 0;
      $("#xfOut").textContent = s.split("\n").map(line => {
        line = line.trim();
        if (!line) return "";
        if (line.startsWith("</")) indent = Math.max(0, indent - 1);
        const out = "  ".repeat(indent) + line;
        if (line.startsWith("<") && !line.startsWith("</") && !line.endsWith("/>") && !line.includes("</")) indent++;
        return out;
      }).filter(Boolean).join("\n");
    };
  }
  if (id === "jsoncsv") {
    $("#jcToCsv").onclick = () => {
      try {
        const arr = JSON.parse($("#jcIn").value);
        if (!Array.isArray(arr) || !arr.length) throw new Error("需要非空数组");
        const keys = Object.keys(arr[0]);
        const lines = [keys.join(",")].concat(arr.map(o => keys.map(k => JSON.stringify(o[k] ?? "")).join(",")));
        $("#jcOut").textContent = lines.join("\n");
      } catch (e) { $("#jcOut").textContent = "❌ " + e.message; }
    };
    $("#jcToJson").onclick = () => {
      try {
        const lines = $("#jcIn").value.trim().split(/\r?\n/).filter(Boolean);
        const keys = lines[0].split(",").map(k => k.trim());
        const arr = lines.slice(1).map(line => {
          const vals = line.match(/(".*?"|[^,]+)/g) || [];
          const obj = {};
          keys.forEach((k, i) => { let v = (vals[i] || "").trim(); if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1); obj[k] = v; });
          return obj;
        });
        $("#jcOut").textContent = JSON.stringify(arr, null, 2);
      } catch (e) { $("#jcOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "colorcontrast") {
    $("#ccGo").onclick = () => {
      const hexToRgb = h => { h = h.replace("#", ""); if (h.length === 3) h = h.split("").map(x => x + x).join(""); return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4),16)]; };
      const lum = ([r,g,b]) => { const a = [r,g,b].map(v => { v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }); return 0.2126*a[0]+0.7152*a[1]+0.0722*a[2]; };
      try {
        const L1 = lum(hexToRgb($("#ccFg").value)), L2 = lum(hexToRgb($("#ccBg").value));
        const ratio = (Math.max(L1,L2) + 0.05) / (Math.min(L1,L2) + 0.05);
        const aa = ratio >= 4.5 ? "✅ AA 通过" : "❌ AA 不通过";
        const aaa = ratio >= 7 ? "✅ AAA 通过" : "❌ AAA 不通过";
        $("#ccOut").textContent = `对比度: ${ratio.toFixed(2)}:1\n大文本 AA (3:1): ${ratio >= 3 ? "✅" : "❌"}\n正常文本 AA (4.5:1): ${aa}\nAAA (7:1): ${aaa}`;
      } catch { $("#ccOut").textContent = "❌ 颜色格式错误"; }
    };
  }
  if (id === "gradient") {
    $("#grGo").onclick = () => {
      const c1 = $("#grC1").value, c2 = $("#grC2").value, angle = $("#grAngle").value || 135;
      const css = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
      $("#grPreview").style.background = css;
      $("#grOut").textContent = `background: ${css};`;
    };
  }
  if (id === "randomcolor") {
    $("#rcGo").onclick = () => {
      const n = Math.min(30, +$("#rcN").value || 8);
      let html = "";
      for (let i = 0; i < n; i++) {
        const hex = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
        html += `<div style="background:${hex};padding:20px 8px;border-radius:8px;text-align:center;font-size:11px;color:#fff;text-shadow:0 1px 2px #0008;cursor:pointer" onclick="navigator.clipboard.writeText('${hex}');this.textContent='已复制'">${hex}</div>`;
      }
      $("#rcOut").innerHTML = html;
    };
  }
  if (id === "coin") {
    $("#coinGo").onclick = () => {
      const r = Math.random() < 0.5 ? "正面" : "反面";
      $("#coinResult").textContent = r === "正面" ? "🪙" : "⭕";
      $("#coinOut").textContent = r;
    };
  }
  if (id === "picker") {
    $("#pkGo").onclick = () => {
      const list = $("#pkIn").value.split(/\r?\n/).map(x => x.trim()).filter(Boolean);
      if (!list.length) return toast("请输入选项");
      const n = Math.min(list.length, +$("#pkN").value || 1);
      const shuffled = list.sort(() => Math.random() - 0.5);
      $("#pkOut").textContent = shuffled.slice(0, n).join("\n");
    };
  }
  if (id === "placeholder") {
    $("#phGo").onclick = () => {
      const w = +$("#phW").value || 400, h = +$("#phH").value || 300, color = $("#phColor").value || "#7c8cff", text = $("#phText").value || `${w}×${h}`;
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = color; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#fff"; ctx.font = `bold ${Math.min(w, h) / 8}px sans-serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(text, w/2, h/2);
      $("#phPreview").innerHTML = "";
      $("#phPreview").appendChild(canvas);
      canvas.style.maxWidth = "100%"; canvas.style.borderRadius = "8px";
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `placeholder-${w}x${h}.png`;
      a.click();
    };
  }
  if (id === "worldclock") {
    const zones = [
      {name: "北京", tz: "Asia/Shanghai"},
      {name: "东京", tz: "Asia/Tokyo"},
      {name: "纽约", tz: "America/New_York"},
      {name: "伦敦", tz: "Europe/London"},
      {name: "巴黎", tz: "Europe/Paris"},
      {name: "悉尼", tz: "Australia/Sydney"},
      {name: "洛杉矶", tz: "America/Los_Angeles"},
      {name: "迪拜", tz: "Asia/Dubai"}
    ];
    const render = () => {
      $("#wcOut").textContent = zones.map(z => {
        const t = new Date().toLocaleString("zh-CN", {timeZone: z.tz, hour12: false});
        return `${z.name.padEnd(6)} ${t}`;
      }).join("\n");
    };
    render();
    $("#wcRefresh").onclick = render;
  }
  if (id === "countdown") {
    let timer = null, remain = 0;
    const display = () => {
      const m = Math.floor(remain / 60), s = remain % 60;
      $("#cdDisplay").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    };
    $("#cdStart").onclick = () => {
      if (timer) return;
      remain = (+$("#cdMin").value || 5) * 60;
      display();
      timer = setInterval(() => {
        remain--;
        display();
        if (remain <= 0) { clearInterval(timer); timer = null; toast("倒计时结束！"); }
      }, 1000);
    };
    $("#cdReset").onclick = () => { clearInterval(timer); timer = null; remain = (+$("#cdMin").value || 5) * 60; display(); };
  }
  if (id === "datediff") {
    $("#ddGo").onclick = () => {
      const s = new Date($("#ddStart").value), e = new Date($("#ddEnd").value);
      if (isNaN(s) || isNaN(e)) return toast("请选择日期");
      const days = Math.round((e - s) / 86400000);
      $("#ddOut").textContent = `相差 ${Math.abs(days)} 天\n${days >= 0 ? "结束日期较晚" : "开始日期较晚"}`;
    };
  }
  if (id === "compound") {
    $("#cpGo").onclick = () => {
      const P = +$("#cpP").value, r = +$("#cpR").value / 100, t = +$("#cpN").value, n = +$("#cpFreq").value;
      if (!P || !r || !t) return toast("请填写完整");
      const A = P * Math.pow(1 + r / n, n * t);
      $("#cpOut").textContent = `本金: ${P.toFixed(2)}\n最终金额: ${A.toFixed(2)}\n利息收益: ${(A - P).toFixed(2)}`;
    };
  }
  if (id === "blood") {
    const map = {
      "A+A": "A 或 O", "A+B": "A、B、AB 或 O", "A+AB": "A、B 或 AB", "A+O": "A 或 O",
      "B+B": "B 或 O", "B+AB": "A、B 或 AB", "B+O": "B 或 O",
      "AB+AB": "A、B 或 AB", "AB+O": "A 或 B",
      "O+O": "O"
    };
    $("#blGo").onclick = () => {
      const f = $("#blF").value, m = $("#blM").value;
      const key = [f, m].sort().join("+");
      $("#blOut").textContent = `子女可能血型: ${map[key] || map[f+"+"+m] || "未知"}`;
    };
  }
  if (id === "idcheck") {
    $("#idGo").onclick = () => {
      const id = $("#idIn").value.trim().toUpperCase();
      if (!/^\d{17}[\dX]$/.test(id)) { $("#idOut").textContent = "❌ 格式不正确（需 18 位）"; return; }
      const weights = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
      const codes = "10X98765432";
      let sum = 0;
      for (let i = 0; i < 17; i++) sum += +id[i] * weights[i];
      const check = codes[sum % 11];
      const ok = check === id[17];
      const birth = id.slice(6, 14);
      $("#idOut").textContent = `${ok ? "✅ 校验通过" : "❌ 校验码错误（应为 " + check + "）"}\n出生日期: ${birth.slice(0,4)}-${birth.slice(4,6)}-${birth.slice(6)}\n性别: ${+id[16] % 2 === 1 ? "男" : "女"}`;
    };
  }
  if (id === "grayscale") {
    $("#gsFile").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width; canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < data.data.length; i += 4) {
          const avg = data.data[i]*0.299 + data.data[i+1]*0.587 + data.data[i+2]*0.114;
          data.data[i] = data.data[i+1] = data.data[i+2] = avg;
        }
        ctx.putImageData(data, 0, 0);
        $("#gsPreview").innerHTML = "";
        $("#gsPreview").appendChild(canvas);
        canvas.style.maxWidth = "100%"; canvas.style.borderRadius = "8px";
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "grayscale.png";
        a.click();
      };
      img.src = URL.createObjectURL(f);
    };
  }
  if (id === "watermark") {
    let baseImg = null;
    $("#wmFile").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => { baseImg = img; };
      img.src = URL.createObjectURL(f);
    };
    $("#wmGo").onclick = () => {
      if (!baseImg) return toast("请先选择图片");
      const canvas = document.createElement("canvas");
      canvas.width = baseImg.width; canvas.height = baseImg.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(baseImg, 0, 0);
      ctx.globalAlpha = +$("#wmAlpha").value || 0.4;
      ctx.fillStyle = "#fff";
      ctx.font = `bold ${+$("#wmSize").value || 24}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText($("#wmText").value || "Watermark", canvas.width/2, canvas.height - 30);
      $("#wmPreview").innerHTML = "";
      $("#wmPreview").appendChild(canvas);
      canvas.style.maxWidth = "100%"; canvas.style.borderRadius = "8px";
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "watermarked.png";
      a.click();
    };
  }
  if (id === "timeunit") {
    const units = {s:1, m:60, h:3600, d:86400, w:604800};
    $("#tuGo").onclick = () => {
      const v = +$("#tuVal").value, from = $("#tuFrom").value, to = $("#tuTo").value;
      const result = v * units[from] / units[to];
      $("#tuOut").textContent = `${v} ${from} = ${result} ${to}`;
    };
  }

  // ===== 继续扩充的工具逻辑 =====
  if (id === "striphtml") {
    $("#shGo").onclick = () => {
      const tmp = document.createElement("div");
      tmp.innerHTML = $("#shIn").value;
      $("#shOut").textContent = tmp.textContent || tmp.innerText || "";
    };
  }
  if (id === "xor") {
    const xorCrypt = (text, key) => {
      let out = "";
      for (let i = 0; i < text.length; i++) out += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      return out;
    };
    $("#xorEnc").onclick = () => {
      const r = xorCrypt($("#xorIn").value, $("#xorKey").value || "key");
      $("#xorOut").textContent = btoa(unescape(encodeURIComponent(r)));
    };
    $("#xorDec").onclick = () => {
      try {
        const r = decodeURIComponent(escape(atob($("#xorIn").value)));
        $("#xorOut").textContent = xorCrypt(r, $("#xorKey").value || "key");
      } catch { $("#xorOut").textContent = "❌ 解密失败"; }
    };
  }
  if (id === "cssunit") {
    $("#cuGo").onclick = () => {
      const v = +$("#cuVal").value, root = +$("#cuRoot").value || 16;
      const from = $("#cuFrom").value, to = $("#cuTo").value;
      let px = v;
      if (from === "rem" || from === "em") px = v * root;
      if (from === "pt") px = v * 1.333;
      let result = px;
      if (to === "rem" || to === "em") result = px / root;
      if (to === "pt") result = px / 1.333;
      $("#cuOut").textContent = `${v}${from} ≈ ${result.toFixed(4)}${to}`;
    };
  }
  if (id === "boxshadow") {
    $("#bsGo").onclick = () => {
      const css = `${$("#bsX").value}px ${$("#bsY").value}px ${$("#bsBlur").value}px ${$("#bsSpread").value}px ${$("#bsColor").value}`;
      $("#bsPreview").style.boxShadow = css;
      $("#bsOut").textContent = `box-shadow: ${css};`;
    };
  }
  if (id === "borderradius") {
    $("#brGo").onclick = () => {
      const css = `${$("#brTL").value}px ${$("#brTR").value}px ${$("#brBR").value}px ${$("#brBL").value}px`;
      $("#brPreview").style.borderRadius = css;
      $("#brOut").textContent = `border-radius: ${css};`;
    };
  }
  if (id === "shade") {
    $("#shGo").onclick = () => {
      let hex = $("#shColor").value.replace("#", "");
      if (hex.length === 3) hex = hex.split("").map(x => x+x).join("");
      const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4),16);
      const n = Math.min(11, Math.max(3, +$("#shN").value || 7));
      let html = "";
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const nr = Math.round(r + (255 - r) * (1 - t) * 0.6 * (t < 0.5 ? 1 : 0) + r * t * 0.4);
        const ng = Math.round(g + (255 - g) * (1 - t) * 0.6 * (t < 0.5 ? 1 : 0) + g * t * 0.4);
        const nb = Math.round(b + (255 - b) * (1 - t) * 0.6 * (t < 0.5 ? 1 : 0) + b * t * 0.4);
        // simpler: mix with white/black
        const factor = (i / (n-1) - 0.5) * 2;
        const rr = Math.min(255, Math.max(0, Math.round(r + (factor > 0 ? (255-r)*factor : r*factor))));
        const gg = Math.min(255, Math.max(0, Math.round(g + (factor > 0 ? (255-g)*factor : g*factor))));
        const bb = Math.min(255, Math.max(0, Math.round(b + (factor > 0 ? (255-b)*factor : b*factor))));
        const h = "#" + [rr,gg,bb].map(x => x.toString(16).padStart(2,"0")).join("");
        html += `<div style="background:${h};height:50px;border-radius:8px;display:grid;place-items:center;font-size:10px;color:#fff;text-shadow:0 1px 2px #0008;cursor:pointer" onclick="navigator.clipboard.writeText('${h}')">${h}</div>`;
      }
      $("#shOut").innerHTML = html;
    };
  }
  if (id === "favicon") {
    $("#fvGo").onclick = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = $("#fvBg").value || "#7c8cff";
      ctx.beginPath(); ctx.roundRect(0, 0, 64, 64, 12); ctx.fill();
      ctx.fillStyle = $("#fvFg").value || "#fff";
      ctx.font = "bold 36px sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(($("#fvText").value || "L").slice(0, 2), 32, 34);
      $("#fvPreview").innerHTML = "";
      $("#fvPreview").appendChild(canvas);
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "favicon.png";
      a.click();
    };
  }
  if (id === "invert") {
    $("#invFile").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width; canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < data.data.length; i += 4) {
          data.data[i] = 255 - data.data[i];
          data.data[i+1] = 255 - data.data[i+1];
          data.data[i+2] = 255 - data.data[i+2];
        }
        ctx.putImageData(data, 0, 0);
        $("#invPreview").innerHTML = "";
        $("#invPreview").appendChild(canvas);
        canvas.style.maxWidth = "100%"; canvas.style.borderRadius = "8px";
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "inverted.png";
        a.click();
      };
      img.src = URL.createObjectURL(f);
    };
  }
  if (id === "discount") {
    $("#dcGo").onclick = () => {
      const price = +$("#dcPrice").value, off = +$("#dcOff").value;
      if (!price || !off) return toast("请填写完整");
      const final = price * off / 10;
      $("#dcOut").textContent = `原价: ${price}\n折扣: ${off} 折\n折后价: ${final.toFixed(2)}\n节省: ${(price - final).toFixed(2)}`;
    };
  }
  if (id === "vat") {
    $("#vatAdd").onclick = () => {
      const amt = +$("#vatAmt").value, rate = +$("#vatRate").value / 100;
      $("#vatOut").textContent = `未税: ${amt}\n税额: ${(amt * rate).toFixed(2)}\n含税: ${(amt * (1 + rate)).toFixed(2)}`;
    };
    $("#vatSub").onclick = () => {
      const amt = +$("#vatAmt").value, rate = +$("#vatRate").value / 100;
      const pure = amt / (1 + rate);
      $("#vatOut").textContent = `含税: ${amt}\n未税: ${pure.toFixed(2)}\n税额: ${(amt - pure).toFixed(2)}`;
    };
  }
  if (id === "idealweight") {
    $("#iwGo").onclick = () => {
      const h = +$("#iwH").value, sex = $("#iwSex").value;
      if (!h) return toast("请输入身高");
      // 简单公式：男 (h-80)*0.7  女 (h-70)*0.6  范围 ±10%
      const base = sex === "m" ? (h - 80) * 0.7 : (h - 70) * 0.6;
      $("#iwOut").textContent = `理想体重约: ${base.toFixed(1)} kg\n健康范围: ${(base*0.9).toFixed(1)} ~ ${(base*1.1).toFixed(1)} kg`;
    };
  }
  if (id === "daysuntil") {
    $("#duGo").onclick = () => {
      const target = new Date($("#duDate").value);
      if (isNaN(target)) return toast("请选择日期");
      const now = new Date();
      now.setHours(0,0,0,0);
      const days = Math.round((target - now) / 86400000);
      $("#duOut").textContent = days > 0 ? `还有 ${days} 天` : days === 0 ? "就是今天！" : `已经过去 ${-days} 天`;
    };
  }
  if (id === "randomname") {
    const first = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍却璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逯盖益桓公".split("");
    const last = "伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博诚先敬震振壮会思群豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘".split("");
    $("#rnGo").onclick = () => {
      const n = Math.min(50, +$("#rnN").value || 10);
      const names = [];
      for (let i = 0; i < n; i++) {
        const f = first[Math.floor(Math.random() * first.length)];
        const l = last[Math.floor(Math.random() * last.length)] + (Math.random() > 0.5 ? last[Math.floor(Math.random() * last.length)] : "");
        names.push(f + l);
      }
      $("#rnOut").textContent = names.join("\n");
    };
  }
  if (id === "guid") {
    $("#guidGo").onclick = () => {
      const n = Math.min(30, +$("#guidN").value || 5);
      $("#guidOut").textContent = Array.from({length: n}, () => "{" + crypto.randomUUID().toUpperCase() + "}").join("\n");
    };
  }
  if (id === "loremcn") {
    const words = "天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩一体率宾归王鸣凤在树白驹食场化被草木赖及万方".split("");
    $("#lcGo").onclick = () => {
      const n = Math.min(10, +$("#lcN").value || 3);
      let out = [];
      for (let i = 0; i < n; i++) {
        let p = "";
        for (let j = 0; j < 80 + Math.floor(Math.random()*40); j++) p += words[Math.floor(Math.random()*words.length)];
        out.push(p);
      }
      $("#lcOut").textContent = out.join("\n\n");
    };
  }
  if (id === "repeat") {
    $("#rpGo").onclick = () => {
      const n = Math.min(1000, +$("#rpN").value || 5);
      $("#rpOut").textContent = ($("#rpIn").value).repeat(n);
    };
  }
  if (id === "splitlen") {
    $("#slGo").onclick = () => {
      const text = $("#slIn").value, len = Math.max(1, +$("#slLen").value || 10);
      const parts = [];
      for (let i = 0; i < text.length; i += len) parts.push(text.slice(i, i + len));
      $("#slOut").textContent = parts.join("\n");
    };
  }
  if (id === "num2words") {
    const ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    function under1000(n) {
      if (n < 20) return ones[n];
      if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? "-" + ones[n%10] : "");
      return ones[Math.floor(n/100)] + " hundred" + (n%100 ? " " + under1000(n%100) : "");
    }
    $("#nwGo").onclick = () => {
      let n = Math.floor(+$("#nwIn").value);
      if (n < 0 || n > 999999) return toast("范围 0-999999");
      if (n === 0) { $("#nwOut").textContent = "zero"; return; }
      let res = "";
      if (n >= 1000) { res = under1000(Math.floor(n/1000)) + " thousand "; n %= 1000; }
      res += under1000(n);
      $("#nwOut").textContent = res.trim();
    };
  }
  if (id === "jwtgen") {
    $("#jgGo").onclick = () => {
      try {
        const h = btoa(unescape(encodeURIComponent($("#jgHead").value || '{"alg":"none","typ":"JWT"}'))).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
        const p = btoa(unescape(encodeURIComponent($("#jgPay").value || "{}"))).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
        $("#jgOut").textContent = h + "." + p + ".";
      } catch (e) { $("#jgOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "base32") {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    $("#b32Enc").onclick = () => {
      const input = new TextEncoder().encode($("#b32In").value);
      let bits = 0, value = 0, output = "";
      for (let i = 0; i < input.length; i++) {
        value = (value << 8) | input[i];
        bits += 8;
        while (bits >= 5) { output += alphabet[(value >>> (bits - 5)) & 31]; bits -= 5; }
      }
      if (bits > 0) output += alphabet[(value << (5 - bits)) & 31];
      $("#b32Out").textContent = output;
    };
    $("#b32Dec").onclick = () => {
      try {
        const str = $("#b32In").value.replace(/=+$/, "").toUpperCase();
        let bits = 0, value = 0, index = 0, output = [];
        for (let i = 0; i < str.length; i++) {
          const idx = alphabet.indexOf(str[i]);
          if (idx === -1) continue;
          value = (value << 5) | idx;
          bits += 5;
          if (bits >= 8) { output.push((value >>> (bits - 8)) & 255); bits -= 8; }
        }
        $("#b32Out").textContent = new TextDecoder().decode(new Uint8Array(output));
      } catch { $("#b32Out").textContent = "❌ 解码失败"; }
    };
  }
  if (id === "colorpalette") {
    $("#cpGo").onclick = () => {
      let hex = $("#cpColor").value.replace("#", "");
      if (hex.length === 3) hex = hex.split("").map(x => x+x).join("");
      const r = parseInt(hex.slice(0,2),16)/255, g = parseInt(hex.slice(2,4),16)/255, b = parseInt(hex.slice(4),16)/255;
      const max = Math.max(r,g,b), min = Math.min(r,g,b);
      let h = 0, s = 0, l = (max+min)/2;
      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        else if (max === g) h = ((b - r) / d + 2) / 6;
        else h = ((r - g) / d + 4) / 6;
      }
      const hslToHex = (hh, ss, ll) => {
        let rr, gg, bb;
        if (ss === 0) rr = gg = bb = ll;
        else {
          const hue2rgb = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q - p) * 6 * t; if (t < 1/2) return q; if (t < 2/3) return p + (q - p) * (2/3 - t) * 6; return p; };
          const q = ll < 0.5 ? ll * (1 + ss) : ll + ss - ll * ss;
          const p = 2 * ll - q;
          rr = hue2rgb(p, q, hh + 1/3); gg = hue2rgb(p, q, hh); bb = hue2rgb(p, q, hh - 1/3);
        }
        return "#" + [rr,gg,bb].map(x => Math.round(x*255).toString(16).padStart(2,"0")).join("");
      };
      const colors = [
        hslToHex(h, s, Math.max(0.1, l - 0.3)),
        hslToHex(h, s, Math.max(0.15, l - 0.15)),
        hslToHex(h, s, l),
        hslToHex(h, Math.min(1, s + 0.1), Math.min(0.9, l + 0.15)),
        hslToHex((h + 0.08) % 1, s, l)
      ];
      $("#cpOut").innerHTML = colors.map(c => `<div style="background:${c};height:60px;border-radius:8px;display:grid;place-items:center;font-size:11px;color:#fff;text-shadow:0 1px 2px #0008;cursor:pointer" onclick="navigator.clipboard.writeText('${c}')">${c}</div>`).join("");
    };
  }
  if (id === "textstat2") {
    $("#ts2Go").onclick = () => {
      const s = $("#ts2In").value;
      const chars = s.length;
      const noSpace = s.replace(/\s/g, "").length;
      const cn = (s.match(/[\u4e00-\u9fa5]/g) || []).length;
      const en = (s.match(/[a-zA-Z]/g) || []).length;
      const num = (s.match(/[0-9]/g) || []).length;
      const words = s.trim() ? s.trim().split(/\s+/).length : 0;
      const lines = s.split(/\r?\n/).length;
      $("#ts2Out").textContent = `总字符: ${chars}\n无空格字符: ${noSpace}\n中文字符: ${cn}\n英文字母: ${en}\n数字: ${num}\n词数: ${words}\n行数: ${lines}\nUTF-8 字节: ${new Blob([s]).size}`;
    };
  }
  if (id === "fuel") {
    $("#fuGo").onclick = () => {
      const dist = +$("#fuDist").value, consume = +$("#fuConsume").value, price = +$("#fuPrice").value;
      if (!dist || !consume || !price) return toast("请填写完整");
      const liter = dist * consume / 100;
      const cost = liter * price;
      $("#fuOut").textContent = `预计耗油: ${liter.toFixed(2)} L\n预计花费: ${cost.toFixed(2)} 元`;
    };
  }
  if (id === "urlparser2") {
    $("#up2Go").onclick = () => {
      try {
        const u = new URL($("#up2In").value);
        const params = [...u.searchParams.entries()];
        $("#up2Out").textContent = params.length ? params.map(([k,v]) => `${k} = ${v}`).join("\n") : "(无查询参数)";
      } catch { $("#up2Out").textContent = "❌ 无效 URL"; }
    };
  }

  // ===== 第四批工具逻辑 =====
  if (id === "textencrypt") {
    const crypt = (t, k, enc) => {
      let out = "";
      for (let i = 0; i < t.length; i++) {
        const c = t.charCodeAt(i) ^ k.charCodeAt(i % k.length) ^ (enc ? 0x5A : 0x5A);
        out += String.fromCharCode(c);
      }
      return out;
    };
    $("#teEnc").onclick = () => {
      const r = crypt($("#teIn").value, $("#teKey").value || "secret", true);
      $("#teOut").textContent = btoa(unescape(encodeURIComponent(r)));
    };
    $("#teDec").onclick = () => {
      try {
        const r = decodeURIComponent(escape(atob($("#teIn").value)));
        $("#teOut").textContent = crypt(r, $("#teKey").value || "secret", false);
      } catch { $("#teOut").textContent = "❌ 解密失败"; }
    };
  }
  if (id === "hashfile") {
    $("#hfFile").onchange = async e => {
      const f = e.target.files[0];
      if (!f) return;
      $("#hfOut").textContent = "计算中…";
      const buf = await f.arrayBuffer();
      const hash = await crypto.subtle.digest("SHA-256", buf);
      $("#hfOut").textContent = `文件: ${f.name}\n大小: ${(f.size/1024).toFixed(1)} KB\nSHA-256:\n` + [...new Uint8Array(hash)].map(x => x.toString(16).padStart(2,"0")).join("");
    };
  }
  if (id === "jsonpath") {
    $("#jpGo").onclick = () => {
      try {
        let obj = JSON.parse($("#jpJson").value);
        const path = $("#jpPath").value.trim().split(".");
        for (const p of path) { if (p) obj = obj[p]; }
        $("#jpOut").textContent = typeof obj === "object" ? JSON.stringify(obj, null, 2) : String(obj);
      } catch (e) { $("#jpOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "cssprefix") {
    $("#cpGo").onclick = () => {
      const prefixes = ["-webkit-", "-moz-", "-ms-", "-o-"];
      const props = ["transform","transition","user-select","box-shadow","border-radius","animation","flex","filter"];
      let s = $("#cpIn").value;
      props.forEach(p => {
        const re = new RegExp(`(^|\\s|;)(${p}\\s*:)`, "gi");
        if (re.test(s)) {
          prefixes.forEach(pre => { if (!s.includes(pre + p)) s = s.replace(new RegExp(`(${p}\\s*:)`, "i"), pre + p + ": $1".replace("$1","").trim() + "\n  $1"); });
        }
      });
      $("#cpOut").textContent = s;
    };
  }
  if (id === "mimetype") {
    const map = {png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",pdf:"application/pdf",json:"application/json",js:"application/javascript",css:"text/css",html:"text/html",txt:"text/plain",mp3:"audio/mpeg",mp4:"video/mp4",zip:"application/zip",xml:"application/xml",csv:"text/csv",ico:"image/x-icon",woff:"font/woff",woff2:"font/woff2"};
    $("#mtGo").onclick = () => {
      const ext = $("#mtIn").value.trim().toLowerCase().replace(".","");
      $("#mtOut").textContent = map[ext] || "未知扩展名，常见 MIME 未收录";
    };
  }
  if (id === "httpstatus") {
    const map = {200:"OK",201:"Created",204:"No Content",301:"Moved Permanently",302:"Found",304:"Not Modified",400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",418:"I'm a teapot",429:"Too Many Requests",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable"};
    $("#hsGo").onclick = () => {
      const c = +$("#hsIn").value;
      $("#hsOut").textContent = map[c] ? `${c} ${map[c]}` : `${c} （未收录的常见状态码）`;
    };
  }
  if (id === "useragentgen") {
    const uas = {
      chrome: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      firefox: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
      safari: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
      edge: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"
    };
    $("#uagGo").onclick = () => $("#uagOut").textContent = uas[$("#uagType").value];
  }
  if (id === "robots") {
    $("#rbGo").onclick = () => {
      let out = `User-agent: ${$("#rbAgent").value || "*"}\n`;
      $("#rbDis").value.split(/\r?\n/).filter(Boolean).forEach(p => out += `Disallow: ${p}\n`);
      if ($("#rbSite").value) out += `\nSitemap: ${$("#rbSite").value}\n`;
      $("#rbOut").textContent = out;
    };
  }
  if (id === "sitemap") {
    $("#smGo").onclick = () => {
      const urls = $("#smIn").value.split(/\r?\n/).filter(Boolean);
      let out = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
      urls.forEach(u => out += `  <url><loc>${u}</loc></url>\n`);
      out += "</urlset>";
      $("#smOut").textContent = out;
    };
  }
  if (id === "ogimage") {
    $("#ogOut").textContent = `常用 OG / 社交图片尺寸参考：\n\nFacebook / OG: 1200 × 630\nTwitter Card: 1200 × 600\nLinkedIn: 1200 × 627\nInstagram 正方形: 1080 × 1080\nInstagram 竖版: 1080 × 1350\n微信分享: 建议 500 × 400 以上`;
  }
  if (id === "passwordpin") {
    $("#pinGo").onclick = () => {
      const len = Math.min(12, Math.max(4, +$("#pinLen").value || 6));
      const n = Math.min(20, +$("#pinN").value || 5);
      const out = [];
      for (let i = 0; i < n; i++) {
        let s = "";
        const arr = new Uint32Array(len);
        crypto.getRandomValues(arr);
        for (const x of arr) s += (x % 10);
        out.push(s);
      }
      $("#pinOut").textContent = out.join("\n");
    };
  }
  if (id === "colorname") {
    $("#cnGo").onclick = () => {
      const names = {red:"#ff0000",green:"#008000",blue:"#0000ff",yellow:"#ffff00",orange:"#ffa500",purple:"#800080",pink:"#ffc0cb",cyan:"#00ffff",magenta:"#ff00ff",black:"#000000",white:"#ffffff",gray:"#808080",navy:"#000080",teal:"#008080",lime:"#00ff00",maroon:"#800000",olive:"#808000",silver:"#c0c0c0",gold:"#ffd700",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",brown:"#a52a2a",beige:"#f5f5dc"};
      let hex = $("#cnIn").value.replace("#","").toLowerCase();
      if (hex.length === 3) hex = hex.split("").map(x=>x+x).join("");
      const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4),16);
      let best = "unknown", bestD = 1e9;
      for (const [name, h] of Object.entries(names)) {
        const rr = parseInt(h.slice(1,3),16), gg = parseInt(h.slice(3,5),16), bb = parseInt(h.slice(5),16);
        const d = (r-rr)**2 + (g-gg)**2 + (b-bb)**2;
        if (d < bestD) { bestD = d; best = name; }
      }
      $("#cnOut").textContent = `近似颜色名: ${best}`;
    };
  }
  if (id === "aspectratio2") {
    $("#ar2Go").onclick = () => {
      const w = +$("#ar2W").value, h = +$("#ar2H").value, nw = +$("#ar2NewW").value;
      if (!w || !h || !nw) return;
      const nh = Math.round(nw * h / w);
      $("#ar2Out").textContent = `新尺寸: ${nw} × ${nh}`;
    };
  }
  if (id === "percentage2") {
    $("#pc2Go").onclick = () => {
      const mode = $("#pc2Mode").value, a = +$("#pc2A").value, b = +$("#pc2B").value;
      if (mode === "inc") $("#pc2Out").textContent = `${a} 增加 ${b}% = ${(a * (1 + b/100)).toFixed(4)}`;
      else if (mode === "dec") $("#pc2Out").textContent = `${a} 减少 ${b}% = ${(a * (1 - b/100)).toFixed(4)}`;
      else $("#pc2Out").textContent = b === 0 ? "除数不能为0" : `${a} 是 ${b} 的 ${((a/b)*100).toFixed(2)}%`;
    };
  }
  if (id === "randomnumber") {
    $("#rnGo2").onclick = () => {
      const min = +$("#rnMin").value, max = +$("#rnMax").value, n = Math.min(100, +$("#rnCount").value || 10);
      if (min > max) return toast("最小值不能大于最大值");
      const out = Array.from({length: n}, () => Math.floor(Math.random() * (max - min + 1)) + min);
      $("#rnOut2").textContent = out.join("\n");
    };
  }
  if (id === "listsort") {
    const lines = () => $("#lsIn").value.split(/\r?\n/).filter(x => x.length);
    $("#lsAlpha").onclick = () => $("#lsOut").textContent = lines().sort((a,b) => a.localeCompare(b)).join("\n");
    $("#lsNum").onclick = () => $("#lsOut").textContent = lines().sort((a,b) => parseFloat(a) - parseFloat(b)).join("\n");
    $("#lsLen").onclick = () => $("#lsOut").textContent = lines().sort((a,b) => a.length - b.length).join("\n");
  }
  if (id === "textwrap") {
    $("#twGo").onclick = () => {
      const w = Math.max(1, +$("#twW").value || 40);
      const text = $("#twIn").value;
      let out = "", line = "";
      for (const ch of text) {
        if (ch === "\n") { out += line + "\n"; line = ""; continue; }
        line += ch;
        if (line.length >= w) { out += line + "\n"; line = ""; }
      }
      out += line;
      $("#twOut").textContent = out;
    };
  }
  if (id === "camelcase") {
    const toWords = s => s.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_\-]+/g, " ").trim().split(/\s+/);
    $("#ccCamel").onclick = () => { const w = toWords($("#ccIn").value); $("#ccOut").textContent = w[0].toLowerCase() + w.slice(1).map(x => x[0].toUpperCase()+x.slice(1).toLowerCase()).join(""); };
    $("#ccSnake").onclick = () => $("#ccOut").textContent = toWords($("#ccIn").value).map(x => x.toLowerCase()).join("_");
    $("#ccKebab").onclick = () => $("#ccOut").textContent = toWords($("#ccIn").value).map(x => x.toLowerCase()).join("-");
    $("#ccPascal").onclick = () => $("#ccOut").textContent = toWords($("#ccIn").value).map(x => x[0].toUpperCase()+x.slice(1).toLowerCase()).join("");
  }
  if (id === "loremhtml") {
    $("#lhGo").onclick = () => {
      const n = Math.min(10, +$("#lhN").value || 3);
      const p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
      $("#lhOut").textContent = Array.from({length: n}, () => `<p>${p}</p>`).join("\n");
    };
  }
  if (id === "qrwifi") {
    $("#qwGo").onclick = () => {
      const ssid = $("#qwSsid").value, pass = $("#qwPass").value, enc = $("#qwEnc").value;
      const content = `WIFI:T:${enc};S:${ssid};P:${pass};;`;
      $("#qwOut").textContent = content + "\n\n（可复制到二维码生成工具使用）";
    };
  }
  if (id === "timestampms") {
    $("#tmsNow").textContent = Date.now();
    $("#tmsToDate").onclick = () => {
      const t = +$("#tmsIn").value;
      $("#tmsNow").textContent = isNaN(t) ? "无效" : new Date(t).toLocaleString() + "\nISO: " + new Date(t).toISOString();
    };
  }
  if (id === "cronnext") {
    $("#cnGo").onclick = () => {
      const parts = $("#cnIn").value.trim().split(/\s+/);
      if (parts.length !== 5) { $("#cnOut").textContent = "请输入 5 位 Cron"; return; }
      $("#cnOut").textContent = `分钟: ${parts[0]}\n小时: ${parts[1]}\n日期: ${parts[2]}\n月份: ${parts[3]}\n星期: ${parts[4]}\n\n（简易说明，复杂表达式请用专业工具）`;
    };
  }
  if (id === "base64file") {
    $("#bfFile").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => $("#bfOut").value = r.result;
      r.readAsDataURL(f);
    };
    $("#bfCopy").onclick = () => copyText($("#bfOut").value);
  }
  if (id === "imageinfo2") {
    $("#ii2File").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => {
        $("#ii2Out").textContent = `文件名: ${f.name}\n类型: ${f.type}\n大小: ${(f.size/1024).toFixed(1)} KB\n尺寸: ${img.width} × ${img.height}\n宽高比: ${(img.width/img.height).toFixed(3)}`;
      };
      img.src = URL.createObjectURL(f);
    };
  }
  if (id === "canvascolor") {
    let canvas, ctx;
    $("#ccFile").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => {
        canvas = $("#ccCanvas");
        canvas.width = img.width; canvas.height = img.height;
        ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvas.onclick = ev => {
          const rect = canvas.getBoundingClientRect();
          const x = Math.floor((ev.clientX - rect.left) * (canvas.width / rect.width));
          const y = Math.floor((ev.clientY - rect.top) * (canvas.height / rect.height));
          const p = ctx.getImageData(x, y, 1, 1).data;
          const hex = "#" + [p[0],p[1],p[2]].map(v => v.toString(16).padStart(2,"0")).join("");
          $("#ccOut").textContent = `位置: (${x}, ${y})\nRGB: ${p[0]}, ${p[1]}, ${p[2]}\nHEX: ${hex}`;
        };
      };
      img.src = URL.createObjectURL(f);
    };
  }
  if (id === "text2img") {
    $("#tiGo").onclick = () => {
      const text = $("#tiText").value || "Text";
      const size = +$("#tiSize").value || 48;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = `bold ${size}px sans-serif`;
      const w = ctx.measureText(text).width + 40;
      canvas.width = w; canvas.height = size + 40;
      ctx.fillStyle = $("#tiBg").value || "#7c8cff";
      ctx.fillRect(0, 0, w, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.font = `bold ${size}px sans-serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(text, w/2, canvas.height/2);
      $("#tiPreview").innerHTML = "";
      $("#tiPreview").appendChild(canvas);
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "text.png";
      a.click();
    };
  }
  if (id === "progress") {
    $("#pgGo").onclick = () => {
      const v = Math.min(100, Math.max(0, +$("#pgVal").value || 0));
      const c = $("#pgColor").value || "#7c8cff";
      $("#pgOut").textContent = `.progress {\n  height: 8px;\n  background: #eee;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress > div {\n  width: ${v}%;\n  height: 100%;\n  background: ${c};\n}`;
    };
  }
  if (id === "loading") {
    $("#ldGo").onclick = () => {
      $("#ldOut").textContent = `.loader {\n  width: 40px; height: 40px;\n  border: 4px solid #eee;\n  border-top-color: #7c8cff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin { to { transform: rotate(360deg); } }`;
    };
  }
  if (id === "buttoncss") {
    $("#btnGo").onclick = () => {
      const text = $("#btnText").value || "Button";
      const bg = $("#btnBg").value || "#7c8cff";
      $("#btnOut").textContent = `.btn {\n  display: inline-block;\n  padding: 10px 20px;\n  background: ${bg};\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n/* HTML: <button class="btn">${text}</button> */`;
    };
  }
  if (id === "tablegen") {
    $("#tgGo").onclick = () => {
      const rows = Math.min(20, +$("#tgRows").value || 3);
      const cols = Math.min(10, +$("#tgCols").value || 3);
      let html = "<table border=\"1\" cellpadding=\"8\">\n";
      for (let i = 0; i < rows; i++) {
        html += "  <tr>" + Array.from({length: cols}, (_, j) => `<td>R${i+1}C${j+1}</td>`).join("") + "</tr>\n";
      }
      html += "</table>";
      $("#tgOut").textContent = html;
    };
  }
  if (id === "listgen") {
    $("#lgGo").onclick = () => {
      const items = $("#lgIn").value.split(/\r?\n/).filter(Boolean);
      const tag = $("#lgType").value;
      $("#lgOut").textContent = `<${tag}>\n` + items.map(i => `  <li>${i}</li>`).join("\n") + `\n</${tag}>`;
    };
  }
  if (id === "metagen") {
    $("#mgGo").onclick = () => {
      $("#mgOut").textContent = `<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${$("#mgTitle").value}</title>\n<meta name="description" content="${$("#mgDesc").value}">`;
    };
  }
  if (id === "htaccess") {
    $("#htOut").textContent = `# 强制 HTTPS\nRewriteEngine On\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]\n\n# 隐藏 index\nDirectoryIndex index.html\n\n# 禁止目录浏览\nOptions -Indexes`;
  }
  if (id === "nginx") {
    $("#nxOut").textContent = `# 简单反向代理\nlocation /api/ {\n  proxy_pass http://127.0.0.1:3000/;\n  proxy_set_header Host $host;\n  proxy_set_header X-Real-IP $remote_addr;\n}\n\n# HTTPS 示例\nlisten 443 ssl;\nssl_certificate /path/fullchain.pem;\nssl_certificate_key /path/privkey.pem;`;
  }
  if (id === "docker") {
    $("#dkOut").textContent = `docker ps -a\ndocker images\ndocker build -t myapp .\ndocker run -d -p 8080:80 myapp\ndocker logs -f <container>\ndocker exec -it <container> sh\ndocker stop <container>\ndocker rm <container>\ndocker rmi <image>\ndocker-compose up -d\ndocker system prune -f`;
  }
  if (id === "gitcmd") {
    $("#gtOut").textContent = `git status\ngit add .\ngit commit -m "message"\ngit push\ngit pull\ngit checkout -b feature\ngit merge main\ngit log --oneline\ngit diff\ngit stash\ngit stash pop\ngit reset --hard HEAD\ngit remote -v\ngit clone <url>`;
  }
  if (id === "regexlib") {
    $("#rlOut").textContent = `邮箱: ^[\\w.-]+@[\\w.-]+\\.\\w+$\n手机(中国): ^1[3-9]\\d{9}$\nURL: https?://[\\w.-]+(?:\\.[\\w.-]+)+(?:[/?#][^\\s]*)?\nIPv4: ^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$\n身份证: ^\\d{17}[\\dXx]$\n中文: [\\u4e00-\\u9fa5]+\n日期 YYYY-MM-DD: ^\\d{4}-\\d{2}-\\d{2}$`;
  }
  if (id === "emoji") {
    const list = "😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗☺😚😙🥲😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😏😒🙄😬😮‍💨🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵🤯🤠🥳🥸😎🤓🧐😕😟🙁☹😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾";
    $("#emOut").innerHTML = [...list].map(e => `<span style="cursor:pointer;text-align:center;padding:8px;border-radius:8px;background:var(--panel2)" onclick="navigator.clipboard.writeText('${e}');this.style.background='var(--accent)'">${e}</span>`).join("");
  }
  if (id === "symbol") {
    const list = "★☆♠♣♥♦✓✔✕✖✚✱✦✧✩✪✫✬✭✮✯✰①②③④⑤⑥⑦⑧⑨⑩↑↓←→↔↕⇒⇔∀∂∃∅∇∈∏∑√∞∠∧∨∩∪∫∴∵≈≠≤≥⌘⌥⇧⌃";
    $("#syOut").innerHTML = [...list].map(e => `<span style="cursor:pointer;text-align:center;padding:8px;border-radius:8px;background:var(--panel2)" onclick="navigator.clipboard.writeText('${e}')">${e}</span>`).join("");
  }
  if (id === "currencyfmt") {
    $("#cfGo").onclick = () => {
      const amt = +$("#cfAmt").value, cur = $("#cfCur").value;
      try {
        $("#cfOut").textContent = new Intl.NumberFormat("zh-CN", {style: "currency", currency: cur}).format(amt);
      } catch { $("#cfOut").textContent = amt.toFixed(2) + " " + cur; }
    };
  }
  if (id === "bytesize") {
    $("#bsGo").onclick = () => {
      let n = +$("#bsIn").value;
      const u = ["B","KB","MB","GB","TB","PB"];
      let i = 0;
      while (n >= 1024 && i < u.length-1) { n /= 1024; i++; }
      $("#bsOut").textContent = n.toFixed(2) + " " + u[i];
    };
  }
  if (id === "temperature") {
    $("#tpGo").onclick = () => {
      const v = +$("#tpVal").value, f = $("#tpFrom").value, t = $("#tpTo").value;
      let c = f === "C" ? v : f === "F" ? (v-32)*5/9 : v-273.15;
      const r = t === "C" ? c : t === "F" ? c*9/5+32 : c+273.15;
      $("#tpOut").textContent = `${v} °${f} = ${r.toFixed(2)} °${t}`;
    };
  }
  if (id === "lengthunit") {
    const m = {m:1, km:1000, cm:0.01, mm:0.001, mi:1609.344, yd:0.9144, ft:0.3048, in:0.0254};
    $("#luGo").onclick = () => {
      const v = +$("#luVal").value, f = $("#luFrom").value, t = $("#luTo").value;
      $("#luOut").textContent = `${v} ${f} = ${(v * m[f] / m[t]).toFixed(6)} ${t}`;
    };
  }
  if (id === "weightunit") {
    const m = {kg:1, g:0.001, mg:0.000001, lb:0.45359237, oz:0.028349523125, t:1000};
    $("#wuGo").onclick = () => {
      const v = +$("#wuVal").value, f = $("#wuFrom").value, t = $("#wuTo").value;
      $("#wuOut").textContent = `${v} ${f} = ${(v * m[f] / m[t]).toFixed(6)} ${t}`;
    };
  }
  if (id === "speedunit") {
    const m = {kmh:1, mph:1.609344, ms:3.6, knot:1.852};
    $("#suGo").onclick = () => {
      const v = +$("#suVal").value, f = $("#suFrom").value, t = $("#suTo").value;
      $("#suOut").textContent = `${v} ${f} = ${(v * m[f] / m[t]).toFixed(4)} ${t}`;
    };
  }
  if (id === "datarate") {
    // normalize to Mbps
    const toMbps = {Mbps:1, "Mb/s":1, "MB/s":8, Gbps:1000};
    $("#drGo").onclick = () => {
      const v = +$("#drVal").value, f = $("#drFrom").value, t = $("#drTo").value;
      const mbps = v * toMbps[f];
      $("#drOut").textContent = `${v} ${f} = ${(mbps / toMbps[t]).toFixed(4)} ${t}`;
    };
  }
  if (id === "angle") {
    $("#agGo").onclick = () => {
      const v = +$("#agVal").value, f = $("#agFrom").value, t = $("#agTo").value;
      const deg = f === "deg" ? v : v * 180 / Math.PI;
      const r = t === "deg" ? deg : deg * Math.PI / 180;
      $("#agOut").textContent = `${v} ${f} = ${r} ${t}`;
    };
  }
  if (id === "fibonacci") {
    $("#fbGo").onclick = () => {
      const n = Math.min(100, +$("#fbN").value || 15);
      const arr = [0, 1];
      while (arr.length < n) arr.push(arr[arr.length-1] + arr[arr.length-2]);
      $("#fbOut").textContent = arr.slice(0, n).join(", ");
    };
  }
  if (id === "prime") {
    $("#prGo").onclick = () => {
      const n = Math.floor(+$("#prIn").value);
      if (n < 2) { $("#prOut").textContent = "不是质数"; return; }
      let isPrime = true;
      for (let i = 2; i * i <= n; i++) if (n % i === 0) { isPrime = false; break; }
      $("#prOut").textContent = isPrime ? `${n} 是质数` : `${n} 不是质数`;
    };
  }
  if (id === "gcdlcm") {
    $("#glGo").onclick = () => {
      let a = Math.abs(+$("#glA").value), b = Math.abs(+$("#glB").value);
      const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
      const g = gcd(a, b);
      $("#glOut").textContent = `最大公约数 GCD: ${g}\n最小公倍数 LCM: ${a && b ? (a / g) * b : 0}`;
    };
  }

  // ===== 第五批逻辑 =====
  if (id === "textreverse") {
    $("#trChar").onclick = () => $("#trOut").textContent = [...$("#trIn").value].reverse().join("");
    $("#trLine").onclick = () => $("#trOut").textContent = $("#trIn").value.split(/\r?\n/).reverse().join("\n");
  }
  if (id === "textcount") {
    $("#tcGo").onclick = () => {
      const text = $("#tcIn").value, word = $("#tcWord").value;
      if (!word) return toast("请输入要统计的内容");
      const count = text.split(word).length - 1;
      $("#tcOut").textContent = `"${word}" 出现了 ${count} 次`;
    };
  }
  if (id === "slug") {
    $("#slGo").onclick = () => {
      let s = $("#slIn").value.toLowerCase().trim();
      s = s.replace(/[\s_]+/g, "-").replace(/[^\w\u4e00-\u9fa5\-]/g, "").replace(/\-+/g, "-").replace(/^\-|\-$/g, "");
      $("#slOut").textContent = s || "(空)";
    };
  }
  if (id === "markdown2html") {
    $("#mdGo").onclick = () => {
      let s = $("#mdIn").value
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*)\*/gim, "<em>$1</em>")
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2'>")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/^\- (.*$)/gim, "<li>$1</li>")
        .replace(/\n/gim, "<br>");
      $("#mdOut").textContent = s;
    };
  }
  if (id === "html2text") {
    $("#htGo").onclick = () => {
      const tmp = document.createElement("div");
      tmp.innerHTML = $("#htIn").value;
      $("#htOut").textContent = tmp.textContent || tmp.innerText || "";
    };
  }
  if (id === "rot13") {
    $("#roGo").onclick = () => {
      $("#roOut").textContent = $("#roIn").value.replace(/[a-zA-Z]/g, c => {
        const base = c <= "Z" ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
      });
    };
  }
  if (id === "caesar") {
    const caesar = (str, shift) => str.replace(/[a-zA-Z]/g, c => {
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + shift + 26) % 26 + base);
    });
    $("#caEnc").onclick = () => $("#caOut").textContent = caesar($("#caIn").value, +$("#caShift").value || 3);
    $("#caDec").onclick = () => $("#caOut").textContent = caesar($("#caIn").value, -(+$("#caShift").value || 3));
  }
  if (id === "base58") {
    const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    $("#b58Enc").onclick = () => {
      try {
        const bytes = new TextEncoder().encode($("#b58In").value);
        let num = BigInt(0);
        for (const b of bytes) num = num * 256n + BigInt(b);
        let str = "";
        while (num > 0) { str = ALPHABET[Number(num % 58n)] + str; num /= 58n; }
        for (const b of bytes) { if (b === 0) str = "1" + str; else break; }
        $("#b58Out").textContent = str || "1";
      } catch (e) { $("#b58Out").textContent = "❌ " + e.message; }
    };
    $("#b58Dec").onclick = () => {
      try {
        const str = $("#b58In").value;
        let num = BigInt(0);
        for (const c of str) { const i = ALPHABET.indexOf(c); if (i < 0) throw new Error("无效字符"); num = num * 58n + BigInt(i); }
        const bytes = [];
        while (num > 0) { bytes.unshift(Number(num % 256n)); num /= 256n; }
        for (const c of str) { if (c === "1") bytes.unshift(0); else break; }
        $("#b58Out").textContent = new TextDecoder().decode(new Uint8Array(bytes));
      } catch (e) { $("#b58Out").textContent = "❌ " + e.message; }
    };
  }
  if (id === "urlsafe") {
    $("#usEnc").onclick = () => {
      $("#usOut").textContent = btoa(unescape(encodeURIComponent($("#usIn").value))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
    };
    $("#usDec").onclick = () => {
      try {
        let s = $("#usIn").value.replace(/-/g,"+").replace(/_/g,"/");
        while (s.length % 4) s += "=";
        $("#usOut").textContent = decodeURIComponent(escape(atob(s)));
      } catch { $("#usOut").textContent = "❌ 解码失败"; }
    };
  }
  if (id === "hexdump") {
    $("#hdGo").onclick = () => {
      const bytes = new TextEncoder().encode($("#hdIn").value);
      let out = "";
      for (let i = 0; i < bytes.length; i += 16) {
        const slice = bytes.slice(i, i+16);
        const hex = [...slice].map(b => b.toString(16).padStart(2,"0")).join(" ");
        const asc = [...slice].map(b => b >= 32 && b < 127 ? String.fromCharCode(b) : ".").join("");
        out += i.toString(16).padStart(8,"0") + "  " + hex.padEnd(48) + "  |" + asc + "|\n";
      }
      $("#hdOut").textContent = out || "(空)";
    };
  }
  if (id === "passwordgen2") {
    $("#pg2Go").onclick = () => {
      let chars = "";
      if ($("#pg2Lower").checked) chars += "abcdefghijklmnopqrstuvwxyz";
      if ($("#pg2Upper").checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if ($("#pg2Num").checked) chars += "0123456789";
      if ($("#pg2Sym").checked) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
      if (!chars) return toast("至少选一种字符");
      const len = Math.min(64, +$("#pg2Len").value || 16);
      const n = Math.min(20, +$("#pg2N").value || 5);
      const out = [];
      for (let i = 0; i < n; i++) {
        const arr = new Uint32Array(len);
        crypto.getRandomValues(arr);
        out.push(Array.from(arr, x => chars[x % chars.length]).join(""));
      }
      $("#pg2Out").textContent = out.join("\n");
    };
  }
  if (id === "colorconvert") {
    $("#ccGo").onclick = () => {
      let v = $("#ccIn").value.trim();
      if (v.startsWith("#")) {
        let hex = v.slice(1);
        if (hex.length === 3) hex = hex.split("").map(x=>x+x).join("");
        const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4),16);
        const r1=r/255,g1=g/255,b1=b/255;
        const max=Math.max(r1,g1,b1),min=Math.min(r1,g1,b1);
        let h=0,s=0,l=(max+min)/2;
        if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);if(max===r1)h=((g1-b1)/d+(g1<b1?6:0))/6;else if(max===g1)h=((b1-r1)/d+2)/6;else h=((r1-g1)/d+4)/6;}
        $("#ccOut").textContent = `HEX: #${hex}\nRGB: rgb(${r}, ${g}, ${b})\nHSL: hsl(${Math.round(h*360)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`;
      } else {
        $("#ccOut").textContent = "请输入 # 开头的 HEX 颜色";
      }
    };
  }
  if (id === "numberfmt") {
    $("#nfAdd").onclick = () => {
      const n = parseFloat($("#nfIn").value.replace(/,/g,""));
      $("#nfOut").textContent = isNaN(n) ? "无效数字" : n.toLocaleString("en-US");
    };
    $("#nfRem").onclick = () => $("#nfOut").textContent = $("#nfIn").value.replace(/,/g,"");
  }
  if (id === "tip") {
    $("#tipGo").onclick = () => {
      const amt = +$("#tipAmt").value, pct = +$("#tipPct").value;
      const tip = amt * pct / 100;
      $("#tipOut").textContent = `小费: ${tip.toFixed(2)}\n总计: ${(amt+tip).toFixed(2)}`;
    };
  }
  if (id === "splitbill") {
    $("#sbGo").onclick = () => {
      const amt = +$("#sbAmt").value, n = +$("#sbN").value;
      if (!n) return;
      $("#sbOut").textContent = `每人应付: ${(amt / n).toFixed(2)}`;
    };
  }
  if (id === "uuidbatch") {
    $("#ubGo").onclick = () => {
      const n = Math.min(50, +$("#ubN").value || 10);
      $("#ubOut").textContent = Array.from({length:n}, () => crypto.randomUUID()).join("\n");
    };
  }
  if (id === "randomcolor2") {
    $("#rc2Go").onclick = () => {
      const n = Math.min(30, +$("#rc2N").value || 12);
      let html = "";
      for (let i=0;i<n;i++) {
        const h = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
        html += `<div style="background:${h};height:50px;border-radius:8px;display:grid;place-items:center;font-size:10px;color:#fff;text-shadow:0 1px 2px #000;cursor:pointer" onclick="navigator.clipboard.writeText('${h}')">${h}</div>`;
      }
      $("#rc2Out").innerHTML = html;
    };
  }
  if (id === "br") {
    $("#brLF").onclick = () => $("#brOut").textContent = $("#brIn").value.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
    $("#brCRLF").onclick = () => $("#brOut").textContent = $("#brIn").value.replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\r\n");
    $("#brCR").onclick = () => $("#brOut").textContent = $("#brIn").value.replace(/\r\n/g,"\n").replace(/\n/g,"\r");
  }
  if (id === "tabspace") {
    $("#ts2space").onclick = () => {
      const n = +$("#tsN").value || 2;
      $("#tsOut").textContent = $("#tsIn").value.replace(/\t/g, " ".repeat(n));
    };
    $("#ts2tab").onclick = () => {
      const n = +$("#tsN").value || 2;
      const re = new RegExp(" ".repeat(n), "g");
      $("#tsOut").textContent = $("#tsIn").value.replace(re, "\t");
    };
  }
  if (id === "duplicate") {
    $("#duGo").onclick = () => {
      const lines = $("#duIn").value.split(/\r?\n/);
      const seen = {}, dups = [];
      lines.forEach(l => { if (seen[l]) { if (!dups.includes(l)) dups.push(l); } else seen[l]=1; });
      $("#duOut").textContent = dups.length ? dups.join("\n") : "没有重复行";
    };
  }
  if (id === "unique") {
    $("#unGo").onclick = () => {
      const lines = $("#unIn").value.split(/\r?\n/);
      const seen = new Set(), out = [];
      lines.forEach(l => { if (!seen.has(l)) { seen.add(l); out.push(l); } });
      $("#unOut").textContent = out.join("\n");
    };
  }
  if (id === "opengraph") {
    $("#ogGo").onclick = () => {
      $("#ogOut").textContent = `<meta property="og:title" content="${$("#ogTitle").value}">\n<meta property="og:description" content="${$("#ogDesc").value}">\n<meta property="og:image" content="${$("#ogImg").value}">\n<meta property="og:url" content="${$("#ogUrl").value}">\n<meta property="og:type" content="website">`;
    };
  }
  if (id === "json2ts") {
    $("#jtGo").onclick = () => {
      try {
        const obj = JSON.parse($("#jtIn").value);
        const toType = v => Array.isArray(v) ? "any[]" : typeof v === "object" && v ? "object" : typeof v;
        let out = "interface Root {\n";
        for (const [k,v] of Object.entries(obj)) out += `  ${k}: ${toType(v)};\n`;
        out += "}";
        $("#jtOut").textContent = out;
      } catch (e) { $("#jtOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "flexbox") {
    $("#fxOut").textContent = `display: flex;\nflex-direction: row | column;\njustify-content: flex-start | center | space-between | space-around;\nalign-items: stretch | center | flex-start | flex-end;\nflex-wrap: nowrap | wrap;\ngap: 16px;\n\n子元素:\nflex: 1;\nalign-self: center;`;
  }
  if (id === "mediaquery") {
    $("#mqOut").textContent = `/* 手机 */\n@media (max-width: 640px) { }\n\n/* 平板 */\n@media (min-width: 641px) and (max-width: 1024px) { }\n\n/* 桌面 */\n@media (min-width: 1025px) { }\n\n/* 常用断点 */\n/* sm: 640px  md: 768px  lg: 1024px  xl: 1280px */`;
  }
  if (id === "seo") {
    $("#seoOut").textContent = `基础 SEO 检查清单：\n\n✓ <title> 唯一且含关键词\n✓ meta description 120-160 字\n✓ 只有一个 h1\n✓ 图片都有 alt\n✓ 使用语义化标签\n✓ 移动端友好（viewport）\n✓ 有 canonical 标签\n✓ 有 Open Graph 标签\n✓ 页面加载速度优化\n✓ HTTPS`;
  }
  if (id === "keyboard") {
    const list = [["⌘","Command"],["⌥","Option"],["⇧","Shift"],["⌃","Control"],["⌫","Delete"],["⇥","Tab"],["↩","Return"],["⎋","Esc"],["↑","上"],["↓","下"],["←","左"],["→","右"],["⌃⌘","Ctrl+Cmd"],["⇧⌘","Shift+Cmd"]];
    $("#kbOut").innerHTML = list.map(([s,n]) => `<div style="text-align:center;padding:10px;background:var(--panel2);border-radius:8px;cursor:pointer" onclick="navigator.clipboard.writeText('${s}')"><div style="font-size:22px">${s}</div><div style="font-size:11px;opacity:.7">${n}</div></div>`).join("");
  }
  if (id === "workdays") {
    $("#wdGo").onclick = () => {
      const s = new Date($("#wdStart").value), e = new Date($("#wdEnd").value);
      if (isNaN(s) || isNaN(e) || e < s) return toast("请选择正确日期");
      let count = 0, cur = new Date(s);
      while (cur <= e) {
        const day = cur.getDay();
        if (day !== 0 && day !== 6) count++;
        cur.setDate(cur.getDate() + 1);
      }
      $("#wdOut").textContent = `工作日天数: ${count} 天（不含周六日）`;
    };
  }
  if (id === "agecalc2") {
    $("#ac2Go").onclick = () => {
      const birth = new Date($("#ac2Birth").value);
      if (isNaN(birth)) return toast("请选择出生日期");
      const now = new Date();
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
      if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
      if (months < 0) { years--; months += 12; }
      const totalDays = Math.floor((now - birth) / 86400000);
      $("#ac2Out").textContent = `精确年龄: ${years} 岁 ${months} 个月 ${days} 天\n总共: ${totalDays} 天`;
    };
  }
  if (id === "percentage3") {
    $("#pc3Go").onclick = () => {
      const mode = $("#pc3Mode").value, a = +$("#pc3A").value, b = +$("#pc3B").value;
      if (mode === "p1") $("#pc3Out").textContent = `${a} 的 ${b}% = ${(a * b / 100).toFixed(4)}`;
      else if (mode === "p2") $("#pc3Out").textContent = b === 0 ? "除数不能为0" : `${a} 是 ${b} 的 ${((a/b)*100).toFixed(2)}%`;
      else $("#pc3Out").textContent = a === 0 ? "原值不能为0" : `从 ${a} 到 ${b} 变化了 ${(((b-a)/a)*100).toFixed(2)}%`;
    };
  }
  if (id === "scientific") {
    $("#scTo").onclick = () => {
      const n = +$("#scIn").value;
      $("#scOut").textContent = isNaN(n) ? "无效数字" : n.toExponential();
    };
    $("#scFrom").onclick = () => {
      const n = Number($("#scIn").value);
      $("#scOut").textContent = isNaN(n) ? "无效" : String(n);
    };
  }
  if (id === "countdown2") {
    let timer;
    $("#cd2Go").onclick = () => {
      clearInterval(timer);
      const target = new Date($("#cd2In").value).getTime();
      if (isNaN(target)) return toast("请选择日期时间");
      timer = setInterval(() => {
        const diff = target - Date.now();
        if (diff <= 0) { $("#cd2Out").textContent = "时间到！"; clearInterval(timer); return; }
        const d = Math.floor(diff/86400000), h = Math.floor((diff%86400000)/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
        $("#cd2Out").textContent = `${d} 天 ${h} 时 ${m} 分 ${s} 秒`;
      }, 1000);
    };
  }

  // ===== 第六批逻辑 =====
  if (id === "textreplace") {
    $("#trepGo").onclick = () => {
      const find = $("#trepFind").value;
      if (!find) return toast("请输入查找内容");
      $("#trepOut").textContent = $("#trepIn").value.split(find).join($("#trepTo").value);
    };
  }
  if (id === "lineNumber") {
    $("#lnGo").onclick = () => {
      const lines = $("#lnIn").value.split(/\r?\n/);
      $("#lnOut").textContent = lines.map((l, i) => `${String(i+1).padStart(3)} | ${l}`).join("\n");
    };
  }
  if (id === "prefixsuffix") {
    $("#psGo").onclick = () => {
      const pre = $("#psPre").value, suf = $("#psSuf").value;
      $("#psOut").textContent = $("#psIn").value.split(/\r?\n/).map(l => pre + l + suf).join("\n");
    };
  }
  if (id === "extractemails") {
    $("#eeGo").onclick = () => {
      const m = $("#eeIn").value.match(/[\w.-]+@[\w.-]+\.\w+/g) || [];
      $("#eeOut").textContent = m.length ? [...new Set(m)].join("\n") : "未找到邮箱";
    };
  }
  if (id === "extracturls") {
    $("#euGo").onclick = () => {
      const m = $("#euIn").value.match(/https?:\/\/[^\s<>"{}|\\^`[\]]+/g) || [];
      $("#euOut").textContent = m.length ? [...new Set(m)].join("\n") : "未找到链接";
    };
  }
  if (id === "extractphones") {
    $("#epGo").onclick = () => {
      const m = $("#epIn").value.match(/1[3-9]\d{9}/g) || [];
      $("#epOut").textContent = m.length ? [...new Set(m)].join("\n") : "未找到手机号";
    };
  }
  if (id === "wordcount2") {
    $("#wc2Go").onclick = () => {
      const s = $("#wc2In").value;
      const cn = (s.match(/[\u4e00-\u9fa5]/g) || []).length;
      const en = (s.match(/[a-zA-Z]+/g) || []).length;
      const num = (s.match(/\d+/g) || []).length;
      $("#wc2Out").textContent = `中文字符: ${cn}\n英文单词: ${en}\n数字串: ${num}\n总字符: ${s.length}`;
    };
  }
  if (id === "textcompress") {
    $("#tcoGo").onclick = () => {
      let s = $("#tcoIn").value.replace(/[ \t]+/g, " ").replace(/\n\s*\n/g, "\n\n").trim();
      $("#tcoOut").textContent = s;
    };
  }
  if (id === "base64url") {
    $("#b64uEnc").onclick = () => {
      $("#b64uOut").textContent = btoa(unescape(encodeURIComponent($("#b64uIn").value))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
    };
    $("#b64uDec").onclick = () => {
      try {
        let s = $("#b64uIn").value.replace(/-/g,"+").replace(/_/g,"/");
        while (s.length % 4) s += "=";
        $("#b64uOut").textContent = decodeURIComponent(escape(atob(s)));
      } catch { $("#b64uOut").textContent = "❌ 解码失败"; }
    };
  }
  if (id === "htmlentity") {
    $("#heEnc").onclick = () => {
      const d = document.createElement("div");
      d.textContent = $("#heIn").value;
      $("#heOut").textContent = d.innerHTML;
    };
    $("#heDec").onclick = () => {
      const d = document.createElement("div");
      d.innerHTML = $("#heIn").value;
      $("#heOut").textContent = d.textContent;
    };
  }
  if (id === "jwtpayload") {
    $("#jwpGo").onclick = () => {
      try {
        const parts = $("#jwpIn").value.split(".");
        if (parts.length < 2) throw new Error("无效 JWT");
        let payload = parts[1].replace(/-/g,"+").replace(/_/g,"/");
        while (payload.length % 4) payload += "=";
        const json = JSON.parse(decodeURIComponent(escape(atob(payload))));
        $("#jwpOut").textContent = JSON.stringify(json, null, 2);
      } catch (e) { $("#jwpOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "hashcompare") {
    $("#hcGo").onclick = async () => {
      const enc = new TextEncoder();
      const hash = async t => {
        const buf = await crypto.subtle.digest("SHA-256", enc.encode(t));
        return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2,"0")).join("");
      };
      const ha = await hash($("#hcA").value), hb = await hash($("#hcB").value);
      $("#hcOut").textContent = `A: ${ha}\nB: ${hb}\n结果: ${ha === hb ? "✅ 一致" : "❌ 不一致"}`;
    };
  }
  if (id === "regexreplace") {
    $("#rrGo").onclick = () => {
      try {
        const re = new RegExp($("#rrReg").value, "g");
        $("#rrOut").textContent = $("#rrIn").value.replace(re, $("#rrTo").value);
      } catch (e) { $("#rrOut").textContent = "❌ 正则错误: " + e.message; }
    };
  }
  if (id === "chmodcalc") {
    $("#cmGo").onclick = () => {
      const n = $("#cmIn").value.padStart(3, "0");
      const perms = ["---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx"];
      const labels = ["所有者", "所属组", "其他人"];
      let out = "";
      for (let i = 0; i < 3; i++) out += `${labels[i]}: ${perms[+n[i]] || "???"}\n`;
      $("#cmOut").textContent = out + `\n数字: ${n}\n符号: ${perms[+n[0]]}${perms[+n[1]]}${perms[+n[2]]}`;
    };
  }
  if (id === "portcheck") {
    $("#pcOut").textContent = `常用端口：\n20/21 FTP\n22 SSH\n25 SMTP\n53 DNS\n80 HTTP\n443 HTTPS\n3306 MySQL\n5432 PostgreSQL\n6379 Redis\n8080 备用HTTP\n27017 MongoDB`;
  }
  if (id === "statuscode") {
    const map = {100:"Continue",200:"OK",201:"Created",204:"No Content",301:"Moved Permanently",302:"Found",304:"Not Modified",400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",418:"I'm a teapot",429:"Too Many Requests",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"};
    $("#scGo").onclick = () => {
      const c = +$("#scIn").value;
      $("#scOut").textContent = map[c] ? `${c} ${map[c]}` : `${c} （未收录）`;
    };
  }
  if (id === "imageplaceholder") {
    $("#ipGo").onclick = () => {
      const w = +$("#ipW").value || 400, h = +$("#ipH").value || 300;
      $("#ipOut").textContent = `https://via.placeholder.com/${w}x${h}\nhttps://picsum.photos/${w}/${h}`;
    };
  }
  if (id === "randomstring") {
    $("#rsGo").onclick = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const len = Math.min(64, +$("#rsLen").value || 16);
      const n = Math.min(20, +$("#rsN").value || 5);
      const out = [];
      for (let i = 0; i < n; i++) {
        const arr = new Uint32Array(len);
        crypto.getRandomValues(arr);
        out.push(Array.from(arr, x => chars[x % chars.length]).join(""));
      }
      $("#rsOut").textContent = out.join("\n");
    };
  }
  if (id === "passwordstrength") {
    $("#pwsGo").onclick = () => {
      const p = $("#pwsIn").value;
      let score = 0;
      if (p.length >= 8) score++;
      if (p.length >= 12) score++;
      if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score++;
      if (/\d/.test(p)) score++;
      if (/[^a-zA-Z0-9]/.test(p)) score++;
      const levels = ["极弱", "弱", "一般", "较强", "强", "很强"];
      $("#pwsOut").textContent = `强度: ${levels[score] || "极弱"}\n得分: ${score}/5`;
    };
  }
  if (id === "dateformat") {
    $("#dfGo").onclick = () => {
      const d = new Date($("#dfIn").value);
      if (isNaN(d)) return toast("请选择日期");
      $("#dfOut").textContent = `本地: ${d.toLocaleString()}\nISO: ${d.toISOString()}\n日期: ${d.toLocaleDateString()}\n时间: ${d.toLocaleTimeString()}\n时间戳(秒): ${Math.floor(d.getTime()/1000)}\n时间戳(毫秒): ${d.getTime()}`;
    };
  }
  if (id === "weeknumber") {
    $("#wnGo").onclick = () => {
      const d = new Date($("#wnIn").value);
      if (isNaN(d)) return toast("请选择日期");
      const start = new Date(d.getFullYear(), 0, 1);
      const week = Math.ceil((((d - start) / 86400000) + start.getDay() + 1) / 7);
      $("#wnOut").textContent = `${d.getFullYear()} 年 第 ${week} 周`;
    };
  }
  if (id === "zodiac") {
    $("#zoGo").onclick = () => {
      const d = new Date($("#zoIn").value);
      if (isNaN(d)) return toast("请选择日期");
      const m = d.getMonth() + 1, day = d.getDate();
      const signs = ["摩羯","水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手","摩羯"];
      const days = [20,19,21,20,21,22,23,23,23,24,23,22];
      const i = day < days[m-1] ? m-1 : m;
      $("#zoOut").textContent = `星座: ${signs[i]}座`;
    };
  }
  if (id === "constellation") {
    $("#coGo").onclick = () => {
      const y = +$("#coIn").value;
      if (!y) return toast("请输入年份");
      const animals = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
      $("#coOut").textContent = `${y} 年属${animals[(y - 4) % 12]}`;
    };
  }
  if (id === "bmi2") {
    $("#bmi2Go").onclick = () => {
      const h = +$("#bmi2H").value / 100, w = +$("#bmi2W").value;
      if (!h || !w) return toast("请填写完整");
      const bmi = w / (h * h);
      let tip = "偏瘦";
      if (bmi >= 18.5) tip = "正常";
      if (bmi >= 24) tip = "偏胖";
      if (bmi >= 28) tip = "肥胖";
      $("#bmi2Out").textContent = `BMI: ${bmi.toFixed(1)}\n评价: ${tip}`;
    };
  }
  if (id === "loan") {
    $("#lnGo").onclick = () => {
      const p = +$("#lnAmt").value, rate = +$("#lnRate").value / 100 / 12, n = +$("#lnMonth").value;
      if (!p || !n) return;
      const monthly = rate === 0 ? p / n : p * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
      $("#lnOut").textContent = `月供: ${monthly.toFixed(2)} 元\n总还款: ${(monthly * n).toFixed(2)} 元\n总利息: ${(monthly * n - p).toFixed(2)} 元`;
    };
  }
  if (id === "discount2") {
    $("#dc2Go").onclick = () => {
      const amt = +$("#dc2Amt").value;
      const rule = $("#dc2Rule").value.split("-").map(Number);
      if (rule.length !== 2 || !rule[0]) return toast("规则格式：满XX减YY，如 100-20");
      const [full, off] = rule;
      const times = Math.floor(amt / full);
      const save = times * off;
      $("#dc2Out").textContent = `满足 ${times} 次满减\n优惠: ${save} 元\n实付: ${amt - save} 元`;
    };
  }
  if (id === "unitarea") {
    const m = {m2:1, mu:666.6667, ha:10000, km2:1e6, ft2:0.092903};
    $("#uaGo").onclick = () => {
      const v = +$("#uaVal").value, f = $("#uaFrom").value, t = $("#uaTo").value;
      $("#uaOut").textContent = `${v} ${f} = ${(v * m[f] / m[t]).toFixed(6)} ${t}`;
    };
  }
  if (id === "unitvolume") {
    const m = {l:1, ml:0.001, m3:1000, gal:3.78541};
    $("#uvGo").onclick = () => {
      const v = +$("#uvVal").value, f = $("#uvFrom").value, t = $("#uvTo").value;
      $("#uvOut").textContent = `${v} ${f} = ${(v * m[f] / m[t]).toFixed(6)} ${t}`;
    };
  }
  if (id === "unitdata") {
    const m = {B:1, KB:1024, MB:1048576, GB:1073741824, TB:1099511627776};
    $("#udGo").onclick = () => {
      const v = +$("#udVal").value, f = $("#udFrom").value, t = $("#udTo").value;
      $("#udOut").textContent = `${v} ${f} = ${(v * m[f] / m[t]).toFixed(6)} ${t}`;
    };
  }

  // ===== 第七批逻辑 =====
  if (id === "textsort") {
    const lines = () => $("#tsortIn").value.split(/\r?\n/).filter(x => x.length);
    $("#tsortAsc").onclick = () => $("#tsortOut").textContent = lines().sort((a,b) => a.localeCompare(b)).join("\n");
    $("#tsortDesc").onclick = () => $("#tsortOut").textContent = lines().sort((a,b) => b.localeCompare(a)).join("\n");
    $("#tsortLen").onclick = () => $("#tsortOut").textContent = lines().sort((a,b) => a.length - b.length).join("\n");
  }
  if (id === "textfilter") {
    $("#tfInclude").onclick = () => {
      const key = $("#tfKey").value;
      $("#tfOut").textContent = $("#tfIn").value.split(/\r?\n/).filter(l => l.includes(key)).join("\n");
    };
    $("#tfExclude").onclick = () => {
      const key = $("#tfKey").value;
      $("#tfOut").textContent = $("#tfIn").value.split(/\r?\n/).filter(l => !l.includes(key)).join("\n");
    };
  }
  if (id === "charfreq") {
    $("#cfGo").onclick = () => {
      const s = $("#cfIn").value, map = {};
      for (const c of s) map[c] = (map[c] || 0) + 1;
      const sorted = Object.entries(map).sort((a,b) => b[1] - a[1]);
      $("#cfOut").textContent = sorted.map(([c,n]) => `${JSON.stringify(c)}: ${n}`).join("\n");
    };
  }
  if (id === "removeempty") {
    $("#reGo").onclick = () => $("#reOut").textContent = $("#reIn").value.split(/\r?\n/).filter(l => l.trim()).join("\n");
  }
  if (id === "joinlines") {
    $("#jlGo").onclick = () => $("#jlOut").textContent = $("#jlIn").value.split(/\r?\n/).join($("#jlSep").value);
  }
  if (id === "splittext") {
    $("#stGo").onclick = () => $("#stOut").textContent = $("#stIn").value.split($("#stSep").value).join("\n");
  }
  if (id === "caseconvert") {
    $("#ccvUp").onclick = () => $("#ccvOut").textContent = $("#ccvIn").value.toUpperCase();
    $("#ccvLow").onclick = () => $("#ccvOut").textContent = $("#ccvIn").value.toLowerCase();
    $("#ccvCap").onclick = () => $("#ccvOut").textContent = $("#ccvIn").value.replace(/\b\w/g, c => c.toUpperCase());
  }
  if (id === "titlecase") {
    $("#tcGo2").onclick = () => $("#tcOut2").textContent = $("#tcIn2").value.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }
  if (id === "encodeuri") {
    $("#eu2Enc").onclick = () => $("#eu2Out").textContent = encodeURI($("#eu2In").value);
    $("#eu2Dec").onclick = () => { try { $("#eu2Out").textContent = decodeURI($("#eu2In").value); } catch { $("#eu2Out").textContent = "❌ 解码失败"; } };
  }
  if (id === "encodeuricomponent") {
    $("#eucEnc").onclick = () => $("#eucOut").textContent = encodeURIComponent($("#eucIn").value);
    $("#eucDec").onclick = () => { try { $("#eucOut").textContent = decodeURIComponent($("#eucIn").value); } catch { $("#eucOut").textContent = "❌ 解码失败"; } };
  }
  if (id === "escapehtml") {
    $("#ehEnc").onclick = () => {
      const d = document.createElement("div");
      d.textContent = $("#ehIn").value;
      $("#ehOut").textContent = d.innerHTML;
    };
    $("#ehDec").onclick = () => {
      const d = document.createElement("div");
      d.innerHTML = $("#ehIn").value;
      $("#ehOut").textContent = d.textContent;
    };
  }
  if (id === "uuidv4") {
    $("#uv4Go").onclick = () => {
      const n = Math.min(50, +$("#uv4N").value || 5);
      $("#uv4Out").textContent = Array.from({length:n}, () => crypto.randomUUID()).join("\n");
    };
  }
  if (id === "nanoid") {
    $("#nanoGo").onclick = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
      const len = Math.min(64, +$("#nanoLen").value || 21);
      const n = Math.min(20, +$("#nanoN").value || 5);
      const out = [];
      for (let i=0;i<n;i++) {
        const arr = new Uint32Array(len);
        crypto.getRandomValues(arr);
        out.push(Array.from(arr, x => chars[x % chars.length]).join(""));
      }
      $("#nanoOut").textContent = out.join("\n");
    };
  }
  if (id === "coinflip") {
    $("#coinGo").onclick = () => $("#coinOut").textContent = Math.random() < 0.5 ? "正面 🪙" : "反面 🪙";
  }
  if (id === "diceroll") {
    $("#diceGo").onclick = () => {
      const face = Math.max(2, +$("#diceFace").value || 6);
      const n = Math.min(20, +$("#diceN").value || 1);
      const results = Array.from({length:n}, () => Math.floor(Math.random()*face)+1);
      $("#diceOut").textContent = results.join(" + ") + (n>1 ? ` = ${results.reduce((a,b)=>a+b,0)}` : "");
    };
  }
  if (id === "pickone") {
    $("#poGo").onclick = () => {
      const items = $("#poIn").value.split(/\r?\n/).filter(Boolean);
      if (!items.length) return toast("请输入选项");
      $("#poOut").textContent = items[Math.floor(Math.random()*items.length)];
    };
  }
  if (id === "pickmulti") {
    $("#pmGo").onclick = () => {
      let items = $("#pmIn").value.split(/\r?\n/).filter(Boolean);
      const n = Math.min(items.length, +$("#pmN").value || 1);
      const out = [];
      for (let i=0;i<n;i++) {
        const idx = Math.floor(Math.random()*items.length);
        out.push(items[idx]);
        items.splice(idx,1);
      }
      $("#pmOut").textContent = out.join("\n");
    };
  }
  if (id === "yesno") {
    $("#ynGo").onclick = () => $("#ynOut").textContent = Math.random() < 0.5 ? "是 ✅" : "否 ❌";
  }
  if (id === "tablemarkdown") {
    $("#tmGo").onclick = () => {
      const rows = Math.min(20, +$("#tmRows").value || 3);
      const cols = Math.min(10, +$("#tmCols").value || 3);
      let out = "| " + Array.from({length:cols}, (_,i)=>`列${i+1}`).join(" | ") + " |\n";
      out += "| " + Array.from({length:cols}, ()=>"---").join(" | ") + " |\n";
      for (let r=0;r<rows;r++) out += "| " + Array.from({length:cols}, (_,c)=>`R${r+1}C${c+1}`).join(" | ") + " |\n";
      $("#tmOut").textContent = out;
    };
  }
  if (id === "chineseid") {
    $("#cidGo").onclick = () => {
      const id = $("#cidIn").value.trim();
      if (!/^\d{17}[\dXx]$/.test(id)) return $("#cidOut").textContent = "❌ 格式不正确";
      const year = id.slice(6,10), month = id.slice(10,12), day = id.slice(12,14);
      const gender = +id[16] % 2 === 1 ? "男" : "女";
      $("#cidOut").textContent = `出生日期: ${year}-${month}-${day}\n性别: ${gender}\n顺序码: ${id.slice(14,17)}`;
    };
  }
  if (id === "bankcard") {
    $("#bcGo").onclick = () => {
      const num = $("#bcIn").value.replace(/\D/g,"");
      if (num.length < 13) return $("#bcOut").textContent = "卡号太短";
      let sum = 0, alt = false;
      for (let i = num.length-1; i >= 0; i--) {
        let n = +num[i];
        if (alt) { n *= 2; if (n > 9) n -= 9; }
        sum += n; alt = !alt;
      }
      $("#bcOut").textContent = sum % 10 === 0 ? "✅ 校验通过（Luhn）" : "❌ 校验失败";
    };
  }
  if (id === "aspect") {
    $("#asGo").onclick = () => {
      let w = +$("#asW").value, h = +$("#asH").value;
      if (!w || !h) return;
      const gcd = (a,b) => b === 0 ? a : gcd(b, a % b);
      const g = gcd(w, h);
      $("#asOut").textContent = `比例: ${w/g}:${h/g}\n约分后: ${w/g} / ${h/g}`;
    };
  }
  if (id === "average") {
    $("#avgGo").onclick = () => {
      const nums = $("#avgIn").value.split(/[\n,，\s]+/).map(Number).filter(n => !isNaN(n));
      if (!nums.length) return toast("请输入数字");
      const avg = nums.reduce((a,b)=>a+b,0) / nums.length;
      $("#avgOut").textContent = `平均值: ${avg.toFixed(4)}\n数量: ${nums.length}`;
    };
  }
  if (id === "sum") {
    $("#sumGo").onclick = () => {
      const nums = $("#sumIn").value.split(/[\n,，\s]+/).map(Number).filter(n => !isNaN(n));
      if (!nums.length) return toast("请输入数字");
      const s = nums.reduce((a,b)=>a+b,0);
      const p = nums.reduce((a,b)=>a*b,1);
      $("#sumOut").textContent = `求和: ${s}\n求积: ${p}`;
    };
  }
  if (id === "roman") {
    const toRoman = num => {
      if (num <= 0 || num >= 4000) return "超出范围(1-3999)";
      const map = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
      let res = "";
      for (const [v,s] of map) while (num >= v) { res += s; num -= v; }
      return res;
    };
    const fromRoman = str => {
      const map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
      let i = 0, res = 0;
      str = str.toUpperCase();
      while (i < str.length) {
        if (i+1 < str.length && map[str.slice(i,i+2)]) { res += map[str.slice(i,i+2)]; i += 2; }
        else { res += map[str[i]] || 0; i++; }
      }
      return res;
    };
    $("#rmTo").onclick = () => $("#rmOut").textContent = toRoman(parseInt($("#rmIn").value));
    $("#rmFrom").onclick = () => $("#rmOut").textContent = fromRoman($("#rmIn").value);
  }
  if (id === "binary") {
    $("#binGo").onclick = () => {
      try {
        const v = $("#binIn").value.trim();
        const from = +$("#binFrom").value, to = +$("#binTo").value;
        const num = parseInt(v, from);
        if (isNaN(num)) throw new Error("无效输入");
        $("#binOut").textContent = num.toString(to).toUpperCase();
      } catch (e) { $("#binOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "temperature2") {
    $("#tmpGo").onclick = () => {
      const v = +$("#tmpVal").value, f = $("#tmpFrom").value, t = $("#tmpTo").value;
      let c = f === "C" ? v : f === "F" ? (v-32)*5/9 : v - 273.15;
      const r = t === "C" ? c : t === "F" ? c*9/5+32 : c+273.15;
      $("#tmpOut").textContent = `${v} °${f} = ${r.toFixed(2)} °${t}`;
    };
  }

  // ===== 第八批逻辑 =====
  if (id === "textstats") {
    $("#tstGo").onclick = () => {
      const s = $("#tstIn").value;
      $("#tstOut").textContent = `字符数: ${s.length}\n无空格: ${s.replace(/\s/g,"").length}\n中文: ${(s.match(/[\u4e00-\u9fa5]/g)||[]).length}\n英文单词: ${(s.match(/[a-zA-Z]+/g)||[]).length}\n行数: ${s.split(/\r?\n/).length}\nUTF-8字节: ${new Blob([s]).size}`;
    };
  }
  if (id === "findreplace") {
    $("#frGo").onclick = () => {
      try {
        const re = new RegExp($("#frFind").value, "g");
        $("#frOut").textContent = $("#frIn").value.replace(re, $("#frTo").value);
      } catch(e) { $("#frOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "linestats") {
    $("#ls2Go").onclick = () => {
      const lines = $("#ls2In").value.split(/\r?\n/);
      const lens = lines.map(l => l.length);
      const max = Math.max(...lens), min = Math.min(...lens);
      const avg = lens.reduce((a,b)=>a+b,0) / lens.length;
      $("#ls2Out").textContent = `行数: ${lines.length}\n最长: ${max}\n最短: ${min}\n平均: ${avg.toFixed(1)}`;
    };
  }
  if (id === "duplicatecount") {
    $("#dcGo").onclick = () => {
      const lines = $("#dcIn").value.split(/\r?\n/);
      const map = {};
      lines.forEach(l => map[l] = (map[l]||0)+1);
      const sorted = Object.entries(map).sort((a,b)=>b[1]-a[1]);
      $("#dcOut").textContent = sorted.map(([l,n]) => `${n}× ${l}`).join("\n");
    };
  }
  if (id === "shuffle") {
    $("#shfGo").onclick = () => {
      const arr = $("#shfIn").value.split(/\r?\n/);
      for (let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
      $("#shfOut").textContent = arr.join("\n");
    };
  }
  if (id === "jwtfull") {
    $("#jwfGo").onclick = () => {
      try {
        const parts = $("#jwfIn").value.split(".");
        if (parts.length < 2) throw new Error("无效JWT");
        const dec = p => {
          p = p.replace(/-/g,"+").replace(/_/g,"/");
          while (p.length%4) p+="=";
          return JSON.parse(decodeURIComponent(escape(atob(p))));
        };
        $("#jwfOut").textContent = "Header:\n" + JSON.stringify(dec(parts[0]),null,2) + "\n\nPayload:\n" + JSON.stringify(dec(parts[1]),null,2);
      } catch(e) { $("#jwfOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "hmacsha") {
    $("#hmGo").onclick = async () => {
      const enc = new TextEncoder();
      const key = await crypto.subtle.importKey("raw", enc.encode($("#hmKey").value), {name:"HMAC", hash:"SHA-256"}, false, ["sign"]);
      const sig = await crypto.subtle.sign("HMAC", key, enc.encode($("#hmIn").value));
      $("#hmOut").textContent = [...new Uint8Array(sig)].map(x=>x.toString(16).padStart(2,"0")).join("");
    };
  }
  if (id === "cssunit2") {
    $("#cu2Go").onclick = () => {
      const v = +$("#cu2Val").value, root = +$("#cu2Root").value||16;
      const f = $("#cu2From").value, t = $("#cu2To").value;
      let px = v;
      if (f==="rem"||f==="em") px = v*root;
      if (f==="pt") px = v*1.333;
      let r = px;
      if (t==="rem"||t==="em") r = px/root;
      if (t==="pt") r = px/1.333;
      $("#cu2Out").textContent = `${v}${f} ≈ ${r.toFixed(4)}${t}`;
    };
  }
  if (id === "metaall") {
    $("#maGo").onclick = () => {
      const t=$("#maTitle").value, d=$("#maDesc").value, i=$("#maImg").value, u=$("#maUrl").value;
      $("#maOut").textContent = `<title>${t}</title>\n<meta name="description" content="${d}">\n<meta property="og:title" content="${t}">\n<meta property="og:description" content="${d}">\n<meta property="og:image" content="${i}">\n<meta property="og:url" content="${u}">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="${t}">\n<meta name="twitter:description" content="${d}">\n<meta name="twitter:image" content="${i}">`;
    };
  }
  if (id === "randomname2") {
    const first = ["James","John","Robert","Michael","David","Emma","Olivia","Ava","Sophia","Isabella","Liam","Noah","William","Lucas","Henry"];
    const last = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Wilson","Anderson","Taylor","Thomas","Moore","Jackson","Martin"];
    $("#rn2Go").onclick = () => {
      const n = Math.min(30, +$("#rn2N").value||10);
      const out = Array.from({length:n}, () => first[Math.floor(Math.random()*first.length)] + " " + last[Math.floor(Math.random()*last.length)]);
      $("#rn2Out").textContent = out.join("\n");
    };
  }
  if (id === "passwordpin2") {
    $("#ppGo").onclick = () => {
      const len = Math.min(12, +$("#ppLen").value||6);
      const n = Math.min(20, +$("#ppN").value||5);
      const out = [];
      for (let i=0;i<n;i++) {
        const arr = new Uint32Array(len);
        crypto.getRandomValues(arr);
        out.push(Array.from(arr, x => x%10).join(""));
      }
      $("#ppOut").textContent = out.join("\n");
    };
  }
  if (id === "stopwatch") {
    let start=0, elapsed=0, timer=null;
    const pad = n => String(Math.floor(n)).padStart(2,"0");
    const render = () => {
      const t = elapsed + (timer ? Date.now()-start : 0);
      const h = t/3600000, m = (t%3600000)/60000, s = (t%60000)/1000;
      $("#swDisplay").textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    };
    $("#swStart").onclick = () => { if(timer)return; start=Date.now(); timer=setInterval(render,50); };
    $("#swPause").onclick = () => { if(!timer)return; elapsed += Date.now()-start; clearInterval(timer); timer=null; render(); };
    $("#swReset").onclick = () => { clearInterval(timer); timer=null; start=0; elapsed=0; render(); };
  }
  if (id === "daysbetween") {
    $("#dbGo").onclick = () => {
      const s = new Date($("#dbStart").value), e = new Date($("#dbEnd").value);
      if (isNaN(s)||isNaN(e)) return toast("请选择日期");
      const days = Math.round((e-s)/86400000);
      $("#dbOut").textContent = `间隔: ${Math.abs(days)} 天` + (days<0?"（结束早于开始）":"");
    };
  }
  if (id === "calorie") {
    $("#calGo").onclick = () => {
      const w=+$("#calW").value, h=+$("#calH").value, age=+$("#calAge").value, sex=$("#calSex").value;
      if(!w||!h||!age) return toast("请填写完整");
      // Mifflin-St Jeor
      let bmr = 10*w + 6.25*h - 5*age + (sex==="m"?5:-161);
      $("#calOut").textContent = `基础代谢 BMR: ${bmr.toFixed(0)} kcal/天\n久坐: ${(bmr*1.2).toFixed(0)}\n轻度活动: ${(bmr*1.375).toFixed(0)}\n中度活动: ${(bmr*1.55).toFixed(0)}`;
    };
  }
  if (id === "water") {
    $("#watGo").onclick = () => {
      const w = +$("#watW").value;
      if(!w) return toast("请输入体重");
      $("#watOut").textContent = `建议每日饮水量: ≈ ${(w*35).toFixed(0)} ml（约 ${(w*35/500).toFixed(1)} 杯）`;
    };
  }
  if (id === "interest") {
    $("#intGo").onclick = () => {
      const p=+$("#intP").value, r=+$("#intR").value/100, y=+$("#intY").value;
      const interest = p*r*y;
      $("#intOut").textContent = `利息: ${interest.toFixed(2)}\n本息合计: ${(p+interest).toFixed(2)}`;
    };
  }
  if (id === "compound3") {
    $("#cp3Go").onclick = () => {
      let p=+$("#cp3P").value, r=+$("#cp3R").value/100, y=+$("#cp3Y").value, add=+$("#cp3Add").value;
      for(let i=0;i<y;i++){ p = p*(1+r) + add; }
      $("#cp3Out").textContent = `${y} 年后本息合计: ${p.toFixed(2)} 元`;
    };
  }
  if (id === "gitignore") {
    $("#giOut").textContent = `node_modules/\n.dist/\nbuild/\n.env\n.env.local\n*.log\n.DS_Store\n.idea/\n.vscode/\ncoverage/\n*.local`;
  }
  if (id === "editorconfig") {
    $("#ecOut").textContent = `root = true\n\n[*]\nindent_style = space\nindent_size = 2\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true`;
  }
  if (id === "worldclock2") {
    const zones = [["北京","Asia/Shanghai"],["东京","Asia/Tokyo"],["纽约","America/New_York"],["伦敦","Europe/London"],["巴黎","Europe/Paris"],["悉尼","Australia/Sydney"]];
    const update = () => {
      $("#wc2Out").textContent = zones.map(([name,z]) => `${name}: ${new Date().toLocaleString("zh-CN",{timeZone:z})}`).join("\n");
    };
    update();
    setInterval(update, 1000);
  }
  if (id === "qrcontent") {
    $("#qrcGo").onclick = () => {
      const type = $("#qrcType").value, val = $("#qrcIn").value;
      let out = val;
      if (type==="url") out = val.startsWith("http")?val:"https://"+val;
      if (type==="wifi") out = `WIFI:T:WPA;S:${val};P:password;;`;
      if (type==="email") out = `mailto:${val}`;
      $("#qrcOut").textContent = out + "\n\n（可复制到二维码生成工具）";
    };
  // ===== 新分类工具逻辑 =====
  if (id === "colorpicker") {
    const update = () => {
      const c = $("#cpPick").value;
      $("#cpPickOut").textContent = `HEX: ${c}\nRGB: ${parseInt(c.slice(1,3),16)}, ${parseInt(c.slice(3,5),16)}, ${parseInt(c.slice(5),16)}`;
    };
    $("#cpPick").oninput = update; update();
  }
  if (id === "palettegen") {
    $("#pgGen").onclick = () => {
      const hex = $("#pgColor").value;
      const r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5),16)/255;
      const max=Math.max(r,g,b), min=Math.min(r,g,b);
      let h=0,s=0,l=(max+min)/2;
      if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);if(max===r)h=((g-b)/d+(g<b?6:0))/6;else if(max===g)h=((b-r)/d+2)/6;else h=((r-g)/d+4)/6;}
      const hsl = (hh,ss,ll) => {
        let rr,gg,bb;
        if(ss===0) rr=gg=bb=ll;
        else {
          const hue2rgb=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};
          const q=ll<0.5?ll*(1+ss):ll+ss-ll*ss, p=2*ll-q;
          rr=hue2rgb(p,q,hh+1/3);gg=hue2rgb(p,q,hh);bb=hue2rgb(p,q,hh-1/3);
        }
        return "#"+[rr,gg,bb].map(x=>Math.round(x*255).toString(16).padStart(2,"0")).join("");
      };
      const colors = [hsl(h,s,Math.max(0.15,l-0.25)), hsl(h,s,l), hsl(h,s,Math.min(0.9,l+0.2)), hsl((h+0.08)%1,s,l), hsl((h+0.5)%1,s,l)];
      $("#pgOut").innerHTML = colors.map(c=>`<div style="background:${c};height:60px;border-radius:8px;display:grid;place-items:center;font-size:11px;color:#fff;text-shadow:0 1px 2px #000;cursor:pointer" onclick="navigator.clipboard.writeText('${c}')">${c}</div>`).join("");
    };
  }
  if (id === "contrastcheck") {
    $("#ctGo").onclick = () => {
      const hex2rgb = h => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5),16)];
      const lum = ([r,g,b]) => {
        const a = [r,g,b].map(v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); });
        return 0.2126*a[0]+0.7152*a[1]+0.0722*a[2];
      };
      const L1 = lum(hex2rgb($("#ctFg").value)), L2 = lum(hex2rgb($("#ctBg").value));
      const ratio = (Math.max(L1,L2)+0.05) / (Math.min(L1,L2)+0.05);
      let tip = "对比度不足";
      if (ratio >= 3) tip = "大文字勉强通过";
      if (ratio >= 4.5) tip = "AA 级通过";
      if (ratio >= 7) tip = "AAA 级优秀";
      $("#ctOut").textContent = `对比度: ${ratio.toFixed(2)}:1\n评价: ${tip}`;
    };
  }
  if (id === "calculator") {
    $("#calcGo").onclick = () => {
      try {
        const expr = $("#calcIn").value.replace(/[^0-9+\-*/().%\s]/g,"");
        const result = Function('"use strict";return (' + expr + ')')();
        $("#calcOut").textContent = result;
      } catch { $("#calcOut").textContent = "❌ 表达式错误"; }
    };
  }
  if (id === "quadratic") {
    $("#qdGo").onclick = () => {
      const a=+$("#qdA").value, b=+$("#qdB").value, c=+$("#qdC").value;
      if (a===0) return $("#qdOut").textContent = "a 不能为 0";
      const d = b*b - 4*a*c;
      if (d<0) $("#qdOut").textContent = "无实数根（判别式 < 0）";
      else if (d===0) $("#qdOut").textContent = `唯一根: x = ${(-b/(2*a)).toFixed(6)}`;
      else $("#qdOut").textContent = `x1 = ${((-b+Math.sqrt(d))/(2*a)).toFixed(6)}\nx2 = ${((-b-Math.sqrt(d))/(2*a)).toFixed(6)}`;
    };
  }
  if (id === "factorial") {
    $("#faGo").onclick = () => {
      const n = Math.min(170, Math.max(0, +$("#faIn").value||0));
      let r = 1n;
      for (let i=2n; i<=BigInt(n); i++) r *= i;
      $("#faOut").textContent = `${n}! = ${r}`;
    };
  }
  if (id === "combination") {
    $("#cbGo").onclick = () => {
      const n = +$("#cbN").value, k = +$("#cbK").value;
      if (k>n || k<0 || n<0) return $("#cbOut").textContent = "参数无效";
      const fact = m => { let r=1n; for(let i=2n;i<=BigInt(m);i++) r*=i; return r; };
      const P = fact(n)/fact(n-k), C = P/fact(k);
      $("#cbOut").textContent = `P(${n},${k}) = ${P}\nC(${n},${k}) = ${C}`;
    };
  }
  if (id === "statistics") {
    $("#stGo2").onclick = () => {
      const nums = $("#stIn2").value.split(/[\n,，\s]+/).map(Number).filter(n=>!isNaN(n)).sort((a,b)=>a-b);
      if (!nums.length) return toast("请输入数字");
      const sum = nums.reduce((a,b)=>a+b,0), avg = sum/nums.length;
      const mid = nums.length%2 ? nums[Math.floor(nums.length/2)] : (nums[nums.length/2-1]+nums[nums.length/2])/2;
      const variance = nums.reduce((a,b)=>a+(b-avg)**2,0)/nums.length;
      $("#stOut2").textContent = `数量: ${nums.length}\n求和: ${sum}\n平均: ${avg.toFixed(4)}\n中位数: ${mid}\n方差: ${variance.toFixed(4)}\n标准差: ${Math.sqrt(variance).toFixed(4)}`;
    };
  }
  if (id === "timestampfull") {
    $("#tsfToDate").onclick = () => {
      let t = +$("#tsfIn").value;
      if (t < 1e12) t *= 1000;
      const d = new Date(t);
      $("#tsfOut").textContent = isNaN(d) ? "无效" : d.toLocaleString() + "\n" + d.toISOString();
    };
    $("#tsfToTs").onclick = () => {
      const d = new Date($("#tsfIn").value);
      $("#tsfOut").textContent = isNaN(d) ? "无效日期" : `秒: ${Math.floor(d.getTime()/1000)}\n毫秒: ${d.getTime()}`;
    };
  }
  if (id === "adddate") {
    $("#adGo").onclick = () => {
      const d = new Date($("#adDate").value);
      if (isNaN(d)) return toast("请选择日期");
      d.setDate(d.getDate() + (+$("#adDays").value||0));
      $("#adOut").textContent = d.toLocaleDateString("zh-CN", {year:"numeric",month:"long",day:"numeric",weekday:"long"});
    };
  }
  if (id === "weekday") {
    $("#wdGo2").onclick = () => {
      const d = new Date($("#wdIn2").value);
      if (isNaN(d)) return toast("请选择日期");
      $("#wdOut2").textContent = d.toLocaleDateString("zh-CN", {weekday:"long", year:"numeric", month:"long", day:"numeric"});
    };
  }
  if (id === "duration") {
    $("#duGo2").onclick = () => {
      let s = Math.max(0, +$("#duIn2").value||0);
      const h = Math.floor(s/3600); s%=3600;
      const m = Math.floor(s/60); s%=60;
      $("#duOut2").textContent = `${h} 时 ${m} 分 ${s} 秒`;
    };
  }
  if (id === "dice2") {
    $("#d2Go").onclick = () => {
      const face = Math.max(2, +$("#d2Face").value||6), n = Math.min(20, +$("#d2N").value||1);
      const res = Array.from({length:n}, () => Math.floor(Math.random()*face)+1);
      $("#d2Out").textContent = res.join(" + ") + (n>1 ? ` = ${res.reduce((a,b)=>a+b,0)}` : "");
    };
  }
  if (id === "lottery") {
    $("#lotGo").onclick = () => {
      let items = $("#lotIn").value.split(/\r?\n/).filter(Boolean);
      const n = Math.min(items.length, +$("#lotN").value||1);
      const out = [];
      for (let i=0;i<n;i++) {
        const idx = Math.floor(Math.random()*items.length);
        out.push(items[idx]);
        items.splice(idx,1);
      }
      $("#lotOut").textContent = out.join("\n") || "名单为空";
    };
  }
  if (id === "randomteam") {
    $("#rtGo").onclick = () => {
      let items = $("#rtIn").value.split(/\r?\n/).filter(Boolean);
      const n = Math.max(1, +$("#rtN").value||2);
      for (let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[items[i],items[j]]=[items[j],items[i]];}
      const teams = Array.from({length:n}, () => []);
      items.forEach((item,i) => teams[i%n].push(item));
      $("#rtOut").textContent = teams.map((t,i) => `第${i+1}组:\n` + t.join("\n")).join("\n\n");
    };
  }
  if (id === "rockpaper") {
    const map = {rock:"石头✊", paper:"布✋", scissors:"剪刀✌"};
    const beat = {rock:"scissors", paper:"rock", scissors:"paper"};
    const play = user => {
      const keys = ["rock","paper","scissors"];
      const cpu = keys[Math.floor(Math.random()*3)];
      let result = "平局！";
      if (beat[user]===cpu) result = "你赢了！🎉";
      else if (beat[cpu]===user) result = "你输了 😅";
      $("#rpOut").textContent = `你: ${map[user]}\n电脑: ${map[cpu]}\n${result}`;
    };
    $("#rpRock").onclick = () => play("rock");
    $("#rpPaper").onclick = () => play("paper");
    $("#rpScissors").onclick = () => play("scissors");
  }
  if (id === "randomquote") {
    const quotes = ["行动是治愈恐惧的良药。","今天最好的表现，是明天最小的努力。","不要等待机会，而要创造机会。","成功不是将来才有的，而是从决定去做的那一刻起持续积累。","你配得上更好的生活。","坚持的人，时间总会给答案。","与其完美，不如完成。","把简单的事情重复做，你就是专家。"];
    $("#rqGo").onclick = () => $("#rqOut").textContent = quotes[Math.floor(Math.random()*quotes.length)];
  }
  if (id === "lucky") {
    $("#lkGo").onclick = () => {
      const score = Math.floor(Math.random()*41)+60;
      const tips = ["宜编码，忌熬夜","宜散步，忌久坐","宜学习，忌刷手机","宜整理，忌拖延"];
      $("#lkOut").textContent = `今日运势指数: ${score}\n${tips[Math.floor(Math.random()*tips.length)]}`;
    };
  }
  if (id === "bmi3") {
    $("#bmi3Go").onclick = () => {
      const h=+$("#bmi3H").value/100, w=+$("#bmi3W").value;
      if(!h||!w) return toast("请填写完整");
      const bmi = w/(h*h);
      let tip = "偏瘦，适当增重";
      if(bmi>=18.5) tip="正常，继续保持";
      if(bmi>=24) tip="偏胖，注意饮食与运动";
      if(bmi>=28) tip="肥胖，建议咨询医生";
      $("#bmi3Out").textContent = `BMI: ${bmi.toFixed(1)}\n${tip}`;
    };
  }
  if (id === "sleep") {
    $("#slGo").onclick = () => {
      const [hh,mm] = $("#slTime").value.split(":").map(Number);
      const wake = new Date(); wake.setHours(hh,mm,0,0);
      const cycles = [6,5,4,3].map(c => {
        const d = new Date(wake.getTime() - c*90*60000 - 15*60000);
        return d.toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});
      });
      $("#slOut").textContent = `推荐入睡时间（90分钟周期）:\n${cycles.join("  或  ")}\n（已预留15分钟入睡时间）`;
    };
  }
  if (id === "tip2") {
    $("#tp2Go").onclick = () => {
      const amt=+$("#tp2Amt").value, pct=+$("#tp2Pct").value, n=+$("#tp2N").value||1;
      const tip = amt*pct/100, total = amt+tip;
      $("#tp2Out").textContent = `小费: ${tip.toFixed(2)}\n总计: ${total.toFixed(2)}\n人均: ${(total/n).toFixed(2)}`;
    };
  }
  if (id === "clothing") {
    $("#clOut").textContent = `常见服装尺码参考（仅供参考）:\n\n上装:\nS  165/84A\nM  170/88A\nL  175/92A\nXL 180/96A\n\n下装腰围:\nS  2尺1-2尺2\nM  2尺3-2尺4\nL  2尺5-2尺6\nXL 2尺7-2尺8`;
  }
  if (id === "packing") {
    $("#pkOut").textContent = `旅行清单模板:\n\n证件: 身份证、护照、签证、机票\n电子: 手机、充电器、充电宝、耳机\n衣物: 内衣、外套、鞋子、袜子\n洗护: 牙刷、毛巾、护肤品、药品\n其他: 现金、银行卡、雨伞、购物袋`;
  }
  if (id === "blood2") {
    $("#blGo").onclick = () => {
      const map = {
        "A,A":"A 或 O","A,B":"A/B/AB/O","A,AB":"A/B/AB","A,O":"A 或 O",
        "B,B":"B 或 O","B,AB":"A/B/AB","B,O":"B 或 O",
        "AB,AB":"A/B/AB","AB,O":"A 或 B","O,O":"O"
      };
      const f=$("#blF").value, m=$("#blM").value;
      const key = [f,m].sort().join(",");
      $("#blOut").textContent = `子女可能血型: ${map[key] || "A/B/AB/O"}`;
    };
  }
  if (id === "pregnancy2") {
    $("#prGo").onclick = () => {
      const d = new Date($("#prDate").value);
      if (isNaN(d)) return toast("请选择日期");
      d.setDate(d.getDate() + 280);
      $("#prOut").textContent = `预产期约: ${d.toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})}`;
    };
  }
  // ===== 办公 / 健康 / 安全 / 趣味 等 =====
  if (id === "wordcount3") {
    $("#wc3Go").onclick = () => {
      const s = $("#wc3In").value;
      const cn = (s.match(/[\u4e00-\u9fa5]/g)||[]).length;
      const en = (s.match(/[a-zA-Z]+/g)||[]).length;
      const total = cn + en;
      const min = Math.ceil(total / 400);
      $("#wc3Out").textContent = `中文字: ${cn}\n英文词: ${en}\n合计约: ${total}\n预计阅读: ${min} 分钟`;
    };
  }
  if (id === "meetingcost") {
    $("#mcGo").onclick = () => {
      const n=+$("#mcN").value, w=+$("#mcWage").value, h=+$("#mcH").value;
      $("#mcOut").textContent = `会议成本约: ${(n*w*h).toFixed(0)} 元`;
    };
  }
  if (id === "pomodoro") {
    let left=25*60, timer=null;
    const pad=n=>String(n).padStart(2,"0");
    const render=()=>{const m=Math.floor(left/60),s=left%60;$("#pomDisplay").textContent=`${pad(m)}:${pad(s)}`;};
    $("#pomStart").onclick=()=>{if(timer)return;timer=setInterval(()=>{left--;render();if(left<=0){clearInterval(timer);timer=null;toast("番茄钟结束！");}},1000);};
    $("#pomReset").onclick=()=>{clearInterval(timer);timer=null;left=25*60;render();};
    render();
  }
  if (id === "emailtemp") {
    const temps = {
      follow:"主题：跟进 - [事项]\n\n您好，\n\n上次沟通的 [事项] 想跟进一下进度，请问目前情况如何？\n\n谢谢！\n[你的名字]",
      thanks:"主题：感谢\n\n您好，\n\n非常感谢您在 [事项] 上的帮助与支持，受益匪浅。\n\n此致\n敬礼\n[你的名字]",
      meeting:"主题：会议邀请 - [主题]\n\n您好，\n\n诚邀您参加 [主题] 会议。\n时间：[日期时间]\n地点/链接：[地点]\n\n请确认是否方便，谢谢！",
      apology:"主题：致歉\n\n您好，\n\n关于 [事项]，给您带来不便深表歉意。我们会尽快 [补救措施]。\n\n再次抱歉，感谢理解。"
    };
    $("#etGo").onclick = () => $("#etOut").textContent = temps[$("#etType").value] || "";
  }
  if (id === "pricecalc") {
    $("#pcGo").onclick = () => {
      const cost=+$("#pcCost").value, margin=+$("#pcMargin").value;
      const price = cost * (1 + margin/100);
      $("#pcOut").textContent = `建议报价: ${price.toFixed(2)}\n利润: ${(price-cost).toFixed(2)}`;
    };
  }
  if (id === "bmr2") {
    $("#bmrGo").onclick = () => {
      const w=+$("#bmrW").value, h=+$("#bmrH").value, age=+$("#bmrAge").value, sex=$("#bmrSex").value;
      if(!w||!h||!age) return toast("请填写完整");
      const bmr = 10*w + 6.25*h - 5*age + (sex==="m"?5:-161);
      $("#bmrOut").textContent = `BMR: ${bmr.toFixed(0)} kcal/天\n久坐 TDEE: ${(bmr*1.2).toFixed(0)}\n轻度: ${(bmr*1.375).toFixed(0)}\n中度: ${(bmr*1.55).toFixed(0)}\n高度: ${(bmr*1.725).toFixed(0)}`;
    };
  }
  if (id === "pace") {
    $("#paceGo").onclick = () => {
      const dist=+$("#paceDist").value;
      const parts=$("#paceTime").value.split(":").map(Number);
      if(parts.length<2||!dist) return toast("请填写完整");
      const totalSec = (parts[0]||0)*60 + (parts[1]||0);
      const paceSec = totalSec / dist;
      const pm = Math.floor(paceSec/60), ps = Math.round(paceSec%60);
      $("#paceOut").textContent = `配速: ${pm}'${String(ps).padStart(2,"0")}" /km\n时速: ${(3600/paceSec).toFixed(2)} km/h`;
    };
  }
  if (id === "heartrate") {
    $("#hrGo").onclick = () => {
      const age=+$("#hrAge").value||30;
      const max = 220 - age;
      $("#hrOut").textContent = `最大心率约: ${max}\n燃脂区 (50-70%): ${Math.round(max*0.5)}-${Math.round(max*0.7)}\n有氧区 (70-80%): ${Math.round(max*0.7)}-${Math.round(max*0.8)}\n无氧区 (80-90%): ${Math.round(max*0.8)}-${Math.round(max*0.9)}`;
    };
  }
  if (id === "oneRm") {
    $("#ormGo").onclick = () => {
      const w=+$("#ormW").value, r=+$("#ormR").value;
      if(!w||!r) return toast("请填写");
      // Epley
      const orm = w * (1 + r/30);
      $("#ormOut").textContent = `估算 1RM: ${orm.toFixed(1)} kg\n(Epley 公式)`;
    };
  }
  if (id === "pwdcheck") {
    $("#pwdGo").onclick = () => {
      const p = $("#pwdIn").value;
      let score=0, tips=[];
      if(p.length>=8) score+=1; else tips.push("建议至少8位");
      if(p.length>=12) score+=1;
      if(/[a-z]/.test(p)&&/[A-Z]/.test(p)) score+=1; else tips.push("建议大小写混合");
      if(/\d/.test(p)) score+=1; else tips.push("建议包含数字");
      if(/[^a-zA-Z0-9]/.test(p)) score+=1; else tips.push("建议包含符号");
      const levels=["极弱","弱","一般","较强","强","很强"];
      $("#pwdOut").textContent = `强度: ${levels[score]}\n得分: ${score}/5\n` + (tips.length?"建议:\n"+tips.join("\n"):"看起来不错");
    };
  }
  if (id === "hashid") {
    $("#hidGo").onclick = () => {
      const h = $("#hidIn").value.trim().replace(/^0x/i,"");
      const len = h.length;
      const map = {32:"MD5",40:"SHA-1",64:"SHA-256",96:"SHA-384",128:"SHA-512"};
      $("#hidOut").textContent = map[len] ? `可能是: ${map[len]}（长度 ${len}）` : `未识别（长度 ${len}）`;
    };
  }
  if (id === "token") {
    $("#tokGo").onclick = () => {
      const len = Math.min(128, +$("#tokLen").value||32);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const arr = new Uint32Array(len);
      crypto.getRandomValues(arr);
      $("#tokOut").textContent = Array.from(arr, x => chars[x%chars.length]).join("");
    };
  }
  if (id === "entropy") {
    $("#entGo").onclick = () => {
      const s = $("#entIn").value;
      if(!s) return;
      const freq = {};
      for(const c of s) freq[c]=(freq[c]||0)+1;
      let ent=0;
      const len=s.length;
      for(const n of Object.values(freq)){const p=n/len;ent -= p*Math.log2(p);}
      $("#entOut").textContent = `香农熵: ${ent.toFixed(3)} bits/字符\n总熵约: ${(ent*len).toFixed(1)} bits`;
    };
  }
  if (id === "numbercn") {
    $("#ncnGo").onclick = () => {
      const n = $("#ncnIn").value;
      const digits = "零壹贰叁肆伍陆柒捌玖";
      const units = ["","拾","佰","仟"];
      const big = ["","万","亿"];
      // simplified for integer part mainly
      let [intPart, decPart] = n.split(".");
      intPart = intPart.replace(/^0+/, "") || "0";
      let result = "";
      if (intPart === "0") result = "零";
      else {
        const groups = [];
        while (intPart.length > 0) {
          groups.unshift(intPart.slice(-4));
          intPart = intPart.slice(0, -4);
        }
        groups.forEach((g, gi) => {
          let s = "";
          for (let i = 0; i < g.length; i++) {
            const d = +g[i];
            if (d !== 0) s += digits[d] + units[g.length - 1 - i];
            else if (s && !s.endsWith("零")) s += "零";
          }
          s = s.replace(/零+$/, "");
          if (s) result += s + big[groups.length - 1 - gi];
        });
      }
      result += "元";
      if (decPart) {
        const j = +decPart[0]||0, f = +decPart[1]||0;
        if (j) result += digits[j] + "角";
        if (f) result += digits[f] + "分";
      } else result += "整";
      $("#ncnOut").textContent = result;
    };
  }
  if (id === "textcompare") {
    $("#tcGo3").onclick = () => {
      const a=$("#tcA").value, b=$("#tcB").value;
      if(!a||!b) return toast("请填写两段文本");
      const setA=new Set(a), setB=new Set(b);
      let inter=0;
      for(const c of setA) if(setB.has(c)) inter++;
      const sim = inter / Math.max(setA.size, setB.size, 1);
      $("#tcOut3").textContent = `字符集合相似度: ${(sim*100).toFixed(1)}%\n长度差: ${Math.abs(a.length-b.length)}`;
    };
  }
  if (id === "wheel") {
    $("#whGo").onclick = () => {
      const items = $("#whIn").value.split(/\r?\n/).filter(Boolean);
      if(!items.length) return toast("请输入选项");
      $("#whOut").textContent = "🎉 " + items[Math.floor(Math.random()*items.length)];
    };
  }
  if (id === "joke") {
    const jokes = [
      "程序员最讨厌的事：写文档。第二讨厌的事：别人不写文档。",
      "一个字节走进酒吧，酒保说：你怎么一个人？字节说：我是扩展 ASCII。",
      "为什么程序员分不清万圣节和圣诞节？因为 Oct 31 == Dec 25。",
      "产品经理说需求很简单，就像画条蛇。程序员画完后：怎么变成龙了？",
      "bug 的定义：功能尚未被发现的特性。"
    ];
    $("#jkGo").onclick = () => $("#jkOut").textContent = jokes[Math.floor(Math.random()*jokes.length)];
  }
  if (id === "decision") {
    $("#decGo").onclick = () => {
      const items = $("#decIn").value.split(/\r?\n/).filter(Boolean);
      if(!items.length) return toast("请输入选项");
      $("#decOut").textContent = "就选这个：\n" + items[Math.floor(Math.random()*items.length)];
    };
  }
  if (id === "namegen") {
    $("#ngGo").onclick = () => {
      const pre = ["埃","阿","塞","德","雷","凯","奥","维","索","莱"];
      const mid = ["拉","里","恩","尔","安","奥","伊","亚","德","克"];
      const suf = ["斯","恩","娅","娜","尔","特","多","利","斯","安"];
      const n = Math.min(20, +$("#ngN").value||8);
      const out = Array.from({length:n}, () => pre[Math.floor(Math.random()*pre.length)] + mid[Math.floor(Math.random()*mid.length)] + suf[Math.floor(Math.random()*suf.length)]);
      $("#ngOut").textContent = out.join("\n");
    };
  }
  if (id === "regexlab") {
    $("#rlGo").onclick = () => {
      try {
        const re = new RegExp($("#rlReg").value, "g");
        const text = $("#rlText").value;
        const matches = text.match(re);
        $("#rlOut").textContent = matches ? `匹配 ${matches.length} 处:\n` + matches.join("\n") : "无匹配";
      } catch(e) { $("#rlOut").textContent = "❌ " + e.message; }
    };
  }
  if (id === "httpcode") {
    const map = {100:"Continue",200:"OK",201:"Created",204:"No Content",301:"Moved Permanently",302:"Found",304:"Not Modified",400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",418:"I'm a teapot",429:"Too Many Requests",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"};
    $("#hcGo2").onclick = () => {
      const c = +$("#hcIn2").value;
      $("#hcOut2").textContent = map[c] ? `${c} ${map[c]}` : `${c} （未收录）`;
    };
  }

  // ===== 学习教育 =====
  if (id === "mathdrill") {
    let answer = 0;
    $("#mdGo").onclick = () => {
      const type = $("#mdType").value;
      let a = Math.floor(Math.random()*50)+1, b = Math.floor(Math.random()*50)+1;
      if (type==="sub" && a<b) [a,b]=[b,a];
      if (type==="div") { b = Math.floor(Math.random()*9)+1; a = b * (Math.floor(Math.random()*12)+1); }
      const ops = {add:["+",a+b], sub:["-",a-b], mul:["×",a*b], div:["÷",a/b]};
      const [op, ans] = ops[type];
      answer = ans;
      $("#mdOut").textContent = `${a} ${op} ${b} = ?`;
      $("#mdAns").value = "";
      $("#mdResult").textContent = "";
    };
    $("#mdCheck").onclick = () => {
      const user = +$("#mdAns").value;
      $("#mdResult").textContent = user === answer ? "✅ 正确！" : `❌ 不对，答案是 ${answer}`;
    };
  }
  if (id === "score") {
    $("#scGo3").onclick = () => {
      const lines = $("#scIn3").value.trim().split(/\r?\n/).filter(Boolean);
      let totalScore=0, totalCredit=0;
      for (const line of lines) {
        const [s,c] = line.split(/[,，\s]+/).map(Number);
        if (!isNaN(s) && !isNaN(c)) { totalScore += s*c; totalCredit += c; }
      }
      if (!totalCredit) return toast("请按 分数,学分 格式填写");
      $("#scOut3").textContent = `加权平均分: ${(totalScore/totalCredit).toFixed(2)}\n总学分: ${totalCredit}`;
    };
  }
  if (id === "formula") {
    $("#fmOut").textContent = `常用公式速查：\n\n圆面积: πr²\n圆周长: 2πr\n球体积: 4/3πr³\n勾股: a²+b²=c²\n一元二次: x=(-b±√(b²-4ac))/2a\n等差求和: n(a1+an)/2\n等比求和: a1(1-qⁿ)/(1-q)\n质能方程: E=mc²`;
  }

  // ===== 理财 =====
  if (id === "budget") {
    $("#bdGo").onclick = () => {
      const income=+$("#bdIncome").value, fixed=+$("#bdFixed").value, savePct=+$("#bdSave").value;
      const save = income * savePct / 100;
      const flexible = income - fixed - save;
      $("#bdOut").textContent = `月收入: ${income}\n固定支出: ${fixed}\n储蓄 (${savePct}%): ${save.toFixed(0)}\n灵活支配: ${flexible.toFixed(0)}`;
    };
  }
  if (id === "savings") {
    $("#svGo").onclick = () => {
      const goal=+$("#svGoal").value, monthly=+$("#svMonth").value, rate=+$("#svRate").value/100/12;
      if (!monthly) return;
      let bal=0, months=0;
      while (bal < goal && months < 1200) {
        bal = bal * (1+rate) + monthly;
        months++;
      }
      $("#svOut").textContent = months>=1200 ? "超过100年，请调整" : `约需 ${months} 个月（${(months/12).toFixed(1)} 年）\n到期约: ${bal.toFixed(0)} 元`;
    };
  }
  if (id === "inflation") {
    $("#infGo").onclick = () => {
      const amt=+$("#infAmt").value, rate=+$("#infRate").value/100, y=+$("#infY").value;
      const future = amt * Math.pow(1+rate, y);
      const power = amt / Math.pow(1+rate, y);
      $("#infOut").textContent = `${y} 年后等值: ${future.toFixed(0)} 元\n届时购买力约等于现在: ${power.toFixed(0)} 元`;
    };
  }
  if (id === "fire") {
    $("#fireGo").onclick = () => {
      const exp=+$("#fireExp").value, rate=+$("#fireRate").value/100;
      const fireNum = exp / rate;
      $("#fireOut").textContent = `FIRE 数字（财务自由本金）: ${fireNum.toFixed(0)} 元\n按 ${rate*100}% 安全提取率，可覆盖年支出 ${exp}`;
    };
  }

  // ===== 旅行 =====
  if (id === "packing2") {
    const lists = {
      weekend: "身份证/钥匙\n充电器/充电宝\n换洗衣物 1 套\n洗漱袋\n现金/银行卡\n雨伞",
      business: "身份证/名片\n笔记本/笔\n正装/衬衫\n充电器/转接头\n演示资料\n充电宝",
      long: "护照/签证/机票\n衣物按天数\n洗漱全套\n药品/创可贴\n转换插头\n墨镜/帽子\n充电宝×2\n旅行保险单"
    };
    $("#pk2Go").onclick = () => $("#pk2Out").textContent = lists[$("#pk2Type").value] || "";
  }
  if (id === "weather") {
    $("#weGo").onclick = () => {
      const t = +$("#weTemp").value;
      let tip = "羽绒服、厚毛衣";
      if (t >= 5) tip = "外套、长袖";
      if (t >= 15) tip = "薄外套或长袖";
      if (t >= 22) tip = "短袖、薄裤";
      if (t >= 28) tip = "短袖短裤、注意防晒";
      $("#weOut").textContent = `${t}°C 建议: ${tip}`;
    };
  }
  if (id === "adapter") {
    $("#adOut").textContent = `电源插头类型参考：\n\n中国大陆: A/C/I 型\n香港/英国: G 型\n欧洲大部分: C/F 型\n美国/加拿大/日本: A/B 型\n澳大利亚: I 型\n建议出门带万能转换头`;
  }

  // ===== 文本 =====
  if (id === "extractnum") {
    $("#enGo").onclick = () => {
      const m = $("#enIn").value.match(/-?\d+\.?\d*/g) || [];
      $("#enOut").textContent = m.length ? m.join("\n") : "未找到数字";
    };
  }
  if (id === "extractcn") {
    $("#ecnGo").onclick = () => {
      const m = $("#ecnIn").value.match(/[\u4e00-\u9fa5]+/g) || [];
      $("#ecnOut").textContent = m.join("") || "未找到中文";
    };
  }

  // ===== 编码 =====
  if (id === "ulid") {
    $("#ulidGo").onclick = () => {
      const enc = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
      const n = Math.min(20, +$("#ulidN").value||5);
      const out = [];
      for (let i=0;i<n;i++) {
        let t = Date.now().toString(16).toUpperCase().padStart(12,"0");
        let r = "";
        const arr = new Uint8Array(10);
        crypto.getRandomValues(arr);
        for (const b of arr) r += enc[b%32];
        out.push(t.slice(-10) + r.slice(0,16));
      }
      $("#ulidOut").textContent = out.join("\n");
    };
  }
  if (id === "shortid") {
    $("#sidGo").onclick = () => {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
      const len = Math.min(32, +$("#sidLen").value||10);
      const n = Math.min(20, +$("#sidN").value||5);
      const out = [];
      for (let i=0;i<n;i++) {
        const arr = new Uint32Array(len);
        crypto.getRandomValues(arr);
        out.push(Array.from(arr, x => chars[x%chars.length]).join(""));
      }
      $("#sidOut").textContent = out.join("\n");
    };
  }

  // ===== 趣味/时间 =====
  if (id === "ageplanet") {
    $("#apGo").onclick = () => {
      const age = +$("#apAge").value||25;
      const planets = {水星:0.2408467,金星:0.61519726,火星:1.8808158,木星:11.862615,土星:29.447498,天王星:84.016846,海王星:164.79132};
      let out = `地球: ${age} 岁\n`;
      for (const [name,y] of Object.entries(planets)) out += `${name}: ${(age/y).toFixed(2)} 岁\n`;
      $("#apOut").textContent = out;
    };
  }
  if (id === "dayofyear") {
    $("#doyGo").onclick = () => {
      const d = new Date($("#doyIn").value);
      if (isNaN(d)) return toast("请选择日期");
      const start = new Date(d.getFullYear(),0,0);
      const day = Math.floor((d-start)/86400000);
      $("#doyOut").textContent = `${d.getFullYear()} 年的第 ${day} 天`;
    };
  }

  // ===== 生活 =====
  if (id === "grocery") {
    $("#grOut").textContent = `购物清单模板：\n\n蔬菜: 青菜、番茄、土豆、洋葱\n肉蛋: 鸡蛋、鸡胸肉、牛肉\n主食: 米饭、面条、面包\n乳品: 牛奶、酸奶\n调味: 盐、酱油、油\n日用: 纸巾、垃圾袋`;
  }
  if (id === "chore") {
    $("#chGo").onclick = () => {
      const chores = $("#chIn").value.split(/\r?\n/).filter(Boolean);
      const people = $("#chPeople").value.split(/\r?\n/).filter(Boolean);
      if (!chores.length || !people.length) return toast("请填写家务和人员");
      const out = {};
      people.forEach(p => out[p]=[]);
      chores.forEach((c,i) => out[people[i%people.length]].push(c));
      $("#chOut").textContent = Object.entries(out).map(([p,list]) => `${p}:\n  ${list.join("、")}`).join("\n\n");
    };
  }

  // ===== 办公 =====
  if (id === "agenda") {
    $("#agOut").textContent = `会议议程模板：\n\n1. 开场与目标确认 (5min)\n2. 进度同步 (15min)\n3. 问题讨论 (20min)\n4. 决策与分工 (15min)\n5. 下一步与截止时间 (5min)\n\n记录人：\n参会人：`;
  }
  if (id === "standup") {
    $("#suOut").textContent = `每日站会模板：\n\n昨天完成了：\n-\n\n今天计划：\n-\n\n遇到的阻碍：\n-\n\n需要的支持：\n-`;
  }

  // ===== 健康 =====
  if (id === "fasting") {
    $("#fsGo").onclick = () => {
      const start = new Date($("#fsStart").value);
      if (isNaN(start)) return toast("请选择时间");
      const end = new Date(start.getTime() + 16*3600000);
      $("#fsOut").textContent = `禁食开始: ${start.toLocaleString()}\n可进食时间: ${end.toLocaleString()}\n（16:8 轻断食）`;
    };
  }
  if (id === "stretch") {
    $("#stOut3").textContent = `久坐拉伸建议（每 1 小时）：\n\n1. 颈部左右缓慢转动\n2. 肩部耸肩放松\n3. 手腕绕环\n4. 站立伸展背部\n5. 腿部提膝/踢腿\n6. 走动 2-3 分钟`;
  }

  // ===== 安全 =====
  if (id === "passphrase") {
    const words = ["apple","bridge","cloud","dragon","eagle","forest","galaxy","harbor","island","jungle","knight","lemon","mountain","nebula","ocean","planet","quartz","river","sunset","thunder","umbrella","valley","whisper","xenon","yellow","zebra"];
    $("#ppGo2").onclick = () => {
      const n = Math.min(8, Math.max(3, +$("#ppN2").value||4));
      const arr = new Uint32Array(n);
      crypto.getRandomValues(arr);
      $("#ppOut2").textContent = Array.from(arr, x => words[x%words.length]).join("-");
    };
  }
  if (id === "otp") {
    $("#otpGo").onclick = () => {
      const n = Math.min(20, +$("#otpN").value||5);
      const out = [];
      for (let i=0;i<n;i++) {
        const arr = new Uint32Array(6);
        crypto.getRandomValues(arr);
        out.push(Array.from(arr, x => x%10).join(""));
      }
      $("#otpOut").textContent = out.join("\n");
    };
  }

  // ===== 数学 =====
  if (id === "series") {
    $("#seGo").onclick = () => {
      const type=$("#seType").value, a=+$("#seA").value, d=+$("#seD").value, n=+$("#seN").value;
      if (type==="arith") {
        const sum = n*(2*a+(n-1)*d)/2;
        $("#seOut").textContent = `等差数列求和: ${sum}\n末项: ${a+(n-1)*d}`;
      } else {
        if (d===1) $("#seOut").textContent = `求和: ${a*n}`;
        else {
          const sum = a*(1-Math.pow(d,n))/(1-d);
          $("#seOut").textContent = `等比数列求和: ${sum.toFixed(4)}\n末项: ${(a*Math.pow(d,n-1)).toFixed(4)}`;
        }
      }
    };
  }

  // ===== 开发 =====
  if (id === "breakpoint") {
    $("#bpOut").textContent = `常用响应式断点：\n\n/* 手机 */\n@media (max-width: 640px) { }\n\n/* 平板 */\n@media (min-width: 768px) { }\n\n/* 桌面 */\n@media (min-width: 1024px) { }\n\n/* 大屏 */\n@media (min-width: 1280px) { }`;
  }
  // ===== 美食 / 社交 / 更多 =====
  if (id === "recipe2") {
    $("#rp2Go").onclick = () => {
      const oldN = +$("#rp2Old").value || 1, newN = +$("#rp2New").value || 1;
      const ratio = newN / oldN;
      const lines = $("#rp2In").value.split(/\r?\n/).filter(Boolean);
      const out = lines.map(line => {
        const m = line.match(/^(.+?)\s+([\d.]+)\s*(.*)$/);
        if (!m) return line;
        return `${m[1]} ${(parseFloat(m[2])*ratio).toFixed(1)} ${m[3]}`;
      });
      $("#rp2Out").textContent = out.join("\n");
    };
  }
  if (id === "coffee") {
    $("#cfGo2").onclick = () => {
      const g = +$("#cfG").value, r = +$("#cfRatio").value;
      $("#cfOut2").textContent = `粉: ${g}g\n水: ${(g*r).toFixed(0)}g / ml\n比例 1:${r}`;
    };
  }
  if (id === "baking") {
    $("#bkGo").onclick = () => {
      const v = +$("#bkVal").value, f = $("#bkFrom").value, t = $("#bkTo").value;
      let c = f === "C" ? v : (v-32)*5/9;
      const r = t === "C" ? c : c*9/5+32;
      $("#bkOut").textContent = `${v}°${f} = ${r.toFixed(1)}°${t}`;
    };
  }
  if (id === "hashtag") {
    $("#htGo").onclick = () => {
      const words = $("#htIn").value.trim().split(/\s+/).filter(Boolean);
      const tags = words.map(w => "#" + w.replace(/^#/, ""));
      $("#htOut").textContent = tags.join(" ") + "\n\n" + tags.join("\n");
    };
  }
  if (id === "bio") {
    $("#bioGo").onclick = () => {
      const job = $("#bioJob").value || "创作者", hobby = $("#bioHobby").value || "生活";
      $("#bioOut").textContent = `${job} | 热爱${hobby}\n记录与分享 ✨\n合作请私信`;
    };
  }
  if (id === "greeting") {
    const map = {
      morning: "早安！新的一天，加油 ☀️",
      meeting: "大家好，感谢准时参加，我们开始今天的议题。",
      customer: "您好，感谢联系我们，请问有什么可以帮您？",
      festival: "节日快乐！祝您和家人幸福安康 🎉"
    };
    $("#grGo2").onclick = () => $("#grOut2").textContent = map[$("#grType").value];
  }
  if (id === "bullet") {
    $("#buGo").onclick = () => {
      $("#buOut").textContent = $("#buIn").value.split(/\r?\n/).filter(Boolean).map(l => "• " + l).join("\n");
    };
  }
  if (id === "checkbox") {
    $("#cbGo2").onclick = () => {
      $("#cbOut2").textContent = $("#cbIn2").value.split(/\r?\n/).filter(Boolean).map(l => "- [ ] " + l).join("\n");
    };
  }
  if (id === "trimlines") {
    $("#tlGo").onclick = () => {
      $("#tlOut").textContent = $("#tlIn").value.split(/\r?\n/).map(l => l.trim()).join("\n");
    };
  }
  if (id === "a1z26") {
    $("#a1Enc").onclick = () => {
      $("#a1Out").textContent = $("#a1In").value.toUpperCase().replace(/[A-Z]/g, c => (c.charCodeAt(0)-64) + " ").trim();
    };
    $("#a1Dec").onclick = () => {
      $("#a1Out").textContent = $("#a1In").value.split(/\s+/).map(n => {
        const x = parseInt(n);
        return x>=1 && x<=26 ? String.fromCharCode(64+x) : n;
      }).join("");
    };
  }
  if (id === "binaryascii") {
    $("#baEnc").onclick = () => {
      $("#baOut").textContent = [...$("#baIn").value].map(c => c.charCodeAt(0).toString(2).padStart(8,"0")).join(" ");
    };
    $("#baDec").onclick = () => {
      try {
        const bytes = $("#baIn").value.trim().split(/\s+/).map(b => parseInt(b,2));
        $("#baOut").textContent = String.fromCharCode(...bytes);
      } catch { $("#baOut").textContent = "❌ 解码失败"; }
    };
  }
  if (id === "prime3") {
    $("#pr3Go").onclick = () => {
      const a = Math.max(2, +$("#pr3A").value), b = Math.min(10000, +$("#pr3B").value);
      const isP = n => { for(let i=2;i*i<=n;i++) if(n%i===0) return false; return n>1; };
      const list = [];
      for(let i=a;i<=b;i++) if(isP(i)) list.push(i);
      $("#pr3Out").textContent = list.length ? list.join(", ") : "无质数";
    };
  }
  if (id === "pascal") {
    $("#pasGo").onclick = () => {
      const n = Math.min(20, +$("#pasN").value||8);
      const rows = [[1]];
      for(let i=1;i<n;i++){
        const prev = rows[i-1], row=[1];
        for(let j=1;j<i;j++) row.push(prev[j-1]+prev[j]);
        row.push(1);
        rows.push(row);
      }
      $("#pasOut").textContent = rows.map(r => r.join(" ")).join("\n");
    };
  }
  if (id === "baseconv") {
    $("#bcGo2").onclick = () => {
      try {
        const num = parseInt($("#bcIn2").value, +$("#bcFrom").value);
        if (isNaN(num)) throw new Error("无效");
        $("#bcOut2").textContent = num.toString(+$("#bcTo").value).toUpperCase();
      } catch(e) { $("#bcOut2").textContent = "❌ " + e.message; }
    };
  }
  if (id === "riddle") {
    const list = [
      "什么东西越洗越脏？——水",
      "什么帽不能戴？——龙井（龙井茶）",
      "哪座桥不能过车？——眉毛（眉桥）",
      "什么门永远关不上？——球门",
      "什么瓜不能吃？——傻瓜"
    ];
    $("#rdGo").onclick = () => $("#rdOut").textContent = list[Math.floor(Math.random()*list.length)];
  }
  if (id === "fact") {
    const list = [
      "章鱼有三颗心脏。",
      "蜂蜜几乎不会变质。",
      "香蕉是浆果，草莓不是。",
      "光从太阳到地球大约要 8 分钟。",
      "人体约 60% 是水。"
    ];
    $("#fcGo").onclick = () => $("#fcOut").textContent = list[Math.floor(Math.random()*list.length)];
  }
  if (id === "subscribe") {
    $("#subGo").onclick = () => {
      const m=+$("#subM").value, y=+$("#subY").value;
      const yearIfMonth = m*12;
      const save = yearIfMonth - y;
      $("#subOut").textContent = `月付年总成本: ${yearIfMonth}\n年付: ${y}\n年付可省: ${save.toFixed(0)}（${(save/yearIfMonth*100).toFixed(1)}%）`;
    };
  }
  if (id === "tipcalc3") {
    $("#tc3Go").onclick = () => {
      const amt=+$("#tc3Amt").value;
      $("#tc3Out").textContent = [10,15,18,20].map(p => `${p}%: 小费 ${(amt*p/100).toFixed(2)} / 合计 ${(amt*(1+p/100)).toFixed(2)}`).join("\n");
    };
  }
  if (id === "unitfuel") {
    $("#ufGo").onclick = () => {
      const v=+$("#ufVal").value, f=$("#ufFrom").value, t=$("#ufTo").value;
      // L/100km <-> MPG: mpg = 235.215 / (L/100km)
      let l100 = f==="l100" ? v : 235.215/v;
      const r = t==="l100" ? l100 : 235.215/l100;
      $("#ufOut").textContent = `${v} ${f} ≈ ${r.toFixed(2)} ${t}`;
    };
  }
  if (id === "vcard") {
    $("#vcGo").onclick = () => {
      const n=$("#vcName").value, tel=$("#vcTel").value, email=$("#vcEmail").value, org=$("#vcOrg").value;
      $("#vcOut").textContent = `BEGIN:VCARD\nVERSION:3.0\nFN:${n}\nTEL:${tel}\nEMAIL:${email}\nORG:${org}\nEND:VCARD`;
    };
  }
  if (id === "randomdate") {
    $("#rdGo2").onclick = () => {
      const s = new Date($("#rdStart").value).getTime(), e = new Date($("#rdEnd").value).getTime();
      if (isNaN(s)||isNaN(e)||e<s) return toast("请选择有效日期范围");
      const n = Math.min(30, +$("#rdN").value||5);
      const out = [];
      for(let i=0;i<n;i++){
        const t = s + Math.random()*(e-s);
        out.push(new Date(t).toLocaleDateString("zh-CN"));
      }
      $("#rdOut2").textContent = out.join("\n");
    };
  }
  if (id === "truncate") {
    $("#trOut").textContent = `/* 单行省略 */\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* 多行省略 */\n.line-clamp-2 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}`;
  }
  if (id === "skeleton") {
    $("#skOut").textContent = `.skeleton {\n  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes shimmer {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}`;
  }
  if (id === "pregnancy3") {
    $("#pr3Go2").onclick = () => {
      const d = new Date($("#pr3Date").value);
      if (isNaN(d)) return toast("请选择日期");
      const now = new Date();
      const days = Math.floor((now-d)/86400000);
      const weeks = Math.floor(days/7), rem = days%7;
      $("#pr3Out2").textContent = `孕周约: ${weeks} 周 + ${rem} 天\n总天数: ${days}`;
    };
  }
  if (id === "firstaid") {
    $("#faOut2").textContent = `急救口诀参考：\n\n止血: 压迫止血，抬高伤处\n烫伤: 冲脱泡盖送（冷水冲、脱衣、泡、盖、送医）\n心肺复苏: 胸外按压 30 次 + 人工呼吸 2 次\n海姆立克: 腹部冲击，清除气道异物\n\n（仅作科普，紧急情况请拨打 120）`;
  }
  // ===== 小游戏 / 法律 / 更多 =====
  if (id === "tictactoe") {
    let board = Array(9).fill(""), turn = "X", over = false;
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const check = () => {
      for (const [a,b,c] of win) if (board[a] && board[a]===board[b] && board[a]===board[c]) return board[a];
      return board.every(x=>x) ? "平" : null;
    };
    const render = () => {
      $("#tttBoard").innerHTML = board.map((v,i) => `<button style="width:70px;height:70px;font-size:1.5em;border-radius:8px;border:1px solid var(--border);background:var(--panel2);cursor:pointer" data-i="${i}">${v||""}</button>`).join("");
      $$("#tttBoard button").forEach(b => b.onclick = () => {
        const i = +b.dataset.i;
        if (over || board[i]) return;
        board[i] = turn;
        const w = check();
        if (w) { over = true; $("#tttOut").textContent = w==="平" ? "平局！" : w + " 获胜！"; render(); return; }
        turn = turn==="X" ? "O" : "X";
        // simple AI
        if (turn==="O" && !over) {
          const empty = board.map((v,i)=>v?null:i).filter(x=>x!==null);
          const pick = empty[Math.floor(Math.random()*empty.length)];
          board[pick] = "O";
          const w2 = check();
          if (w2) { over = true; $("#tttOut").textContent = w2==="平" ? "平局！" : w2 + " 获胜！"; }
          turn = "X";
        }
        render();
      });
    };
    $("#tttReset").onclick = () => { board=Array(9).fill(""); turn="X"; over=false; $("#tttOut").textContent=""; render(); };
    render();
  }
  if (id === "reaction") {
    let t0 = 0, waiting = false;
    const el = $("#rxOut");
    el.onclick = () => {
      if (!waiting && t0===0) {
        el.textContent = "等待变绿…";
        el.style.background = "#c45c5c";
        waiting = true;
        setTimeout(() => {
          if (!waiting) return;
          el.style.background = "#5cc45c";
          el.textContent = "点击！";
          t0 = Date.now();
        }, 1000 + Math.random()*2000);
      } else if (waiting && t0===0) {
        waiting = false;
        el.textContent = "太早了！点击重来";
        el.style.background = "var(--panel2)";
      } else if (t0) {
        const ms = Date.now() - t0;
        el.textContent = `反应时间: ${ms} ms\n点击再测`;
        el.style.background = "var(--panel2)";
        t0 = 0; waiting = false;
      }
    };
  }
  if (id === "contract") {
    $("#ctOut2").textContent = `签合同前检查清单：\n\n1. 双方主体名称是否准确\n2. 标的、数量、价款是否明确\n3. 履行期限与地点\n4. 违约责任是否对等\n5. 争议解决方式（诉讼/仲裁）\n6. 签字盖章是否齐全\n7. 附件与补充协议\n8. 保留原件`;
  }
  if (id === "lease") {
    $("#leOut").textContent = `租房合同必看：\n\n• 租期与租金支付方式\n• 押金数额与退还条件\n• 水电物业费用承担\n• 维修责任划分\n• 转租与提前退租条款\n• 房屋现状确认（建议拍照）\n• 房东产权证明`;
  }
  if (id === "disclaimer") {
    $("#dsOut").textContent = `免责声明模板：\n\n本站提供的工具与信息仅供参考，不构成任何专业建议。用户因使用本站内容所产生的任何损失，本站不承担责任。请在使用前自行核实信息准确性。\n\n© 保留所有权利`;
  }
  if (id === "palindrome") {
    $("#pdGo").onclick = () => {
      const s = $("#pdIn").value.replace(/\s/g,"").toLowerCase();
      const rev = [...s].reverse().join("");
      $("#pdOut").textContent = s && s===rev ? "✅ 是回文" : "❌ 不是回文";
    };
  }
  if (id === "template") {
    $("#tpGo").onclick = () => {
      let t = $("#tpIn").value;
      $("#tpVars").value.split(/\r?\n/).forEach(line => {
        const i = line.indexOf("=");
        if (i>0) {
          const k = line.slice(0,i).trim(), v = line.slice(i+1);
          t = t.split("{{"+k+"}}").join(v);
        }
      });
      $("#tpOut").textContent = t;
    };
  }
  if (id === "wordfreq2") {
    $("#wf2Go").onclick = () => {
      const words = $("#wf2In").value.toLowerCase().match(/[\u4e00-\u9fa5]+|[a-z0-9]+/g) || [];
      const map = {};
      words.forEach(w => map[w]=(map[w]||0)+1);
      const n = +$("#wf2N").value||10;
      const top = Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,n);
      $("#wf2Out").textContent = top.map(([w,c],i)=>`${i+1}. ${w} (${c})`).join("\n");
    };
  }
  if (id === "rule72") {
    $("#r72Go").onclick = () => {
      const r = +$("#r72").value;
      if (!r) return;
      $("#r72Out").textContent = `约 ${ (72/r).toFixed(1) } 年本金翻倍\n（72 法则粗算）`;
    };
  }
  if (id === "eisenhower") {
    $("#eiOut").textContent = `四象限法则：\n\n① 重要且紧急 → 立即做\n② 重要不紧急 → 计划做\n③ 不重要但紧急 → 委托做\n④ 不重要不紧急 → 少做/不做\n\n尽量把时间放在第②象限。`;
  }
  if (id === "smartgoal") {
    $("#sgOut").textContent = `SMART 目标：\n\nS Specific 具体\nM Measurable 可衡量\nA Achievable 可实现\nR Relevant 相关\nT Time-bound 有时限\n\n示例：在 3 个月内完成工具箱 800 个工具并上线。`;
  }
  if (id === "protein") {
    $("#prGo2").onclick = () => {
      const w=+$("#prW").value, f=+$("#prAct").value;
      $("#prOut2").textContent = `建议每日蛋白质: ${(w*f).toFixed(0)} g`;
    };
  }
  if (id === "measure2") {
    $("#msOut").textContent = `烘焙常用换算：\n\n1 杯面粉 ≈ 120g\n1 杯糖 ≈ 200g\n1 杯黄油 ≈ 227g\n1 汤匙 ≈ 15ml\n1 茶匙 ≈ 5ml\n1 杯液体 ≈ 240ml`;
  }
  if (id === "caption") {
    const map = {
      travel: "足迹所至，皆是风景 ✈️",
      food: "今天的快乐是吃出来的 🍜",
      work: "认真对待每一天的工作 💼",
      mood: "把普通的日子过成节日 ✨"
    };
    $("#capGo").onclick = () => $("#capOut").textContent = map[$("#capType").value];
  }
  if (id === "password4") {
    const adj = ["swift","bright","calm","noble","lucky","brave","clever","happy"];
    const noun = ["tiger","river","cloud","eagle","forest","planet","castle","hammer"];
    $("#pw4Go").onclick = () => {
      const n = Math.min(20, +$("#pw4N").value||5);
      const out = [];
      for (let i=0;i<n;i++) {
        const a = adj[Math.floor(Math.random()*adj.length)];
        const b = noun[Math.floor(Math.random()*noun.length)];
        const num = Math.floor(Math.random()*90)+10;
        out.push(a + "-" + b + "-" + num);
      }
      $("#pw4Out").textContent = out.join("\n");
    };
  }
  if (id === "dice3") {
    $("#d3Go").onclick = () => {
      const f = Math.max(2, +$("#d3F").value||6), n = Math.min(10000, +$("#d3N").value||100);
      const cnt = Array(f+1).fill(0);
      for (let i=0;i<n;i++) cnt[Math.floor(Math.random()*f)+1]++;
      $("#d3Out").textContent = cnt.slice(1).map((c,i)=>`${i+1}: ${c} 次 (${(c/n*100).toFixed(1)}%)`).join("\n");
    };
  }
  if (id === "semver") {
    $("#svOut2").textContent = `语义化版本 MAJOR.MINOR.PATCH\n\nMAJOR: 不兼容的 API 变更\nMINOR: 向下兼容的功能新增\nPATCH: 向下兼容的问题修正\n\n示例: 1.4.2 → 修 bug 变为 1.4.3`;
  }
  if (id === "readme") {
    $("#rmOut").textContent = `# 项目名\n\n简短描述。\n\n## 功能\n- 功能1\n- 功能2\n\n## 安装\n\`\`\`bash\nnpm install\n\`\`\`\n\n## 使用\n\`\`\`bash\nnpm start\n\`\`\`\n\n## License\nMIT`;
  }
  if (id === "gitflow") {
    $("#gfOut").textContent = `Git Flow 主干：\n\nmain/master  生产\ndevelop      开发集成分支\nfeature/*    功能分支\nrelease/*    发布准备\nhotfix/*    生产紧急修复\n\n合并方向：feature → develop → release → main`;
  }
  if (id === "quiz2") {
    const qs = [
      ["太阳系最大的行星是？", "木星"],
      ["HTTP 默认端口？", "80"],
      ["中国的首都？", "北京"],
      ["1 字节等于多少位？", "8"],
      ["圆周率约等于？", "3.14159"]
    ];
    let cur = null;
    $("#qzGo").onclick = () => {
      cur = qs[Math.floor(Math.random()*qs.length)];
      $("#qzOut").textContent = cur[0];
      $("#qzAns").textContent = "答案：" + cur[1];
    };
    $("#qzGo").click();
  }

  // ===== 音乐 / 摄影 / 更多 =====
  if (id === "bpm") {
    let times = [];
    $("#bpmOut").onclick = () => {
      const now = Date.now();
      times.push(now);
      times = times.filter(t => now - t < 5000);
      if (times.length >= 2) {
        const intervals = [];
        for (let i=1;i<times.length;i++) intervals.push(times[i]-times[i-1]);
        const avg = intervals.reduce((a,b)=>a+b,0)/intervals.length;
        const bpm = Math.round(60000/avg);
        $("#bpmOut").textContent = `BPM ≈ ${bpm}\n(再点继续)`;
      } else {
        $("#bpmOut").textContent = "继续点击…";
      }
    };
    $("#bpmReset").onclick = () => { times=[]; $("#bpmOut").textContent="点击打拍子测 BPM"; };
  }
  if (id === "exposure") {
    $("#exOut").textContent = `曝光三角：\n\n光圈 (f)：控制进光量与景深\n快门：控制进光时间与运动模糊\nISO：感光度，越高越亮但噪点多\n\n三者互相补偿，总曝光量不变时可调整风格。`;
  }
  if (id === "note") {
    $("#ntOut").textContent = `标准音 A4 = 440 Hz\n\nC4 261.63\nD4 293.66\nE4 329.63\nF4 349.23\nG4 392.00\nA4 440.00\nB4 493.88\nC5 523.25`;
  }
  if (id === "pythagoras") {
    $("#pyGo").onclick = () => {
      const a=+$("#pyA").value, b=+$("#pyB").value;
      $("#pyOut").textContent = `c = ${Math.sqrt(a*a+b*b).toFixed(4)}`;
    };
  }
  if (id === "timer2") {
    let left=0, timer=null;
    const pad=n=>String(n).padStart(2,"0");
    const render=()=>{const m=Math.floor(left/60),s=left%60;$("#tm2Out").textContent=`${pad(m)}:${pad(s)}`;};
    $("#tm2Start").onclick=()=>{
      if(timer) return;
      if(!left) left=Math.max(1,+$("#tm2M").value||5)*60;
      timer=setInterval(()=>{left--;render();if(left<=0){clearInterval(timer);timer=null;toast("时间到！");}},1000);
    };
    $("#tm2Reset").onclick=()=>{clearInterval(timer);timer=null;left=0;render();};
    render();
  }
  if (id === "lottery2") {
    $("#lot2Go").onclick = () => {
      const red = [];
      while(red.length<6){const n=Math.floor(Math.random()*33)+1;if(!red.includes(n))red.push(n);}
      red.sort((a,b)=>a-b);
      const blue = Math.floor(Math.random()*16)+1;
      $("#lot2Out").textContent = `红球: ${red.map(n=>String(n).padStart(2,"0")).join(" ")}\n蓝球: ${String(blue).padStart(2,"0")}`;
    };
  }
  if (id === "eightball") {
    const answers = ["是的","不是","很可能","别指望","再问一次","现在不好说","绝对是","有点悬"];
    $("#ebGo").onclick = () => $("#ebOut").textContent = "🎱 " + answers[Math.floor(Math.random()*answers.length)];
  }
  if (id === "rulethirds") {
    $("#rtOut").textContent = `三分法构图：\n\n把画面用两条横线、两条竖线均分成九宫格。\n主体放在交叉点或线上，比居中更有张力。\n地平线可放在上三分或下三分线。`;
  }
  if (id === "glass") {
    $("#glOut").textContent = `.glass {\n  background: rgba(255,255,255,0.15);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255,255,255,0.25);\n  border-radius: 16px;\n}`;
  }
  if (id === "salary2") {
    $("#sa2Go").onclick = () => {
      const m=+$("#sa2M").value, d=+$("#sa2D").value, h=+$("#sa2H").value;
      const daily = m/d, hourly = daily/h;
      $("#sa2Out").textContent = `日薪约: ${daily.toFixed(2)}\n时薪约: ${hourly.toFixed(2)}`;
    };
  }
  if (id === "rice") {
    $("#rcGo").onclick = () => {
      const c=+$("#rcCup").value||1;
      $("#rcOut").textContent = `米: ${c} 杯\n水约: ${(c*1.2).toFixed(1)} 杯（普通米饭）\n粥可增加到 1:5 ~ 1:8`;
    };
  }
  if (id === "egg") {
    $("#egOut").textContent = `水煮蛋参考（水开后计时）：\n\n溏心: 6-7 分钟\n半熟: 8 分钟\n全熟: 10-12 分钟\n\n冷水起煮则需再加 1-2 分钟。`;
  }
  if (id === "headline") {
    $("#hlOut").textContent = `标题公式示例：\n\n数字 + 结果：7 个方法让你…\n如何 + 结果：如何在 30 天内…\n疑问：为什么你的…总是…？\n对比：别再…，试试…\n清单：你必须知道的 N 件事`;
  }
  if (id === "license") {
    $("#lcOut").textContent = `常见开源协议：\n\nMIT：非常宽松，可商用，需保留版权声明\nApache 2.0：类似 MIT，含专利授权\nGPL：传染性，衍生作品需开源\nBSD：宽松，变体较多\n\n个人项目常用 MIT。`;
  }
  if (id === "keepnum") {
    $("#knGo").onclick = () => {
      $("#knOut").textContent = ($("#knIn").value.match(/\d+/g)||[]).join("") || "(无数字)";
    };
  }
  if (id === "acronym") {
    $("#acGo").onclick = () => {
      const words = $("#acIn").value.trim().split(/\s+/);
      $("#acOut").textContent = words.map(w => w[0]||"").join("").toUpperCase();
    };
  }
  if (id === "range") {
    $("#rgGo").onclick = () => {
      const a=+$("#rgA").value, b=+$("#rgB").value, s=+$("#rgS").value||1;
      const out = [];
      if (s===0) return toast("步长不能为0");
      if (s>0) for(let i=a;i<=b;i+=s) out.push(i);
      else for(let i=a;i>=b;i+=s) out.push(i);
      $("#rgOut").textContent = out.join(", ");
    };
  }
  if (id === "shuffle2") {
    $("#sh2Go").onclick = () => {
      const arr = $("#sh2In").value.split(/\r?\n/).filter(Boolean);
      for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
      $("#sh2Out").textContent = arr.join("\n");
    };
  }
  if (id === "agehours") {
    $("#ahGo").onclick = () => {
      const d = new Date($("#ahIn").value);
      if (isNaN(d)) return toast("请选择生日");
      const hours = Math.floor((Date.now()-d.getTime())/3600000);
      $("#ahOut").textContent = `大约已生活 ${hours.toLocaleString()} 小时\n约 ${(hours/24).toFixed(0)} 天`;
    };
  }
  if (id === "bigO") {
    $("#boOut").textContent = `常见时间复杂度：\n\nO(1) 常数\nO(log n) 二分\nO(n) 线性遍历\nO(n log n) 排序\nO(n²) 双重循环\nO(2ⁿ) 指数\nO(n!) 阶乘\n\n空间同理，优先关注时间。`;
  }
  if (id === "regex2") {
    $("#rx2Out").textContent = `正则元字符速查：\n\n. 任意字符  \\d 数字  \\w 单词字符  \\s 空白\n^ 开头  $ 结尾  \\b 单词边界\n* 0或多  + 1或多  ? 0或1\n{n} {n,} {n,m} 次数\n[] 字符集  | 或  () 分组\n(?=) 正向先行  (?!) 负向先行`;
  }

  // ===== 体育 / 宠物 / 更多 =====
  if (id === "scoreboard") {
    let a=0,b=0;
    const up=()=>{$("#sbAScore").textContent=a;$("#sbBScore").textContent=b;};
    $("#sbAPlus").onclick=()=>{a++;up();};
    $("#sbBPlus").onclick=()=>{b++;up();};
    $("#sbReset").onclick=()=>{a=0;b=0;up();};
  }
  if (id === "dogage") {
    $("#dgGo").onclick = () => {
      const y = +$("#dgAge").value;
      // rough: first year ~15, second ~9, then ~5 per year
      let human = 0;
      if (y <= 1) human = y * 15;
      else if (y <= 2) human = 15 + (y-1)*9;
      else human = 24 + (y-2)*5;
      $("#dgOut").textContent = `约等于人类 ${human.toFixed(0)} 岁`;
    };
  }
  if (id === "catage") {
    $("#ctGo").onclick = () => {
      const y = +$("#ctAge").value;
      let human = y <= 1 ? y*15 : y <= 2 ? 15+(y-1)*9 : 24+(y-2)*4;
      $("#ctOut").textContent = `约等于人类 ${human.toFixed(0)} 岁`;
    };
  }
  if (id === "fishTank") {
    $("#ftGo").onclick = () => {
      const l=+$("#ftL").value,w=+$("#ftW").value,h=+$("#ftH").value;
      const liters = l*w*h/1000;
      $("#ftOut").textContent = `容积约: ${liters.toFixed(1)} 升\n合 ${(liters*0.264).toFixed(1)} 加仑`;
    };
  }
  if (id === "petname") {
    const names = ["豆豆","奶茶","芝麻","可乐","布丁","年糕","汤圆","花生","毛球","小白","黑糖","奥利奥","芝士","饼干","云朵","土豆","瓜瓜","团子","粽子","花生"];
    $("#pnGo").onclick = () => {
      const n = Math.min(20, +$("#pnN").value||10);
      const out = [];
      for(let i=0;i<n;i++) out.push(names[Math.floor(Math.random()*names.length)] + (Math.random()>0.5?["仔","宝","酱",""][Math.floor(Math.random()*4)]:"" ));
      $("#pnOut").textContent = [...new Set(out)].join("\n");
    };
  }
  if (id === "leap") {
    $("#lpGo").onclick = () => {
      const y = +$("#lpY").value;
      const leap = (y%4===0 && y%100!==0) || y%400===0;
      $("#lpOut").textContent = leap ? `${y} 是闰年` : `${y} 不是闰年`;
    };
  }
  if (id === "weekend") {
    $("#weGo2").onclick = () => {
      const d = new Date().getDay();
      const days = d===6?0:d===0?6:6-d;
      $("#weOut2").textContent = days===0 ? "今天就是周六！" : `还有 ${days} 天到周六`;
    };
  }
  if (id === "eye") {
    $("#eyOut").textContent = `20-20-20 护眼法则：\n\n每看屏幕 20 分钟，\n抬头看至少 20 英尺（约 6 米）外，\n持续 20 秒以上。\n\n可配合眨眼与远近调节。`;
  }
  if (id === "fire2") {
    $("#f2Go").onclick = () => {
      let net=+$("#f2Net").value, save=+$("#f2Save").value, rate=+$("#f2Rate").value/100, goal=+$("#f2Goal").value;
      let years=0;
      while(net<goal && years<100){ net = net*(1+rate)+save; years++; }
      $("#f2Out").textContent = years>=100 ? "超过100年，请调整参数" : `约 ${years} 年达到 FIRE\n届时资产约 ${net.toFixed(0)}`;
    };
  }
  if (id === "marathon") {
    $("#maGo").onclick = () => {
      const parts = $("#maTime").value.split(":").map(Number);
      let sec = 0;
      if (parts.length===3) sec = parts[0]*3600+parts[1]*60+parts[2];
      else if (parts.length===2) sec = parts[0]*60+parts[1];
      const dist = +$("#maDist").value||42.195;
      const pace = sec/dist;
      const pm = Math.floor(pace/60), ps = Math.round(pace%60);
      $("#maOut").textContent = `配速: ${pm}'${String(ps).padStart(2,"0")}" /km\n时速: ${(3600/pace).toFixed(2)} km/h`;
    };
  }
  if (id === "textleet") {
    $("#ltGo").onclick = () => {
      const map = {a:"4",e:"3",i:"1",o:"0",s:"5",t:"7",A:"4",E:"3",I:"1",O:"0",S:"5",T:"7"};
      $("#ltOut").textContent = [...$("#ltIn").value].map(c=>map[c]||c).join("");
    };
  }
  if (id === "padzero") {
    $("#pzGo").onclick = () => {
      const w = +$("#pzW").value||4;
      $("#pzOut").textContent = $("#pzIn").value.split(/\r?\n/).map(l=>{
        const n=l.trim(); return n===""?"":n.padStart(w,"0");
      }).join("\n");
    };
  }
  if (id === "salt") {
    $("#saltGo").onclick = () => {
      const len = Math.min(64, +$("#saltLen").value||16);
      const arr = new Uint8Array(len);
      crypto.getRandomValues(arr);
      $("#saltOut").textContent = [...arr].map(b=>b.toString(16).padStart(2,"0")).join("");
    };
  }
  if (id === "mean") {
    $("#mnGo").onclick = () => {
      const nums = $("#mnIn").value.split(/[\n,，\s]+/).map(Number).filter(n=>!isNaN(n)&&n!==0||n===0);
      const filtered = $("#mnIn").value.split(/[\n,，\s]+/).map(Number).filter(n=>!isNaN(n));
      if(!filtered.length) return toast("请输入数字");
      const sum = filtered.reduce((a,b)=>a+b,0);
      const arith = sum/filtered.length;
      const geo = Math.exp(filtered.reduce((a,b)=>a+Math.log(Math.abs(b)||1e-12),0)/filtered.length);
      const harm = filtered.length / filtered.reduce((a,b)=>a+1/(b||1e-12),0);
      $("#mnOut").textContent = `算术平均: ${arith.toFixed(4)}\n几何平均: ${geo.toFixed(4)}\n调和平均: ${harm.toFixed(4)}`;
    };
  }
  if (id === "npm") {
    $("#npmOut").textContent = `npm 常用：\n\nnpm init -y\nnpm install [pkg]\nnpm i -D [pkg]\nnpm uninstall [pkg]\nnpm update\nnpm run [script]\nnpm publish\nnpm login`;
  }
  if (id === "gitlog") {
    $("#glOut2").textContent = `优雅 git log：\n\ngit log --oneline --graph --all\ngit log --pretty=format:"%h %s (%an)"\ngit log -p -2\ngit shortlog -sn`;
  }
  if (id === "flexcheatsheet") {
    $("#fx2Out").textContent = `display: flex\nflex-direction: row | column\njustify-content: flex-start | center | space-between | space-around | space-evenly\nalign-items: stretch | center | flex-start | flex-end\nflex-wrap: nowrap | wrap\ngap: 8px\nflex: 1`;
  }
  if (id === "randombool") {
    $("#rbGo").onclick = () => $("#rbOut").textContent = Math.random()<0.5 ? "true ✅" : "false ❌";
  }
  if (id === "compliment2") {
    const list = ["你真的很靠谱","思路很清晰","执行力很强","细节控得漂亮","沟通很舒服","进步肉眼可见","今天状态很好","值得信赖"];
    $("#cp2Go").onclick = () => $("#cp2Out").textContent = list[Math.floor(Math.random()*list.length)];
  }


}

}

function jsonToSimpleYaml(obj, indent = 0) {
  const pad = "  ".repeat(indent);
  if (Array.isArray(obj)) return obj.map(v => pad + "- " + (typeof v === "object" && v !== null ? "\n" + jsonToSimpleYaml(v, indent + 1) : String(v))).join("\n");
  if (typeof obj === "object" && obj !== null) {
    return Object.entries(obj).map(([k, v]) => typeof v === "object" && v !== null ? pad + k + ":\n" + jsonToSimpleYaml(v, indent + 1) : pad + k + ": " + String(v)).join("\n");
  }
  return String(obj);
}

function esc(s) {
  return String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function openSearch() {
  $("#searchModal").classList.remove("hidden");
  $("#searchInput").value = "";
  $("#searchInput").focus();
  renderSearch("");
}
$("#searchBtn").onclick = openSearch;
$("#heroSearch").onclick = openSearch;
$("#searchModal").onclick = e => { if (e.target === $("#searchModal")) $("#searchModal").classList.add("hidden"); };
$("#searchInput").oninput = e => renderSearch(e.target.value);

function renderSearch(q) {
  const s = q.trim().toLowerCase();
  const list = TOOLS.filter(t => !s || [t.name, t.desc, t.tags, catName(t.cat)].join(" ").toLowerCase().includes(s)).slice(0, 14);
  $("#searchResults").innerHTML = list.length
    ? list.map(t => `<button class="search-result" data-s="${t.id}"><span class="mini">${t.icon}</span><span><b>${t.name}</b><small>${t.desc}</small></span></button>`).join("")
    : `<div class="empty">没有找到「${esc(q)}」</div>`;
  $$("[data-s]").forEach(b => b.onclick = () => { $("#searchModal").classList.add("hidden"); openTool(b.dataset.s); });
}

// Init
catNav();
renderHome();
$$(".cat-btn").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
