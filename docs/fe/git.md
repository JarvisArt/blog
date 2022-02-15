# Git命令

#### Git版本控制常见的操作流程 
&emsp;1.写代码，此时新增或者更改的代码记录都存放在`工作区`   
&emsp;2.执行 `git add .` 将全部有更改代码的文件从`工作区`添加到`暂存区 `  
&emsp;3.执行 `git commit -m "describe" ` 将`暂存区`提交本地仓库(`版本库`)并生成一个提交记录
&emsp;4.执行 `git log` 查看提交历史记录（包括上一步提交的记录）  
&emsp;5.执行 `git push origin master` 将本地仓库的提交记录推到远程仓库（`origin`）的`master`分支

#### Git的3层结构

* `working directory(工作区)`：直接编辑文件的地方，肉眼可见直接操作
* `staging index(暂存区)`：数据（快照）暂时存放的地方
* `git directory(版本库)`：存放已经提交的数据

#### Git中文件的4种状态

* `Untracked`：未被追踪
* `Modified`：表示工作区修改了某个文件但是还没有添加到暂存区
* `Staged`：表示把工作区修改的文件添加到了暂存区但是没有提交到版本库
* `Committed`：表表示数据被安全的存储在本地库中

#### 基本命令
```bash
$ git config --global user.name "youName"   # 配置Git全局信息Name

$ git config --global user.email "youEmail" # 配置Git全局信息Email

$ git config user.name "youName"            # 配置Git当前仓库信息Name

$ git config user.email "youEmail"          # 配置Git当前仓库信息Email

$ git config --list                         # 查看配置信息列表

$ git init                                  # 初始化本地仓库

$ git status                                # 查看文件更改状态

$ git add filename                          # 把该文件从工作区添加到暂存区

$ git add .                                 # 把全部有更改的文件从工作区添加到暂存区

$ git commit -m "describe"                  # 将暂存区提交本地仓库 

$ git commit -am "describe"                 # 将工作区提交本地仓库

$ git log                                   # 查看提交历史
```

#### 撤销操作
```bash
$ git checkout -- filename                  # 拉取暂存区的文件并将其替工作区的文件

$ git reset HEAD -- filename                # 拉取最近一次提交的版本中的这个文件到暂存区，该操作不影响工作区

$ git reset --hard HEAD                     # 本地改变撤销，变成之前的状态（回退版本）

$ git commit --amend                        # 撤销上一次提交 并将暂存区的文件重新提交
```

#### 存储操作
```bash
$ git stash save "describe"                 # 将本次代码改动存储起来

$ git stash list                            # 查看存储列表

$ git stash show                            # 查看最近一个存储文件的改动，查看某个(num)存储的改动：git stash show stash@{num}

$ git stash show -p                         # 查看第一个存储文件代码的改动，查看某个(num)存储的改动：git stash show stash@{num} -p

$ git stash apply                           # 应用第一个存储，不会从存储列表中删除，应用某个(num)存储：git stash apply stash@{num}

$ git stash pop                             # 应用第一个存储，并从存储列表中删除，应用某个(num)存储：git stash pop stash@{num}

$ git stash drop                            # 删除第一个存储，删除某个(num)存储：git stash drop stash@{num}

$ git stash clear                           # 删除存储列表的所有存储
```

#### 文件的删除
```bash
$ git rm --cached filename                  # 拉删除暂存区里的文件，该操作不影响工作区

$ git rm -f filename                        # 删除暂存区与工作区的文件

$ git mv filename newfilename               # 修改文件名称
```

#### 分支
```bash
$ git branch                                # 查看分支

$ git branch branchname                     # 创建分支

$ git checkout branchname                   # 切换分支

$ git branch -d branchname                  # 删除分支

$ git branch -m oldname newname             # 修改分支名

$ git checkout -b dev                       # 创建并切换到该分支

$ git merge dev                             # 合并分支

$ git diff                                  # 比较工作区与暂存区的差异

$ git diff -staged                          # 比较暂存区与版本库的文件差异

$ git diff commit_id commit_id              # 比较两个不同历史版本的差异	

$ git diff branchname                       # 比较当前分支与branchname分支的差异

$ git cherry-pick HEAD                      # 将另一个分支某个commit(HEAD)转移到当前分支
```

#### help文档介绍
```bash
$ touch .gitignore                          # 创建.gitignore文件添加不被追踪的文件名

$ git help add                              # 查找add帮助手册
```

#### 远程仓库的搭建project
```bash
# 将本地上传到GitHub仓库
$ git push https://github.com/JarvisArt/Test.git master		

# 生产SHH公钥
$ git ssh-keygen

# 将GitHub仓库下载到本地
$ git pull git@github.com:JarvisArt/Test.git master

# 关联远程仓库
$ git remote add github https://github.com/JarvisArt/Test.git

# 查看关联的远程仓库的详情信息
$ git remote -v

# 将本地内容上传到服务器
$ git push ssh://roo@182.61.20.102/var/git/project.git master	
```

#### 其他
```bash
# 关闭文件名称忽略大小写
$ git config core.ignorecase false

# 拉取远程分支到本地
$ git fetch origin branchname
$ git checkout -b branchname origin/branchname
```
