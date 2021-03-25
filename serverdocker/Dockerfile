FROM openjdk:17-ea-14-jdk
COPY . /usr/src/myapp
USER root
EXPOSE 9990 
EXPOSE 8444
EXPOSE 8443
WORKDIR /usr/src/myapp/wildfly/bin
RUN chmod 777 standalone.sh
RUN sed -i -e 's/\r$//' standalone.sh
CMD ["./standalone.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0"]