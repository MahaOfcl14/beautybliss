import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Leaf className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">BeautyBlissOfficial</CardTitle>
          </div>
          <CardDescription>Login or Register with your mobile number</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Mobile Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
            </div>
            <p className="text-xs text-muted-foreground">
              We'll send you an OTP for verification. This feature is for demonstration only.
            </p>
            <Button type="submit" className="w-full text-lg" disabled>
              Send OTP
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
