
function np_links(a, b) {
    switch (a) {
        case "10":
            togglecom(b);
            break;
        case "20":
            toggleusgs(b);
            break;
        case "30":
            seasonalforecast(b);
            break;
        case "57":
            toggleraingauge(b);
            break;
        case "99":
            multisensorview(b);
            break;
        case "101":
            model_forecast(b, 101);
            break;
        case "201":
            model_forecast(b, 201);
            break;
        case "202":
            model_forecast(b, 202);
            break;
        case "203":
            model_forecast(b, 203);
            break;
        case "110":
            usgs_forecast(b);
            break;
        case "102":
        case "109":
            raintrackeractive(b, a);
            break;
        case "103":
        case "108":
            realtimewatershedactive(b, a);
            break;
        case "111":
            areacalculator(b, a);
            break;
        case "104":
            opendatapanel(0, 5);
            break;
        case "105":
            opendatapanel(0, 1);
            break;
        case "106":
            load_directionspanel(b);
            break;
        case "107":
            load_3dterrain(b);
            break;
        case "121":
        case "122":
        case "123":
        case "125":
        case "126":
        case "127":
        case "128":
        case "129":
        case "130":
        case "131":
        case "132":
        case "276":
        case "133":
        case "261":
            add_new_layer(b, a, "kml");
            break;
        case "26":
            sensor_warning(b);
            break;
        case "270":
        case "271":
        case "272":
            togglerain_all(b, a);
            break;
        case "274":
        case "275":
            add_new_layer(b, a, "custom");
            break;
        case "124":
        case "134":
        case "135":
        case "136":
        case "137":
        case "138":
            add_new_layer(b, a, "fusion");
            break;
        case "269":
        case "273":
        case "277":
        case "278":
        case "280":
        case "281":
        case "282":
        case "283":
            ifis_rain_maps(b, a, 1);
            break;
        case "301":
            show_inundation(b, "", 0);
            break;
        case "303":
            show_inundation(b, "", 1);
            break;
        case "1001":
            sensor_explorer_load(b);
            break;
        case "30101":
        case "30102":
        case "30103":
        case "30104":
        case "30105":
        case "30106":
        case "30107":
        case "30108":
        case "30109":
        case "30110":
        case "30111":
        case "30112":
        case "30113":
        case "30114":
        case "30115":
        case "30116":
        case "30117":
        case "30118":
        case "30119":
        case "30120":
        case "30121":
        case "30122":
            load_inundation_nid(a, b, "actual");
            break;
        case "302":
            OpenInNewTab("http://ifis.iowafloodcenter.org/ifis/newmaps/");
            break;
        case "304":
            OpenInNewTab("http://ifis.iowafloodcenter.org/ifis/newmaps/risk/");
            break;
        case "401":
        case "402":
        case "403":
            toggle_panel(a, b);
            break;
        case "551":
            togglestage(b);
            break;
        case "552":
            togglerperiod(b);
            break;
        case "553":
            toggleactualstage(b);
            break;
        case "554":
            load_flightsimulator(b);
            break;
        case "555":
            toggle_waterdepth(b);
            break;
        case "702":
            take_snapshot();
            break;
        case "703":
            findmylocation();
            break;
        case "704":
            opendatapanel(0, 6);
            break;
        case "705":
            communityselected(0, "State of Iowa", 42, -93, "", 0, 0);
            break;
        case "706":
            select_virtual_community();
            break;
        case "707":
            splitmapview(b, 1);
            break;
        case "708":
            splitmapview(b, 0);
            break;
        default:
            np_links_default(a, b)
    }
}

function np_links_default(a, b) {
    if (1e4 > a) "1" == b ? hideMar(a) : showMar(a);
    else if (console.log("toggle11"), "function" == typeof nmspace.sc_np_links) {
        nmspace.sc_np_links(a, b)
    }
}

function initial_npcheckbox(a) {
    $(a).on("click", "a", function(a) {
        return id = $(this).attr("id"), id && (id = id.substring(2, id.length)), $(this).hasClass("npact") ? ($(this).removeClass("npact"), vis = 1) : (104 == id || 105 == id || 302 == id || id > 700 && id < 708 || id > 30100 && id < 30120 || $(this).addClass("npact"), vis = 0), id ? (np_links(id, vis), !1) : void 0
    });
    var b = detectFormfactor();
    "desktop" == b && $(a).on("mouseenter", "a", function(a) {
        return id = $(this).attr("id"), id && (id = id.substring(2, id.length)), html = $(this).find("span").html(), html && ($("#np_info").show(), $("#np_info").html(html)), !1
    }).on("mouseleave", "a", function(a) {
        $("#np_info").hide(), $("#np_info").html("")
    })
}

