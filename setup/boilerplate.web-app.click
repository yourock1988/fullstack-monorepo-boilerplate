server {
    listen 80;
    server_name boilerplate.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name boilerplate.web-app.click;

    ssl_certificate     /etc/letsencrypt/live/boilerplate.web-app.click/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/boilerplate.web-app.click/privkey.pem;

    location /assets/ {
        alias /home/postal404/web-apps/fullstack-monorepo-boilerplate/dist/client/assets/;
        add_header Cache-Control "public, max-age=31536000";
        try_files $uri $uri/ =404;
    }

    location / {
        proxy_pass http://127.0.0.1:8801;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
