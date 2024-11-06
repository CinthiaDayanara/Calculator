# Usa la imagen oficial de Nginx desde Docker Hub
FROM nginx:alpine

# Copia todos los archivos de tu proyecto dentro del contenedor Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para que el contenedor sea accesible
EXPOSE 80
