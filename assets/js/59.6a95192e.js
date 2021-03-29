(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{536:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("不会吧，不会吧，不会你还没用过 GitHub Action 吧 ///")])]),s._v(" "),a("h2",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[s._v("#")]),s._v(" vuepress")]),s._v(" "),a("p",[s._v("用 vuepress 也有快一整年了，每次提交都要等三分钟左右，而之前使用过的 Jekyll 搭建的静态网站就可以把文章或者代码 push 到仓库然后就可以实时预览")]),s._v(" "),a("p",[s._v("一般部署博客的流程是：")]),s._v(" "),a("ul",[a("li",[s._v("写一篇文章")]),s._v(" "),a("li",[s._v("生成静态文件")]),s._v(" "),a("li",[s._v("切换 gh-pages 分支")]),s._v(" "),a("li",[s._v("复制静态文件到 gh-pages 分支")]),s._v(" "),a("li",[s._v("访问网址验证是否成功")])]),s._v(" "),a("p",[s._v("或者是")]),s._v(" "),a("ul",[a("li",[s._v("写一篇文章")]),s._v(" "),a("li",[s._v("生成静态文件")]),s._v(" "),a("li",[s._v("将静态文件推送到其他仓库")]),s._v(" "),a("li",[s._v("其他仓库的 master 分支 /gh 分支进行预览")]),s._v(" "),a("li",[s._v("访问网址验证是否成功")])]),s._v(" "),a("p",[s._v("博客源码与部署仓库分离自然是第二种方法")]),s._v(" "),a("p",[s._v("当你使用了 GitHub Actions 之后，流程可以简化为：")]),s._v(" "),a("ul",[a("li",[s._v("写一篇文章")]),s._v(" "),a("li",[s._v("提交到 GitHub")]),s._v(" "),a("li",[s._v("结束")])]),s._v(" "),a("p",[s._v("从机械的流程中解脱，专注于写作。")]),s._v(" "),a("p",[s._v("action 相当于可以将本地的执行脚本操作在 GitHub 提供的 Linux 上运行，究极舒适，人上人用法"),a("br"),s._v("\n vuepress 官方文档虽然没有给出，但我在 GitHub 上面接触到的 vuepress 频繁使用者"),a("s",[s._v("基本")]),s._v("都用着 action, 我一直有想法却没弄，弄完还是挺方便的。")]),s._v(" "),a("h2",{attrs:{id:"vuepress-deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-deploy"}},[s._v("#")]),s._v(" vuepress-deploy")]),s._v(" "),a("p",[s._v("因为执行的都是很多相同的操作，所以 action marketplace 也就自然而然的存在了"),a("br"),s._v("\n搜 Vuepress GitHub action 就会有很多可选项")]),s._v(" "),a("p",[s._v("例如我用的这个："),a("a",{attrs:{href:"https://github.com/jenkey2011/vuepress-deploy",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-deploy"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("中文文档在这里："),a("a",{attrs:{href:"https://github.com/jenkey2011/vuepress-deploy/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("README.zh-CN.md"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("但是这个的话，示例仓库和 vuepress 官方仓库结构不太一样"),a("br"),s._v("\n然后就导致按照文档 cv 的话 build 就会出现各种错误")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"2021-02-02-17-12-44","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2021-02-02-17-12-44.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("调试 action 提交了 20 次")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"2021-02-02-17-10-10","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2021-02-02-17-10-10.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("然后就是 Google 大法好")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"浏览器 TAB","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2021-02-02-16-58-58.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("最后也是试了十几次变绿了")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"2021-02-02-17-05-36","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2021-02-02-17-05-36.png",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"vuepress-deploy-相关错误的解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-deploy-相关错误的解决"}},[s._v("#")]),s._v(" vuepress-deploy 相关错误的解决")]),s._v(" "),a("p",[s._v("主要是 "),a("a",{attrs:{href:"https://github.com/jenkey2011/vuepress-deploy-demo/blob/master/.github/workflows/deploy-to-other-repo-master.yml",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个 DEMO"),a("OutboundLink")],1),s._v(" 的 vuepress 没有使用 docs 结构"),a("br"),s._v("\n然后脚本什么的也就需要重写了，yml 也需要手动改一下")]),s._v(" "),a("p",[s._v("最终的 vuepress-deploy.yml:")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" github action\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@master\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build and Deploy\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jenkey2011/vuepress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy@master\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TARGET_REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fengwei2002/fengwei2002.github.io\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TARGET_BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_SCRIPT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn && yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("code",[s._v("TARGET_REPO")]),s._v("  填写输出仓库就行")]),s._v(" "),a("p",[s._v("就是这个最后两行配置挺烦的，是"),a("strong",[s._v("构建命令")]),s._v("和"),a("strong",[s._v("构建目录")]),a("br"),s._v("\n平时使用的都是 dev 本地预览和 deploy 远程部署，构建命令一般不用，所以容易搞混")]),s._v(" "),a("p",[s._v("默认的是  "),a("code",[s._v("yarn && build")]),s._v("  和  "),a("code",[s._v("blog/.vuepress/dist/")]),s._v(" , 然鹅官方步骤构建的话主要的 vuepress 都是在 docs 文件夹下，所以就会出现脚本不匹配的各种报错")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"2021-02-02-17-29-58","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2021-02-02-17-29-58.png",loading:"lazy"}})]),s._v(" "),a("p",[a("code",[s._v("BUILD_SCRIPT")]),s._v("  的值就把  "),a("code",[s._v("yarn && build")]),s._v("  改为 "),a("code",[s._v("yanr && yarn")]),s._v("  + "),a("strong",[s._v("自己的 build 脚本")]),s._v("即可")]),s._v(" "),a("blockquote",[a("p",[s._v("就这里试了好多次。...⬆")])]),s._v(" "),a("p",[a("code",[s._v("BUILD_DIR")]),s._v("  写 "),a("strong",[s._v("build 后的 dist 文件的输出目录")]),s._v("，不是 "),a("code",[s._v(".vuepress/dist/")]),s._v("  也不是 "),a("code",[s._v("blog/.vuepress/dist/")]),s._v(" , 平时用的 dist 在哪填哪就行")]),s._v(" "),a("p",[s._v("输出目录写错的话预览就会出现问题，脚本命令写错的话 action 就会执行失败（根据报错进行修改 yml 文件即可）")]),s._v(" "),a("p",[s._v("例如我的 package.json 里的脚本命令是这样写的")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("...................\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n......................\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("那么最后的 yml 配置就是")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TARGET_REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fengwei2002/fengwei2002.github.io\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TARGET_BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_SCRIPT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn && yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("也要根据自己的 deploy.sh 进行调整，三个文件脚本统一就行")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'feng-w.cn' > CNAME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yarn run deploy'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:fengwei2002/fengwei2002.github.io.git master\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("过程中可以跳转到仓库的 Action 页面查看日志，报错进行修改就好了和命令行一样样的")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"2021-02-02-17-05-05","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2021-02-02-17-05-05.png",loading:"lazy"}})]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"2021-02-02-17-41-36","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2021-02-02-17-41-36.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("推送即部署就完成啦～")]),s._v(" "),a("h2",{attrs:{id:"github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[s._v("#")]),s._v(" GitHub Actions")]),s._v(" "),a("p",[s._v("鉴于上面提到的三个 action 统一 repo 的存在一些小瑕疵可以自己搜寻 action 或者自己写")]),s._v(" "),a("p",[s._v("有特殊需求想自己添加 workflow:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.github.com/cn/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档：https://docs.github.com/cn/actions"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("以及路人写的 action 教程")])]),s._v(" "),a("p",[s._v("想找 action:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("awesome-actions"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/actions"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("https://github.com/marketplace?type=actions")])]),s._v(" "),a("p",[s._v("然后就是要利用好搜索引擎了。"),a("br"),s._v("\n实在找不到就得自己写 action 了，不过实际使用中可以偷懒的想法基本都有程序员实现过，拿来用就行")])])}),[],!1,null,null,null);t.default=n.exports}}]);