import React from 'react';
import { JBCDropdown, JBCDropdownProps, DropdownOption } from './Dropdown';

const TIMEZONES: DropdownOption[] = [
  { label: '(GMT-08:00) Pacific Time', value: 'PT', icon: 'ri-time-line' },
  { label: '(GMT-05:00) Eastern Time', value: 'ET', icon: 'ri-time-line' },
  { label: '(GMT+00:00) UTC / London', value: 'UTC', icon: 'ri-time-line' },
  { label: '(GMT+01:00) Central Europe', value: 'CET', icon: 'ri-time-line' },
  { label: '(GMT+08:00) Singapore / HK', value: 'SGT', icon: 'ri-time-line' },
  { label: '(GMT+09:00) Tokyo / Seoul', value: 'JST', icon: 'ri-time-line' },
];

export interface JBCTimezonePickerProps extends Omit<JBCDropdownProps, 'options'> {}

/**
 * JBC Timezone Picker
 * Standardized timezone offset selector.
 */
export const JBCTimezonePicker: React.FC<JBCTimezonePickerProps> = (props) => {
  return <JBCDropdown {...props} options={TIMEZONES} placeholder={props.placeholder || "Select Timezone"} />;
};