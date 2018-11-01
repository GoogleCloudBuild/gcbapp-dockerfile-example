import validate from 'validate.js';

const PHONE_NUMBER_LENGTH = 7;

const supportedValidationTypes = {
  email: [
    { name: 'email', options: {} },
  ],
  phone: [
    { name: 'format', options: { pattern: '[0-9-()+ ]+' } },
    {
      name: 'length',
      options: {
        minimum: PHONE_NUMBER_LENGTH,
        message: `Please provide at least ${PHONE_NUMBER_LENGTH} digits`,
        tokenizer: (value) => value.match(/[0-9]/g) || [],
      },
    },
  ],
  dob: [
    { name: 'format', options: { pattern: '' } },
  ],
  postcode: [
    { name: 'format', options: { pattern: '[A-Z0-9-() ]+', flags: 'i' } },
  ],
};

const sortByStepNumber = (a, b) => {
  if (a.stepNumber < b.stepNumber) { return -1; }
  return 1;
};

const createFieldConfig = (field) => {
  const config = { constraints: {} };

  if (field.validation) {
    const {
      type,
      required,
      emptyErrorMessage,
      invalidErrorMessage,
    } = field.validation;

    if (required) {
      config.constraints.presence = {
        message: emptyErrorMessage,
        allowEmpty: false,
      };
    }

    if (type) {
      const typeConfig = supportedValidationTypes[type];
      typeConfig.forEach((validator) => {
        config.constraints[validator.name] = Object.assign({}, { message: invalidErrorMessage }, validator.options);
      });
    }

    if (field.displayConditions) {
      config.conditions = field.displayConditions.slice(0);
    }
  }

  return config;
};

const shouldValidateField = (fieldConditions, values) => {
  if (!fieldConditions) {
    return true;
  }

  const areFailingConditions = fieldConditions
    .some(({ triggerField: [triggerField], fieldValues }) => {
      const fieldNameToCheck = triggerField.name || triggerField.value;
      return !fieldValues.includes(values[fieldNameToCheck]);
    });

  return !areFailingConditions;
};

class Validator {
  constructor(form) {
    this.form = form;

    this.validatorOptions = {
      fullMessages: false,
    };

    this.createFormConfig();
  }

  createFormConfig() {
    const config = [];

    this.form.formSteps.forEach((step, index) => {
      config.push({ stepNumber: index + 1, fields: {} });
      step.formFields.forEach((field) => {
        config[index].fields[field.name] = createFieldConfig(field);
      });
    });

    this.config = config;
  }

  consolidateConfig(validateUpToStepNumber, values) {
    this.config.sort(sortByStepNumber);
    const stepsToUse = this.config.slice(0, validateUpToStepNumber);

    const getFilteredFieldValidations = (currentStep) => {
      const { fields } = currentStep;
      const filteredFields = Object.assign({}, fields);

      Object.keys(fields).forEach((fieldName) => {
        const field = filteredFields[fieldName];
        const shouldValidate = shouldValidateField(field.conditions, values);

        if (shouldValidate) {
          filteredFields[fieldName] = field.constraints;
        } else {
          delete filteredFields[fieldName];
        }
      });

      return filteredFields;
    };

    return stepsToUse.reduce((acc, curr) => ({ ...acc, ...getFilteredFieldValidations(curr) }), {});
  }

  validateForm(input, stepNumber) {
    const constraints = this.consolidateConfig(stepNumber, input);

    return validate(input, constraints, this.validatorOptions);
  }

  validateField(input, fieldName, stepNumber) {
    const stepConstraints = this.config.find((stepConfig) => stepConfig.stepNumber === stepNumber).fields;
    const fieldConstraints = { [fieldName]: stepConstraints[fieldName].constraints };
    const fieldInput = { [fieldName]: input };

    return validate(fieldInput, fieldConstraints, this.validatorOptions);
  }
}

export default Validator;
