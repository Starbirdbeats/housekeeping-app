'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StartInspection() {
  const [roomNumber, setRoomNumber] = useState('');

  const handleStartInspection = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to start inspection would go here
    console.log(`Starting inspection for room ${roomNumber}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Start Inspection</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter Room Number</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleStartInspection}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="roomNumber">Room Number</Label>
                <Input 
                  id="roomNumber"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  placeholder="Enter room number"
                />
              </div>
              <Button type="submit">Start Inspection</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}