FROM openjdk:17-jdk-slim
VOLUME /tmp

RUN echo "America/Sao_Paulo" > /etc/timezone
RUN export TZ=America/Sao_Paulo

ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-cp","app:app/lib/*","com.luisgustavodev.carroapi.carroapi.CarroapiApplication"]