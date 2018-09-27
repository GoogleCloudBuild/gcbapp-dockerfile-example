FROM alpine
COPY helloworld.sh /
RUN chmod +x /helloword.sh
CMD ["/helloworld.sh"]
