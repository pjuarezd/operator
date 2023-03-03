# MinIO Operator STS: Native IAM Authentication for Kubernetes

Each example in this folder contains an example using a different SDK on how to adopt Operator's STS.

> ⚠️ This feature is an alpha release and is subject to breaking changes in future releases.

# Requirements

The STS functionality works only with TLS configured. We can request certificates automatically, but additional you can
user `cert-manager` or bring your own certificates.