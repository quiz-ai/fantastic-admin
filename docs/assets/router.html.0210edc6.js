import{o as p,c as e,a as n,F as t,e as a,d as o}from"./app.e480186a.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const c={},r=a(`<h1 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h1><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><p>\u6846\u67B6\u7684\u6838\u5FC3\u662F\u901A\u8FC7\u8DEF\u7531\u81EA\u52A8\u751F\u6210\u5BF9\u5E94\u5BFC\u822A\uFF0C\u6240\u4EE5\u9664\u4E86\u8DEF\u7531\u7684\u57FA\u672C\u914D\u7F6E\uFF0C\u8FD8\u9700\u8981\u4E86\u89E3\u6846\u67B6\u63D0\u4F9B\u4E86\u54EA\u4E9B\u914D\u7F6E\u9879\uFF0C\u5176\u4E2D<strong>\u9AD8\u4EAE\u90E8\u5206\u4E3A\u4E13\u4E1A\u7248\u6269\u5145\u914D\u7F6E\u9879</strong>\uFF0C\u57FA\u7840\u7248\u4E0D\u5177\u5907\u8BE5\u7279\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6240\u6709\u7684\u5BFC\u822A\u914D\u7F6E\u9879\u5747\u653E\u5728\u8DEF\u7531\u7684 meta \u5BF9\u8C61\u4E2D</span>
meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BE5\u8DEF\u7531\u5728\u4FA7\u8FB9\u680F\u5BFC\u822A\u548C\u9762\u5305\u5C51\u5BFC\u822A\u4E2D\u5C55\u793A\u7684\u6807\u9898</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u5217\u8868&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// \u56FD\u9645\u5316 key \uFF0C\u5982\u679C\u8BBE\u7F6E\u7684 key \u4E0D\u5B58\u5728\u5219\u4EE5\u663E\u793A title</span>
	i18n<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4FA7\u8FB9\u680F\u5BFC\u822A\u4E2D\u663E\u793A\u7684\u56FE\u6807\uFF0C\u56FE\u6807\u4F7F\u7528 &lt;svg-icon /&gt; \u7EC4\u4EF6\u5C55\u793A</span>
    <span class="token comment">// \u4E13\u4E1A\u7248\u652F\u6301\u4F7F\u7528 ElementUI Icon \u548C RemixIcon \uFF0C\u5982\u4E0B\uFF1A</span>
    <span class="token comment">// icon: &#39;el-icon-star-on&#39;</span>
    <span class="token comment">// icon: &#39;ri-star-fill&#39;</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// \u4FA7\u8FB9\u680F\u5BFC\u822A\u4E2D\u6FC0\u6D3B\u65F6\u663E\u793A\u7684\u56FE\u6807\uFF0C\u56FE\u6807\u4F7F\u7528 &lt;svg-icon /&gt; \u7EC4\u4EF6\u5C55\u793A</span>
    <span class="token comment">// \u652F\u6301\u4F7F\u7528 ElementUI Icon \u548C RemixIcon \uFF0C\u5982\u4E0B\uFF1A</span>
    <span class="token comment">// activeIcon: &#39;el-icon-star-on&#39;</span>
    <span class="token comment">// activeIcon: &#39;ri-star-fill&#39;</span>
	activeIcon<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BE5\u8DEF\u7531\u8FDB\u5165\u7684\u6743\u9650\uFF0C\u652F\u6301\u591A\u4E2A\u6743\u9650\u53E0\u52A0\uFF0C\u53EA\u8981\u6EE1\u8DB3\u4E00\u4E2A\uFF0C\u5373\u53EF\u8FDB\u5165</span>
    <span class="token comment">// \u5982\u679C\u7528\u6237\u6CA1\u6709\u8BE5\u6743\u9650\uFF0C\u5219\u8BE5\u8DEF\u7531\u4E0D\u4F1A\u5728\u4FA7\u8FB9\u680F\u5BFC\u822A\u4E2D\u5C55\u793A</span>
    auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;news.browse&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;news.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BE5\u8DEF\u7531\u662F\u5426\u5728\u4FA7\u8FB9\u680F\u5BFC\u822A\u4E2D\u5C55\u793A\uFF0C\u5982\u7F16\u8F91\u9875\u9762 /edit/:id \uFF0C\u9ED8\u8BA4\u4E3A true</span>
    sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BE5\u8DEF\u7531\u662F\u5426\u5728\u9762\u5305\u5C51\u5BFC\u822A\u4E2D\u5C55\u793A\uFF0C\u9ED8\u8BA4\u4E3A true</span>
    breadcrumb<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F53\u8DEF\u7531\u8BBE\u7F6E\u4E86\u8BE5\u5C5E\u6027\uFF0C\u5219\u4F1A\u9AD8\u4EAE\u76F8\u5BF9\u5E94\u7684\u4FA7\u8FB9\u680F\uFF0C\u4E00\u822C\u4F1A\u642D\u914D sidebar: false \u4E00\u8D77\u4F7F\u7528</span>
    <span class="token comment">// \u4F8B\u5982\u4ECE\u65B0\u95FB\u5217\u8868\u8FDB\u5165\u65B0\u95FB\u8BE6\u60C5\u9875\uFF0C\u7531\u4E8E\u65B0\u95FB\u8BE6\u60C5\u9875\u8DEF\u7531\u4E0D\u5728\u4FA7\u8FB9\u680F\u5BFC\u822A\u4E2D\u5C55\u793A\uFF0C\u8FD9\u65F6\u4F60\u5982\u679C\u60F3\u9AD8\u4EAE\u65B0\u95FB\u5217\u8868\u7684\u8DEF\u7531\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E</span>
    activeMenu<span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BFC\u822A\u6807\u8BB0\uFF0C\u652F\u6301 boolean,number,string \u4E09\u79CD\u7C7B\u578B</span>
    <span class="token comment">// boolean \u7C7B\u578B\u5C55\u793A\u5F62\u5F0F\u4E3A\u70B9\uFF0C\u5F53\u503C\u4E3A false \u65F6\u9690\u85CF</span>
    <span class="token comment">// number \u7C7B\u578B\u5C55\u793A\u5F62\u5F0F\u4E3A\u6587\u672C\uFF0C\u5F53\u503C\u5C0F\u4E8E\u7B49\u4E8E 0 \u65F6\u9690\u85CF</span>
    <span class="token comment">// string \u7C7B\u578B\u5C55\u793A\u5F62\u5F0F\u4E3A\u6587\u672C\uFF0C\u5F53\u503C\u4E3A\u7A7A\u65F6\u9690\u85CF</span>
    <span class="token comment">// \u5982\u679C\u6807\u8BB0\u9700\u8981\u52A8\u6001\u66F4\u65B0\uFF0C\u8BF7\u8BBE\u7F6E\u4E3A\u51FD\u6570\u5F62\u5F0F\uFF0C\u5E76\u4F20\u5165\u5916\u90E8\u53D8\u91CF\uFF0C\u4F8B\u5982\u642D\u914D vuex \u4E00\u8D77\u4F7F\u7528</span>
    <span class="token comment">// badge: () =&gt; store.state.global.number</span>
    badge<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5185\u5D4C\u7F51\u9875\u94FE\u63A5\uFF0C\u5982\u679C\u8981\u5F00\u542F\u5185\u5D4C\u7F51\u9875\uFF0Ccomponent \u9700\u8981\u8BBE\u7F6E\u4E3A\u6846\u67B6\u63D0\u4F9B\u7684 layoue/iframe.vue</span>
    link<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BE5\u8DEF\u7531\u662F\u5426\u663E\u793A\u5E95\u90E8\u7248\u6743\u4FE1\u606F\uFF0C\u6BD4\u5168\u5C40\u8BBE\u7F6E\u91CC\u7684 showCopyright \u4F18\u5148\u7EA7\u9AD8\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u7EE7\u627F\u5168\u5C40\u91CC\u7684\u8BBE\u7F6E</span>
    copyright<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BE5\u8DEF\u7531\u662F\u5426\u9700\u8981\u7A7A\u51FA\u8DDD\u79BB\u5E95\u90E8\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u65E0\u9700\u8BBE\u7F6E</span>
    <span class="token comment">// \u5F53\u4F7F\u7528\u7C7B\u4F3C FixedActionBar \u8FD9\u7C7B\u901A\u8FC7 position: fixed \u56FA\u5B9A\u5728\u5E95\u90E8\u7684\u7EC4\u4EF6\u6216 DOM \u65F6\uFF0C\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u9875\u9762\u5E95\u90E8\u53EF\u80FD\u88AB\u906E\u6321</span>
    paddingBottom<span class="token operator">:</span> <span class="token string">&#39;80px&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/banner&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;Banner \u7BA1\u7406&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>
        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;bannerCreate&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E Banner&#39;</span><span class="token punctuation">,</span>
                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.create&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;bannerList&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;Banner \u5217\u8868&#39;</span><span class="token punctuation">,</span>
                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;bannerEdit&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91 Banner&#39;</span><span class="token punctuation">,</span>
                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u5C55\u793A\u6548\u679C\u5982\u4E0B\uFF1A</p>`,7),i=["src"],u=n("h2",{id:"\u5C0F\u6280\u5DE7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5C0F\u6280\u5DE7","aria-hidden":"true"},"#"),o(" \u5C0F\u6280\u5DE7")],-1),b=n("p",null,"\u5BA2\u6237\u603B\u662F\u6709\u81EA\u5DF1\u7684\u60F3\u6CD5\uFF0C\u4F8B\u5982\u6211\u53F8\u5C31\u66FE\u9047\u5230\u8FC7\u8FD9\u6837\u7684\u9700\u6C42\uFF0C\u5728\u4E0D\u6539\u53D8\u4FA7\u8FB9\u680F\u5BFC\u822A\u7ED3\u6784\u7684\u524D\u63D0\u4E0B\uFF0C\u9762\u5305\u5C51\u5BFC\u822A\u5E0C\u671B\u80FD\u53D8\u6210\u8FD9\u6837\uFF1A",-1),k=["src"],m=a(`<p>\u5176\u5B9E\u6839\u636E\u56FE\u4E2D\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u786E\u5B9A\u8DEF\u7531\u9700\u8981\u6709\u4E09\u5C42\uFF0C\u5269\u4E0B\u5C31\u662F\u901A\u8FC7\u914D\u7F6E\u9879\u53BB\u63A7\u5236\u4FA7\u8FB9\u680F\u5BFC\u822A\u548C\u9762\u5305\u5C51\u5BFC\u822A\u662F\u5426\u5C55\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>
