import React from 'react';
import { JBCDropdown, JBCDropdownProps, DropdownOption } from './Dropdown';

const COUNTRIES: DropdownOption[] = [
  { label: 'United States', value: 'US', icon: 'ri-flag-line' },
  { label: 'United Kingdom', value: 'GB', icon: 'ri-flag-line' },
  { label: 'Germany', value: 'DE', icon: 'ri-flag-line' },
  { label: 'France', value: 'FR', icon: 'ri-flag-line' },
  { label: 'Japan', value: 'JP', icon: 'ri-flag-line' },
  { label: 'Canada', value: 'CA', icon: 'ri-flag-line' },
  { label: 'Australia', value: 'AU', icon: 'ri-flag-line' },
  { label: 'Brazil', value: 'BR', icon: 'ri-flag-line' },
  { label: 'India', value: 'IN', icon: 'ri-flag-line' },
  { label: 'China', value: 'CN', icon: 'ri-flag-line' },
];

export interface JBCCountryPickerProps extends Omit<JBCDropdownProps, 'options'> {}

/**
 * JBC Country Picker
 * Specialized selector for global localizations.
 */
export const JBCCountryPicker: React.FC<JBCCountryPickerProps> = (props) => {
  return <JBCDropdown {...props} options={COUNTRIES} placeholder={props.placeholder || "Select Country"} />;
};