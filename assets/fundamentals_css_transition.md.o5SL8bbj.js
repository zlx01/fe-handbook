import{_ as i,c as t,o as e,a4 as a}from"./chunks/framework.CFdyflnk.js";const m=JSON.parse('{"title":"transition","description":"","frontmatter":{},"headers":[],"relativePath":"fundamentals/css/transition.md","filePath":"fundamentals/css/transition.md","lastUpdated":1727024381000}'),n={name:"fundamentals/css/transition.md"},l=a('<h1 id="transition" tabindex="-1">transition <a class="header-anchor" href="#transition" aria-label="Permalink to &quot;transition&quot;">​</a></h1><ul><li>transition-property 指定要执行过渡的属性，例如height , width <ul><li>多个属性间使用,隔开</li><li>如果所有属性都需要过渡，则使用all关键字</li></ul></li><li>transition-duration 指定过渡效果的持续时间，时间单位：s 和 ms</li><li>transition-delay 过渡效果的延迟，等待一段时间后在执行过渡</li><li>transition-timing-function 设置过渡时序 <ul><li>ease 默认值，慢速开始，先加速，再减速</li><li>linear 匀速运动</li><li>ease-in 加速运动</li><li>ease-out 减速运动</li><li>ease-in-out 先加速 后减速</li><li>cubic-bezier() 来指定时序函数 <a href="https://cubic-bezier.com" target="_blank" rel="nofollow noopener noreferrer">https://cubic-bezier.com</a></li><li>steps() 分步执行过渡效果，可以设置一个第二个值：end ， 在时间结束时执行过渡(默认值) start ， 在时间开始时执行过渡</li></ul></li></ul>',2),s=[l];function r(o,c,_,d,u,p){return e(),t("div",null,s)}const f=i(n,[["render",r]]);export{m as __pageData,f as default};