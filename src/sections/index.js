import AngledSection from './Angled';
import FormSection from './Form';
import GridSection from './Grid';
import ImageSection from './Image';
import InverseAngledSection from './InverseAngled';
import HeadingSection from './Heading';
import TextSection from './Text';
import WidgetSection from './Widget';

const componentMappings = {
  ContentfulSectionAngled: AngledSection,
  ContentfulSectionAngledInverse: InverseAngledSection,
  ContentfulSectionForm: FormSection,
  ContentfulSectionGrid: GridSection,
  ContentfulSectionHeading: HeadingSection,
  ContentfulSectionImage: ImageSection,
  ContentfulSectionText: TextSection,
  ContentfulSectionWidget: WidgetSection,
};

const getSectionComponent = (type) => componentMappings[type];

export default getSectionComponent;
