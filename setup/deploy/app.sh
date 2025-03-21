if [ "$EUID" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами суперпользователя (sudo)." >&2
  exit 1
fi


set -e


USER=webmaster
APP=boilerplate
DOMAIN=$APP.web-app.click


systemctl stop $APP

source ./setup/database/migrate.sh

sudo -iu $USER npm --prefix /srv/$APP run deploy

echo "Развертывание завершено."
echo "Запускаю сервис..."
systemctl start $APP.service
echo "Приложение $APP запущено!"
