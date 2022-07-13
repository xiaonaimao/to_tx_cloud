### 学习github的actions如何使用

目前这个仓库可以通过github的action自动推送到腾讯云服务器

1. 在根目录新建.github/workflows文件夹
2. 在文件夹里新建一个actions，以.yml为后缀的文件，填入需要做的内容，具体做了什么看文件里的注释
3. 在仓库页面settings=>security=>actions=>new repository secret新建存储库机密，分别保存了服务器对应的私钥和公网ip地址
4. 根据actions文件to_tx_cloud里面写的，推送到特定分支触发

> 实际试验可以推送到腾讯云服务器，但是每次都会接收到腾讯云的短信警告，提示有未知的美国IP登录，所以这个方法暂时不会再使用
目前我最新的推送到服务器方法是：在服务器里安装git，并建立一个裸仓库，本地电脑强制推送到这个仓库
