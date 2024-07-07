'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RoomsToClean() {
  // This would typically come from an API
  const rooms = [
    { number: '101', status: 'Needs Cleaning', priority: 'High' },
    { number: '203', status: 'Needs Cleaning', priority: 'Medium' },
    { number: '305', status: 'Needs Cleaning', priority: 'Low' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Rooms to Clean</h1>
      <Card>
        <CardHeader>
          <CardTitle>Room List</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Room</th>
                <th className="text-left">Status</th>
                <th className="text-left">Priority</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.number}>
                  <td>{room.number}</td>
                  <td>{room.status}</td>
                  <td>{room.priority}</td>
                  <td>
                    <Button size="sm">Start Cleaning</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}