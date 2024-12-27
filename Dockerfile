# 1. Используем официальный образ Node.js для сборки приложения
FROM node:16 AS build

# 2. Устанавливаем рабочую директорию в папку с React-приложением
WORKDIR /app

# 3. Копируем package.json и устанавливаем зависимости
COPY react-app/package*.json ./
RUN npm install

# 4. Копируем все файлы из папки с React-приложением и собираем проект
COPY react-app/ ./
RUN npm run build

# 5. Используем официальный образ Nginx для запуска статического контента
FROM nginx:alpine

# 6. Копируем сгенерированные файлы из первого контейнера в Nginx
COPY --from=build /app/build /usr/share/nginx/html

# 7. Открываем порт 80
EXPOSE 80

# 8. Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
