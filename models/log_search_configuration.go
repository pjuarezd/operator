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
)

// LogSearchConfiguration log search configuration
//
// swagger:model logSearchConfiguration
type LogSearchConfiguration struct {

	// image
	Image string `json:"image,omitempty"`

	// postgres image
	PostgresImage string `json:"postgres_image,omitempty"`

	// postgres init image
	PostgresInitImage string `json:"postgres_init_image,omitempty"`

	// postgres security context
	PostgresSecurityContext *SecurityContext `json:"postgres_securityContext,omitempty"`

	// security context
	SecurityContext *SecurityContext `json:"securityContext,omitempty"`

	// storage class
	StorageClass string `json:"storageClass,omitempty"`

	// storage size
	StorageSize *float64 `json:"storageSize,omitempty"`
}

// Validate validates this log search configuration
func (m *LogSearchConfiguration) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validatePostgresSecurityContext(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSecurityContext(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *LogSearchConfiguration) validatePostgresSecurityContext(formats strfmt.Registry) error {
	if swag.IsZero(m.PostgresSecurityContext) { // not required
		return nil
	}

	if m.PostgresSecurityContext != nil {
		if err := m.PostgresSecurityContext.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("postgres_securityContext")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("postgres_securityContext")
			}
			return err
		}
	}

	return nil
}

func (m *LogSearchConfiguration) validateSecurityContext(formats strfmt.Registry) error {
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

// ContextValidate validate this log search configuration based on the context it is used
func (m *LogSearchConfiguration) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidatePostgresSecurityContext(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSecurityContext(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *LogSearchConfiguration) contextValidatePostgresSecurityContext(ctx context.Context, formats strfmt.Registry) error {

	if m.PostgresSecurityContext != nil {
		if err := m.PostgresSecurityContext.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("postgres_securityContext")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("postgres_securityContext")
			}
			return err
		}
	}

	return nil
}

func (m *LogSearchConfiguration) contextValidateSecurityContext(ctx context.Context, formats strfmt.Registry) error {

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

// MarshalBinary interface implementation
func (m *LogSearchConfiguration) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *LogSearchConfiguration) UnmarshalBinary(b []byte) error {
	var res LogSearchConfiguration
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
