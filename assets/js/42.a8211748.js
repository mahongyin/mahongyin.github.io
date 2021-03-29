(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{522:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("VScode 使用 markdown-formatter 插件")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"162P01455-7.jpg","data-src":"https://raw.githubusercontent.com/fengwei2002/picture/master/fengwei2002/picture162P01455-7.jpg",loading:"lazy"}})]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("今天发现了这个超级方便的插件，有好多好多使 markdown 变美观的功能")]),s._v(" "),a("blockquote",[a("p",[s._v("这是个提高 markdown 写作效率的工具，不仅为 markdown 使用者提供了相对统一的格式，并且提供了一些快捷功能。"),a("br"),s._v("\n然后这个插件因为功能都是自定义的，所以不能安装完成后直接使用，需要在 setting.json 里面进行个性化的配置 然鹅我看了 "),a("a",{attrs:{href:"https://github.com/sumnow/markdown-formatter/blob/master/README_CN.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1),s._v(" 还是没弄好；一直报错")])]),s._v(" "),a("p",[s._v("然后不小心 CTRL C 把 setting.json 全删了，还不能恢复，"),a("br"),s._v("\n 我就直接全部卸载了 vscode "),a("a",{attrs:{href:"https://blog.csdn.net/jpch89/article/details/89789247",target:"_blank",rel:"noopener noreferrer"}},[s._v("重装"),a("OutboundLink")],1),s._v(" 了一遍，正好插件 40 + 特别乱，删了后重新弄一遍就简洁了许多")]),s._v(" "),a("p",[s._v("但每天不明不白的用 VSCODE；属实不爽；所以想着解析一下 vscode 的构造和 setting.json 的具体中文使用方法")]),s._v(" "),a("h3",{attrs:{id:"markdown-formatter-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-formatter-的使用"}},[s._v("#")]),s._v(" markdown_formatter 的使用")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// settings.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// markdown-formatter conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 按照 js 格式化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"markdownFormatter.codeAreaToBlock"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不格式化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"markdownFormatter.codeAreaToBlock"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动格式化标点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"markdownFormatter.fullWidthTurnHalfWidth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 中文标点格式化为英文")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"markdownFormatter.fullWidthTurnHalfWidth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",:；!“”‘’（）？。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"markdownFormatter.formatOpt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"indent_size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"[markdown]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动保存")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.formatOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示空格")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.renderWhitespace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 快速补全")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.quickSuggestions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"other"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"comments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// snippet 提示优先")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.snippetSuggestions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.tabCompletion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 enter 接受提示")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.acceptSuggestionOnEnter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认格式化工具为本工具")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mervin.markdown-formatter"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("将以上文本复制在安装该插件并且重启 vsc 后的 setting.json 中会报错:  "),a("code",[s._v("End of file expected.jsonc(0)")]),s._v("  导致配置失败")]),s._v(" "),a("p",[s._v("然后我鼠标右键后发现有个格式化文档选项（formatter 的一个小功能）"),a("br"),s._v("\nvscode 让我把错误 setting 删除后它自己进行写入操作 然后出现弹窗格式化成功 （在 markdown in one 和 formatter 之间进行选择）")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"todo-tree.tree.showScanModeButton"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"todo-tree.highlights.enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"workbench.colorTheme"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Atom One Dark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("发现代码块的变化:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"todo-tree.tree.showScanModeButton"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"todo-tree.highlights.enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"workbench.colorTheme"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Atom One Dark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"[markdown]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mervin.markdown-formatter"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我猜测配置项要按照先后顺序排列且都在同一个大括号内完成相关配置；所以我试了一下:")]),s._v(" "),a("ul",[a("li",[s._v("仿照系统自动生成的做法；将官方示例配置复制到自动添加的对应位置；然后将重复部分")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"[markdown]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mervin.markdown-formatter"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("删除即可")]),s._v(" "),a("p",[s._v("没有报错，NOW 重启一次 vscode")]),s._v(" "),a("p",[s._v("现在使用  "),a("code",[s._v("shift + alt + F")]),s._v("  就可以快速格式化 markdown 文本了 而使用 markdown 编写时也发现出现了智能提示；优化了书写体验")]),s._v(" "),a("p",[s._v("发现应用成功 (　获得神器 QAQ　)")]),s._v(" "),a("blockquote",[a("p",[s._v("但我重装 vscode 导致 picgo 插件失效，所以又安装了一遍 picgo...")])]),s._v(" "),a("p",[s._v("现在就可以愉快的使用了～")]),s._v(" "),a("ul",[a("li",[s._v("插入图片：键入 img")]),s._v(" "),a("li",[s._v("插入表格：键入 tab")]),s._v(" "),a("li",[s._v("插入代码：键入 js , html , css , python , go , java , or code")]),s._v(" "),a("li",[s._v("插入列表：键入 ul （unordered list）")])]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("*")]),s._v(" 大标题\n    "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 中标题\n        "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 小标题\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("使用这种排版来区分大中小标题")]),s._v(" "),a("p",[s._v("具体功能块参见上文给出的官方文档")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("具体功能按照自己的需求添加")])])}),[],!1,null,null,null);t.default=r.exports}}]);