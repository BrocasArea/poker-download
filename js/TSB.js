var T;
T = function (a) {
    var e = function (a, b) {
        TSB.modalAlert({
            status: b ? b : "success",
            msg: a
        })
    }, f = function (b, c, d, e, f) {
        var g = a.Deferred();
        return a.ajax({
            url: b,
            type: f || "get",
            data: c,
            dataType: "json",
            error: function () {
                TSB.modalAlert({
                    status: "danger",
                    msg: "服务器错误"
                })
            }
        }).done(function (a) {
            a ? ("function" == typeof d && d.call(this, a), g.resolve()) : ("function" == typeof e && e.call(this, a), g.reject(a))
        }).fail(function () {
            g.reject()
        }), g.promise()
    }, g = function (a, b, c, d) {
        return T.restGet(a, b, c, d, "post")
    }, h = function (b, c, d, e) {
        d = "undefined" != typeof d ? d : {};
        var f, g = 0;
        for (f in d) g++;
        1 > g ? a("#" + c).load(b, function (a, b) {
            b = b.toLowerCase(), "success" == b && "undefined" != typeof e && e()
        }) : a("#" + c).load(b, d, function (a, b) {
            b = b.toLowerCase(), "success" == b && "undefined" != typeof e && e()
        })
    }, i = function (b, c, d) {
        a.ajax({
            url: b,
            type: "get",
            jsonp: "callback",
            data: c,
            dataType: "jsonp",
            jsonpCallback: "success",
            error: function () {
                TSB.modalAlert({
                    status: "danger",
                    msg: "服务器错误"
                })
            },
            success: function (a) {
                d.call(this, a)
            }
        })
    }, j = function (a) {
        var c, b = typeof a;
        if ("string" == b) return a.length;
        if ("object" == b) {
            c = 0;
            for (d in a) c++;
            return c
        }
        return !1
    }, k = function (b) {
        a("#" + b).data("reset") || a("#" + b).data("reset", a("#" + b)[0].outerHTML), a("#" + b).data("class") || a("#" + b).data("class", a("#" + b).attr("class")), a("#" + b).addClass("loading")
    }, l = function (b) {
        m(b), a("#" + b).addClass("nodata")
    }, m = function (b) {
        var c = a("#" + b),
            d = c.parent(),
            e = c.data("reset");
        c.remove(), d.append(e), a("#" + b).attr("class", a("#" + b).data("class"))
    }, n = function (b) {
        var c = '<div class="basic-main-left-div dash top_15" style="padding:50px; border:1px dashed #ccc;"><div class="text-center"><img src="/resource/img/not_found.png"></div><div class="text-center font-18" style="font-size:18px; line-height:40px">哎呀，啥都没有发现，怎么回事?</div> <div class="text-center"> 如果有任何问题，请<a href="">查看帮助</a>或<a href="">联系我们</a></div>';
        a("#" + b).html(c)
    };
    return {
        restGet: f,
        restPost: g,
        alert: e,
        ajaxLoad: h,
        getObjCount: j,
        showLoading: k,
        showNoData: l,
        divRest: m,
        notFoundData: n,
        ajaxJsonp: i
    }
}(jQuery, window, document, void 0);