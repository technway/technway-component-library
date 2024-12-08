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
<tnw-multi-row-carousel>
  <tnw-testimonial-card
 slot="row-1"
 author-name="1 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-1"
 author-name="2 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-1"
 author-name="3 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-1"
 author-name="4 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-1"
 author-name="5 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-2"
 author-name="6 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-2"
 author-name="7 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-2"
 author-name="8 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-2"
 author-name="9 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

<tnw-testimonial-card
 slot="row-2"
 author-name="10 John Doe"
 author-role="CEO"
 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et."
 use-glassmorphism-effect="true"
 use-random-avatar="true"
></tnw-testimonial-card>

</tnw-multi-row-carousel>
`;
export const Standard = Test.bind({});