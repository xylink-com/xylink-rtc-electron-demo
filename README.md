# XYLINK WEBRTC SDK
小鱼易连webrtc sdk demo for electron(>5.0.x)项目。

此项目使用到的技术栈：react+typescript+electron@5.0.12

### 准备工作
1. 注意在`src/utils/config.ts`中配置第三方登录所需的
  * extId
  * clientId
  * clientSecret

### 运行

#### 安装依赖
```bash
$ yarn
or
$ npm install
```

#### 运行
```bash
$ yarn start
or
$ npm run start
```
所用到的工具自行学习了解：
1. [yarn](https://yarn.bootcss.com/)
2. [node](https://nodejs.org/zh-cn/)
3. [react](https://reactjs.org/)
3. [electron](https://www.electronjs.org)

### 备注
`electron`在国内不好安装，容易出错，建议使用如下方式进行安装：
```bash
$ ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/" yarn add electron@5.0.12
```