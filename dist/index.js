"use strict";
exports.__esModule = true;
require("../css/index.css");
var tqImagesView = (function () {
    function tqImagesView(img, list) {
        this.img = img;
        this.list = list;
        this.index = list.indexOf(img);
        this.init();
        return this;
    }
    tqImagesView.prototype.init = function () {
        this.removeDom();
        this.addTemplate();
        this.addEvent();
    };
    tqImagesView.prototype.addTemplate = function () {
        var preview = "\n            <div class=\"tq-images-img\" >\n            </div>\n        ";
        var list = "\n            <div class=\"tq-images-list-wrap\" >\n            </div>\n        ";
        var template = "\n                <div class=\"tq-images-mask\" ></div>\n                <div class=\"tq-images-icon tq-images-close\" ></div>\n                <div class=\"tq-images-content\" >\n                    <div class=\"tq-images-icon tq-images-last\" ></div>\n                    " + preview + "\n                    <div class=\"tq-images-icon tq-images-next\" ></div>\n                </div>\n                " + list + "\n        ";
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
        this.loadImg(dom, this.img);
    };
    tqImagesView.prototype.loadImg = function (dom, src) {
        if (!dom) {
            return;
        }
        dom.innerHTML = "加载中";
        var img = new Image();
        img.onload = function () {
            setTimeout(function () {
                dom.innerHTML = "";
                dom.className = dom.className.replace("error", "").trim();
                dom.appendChild(img);
            }, 500);
        };
        img.onerror = function () {
            dom.innerHTML = "加载失败";
            dom.className = dom.className.replace("error", "").trim() + " error";
        };
        img.src = src;
    };
    tqImagesView.prototype.addEvent = function () {
        var closeDom = document.querySelector(".tq-images-close");
        if (closeDom) {
            closeDom.addEventListener("click", this.close.bind(this));
        }
    };
    tqImagesView.prototype.previous = function () {
    };
    tqImagesView.prototype.next = function () {
    };
    tqImagesView.prototype.close = function () {
        this.removeDom();
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
    tqImagesView.prototype.change = function () {
    };
    return tqImagesView;
}());
exports["default"] = (function (img, list) {
    return new tqImagesView(img, list);
});
