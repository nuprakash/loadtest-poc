import Panel from '@UI/panel/Panel';

export default {
  title: 'Panel Component',
  component: Panel,
};

export const Primary = (args) => <Panel {...args} />;

Primary.args = {
  children: (
    <>
      <Panel.Head>
        <h4>VIP FAMILY</h4>
      </Panel.Head>
      <Panel.Body>
        <p>VIP Family Member </p>
      </Panel.Body>
    </>
  ),
};
