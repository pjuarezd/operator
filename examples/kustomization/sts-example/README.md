# MinIO Operator STS: Native IAM Authentication for Kubernetes

Each example in this folder contains an example using a different SDK on how to adopt Operator's STS.

> ⚠️ This feature is an alpha release and is subject to breaking changes in future releases.

# Requirements

## Enabling STS functionality

At the moment, the STS feature ships off by default, to turn it on switch `OPERATOR_STS_ENABLED` to `on` on
the `minio-operator` deployment.

## TLS

The STS functionality works only with TLS configured. We can request certificates automatically, but additional you can
user `cert-manager` or bring your own certificates.