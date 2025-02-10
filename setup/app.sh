USERNAME="invoker"  # пользователь для Node (можно поменять)
APP_NAME="fullstack-monorepo-boilerplate"
APP_DIR="/home/$USERNAME/web-apps/$APP_NAME"
DOMAIN="boilerplate.web-app.click"

# 1. Получить сертификат через standalone
systemctl stop $APP_NAME || true
certbot certonly --standalone -d $DOMAIN -n --agree-tos -m $USERNAME@$DOMAIN

# 4. Создать systemd unit для Node (если не создан)
cat << EOF |  tee /etc/systemd/system/$APP_NAME.service
[Unit]
Description=My Node.js App
After=network.target

[Service]
User=$USERNAME
WorkingDirectory=$APP_DIR
ExecStart=/usr/bin/npm start
Restart=always
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
EOF

# 5. Запустить сервис
echo "Перезагрузка конфигурации systemd..."
systemctl daemon-reload
echo "Включение сервиса для автозапуска..."
systemctl enable $APP_NAME
echo "Развертывание завершено."
echo "Запускаю сервис..."
systemctl start $APP_NAME
echo "$APP_NAME запущен."
