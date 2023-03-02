// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Operator
// Copyright (c) 2023 MinIO, Inc.
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
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// Pool pool
//
// swagger:model pool
type Pool struct {

	// affinity
	Affinity *PoolAffinity `json:"affinity,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
	NodeSelector map[string]string `json:"node_selector,omitempty"`

	// resources
	Resources *PoolResources `json:"resources,omitempty"`

	// runtime class name
	RuntimeClassName string `json:"runtimeClassName,omitempty"`

	// security context
	SecurityContext *SecurityContext `json:"securityContext,omitempty"`

	// servers
	// Required: true
	Servers *int64 `json:"servers"`

	// tolerations
	Tolerations PoolTolerations `json:"tolerations,omitempty"`

	// volume configuration
	// Required: true
	VolumeConfiguration *PoolVolumeConfiguration `json:"volume_configuration"`

	// volumes per server
	// Required: true
	VolumesPerServer *int32 `json:"volumes_per_server"`
}

// Validate validates this pool
func (m *Pool) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAffinity(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateResources(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSecurityContext(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateServers(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTolerations(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateVolumeConfiguration(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateVolumesPerServer(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Pool) validateAffinity(formats strfmt.Registry) error {
	if swag.IsZero(m.Affinity) { // not required
		return nil
	}

	if m.Affinity != nil {
		if err := m.Affinity.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("affinity")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("affinity")
			}
			return err
		}
	}

	return nil
}

func (m *Pool) validateResources(formats strfmt.Registry) error {
	if swag.IsZero(m.Resources) { // not required
		return nil
	}

	if m.Resources != nil {
		if err := m.Resources.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("resources")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("resources")
			}
			return err
		}
	}

	return nil
}

func (m *Pool) validateSecurityContext(formats strfmt.Registry) error {
	if swag.IsZero(m.SecurityContext) { // not required
		return nil
	}

	if m.SecurityContext != nil {
		if err := m.SecurityContext.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("securityContext")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("securityContext")
			}
			return err
		}
	}

	return nil
}

func (m *Pool) validateServers(formats strfmt.Registry) error {

	if err := validate.Required("servers", "body", m.Servers); err != nil {
		return err
	}

	return nil
}

func (m *Pool) validateTolerations(formats strfmt.Registry) error {
	if swag.IsZero(m.Tolerations) { // not required
		return nil
	}

	if err := m.Tolerations.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("tolerations")
		} else if ce, ok := err.(*errors.CompositeError); ok {
			return ce.ValidateName("tolerations")
		}
		return err
	}

	return nil
}

func (m *Pool) validateVolumeConfiguration(formats strfmt.Registry) error {

	if err := validate.Required("volume_configuration", "body", m.VolumeConfiguration); err != nil {
		return err
	}

	if m.VolumeConfiguration != nil {
		if err := m.VolumeConfiguration.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("volume_configuration")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("volume_configuration")
			}
			return err
		}
	}

	return nil
}

func (m *Pool) validateVolumesPerServer(formats strfmt.Registry) error {

	if err := validate.Required("volumes_per_server", "body", m.VolumesPerServer); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this pool based on the context it is used
func (m *Pool) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateAffinity(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateResources(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSecurityContext(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateTolerations(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateVolumeConfiguration(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Pool) contextValidateAffinity(ctx context.Context, formats strfmt.Registry) error {

	if m.Affinity != nil {
		if err := m.Affinity.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("affinity")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("affinity")
			}
			return err
		}
	}

	return nil
}

func (m *Pool) contextValidateResources(ctx context.Context, formats strfmt.Registry) error {

	if m.Resources != nil {
		if err := m.Resources.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("resources")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("resources")
			}
			return err
		}
	}

	return nil
}

func (m *Pool) contextValidateSecurityContext(ctx context.Context, formats strfmt.Registry) error {

	if m.SecurityContext != nil {
		if err := m.SecurityContext.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("securityContext")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("securityContext")
			}
			return err
		}
	}

	return nil
}

func (m *Pool) contextValidateTolerations(ctx context.Context, formats strfmt.Registry) error {

	if err := m.Tolerations.ContextValidate(ctx, formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("tolerations")
		} else if ce, ok := err.(*errors.CompositeError); ok {
			return ce.ValidateName("tolerations")
		}
		return err
	}

	return nil
}

func (m *Pool) contextValidateVolumeConfiguration(ctx context.Context, formats strfmt.Registry) error {

	if m.VolumeConfiguration != nil {
		if err := m.VolumeConfiguration.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("volume_configuration")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("volume_configuration")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *Pool) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Pool) UnmarshalBinary(b []byte) error {
	var res Pool
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// PoolVolumeConfiguration pool volume configuration
//
// swagger:model PoolVolumeConfiguration
type PoolVolumeConfiguration struct {

	// annotations
	Annotations map[string]string `json:"annotations,omitempty"`

	// labels
	Labels map[string]string `json:"labels,omitempty"`

	// size
	// Required: true
	Size *int64 `json:"size"`

	// storage class name
	StorageClassName string `json:"storage_class_name,omitempty"`
}

// Validate validates this pool volume configuration
func (m *PoolVolumeConfiguration) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateSize(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *PoolVolumeConfiguration) validateSize(formats strfmt.Registry) error {

	if err := validate.Required("volume_configuration"+"."+"size", "body", m.Size); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this pool volume configuration based on context it is used
func (m *PoolVolumeConfiguration) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *PoolVolumeConfiguration) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *PoolVolumeConfiguration) UnmarshalBinary(b []byte) error {
	var res PoolVolumeConfiguration
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
