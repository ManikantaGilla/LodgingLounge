
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";

interface PaymentFormProps {
  cardName: string;
  setCardName: (value: string) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  expiry: string;
  setExpiry: (value: string) => void;
  cvv: string;
  setCvv: (value: string) => void;
}

const PaymentForm = ({
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  expiry,
  setExpiry,
  cvv,
  setCvv,
}: PaymentFormProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center">
        <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
        <span>Secure payment processing</span>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="card-name">Name on Card*</Label>
          <Input 
            id="card-name" 
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="card-number">Card Number*</Label>
          <Input 
            id="card-number" 
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date*</Label>
            <Input 
              id="expiry" 
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV*</Label>
            <Input 
              id="cvv" 
              type="password" 
              placeholder="XXX"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
