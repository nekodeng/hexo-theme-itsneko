<div class="note info">前言：本文是关于itsNeko开源博客食用方法详解，感谢使用本开源博客。时间过的好快，还好我都记录下来了。</div>

### itsNeko开源介绍
- 基于
itsNeko开源博客是基于Hexo博客Matery主题魔改，感谢各位对本博客的喜爱与支持。
- 作者
Hello，itsNeko，我是本博客的作者，itsNeko博主博客: <a href="https://dyfa.top/" target="_blank">itsNeko博客~</a>
- 赞赏
如果你觉得本开源博客还可以，欢迎大家的赞赏，赞赏二维码见页面：<a href="https://dyfa.top/donate/" target="_blank">赞赏itsNeko开源博主~</a>
- 提示
本博客为纯静态，无数据库，文章使用markdown格式，图片存在json里面，整体打包上传至服务器即可。
- 建议
最好懂一点编程知识，建议使用VsCode，善于使用<code>“ ctrl+F ”</code>快捷键定位然后修改自定义内容。

### 源码下载及命令
- 本开源博客源码已公开在在博主的GitHub仓库，国内也可使用Gitee，希望得到各位的<code>小星星，Star</code>。
- GitHub仓库：<a href="" target="_blank">itsNeko开源博客源码GitHub地址</a>
- Gitee仓库：<a href="" target="_blank">itsNeko开源博客源码Gitee地址</a>

- 首先，新建一个文件夹名为“ <code>nekoblog</code> ”，在该文件夹下打开git bash，执行命令行

```
git clone 仓库地址
```

- 将下载的整个文件夹在VsCode中打开，在终端中依次执行以下命令行

```
npm install
hexo init
hexo g
hexo s
```

- 然后在浏览器中，打开“ http://localhost:4000/ ”，即可实时预览网站，再依次修改网站内容。

注意：依次执行完上述4条命令后，若遇到报错极大概率是npm install的问题，也可能是网络问题，建议删除整个“ node_modules ”文件夹，然后重新执行上述命令行。

### 各页面配置详解
#### 首页
##### 1、网站标题描述等
在<code>/nekoblog/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ Site ”</code>，然后自行修改内容。
##### 2、logo图片与logo字体
- logo图片: 
在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 配置网站favicon和网站LOGO ”</code>，然后自行修改图片并注意图片格式（此处建议图片大小为180*116最佳）。
- logo字体: 
在<code>/themes/layout/_partial/header.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ itsNeko-openSource-Blog ”</code>，然后自行修改大屏幕和小屏幕下logo字体（此处建议小屏下字体数目不宜过多）。 

##### 3、banner图上打字效果字体
在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ sub1 ”</code>，然后自行修改。

##### 4、《质数的孤独》内容部分
在<code>/themes/layout/_widget/dream.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 《质数的孤独》 ”</code>，然后自行修改标题和内容。

##### 5、公告栏作者等内容部分
在<code>/themes/layout/index.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 公告文字栏开始 ”</code>，然后自行修改内容。

##### 6、footer内容部分
在<code>/themes/layout/_partial/footer.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 版权信息 ”</code>，然后自行修改各类内容；此处还要在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ socialLink ”</code>，然后自行修改。

#### 关于
##### 1、配置个人信息
在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ profile ”</code>，然后自行修改头像、职业和个人介绍。

##### 2、个人介绍内容
在<code>/themes/layout/about.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 关于我哦 ”</code>，然后自行个人介绍介绍。

#### 相册
##### 1、页面介绍
在<code>/themes/layout/galley.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ itsNeko开源博客相册 ”</code>，然后自行修改此内容。
##### 2、相册数据
相册是存在json里面的，在<code>/nekoblog/source/_data/galley.json</code>文件中。一个相册就是在一个{}对象内的json数据。
##### 3、新建一个相册流程
- 首先，找到<code>/nekoblog/source/galley</code>文件夹。
- 复制已存在的“ itsNeko博主的绘画作品 ”文件夹，并取名。
- 打开新取名文件夹下的index.md文件，然后修改title字段必须与新取名文件夹名称相同，否则运行报错。
- 然后，在<code>/nekoblog/source/_data/galley.json</code>文件中，复制已存在的{}对象内的json数据，与第一段并以逗号区隔，然后修改新相册的各类内容。并注意：<code>name，url_name，album内的title这三个字段内容必须与新取名文件夹名称相同，否则运行报错。</code>

