import LinkButton from './LinkButton';

export default {
  title: 'LinkButton Component',
  component: LinkButton,
};

export const Primary = (args) => <LinkButton {...args} />;

Primary.args = {
  children: 'LogOut',
  onClick: () => {
    window.alert('Click Function');
  },
};
