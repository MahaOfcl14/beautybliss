import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Beauty St." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Metropolis" />
              </div>
              <div>
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" placeholder="12345" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Mobile Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" />
            </div>
          </form>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This is a placeholder for Stripe payment gateway integration.
            </p>
            <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-4">
                    <CreditCard className="h-8 w-8 text-muted-foreground" />
                    <div className="flex-grow">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="•••• •••• •••• 4242" disabled />
                    </div>
                </div>
            </div>
            <Button size="lg" className="w-full mt-6 text-lg" disabled>
              <Lock className="mr-2 h-5 w-5" />
              Pay Securely
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Your payment information is secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
