//<![CDATA[
// Recent Post Gallery
function arlinagrid(a){for(var t=a.feed.entry||[],e=['<div class="recent-gallery">'],i=0;i<t.length;++i){for(var l=t[i],r=l.title.$t,n=l.media$thumbnail?l.media$thumbnail.url:"http://2.bp.blogspot.com/-4fCf53FqYKM/Vccsy7apoZI/AAAAAAAAK4o/XJkv3RkC0pw/s1600/default%2Bimage.png",s=n.replace("s72-c","s"+arlina_thumbs+"-c"),h=l.link||[],c=0;c<h.length&&"alternate"!=h[c].rel;++c);var d=h[c].href,m='<img src="'+s+'" width="'+arlina_thumbs+'" height="'+arlina_thumbs+'"/>',p=arlina_title?'<span class="ptitle">'+r+"</span>":"",g='<a href="'+d+'" target="_blank" title="'+r+'">'+m+p+"</a>";e.push('<div class="ad-item">',g,"</div>")}e.push("</div>"),document.write(e.join(""))}
//]]>
