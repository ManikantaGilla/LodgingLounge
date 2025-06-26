
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GuestInfoForm from "./GuestInfoForm";
import PaymentForm from "./PaymentForm";

interface BookingFormProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  cardName: string;
  setCardName: (value: string) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  expiry: string;
  setExpiry: (value: string) => void;
  cvv: string;
  setCvv: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  grandTotal: number;
}

const BookingForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  expiry,
  setExpiry,
  cvv,
  setCvv,
  onSubmit,
  isSubmitting,
  grandTotal,
}: BookingFormProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={onSubmit}>
          <GuestInfoForm
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
          
          <PaymentForm
            cardName={cardName}
            setCardName={setCardName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiry={expiry}
            setExpiry={setExpiry}
            cvv={cvv}
            setCvv={setCvv}
          />
          
          <div className="mt-8">
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : `Complete Booking - $${grandTotal.toFixed(2)}`}
            </Button>
            <p className="text-sm text-gray-500 mt-2 text-center">
              By clicking this button, you agree to our terms and conditions.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
