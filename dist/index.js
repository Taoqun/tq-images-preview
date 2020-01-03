"use strict";
exports.__esModule = true;
require("../css/index.css");
var tqImagesView = (function () {
    function tqImagesView(img, list) {
        this.img = img;
        this.list = list ? Array.from(new Set(list)) : [img];
        this.index = this.list.indexOf(img);
        this.length = this.list.length;
        this.imgDom = null;
        this.init();
        return this;
    }
    tqImagesView.prototype.init = function () {
        this.removeDom();
        this.renderDom();
        this.addEvent();
    };
    tqImagesView.prototype.renderDom = function () {
        var preview = "\n            <div class=\"tq-images-img\" >\n            </div>\n        ";
        var list = this.length > 1 ? "\n            <div class=\"tq-images-list-wrap\" >\n            </div>\n        " : "";
        var previous = this.length > 1 ? "<div class=\"tq-images-icon tq-images-last\" ></div>" : "<div></div>";
        var next = this.length > 1 ? "<div class=\"tq-images-icon tq-images-next\" ></div>" : "<div></div>";
        var template = "\n                <div class=\"tq-images-mask\" ></div>\n                <div class=\"tq-images-icon tq-images-close\" ></div>\n                <div class=\"tq-images-content\" >\n                    " + previous + "\n                    " + preview + "\n                    " + next + "\n                </div>\n                " + list + "\n        ";
        var dom = document.createElement("div");
        dom.className = "tq-images-preview show";
        dom.innerHTML = template;
        setTimeout(function () {
            dom.className = "tq-images-preview";
        }, 300);
        document.body.appendChild(dom);
        this.loadlAll();
    };
    tqImagesView.prototype.loadlAll = function () {
        var dom = document.querySelector(".tq-images-img");
        this.imgDom = this.loadImg(dom, this.img, true);
        this.addImglist();
    };
    tqImagesView.prototype.addImglist = function () {
        var _this = this;
        var domlist = document.querySelector(".tq-images-list-wrap");
        if (!domlist) {
            return;
        }
        domlist.innerHTML = "";
        this.list.forEach(function (img) {
            var div = document.createElement("div");
            div.className = "tq-images-img-pre";
            div.dataset.src = img;
            if (img === _this.img) {
                div.className += " active";
            }
            domlist.appendChild(div);
            _this.loadImg(div, img);
        });
    };
    tqImagesView.prototype.loadImg = function (dom, src, preview) {
        if (!dom) {
            return null;
        }
        dom.innerHTML = "加载中";
        var img = new Image();
        img.onload = function () {
            dom.innerHTML = "";
            dom.className = dom.className.replace("error", "").trim();
            if (preview) {
                dom.style.width = img.width + "px";
                dom.style.height = img.height + "px";
            }
            dom.appendChild(img);
        };
        img.onerror = function () {
            dom.style.width = "70px";
            dom.style.height = "70px";
            dom.innerHTML = "加载失败";
            dom.className = dom.className.replace("error", "").trim() + " error";
        };
        img.src = src;
        return img;
    };
    tqImagesView.prototype.addEvent = function () {
        var closeDom = document.querySelector(".tq-images-close");
        if (closeDom) {
            closeDom.addEventListener("click", this.close.bind(this));
        }
        var lastDom = document.querySelector(".tq-images-last");
        if (lastDom) {
            lastDom.addEventListener("click", this.last.bind(this));
        }
        var nextDom = document.querySelector(".tq-images-next");
        if (nextDom) {
            nextDom.addEventListener("click", this.next.bind(this));
        }
        var prelist = document.querySelector(".tq-images-list-wrap");
        if (prelist) {
            prelist.addEventListener("click", this.preTap.bind(this));
        }
        document.addEventListener("keyup", this.keyboardControl.bind(this));
    };
    tqImagesView.prototype.keyboardControl = function (event) {
        switch (event.keyCode) {
            case 37:
                this.last();
                break;
            case 38:
                this.last();
                break;
            case 39:
                this.next();
                break;
            case 40:
                this.next();
                break;
            case 27:
                this.close();
                break;
        }
    };
    tqImagesView.prototype.preTap = function (event) {
        var dom = event.target;
        var index = -1;
        if (dom.tagName === "IMG") {
            index = this.list.indexOf(dom.src);
        }
        else if (dom.tagName === "DIV" && dom.className.includes("tq-images-img-pre")) {
            index = this.list.indexOf(dom.dataset.src);
        }
        this.change(index);
    };
    tqImagesView.prototype.last = function () {
        this.change(this.index <= 0 ? this.length - 1 : this.index - 1);
    };
    tqImagesView.prototype.next = function () {
        this.change(this.index >= this.length - 1 ? 0 : this.index + 1);
    };
    tqImagesView.prototype.change = function (index) {
        if (index < 0) {
            return;
        }
        this.index = index;
        this.img = this.list[this.index];
        this.updateImg();
    };
    tqImagesView.prototype.updateImg = function () {
        var _this = this;
        if (this.imgDom) {
            this.imgDom.src = this.img;
        }
        var domlist = document.querySelectorAll(".tq-images-list-wrap .tq-images-img-pre");
        Array.prototype.forEach.call(domlist, function (dom, index) {
            if (index === _this.index) {
                dom.className = "tq-images-img-pre active";
            }
            else {
                dom.className = "tq-images-img-pre";
            }
        });
    };
    tqImagesView.prototype.close = function () {
        this.removeEvent();
        this.removeDom();
    };
    tqImagesView.prototype.removeEvent = function () {
        var closeDom = document.querySelector(".tq-images-close");
        if (closeDom) {
            closeDom.removeEventListener("click", this.close.bind(this));
        }
        var lastDom = document.querySelector(".tq-images-last");
        if (lastDom) {
            lastDom.removeEventListener("click", this.last.bind(this));
        }
        var nextDom = document.querySelector(".tq-images-next");
        if (nextDom) {
            nextDom.removeEventListener("click", this.next.bind(this));
        }
        var prelist = document.querySelector(".tq-images-list-wrap");
        if (prelist) {
            prelist.removeEventListener("click", this.preTap.bind(this));
        }
        document.removeEventListener("keyup", this.keyboardControl.bind(this));
    };
    tqImagesView.prototype.removeDom = function () {
        var dom = document.querySelector(".tq-images-preview");
        if (!dom) {
            return;
        }
        dom.className += " close";
        setTimeout(function () {
            if (dom && dom.parentElement) {
                dom.parentElement.removeChild(dom);
            }
        }, 300);
    };
    return tqImagesView;
}());
exports["default"] = (function (img, list) {
    return new tqImagesView(img, list);
});
