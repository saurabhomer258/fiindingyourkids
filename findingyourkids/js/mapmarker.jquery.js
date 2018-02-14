function initialize() { var f = new google.maps.LatLng(22.9576176, 82.1735296), e = { zoom: 5, center: f, scrollwheel: !1, mapTypeId: google.maps.MapTypeId.ROADMAP }, t = new google.maps.Map(document.getElementById("map_canvas"), e), n; GetProjects(); setMarkers(t, sites); var i = document.getElementById("childProjLat2").innerHTML, r = document.getElementById("childProjLong2").innerHTML, o = document.getElementById("childProjTitle2").innerHTML, s = new google.maps.LatLng(i, r), h = { zoom: 5, center: s, scrollwheel: !1, mapTypeId: google.maps.MapTypeId.ROADMAP }, u = new google.maps.Map(document.getElementById("map_canvas2"), h); setMarkers2(u, i, r, o); n = new google.maps.BicyclingLayer; n.setMap(t); n.setMap(u) } function GetProjects() { $.ajax({ type: "POST", url: "../FetchProjectsForMap.aspx/getProjects", data: "", contentType: "application/json; charset=utf-8", dataType: "json", success: OnSuccess, failure: function (n) { alert(n.d) }, error: function (n) { alert(n.d) } }) } function OnSuccess(n) { sites = n.d } function setMarkers(n, t) { for (var i = 0; i < t.length; i++) { var r = t[i], f = new google.maps.LatLng(r[1], r[2]), u = new google.maps.Marker({ position: f, animation: google.maps.Animation.DROP, map: n, title: r[0], zIndex: r[3], html: r[4] }); google.maps.event.addListener(u, "click", function () { for (var n = 0; n < gmarkers.length; n++) gmarkers[n].setIcon(gmarkers[n].myDefaultIcon); this.setIcon(activeIcon); inf = document.getElementById("InfoWindows"); inf.innerHTML = this.html }); i == 0 && (u.setIcon(activeIcon), inf = document.getElementById("InfoWindows"), inf.innerHTML = u.html); gmarkers.push(u) } } function setMarkers2(n, t, i, r) { var u = new google.maps.LatLng(t, i), f = new google.maps.Marker({ position: u, animation: google.maps.Animation.DROP, map: n, title: r, zIndex: 1 }); gmarkers.push(f) } var infowindow = null, inf = null, gmarkers = [], sites = [], defaultIcon = new google.maps.MarkerImage("../images/marker_yellow.png", new google.maps.Size(29, 30), new google.maps.Point(0, 0), new google.maps.Point(16, 32)), blueIcon = new google.maps.MarkerImage("../images/marker_yellow.png", new google.maps.Size(29, 30), new google.maps.Point(0, 0), new google.maps.Point(16, 32)), greenIcon = new google.maps.MarkerImage("../images/marker_yellow.png", new google.maps.Size(29, 30), new google.maps.Point(0, 0), new google.maps.Point(16, 32)), orangeIcon = new google.maps.MarkerImage("../images/marker_yellow.png", new google.maps.Size(29, 30), new google.maps.Point(0, 0), new google.maps.Point(16, 32)), activeIcon = new google.maps.MarkerImage("../images/marker_orange.png", new google.maps.Size(40, 39), new google.maps.Point(0, 0), new google.maps.Point(16, 32)), shape = { coord: [9, 0, 6, 1, 4, 2, 2, 4, 0, 8, 0, 12, 1, 14, 2, 16, 5, 19, 7, 23, 8, 26, 9, 30, 9, 34, 11, 34, 11, 30, 12, 26, 13, 24, 14, 21, 16, 18, 18, 16, 20, 12, 20, 8, 18, 4, 16, 2, 15, 1, 13, 0], type: "poly" }; $(document).ready(function () { initialize() });