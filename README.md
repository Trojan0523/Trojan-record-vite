# Trojan-record_vite

## Trojan记账 - 第一版迭代

- 第一版的Trojan记账是基于Vue2 + ts 进行编写的，由于Vue2对TS的支持不是那么的理想，装饰器写法过于繁琐且这种写法还没有录入规范，官方装饰器并不能满足需求，所以还要另外去引用第三方的装饰器插件(vue-property-decorator)，导致拓展性和实际利用性不高，加上新版本vue3的到来，带来了不少新特性，其中一个较大的亮点就是能较好的支持TS的使用，不需要使用装饰器，同时作者带来了新的打包工具Vite，使用一些动态引入和ES module等之前webpack没有支持的特性，所以现在对Trojan记账进行第一版重构编写，改造之前的vue2 记账项目，同时对vue3的新语法进行实践，并且替换掉webpack使用vite，途中可能会踩上不少的坑，所以会边做边进行分析，对写法的优劣性也会进行评估，争取能成为最佳实践，由于是迭代重构，所以对页面的样式不会进行重新设计，按照vue2的样式进行实现，减少在css编写时所花费的时间，能在最短的时间内对项目进行重写。

- 一版迭代每个阶段争取通过commit log的形式对每个阶段开发的特性和功能进行展示，对于commit message，会以 "feature： work description"的形式做为规范，方便自己对每一个开发进度和开发流程进行复盘，做到严格规范自己项目撰写。

- 第一版的实现同样也是使用localstorage进行数据的本地化存储，但是并不是说没有对在线版的支持，在第二版的迭代中我会尝试使用nodejs对整个项目的服务端进行设计，将记账数据存储到数据库中，数据会通过用户的个人记账信息进行存储，在第一版迭代完后就会进行相关服务端的设计，敬请期待。

- 技术栈: Vue3 + TypeScript + vite + vuex4 + vue-router4


