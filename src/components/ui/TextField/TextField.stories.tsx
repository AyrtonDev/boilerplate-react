import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';
import {
  Container,
  SubContainer,
} from '../../../utils/storyComponents/Container';

import TextField from './TextField';
import { TextFieldProps } from './TextField.types';

const meta: Meta = {
  title: 'UI/TextField',
  component: TextField,
  argTypes: {},
};

const argsProps: TextFieldProps = {};

export default meta;

const Template: ComponentStory<typeof TextField> = args => (
  <Container style={{ marginLeft: 15 }}>
    <SubContainer>
      <TextField {...args} />
    </SubContainer>
  </Container>
);

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
};

Default.args = {
  placeholder: 'Placeholder',
  label: 'Text Field',
  ...argsProps,
};
