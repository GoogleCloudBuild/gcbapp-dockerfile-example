# gcbapp-dockerfile-example
Example used in the Cloud Build GitHub app tutorial
https://cloud.google.com/cloud-build/docs/run-builds-on-github
<!-- # FROM alpine
# COPY helloworld.sh /
# CMD ["/helloworld.sh"] -->
steps:
- name: 'gcr.io/cloud-builders/git'
  args: ['clone', 'https://github.com/chocolatedisco/gcbapp-dockerfile-example.git']