!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports,__webpack_require__){__webpack_require__(3)},function(module,exports){!function($){function visibleWatcher(opt){function getCurrentSection(){for(var index=-1,pos=$(document).scrollTop(),i=0,len=sectionPosArr.length;i<len&&pos+options.viewport.height()>sectionPosArr[i];i+=1)index+=1;return index}function refresh(){var viewIndex=getCurrentSection();curIndex!==viewIndex&&(curIndex=viewIndex,$sections.filter(function(i){return i<=curIndex&&!$(this).hasClass(options.visibleClass)}).addClass(options.visibleClass).trigger("visible.visibleWatcher"),options.onVisible($sections.eq(curIndex),curIndex))}function init(){$sections.each(function(){var offsetValue=$(this).attr("data-offset")?Number($(this).attr("data-offset")):options.offset,visibleOffset=offsetValue%1==0?offsetValue:offsetValue*options.viewport.height();sectionPosArr.push($(this).offset().top+visibleOffset)}),refresh(),options.onLoad()}var defaults,options,$sections=$(this),curIndex=-1,sectionPosArr=[];defaults={viewport:$(window),visibleClass:"is-visible",offset:300,onLoad:$.noop,onVisible:$.noop},options=$.extend({},defaults,opt),init(),options.viewport.on({"scroll.visibleWatcher":refresh,"resize.visibleWatcher":init})}$.fn.visibleWatcher=function(opt){return visibleWatcher.call(this,opt),this}}(jQuery)},function(module,exports){$(function(){var $sectionBox=$(".J_section-box"),$navbarBox=$(".J_nav-bar-con"),navHeight=$(".J_nav-bar-con").height();$(window).on("scroll",function(){$(window).scrollTop()>=$sectionBox.offset().top-navHeight?$navbarBox.addClass("J_fixNavbar"):$navbarBox.removeClass("J_fixNavbar")})})},function(module,exports,__webpack_require__){__webpack_require__(1),__webpack_require__(2),$(function(){({init:function(){this.sliderImg(),this.bindEvent(),this.isMouseDown=!1,this.wrapLeft=$(".J_drag").offset().left},sliderImg:function(){function autoPlay(){num--,num<=-(500*myscroll_ul.children.length+50-document.body.clientWidth)&&(num=0),myscroll_ul&&(myscroll_ul.style.transform="translateX("+num+"px)")}var myscroll_ul=document.getElementById("J_inner"),num=0;setInterval(autoPlay,10)},bindEvent:function(){$(window).on("resize",$.proxy(this.onWindowResize,this)),$(".J_bar").on("mousedown",$.proxy(this.onMouseDown,this)),$("body").on("mousemove",$.proxy(this.moveing,this)),$("body").on("mouseup",$.proxy(this.onMouseUp,this))},onWindowResize:function(){this.wrapLeft=$(".J_drag").offset().left,this.isMouseDown=!1,this.changeSlider()},onMouseDown:function(e){this.isMouseDown=!0},moveing:function(e){if(this.isMouseDown){var curWidth=e.pageX-this.wrapLeft;this.changeSlider(curWidth)}},onMouseUp:function(){this.isMouseDown=!1},changeSlider:function(curWidth){var wrapWidth=$(".J_drag").width(),barNode=$(".J_bar"),rightNode=($(".J_item_L"),$(".J_item_R"));if(void 0==curWidth)return barNode.css({left:"50%"}),void rightNode.css({width:wrapWidth/2});var realWidth;rightNode.width();realWidth=curWidth<0?0:curWidth>wrapWidth?wrapWidth:curWidth,rightNode.css({width:wrapWidth-realWidth}),barNode.css({left:realWidth})}}).init()})},function(module,exports,__webpack_require__){module.exports=__webpack_require__(0)}]);