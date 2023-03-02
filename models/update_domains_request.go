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

// UpdateDomainsRequest update domains request
//
// swagger:model updateDomainsRequest
type UpdateDomainsRequest struct {

	// domains
	Domains *DomainsConfiguration `json:"domains,omitempty"`
}

// Validate validates this update domains request
func (m *UpdateDomainsRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateDomains(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *UpdateDomainsRequest) validateDomains(formats strfmt.Registry) error {
	if swag.IsZero(m.Domains) { // not required
		return nil
	}

	if m.Domains != nil {
		if err := m.Domains.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("domains")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("domains")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this update domains request based on the context it is used
func (m *UpdateDomainsRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateDomains(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *UpdateDomainsRequest) contextValidateDomains(ctx context.Context, formats strfmt.Registry) error {

	if m.Domains != nil {
		if err := m.Domains.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("domains")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("domains")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *UpdateDomainsRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *UpdateDomainsRequest) UnmarshalBinary(b []byte) error {
	var res UpdateDomainsRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
