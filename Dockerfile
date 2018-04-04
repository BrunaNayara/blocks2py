FROM nginx

COPY index.html /usr/share/nginx/html/index.html
COPY workspace.js /usr/share/nginx/html/workspace.js
COPY blockly /usr/share/nginx/html/blockly
COPY blocks /usr/share/nginx/html/blocks
COPY generators /usr/share/nginx/html/generators
COPY msg /usr/share/nginx/html/msg
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
