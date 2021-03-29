(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{560:function(t,a,e){"use strict";e.r(a);var r=e(2),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"perspective-理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#perspective-理解"}},[t._v("#")]),t._v(" perspective 理解")]),t._v(" "),e("p",[t._v("CSS3 中的 perspetive 在这样一个体系里就代表着元素与观者之间的距离，形象点说，就是元素 3D 效果的强度。CSS3 中的 3D 效果消失点固定，变化的是观者与元素之间的距离。不过 perspective 数值与 3D 效果强度是成反比的，数值越大，元素的 3D 效果越不明显"),e("br"),t._v("\n ——2000px 的视点意味着你看的是远方的物体，而 100px 则意味着这个物体就在你眼前。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"20210212225050-2021-02-12","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20210212225050-2021-02-12.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("这样：")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"20210212225304-2021-02-12","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20210212225304-2021-02-12.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("值越小，透视距离越近，效果越明显")]),t._v(" "),e("p",[t._v("该属性为定义 3D 变换的元素与视图的距离，也就是透视距离。这个属性应添加到视图元素 (变换元素的父元素) 上。"),e("br"),t._v("\n这是 3d 动画必备的属性，如果不添加这个属性，则动画会变成平面效果。")]),t._v(" "),e("p",[t._v("一般用在舞台元素也就是容器上，这样会让该容器中所用动画元素使用一个视角，这个属性还可以单独用在每个元素中，自然元素也就只呈现自己的视角样式。")]),t._v(" "),e("h3",{attrs:{id:"消失点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消失点"}},[t._v("#")]),t._v(" 消失点")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"20210212225636-2021-02-12","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20210212225636-2021-02-12.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("左图与右图的元素均绕 Y 轴旋转了 45 度，但差别很明显，右图更容易让人想到一个画面中集体开启的窗户。左图的问题就在于，每个元素的消失点各自为政，都在元素的中心点位置，而右图的消失点则统一在实线方框的中心位置。实现方法就是将元素的 perspetive 设置转移至元素父容器上。")]),t._v(" "),e("h3",{attrs:{id:"preserve-3d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preserve-3d"}},[t._v("#")]),t._v(" preserve-3d")]),t._v(" "),e("p",[t._v("transform-style: preserve-3d")]),t._v(" "),e("p",[t._v("超越平面 3D 的关隘就在于 transform-style: preserve-3d 的属性设置，默认值为 flat")]),t._v(" "),e("p",[t._v("（这个属性可以把一个处于 2 维的 div 变为 3d 空间，把这个属性比作一个相机的摄像头，这个 div 内的内容会以 3d 的形式通过摄像头的形式反馈给你，他的子元素才会享受 3d 效果，子元素以下的元素就不会有 3d 效果。）")]),t._v(" "),e("h3",{attrs:{id:"transform-origin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transform-origin"}},[t._v("#")]),t._v(" transform-origin")]),t._v(" "),e("p",[t._v("transform-origin：50% 50%;")]),t._v(" "),e("p",[t._v("旋转移动围绕的轴线，默认是中心，可以设 left,right,top,bottom, 也可以设值数值，这样可以调整旋转移动所围绕的轴线，完成诸如翻页，开门等动作。"),e("br"),t._v("\n(这就相当于你的眼镜啦，位置不同效果也就不同了)")]),t._v(" "),e("h3",{attrs:{id:"backface-visibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backface-visibility"}},[t._v("#")]),t._v(" backface-visibility：")]),t._v(" "),e("p",[t._v("backface-visibility：hidden 是否隐藏元素背面")]),t._v(" "),e("h2",{attrs:{id:"_3d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3d"}},[t._v("#")]),t._v(" 3d")]),t._v(" "),e("p",[t._v("在 2d 的基础上添加 z 轴的变化")]),t._v(" "),e("p",[t._v("3D 位移：在 2d 的基础上添加 translateZ（），或者使用 translate3d（） translateZ（）：以方框中心为原点，变大"),e("br"),t._v("\n 3D 缩放：在 2d 的基础上添加 scaleZ（），或者使用 scale3d（） scaleZ（）和 scale3d（）函数单独使用时没有任何效果")]),t._v(" "),e("p",[t._v("过渡效果写法同 2D")]),t._v(" "),e("h2",{attrs:{id:"_3d-效果示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3d-效果示例"}},[t._v("#")]),t._v(" 3D 效果示例")]),t._v(" "),e("p",[t._v("写了三个基础 3DDemo")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://fengwei2002.github.io/3d-effects/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://fengwei2002.github.io/3d-effects/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("其实就是改变一下元素的位置，其他的都和平面动画一样")])])}),[],!1,null,null,null);a.default=s.exports}}]);