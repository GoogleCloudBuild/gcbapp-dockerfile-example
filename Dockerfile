# Build Server
FROM golang:latest as builder
ENV GOBIN /go/bin
WORKDIR /go/src/github.com/chibadaijiro/gcbapp-dockerfile-example
COPY / .
RUN go test
RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build

# COPY theserver file to image from builder
FROM alpine:latest
WORKDIR /usr/local/bin/
COPY --from=builder /go/src/github.com/chibadaijiro/gcbapp-dockerfile-example/gcbapp-dockerfile-example .

EXPOSE 8080

CMD ["/usr/local/bin/gcbapp-dockerfile-example"]