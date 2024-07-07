import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome to Hotel Housekeeping</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please log in to access the housekeeping management system.</p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/login">Log In</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}