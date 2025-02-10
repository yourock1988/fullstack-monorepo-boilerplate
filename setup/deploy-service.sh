#!/bin/bash

# Проверка, запущен ли скрипт от имени root
if [ "$EUID" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами суперпользователя (sudo)." >&2
  exit 1
fi

# Указываем путь к unit-файлу в репозитории и куда его копировать
SERVICE_FILE_FROM="./boilerplate.service"
SERVICE_FILE_TO="/etc/systemd/system/boilerplate.service"

echo "Копирование $SERVICE_FILE_FROM в $SERVICE_FILE_TO..."
cp "$SERVICE_FILE_FROM" "$SERVICE_FILE_TO"
if [ $? -ne 0 ]; then
  echo "Ошибка: не удалось скопировать service-файл." >&2
  exit 1
fi

