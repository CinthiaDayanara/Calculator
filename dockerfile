# Usa una imagen base ligera de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos de la aplicación al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la app
EXPOSE 80