#### 链接
##### 增加友情链接
- 友链信息是存储在<code>/nekoblog/source/_data/friends.json</code>文件中，一个友链就是在一个{}对象内的json数据，自行增添。

##### 增加网址收藏
- 网址收藏信息是存储在<code>/nekoblog/source/_data/collection.json</code>文件中，一个网址信息就是在一个{}对象内的json数据，自行增添。

#### 其余
其余页面自定义修改的内容不多，或者没必要修改，这里给出其余页面的对应文件，可自行根据需要定位到对应页面文件中进行修改。
- <code>书单 -> /themes/layout/books.ejs</code>
- <code>留言板 -> /themes/layout/contact.ejs</code>
- <code>实战项目 -> /themes/layout/project.ejs</code>
- <code>博客打赏记录 -> /themes/layout/donate.ejs</code>
- <code>ticktack -> /themes/layout/ticktack.ejs</code>
- <code>实战项目 -> /themes/layout/project.ejs</code>
- <code>vlog -> /themes/layout/videos.ejs</code>
使用“ ctrl+F ”快捷键定位到<code>“ src="//player.bilibili ”</code>，然后自行修改两个视频的src，建议使用B站的外链。
- <code>music -> /themes/layout/musics.ejs</code>
使用“ ctrl+F ”快捷键定位到<code>“ id=" ”</code>，然后自行修改两个歌单的id，建议使用网易云和QQ音乐的外链。
- <code>urls.txt -> /nekoblog/urls.txt</code>将内容替换成自己网站的url地址即可。
- <code>网站2个_config.yml文件 -> 主要是网站的总体配置，自行打开两个文件然后只修改里面的包含个人信息的部分，其余不动。</code>

### 撰写第一篇文章
- 修改完个人信息后，你便可以撰写属于你的第一篇文章啦。
- 文章采用markdown语法，所有文章存储在<code>/nekoblog/source/_posts</code>文件夹中。
- 这里我已给出常用的两类文章模板，可直接复制粘贴然后（修改文章名，链接后缀建议用英文，标签建议只用一个，分类，时间，以及文章banner图片）形成新的文章。

### 怎样开通评论
- 本开源博客使用valine评论，环境以及搭好，只需填写valine配置数据即可。
- 自行根据网上教程得到配置数据，关键词 “ Hexo 博客添加 Valine 评论系统 ”，教程之一：<a href="https://www.zhyong.cn/posts/95cb/" target="_blank">Hexo 博客添加 Valine 评论系统</a>
- 注意：本开源博客中已经搭好了环境，<code>比如valine.min.js，valine.ejs等文件已经存在，不用再根据教程添加这些文件</code>，只需根据教程步骤配置其余，然后获取到 APP ID 和 APP KEY。
- 然后，将获取到的 APP ID 和 APP KEY，在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ valine ”</code>，然后自行修改appId，appKey值即可。
- 多说一句，若最后评论功能总是报错，不知道怎么弄，那么建议一切根据外链教程（这个不行，换个完整版教程）操作，可替换本博客已经存在的环境文件，<code>学会自己独立使用浏览器解决问题</code>。

### 网站怎样上线
- <code>免费版 使用gitee免费托管</code>
关键词，“ Hexo部署到Gitee ”，随机教程：<a href="https://blog.csdn.net/qq_38157825/article/details/112783631" target="_blank">Hexo 部署到 Gitee</a>

- <code>收费版 自行购买域名服务器</code>
关键词，“ Hexo部署到自己服务器 ”

### 七零八碎补充
可自行根据需要定位到对应文件中进行修改。
- <code>赞赏二维码图片 -> /themes/source/medias/reward</code>

- <code>鼠标左键点击文字 -> /themes/source/js/click_show_text.js</code>

- <code>网站标题栏和footer栏背景颜色 -> /themes/source/css/matery.css</code>
在该文件中使用“ ctrl+F ”快捷键定位到<code>“ 网站标题栏和footer栏背景颜色 ”</code>，然后自行修改颜色。

- <code>各大页面banner图 -> 若你不想使用默认图片，将以下代码复制到对应页面ejs文件中并修改图片链接即可。


    <style>
      /* banner背景图 */
      .bg-cover {
          background-image: url("图片链接地址")!important;
      }
    </style>


### 怎样联系itsNeko
- 留言：itsNeko博客地址:<a href="https://dyfa.top/" target="_blank">itsNeko博客~</a>
- 邮箱：nekodeng@qq.com
=======
前言：本文是关于itsNeko开源博客食用方法详解，感谢使用本开源博客。时间过的好快，还好我都记录下来了。

