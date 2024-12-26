import React, { useState } from 'react';
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

const steps = ['Personal Details', 'Address Details', 'Other Details'];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    agentCategory: '',
    agentType: '',
    partnerID: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    altEmail: '',
    taxID: '',
    identificationType: '',
    identificationNo: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    county: '',
    name: '',
    mobileNo: '',
    altMobileNo: '',
    openingTime: '',
    closingTime: '',
    breakStartTime: '',
    breakEndTime: '',
    weeklyHoliday: '',
    accountHolderName: '',
    bankName: '',
    branchName: '',
    accountNo: '',
    branchCode: '',
    licenseCode: '',
    licenseCountry: '',
    licenseState: '',
    gstNo: '',
    taxonomyCode: '',
    ein: '',
    dateOfInauguration: '',
    inaugurationCountry: '',
    inaugurationState: '',
    websiteURL: '',
    dateOfEnumeration: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderInputField = (label, name, type = 'text', options = null) => {
    return options ? (
      <FormControl fullWidth className='w-48' margin="normal" variant="standard">
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={formData[name]}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    ) : (
      <TextField
        fullWidth
        margin="normal"
        variant="standard"
        label={label}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        style={{ maxWidth: '20rem' }}
      />
    );
  };

  const renderStepContent = (step) => {
    const personalDetailsFields = [
      { label: 'Agent Category', name: 'agentCategory', options: [{ value: 'Category1', label: 'Category1' }, { value: 'Category2', label: 'Category2' }] },
      { label: 'Agent Type', name: 'agentType', options: [{ value: 'Type1', label: 'Type1' }, { value: 'Type2', label: 'Type2' }] },
      { label: 'Name', name: 'name' },
      { label: 'Partner ID', name: 'partnerID' },
      { label: 'Combination Partner ID', name: 'combinationpartnerID' },
      { label: 'Tax ID/PAN', name: 'taxID' },
      { label: 'Contact No', name: 'contactNo' },
      { label: 'Alt Contact No', name: 'altContactNo' },
      { label: 'Email', name: 'email' },
      { label: 'Alt Email', name: 'altEmail' },
      { label: 'Identification Type', name: 'identificationType', options: [{ value: 'Type1', label: 'Type1' }, { value: 'Type2', label: 'Type2' }] },
      { label: 'Identification No', name: 'identificationNo' },
    ];

    const addressDetailsFields = [
      { label: 'Address Line 1', name: 'addressLine1' },
      { label: 'Address Line 2', name: 'addressLine2' },
      { label: 'Country', name: 'country', options: [{ value: 'Country1', label: 'Country1' }, { value: 'Country2', label: 'Country2' }] },
      { label: 'County', name: 'county', options: [{ value: 'County1', label: 'County1' }, { value: 'County2', label: 'County2' }] },
      { label: 'Name', name: 'name' },
      { label: 'Mobile No', name: 'mobileNo' },
      { label: 'Alt Mobile No', name: 'altMobileNo' },
      { label: 'Opening Time', name: 'openingTime' },
      { label: 'Closing Time', name: 'closingTime' },
      { label: 'Break Start Time', name: 'breakStartTime' },
      { label: 'Break End Time', name: 'breakEndTime' },
      { label: 'Weekly Holiday', name: 'weeklyHoliday' },
    ];

    const otherDetailsFields = [
      { label: 'Account Holder Name', name: 'accountHolderName' },
      { label: 'Bank Name', name: 'bankName' },
      { label: 'Branch Name', name: 'branchName' },
      { label: 'Account No', name: 'accountNo' },
      { label: 'Branch Code', name: 'branchCode' },
      { label: 'License Code', name: 'licenseCode' },
      { label: 'License Country', name: 'licenseCountry', options: [{ value: 'Country1', label: 'Country1' }, { value: 'Country2', label: 'Country2' }] },
      { label: 'License State', name: 'licenseState', options: [{ value: 'State1', label: 'State1' }, { value: 'State2', label: 'State2' }] },
      { label: 'Service Tax No./GST No', name: 'gstNo' },
      { label: 'Taxonomy Code', name: 'taxonomyCode' },
      { label: 'EIN', name: 'ein' },
      { label: 'Date Of Inauguration', name: 'dateOfInauguration', type: 'date' },
      { label: 'Inauguration Country', name: 'inaugurationCountry', options: [{ value: 'Country1', label: 'Country1' }, { value: 'Country2', label: 'Country2' }] },
      { label: 'Inauguration State', name: 'inaugurationState', options: [{ value: 'State1', label: 'State1' }, { value: 'State2', label: 'State2' }] },
      { label: 'Website URL', name: 'websiteURL' },
      { label: 'Date Of Enumeration', name: 'dateOfEnumeration', type: 'date' },
    ];

    const stepFields = [personalDetailsFields, addressDetailsFields, otherDetailsFields][step];
    return (
      <Box display="flex" flexWrap="wrap" gap={1} justifyContent="center">
        {stepFields.map((field) => (
          <Box key={field.name} width="calc(45% - 16px)">
            {renderInputField(field.label, field.name, field.type, field.options)}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box style={{ backgroundColor: "#E2366A" }}>
      <h3 className='text-white text-center'>Sign Up</h3>
      <Box className="pt-1 pl-20 pr-20 pb-1">
        <Stepper activeStep={activeStep} alternativeLabel style={{ paddingTop: "15px", marginBottom: "12px", color: "white", backgroundColor: "white", borderRadius: "2rem", padding: "1rem" }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{ color: 'white' }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box style={{ backgroundColor: "white", borderRadius: "2rem", paddingTop: "1px" }}>
          <Box marginTop={3} className="pl-10 pr-10" style={{ backgroundColor: "white" }}>{renderStepContent(activeStep)}</Box>
          <Box marginTop={2} display="flex" justifyContent="space-between" paddingX={4} paddingY={1}>
            <Button
              variant="contained"
              color="secondary"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepperForm;
