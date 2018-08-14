FROM alpine

COPY helloworld.sh /var/
CMD ["/helloworld.sh"]
