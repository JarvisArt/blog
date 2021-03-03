# Git命令

#### Git的3层结构

* `working directory(工作区)`：直接编辑文件的地方，肉眼可见直接操作
* `staging index(暂存区)`：数据（快照）暂时存放的地方
* `git directory(版本库)`：存放已经提交的数据

#### Git的3层结构

* `Untracked`：未被追踪
* `Modified`：表示工作区修改了某个文件但是还没有添加到暂存区
* `Staged`：表示把工作区修改的文件添加到了暂存区但是没有提交到版本库
* `Committed`：表表示数据被安全的存储在本地库中

#### 基本命令
```bash
$ git config --global user.name             # 配置Git信息Name

$ git config --global user.email 344990409  # 配置Git信息Email

$ git config --list                         # 查看配置信息列表

$ git status                                # 查看配置信息列表

$ git log                                   # 查看提交历史

$ git add filename                          # 把文件从工作区添加到暂存区

$ git commit -m 'describe'                  # 将暂存区提交本地仓库 

$ git commit -am 'describe'                 # 将工作区提交本地仓库
```

#### 撤销操作
```bash
$ git checkout -- filename                  # 拉取暂存区的文件并将其替工作区的文件

$ git reset HEAD -- filename                # 拉取最近一次提交的版本中的这个文件到暂存区，该操作不影响工作区

$ git reset --hard HEAD                     # 本地改变撤销，变成之前的状态（回退版本）

$ git commit --amend                        # 撤销上一次提交 并将暂存区的文件重新提交
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

$ git stash                                 # 存储工作区内容 ，修改工作区的文件并切换分支的时候

$ git stash list                            # 查看存储列表

$ git stash apply stash@{0}                 # 把存储的内容拉回到工作区

$ git stash drop stash@{0}                  # 删除存储

$ git stash pop stash@{0}                   # 把存储的内容拉回到工作区并删除存储
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
