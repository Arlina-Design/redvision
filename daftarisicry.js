var tocConfig = {
  url: "",
  feedNum: 8,
  labelName: (window.location.hash && window.location.hash != "#0" && window.location.hash != "#search") ? encodeURIComponent(window.location.hash.substr(1)) : false,
  numChars: 140,
  thumbWidth: 70,
  navText: "Load More &#9660;",
  frontText: "Top &uArr;",
  noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
  loading: "<span>Loading...</span>",
  searching: "<span>Searching...</span>",
  MonthNames: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
  noResult: "No Result"
};

function getID(b) {
  return document.getElementById(b)
}
var head = document.getElementsByTagName("head")[0],
  tocContainer = getID("feedContainer"),
  feedNav = getID("feedNav"),
  orderByer = getID("orderFeedBy"),
  labelSorter = getID("labelSorter"),
  input = getID("postSearcher").getElementsByTagName("input")[0],
  resultDesc = getID("resultDesc"),
  nextPage, feedArchive, startPage = 0;

function cropFeed(d, c) {
  var f = d.split("<");
  for (var e = 0; e < f.length; e++) {
    if (f[e].indexOf(">") != -1) {
      f[e] = f[e].substring(f[e].indexOf(">") + 1, f[e].length)
    }
  }
  f = f.join(" ");
  f = f.substring(0, c - 1);
  return f
}

function showLabels(c) {
  var a = c.feed.category,
    d = "";
  d = "<select id='labelSorter' onchange='changeSort(this.value);'>";
  d += "<option value='' selected>CATEGORY...</option>";
  for (var b = 0; b < a.length; b++) {
    d += "<option value='" + decodeURIComponent(a[b].term) + "'>" + a[b].term.toUpperCase() + "</option>"
  }
  d += "</select>";
  labelSorter.innerHTML = d
}

function showFeedList(t) {
  var m = t.feed.entry,
    o, s, n, h, e, u, g, p, r, q, c = "";
  if (typeof(t.feed.entry) !== "undefined") {
    for (var f = 0; f < tocConfig.feedNum; f++) {
      o = (m) ? m[f] : "", nextPage = "";
      if (f == t.feed.entry.length) {
        break
      }
      s = o.title.$t;
      for (var d = 0; d < o.link.length; d++) {
        if (o.link[d].rel == "alternate") {
          n = o.link[d].href;
          break
        }
      }
      for (var b = 0; b < t.feed.link.length; b++) {
        if (t.feed.link[b].rel == "next") {
          nextPage = t.feed.link[b].href
        }
      }
      for (var a = 0; a < o.link.length; a++) {
        if (o.link[a].rel == "replies" && o.link[a].type == "text/html") {
          q = o.link[a].title;
          break
        }
      }
      if ("content" in o) {
        e = o.content.$t
      } else {
        if ("summary" in o) {
          e = o.summary.$t
        } else {
          e = ""
        }
      }
      if ("media$thumbnail" in o) {
        h = o.media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s" + tocConfig.thumbWidth + "-c")
      } else {
        h = tocConfig.noImage.replace(/\/s[0-9]+\-c/, "/s" + tocConfig.thumbWidth + "-c")
      }
      postdate = o.published.$t.substring(0, 10), u = postdate.substring(0, 4), g = postdate.substring(5, 7), p = postdate.substring(8, 10), r = tocConfig.MonthNames[parseInt(g, 10) - 1];
      c += "<li><div class='inner'>";
      c += "<a href='" + n + "' target='_blank'><img style='width:" + tocConfig.thumbWidth + "px;height:" + tocConfig.thumbWidth + "px;' src='" + h + "' alt='" + s + "' /></a>";
      c += "<a class='toc-title' href='" + n + "' target='_blank'>" + s + "</a><strong> - (" + q + ")</strong><br>";
      c += "<div class='news-text'>" + cropFeed(e, tocConfig.numChars) + "&hellip;<br style='clear:both;'/></div>";
      c += '<div class="date"><span class="dd">' + p + '</span><span class="dm">' + r + '</span><span class="dy">' + u + "</span></div></div></li>"
    }
    if (input.value !== "" && window.location.hash == "#search") {
      resultDesc.innerHTML = "<span>Search result for keyword <strong>&quot;" + input.value + "&quot;</strong></span>"
    } else {
      resultDesc.innerHTML = ""
    }
    feedContainer.innerHTML += c;
    if (nextPage) {
      if (window.location.hash && window.location.hash !== "#0") {
        c = "<a href='javascript:initResult(2);' class='next'>" + tocConfig.navText + "</a>"
      } else {
        c = "<a href='javascript:initResult(1);' class='next'>" + tocConfig.navText + "</a>"
      }
    } else {
      c = "<a href='#table-outer' onclick='jQuery(&apos;html, body&apos;).animate({scrollTop: jQuery(&apos;#table-outer&apos;).offset().top}, 1500); return false' class='front'>" + tocConfig.frontText + "</a>"
    }
    feedNav.innerHTML = c;
    input.value = "";
    labelSorter.getElementsByTagName("select")[0].removeAttribute("disabled");
    orderByer.removeAttribute("disabled")
  } else {
    feedContainer.innerHTML = "";
    alert(tocConfig.noResult);
    feedNav.innerHTML = "<a href='?reload=true'>" + tocConfig.frontText + "</a>";
    searchDesc.innerHTML = ""
  }
}

