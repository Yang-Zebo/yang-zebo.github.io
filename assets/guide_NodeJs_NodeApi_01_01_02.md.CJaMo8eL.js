import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.BLHWSx9w.js";const u=JSON.parse('{"title":"包管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"guide/NodeJs/NodeApi/01/01_02.md","filePath":"guide/NodeJs/NodeApi/01/01_02.md","lastUpdated":1662456619000}'),e={name:"guide/NodeJs/NodeApi/01/01_02.md"},l=n(`<h1 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-label="Permalink to &quot;包管理工具&quot;">​</a></h1><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li><code>Node Package Manager</code>，也就是 <code>Node</code> 包管理器，是目前已经不仅仅是 <code>Node</code> 包管理器了，在前端项目中也在使用它来管理依赖的包。</li><li><a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm 包官网</a>，发布自己的包其实是发布到 <code>registry</code> 上面的，安装一个包时其实是从 <code>registry</code> 上面下载的包。</li><li>每一个项目都会有一个对应的配置文件配置文件在 <code>Node</code> 环境下面（无论是前端还是后端）就是 <code>package.json</code>。</li></ol><h3 id="npm-常用命令" tabindex="-1">npm 常用命令 <a class="header-anchor" href="#npm-常用命令" aria-label="Permalink to &quot;npm 常用命令&quot;">​</a></h3><ol><li>全局安装通常安装的包都是一些工具包：<code>yarn</code>、<code>webpack</code> 等。</li></ol><ul><li><code>axios</code>、<code>express</code>、<code>koa</code> 等库文件，全局安装了之后并不能让我们在所有的项目中使用 <code>axios</code> 等库。</li><li>项目安装会在当前目录下生产一个 <code>node_modules</code> 文件夹。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;package&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局安装。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;package&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 项目（局部）安装。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>局部安装分为开发时依赖和生产时依赖。</li></ol><ul><li>安装开发和生产依赖</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm i axios</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install axios</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>开发依赖</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;package&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">save</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dev</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;package&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm i </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;package&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> –</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>根据 <code>package.json</code> 中的依赖包安装。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>卸载某个依赖包</li></ol><ul><li><code>npm uninstall package</code></li><li><code>npm uninstall package --save-dev</code></li><li><code>npm uninstall package -D</code></li></ul><ol start="4"><li>强制重新安装与清除缓存</li></ol><ul><li>强制重新<code>build</code>: <code>npm rebuild</code></li><li>清除缓存: <code>npm</code> 版本小于 <code>7.0.0</code> 使用 <code>npm cache clean -f</code>，<code>npm</code> 版本大于 <code>7.0.0</code> 时不需要清除缓存，会报错，使用 <code>npm cache verify</code> 来确保一致性就行。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在 npm@5 中，npm 缓存通过将完整性不匹配视为缓存丢失来自修复损坏问题。</span></span>
<span class="line"><span>因此，从缓存中提取的数据保证是有效的。</span></span>
<span class="line"><span>如果你想确保一切都是一致的，那就用 npm cache verify 吧。</span></span>
<span class="line"><span>删除缓存只会让 npm 运行得更慢，而且不太可能纠正你可能遇到的任何问题!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一方面，如果你在调试安装程序的问题，或者依赖于写入空缓存的时间的竞争条件，</span></span>
<span class="line"><span>你可以使用 &#39;npm install --cache /tmp/empty-cache&#39;</span></span>
<span class="line"><span>来使用一个临时缓存，而不是使用实际的缓存。</span></span>
<span class="line"><span>如果您确定要删除整个缓存，请使用 &#39;--force&#39; 重新运行此命令。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h2><ol><li>创建配置文件</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm init </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建时需要填写信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm init </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建时使用默认信息</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>配置文件说明</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;project&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 项目名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前项目版本号</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A note project&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 描述信息，作为项目的基本描述</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yang zebo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 作者相关信息，发布时用到</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ISC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用的开源协议，发布时使用到</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;private&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 表示项目是否为私有，当值为 \`true\` 时，\`npm\` 是不能发布项目</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置程序的入口文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 设置脚本命令，可以通过 npm run xxx 运行。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // start、test、stop、restart 可以省略掉 run 直接通过 npm start 方式运行。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cross-env ENV_STAGE=dev vue-cli-service serve&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 无论开发环境还是生产环境都需要依赖的包</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 可以用 npm install --production 只安装 dependencies 里的依赖</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.5.2&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;axios&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.5.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 开发时的依赖包</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 可以通过 npm install &#39;package&#39; --save-dev，将它安装到 devDependencies 属性中</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.5.2&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;axios&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.5.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 用于指定 Node 和 \`NPM\` 的版本号</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 也可以指定所在的操作系统，只是很少用到。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;engines&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;= 6.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;npm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;= 3.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;os&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;darwin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;linux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 用于配置打包后的 JavaScript 浏览器的兼容情况。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;browserslist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&gt; 1%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;last 2 versions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;not ie &lt;= 8&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="package-lock-json" tabindex="-1">package-lock.json <a class="header-anchor" href="#package-lock-json" aria-label="Permalink to &quot;package-lock.json&quot;">​</a></h2><ol><li>在 npm5 后增加了缓存功能和版本锁，<code>npm install</code> 会根据此文件来下载一些包。</li><li>配置文件说明。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;project&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 项目名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 项目的版本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;lockfileVersion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// lock 文件的版本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;requires&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 requires 来跟着模块的依赖关系</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 项目的依赖</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;axios&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 依赖的实际安装版本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;resolved&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://......&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 下载的仓库</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;integrity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxxxxxxxxx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 缓存的索引，通过这个找到缓存的文件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;requires&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // axios 的生产环境依赖</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;follow-redirects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^1.10.0&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 安装时依赖需要符合的版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;follow-redirects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.13.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 依赖的实际安装版本 符合上面的条件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;resolved&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://......&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;integrity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxxxxxxxxx&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="包模块安装过程" tabindex="-1">包模块安装过程 <a class="header-anchor" href="#包模块安装过程" aria-label="Permalink to &quot;包模块安装过程&quot;">​</a></h2><h2 id="版本管理" tabindex="-1">版本管理 <a class="header-anchor" href="#版本管理" aria-label="Permalink to &quot;版本管理&quot;">​</a></h2><h3 id="包模块版本管理" tabindex="-1">包模块版本管理 <a class="header-anchor" href="#包模块版本管理" aria-label="Permalink to &quot;包模块版本管理&quot;">​</a></h3><ol><li><code>npm</code> 的包通常遵从 <code>semver</code> 版本规范。<a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">semver</a>。</li><li><code>semver</code> 版本规范是 <code>X.Y.Z</code>。</li></ol><ul><li><code>X</code> 主版本号：当你做了不兼容的 <code>API</code> 修改，可能不兼容之前的版本。</li><li><code>Y</code> 次版本号：当你做了向下兼容的功能性新增，新功能增加，但是兼容之前的版本。</li><li><code>Z</code> 修订号：当你做了向下兼容的问题修正没有新功能，修复了之前版本的 <code>bug</code>。</li></ul><ol start="3"><li><code>^</code>和<code>~</code>的区别:</li></ol><ul><li><code>^x.y.z</code>: 表示<code>x</code>是保持不变的，<code>y</code>和<code>z</code>永远安装最新的版本。</li><li><code>~x.y.z</code>: 表示<code>x</code>和<code>y</code>保持不变的，<code>z</code>永远安装最新的版本。</li></ul><h3 id="node-版本管理工具" tabindex="-1">node 版本管理工具 <a class="header-anchor" href="#node-版本管理工具" aria-label="Permalink to &quot;node 版本管理工具&quot;">​</a></h3><ol><li><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm windows 版本，点击到 github 上下载。</a></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvm-noinstall.zip  绿色免安装版，但使用时需进行配置</span></span>
<span class="line"><span>nvm-setup.zip  安装版，推荐使用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2 基本使用</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvm list  查看本地安装的所有版本</span></span>
<span class="line"><span>nvm list available  显示所有可下载的版本</span></span>
<span class="line"><span>nvm install 11.13.0  安装指定版本</span></span>
<span class="line"><span>nvm use 11.13.0  使用指定版本</span></span>
<span class="line"><span>nvm uninstall 11.13.0 卸载指定版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>macOS 版本使用 n 工具</li></ol><ul><li>安装 n，第一次安装一个版本成功后，node 会自动切换到该版本，之前的版本会丢失。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 直接使用npm安装</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查看n的版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>基本使用</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n lts </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安装最新的lts版本，也就是稳定版,并切换到此版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n latest </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安装最新的版本,并切换到此版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 列出已安装的所以node版本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安装或使用某个node版本，若未安装则安装该版本,并切换到此版本，若已安装则切换到该版本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n rm </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 删除一个版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="yarn、cnpm-与-npx" tabindex="-1">yarn、cnpm 与 npx <a class="header-anchor" href="#yarn、cnpm-与-npx" aria-label="Permalink to &quot;yarn、cnpm 与 npx&quot;">​</a></h2><h3 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h3><ol><li><code>yarn install</code>，根据<code>package.json</code>和<code>package-lock.json</code>全部安装.</li><li><code>yarn add [package]</code>，安装一个包在<code>dependencies</code>里，生产时依赖。</li><li><code>yarn add [package] --dev</code>，<code>yarn add [package] -D</code>安装一个包在<code>devDependencies</code>里，开发时依赖。</li></ol><h3 id="cnmp" tabindex="-1">cnmp <a class="header-anchor" href="#cnmp" aria-label="Permalink to &quot;cnmp&quot;">​</a></h3><ol><li>查看 <code>npm</code> 镜像与设置 <code>npm</code> 的镜像。</li></ol><ul><li>查看<code>npm</code>镜像，<code>npm config get registry</code></li><li>设置<code>npm</code>镜像，<code>npm config set registry https://https://registry.npmjs.org</code></li></ul><ol start="2"><li>不希望将<code>npm</code>镜像修改，就使用<code>cnpm</code>工具。</li></ol><ul><li><code>npm install -g cnpm --registry=https://registry.npmmirror.com</code>，全局安装 <code>cnpm</code> 工具，并且将 <code>cnpm</code> 镜像设置为淘宝的镜像。</li><li><code>cnpm config get registry</code> // 获取<code>cnpm</code>镜像</li></ul><h3 id="npx-工具" tabindex="-1">npx 工具 <a class="header-anchor" href="#npx-工具" aria-label="Permalink to &quot;npx 工具&quot;">​</a></h3><ol><li><code>npx</code> 是 <code>npm5.2</code> 之后自带的一个命令。</li></ol><ul><li>假如在全局和项目都安装<code>webpack</code>，全局安装的是 <code>webpack5.1.3</code>，项目安装的是 <code>webpack3.6.0</code>。</li><li>假如在终端 <code>webpack --version</code>，得到的是<code>webpack5.1.3</code></li><li>明确查找到 <code>node_module</code> 下面的 <code>webpack</code> 可以使用 <code>npx</code> 命令 <code>npx webpack --version</code>。</li></ul>`,56),p=[l];function t(h,k,r,d,c,o){return i(),a("div",null,p)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};
