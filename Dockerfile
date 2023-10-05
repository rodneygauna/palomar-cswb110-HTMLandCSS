# Dockerfile
FROM nginx:mainline-alpine-slim

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the website files to /usr/share/nginx/html
COPY . /usr/share/nginx/html

# Expose ports
EXPOSE 80

# Command to build the image
# docker build -t cswb110 .
#Command to run the container
# docker run -d -p 80:80 cswb110