### itsNeko开源介绍
- 基于
itsNeko开源博客是基于Hexo博客Matery主题魔改，感谢各位对本博客的喜爱与支持。
- 作者
Hello，itsNeko，我是本博客的作者，itsNeko博主博客: <a href="https://dyfa.top/" target="_blank">itsNeko博客~</a>
- 赞赏
如果你觉得本开源博客还可以，欢迎大家的赞赏，赞赏二维码见页面：<a href="https://dyfa.top/donate/" target="_blank">赞赏itsNeko开源博主~</a>
- 提示
本博客为纯静态，无数据库，文章使用markdown格式，图片存在json里面，整体打包上传至服务器即可。
- 建议
最好懂一点编程知识，建议使用VsCode，善于使用<code>“ ctrl+F ”</code>快捷键定位然后修改自定义内容。

### 源码下载及命令
- 本开源博客源码已公开在在博主的GitHub仓库，国内也可使用Gitee，希望得到各位的<code>小星星，Star</code>。
- GitHub仓库：<a href="https://github.com/nekodeng/hexo-theme-itsneko" target="_blank">itsNeko开源博客源码GitHub地址</a>
- Gitee仓库：<a href="https://gitee.com/nekodeng/hexo-theme-itsneko" target="_blank">itsNeko开源博客源码Gitee地址</a>

- 首先，新建一个文件夹名为“ <code>nekoblog</code> ”，在该文件夹下打开git bash，执行命令行

```
git clone 仓库地址
```

- 将下载的整个文件夹在VsCode中打开，在终端中依次执行以下命令行

```
npm install
hexo init
hexo g
hexo s
```

- 然后在浏览器中，打开“ http://localhost:4000/ ”，即可实时预览网站，再依次修改网站内容。

注意：依次执行完上述4条命令后，若遇到报错极大概率是npm install的问题，也可能是网络问题，建议删除整个“ node_modules ”文件夹，然后重新执行上述命令行。

### 各页面配置详解
#### 首页
##### 1、网站标题描述等
在<code>/nekoblog/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ Site ”</code>，然后自行修改内容。
##### 2、logo图片与logo字体
- logo图片: 
在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 配置网站favicon和网站LOGO ”</code>，然后自行修改图片并注意图片格式（此处建议图片大小为180*116最佳）。
- logo字体: 
在<code>/themes/layout/_partial/header.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ itsNeko-openSource-Blog ”</code>，然后自行修改大屏幕和小屏幕下logo字体（此处建议小屏下字体数目不宜过多）。 

##### 3、banner图上打字效果字体
在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ sub1 ”</code>，然后自行修改。

##### 4、《质数的孤独》内容部分
在<code>/themes/layout/_widget/dream.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 《质数的孤独》 ”</code>，然后自行修改标题和内容。

##### 5、公告栏作者等内容部分
在<code>/themes/layout/index.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 公告文字栏开始 ”</code>，然后自行修改内容。

##### 6、footer内容部分
在<code>/themes/layout/_partial/footer.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 版权信息 ”</code>，然后自行修改各类内容；此处还要在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ socialLink ”</code>，然后自行修改。

#### 关于
##### 1、配置个人信息
在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ profile ”</code>，然后自行修改头像、职业和个人介绍。

##### 2、个人介绍内容
在<code>/themes/layout/about.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ 关于我哦 ”</code>，然后自行个人介绍介绍。

#### 相册
##### 1、页面介绍
在<code>/themes/layout/galley.ejs</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ itsNeko开源博客相册 ”</code>，然后自行修改此内容。
##### 2、相册数据
相册是存在json里面的，在<code>/nekoblog/source/_data/galley.json</code>文件中。一个相册就是在一个{}对象内的json数据。
##### 3、新建一个相册流程
- 首先，找到<code>/nekoblog/source/galley</code>文件夹。
- 复制已存在的“ itsNeko博主的绘画作品 ”文件夹，并取名。
- 打开新取名文件夹下的index.md文件，然后修改title字段必须与新取名文件夹名称相同，否则运行报错。
- 然后，在<code>/nekoblog/source/_data/galley.json</code>文件中，复制已存在的{}对象内的json数据，与第一段并以逗号区隔，然后修改新相册的各类内容。并注意：<code>name，url_name，album内的title这三个字段内容必须与新取名文件夹名称相同，否则运行报错。</code>

#### 链接
##### 增加友情链接
- 友链信息是存储在<code>/nekoblog/source/_data/friends.json</code>文件中，一个友链就是在一个{}对象内的json数据，自行增添。