function opendatapanel(a, b, c) {
    var d = "no";
    switch (b) {
        case 1:
            panw = 773, panh = 500, panurl = "knowledge/engine.php?c=" + $("#recentcommunity").val() + "&";
            break;
        case 2:
            panw = 945, panh = 545, panurl = "stream/index.php?";
            break;
        case 3:
            panw = 945, panh = 545, panurl = "stream/index.php?";
            break;
        case 4:
            panw = 945, panh = 545, panurl = "stream/index.php?";
            break;
        case 5:
            panw = 340, panh = 270, panurl = "risk_calculator.php?";
            break;
        case 6:
            panw = 445, panh = 420, panurl = "feedback.php?";
            break;
        case 8:
            panw = 800, panh = 500, panurl = "graph-outlet/index.php?";
            break;
        case 9:
            panw = 280, panh = 370, panurl = "snapshot.php?";
            break;
        case 10:
            panw = 665, panh = 525, panurl = "rain/index.php?";
            break;
        case 11:
            panw = 980, panh = 445, panurl = "rain/calendar.php?";
            break;
        case 13:
            panw = 960, panh = 490, panurl = "rain/soil/index.php?";
            break;
        case 14:
            panw = 875, panh = 525, panurl = "reservoir/index.php?";
            break;
        case 15:
            panw = 690, panh = 600, panurl = "stream/model-image.php?";
            break;
        case 16:
            panw = 370, panh = 280, panurl = "tools/sensor_explorer.php?";
            break;
        case 31:
        case 32:
        case 33:
            panw = 665, panh = 470, panurl = "seasonal/index.php?"
    }
    if ("function" == typeof nmspace.sc_opendatapanel && b >= 1e4) {
        var e = nmspace.sc_opendatapanel(a, b, c);
        panw = e[0], panh = e[1], panurl = e[2]
    }
    $("#darkenBackground").show(), $("#panel_data").html('<iframe src="' + panurl + "id=" + a + "&type=" + b + "&param=" + c + '" frameborder=0 height="100%" width="100%" scrolling=' + d + " id=frdata>Loading...</iframe>");
    var f = getSize("w"),
        g = getSize("h"),
        h = (f - panw) / 2 - 5,
        i = (g - panh) / 2 - 10;
    0 > i && (i = 0), 0 > h && (h = 0), document.getElementById("panel_data").style.width = panw + "px", document.getElementById("panel_data").style.height = panh + "px", document.getElementById("panel_data").style.left = h + "px", document.getElementById("panel_data").style.top = i + "px", $("#panel_data").show(), document.getElementById("panel_data_hide").style.left = h + panw - 6 + "px", document.getElementById("panel_data_hide").style.top = i - 13 + "px", $("#panel_data_hide").show()
}


function closedatapanel() {
    $("#panel_data").hide(), $("#panel_data_hide").hide(), $("#darkenBackground").hide(), $("input#city").focus()
}

function take_snapshot() {
    var a = $("#recentcommunity").val(),
        b = $("#selectedcommunity").val(),
        c = $("#direct_map").val(),
        d = "?";
    if (0 == c ? 0 == b ? surl = "c=State_of_Iowa" : surl = "c=" + a : surl = "mid=" + c, $("#np301").hasClass("npact") && (surl = "snap_view=fmap"), d += surl, d += "|par=" + map.getZoom(), d += "*" + map.getCenter().lat().toFixed(6), d += "*" + map.getCenter().lng().toFixed(6), d += "*" + $("#np10").hasClass("npact"), d += "*" + $("#np20").hasClass("npact"), d += "*" + $("#np9").hasClass("npact"), d += "*" + $("#np57").hasClass("npact"), d += "*" + $("#np8").hasClass("npact"), d += "*" + $("#np26").hasClass("npact"), d += "*" + $("#np110").hasClass("npact"), d += "*" + $("#np30").hasClass("npact"), d += "*" + $("#np101").hasClass("npact"), d += "*false", "function" == typeof nmspace.sc_take_snapshot) {
        var e = nmspace.sc_take_snapshot();
        e = e.replace(/&/gi, "|"), d += e
    }
    opendatapanel(d, 9)
}
