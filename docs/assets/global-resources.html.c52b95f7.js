import{r as e,o as d,c as k,a as n,b as a,w as o,F as h,e as c,d as s}from"./app.e480186a.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const _={},m=c(`<h1 id="\u5168\u5C40\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u8D44\u6E90" aria-hidden="true">#</a> \u5168\u5C40\u8D44\u6E90</h1><h2 id="svg-\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#svg-\u56FE\u6807" aria-hidden="true">#</a> SVG \u56FE\u6807</h2><p>\u8D8A\u6765\u8D8A\u591A\u9879\u76EE\u5F00\u59CB\u4F7F\u7528 SVG \u56FE\u6807\u6765\u4EE3\u66FF\u7CBE\u7075\u56FE\u6216\u8005\u5B57\u4F53\u56FE\u6807\uFF0C\u672C\u6846\u67B6\u4E5F\u63D0\u4F9B\u4E86 SVG \u56FE\u6807\u652F\u6301\uFF0C\u4F60\u6709\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F\u3002</p><h3 id="element-plus-\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#element-plus-\u56FE\u6807" aria-hidden="true">#</a> Element Plus \u56FE\u6807</h3><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u4ECE 1.2.0-beta.1 \u5F00\u59CB\uFF0CElement Plus \u5DF2\u4E0D\u518D\u652F\u6301 Font Icon \uFF0C\u800C\u5168\u9762\u4F7F\u7528 SVG Icon \u3002</p></div><p>\u6846\u67B6\u5DF2\u9ED8\u8BA4\u5C06 Element Plus \u56FE\u6807\u6CE8\u518C\u5230\u5168\u5C40\uFF0C\u5E76\u4E14\u589E\u52A0\u4E86 <code>el-icon-</code> \u524D\u7F00\u907F\u514D\u7EC4\u4EF6\u540D\u51B2\u7A81\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u3002</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon-search</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5168\u5C40\u6CE8\u518C\u4F1A\u5F71\u54CD\u9879\u76EE\u6784\u5EFA\u4F53\u79EF\u548C\u52A0\u8F7D\u901F\u5EA6\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u56FE\u6807\u662F\u6309\u9700\u5F15\u5165\u5E76\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u5220\u9664 <code>/src/main.js</code> \u91CC\u8FD9\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementIcons <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons&#39;</span>
<span class="token comment">// \u5C06 element-plus \u7684\u56FE\u6807\u5E93\u6CE8\u518C\u5230\u5168\u5C40</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> ElementIcons<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ElIcon</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ElementIcons<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> ElementIcons<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5728\u9700\u8981\u4F7F\u7528\u5230\u7684\u5730\u65B9\u624B\u52A8\u5F15\u5165\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u56FE\u6807" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u56FE\u6807</h3>`,12),x=s("\u4F60\u53EF\u4EE5\u5728\u6846\u67B6\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 SVG \u56FE\u6807\u6587\u4EF6\uFF0C\u63A8\u8350\u53BB"),v={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},f=s("\u963F\u91CC\u5DF4\u5DF4\u77E2\u91CF\u56FE\u6807\u5E93"),b=s("\u4E0B\u8F7D\u9AD8\u8D28\u91CF SVG \u56FE\u6807\u6587\u4EF6\u3002"),y=c(`<p>\u4F7F\u7528 SVG \u56FE\u6807\u6587\u4EF6\u4E5F\u5F88\u7B80\u5355\uFF0C\u9996\u5148\u5C06 svg \u6587\u4EF6\u653E\u5230 <code>/src/assets/icons/</code> \u76EE\u5F55\u4E0B\uFF0C\u7136\u540E\u5728\u9875\u9762\u4E2D\u5C31\u53EF\u4EE5\u901A\u8FC7 <code>&lt;svg-icon /&gt;</code> \u7EC4\u4EF6\u4F7F\u7528\u4E86\uFF0Cname \u5C31\u662F svg \u6587\u4EF6\u540D\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- &lt;svg-icon&gt; \u7EC4\u4EF6\u65E0\u9700\u624B\u52A8\u6CE8\u518C\u5373\u53EF\u4F7F\u7528 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),w={id:"iconify-\u56FE\u6807",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#iconify-\u56FE\u6807","aria-hidden":"true"},"#",-1),I=s(" Iconify \u56FE\u6807 "),V={class:"custom-container tip"},G=n("p",{class:"custom-container-title"},"\u4ECB\u7ECD",-1),E={href:"https://github.com/iconify/iconify",target:"_blank",rel:"noopener noreferrer"},C=s("Iconify"),j=s(" \u63D0\u4F9B 100+ \u5957\u56FE\u6807\u96C6\uFF0C100,000+ \u4E2A\u56FE\u6807\u53EF\u4EE5\u514D\u8D39\u4F7F\u7528\u3002\u501F\u52A9 "),B={href:"https://github.com/antfu/unplugin-icons",target:"_blank",rel:"noopener noreferrer"},T=s("unplugin-icons"),P=s(" \u63D0\u4F9B\u7684\u80FD\u529B\uFF0C\u4F60\u53EF\u4EE5\u5728\u6846\u67B6\u4E2D\u8F7B\u677E\u4F7F\u7528\u8FD9\u4E9B\u56FE\u6807\uFF0C\u800C\u65E0\u9700\u62C5\u5FC3\u6784\u5EFA\u4F53\u79EF\u548C\u52A0\u8F7D\u901F\u5EA6\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u662F\u6309\u9700\u6784\u5EFA\u3001\u6309\u9700\u52A0\u8F7D\u7684\u3002"),q=s("\u4F60\u53EF\u4EE5\u5728 "),z={href:"https://icones.js.org/",target:"_blank",rel:"noopener noreferrer"},N=s("Ic\xF4nes"),L=s(" \u4E0A\u67E5\u627E\u4F60\u60F3\u8981\u7684\u56FE\u6807\uFF08\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E Iconify \u7684\u5728\u7EBF\u56FE\u6807\u641C\u7D22\u7F51\u7AD9\uFF09\uFF0C\u6216\u8005\u4E5F\u53EF\u4EE5\u5728 vscode \u91CC\u5B89\u88C5 "),$={href:"https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones",target:"_blank",rel:"noopener noreferrer"},F=s("Ic\xF4nes"),H=s(" \u6269\u5C55\u3002"),R=["src"],A=["src"],D=c(`<p>\u5F53\u4F60\u9700\u8981\u7528\u5230\u67D0\u4E2A\u56FE\u6807\u7684\u65F6\u5019\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>&lt;i-{\u96C6\u5408\u540D}-{\u56FE\u6807\u540D} /&gt;</code> \u7684\u65B9\u5F0F\u53BB\u4F7F\u7528\u5B83\u3002</p><p>\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF0C\u5176\u4E2D\u7EA2\u6846\u90E8\u5206\u7684\u683C\u5F0F\u4E3A <code>{\u96C6\u5408\u540D}:{\u56FE\u6807\u540D}</code> \uFF0C\u6240\u4EE5\u5728\u6846\u67B6\u4E2D\u4F7F\u7528\u5C31\u662F\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i-mdi-account-box</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>unplugin-icons \u4F1A\u5728\u4F60\u4F7F\u7528\u5230\u67D0\u4E2A\u56FE\u6807\u96C6\u7684\u65F6\u5019\uFF0C\u5224\u65AD\u662F\u5426\u5B89\u88C5\u76F8\u5173\u4F9D\u8D56\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u81EA\u52A8\u5B89\u88C5\u5E76\u5237\u65B0\u7A0B\u5E8F\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u5168\u81EA\u52A8\uFF0C\u65E0\u9700\u624B\u52A8\u5E72\u9884\u3002\u4F60\u53EF\u4EE5\u5728\u6846\u67B6\u4E2D\u4F7F\u7528\u4EFB\u610F\u56FE\u6807\u96C6\u91CC\u7684\u4EFB\u610F\u56FE\u6807\uFF0C\u6784\u5EFA\u7684\u65F6\u5019\u53EA\u4F1A\u6784\u5EFA\u4F7F\u7528\u5230\u7684\u56FE\u6807\uFF0C\u800C\u4E0D\u4F1A\u5BF9\u6574\u4E2A\u56FE\u6807\u96C6\u8FDB\u884C\u6784\u5EFA\uFF0C\u4F60\u65E0\u9700\u62C5\u5FC3\u3002</p></blockquote><h2 id="\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247" aria-hidden="true">#</a> \u56FE\u7247</h2><p>\u6846\u67B6\u7528\u5230\u7684\u56FE\u7247\u8D44\u6E90\u90FD\u653E\u5728 <code>/src/assets/images/</code> \u76EE\u5F55\u4E0B\uFF0C\u53EF\u81EA\u884C\u65B0\u5EFA\u6587\u4EF6\u5939\u5206\u7C7B\u7BA1\u7406\u3002</p><h2 id="\u7CBE\u7075\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7CBE\u7075\u56FE" aria-hidden="true">#</a> \u7CBE\u7075\u56FE</h2><p>\u7CBE\u7075\u56FE\u53C8\u79F0\u96EA\u78A7\u56FE\uFF0C\u539F\u7406\u662F\u5C06\u591A\u5F20\u5C0F\u56FE\u5408\u5E76\u5230\u4E00\u5F20\u5927\u56FE\u4E0A\uFF0C\u4EE5\u4FBF\u51CF\u5C11 HTTP \u8BF7\u6C42\uFF0C\u63D0\u9AD8\u7F51\u7AD9\u8BBF\u95EE\u901F\u5EA6\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u5728 HTTP/1.1 \u4E0B\uFF0C\u56E0<strong>\u961F\u5934\u963B\u585E</strong>\u7684\u95EE\u9898\uFF0C\u5982\u679C\u5728\u4E00\u4E2A\u9875\u9762\u91CC\u9700\u8981\u5C55\u793A\u591A\u5F20\u5C0F\u56FE\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u7CBE\u7075\u56FE</p><p>\u4F46 HTTP/2 \u7684<strong>\u591A\u8DEF\u590D\u7528</strong>\u7279\u6027\uFF0C\u5DF2\u7ECF\u4E0D\u592A\u9700\u8981\u7CBE\u7075\u56FE\u5408\u5E76\u4E86\uFF0C\u6211\u4EEC\u66F4\u5EFA\u8BAE\u4F7F\u7528 SVG \u56FE\u6807\u4EE3\u66FF\u7CBE\u7075\u56FE</p></div><p>\u7CBE\u7075\u56FE\u539F\u59CB\u56FE\u7247\u7684\u5B58\u653E\u4F4D\u7F6E\u4F4D\u4E8E <code>/src/assets/sprites/</code> \u76EE\u5F55\u4E0B\uFF0C\u6CE8\u610F\u6309\u6587\u4EF6\u5939\u533A\u5206\u3002</p><p>\u9879\u76EE\u8FD0\u884C\u524D\u4F1A\u6839\u636E\u6587\u4EF6\u5939\u751F\u6210\u5BF9\u5E94\u7684\u7CBE\u7075\u56FE\u6587\u4EF6\uFF08\u7CBE\u7075\u56FE\u56FE\u7247\u548C <code>.scss</code> \u8D44\u6E90\u6587\u4EF6\uFF09\uFF0C\u591A\u4E2A\u6587\u4EF6\u5939\u5219\u4F1A\u751F\u6210\u591A\u4E2A\u7CBE\u7075\u56FE\u6587\u4EF6\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u9879\u76EE\u8FD0\u884C\u65F6\uFF0C\u4FEE\u6539\u6587\u4EF6\u5939\u91CC\u7684\u56FE\u7247\uFF0C\u4F1A\u91CD\u65B0\u751F\u6210\u76F8\u5173\u7CBE\u7075\u56FE\u6587\u4EF6\uFF0C\u4F46\u5982\u679C\u65B0\u5EFA\u6587\u4EF6\u5939\uFF0C\u5219\u9700\u8981\u91CD\u65B0\u8FD0\u884C\u9879\u76EE\u624D\u4F1A\u751F\u6210\u5BF9\u5E94\u7CBE\u7075\u56FE\u6587\u4EF6\u3002</p><p>\u53EF\u901A\u8FC7 <code>@include</code> \u76F4\u63A5\u4F7F\u7528\u7CBE\u7075\u56FE\uFF0C\u65E0\u9700\u624B\u52A8\u5F15\u5165 <code>.scss</code> \u6587\u4EF6\uFF0C\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p>`,12),J=n("div",{class:"language-scss ext-scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token comment"},"// @include [\u6587\u4EF6\u5939\u540D\u79F0]-sprite([\u6587\u4EF6\u540D\u79F0]);"),s(`
`),n("span",{class:"token selector"},".icon "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"@include"),s(),n("span",{class:"token function"},"example-sprite"),n("span",{class:"token punctuation"},"("),s("address"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u8F93\u51FA"),s(`
`),n("span",{class:"token selector"},".icon "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},"url"),n("span",{class:"token punctuation"},"("),s("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-position"),n("span",{class:"token punctuation"},":"),s(" 0px 0px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-size"),n("span",{class:"token punctuation"},":"),s(" 210px 210px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),K=n("div",{class:"language-scss ext-scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token comment"},"// @include all-[\u6587\u4EF6\u5939\u540D\u79F0]-sprites;"),s(`
`),n("span",{class:"token keyword"},"@include"),s(" all-example-sprites"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u8F93\u51FA"),s(`
`),n("span",{class:"token selector"},".example-address-sprites "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},"url"),n("span",{class:"token punctuation"},"("),s("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-position"),n("span",{class:"token punctuation"},":"),s(" 0 0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-size"),n("span",{class:"token punctuation"},":"),s(" 210px 210px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".example-feedback-sprites "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},"url"),n("span",{class:"token punctuation"},"("),s("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-position"),n("span",{class:"token punctuation"},":"),s(" -110px 0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-size"),n("span",{class:"token punctuation"},":"),s(" 210px 210px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".example-payment-sprites "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},"url"),n("span",{class:"token punctuation"},"("),s("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-position"),n("span",{class:"token punctuation"},":"),s(" 0 -110px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-size"),n("span",{class:"token punctuation"},":"),s(" 210px 210px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),M=c('<p>\u5982\u679C\u662F\u5C0F\u578B\u9879\u76EE\uFF0C\u9759\u6001\u56FE\u7247\u4E0D\u591A\uFF0C\u53EF\u5168\u90E8\u653E\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u5185\uFF1B\u5982\u679C\u662F\u4E2D\u5927\u578B\u9879\u76EE\uFF0C\u6587\u4EF6\u5939\u53EF\u6309\u6A21\u5757\u6765\u5212\u5206\uFF0C\u8FD9\u6837\u4E0D\u540C\u7684\u6A21\u5757\u6700\u7EC8\u4F1A\u751F\u6210\u5404\u81EA\u7684\u7CBE\u7075\u56FE\u6587\u4EF6\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6587\u4EF6\u547D\u540D\u4EC5\u652F\u6301\u5B57\u6BCD\u4E0E\u6570\u5B57\uFF0C\u6240\u6709\u7279\u6B8A\u7B26\u53F7\u5747\u4F1A\u88AB\u8F6C\u5316\u4E3A <code>-</code> \uFF0C\u5982\uFF1A</p><ul><li><code>test_123</code> =&gt; <code>test-123</code></li><li><code>test@2x</code> =&gt; <code>test-2x</code></li><li><code>test - 123</code> =&gt; <code>test-123</code></li><li><code>test$%123</code> =&gt; <code>test-123</code></li></ul><p>\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5982\u679C\u53D1\u73B0\u65E0\u6CD5\u6B63\u5E38\u5C55\u793A\u56FE\u7247\uFF0C\u53EF\u68C0\u67E5\u751F\u6210\u7684 <code>.scss</code> \u6587\u4EF6\uFF0C\u786E\u5B9A\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u7684\u6587\u4EF6\u540D\u3002</p></div><h2 id="\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a> \u6837\u5F0F</h2><p>\u6837\u5F0F\u5B58\u653E\u76EE\u5F55\u4E3A <code>/src/assets/styles/</code> \uFF0C\u56E0\u4E3A Vue \u7684\u6587\u4EF6\u7279\u6027\uFF0C\u9875\u9762\u6837\u5F0F\u5EFA\u8BAE\u5199\u5728 <code>.vue</code> \u6587\u4EF6\u91CC\uFF0C\u6240\u4EE5\u8BE5\u76EE\u5F55\u53EA\u5B58\u653E\u5168\u5C40\u6837\u5F0F\uFF0C\u65B9\u4FBF\u7EDF\u4E00\u7BA1\u7406\u3002</p><p>\u6B64\u76EE\u5F55\u4E0B\u8FD8\u6709\u4E00\u4E2A\u7279\u6B8A\u76EE\u5F55\uFF0C\u5373 <code>/src/assets/styles/resources/</code> \uFF0C\u8FD9\u662F\u5168\u5C40 SCSS \u8D44\u6E90\u76EE\u5F55\uFF0C\u9996\u5148\u8FD9\u4E2A\u76EE\u5F55\u91CC\u53EA\u652F\u6301 <code>.scss</code> \u6587\u4EF6\uFF0C\u5176\u6B21\u5728\u8FD9\u4E2A\u76EE\u5F55\u91CC\u7684\u6587\u4EF6\uFF0C\u65E0\u9700\u5728\u9875\u9762\u4E0A\u5F15\u7528\u5373\u53EF\u751F\u6548\u5E76\u4F7F\u7528\u3002</p><p>\u540C\u6837\uFF0C\u7CBE\u7075\u56FE\u76EE\u5F55\u4E0B\u751F\u6210\u7684 SCSS \u8D44\u6E90\u4E5F\u662F\u5168\u5C40\u53EF\u8C03\u7528\u7684\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u5168\u5C40 SCSS \u8D44\u6E90\u5E76\u4E0D\u662F\u5168\u5C40\u6837\u5F0F\uFF0C\u662F\u53D8\u91CF\u3001@mixin \u3001@function \u8FD9\u4E9B\u4E1C\u897F</p></div><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><h3 id="\u5168\u5C40\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u7EC4\u4EF6" aria-hidden="true">#</a> \u5168\u5C40\u7EC4\u4EF6</h3>',9),O={class:"custom-container tip"},Q=n("p",{class:"custom-container-title"},"\u5E76\u975E\u5168\u5C40\u5F15\u7528",-1),U=s("\u4E0E Vue2 \u7248\u672C\u4E0D\u540C\uFF0C\u8FD9\u91CC\u6240\u8C13\u7684\u201C\u5168\u5C40\u7EC4\u4EF6\u201D\u5E76\u4E0D\u4F1A\u6CE8\u518C\u5230\u5168\u5C40\uFF0C\u800C\u662F\u5728\u4F7F\u7528\u7684\u65F6\u5019\u81EA\u52A8\u5F15\u5165\uFF0C\u8BE5\u7279\u6027\u7531 "),W={href:"https://github.com/antfu/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},X=s("unplugin-vue-components"),Y=s(" \u63D0\u4F9B\u652F\u6301\u3002"),Z=n("p",null,[s("\u5168\u5C40\u7EC4\u4EF6\u5B58\u653E\u5728 "),n("code",null,"/src/components/"),s(" \u76EE\u5F55\u4E0B\uFF0C\u9700\u8981\u6CE8\u610F\u5404\u4E2A\u7EC4\u4EF6\u6309\u6587\u4EF6\u5939\u8FDB\u884C\u533A\u5206\u3002")],-1),nn=n("p",null,[s("\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6587\u4EF6\u5939\u5185\u81F3\u5C11\u4FDD\u7559\u4E00\u4E2A\u6587\u4EF6\u540D\u4E3A "),n("code",null,"index.vue"),s(" \u7684\u7EC4\u4EF6\u5165\u53E3\uFF08\u53EF\u53C2\u8003 "),n("code",null,"SvgIcon"),s(" \u7EC4\u4EF6\uFF09\uFF0C\u6587\u4EF6\u5939\u540D\u79F0\u5373\u4E3A\u7EC4\u4EF6\u540D\u3002")],-1),sn=s("\u63A8\u8350\u4F7F\u7528 "),an=n("code",null,"pnpm new",-1),tn=s(" \u6307\u4EE4\u8FDB\u884C\u7EC4\u4EF6\u751F\u6210\uFF0C\u8BE6\u7EC6\u53EF\u67E5\u770B\u300A"),en=s("\u4EE3\u7801\u6587\u4EF6\u81EA\u52A8\u751F\u6210"),on=s("\u300B\u3002"),cn=n("h3",{id:"\u5C40\u90E8\u7EC4\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5C40\u90E8\u7EC4\u4EF6","aria-hidden":"true"},"#"),s(" \u5C40\u90E8\u7EC4\u4EF6")],-1),pn=n("p",null,[s("\u5C40\u90E8\u7EC4\u4EF6\u6CA1\u6709\u63D0\u4F9B\u4E13\u95E8\u7684\u5B58\u653E\u76EE\u5F55\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u91C7\u7528\u5C31\u8FD1\u539F\u5219\uFF0C\u5373\u5C40\u90E8\u7EC4\u4EF6\u4E0E\u4F7F\u7528\u9875\u9762\u79BB\u5F97\u8D8A\u8FD1\u8D8A\u597D\u3002\u4F60\u53EF\u4EE5\u5728\u6BCF\u4E2A\u6A21\u5757\u7684\u6587\u4EF6\u5939\u4E0B\uFF0C\u5EFA\u7ACB\u4E00\u4E2A "),n("code",null,"components"),s(" \u6587\u4EF6\u5939\u7528\u4E8E\u5B58\u653E\u5C40\u90E8\u7EC4\u4EF6\u3002")],-1);function ln(p,un){const t=e("ExternalLinkIcon"),i=e("Badge"),l=e("CodeGroupItem"),u=e("CodeGroup"),r=e("RouterLink");return d(),k(h,null,[m,n("p",null,[x,n("a",v,[f,a(t)]),b]),y,n("h3",w,[S,I,a(i,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),n("div",V,[G,n("p",null,[n("a",E,[C,a(t)]),j,n("a",B,[T,a(t)]),P])]),n("p",null,[q,n("a",z,[N,a(t)]),L,n("a",$,[F,a(t)]),H]),n("p",null,[n("img",{src:p.$withBase("/icones1.png")},null,8,R)]),n("p",null,[n("img",{src:p.$withBase("/icones2.png")},null,8,A)]),D,a(u,null,{default:o(()=>[a(l,{title:"\u65B9\u6CD5 1"},{default:o(()=>[J]),_:1}),a(l,{title:"\u65B9\u6CD5 2"},{default:o(()=>[K]),_:1})]),_:1}),M,n("div",O,[Q,n("p",null,[U,n("a",W,[X,a(t)]),Y])]),Z,nn,n("p",null,[sn,an,tn,a(r,{to:"/guide/plop.html"},{default:o(()=>[en]),_:1}),on]),cn,pn],64)}var kn=g(_,[["render",ln]]);export{kn as default};