##### 增加网址收藏
- 网址收藏信息是存储在<code>/nekoblog/source/_data/collection.json</code>文件中，一个网址信息就是在一个{}对象内的json数据，自行增添。

#### 其余
其余页面自定义修改的内容不多，或者没必要修改，这里给出其余页面的对应文件，可自行根据需要定位到对应页面文件中进行修改。
- <code>书单 -> /themes/layout/books.ejs</code>
- <code>留言板 -> /themes/layout/contact.ejs</code>
- <code>实战项目 -> /themes/layout/project.ejs</code>
- <code>博客打赏记录 -> /themes/layout/donate.ejs</code>
- <code>ticktack -> /themes/layout/ticktack.ejs</code>
- <code>实战项目 -> /themes/layout/project.ejs</code>
- <code>vlog -> /themes/layout/videos.ejs</code>
使用“ ctrl+F ”快捷键定位到<code>“ src="//player.bilibili ”</code>，然后自行修改两个视频的src，建议使用B站的外链。
- <code>music -> /themes/layout/musics.ejs</code>
使用“ ctrl+F ”快捷键定位到<code>“ id=" ”</code>，然后自行修改两个歌单的id，建议使用网易云和QQ音乐的外链。
- <code>urls.txt -> /nekoblog/urls.txt</code>将内容替换成自己网站的url地址即可。
- <code>网站2个_config.yml文件 -> 主要是网站的总体配置，自行打开两个文件然后只修改里面的包含个人信息的部分，其余不动。</code>

### 撰写第一篇文章
- 修改完个人信息后，你便可以撰写属于你的第一篇文章啦。
- 文章采用markdown语法，所有文章存储在<code>/nekoblog/source/_posts</code>文件夹中。
- 这里我已给出常用的两类文章模板，可直接复制粘贴然后（修改文章名，链接后缀建议用英文，标签建议只用一个，分类，时间，以及文章banner图片）形成新的文章。

### 怎样开通评论
- 本开源博客使用valine评论，环境以及搭好，只需填写valine配置数据即可。
- 自行根据网上教程得到配置数据，关键词 “ Hexo 博客添加 Valine 评论系统 ”，教程之一：<a href="https://www.zhyong.cn/posts/95cb/" target="_blank">Hexo 博客添加 Valine 评论系统</a>
- 注意：本开源博客中已经搭好了环境，<code>比如valine.min.js，valine.ejs等文件已经存在，不用再根据教程添加这些文件</code>，只需根据教程步骤配置其余，然后获取到 APP ID 和 APP KEY。
- 然后，将获取到的 APP ID 和 APP KEY，在<code>/themes/_config.yml</code>文件中，使用“ ctrl+F ”快捷键定位到<code>“ valine ”</code>，然后自行修改appId，appKey值即可。
- 多说一句，若最后评论功能总是报错，不知道怎么弄，那么建议一切根据外链教程（这个不行，换个完整版教程）操作，可替换本博客已经存在的环境文件，<code>学会自己独立使用浏览器解决问题</code>。

### 网站怎样上线
- <code>免费版 使用gitee免费托管</code>
关键词，“ Hexo部署到Gitee ”，随机教程：<a href="https://blog.csdn.net/qq_38157825/article/details/112783631" target="_blank">Hexo 部署到 Gitee</a>

- <code>收费版 自行购买域名服务器</code>
关键词，“ Hexo部署到自己服务器 ”

### 七零八碎补充
可自行根据需要定位到对应文件中进行修改。
- <code>赞赏二维码图片 -> /themes/source/medias/reward</code>

- <code>鼠标左键点击文字 -> /themes/source/js/click_show_text.js</code>

- <code>网站标题栏和footer栏背景颜色 -> /themes/source/css/matery.css</code>
在该文件中使用“ ctrl+F ”快捷键定位到<code>“ 网站标题栏和footer栏背景颜色 ”</code>，然后自行修改颜色。

- <code>各大页面banner图 -> 若你不想使用默认图片，将以下代码复制到对应页面ejs文件中并修改图片链接即可。


```
   /* banner背景图 */
   .bg-cover {
      background-image: url("图片链接地址")!important;
    }
```


### 怎样联系itsNeko
- 留言：itsNeko博客地址:<a href="https://dyfa.top/" target="_blank">itsNeko博客~</a>
- 邮箱：nekodeng@qq.com
>>>>>>> 6576c8929fd357beff1c3cfadded4a9b45374ea1
- QQ: 2018854221
