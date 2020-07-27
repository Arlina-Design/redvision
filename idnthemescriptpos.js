var disqus_shortname = "idntheme";
!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+disqus_shortname+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();
// Nav
!function(t){var e=t("a.blog-pager-newer-link"),l=t("a.blog-pager-older-link");t.get(e.attr("href"),function(l){e.html(t(l).find(".post h1.post-title").text())},"html"),t.get(l.attr("href"),function(e){l.html(t(e).find(".post h1.post-title").text())},"html")}(jQuery);
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
$(document).ready(function(){$('a[name="details"]').before($("#Theme-details").html()),$("#Theme-details").html("")});
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
