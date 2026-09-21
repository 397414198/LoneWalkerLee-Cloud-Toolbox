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
  {id:"utility", icon:"🧮", name:"实用工具"},
  {id:"convert", icon:"🔄", name:"转换工具"},
  {id:"calc", icon:"📐", name:"计算 / 生活"}
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
  {id:"gcdlcm", cat:"calc", icon:"➗", name:"最大公约数/最小公倍数", desc:"计算 GCD 与 LCM", tags:"gcd lcm", featured:0}
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
    gcdlcm: `<div class="two"><div class="field"><label>数字 A</label><input id="glA" type="number" value="12"></div><div class="field"><label>数字 B</label><input id="glB" type="number" value="18"></div></div><button class="btn" id="glGo">计算</button><div class="result" id="glOut" style="margin-top:15px"></div>`
  };
  return map[id] || `<div class="empty">这个工具正在施工中 🚧</div>`;
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
}

function jsonToSimpleYaml(obj, indent = 0) {
  const pad = "  ".repeat(indent);
  if (Array.isArray(obj)) return obj.map(v => pad + "- " + (typeof v === "object" ? "\n" + jsonToSimpleYaml(v, indent + 1) : String(v))).join("\n");
  if (typeof obj === "object" && obj !== null) {
    return Object.entries(obj).map(([k, v]) => typeof v === "object" && v !== null ? `${pad}${k}:\n${jsonToSimpleYaml(v, indent + 1)}` : `${pad}${k}: ${v}`).join("\n");
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
