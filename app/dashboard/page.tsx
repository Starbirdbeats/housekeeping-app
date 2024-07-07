'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  // Placeholder data - in a real app, this would come from an API or database
  const stats = {
    roomsCleaned: 12,
    totalRooms: 20,
    inspectionsDone: 8,
    totalInspections: 15,
    tasksRemaining: 5
  };

  const roomsNeedingAttention = [
    { number: '101', status: 'Needs Cleaning', priority: 'High' },
    { number: '203', status: 'Ready for Inspection', priority: 'Medium' },
    { number: '305', status: 'Maintenance Required', priority: 'Low' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, [User Name]</h1>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rooms Cleaned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.roomsCleaned} / {stats.totalRooms}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inspections Done</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.inspectionsDone} / {stats.totalInspections}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasks Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.tasksRemaining}</p>
          </CardContent>
        </Card>
      </div>

      {/* Rooms needing attention */}
      <Card>
        <CardHeader>
          <CardTitle>Rooms Needing Attention</CardTitle>
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
              {roomsNeedingAttention.map((room) => (
                <tr key={room.number}>
                  <td>{room.number}</td>
                  <td>{room.status}</td>
                  <td>{room.priority}</td>
                  <td>
                    <Button size="sm">View</Button>
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