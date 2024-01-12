import{S as m,i as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u="41748673-2e779d5acf43a6d20c660ff18",p=document.getElementById("search-form"),g=document.getElementById("search-input"),a=document.getElementById("image-gallery"),l=document.getElementById("loader");let c;p.addEventListener("submit",async t=>{t.preventDefault();const r=g.value.trim();if(r!=="")try{l.classList.add("loading");const i=await fetch(`https://pixabay.com/api/?key=${u}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`);if(!i.ok)throw new Error("Network response was not ok");const n=await i.json();y(n.hits)}catch{d()}finally{l.classList.remove("loading")}});function y(t){if(t.length===0){d();return}a.innerHTML="";const r=t.map(i=>h(i));a.append(...r),c=new m(".gallery a",{}),c.refresh()}function h(t){const r=document.createElement("a");return r.href=t.largeImageURL,r.setAttribute("data-lightbox","image-gallery"),r.innerHTML=`
  <div class="galery-item">
    <img src="${t.webformatURL}" alt="${t.tags}">
    <div class="image-info">
      <div class="img-info-item">
        <p>Likes:</p>
        <p> ${t.likes}</p>
      </div>
      <div class="img-info-item">
        <p>Views: </p>
        <p>${t.views}</p>
      </div>
      <div class="img-info-item">
        <p>Comments: </p>
        <p>${t.comments}</p>
      </div>
      <div class="img-info-item">
        <p>Downloads: </p>
        <p>${t.downloads}</p>
      </div>
    </div>
  </div>
  `,r}function d(){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
