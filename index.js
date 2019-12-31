"use strict";
exports.__esModule = true;
require("./css/index.styl");
var tqImagesView = /** @class */ (function () {
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
        // <img alt='${this.img}' src='${this.img}' />
        var preview = "\n            <div class=\"tq-images-img\" >\n            </div>\n        ";
        var list = "\n            <div class=\"tq-images-list-wrap\" >\n            </div>\n        ";
        var template = "\n                <div class=\"tq-images-mask\" ></div>\n                <div class=\"tq-images-icon tq-images-close\" ></div>\n                <div class=\"tq-images-content\" >\n                    <div class=\"tq-images-icon tq-images-last\" ></div>\n                    " + preview + "\n                    <div class=\"tq-images-icon tq-images-next\" ></div>\n                </div>\n                " + list + "\n        ";
        var dom = document.createElement("div");
        dom.className = "tq-images-preview";
        dom.innerHTML = template;
        document.body.appendChild(dom);
        this.loadlAll();
    };
    tqImagesView.prototype.loadlAll = function () {
        var preview = document.querySelector(".tq-images-img");
        this.loadImg(preview, this.img);
    };
    tqImagesView.prototype.loadImg = function (dom, src) {
        if (!dom) {
            return;
        }
        var img = new Image();
        var load = new Image();
        dom.appendChild(load);
    };
    tqImagesView.prototype.addEvent = function () {
        var closeDom = document.querySelector(".tq-images-close");
        closeDom.addEventListener("click", this.close.bind(this));
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
        if (dom) {
            dom.parentElement.removeChild(dom);
        }
    };
    tqImagesView.prototype.change = function () {
    };
    return tqImagesView;
}());
exports["default"] = (function (img, list) {
    return new tqImagesView(img, list);
});
