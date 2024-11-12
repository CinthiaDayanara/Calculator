# Usar Node.js como imagen base
FROM node:alpine

# Instalar http-server globalmente
RUN npm install -g http-server

# Crear un directorio para la app y copiar los archivos
WORKDIR /usr/src/app
COPY . .

# Exponer el puerto 8080
EXPOSE 8080

# Comando para iniciar el servidor HTTP
CMD ["http-server", "-p", "8080"]
