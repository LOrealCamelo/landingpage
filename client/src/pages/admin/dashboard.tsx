import React from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function AdminDashboard() {
  return (
    <div className="bg-dark-900 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link href="/admin/login">
            <Button variant="outline">Logout</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Inquiries</h2>
            <p className="text-gray-400 mb-4">Manage customer inquiries and support requests</p>
            <Link href="/admin/inquiries">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                Manage Inquiries
              </Button>
            </Link>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-400 mb-4">View website performance and customer analytics</p>
            <Link href="/admin/analytics">
              <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600">
                View Analytics
              </Button>
            </Link>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Content</h2>
            <p className="text-gray-400 mb-4">Manage website content and case studies</p>
            <Link href="/admin/content">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                Manage Content
              </Button>
            </Link>
          </Card>
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
            <h2 className="text-xl font-semibold mb-4">Recent Inquiries</h2>
            <RecentInquiries />
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
            <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
            <div className="text-gray-400">
              <p>Dashboard activity overview will appear here.</p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

interface Inquiry {
  id: string;
  subject: string;
  name: string;
  email: string;
  status: string;
}

function RecentInquiries() {
  const { data, isLoading, error } = useQuery<Inquiry[]>({
    queryKey: ['/api/admin/inquiries']
  });

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-900 rounded-md p-4 text-red-300">
        Error loading inquiries. Please try again later.
      </div>
    );
  }
  
  if (!data || data.length === 0) {
    return <div className="text-gray-400">No recent inquiries found.</div>;
  }
  
  return (
    <div className="space-y-4">
      {data.map((inquiry) => (
        <div key={inquiry.id} className="border-b border-gray-800 pb-3 last:border-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{inquiry.subject}</h3>
              <p className="text-sm text-gray-400">{inquiry.name} • {inquiry.email}</p>
            </div>
            <div className="text-sm">
              <span className={`px-2 py-1 rounded-full ${getStatusColor(inquiry.status)}`}>
                {inquiry.status}
              </span>
            </div>
          </div>
        </div>
      ))}
      
      <div className="pt-2">
        <Link href="/admin/inquiries">
          <Button variant="outline" size="sm" className="w-full">
            View All Inquiries
          </Button>
        </Link>
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'new':
      return 'bg-blue-900/30 text-blue-300';
    case 'in progress':
      return 'bg-yellow-900/30 text-yellow-300';
    case 'resolved':
      return 'bg-green-900/30 text-green-300';
    case 'closed':
      return 'bg-gray-900/30 text-gray-300';
    case 'urgent':
      return 'bg-red-900/30 text-red-300';
    default:
      return 'bg-gray-900/30 text-gray-300';
  }
}