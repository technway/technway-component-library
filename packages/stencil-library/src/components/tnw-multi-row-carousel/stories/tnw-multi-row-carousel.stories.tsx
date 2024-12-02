import { generateComponentArgTypes, getComponentByTagName } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-multi-row-carousel');

export default {
  title: 'Components/Multi Row Carousel',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'beta', // 'beta', 'stable', 'deprecated', 'releaseCandidate'
    },
  },
  argTypes: generateComponentArgTypes(component),
};

// const Template = (args) => getComponentTemplate(args, component);

const Test = () =>  `
<tnw-multi-row-carousel rows="3" animation-speed="8000">
  <div>MY Item 1</div>
  <div>MY Item 2</div>
  <div>MY Item 3</div>
  <div>MY Item 4</div>
  <div>Item scsaada 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
</tnw-multi-row-carousel>
`;
export const Standard = Test.bind({});
// Standard.args = {
// };