// This file is part of MinIO Operator
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package statefulsets

import (
	"os"
	"sync"
)

const (
	// DefaultSidecarImage is the sidecar image to use for tenants
	DefaultSidecarImage = "quay.io/minio/operator-sidecar:v7.0.1"
)

var (
	sidecarImage = DefaultSidecarImage
	sidecarOnce  sync.Once
)

func getSidecarImage() string {
	sidecarOnce.Do(func() {
		sidecarImage = DefaultSidecarImage
		if val := os.Getenv("OPERATOR_SIDECAR_IMAGE"); val != "" {
			sidecarImage = val
		}
	})
	return sidecarImage
}
