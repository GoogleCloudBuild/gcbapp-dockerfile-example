FROM golang:1.9

WORKDIR /go/src/gcbapp-dockerfile-example

COPY sample_test.go .

WORKDIR /go/src

CMD ["go", "test", "gcbapp-dockerfile-example"]

