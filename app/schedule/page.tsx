'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DailySchedule() {
  // This would typically come from an API
  const schedule = [
    { time: '09:00 AM', task: 'Clean rooms 101-105' },
    { time: '11:00 AM', task: 'Inspect rooms 201-205' },
    { time: '02:00 PM', task: 'Clean rooms 301-305' },
    { time: '04:00 PM', task: 'Staff meeting' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Daily Schedule</h1>
      <Card>
        <CardHeader>
          <CardTitle>{"Today's Tasks"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {schedule.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span className="font-semibold">{item.time}</span>
                <span>{item.task}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}