var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("fWY1B"),n("eeO3V"),n("atmj7"),n("5kcia"),n("bGSDD"),n("8CtZL"),n("eeO3V");var a=n("fWY1B"),i=n("atmj7");const l=new(0,a.default),o={btnDateRead:document.querySelectorAll(".button__read"),iconReadEl:document.querySelectorAll(".icon__read"),sectionReadEl:document.querySelectorAll(".section_read"),articleContainerEl:document.querySelectorAll(".read__article__container"),articleSectionList:document.querySelector(".read__article-section-list")};document.addEventListener("DOMContentLoaded",(()=>{l.fetchPopularNews().then((e=>"OK"===e.status?e.results:[])).then((e=>{e.length>0&&function(e){e.map((e=>e.published_date)).filter(((e,t,r)=>r.indexOf(e)===t)).forEach((t=>{const r=document.createElement("li");r.setAttribute("class","read__article");const n=document.createElement("button");n.setAttribute("class","button__read"),n.setAttribute("type","button");const a=function(e,t){const r=document.createElement("div");r.setAttribute("class","read__article__container");const n=t.filter((t=>t.published_date===e));return r.innerHTML=n.map((e=>(0,i.createMarkupForCard)((0,i.newsAdapter)(e)))).join(""),r}(t,e);n.innerHTML=t.replaceAll("-","/")+'<svg class="icon__read" id="arrow" role="img" height="9" width="15" viewBox="0 0 56 32" aria-hidden="true"    focusable="false">    <path fill="#000" style="fill: const(--color1, 000)"      d="M6.267 0l-6.267 6.089 26.667 25.911 26.667-25.911-6.267-6.089-20.4 19.779-20.4-19.779z"></path>    </svg>',r.appendChild(n),r.appendChild(a),n.addEventListener("click",(function(e){e.preventDefault();const t=r.querySelector(".icon__read");a.classList.contains("read__article__container--active")?(a.classList.remove("read__article__container--active"),t.style.transform="rotatex(0deg)"):(a.classList.add("read__article__container--active"),t.style.transform="rotatex(180deg)")})),o.articleSectionList.appendChild(r)}))}(e)}))}));
//# sourceMappingURL=read.f0687295.js.map