<span class="token keyword">import</span> EmptyLayout <span class="token keyword">from</span> <span class="token string">&#39;@/layout/empty&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/banner&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;Banner \u7BA1\u7406&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>
        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
            redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list/detail&#39;</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E Banner&#39;</span><span class="token punctuation">,</span>
                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.create&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;bannerList&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> EmptyLayout<span class="token punctuation">,</span>
            redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;Banner \u5217\u8868&#39;</span><span class="token punctuation">,</span>
                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;bannerCreate&#39;</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                        title<span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E Banner&#39;</span><span class="token punctuation">,</span>
                        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.create&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        activeMenu<span class="token operator">:</span> <span class="token string">&#39;/banner/detail&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;bannerList&#39;</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                        title<span class="token operator">:</span> <span class="token string">&#39;Banner \u5217\u8868&#39;</span><span class="token punctuation">,</span>
                        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        breadcrumb<span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;bannerEdit&#39;</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                        title<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91 Banner&#39;</span><span class="token punctuation">,</span>
                        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        activeMenu<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h2 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> \u5D4C\u5957\u8DEF\u7531</h2><p>\u4E0A\u9762\u7684\u6269\u5C55\u4F8B\u5B50\u91CC\uFF0C\u5F15\u7528\u4E86\u4E00\u4E2A <code>EmptyLayout</code> \u7EC4\u4EF6\uFF0C\u67E5\u770B\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\u8FD9\u662F\u4E00\u4E2A\u7A7A\u767D\u7684 layout \u9875\u9762\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E2A\u5462\uFF1F\u56E0\u4E3A\u5D4C\u5957\u8DEF\u7531\u751F\u6210\u51FA\u6765\u7684\u5BFC\u822A\u680F\u76EE\u4E5F\u662F\u5D4C\u5957\u7ED3\u6784\u7684\uFF0C\u4F46\u5BFC\u822A\u680F\u76EE\u91CC\u7684\u6A21\u5757\u9875\u9762\u4E00\u822C\u662F\u4E0D\u9700\u8981\u5D4C\u5957\u7684\uFF0C\u6240\u4EE5\u9664\u4E86\u9876\u7EA7\u8DEF\u7531\u9700\u8981\u8BBE\u7F6E <code>component: Layout</code> \uFF0C\u5D4C\u5957\u6709 <code>children</code> \u5C5E\u6027\u7684\u5B50\u9879\u8DEF\u7531\uFF0C\u5747\u53EF\u8BBE\u7F6E <code>component: EmptyLayout</code> \u3002\u5F53\u7136\u5982\u679C\u4F60\u7684\u9875\u9762\u786E\u5B9E\u6709\u5D4C\u5957\u5C55\u793A\u7684\u9700\u6C42\uFF0C\u53EF\u4E0D\u6309\u7167\u8FD9\u79CD\u65B9\u5F0F\u64CD\u4F5C\u3002</p><h2 id="\u5168\u5C40\u524D\u7F6E\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u524D\u7F6E\u5B88\u536B" aria-hidden="true">#</a> \u5168\u5C40\u524D\u7F6E\u5B88\u536B</h2><p>\u8DEF\u7531\u7684\u524D\u7F6E\u5BFC\u822A\u5B88\u536B\u662F\u6846\u67B6\u5B9E\u73B0\u8DEF\u7531\u8DF3\u8F6C\u7684\u6838\u5FC3\uFF0C\u5728\u524D\u7F6E\u5B88\u536B\u91CC\u4F1A\u63A5\u7BA1\u4FA7\u8FB9\u680F\u5BFC\u822A\u8DEF\u7531\u751F\u6210\u3001\u9875\u9762\u6807\u9898\u8BBE\u7F6E\u3001\u65E0\u6548\u8DEF\u7531\u8DF3\u8F6C404\u9875\u9762\u7B49\u5904\u7406\u3002\u6240\u4EE5\u7406\u89E3\u6846\u67B6\u7684\u524D\u7F6E\u5B88\u536B\u5904\u7406\u903B\u8F91\uFF0C\u5BF9\u4E1A\u52A1\u5F00\u53D1\u6216\u6846\u67B6\u4E8C\u6B21\u5F00\u53D1\u6709\u5F88\u5927\u5E2E\u52A9\u3002</p>`,8),d=["src"];function g(s,h){return p(),e(t,null,[r,n("p",null,[n("img",{src:s.$withBase("/breadcrumb1.gif")},null,8,i)]),u,b,n("p",null,[n("img",{src:s.$withBase("/breadcrumb2.gif")},null,8,k)]),m,n("p",null,[n("img",{src:s.$withBase("/vue2/router.png")},null,8,d)])],64)}var w=l(c,[["render",g]]);export{w as default};
