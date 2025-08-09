import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Package, LogOut } from "lucide-react";

export default function AccountPage() {
  const orders = [
    { id: 'ORD12345', date: '2024-05-20', total: 'Rs. 798', status: 'Delivered' },
    { id: 'ORD12346', date: '2024-05-22', total: 'Rs. 299', status: 'Shipped' },
    { id: 'ORD12347', date: '2024-05-24', total: 'Rs. 499', status: 'Pending' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@example.com</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
                <Button variant="outline" className="w-full">Edit Profile</Button>
                <Button variant="destructive" className="w-full mt-2">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View the status of your recent orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id}>
                    <div className="flex justify-between items-center">
                      <div className="font-semibold">
                        {order.id}
                        <p className="text-sm text-muted-foreground font-normal">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{order.total}</p>
                        <p className={`text-sm font-medium ${
                          order.status === 'Delivered' ? 'text-green-600' :
                          order.status === 'Shipped' ? 'text-blue-600' : 'text-orange-600'
                        }`}>{order.status}</p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
