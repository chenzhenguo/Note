(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{321:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker下zookeeper的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker下zookeeper的使用"}},[t._v("#")]),t._v(" Docker下ZooKeeper的使用")]),t._v(" "),a("p",[t._v("Docker下ZooKeeper的使用")]),t._v(" "),a("h2",{attrs:{id:"_1-单机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-单机"}},[t._v("#")]),t._v(" 1. 单机")]),t._v(" "),a("p",[t._v("不多说，命令 "),a("code",[t._v("docker pull zookeeper:latest")]),t._v(" 下载镜像先")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker pull zookeeper:latest                                                                                  latest: Pulling from library/zookeeper\n000eee12ec04: Pull complete\n2f1dc2bdcfe1: Pull complete\nc2a806caa98c: Pull complete\n89a5b0238e61: Pull complete\nc466c1675a7f: Pull complete\n4241cb045c41: Pull complete\n00705bdbb29e: Pull complete\n46650ba881a5: Pull complete\nDigest: sha256:859cd2d39b1502210ed9640d3c2bd698ea699a28ce1c5de4f3e5c82a826d1afc\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" zookeeper:latest\ndocker.io/library/zookeeper:latest\nPS C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("下载完成启动 "),a("code",[t._v("docker run --name zk -p 2181:2181 zookeeper")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker images\nREPOSITORY                TAG                               IMAGE ID            CREATED             SIZE\nzookeeper                 latest                            611ffeaf5959        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" weeks ago         224MB\ntomcat                    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.5")]),t._v(".43-jdk8-adoptopenjdk-openj9   689bdcef64fe        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" months ago        339MB\nelasticsearch             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.3")]),t._v(".0                             bdaab402b220        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" months ago        806MB\nelasticsearch             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1                             1e8add8d7b66        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" months ago        862MB\napache/dubbo-admin        latest                            af2357c7df7e        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" months ago        489MB\nmobz/elasticsearch-head   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("                                 b19a5c98e43b        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" years ago         824MB\nPS C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker run --name zk -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(":2181 zookeeper\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-23 08:26:51,337 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:QuorumPeerConfig@133"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Reading configuration from: /conf/zoo.cfg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动日志忽略")]),t._v("\n")])])]),a("p",[t._v("这样就启动成功了")]),t._v(" "),a("h2",{attrs:{id:"_2-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-集群"}},[t._v("#")]),t._v(" 2. 集群")]),t._v(" "),a("p",[t._v("因为一个一个地启动 Zookeeper 太麻烦了，所以为了方便起见，直接使用 Docker Compose 来启动 Zookeeper 集群。首先创建一个名为 docker-compose.yml 的文件，其内容如下")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zk1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dockerfile使用build(.表示当前目录)，image使用现成的镜像")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build: .")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zk1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2181:2181"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=zk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181 server.2=zk2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181 server.3=zk3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zk2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zk2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2182:2181"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=zk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181 server.2=zk2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181 server.3=zk3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zk3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zk3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2183:2181"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=zk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181 server.2=zk2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181 server.3=zk3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888;2181\n")])])]),a("p",[t._v("这个配置文件会告诉 Docker 分别运行三个 Zookeeper 镜像，并分别将本地的 2181，2182，2183 端口绑定到对应的容器的 2181 端口上")]),t._v(" "),a("p",[t._v("ZOO_MY_ID 和 ZOO_SERVERS 是搭建 Zookeeper 集群需要设置的两个环境变量，其中 ZOO_MY_ID 表示 ZK 服务的 Id，它是 1-255 之间的整数，必须在集群中唯一，ZOO_SERVERS 是 Zookeeper 集群的主机列表")]),t._v(" "),a("h3",{attrs:{id:"_2-1-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-启动"}},[t._v("#")]),t._v(" 2.1. 启动")]),t._v(" "),a("p",[t._v("然后我们使用 Docker Compose 命令执行这个文件，切换到这个文件所在目录执行 "),a("code",[t._v("docker-compose config")]),t._v(" 检测语法是否错误")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker-compose config\nservices:\n  zk1:\n    container_name: zk1\n    environment:\n      ZOO_MY_ID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      ZOO_SERVERS: server.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk1:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(" server.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk2:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(" server.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk3:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n    image: zookeeper\n    ports:\n    - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(":2181/tcp\n    restart: always\n  zk2:\n    container_name: zk2\n    environment:\n      ZOO_MY_ID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n      ZOO_SERVERS: server.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk1:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(" server.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk2:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(" server.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk3:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n    image: zookeeper\n    ports:\n    - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2182")]),t._v(":2181/tcp\n    restart: always\n  zk3:\n    container_name: zk3\n    environment:\n      ZOO_MY_ID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n      ZOO_SERVERS: server.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk1:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(" server.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk2:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(" server.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk3:2888:3888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n    image: zookeeper\n    ports:\n    - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2183")]),t._v(":2181/tcp\n    restart: always\nversion: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.2'")]),t._v("\n\nPS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   \n")])])]),a("p",[t._v("执行 "),a("code",[t._v("docker-compose up")]),t._v(" 启动，"),a("code",[t._v("docker-compose up -d")]),t._v(" 加 -d 表示后台执行，"),a("code",[t._v("docker-compose logs")]),t._v(" 查看执行日志，"),a("code",[t._v("docker-compose stop")]),t._v(" 停止")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker-compose up -d\nCreating zk2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating zk1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating zk3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nPS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   \n")])])]),a("p",[t._v("这样就启动了")]),t._v(" "),a("h3",{attrs:{id:"_2-2-查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查看"}},[t._v("#")]),t._v(" 2.2. 查看")]),t._v(" "),a("p",[t._v("打开 zkCli.cmd，输入命令 "),a("code",[t._v("config")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" config\nserver.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk1:2888:3888:participant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:2181\nserver.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk2:2888:3888:participant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:2181\nserver.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zk3:2888:3888:participant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:2181\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("我们还可以进入容器，查看下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it zk1 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\nroot@702f0d18b95b:/apache-zookeeper-3.5.6-bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\nLICENSE.txt  NOTICE.txt  README.md  README_packaging.txt  bin  conf  docs  lib\nroot@702f0d18b95b:/apache-zookeeper-3.5.6-bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd bin")]),t._v("\nroot@702f0d18b95b:/apache-zookeeper-3.5.6-bin/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\nREADME.txt    zkCli.cmd  zkEnv.cmd  zkServer-initialize.sh  zkServer.sh          zkTxnLogToolkit.sh\nzkCleanup.sh  zkCli.sh   zkEnv.sh   zkServer.cmd            zkTxnLogToolkit.cmd\nroot@702f0d18b95b:/apache-zookeeper-3.5.6-bin/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nClient port found: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(". Client address: localhost.\nMode: follower\nroot@702f0d18b95b:/apache-zookeeper-3.5.6-bin/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it zk2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\nroot@8b08e0797f8a:/apache-zookeeper-3.5.6-bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\nLICENSE.txt  NOTICE.txt  README.md  README_packaging.txt  bin  conf  docs  lib\nroot@8b08e0797f8a:/apache-zookeeper-3.5.6-bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd bin")]),t._v("\nroot@8b08e0797f8a:/apache-zookeeper-3.5.6-bin/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nClient port found: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(". Client address: localhost.\nMode: follower\nroot@8b08e0797f8a:/apache-zookeeper-3.5.6-bin/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\nPS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it zk3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\nroot@d88339ffcca2:/apache-zookeeper-3.5.6-bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\nLICENSE.txt  NOTICE.txt  README.md  README_packaging.txt  bin  conf  docs  lib\nroot@d88339ffcca2:/apache-zookeeper-3.5.6-bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd bin")]),t._v("\nroot@d88339ffcca2:/apache-zookeeper-3.5.6-bin/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nClient port found: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v(". Client address: localhost.\nMode: leader\nroot@d88339ffcca2:/apache-zookeeper-3.5.6-bin/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\nPS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   \n")])])]),a("p",[t._v("可以看到两个 "),a("code",[t._v("follower")]),t._v("，一个 "),a("code",[t._v("leader")]),t._v("，最后停止")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker-compose stop\nStopping zk3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nStopping zk2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nStopping zk1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nPS D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])]),a("p",[a("strong",[t._v("参考")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000006907443",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Docker 一步搞定 ZooKeeper 集群的搭建"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/63676c8dbda3",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker zookeeper集群"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);