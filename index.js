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
    };
    tqImagesView.prototype.addTemplate = function () {
        var preview = "\n            <div class=\"tq-images-img\" >\n            </div>\n        ";
        var list = "\n            <div class=\"tq-images-list-wrap\" >\n\n            </div>\n        ";
        var template = "\n                <div class=\"tq-images-mask\" ></div>\n                <div class=\"tq-images-close\" ></div>\n                <div class=\"tq-images-preview\" >\n                    <div class=\"tq-images-last\" ></div>\n                    " + preview + "\n                    <div class=\"tq-images-next\" ></div>\n                </div>\n                " + list + "\n        ";
        var dom = document.createElement("div");
        dom.className = "tq-images-preview";
        dom.innerHTML = template;
        document.body.appendChild(dom);
    };
    tqImagesView.prototype.previous = function () {
    };
    tqImagesView.prototype.next = function () {
    };
    tqImagesView.prototype.close = function () {
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
