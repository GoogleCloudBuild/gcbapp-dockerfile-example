import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { cleanURL } from '../../utils/helpers';
import siteConfig from '../../utils/siteConfig';
import Validator from '../../utils/Validator';
import RadioGroup from '../RadioGroup';
import ShortTextField from '../ShortTextField';
import FormProgress from '../FormProgress';
import {
  FormError,
  SuccessStep,
  FormProgressWrapper,
  FormStep,
  BackButton,
  Heading,
  SubHeading,
  ClickToExpandText,
  ChevronUp,
  ChevronDown,
  MarkdownContainer,
  FieldSet,
  SubmitButton,
  NextButton,
} from './styles';

const FORM_ERROR_MESSAGE = 'Please make sure you have filled out all fields correctly before submitting';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      displayExpanded: [],
      values: {},
      defaultValues: {},
      errors: {},
      submitted: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onNextStep = this.onNextStep.bind(this);
    this.onPreviousStep = this.onPreviousStep.bind(this);
    this.validateField = this.validateField.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    const { formSteps } = data;
    const { values } = this.state;

    const displayExpanded = formSteps.map(() => false);

    const hashParams = Object.keys(queryString.parse(window.location.hash));
    const currentStep = parseInt(hashParams[0], 10) || 1;

    const params = queryString.parse(window.location.search);
    const newValues = Object.assign({}, values, params);

    this.setState({ values: newValues, displayExpanded, currentStep });

    this.validator = new Validator(data);

    cleanURL();
  }

  onChange(name, value, isDefault) {
    const { values, defaultValues } = this.state;
    if (isDefault) {
      defaultValues[name] = value;
      if (!values[name]) {
        values[name] = value;
      }
    } else {
      values[name] = value;
    }
    this.setState({ defaultValues, values });
  }

  onSubmit(event) {
    event.preventDefault();
    const errors = this.validateForm();
    if (!errors) {
      const data = Object.assign({}, this.state.values, {
        formType: this.props.data.type,
      });
      console.info(data);
      fetch(`${siteConfig.API}/form`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      this.setState({ submitted: true });
    }
  }

  onNextStep(event) {
    const { currentStep } = this.state;
    event.preventDefault();
    const errors = this.validateForm();
    if (!errors) {
      this.setState({ currentStep: currentStep + 1 });
    }
  }

  onPreviousStep(event) {
    event.preventDefault();
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep - 1 });
  }

  shouldDisplayField(displayConditions) {
    const { values } = this.state;
    const areFailingConditions = displayConditions
      .some(({ triggerField: [triggerField], fieldValues }) => {
        const fieldNameToCheck = triggerField.name || triggerField.value;
        return !fieldValues.includes(values[fieldNameToCheck]);
      });
    return !areFailingConditions;
  }

  validateField(field) {
    const { currentStep, values, errors } = this.state;
    const input = values[field.name];
    const validatorErrors = this.validator.validateField(input, field.name, currentStep);
    const updatedErrors = Object.assign({}, errors);
    if (!validatorErrors) {
      delete updatedErrors[field.name];
      this.setState({ errors: updatedErrors });
    }
  }

  validateForm() {
    const { currentStep, values } = this.state;
    const { data } = this.props;
    const stepNumber = currentStep === data.formSteps.length ? undefined : currentStep;
    const validatorErrors = this.validator.validateForm(values, stepNumber);
    if (validatorErrors) {
      this.setState({ errors: validatorErrors });
    } else {
      this.setState({ errors: {} });
    }
    return validatorErrors;
  }

  toggleExpanded(index) {
    const { displayExpanded } = this.state;
    const currentState = displayExpanded[index];
    let newDisplayExpanded = displayExpanded
      .slice(0, index);
    newDisplayExpanded.push(!currentState);
    newDisplayExpanded = newDisplayExpanded.concat(displayExpanded.slice(index + 1));
    this.setState({ displayExpanded: newDisplayExpanded });
  }

  renderFormFieldGroup(field) {
    const { contentful_id: id, fieldType, name } = field;
    const { values, errors } = this.state;
    const { data: { type } } = this.props;

    switch (fieldType) {
      case 'radio': return (
        <RadioGroup
          key={id}
          data={field}
          selectedValue={values[name]}
          errors={errors[name]}
          onChange={this.onChange}
          formId={this.props.data.type}
        />
      );
      case 'checkbox': return (
        <div key={id}>
          {field.label || name}
        </div>
      );
      case 'search': return (
        <ShortTextField
          key={id}
          data={field}
          onChange={this.onChange}
          validate={this.validateField}
          formId={type}
          value={values[name] || ''}
          errors={errors[name]}
        />
      );
      case 'dropdown': return (
        <ShortTextField
          key={id}
          data={field}
          onChange={this.onChange}
          validate={this.validateField}
          formId={type}
          value={values[name] || ''}
          errors={errors[name]}
        />
      );
      default: return (
        <div key={id}>
          {field.label || name}
        </div>
      );
    }
  }

  renderFormFieldText(field) {
    const { contentful_id: id, fieldType, name } = field;
    const { values, errors } = this.state;
    const { data: { type } } = this.props;

    switch (fieldType) {
      case 'long': return (
        <ShortTextField
          key={id}
          data={field}
          onChange={this.onChange}
          validate={this.validateField}
          formId={type}
          value={values[name] || ''}
          errors={errors[name]}
        />
      );
      default: return (
        <ShortTextField
          key={id}
          data={field}
          onChange={this.onChange}
          validate={this.validateField}
          formId={type}
          value={values[name] || ''}
          errors={errors[name]}
        />
      );
    }
  }

  renderFormField(field) {
    const { internal: { type }, contentful_id: id, displayConditions } = field;
    const { values, errors } = this.state;
    const typePrefix = 'ContentfulFormField';

    if (displayConditions && !this.shouldDisplayField(displayConditions)) { return null; }

    switch (type) {
      case `${typePrefix}Group`: return this.renderFormFieldGroup(field);
      case `${typePrefix}Text`: return this.renderFormFieldText(field);
      case `${typePrefix}Upload`: return (
        <div key={id}>
          {field.label || field.name}
        </div>
      );
      default: return (
        <ShortTextField
          key={id}
          data={field}
          onChange={this.onChange}
          validate={this.validateField}
          formId={type}
          value={values[field.name] || ''}
          errors={errors[field.name]}
        />
      );
    }
  }

  renderFormStep(step, index, display, expanded) {
    const {
      heading, collapsedText, clickToExpandText, expandedText, legend, description, formFields,
    } = step;
    const { displayType, data: { formSteps }, submitText } = this.props;
    const { currentStep } = this.state;

    return (
      <FormStep display={display} key={step.contentful_id}>
        {displayType === 'showOneStep' && (
          <FormProgressWrapper>
            <FormProgress currentStepNumber={index + 1} totalStepNumber={formSteps.length} />
          </FormProgressWrapper>
        )}
        {displayType === 'showOneStep' && index !== 0 && (
          <BackButton onClick={(e) => this.onPreviousStep(e, index)}>
            Back
          </BackButton>
        )}
        {heading && (
          <Heading>
            {heading}
          </Heading>
        )}
        {(collapsedText || clickToExpandText) && (
          <SubHeading>
            {collapsedText && <span>{collapsedText}{' '}</span>}
            {clickToExpandText && (
              <ClickToExpandText onClick={() => this.toggleExpanded(index)}>
                {clickToExpandText}{expanded ? <ChevronUp /> : <ChevronDown />}
              </ClickToExpandText>
            )}
          </SubHeading>
        )}
        {expandedText && (
          <MarkdownContainer display={expanded}>
            {expandedText.expandedText}
          </MarkdownContainer>
        )}
        <FieldSet>
          {description && (
            <legend>
              {description}
            </legend>
          )}
          {formFields.length && formFields.map((field) => this.renderFormField(field))}
        </FieldSet>
        {index === formSteps.length - 1
          ? <SubmitButton>{submitText}</SubmitButton>
          : ((displayType === 'showOneStep' && <NextButton onClick={this.onNextStep}>Next</NextButton>)
            || (displayType === 'appendStep' && currentStep === index + 1 && (
              <NextButton onClick={this.onNextStep} />
            )))}
      </FormStep>
    );
  }

  renderSubmissionSuccess() {
    const { data: { formSteps }, displayType } = this.props;
    return (
      <SuccessStep>
        {displayType === 'showOneStep' && (
          <FormProgressWrapper>
            <FormProgress currentStepNumber={formSteps.length + 1} totalStepNumber={formSteps.length} />
          </FormProgressWrapper>
        )}
        <Heading>
          Thanks for booking!
        </Heading>
        <SubHeading>
          {'We really appreciate you taking the time. We\'ll be in contact shortly. :)'}
        </SubHeading>
        <SubHeading>
          {'Meanwhile, follow us on our social media channels'}
        </SubHeading>
      </SuccessStep>
    );
  }

  render() {
    const { data: { formSteps, type }, displayType } = this.props;
    const {
      displayExpanded,
      errors,
      currentStep,
      submitted,
    } = this.state;

    const showStep = (stepNumber) => {
      if (displayType === 'showOneStep') { return stepNumber === currentStep; }
      if (displayType === 'appendStep') { return stepNumber <= currentStep; }
      return true;
    };

    return submitted
      ? (this.renderSubmissionSuccess())
      : (
        <form id={type} onSubmit={this.onSubmit}>
          {formSteps.map((step, index) => this.renderFormStep(
            step,
            index,
            showStep(index + 1),
            displayExpanded[index]
          ))}
          {!!(Object.keys(errors).length) && <FormError>{FORM_ERROR_MESSAGE}</FormError>}
        </form>
      );
  }
}

Form.propTypes = {
  displayType: PropTypes.string,
  submitText: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default Form;
