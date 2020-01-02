# tq-images-preview

一个javascript图片预览插件，适用用PC电脑端使用，移动端请点击此处

#### 安装

`npm`

```javascript
npm install tq-images-preview
```

`yarn`

```javascript
yarn add tq-images-preview
```

#### 使用

```javascript

import tqImagesPreview from "tq-images-preview"

tqImagesPreview( img, imgs )

```
#### 本地打包测试
```
yarn build
```
打包后 浏览 dist 目录下 index.html 文件即可

#### 编译ts文件

```javascript
sudo tsc ./src/index.ts --outDir "./" 
```
#### 编译 css stylus
```
stylus --compress css/
```