function initResult(a) {
  var b, c;
  if (a == 1) {
    b = nextPage.indexOf("?");
    c = nextPage.substring(b)
  } else {
    if (a == 2) {
      b = nextPage.indexOf("?");
      c = nextPage.substring(b).replace(/\?/, "/-/" + window.location.hash.substr(1) + "?")
    } else {
      c = "?start-index=1&max-results=" + tocConfig.feedNum + "&orderby=" + orderByer.value + "&alt=json-in-script"
    }
  }
  c += "&callback=showFeedList";
  updateScript(c)
}

function removeScript() {
  var a = getID("temporer-script");
  a.parentNode.removeChild(a)
}

function buildLabels() {
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels";
  head.appendChild(a)
}

function updateScript(b) {
  if (startPage == 1) {
    removeScript()
  }
  feedNav.innerHTML = tocConfig.loading;
  if (tocConfig.labelName !== false) {
    feedArchive = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary/-/" + tocConfig.labelName + b
  } else {
    feedArchive = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary" + b
  }
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = feedArchive;
  a.id = "temporer-script";
  head.appendChild(a);
  startPage = 1
}

function changeSort(c) {
  removeScript();
  tocContainer.innerHTML = "";
  feedNav.innerHTML = tocConfig.loading;
  var b = document.createElement("script"),
    d = labelSorter.getElementsByTagName("select")[0],
    a = (c !== 0) ? "/-/" + c : "";
  b.type = "text/javascript";
  b.id = "temporer-script";
  b.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary" + a + "?alt=json-in-script&max-results=" + tocConfig.feedNum + "&orderby=" + orderByer.value + "&callback=showFeedList";
  head.appendChild(b);
  d.disabled = true;
  orderByer.disabled = true;
  window.location.hash = c
}

function searchPost() {
  removeScript();
  tocContainer.innerHTML = "";
  resultDesc.innerHTML = "";
  feedNav.innerHTML = tocConfig.searching;
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.id = "temporer-script";
  a.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary?alt=json-in-script&orderby=published&q=" + input.value + "&max-results=9999&callback=showFeedList";
  head.appendChild(a);
  window.location.hash = "#search";
  return false
}
getID("postSearcher").onsubmit = function() {
  return searchPost()
};
orderByer.onchange = function() {
  changeSort(0)
};
labelSorter.getElementsByTagName("select")[0].onchange = function() {
  changeSort(this.value)
};
window.onload = function() {
  initResult(0);
  buildLabels();
  window.location.hash = "#0"
};
