/*
// This component is used for component switching from content type. Do not use for theme switching.
*/

const React = require('react');
const UnsupportedElementWarning = require('../components/UnsupportedElementWarning');

// TODO: Test file - I had trouble with this because I don't know what babel presets gatsby is
// using in order to help mocha understand jsx syntax. ~ Shavaun

class ComponentSwitch {
  constructor({ cases, parent, caseProperty }) {
    this.cases = {};
    this.caseProperty = caseProperty;

    this.addCases(cases);
    this.setParent(parent);

    this.default = (debugProps) => <UnsupportedElementWarning {...debugProps} />;
  }

  // cases: { contentfulContentType: (content, props, index) => <ReactComponent />, ... }
  addCases(cases) {
    this.cases = Object.assign({}, this.cases, cases);
  }

  setParent(parent) {
    this.parent = parent || {};
  }

  // Default is to get content type from internal.type or __typename
  // Pass in an override to the constructor called caseProperty to change which property is used
  // to retrieve the case key
  findCaseFromContentProperty(content) {
    if (!content) {
      return '';
    }
    if (this.caseProperty) {
      return content[this.caseProperty];
    }
    return (content.internal && content.internal.type) || content.__typename;
  }

  // Returns the result of the function associated with the relevant switch case
  switch(content, extraProps, index) {
    const type = this.findCaseFromContentProperty(content) || 'This content';
    const parentType = this.findCaseFromContentProperty(this.parent) || '';

    const createComponent = this.cases[type];

    return createComponent
      ? createComponent(content, extraProps, index)
      : this.default({
        key: content.contentful_id || `${type}-${index}`,
        unsupported: type,
        parent: parentType,
        id: content.contentful_id,
        contentTheme: this.parent && this.parent.theme,
        index,
      });
  }
}

export default ComponentSwitch;
