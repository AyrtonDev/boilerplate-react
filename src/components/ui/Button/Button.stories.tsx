import { Story, Meta } from '@storybook/react';
import {
  Container,
  SubContainer,
} from '../../../utils/storyComponents/Container';

import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {},
};

const argsProps: ButtonProps = {};

export default meta;

const Template: Story<ButtonProps & { text: string }> = args => (
  <Container style={{ marginLeft: 15 }}>
    <SubContainer>
      <Button {...args}>{args.text}</Button>
    </SubContainer>
  </Container>
);

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
};

Default.args = { text: 'Teste', ...argsProps };
