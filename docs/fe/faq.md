# FAQ

#### 1. Less 只引入样式文件中需要使用的类

使用 `@import (reference)` 引用外部的 less 文件, 除了被用到的文件样式其他部分不会被编译到目标文件

#### 2. vscode 终端执行命令显示无法加载文件（PowerShell没有权限）

因为在此系统上禁止运行脚本，以管理员身份打开`vscode`后按顺序执行以下命令

```bash
# 查询Powershell详细策略，此时会显示：Restricted（默认的设置， 不允许任何脚本运行）
$ get-ExecutionPolicy

# 更新Powershell策略
$ set-ExecutionPolicy RemoteSigned  

# 查询Powershell详细策略，显示：RemoteSigned（运行本地的脚本不需要数字签名）
$ get-ExecutionPolicy               
```
Powershell脚本5种执行权限：  
&emsp;1. Restricted：默认的设置， 不允许任何脚本运行  
&emsp;2. AllSigned：只能运行经过数字证书签名的脚本  
&emsp;3. RemoteSigned：运行本地的脚本不需要数字签名，但是运行从网络上下载的脚本就必须要有数字签名  
&emsp;4. Unrestricted：允许所有的脚本运行  
&emsp;5. Undefined：在Windows10下这是默认的值，表示未设置任何执行权限。这个值一般是用来删除执行策略的