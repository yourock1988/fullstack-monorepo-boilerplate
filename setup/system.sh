#!/usr/bin/env bash


# 1. Установка snapd
apt-get update
apt-get install -y snapd

# 2. Установка certbot
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot || true

# 3. Установка nginx
apt update
apt install nginx



groupadd webmasters

useradd -m -s /bin/bash owner
useradd -m -s /bin/bash invoker

usermod -aG webmasters owner
usermod -aG webmasters invoker

echo "Перезагрузка конфигурации systemd..."
systemctl daemon-reload
echo "Включение сервиса для автозапуска..."
systemctl enable boilerplate.service
echo "Развертывание завершено."
echo "Запускаю сервис..."
systemctl start boilerplate.service
echo "boilerplate.service запущен."
