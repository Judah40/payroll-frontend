
import React, { useState } from 'react';
import { UserPlus, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddEmployeeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    employeeType: '',
    employeeName: '',
    paymentMethod: '',
    paymentId: '',
    // Step 2
    salaryAmount: '',
    tax: '',
    bankAccountNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      employeeType: value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
    setCurrentStep(1);
    // Reset form data here if needed
  };

  const Form1 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Employee Type</Label>
        <RadioGroup
          value={formData.employeeType}
          onValueChange={handleRadioChange}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fulltime" id="fulltime" />
            <Label htmlFor="fulltime">Full Time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="contract" id="contract" />
            <Label htmlFor="contract">Contract</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="parttime" id="parttime" />
            <Label htmlFor="parttime">Part Time</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="employeeName">Employee Name</Label>
        <Input
          id="employeeName"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleInputChange}
          placeholder="Enter employee name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Input
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          placeholder="Enter payment method"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentId">Payment ID</Label>
        <Input
          id="paymentId"
          name="paymentId"
          value={formData.paymentId}
          onChange={handleInputChange}
          placeholder="Enter payment ID"
        />
      </div>
    </div>
  );

  const Form2 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="salaryAmount">Salary Amount</Label>
        <Input
          id="salaryAmount"
          name="salaryAmount"
          type="number"
          value={formData.salaryAmount}
          onChange={handleInputChange}
          placeholder="Enter salary amount"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tax">Tax</Label>
        <Input
          id="tax"
          name="tax"
          type="number"
          value={formData.tax}
          onChange={handleInputChange}
          placeholder="Enter tax amount"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
        <Input
          id="bankAccountNumber"
          name="bankAccountNumber"
          value={formData.bankAccountNumber}
          onChange={handleInputChange}
          placeholder="Enter bank account number"
        />
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Add Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {currentStep === 1 ? "Basic Information" : "Financial Information"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {currentStep === 1 ? <Form1 /> : <Form2 />}

          <div className="flex justify-end gap-2 pt-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            {currentStep < 2 ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!formData.employeeType || !formData.employeeName}
              >
                Next
              </Button>
            ) : (
              <Button 
                type="submit"
                disabled={!formData.salaryAmount || !formData.bankAccountNumber}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmployeeModal;