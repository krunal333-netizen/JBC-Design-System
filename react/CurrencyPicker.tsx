import React from 'react';
import { JBCDropdown, JBCDropdownProps, DropdownOption } from './Dropdown';

const CURRENCIES: DropdownOption[] = [
  { label: 'JBC Token', value: 'JBC', icon: 'ri-coin-line' },
  { label: 'Ethereum', value: 'ETH', icon: 'ri-eth-line' },
  { label: 'Bitcoin', value: 'BTC', icon: 'ri-btc-line' },
  { label: 'US Dollar', value: 'USD', icon: 'ri-money-dollar-circle-line' },
  { label: 'Euro', value: 'EUR', icon: 'ri-money-euro-circle-line' },
  { label: 'Pound Sterling', value: 'GBP', icon: 'ri-money-pound-circle-line' },
];

export interface JBCCurrencyPickerProps extends Omit<JBCDropdownProps, 'options'> {}

/**
 * JBC Currency Picker
 * Asset selector for trading and portfolio views.
 */
export const JBCCurrencyPicker: React.FC<JBCCurrencyPickerProps> = (props) => {
  return <JBCDropdown {...props} options={CURRENCIES} placeholder={props.placeholder || "Select Currency"} />;
};