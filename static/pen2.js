




    
    

    

    
    mkdir -p /home/nginx/html /home/nginx/logs /home/nginx/conf

    docker cp {id}:/etc/nginx/nginx.conf /home/nginx/conf

    docker run -d -p 80:80 --name nginx-web -v /home/nginx/html:/usr/share/nginx/html -v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /home/nginx/logs:/var/log/nginx nginx

    

    

    

    数据字典、多种动态换肤、多环境发布、导入导出日志











    

    
  
