FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY ./setup.sh /app/setup.sh
RUN chmod +x /app/setup.sh
EXPOSE 3000
CMD ["/bin/bash","-c", "./setup.sh"]
