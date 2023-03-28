import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './styled-input';
import { NintexStyledInput } from './styled-input';

export default {
  title: 'Styled Input',
  component: 'form-plugin-styled-input',
  parameters: {
    actions: {
      handles: ['ntx-value-change'],
    },
  },
} as Meta;

const Template: Story<NintexStyledInput> = ({ value, readOnly }) => {
  return html` <form-plugin-styled-input
    .value="${value}"
    .readOnly="${readOnly}"
  ></form-plugin-styled-input>`;
};

export const Base: Story<NintexStyledInput> = Template.bind({});
Base.args = {
  value: 'my value',
};
