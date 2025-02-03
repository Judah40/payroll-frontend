import React, { useState } from "react";
import { UserPlus } from "lucide-react";
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

  // Separate states for each field
  const [employeeType, setEmployeeType] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [salaryAmount, setSalaryAmount] = useState("");
  const [tax, setTax] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");

  // Separate handlers for each input field
  const handleEmployeeNameChange = React.useCallback((e) => {
    setEmployeeName(e.target.value);
    console.log(e.target.value);
  });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentIdChange = (e) => {
    setPaymentId(e.target.value);
  };

  const handleSalaryAmountChange = (e) => {
    setSalaryAmount(e.target.value);
  };

  const handleTaxChange = (e) => {
    setTax(e.target.value);
  };

  const handleBankAccountNumberChange = (e) => {
    setBankAccountNumber(e.target.value);
  };

  const handleRadioChange = (value) => {
    setEmployeeType(value);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      employeeType,
      employeeName,
      paymentMethod,
      paymentId,
      salaryAmount,
      tax,
      bankAccountNumber,
    };
    console.log("Form submitted:", formData);

    // Reset all states
    setIsOpen(false);
    setCurrentStep(1);
    setEmployeeType("");
    setEmployeeName("");
    setPaymentMethod("");
    setPaymentId("");
    setSalaryAmount("");
    setTax("");
    setBankAccountNumber("");
  };

  const Form1 = React.memo(() => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Employee Type</Label>
        <RadioGroup
          value={employeeType}
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
          value={employeeName}
          onChange={handleEmployeeNameChange}
          placeholder="Enter employee name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Input
          id="paymentMethod"
          name="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          placeholder="Enter payment method"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentId">Payment ID</Label>
        <Input
          id="paymentId"
          name="paymentId"
          value={paymentId}
          onChange={handlePaymentIdChange}
          placeholder="Enter payment ID"
        />
      </div>
    </div>
  ));

  const Form2 = React.memo(() => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="salaryAmount">Salary Amount</Label>
        <Input
          id="salaryAmount"
          name="salaryAmount"
          type="number"
          value={salaryAmount}
          onChange={handleSalaryAmountChange}
          placeholder="Enter salary amount"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tax">Tax</Label>
        <Input
          id="tax"
          name="tax"
          type="number"
          value={tax}
          onChange={handleTaxChange}
          placeholder="Enter tax amount"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
        <Input
          id="bankAccountNumber"
          name="bankAccountNumber"
          value={bankAccountNumber}
          onChange={handleBankAccountNumberChange}
          placeholder="Enter bank account number"
        />
      </div>
    </div>
  ));

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
          <div>
            {currentStep === 1 && <Form1 />}
            {currentStep === 2 && <Form2 />}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            {currentStep < 2 ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!employeeType || !employeeName}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!salaryAmount || !bankAccountNumber}
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
