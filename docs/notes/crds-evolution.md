# MinIO Operator CRDs Evolution

**Document Version:** 2.0
**Date:** 2026-02-26
**Covers:** Operator v5.0.18, v6.0.4, v7.1.1

## Table of Contents

- [Overview](#overview)
- [Version Summary](#version-summary)
- [Tenant CRD - Complete Field Reference](#tenant-crd---complete-field-reference)
- [PolicyBinding CRD (v1beta1) - Complete Field Reference](#policybinding-crd-v1beta1---complete-field-reference)
- [PolicyBinding CRD (v1alpha1) - Complete Field Reference](#policybinding-crd-v1alpha1---complete-field-reference)
- [MinIOJob CRD (v1alpha1) - Complete Field Reference](#miniojob-crd-v1alpha1---complete-field-reference)
- [Migration Guide](#migration-guide)
- [Kubernetes API Dependencies](#kubernetes-api-dependencies)

---

## Overview

This document provides a comprehensive field-level comparison of MinIO Operator CRDs across major versions 5, 6, and 7 using jsonPath notation. All fields are consolidated into single tables per CRD for easy scanning and comparison.

### Legend

| Symbol | Meaning |
|--------|---------|
| ✓ | Field present and unchanged |
| 🆕 | Field added in this version |
| ❌ | Field removed in this version |
| 🔒 | Field made immutable/required in this version |
| ⚙️ | Field behavior/validation modified |
| 📝 | Field type or default changed |

---

## Version Summary

| Version | Kubernetes | CRDs | Controller-Gen | Key Changes |
|---------|-----------|------|----------------|-------------|
| **v5.0.18** | 1.21+ | 3 (2 unique) | v0.17.2 | Baseline with Tenant + PolicyBinding |
| **v6.0.4** | 1.28+ | 4 (3 unique) | v0.15.0 | Added MinIOJob, removed 6 Tenant fields, enforced immutability |
| **v7.1.1** | 1.30+ | 3 (2 unique) | v0.17.2 | Removed MinIOJob, restored 6 Tenant fields, metrics enhancements |

---

## Tenant CRD - Complete Field Reference

**CRD Name:** `tenants.minio.min.io`
**API Group:** `minio.min.io`
**API Version:** `v2`
**Scope:** Namespaced
**Short Name:** `tenant`

### All Fields - Unified View

| # | Field Path (jsonPath) | Type | v5.0.18 | v6.0.4 | v7.1.1 | Notes |
|---|----------------------|------|---------|--------|--------|-------|
| **METADATA** |
| 1 | `.metadata.name` | string | ✓ | ✓ | ✓ | Tenant name |
| 2 | `.metadata.namespace` | string | ✓ | ✓ | ✓ | Tenant namespace |
| 3 | `.metadata.labels` | map[string]string | ✓ | ✓ | ✓ | Custom labels |
| 4 | `.metadata.annotations` | map[string]string | ✓ | ✓ | ✓ | Custom annotations |
| 5 | `.metadata.annotations["operator.min.io/version"]` | string | v5.0.15 | v6.0.4 | v7.1.1 | Operator version annotation |
| **SPEC - TOP LEVEL** |
| 6 | `.spec.pools[]` | []Pool | ✓ Required | ✓ Required | ✓ Required | Pool configuration array |
| 7 | `.spec.image` | string | ✓ | ✓ | ✓ | MinIO server image |
| 8 | `.spec.imagePullSecret` | LocalObjectReference | ✓ | ✓ | ✓ | Image pull secret |
| 9 | `.spec.imagePullPolicy` | string | ✓ | ✓ | ✓ | Image pull policy |
| 10 | `.spec.podManagementPolicy` | string | ✓ | ✓ | ✓ | StatefulSet pod management |
| 11 | `.spec.serviceAccountName` | string | ✓ | ✓ | ✓ | ServiceAccount name |
| 12 | `.spec.priorityClassName` | string | ✓ | ✓ | ✓ | Priority class for pods |
| 13 | `.spec.configuration` | LocalObjectReference | ✓ | ✓ | ✓ | Configuration secret (env vars) |
| 14 | `.spec.env[]` | []corev1.EnvVar | ✓ | ✓ | ✓ | Environment variables |
| 15 | `.spec.users[]` | []corev1.LocalObjectReference | ✓ | ✓ | ✓ | User credential secrets |
| 16 | `.spec.credsSecret` | *LocalObjectReference | Removed pre-v5 | - | - | Removed before v5 (use .spec.configuration) |
| **SPEC - TLS/CERTIFICATES** |
| 17 | `.spec.requestAutoCert` | *bool | ✓ | ✓ | ✓ | Request automatic TLS certificates |
| 18 | `.spec.certConfig` | *CertificateConfig | ✓ | ✓ | ✓ | Certificate configuration |
| 19 | `.spec.externalCertSecret[]` | []corev1.LocalObjectReference | ✓ | ✓ | ✓ | External TLS certificates |
| 20 | `.spec.externalCaCertSecret[]` | []corev1.LocalObjectReference | ✓ | ✓ | ✓ | External CA certificates |
| 21 | `.spec.externalClientCertSecret` | *corev1.LocalObjectReference | ✓ | ✓ | ✓ | External client certificate (deprecated) |
| 22 | `.spec.externalClientCertSecrets[]` | []corev1.LocalObjectReference | ✓ | ✓ | ✓ | External client certificates |
| 23 | `.spec.mountPath` | string | ✓ | ✓ | ✓ | Certificate mount path |
| 24 | `.spec.subPath` | string | ✓ | ✓ | ✓ | Certificate mount subpath |
| 25 | `.spec.certExpiryAlertThreshold` | *time.Duration | ✓ | ✓ | ✓ | Days before expiry to alert |
| **SPEC - HEALTH PROBES** |
| 26 | `.spec.liveness` | *corev1.Probe | ✓ | ✓ | ✓ | Liveness probe configuration |
| 27 | `.spec.readiness` | *corev1.Probe | ✓ | ✓ | ✓ | Readiness probe configuration |
| 28 | `.spec.startup` | *corev1.Probe | ✓ | ✓ | ✓ | Startup probe configuration |
| 29 | `.spec.lifecycle` | *corev1.Lifecycle | ✓ | ✓ | ✓ | Container lifecycle hooks |
| **SPEC - FEATURES & INTEGRATIONS** |
| 30 | `.spec.features` | *Features | ✓ | ✓ | ✓ | Feature flags object |
| 31 | `.spec.features.bucketDNS` | *bool | ✓ | ✓ | ✓ | Enable bucket DNS |
| 32 | `.spec.features.domains` | *TenantDomains | ✓ | ✓ | ✓ | Domain configuration |
| 33 | `.spec.features.enableSFTP` | *bool | ✓ | ✓ | ✓ | Enable SFTP server |
| 34 | `.spec.buckets[]` | []Bucket | ✓ | ✓ | ✓ | Bucket definitions (deprecated) |
| 35 | `.spec.domains` | *TenantDomains | ✓ | ✓ | ✓ | Domain configuration |
| 36 | `.spec.domains.console` | string | ✓ | ✓ | ✓ | Console domain |
| 37 | `.spec.domains.minio[]` | []string | ✓ | ✓ | ✓ | MinIO API domains |
| **SPEC - KES ENCRYPTION** |
| 38 | `.spec.kes` | *KESConfig | ✓ | ✓ | ✓ | KES configuration object |
| 39 | `.spec.kes.image` | string | ✓ | ✓ | ✓ | KES image |
| 40 | `.spec.kes.replicas` | int32 | ✓ | ✓ | ✓ | KES replicas |
| 41 | `.spec.kes.configuration` | *corev1.LocalObjectReference | ✓ | ✓ | ✓ | KES configuration secret |
| 42 | `.spec.kes.imagePullPolicy` | corev1.PullPolicy | ✓ | ✓ | ✓ | KES image pull policy |
| 43 | `.spec.kes.externalCertSecret` | *LocalCertificateReference | ✓ | ✓ | ✓ | KES external TLS cert |
| 44 | `.spec.kes.clientCertSecret` | *LocalCertificateReference | ✓ | ✓ | ✓ | KES client cert |
| 45 | `.spec.kes.kesSecret` | *LocalCertificateReference | ✓ | ✓ | ✓ | KES server cert |
| 46 | `.spec.kes.serviceAccountName` | string | ✓ | ✓ | ✓ | KES ServiceAccount |
| 47 | `.spec.kes.securityContext` | *corev1.PodSecurityContext | ✓ | ✓ | ✓ | KES pod security context |
| 48 | `.spec.kes.containerSecurityContext` | *corev1.SecurityContext | ✓ | ✓ | ✓ | KES container security context |
| 49 | `.spec.kes.env[]` | []corev1.EnvVar | ✓ | ✓ | ✓ | KES environment variables |
| 50 | `.spec.kes.resources` | corev1.ResourceRequirements | ✓ | ✓ | ✓ | KES resource limits |
| 51 | `.spec.kes.nodeSelector` | map[string]string | ✓ | ✓ | ✓ | KES node selector |
| 52 | `.spec.kes.affinity` | *corev1.Affinity | ✓ | ✓ | ✓ | KES pod affinity |
| 53 | `.spec.kes.tolerations[]` | []corev1.Toleration | ✓ | ✓ | ✓ | KES tolerations |
| 54 | `.spec.kes.annotations` | map[string]string | ✓ | ✓ | ✓ | KES pod annotations |
| 55 | `.spec.kes.labels` | map[string]string | ✓ | ✓ | ✓ | KES pod labels |
| 56 | `.spec.kes.topologySpreadConstraints[]` | []corev1.TopologySpreadConstraint | ✓ | ✓ | ✓ | KES topology spread |
| **SPEC - MONITORING** |
| 57 | `.spec.prometheusOperator` | *bool | ✓ | ✓ | ✓ | Enable Prometheus ServiceMonitor |
| 58 | `.spec.prometheusOperatorScrapeMetricsPaths[]` | []string | ✓ | ❌ **REMOVED** | 🆕 **RESTORED** | Custom Prometheus scrape paths |
| 59 | `.spec.logging` | *Logging | ✓ | ✓ | ✓ | Logging configuration |
| 60 | `.spec.logging.anonymous` | bool | ✓ | ✓ | ✓ | Anonymous logging |
| 61 | `.spec.logging.json` | bool | ✓ | ✓ | ✓ | JSON logging format |
| 62 | `.spec.logging.quiet` | bool | ✓ | ✓ | ✓ | Quiet mode |
| **SPEC - METADATA CUSTOMIZATION** |
| 63 | `.spec.serviceMetadata` | *ServiceMetadata | ✓ | ✓ | ✓ | Service metadata object |
| 64 | `.spec.serviceMetadata.minioServiceLabels` | map[string]string | ✓ | ✓ | ✓ | MinIO service labels |
| 65 | `.spec.serviceMetadata.minioServiceAnnotations` | map[string]string | ✓ | ✓ | ✓ | MinIO service annotations |
| 66 | `.spec.serviceMetadata.consoleServiceLabels` | map[string]string | ✓ | ✓ | ✓ | Console service labels |
| 67 | `.spec.serviceMetadata.consoleServiceAnnotations` | map[string]string | ✓ | ✓ | ✓ | Console service annotations |
| 68 | `.spec.poolsMetadata` | *PoolsMetadata | ✓ | ❌ **REMOVED** | 🆕 **RESTORED** | Pool StatefulSet metadata |
| 69 | `.spec.poolsMetadata.labels` | map[string]string | ✓ | ❌ **REMOVED** | 🆕 **RESTORED** | Pool StatefulSet labels |
| 70 | `.spec.poolsMetadata.annotations` | map[string]string | ✓ | ❌ **REMOVED** | 🆕 **RESTORED** | Pool StatefulSet annotations |
| 71 | `.spec.kesServiceLabels` | map[string]string | ✓ | ❌ **REMOVED** | 🆕 **RESTORED** | KES service labels |
| 72 | `.spec.kesServiceAnnotations` | map[string]string | ✓ | ❌ **REMOVED** | 🆕 **RESTORED** | KES service annotations |
| **SPEC - VOLUMES** |
| 73 | `.spec.additionalVolumes[]` | []corev1.Volume | ✓ | ✓ | ✓ | Additional volumes for pods |
| 74 | `.spec.additionalVolumeMounts[]` | []corev1.VolumeMount | ✓ | ✓ | ✓ | Additional volume mounts |
| **SPEC - CONTAINERS** |
| 75 | `.spec.initContainers[]` | []corev1.Container | ✓ | ✓ | ✓ | Init containers |
| 76 | `.spec.sideCars[]` | []corev1.Container | ✓ | ✓ | ✓ | Sidecar containers |
| **SPEC - SERVICE EXPOSURE** |
| 77 | `.spec.exposeServices` | *ExposeServices | ✓ | ✓ | ✓ | Service exposure config |
| 78 | `.spec.exposeServices.minio` | *corev1.Service | ✓ | ✓ | ✓ | MinIO service configuration |
| 79 | `.spec.exposeServices.console` | *corev1.Service | ✓ | ✓ | ✓ | Console service configuration |
| **SPEC.POOLS[] - POOL CONFIGURATION** |
| 80 | `.spec.pools[].name` | string | ✓ Optional | 🔒 **REQUIRED** | 🔒 **REQUIRED** | Pool name (required in v6+) |
| 81 | `.spec.pools[].servers` | int32 | ✓ Mutable | 🔒 **IMMUTABLE** | 🔒 **IMMUTABLE** | Number of servers (immutable in v6+) |
| 82 | `.spec.pools[].volumesPerServer` | int32 | ✓ Mutable | 🔒 **IMMUTABLE** | 🔒 **IMMUTABLE** | Volumes per server (immutable in v6+) |
| 83 | `.spec.pools[].runtimeClassName` | *string | ✓ | ✓ | ✓ | Runtime class |
| 84 | `.spec.pools[].volumeClaimTemplate` | *corev1.PersistentVolumeClaim | ✓ | ✓ | ✓ | PVC template |
| 85 | `.spec.pools[].volumeClaimTemplate.metadata` | metav1.ObjectMeta | ✓ | ✓ | ✓ | PVC metadata |
| 86 | `.spec.pools[].volumeClaimTemplate.spec` | corev1.PersistentVolumeClaimSpec | ✓ | ✓ | ✓ | PVC spec |
| 87 | `.spec.pools[].volumeClaimTemplate.spec.storageClassName` | *string | ✓ | ✓ | ✓ | Storage class name |
| 88 | `.spec.pools[].volumeClaimTemplate.spec.resources` | corev1.ResourceRequirements | ✓ | ✓ | ✓ | Storage resources |
| 89 | `.spec.pools[].volumeClaimTemplate.spec.resources.requests.storage` | string | ✓ | ✓ | ✓ | Storage size (e.g., "10Gi") |
| 90 | `.spec.pools[].volumeClaimTemplate.spec.azureDisk.fsType` | string | No default | No default | 📝 `default: ext4` | Azure disk filesystem type |
| 91 | `.spec.pools[].resources` | corev1.ResourceRequirements | ✓ | ✓ | ✓ | Pod resource limits |
| 92 | `.spec.pools[].resources.requests` | corev1.ResourceList | ✓ | ✓ | ✓ | Resource requests |
| 93 | `.spec.pools[].resources.limits` | corev1.ResourceList | ✓ | ✓ | ✓ | Resource limits |
| 94 | `.spec.pools[].securityContext` | *corev1.PodSecurityContext | ✓ | ✓ | ✓ | Pod security context |
| 95 | `.spec.pools[].containerSecurityContext` | *corev1.SecurityContext | ✓ | ✓ | ✓ | Container security context |
| 96 | `.spec.pools[].nodeSelector` | map[string]string | ✓ | ✓ | ✓ | Node selector |
| 97 | `.spec.pools[].affinity` | *corev1.Affinity | ✓ | ✓ | ✓ | Pod affinity |
| 98 | `.spec.pools[].affinity.nodeAffinity` | *corev1.NodeAffinity | ✓ | ✓ | ✓ | Node affinity |
| 99 | `.spec.pools[].affinity.podAffinity` | *corev1.PodAffinity | ✓ | ✓ | ✓ | Pod affinity |
| 100 | `.spec.pools[].affinity.podAntiAffinity` | *corev1.PodAntiAffinity | ✓ | ✓ | ✓ | Pod anti-affinity |
| 101 | `.spec.pools[].tolerations[]` | []corev1.Toleration | ✓ | ✓ | ✓ | Tolerations |
| 102 | `.spec.pools[].topologySpreadConstraints[]` | []corev1.TopologySpreadConstraint | ✓ | ✓ | ✓ | Topology spread constraints |
| 103 | `.spec.pools[].labels` | map[string]string | ✓ | ✓ | ✓ | Pool pod labels |
| 104 | `.spec.pools[].annotations` | map[string]string | ✓ | ✓ | ✓ | Pool pod annotations |
| **STATUS - READ-ONLY** |
| 105 | `.status.currentState` | string | ✓ | ✓ | ✓ | Current tenant state |
| 106 | `.status.healthStatus` | string | ✓ | ✓ | ✓ | Health status |
| 107 | `.status.availableReplicas` | int32 | ✓ | ✓ | ✓ | Available replicas |
| 108 | `.status.certificates` | CertificateStatus | ✓ | ✓ | ✓ | Certificate details |
| 109 | `.status.certificates.autoCertEnabled` | *bool | ✓ | ✓ | ✓ | Auto TLS enabled |
| 110 | `.status.certificates.customCertificates` | CustomCertificates | ✓ | ✓ | ✓ | Custom certificate details |
| 111 | `.status.drivesOnline` | int | ✓ | ✓ | ✓ | Online drives count |
| 112 | `.status.drivesOffline` | int | ✓ | ✓ | ✓ | Offline drives count |
| 113 | `.status.drivesHealing` | int | ✓ | ✓ | ✓ | Healing drives count |
| 114 | `.status.writeQuorum` | int | ✓ | ✓ | ✓ | Write quorum value |
| 115 | `.status.usage` | TenantUsage | ✓ | ✓ | ✓ | Storage usage |
| 116 | `.status.usage.capacity` | int64 | ✓ | ✓ | ✓ | Total capacity bytes |
| 117 | `.status.usage.usage` | int64 | ✓ | ✓ | ✓ | Used capacity bytes |
| 118 | `.status.pools[]` | []PoolStatus | ✓ | ✓ | ✓ | Per-pool status |
| 119 | `.status.pools[].ssName` | string | ✓ | ✓ | ✓ | StatefulSet name |
| 120 | `.status.pools[].state` | string | ✓ | ✓ | ✓ | Pool state |
| 121 | `.status.syncVersion` | string | ✓ | ✓ | ✓ | Sync version |
| 122 | `.status.revision` | int | ✓ | ✓ | ✓ | Revision number |

### Summary - Tenant CRD Changes

| Metric | v5.0.18 | v6.0.4 | v7.1.1 |
|--------|---------|--------|--------|
| **Total Fields** | 122 | 116 (-6) | 122 (+6) |
| **Fields Added** | Baseline | 0 | 6 restored |
| **Fields Removed** | - | 6 | 0 |
| **Validation Changes** | - | 3 (name required, servers/volumes immutable) | 0 |
| **Default Changes** | - | 0 | 1 (azureDisk.fsType) |

**Key Changes:**
- **v5 → v6:** Removed metrics/metadata customization fields, enforced pool immutability
- **v6 → v7:** Restored all removed fields with enhancements, added defaults

---

## PolicyBinding CRD (v1beta1) - Complete Field Reference

**CRD Name:** `policybindings.sts.min.io`
**API Group:** `sts.min.io`
**API Version:** `v1beta1` (Storage Version)
**Scope:** Namespaced
**Short Name:** `policybinding`

### All Fields - Unified View

| # | Field Path (jsonPath) | Type | v5.0.18 | v6.0.4 | v7.1.1 | Notes |
|---|----------------------|------|---------|--------|--------|-------|
| **METADATA** |
| 1 | `.metadata.name` | string | ✓ | ✓ | ✓ | PolicyBinding name |
| 2 | `.metadata.namespace` | string | ✓ | ✓ | ✓ | Tenant namespace |
| 3 | `.metadata.labels` | map[string]string | ✓ | ✓ | ✓ | Custom labels |
| 4 | `.metadata.annotations` | map[string]string | ✓ | ✓ | ✓ | Custom annotations |
| 5 | `.metadata.annotations["operator.min.io/version"]` | string | v5.0.15 | v6.0.4 | v7.1.1 | Version annotation |
| **SPEC** |
| 6 | `.spec.application` | Application | ✓ Required | ✓ Required | ✓ Required | ServiceAccount reference |
| 7 | `.spec.application.namespace` | string | ✓ Required | ✓ Required | ✓ Required | Application namespace |
| 8 | `.spec.application.serviceaccount` | string | ✓ Required | ✓ Required | ✓ Required | ServiceAccount name |
| 9 | `.spec.policies[]` | []string | ✓ Required | ✓ Required | ✓ Required | MinIO policy names |
| **STATUS - READ-ONLY** |
| 10 | `.status.currentState` | string | ✓ | ✓ | ✓ | Current binding state |
| 11 | `.status.usage` | PolicyBindingUsage | ✓ | ✓ | ✓ | Usage statistics |
| 12 | `.status.usage.authotizations` | int64 | ✓ | ✓ | ✓ | Authorization count |

### Summary - PolicyBinding v1beta1 Changes

| Metric | v5.0.18 | v6.0.4 | v7.1.1 |
|--------|---------|--------|--------|
| **Total Fields** | 12 | 12 | 12 |
| **Fields Changed** | Baseline | 0 | 0 |
| **API Status** | Stable | Stable | Stable |

**No structural changes across versions - only metadata version updates**

### Example Usage

```yaml
apiVersion: sts.min.io/v1beta1
kind: PolicyBinding
metadata:
  name: app-binding
  namespace: minio-tenant-1
spec:
  application:
    namespace: app-namespace
    serviceaccount: app-sa
  policies:
    - consoleAdmin
    - readonly
```

---

## PolicyBinding CRD (v1alpha1) - Complete Field Reference

**CRD Name:** `policybindings.sts.min.io`
**API Group:** `sts.min.io`
**API Version:** `v1alpha1` (Deprecated)
**Scope:** Namespaced
**Status:** ⚠️ Deprecated in v6+, auto-converts to v1beta1

### All Fields - Unified View

| # | Field Path (jsonPath) | Type | v5.0.18 | v6.0.4 | v7.1.1 | Notes |
|---|----------------------|------|---------|--------|--------|-------|
| **METADATA** |
| 1 | `.metadata.name` | string | ✓ | ✓ Deprecated | ✓ Deprecated | PolicyBinding name |
| 2 | `.metadata.namespace` | string | ✓ | ✓ Deprecated | ✓ Deprecated | Tenant namespace |
| 3 | `.metadata.labels` | map[string]string | ✓ | ✓ Deprecated | ✓ Deprecated | Custom labels |
| 4 | `.metadata.annotations` | map[string]string | ✓ | ✓ Deprecated | ✓ Deprecated | Custom annotations |
| 5 | `.metadata.annotations["operator.min.io/version"]` | string | v5.0.15 | v5.0.15 | v5.0.15 | Frozen at v5.0.15 |
| **SPEC (Identical to v1beta1)** |
| 6 | `.spec.application` | Application | ✓ | ✓ Deprecated | ✓ Deprecated | ServiceAccount reference |
| 7 | `.spec.application.namespace` | string | ✓ | ✓ Deprecated | ✓ Deprecated | Application namespace |
| 8 | `.spec.application.serviceaccount` | string | ✓ | ✓ Deprecated | ✓ Deprecated | ServiceAccount name |
| 9 | `.spec.policies[]` | []string | ✓ | ✓ Deprecated | ✓ Deprecated | MinIO policy names |
| **STATUS (Identical to v1beta1)** |
| 10 | `.status.currentState` | string | ✓ | ✓ Deprecated | ✓ Deprecated | Current binding state |
| 11 | `.status.usage` | PolicyBindingUsage | ✓ | ✓ Deprecated | ✓ Deprecated | Usage statistics |
| 12 | `.status.usage.authotizations` | int64 | ✓ | ✓ Deprecated | ✓ Deprecated | Authorization count |

### Summary - PolicyBinding v1alpha1 Status

| Metric | v5.0.18 | v6.0.4 | v7.1.1 |
|--------|---------|--------|--------|
| **Total Fields** | 12 | 12 | 12 |
| **API Status** | Supported | ⚠️ Deprecated | ⚠️ Deprecated |
| **Auto-conversion** | N/A | ✓ to v1beta1 | ✓ to v1beta1 |

**Migration Recommendation:** Update manifests to use `apiVersion: sts.min.io/v1beta1`

---

## MinIOJob CRD (v1alpha1) - Complete Field Reference

**CRD Name:** `miniojobs.job.min.io`
**API Group:** `job.min.io`
**API Version:** `v1alpha1`
**Scope:** Namespaced
**Lifecycle:** ⚠️ Added in v6.0.4, **REMOVED in v7.0.0** (Breaking Change)

### All Fields - Unified View

| # | Field Path (jsonPath) | Type | v5.0.18 | v6.0.4 | v7.1.1 | Notes |
|---|----------------------|------|---------|--------|--------|-------|
| **METADATA** |
| 1 | `.metadata.name` | string | - | 🆕 | ❌ **REMOVED** | MinIOJob name |
| 2 | `.metadata.namespace` | string | - | 🆕 | ❌ **REMOVED** | Job namespace |
| 3 | `.metadata.labels` | map[string]string | - | 🆕 | ❌ **REMOVED** | Custom labels |
| 4 | `.metadata.annotations` | map[string]string | - | 🆕 | ❌ **REMOVED** | Custom annotations |
| **SPEC** |
| 5 | `.spec.serviceAccountName` | string | - | 🆕 Required | ❌ **REMOVED** | ServiceAccount for job execution |
| 6 | `.spec.tenant` | TenantRef | - | 🆕 Required | ❌ **REMOVED** | Target MinIO Tenant |
| 7 | `.spec.tenant.name` | string | - | 🆕 Required | ❌ **REMOVED** | Tenant name |
| 8 | `.spec.tenant.namespace` | string | - | 🆕 Required | ❌ **REMOVED** | Tenant namespace |
| 9 | `.spec.execution` | enum | - | 🆕 Optional | ❌ **REMOVED** | `parallel` or `sequential` (default: parallel) |
| 10 | `.spec.failureStrategy` | enum | - | 🆕 Optional | ❌ **REMOVED** | `continueOnFailure` or `stopOnFailure` (default: continueOnFailure) |
| 11 | `.spec.insecure` | *bool | - | 🆕 Optional | ❌ **REMOVED** | Disable TLS verification |
| 12 | `.spec.commands[]` | []CommandSpec | - | 🆕 Required | ❌ **REMOVED** | List of mc commands |
| 13 | `.spec.commands[].op` | string | - | 🆕 Required | ❌ **REMOVED** | Operation name (e.g., `make-bucket`, `admin-policy-add`) |
| 14 | `.spec.commands[].name` | string | - | 🆕 Optional | ❌ **REMOVED** | Command name/label |
| 15 | `.spec.commands[].args` | map[string]interface{} | - | 🆕 Optional | ❌ **REMOVED** | Command arguments |
| 16 | `.spec.mcImage` | string | - | 🆕 Optional | ❌ **REMOVED** | MinIO Client image |
| 17 | `.spec.imagePullPolicy` | corev1.PullPolicy | - | 🆕 Optional | ❌ **REMOVED** | Image pull policy |
| 18 | `.spec.imagePullSecret` | *corev1.LocalObjectReference | - | 🆕 Optional | ❌ **REMOVED** | Image pull secret |
| 19 | `.spec.securityContext` | *corev1.PodSecurityContext | - | 🆕 Optional | ❌ **REMOVED** | Pod security context |
| 20 | `.spec.containerSecurityContext` | *corev1.SecurityContext | - | 🆕 Optional | ❌ **REMOVED** | Container security context |
| **STATUS - READ-ONLY** |
| 21 | `.status.phase` | string | - | 🆕 | ❌ **REMOVED** | Job phase (Pending, Running, Success, Failed) |
| 22 | `.status.message` | string | - | 🆕 | ❌ **REMOVED** | Status message |

### Summary - MinIOJob Lifecycle

| Metric | v5.0.18 | v6.0.4 | v7.1.1 |
|--------|---------|--------|--------|
| **CRD Exists** | ❌ No | ✅ Yes | ❌ **REMOVED** |
| **Total Fields** | N/A | 22 | N/A |
| **Removal Impact** | - | - | ⚠️ **BREAKING CHANGE** |

### Example Usage (v6.0.4 only)

```yaml
apiVersion: job.min.io/v1alpha1
kind: MinIOJob
metadata:
  name: setup-bucket
  namespace: minio-tenant-1
spec:
  serviceAccountName: minio-job-sa
  tenant:
    name: myminio
    namespace: minio-tenant-1
  execution: sequential
  failureStrategy: stopOnFailure
  commands:
    - op: make-bucket
      args:
        name: my-bucket
        region: us-east-1
    - op: admin-policy-create
      args:
        name: my-policy
        policy: |
          {
            "Version": "2012-10-17",
            "Statement": [...]
          }
```

### Migration Path (v7.0.0+)

Since MinIOJob was removed, use one of these alternatives:

**Option 1: Kubernetes Job with mc**
```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: setup-minio
spec:
  template:
    spec:
      serviceAccountName: minio-sa
      containers:
      - name: mc
        image: minio/mc:latest
        command: ["/bin/sh"]
        args:
        - -c
        - |
          mc alias set myminio https://minio.svc.cluster.local
          mc mb myminio/my-bucket
      restartPolicy: Never
```

**Option 2: Init Container**
```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      initContainers:
      - name: setup-minio
        image: minio/mc:latest
        command: ["/bin/sh", "-c"]
        args:
        - |
          mc alias set myminio $MINIO_ENDPOINT
          mc mb myminio/app-bucket || true
```

---

## Migration Guide

### v5.0.18 → v6.0.4

#### Breaking Changes

1. **Pool Name Required**
   ```yaml
   # ❌ v5 - Name optional
   spec:
     pools:
       - servers: 4

   # ✅ v6 - Name required
   spec:
     pools:
       - name: pool-0
         servers: 4
   ```

2. **Pool Immutability Enforced**
   ```yaml
   # ❌ v6+ - Cannot modify after creation
   spec:
     pools:
       - name: pool-0
         servers: 4  # IMMUTABLE
         volumesPerServer: 4  # IMMUTABLE

   # ✅ v6+ - Add new pool instead
   spec:
     pools:
       - name: pool-0
         servers: 4
         volumesPerServer: 4
       - name: pool-1  # New pool for expansion
         servers: 4
         volumesPerServer: 4
   ```

3. **Removed Fields** (Temporarily)
   - `.spec.prometheusOperatorScrapeMetricsPaths` - Removed in v6
   - `.spec.poolsMetadata` - Removed in v6
   - `.spec.kesServiceLabels` - Removed in v6
   - `.spec.kesServiceAnnotations` - Removed in v6

   **Impact:** If using these fields, remove from manifests before upgrading to v6

4. **New CRD Available**
   - `MinIOJob` (job.min.io/v1alpha1) available for imperative operations

#### Non-Breaking Changes

- PolicyBinding v1alpha1 deprecated (but still works)
- Kubernetes 1.28+ required

---

### v6.0.4 → v7.1.1

#### Breaking Changes

1. **MinIOJob Removed** ⚠️

   **Before (v6):**
   ```yaml
   apiVersion: job.min.io/v1alpha1
   kind: MinIOJob
   # ... entire CRD removed
   ```

   **After (v7) - Use Kubernetes Job:**
   ```yaml
   apiVersion: batch/v1
   kind: Job
   spec:
     template:
       spec:
         containers:
         - name: mc
           image: minio/mc:latest
           # Use mc commands directly
   ```

2. **Kubernetes 1.30+ Required**
   - Must upgrade cluster before upgrading operator

#### Non-Breaking Changes (Features Restored)

1. **Prometheus Scrape Paths Restored**
   ```yaml
   # ✅ v7 - Feature restored
   spec:
     prometheusOperator: true
     prometheusOperatorScrapeMetricsPaths:
       - /minio/v2/metrics/cluster
       - /minio/v2/metrics/bucket
   ```

2. **Pool Metadata Restored**
   ```yaml
   # ✅ v7 - Feature restored
   spec:
     poolsMetadata:
       labels:
         monitoring: enabled
       annotations:
         backup-policy: daily
   ```

3. **KES Service Metadata Restored**
   ```yaml
   # ✅ v7 - Features restored
   spec:
     kesServiceLabels:
       app: kes
     kesServiceAnnotations:
       prometheus.io/scrape: "true"
   ```

4. **Azure Disk Default**
   ```yaml
   # v7 - Auto-defaults to ext4
   spec:
     pools:
       - volumeClaimTemplate:
           spec:
             azureDisk:
               fsType: ext4  # Now defaults to ext4 if not specified
   ```

---

## Kubernetes API Dependencies

### API Version Matrix

| Operator Version | k8s.io/api | k8s.io/client-go | controller-runtime | Min K8s Version |
|-----------------|-----------|------------------|-------------------|-----------------|
| v5.0.18 | v0.32.3 | v0.32.3 | v0.20.4 | 1.21.0+ |
| v6.0.4 | v0.30.2 | v0.30.2 | v0.18.4 | 1.28.0+ |
| v7.1.1 | v0.31.1 | v0.31.1 | v0.19.0 | 1.30.0+ |

### Controller-Gen Versions

| Operator Version | controller-gen | CRD Generation |
|-----------------|---------------|----------------|
| v5.0.18 | v0.17.2 | Latest features |
| v6.0.4 | v0.15.0 | Compatibility downgrade |
| v7.1.1 | v0.17.2 | Latest features restored |

---

## Quick Reference

### CRD Evolution Timeline

```
v5.0.18 (Baseline - K8s 1.21+)
├── Tenant CRD: 122 fields
├── PolicyBinding v1beta1: 12 fields (stable)
├── PolicyBinding v1alpha1: 12 fields (supported)
└── MinIOJob: Does not exist

v6.0.4 (K8s 1.28+)
├── Tenant CRD: 116 fields (-6)
│   ├── ❌ Removed: prometheusOperatorScrapeMetricsPaths
│   ├── ❌ Removed: poolsMetadata + 2 sub-fields
│   ├── ❌ Removed: kesServiceLabels
│   ├── ❌ Removed: kesServiceAnnotations
│   ├── 🔒 Required: pools[].name
│   ├── 🔒 Immutable: pools[].servers
│   └── 🔒 Immutable: pools[].volumesPerServer
├── PolicyBinding v1beta1: 12 fields (stable)
├── PolicyBinding v1alpha1: 12 fields (deprecated)
└── ⭐ MinIOJob: 22 fields (NEW CRD)

v7.1.1 (K8s 1.30+)
├── Tenant CRD: 122 fields (+6 restored)
│   ├── ✅ Restored: prometheusOperatorScrapeMetricsPaths
│   ├── ✅ Restored: poolsMetadata + 2 sub-fields
│   ├── ✅ Restored: kesServiceLabels
│   ├── ✅ Restored: kesServiceAnnotations
│   └── 📝 Added default: azureDisk.fsType = ext4
├── PolicyBinding v1beta1: 12 fields (stable)
├── PolicyBinding v1alpha1: 12 fields (deprecated)
└── ❌ MinIOJob: REMOVED (breaking change)
```

---

## Document Metadata

**Version:** 2.0
**Last Updated:** 2026-02-26
**Maintainer:** MinIO Operator Team

**Related Documentation:**
- [Operator Upgrade Guide](../UPGRADE.md)
- [Release Notes v5.0.0](./v5.0.0.md)
- [Release Notes v6.0.0](./v6.0.0.md)
- [Release Notes v7.0.0](./v7.0.0.md)
- [Tenant CRD Reference](../tenant_crd.adoc)
- [PolicyBinding CRD Reference](../policybinding_crd.adoc)

**Validation:**
All field paths tested with:
```bash
kubectl get tenant <name> -o jsonpath='{.spec.field}'
kubectl get policybinding <name> -o jsonpath='{.spec.field}'
```

**Contributing:**
When updating this document:
1. Verify field changes against actual type definitions in `pkg/apis/`
2. Test jsonPath expressions with kubectl
3. Update version numbers and dates
4. Cross-reference with release notes
5. Validate CRD files in `resources/base/crds/`
