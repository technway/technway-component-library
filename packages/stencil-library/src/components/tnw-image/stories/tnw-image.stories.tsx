import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-image');

export default {
  title: 'Components/Image',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Default Image
export const Standard = Template.bind({});
Standard.args = {
  src: 'https://via.placeholder.com/600?text=Placeholder+Image',
  alt: 'Placeholder Image',
};

// Image with Caption
export const ImageWithCaption = Template.bind({});
ImageWithCaption.args = {
  ...Standard.args,
  caption: 'This is a sample caption below the image.',
};

// Image with Custom Aspect Ratio
export const AspectRatioImage = Template.bind({});
AspectRatioImage.args = {
  ...Standard.args,
  aspectRatio: '16_9',
};

// Image with Object Fit (Cover)
export const ObjectFitCover = Template.bind({});
ObjectFitCover.args = {
  ...Standard.args,
  objectFit: 'cover',
  widthSize: 'lg',
  heightSize: 'sm',
};

// Lazy Loaded Image
export const LazyLoadedImage = Template.bind({});
LazyLoadedImage.args = {
  ...Standard.args,
  lazyLoading: true,
};

// Image with Custom Width and Height Sizes
export const CustomSizeImage = Template.bind({});
CustomSizeImage.args = {
  ...Standard.args,
  widthSize: 'lg',
  heightSize: 'lg',
};

// Image with Full Width and Height
export const FullSizeImage = Template.bind({});
FullSizeImage.args = {
  ...Standard.args,
  widthSize: 'full',
  heightSize: 'full',
};

// Small Image
export const SmallSizeImage = Template.bind({});
SmallSizeImage.args = {
  ...Standard.args,
  widthSize: 'sm',
  heightSize: 'sm',
};