var disqus_shortname = "idntheme";
!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+disqus_shortname+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();
// Nav
!function(t){var e=t("a.blog-pager-newer-link"),l=t("a.blog-pager-older-link");t.get(e.attr("href"),function(l){e.html(t(l).find(".post h1.post-title").text())},"html"),t.get(l.attr("href"),function(e){l.html(t(e).find(".post h1.post-title").text())},"html")}(jQuery);
// Facebook Chat
window.fbAsyncInit=function(){FB.init({appId:"323688127969922",autoLogAppEvents:!0,xfbml:!0,version:"v7.0"})},function(e,t,n){var o,c=e.getElementsByTagName(t)[0];e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="https://connect.facebook.net/id_ID/sdk/xfbml.customerchat.js",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
$(document).ready(function(){$('a[name="details"]').before($("#Theme-details").html()),$("#Theme-details").html("")});
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
