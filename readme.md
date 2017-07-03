##这个例子主要利用node和express简单模拟一下服务器
####实现了异步调整的例子
>其中node_modules目录用来下载express，后续还会加入bodypaser的支持，来模拟虚拟报文  

1.主要目录是server下的index.js  
在webstorm中view菜单>>Toolbar显示debug按钮，下拉选择Edit Configration
填写node interpreter,working directory,javascript file即可增加断点调试。  
2.页面上有个按钮，发送了两个ajax请求，通过控制server目录下index的返回时间来控制是否异步