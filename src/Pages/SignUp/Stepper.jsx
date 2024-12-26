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

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <FormControl fullWidth margin="normal">
              <InputLabel>Agent Category</InputLabel>
              <Select
                name="agentCategory"
                value={formData.agentCategory}
                onChange={handleChange}
              >
                <MenuItem value="Category1">Category1</MenuItem>
                <MenuItem value="Category2">Category2</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Agent Type</InputLabel>
              <Select
                name="agentType"
                value={formData.agentType}
                onChange={handleChange}
              >
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Partner ID"
              name="partnerID"
              value={formData.partnerID}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Contact No"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Alt Contact No"
              name="altContactNo"
              value={formData.altContactNo}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Alt Email"
              name="altEmail"
              value={formData.altEmail}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Tax ID/PAN"
              name="taxID"
              value={formData.taxID}
              onChange={handleChange}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>Identification Type</InputLabel>
              <Select
                name="identificationType"
                value={formData.identificationType}
                onChange={handleChange}
              >
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Identification No"
              name="identificationNo"
              value={formData.identificationNo}
              onChange={handleChange}
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <TextField
              fullWidth
              margin="normal"
              label="Address Line 1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Address Line 2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <MenuItem value="Country1">Country1</MenuItem>
                <MenuItem value="Country2">Country2</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>County</InputLabel>
              <Select
                name="county"
                value={formData.county}
                onChange={handleChange}
              >
                <MenuItem value="County1">County1</MenuItem>
                <MenuItem value="County2">County2</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Mobile No"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Alt Mobile No"
              name="altMobileNo"
              value={formData.altMobileNo}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Opening Time"
              name="openingTime"
              value={formData.openingTime}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Closing Time"
              name="closingTime"
              value={formData.closingTime}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Break Start Time"
              name="breakStartTime"
              value={formData.breakStartTime}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Break End Time"
              name="breakEndTime"
              value={formData.breakEndTime}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Weekly Holiday"
              name="weeklyHoliday"
              value={formData.weeklyHoliday}
              onChange={handleChange}
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <TextField
              fullWidth
              margin="normal"
              label="Account Holder Name"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Branch Name"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Account No"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Branch Code"
              name="branchCode"
              value={formData.branchCode}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="License Code"
              name="licenseCode"
              value={formData.licenseCode}
              onChange={handleChange}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>License Country</InputLabel>
              <Select
                name="licenseCountry"
                value={formData.licenseCountry}
                onChange={handleChange}
              >
                <MenuItem value="Country1">Country1</MenuItem>
                <MenuItem value="Country2">Country2</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>License State</InputLabel>
              <Select
                name="licenseState"
                value={formData.licenseState}
                onChange={handleChange}
              >
                <MenuItem value="State1">State1</MenuItem>
                <MenuItem value="State2">State2</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Service Tax No./GST No"
              name="gstNo"
              value={formData.gstNo}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Taxonomy Code"
              name="taxonomyCode"
              value={formData.taxonomyCode}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="EIN"
              name="ein"
              value={formData.ein}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Date Of Inauguration"
              type="date"
              name="dateOfInauguration"
              value={formData.dateOfInauguration}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>Inauguration Country</InputLabel>
              <Select
                name="inaugurationCountry"
                value={formData.inaugurationCountry}
                onChange={handleChange}
              >
                <MenuItem value="Country1">Country1</MenuItem>
                <MenuItem value="Country2">Country2</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Inauguration State</InputLabel>
              <Select
                name="inaugurationState"
                value={formData.inaugurationState}
                onChange={handleChange}
              >
                <MenuItem value="State1">State1</MenuItem>
                <MenuItem value="State2">State2</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Website URL"
              name="websiteURL"
              value={formData.websiteURL}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Date Of Enumeration"
              type="date"
              name="dateOfEnumeration"
              value={formData.dateOfEnumeration}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box marginTop={3}>{renderStepContent(activeStep)}</Box>
      <Box marginTop={2} display="flex" justifyContent="space-between">
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
  );
};

export default StepperForm;
