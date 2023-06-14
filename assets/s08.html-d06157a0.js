const l=JSON.parse('{"key":"v-6b9b9770","path":"/slides/slide08/s08.html","title":"Unix Access Control","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Unix Access Control","description":"14-526-topic07, the second part"},"headers":[{"level":2,"title":"访问控制 (Access control)","slug":"访问控制-access-control","link":"#访问控制-access-control","children":[]},{"level":2,"title":"访问控制矩阵模型 (Access matrix model)","slug":"访问控制矩阵模型-access-matrix-model","link":"#访问控制矩阵模型-access-matrix-model","children":[{"level":3,"title":"授权主体(Principal)与主体(subject)","slug":"授权主体-principal-与主体-subject","link":"#授权主体-principal-与主体-subject","children":[]},{"level":3,"title":"客体(object)","slug":"客体-object","link":"#客体-object","children":[]}]},{"level":2,"title":"UNIX访问控制的基本概念：用户(User)、组(Groups)、文件(Files)和进程(Processes)","slug":"unix访问控制的基本概念-用户-user-、组-groups-、文件-files-和进程-processes","link":"#unix访问控制的基本概念-用户-user-、组-groups-、文件-files-和进程-processes","children":[{"level":3,"title":"用户(Users)和授权主体(Principals)","slug":"用户-users-和授权主体-principals","link":"#用户-users-和授权主体-principals","children":[]},{"level":3,"title":"客体的构成","slug":"客体的构成","link":"#客体的构成","children":[]},{"level":3,"title":"UNIX中的inode","slug":"unix中的inode","link":"#unix中的inode","children":[]},{"level":3,"title":"UNIX中的目录","slug":"unix中的目录","link":"#unix中的目录","children":[]},{"level":3,"title":"非目录文件的基本权限位","slug":"非目录文件的基本权限位","link":"#非目录文件的基本权限位","children":[]},{"level":3,"title":"文件的执行","slug":"文件的执行","link":"#文件的执行","children":[]},{"level":3,"title":"目录文件的权限位","slug":"目录文件的权限位","link":"#目录文件的权限位","children":[]},{"level":3,"title":"suid, sgid, sticky位","slug":"suid-sgid-sticky位","link":"#suid-sgid-sticky位","children":[]},{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":3,"title":"三组权限位","slug":"三组权限位","link":"#三组权限位","children":[]},{"level":3,"title":"关于UNIX访问控制中客体的其他问题","slug":"关于unix访问控制中客体的其他问题","link":"#关于unix访问控制中客体的其他问题","children":[]}]},{"level":2,"title":"与访问控制相关的安全原则","slug":"与访问控制相关的安全原则","link":"#与访问控制相关的安全原则","children":[{"level":3,"title":"故障安全原则","slug":"故障安全原则","link":"#故障安全原则","children":[]},{"level":3,"title":"最小权限原则","slug":"最小权限原则","link":"#最小权限原则","children":[]},{"level":3,"title":"完全仲裁原则","slug":"完全仲裁原则","link":"#完全仲裁原则","children":[]}]},{"level":2,"title":"主体(Subjects)与授权主体(Principals)","slug":"主体-subjects-与授权主体-principals","link":"#主体-subjects-与授权主体-principals","children":[]},{"level":2,"title":"现代UNIX系统中的进程用户ID模型(Process User ID Model)","slug":"现代unix系统中的进程用户id模型-process-user-id-model","link":"#现代unix系统中的进程用户id模型-process-user-id-model","children":[{"level":3,"title":"文件的suid(set-user-ID)/sgid(set-group-ID)的重要性","slug":"文件的suid-set-user-id-sgid-set-group-id-的重要性","link":"#文件的suid-set-user-id-sgid-set-group-id-的重要性","children":[]},{"level":3,"title":"带suid(set-user-ID)/sgid(set-group-ID)的程序的安全问题","slug":"带suid-set-user-id-sgid-set-group-id-的程序的安全问题","link":"#带suid-set-user-id-sgid-set-group-id-的程序的安全问题","children":[]}]},{"level":2,"title":"机制(Mechanism)与政策(Policy)","slug":"机制-mechanism-与政策-policy","link":"#机制-mechanism-与政策-policy","children":[{"level":3,"title":"违反“机制，而不是政策”的情况","slug":"违反-机制-而不是政策-的情况","link":"#违反-机制-而不是政策-的情况","children":[]},{"level":3,"title":"违反“机制，而不是政策”的情况，我的观点","slug":"违反-机制-而不是政策-的情况-我的观点","link":"#违反-机制-而不是政策-的情况-我的观点","children":[]},{"level":3,"title":"UNIX访问控制中“机制与政策”的案例研究","slug":"unix访问控制中-机制与政策-的案例研究","link":"#unix访问控制中-机制与政策-的案例研究","children":[]}]},{"level":2,"title":"早期UNIX系统中的访问控制","slug":"早期unix系统中的访问控制","link":"#早期unix系统中的访问控制","children":[{"level":3,"title":"System V分支","slug":"system-v分支","link":"#system-v分支","children":[]},{"level":3,"title":"BSD分支","slug":"bsd分支","link":"#bsd分支","children":[]}]},{"level":2,"title":"现代UNIX系统","slug":"现代unix系统","link":"#现代unix系统","children":[{"level":3,"title":"受到推荐的改良API","slug":"受到推荐的改良api","link":"#受到推荐的改良api","children":[]}]}],"git":{"updatedTime":1686753101000,"contributors":[{"name":"Klee1453","email":"55586323+Klee1453@users.noreply.github.com","commits":7},{"name":"klee1453","email":"55586323+Klee1453@users.noreply.github.com","commits":1}]},"filePathRelative":"slides/slide08/s08.md"}');export{l as data};
