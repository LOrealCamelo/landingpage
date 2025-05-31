import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell, AreaChart, Area } from "recharts";
import { trackEvent } from "@/lib/analytics";

// Define colors for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#FF0000'];

export default function AnalyticsDashboard() {
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [timeRange, setTimeRange] = useState<string>('last30Days');
  
  // Track page view analytics
  useEffect(() => {
    // Log analytics dashboard view
    trackEvent('view_analytics_dashboard', 'admin', 'dashboard_view');
  }, []);
  
  // Fetch inquiries for analytics
  const { data: inquiriesData, isLoading: isLoadingInquiries } = useQuery({
    queryKey: ['/api/admin/inquiries'],
    select: (data: any) => data?.success ? data.data : [],
  });
  
  // In a real application, we would fetch this data from Google Analytics API
  // For this demo, we're using sample data to show the dashboard layout
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading Google Analytics data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Sample website visitor data
  const visitorData = [
    { date: '5/15', users: 45, pageViews: 128, sessions: 52 },
    { date: '5/16', users: 52, pageViews: 142, sessions: 61 },
    { date: '5/17', users: 48, pageViews: 130, sessions: 54 },
    { date: '5/18', users: 70, pageViews: 190, sessions: 82 },
    { date: '5/19', users: 66, pageViews: 172, sessions: 75 },
    { date: '5/20', users: 55, pageViews: 149, sessions: 64 },
    { date: '5/21', users: 75, pageViews: 192, sessions: 87 },
    { date: '5/22', users: 82, pageViews: 218, sessions: 95 },
    { date: '5/23', users: 57, pageViews: 152, sessions: 66 },
  ];

  // Sample traffic source data for pie chart
  const trafficSourceData = [
    { name: 'Direct', value: 42 },
    { name: 'Organic Search', value: 28 },
    { name: 'Social Media', value: 16 },
    { name: 'Referral', value: 10 },
    { name: 'Email', value: 4 },
  ];

  // Sample device data for pie chart
  const deviceData = [
    { name: 'Desktop', value: 56 },
    { name: 'Mobile', value: 38 },
    { name: 'Tablet', value: 6 },
  ];

  // Sample page popularity data
  const pagePopularityData = [
    { name: 'Home page', views: 325 },
    { name: 'Services', views: 218 },
    { name: 'About Us', views: 164 },
    { name: 'Case Studies', views: 142 },
    { name: 'Contact', views: 128 },
  ];
  
  // Go back to dashboard
  const handleBackToDashboard = () => {
    setLocation('/admin/dashboard');
  };

  return (
    <div className="bg-dark-900 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="mr-4" 
            onClick={handleBackToDashboard}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Button>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-dark-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
            <TabsTrigger value="pages">Popular Pages</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Time range selector */}
        <Card className="p-4 bg-dark-800 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Website Analytics</h2>
            <div className="w-48">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7Days">Last 7 Days</SelectItem>
                  <SelectItem value="last30Days">Last 30 Days</SelectItem>
                  <SelectItem value="last90Days">Last 90 Days</SelectItem>
                  <SelectItem value="thisYear">This Year</SelectItem>
                  <SelectItem value="allTime">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <p className="text-lg">Loading analytics data...</p>
          </div>
        ) : (
          <>
            <TabsContent value="overview" className="mt-0">
              {/* Overview cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Total Visitors</h3>
                  <p className="text-4xl font-bold">548</p>
                  <p className="text-sm text-green-400 mt-2">↑ 12.5% from last period</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Page Views</h3>
                  <p className="text-4xl font-bold">1,473</p>
                  <p className="text-sm text-green-400 mt-2">↑ 8.3% from last period</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Avg. Time on Site</h3>
                  <p className="text-4xl font-bold">2:34</p>
                  <p className="text-sm text-green-400 mt-2">↑ 0:18 from last period</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Bounce Rate</h3>
                  <p className="text-4xl font-bold">38%</p>
                  <p className="text-sm text-red-400 mt-2">↑ 2.1% from last period</p>
                </Card>
              </div>
              
              {/* Website traffic chart */}
              <Card className="p-6 bg-dark-800 mb-8">
                <h3 className="text-lg font-medium mb-6">Website Traffic</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={visitorData}>
                      <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUsers)" />
                      <Area type="monotone" dataKey="pageViews" stroke="#82ca9d" fillOpacity={1} fill="url(#colorViews)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              
              {/* Devices & Sources charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 bg-dark-800">
                  <h3 className="text-lg font-medium mb-4">Device Breakdown</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
                
                <Card className="p-6 bg-dark-800">
                  <h3 className="text-lg font-medium mb-4">Traffic Sources</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficSourceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {trafficSourceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="traffic" className="mt-0">
              <Card className="p-6 bg-dark-800 mb-8">
                <h3 className="text-lg font-medium mb-6">Traffic Sources Detail</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trafficSourceData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Legend />
                      <Bar dataKey="value" fill="#8884d8" name="Traffic Percentage">
                        {trafficSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base font-medium mb-2">Top Referrers</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>google.com</span>
                        <span className="text-green-400">42%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>facebook.com</span>
                        <span className="text-green-400">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>linkedin.com</span>
                        <span className="text-green-400">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>twitter.com</span>
                        <span className="text-green-400">10%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>instagram.com</span>
                        <span className="text-green-400">5%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-2">Top Search Terms</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>ai automation services</span>
                        <span className="text-green-400">34%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>virtual assistant ai</span>
                        <span className="text-green-400">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>xpert ai solutions</span>
                        <span className="text-green-400">18%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>ai business automation</span>
                        <span className="text-green-400">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>ai customer service</span>
                        <span className="text-green-400">8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="pages" className="mt-0">
              <Card className="p-6 bg-dark-800 mb-8">
                <h3 className="text-lg font-medium mb-6">Popular Pages</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={pagePopularityData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="views" fill="#8884d8" name="Page Views">
                        {pagePopularityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6">
                  <h4 className="text-base font-medium mb-4">Page Performance</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-4">Page</th>
                          <th className="text-left py-3 px-4">Views</th>
                          <th className="text-left py-3 px-4">Avg. Time</th>
                          <th className="text-left py-3 px-4">Bounce Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4">Home</td>
                          <td className="py-3 px-4">325</td>
                          <td className="py-3 px-4">1:42</td>
                          <td className="py-3 px-4">32%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4">Services</td>
                          <td className="py-3 px-4">218</td>
                          <td className="py-3 px-4">2:15</td>
                          <td className="py-3 px-4">28%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4">About Us</td>
                          <td className="py-3 px-4">164</td>
                          <td className="py-3 px-4">1:36</td>
                          <td className="py-3 px-4">41%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4">Case Studies</td>
                          <td className="py-3 px-4">142</td>
                          <td className="py-3 px-4">3:22</td>
                          <td className="py-3 px-4">24%</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Contact</td>
                          <td className="py-3 px-4">128</td>
                          <td className="py-3 px-4">2:08</td>
                          <td className="py-3 px-4">18%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="engagement" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Avg. Session Duration</h3>
                  <p className="text-4xl font-bold">2:34</p>
                  <p className="text-sm text-green-400 mt-2">↑ 0:18 from last period</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Pages Per Session</h3>
                  <p className="text-4xl font-bold">2.7</p>
                  <p className="text-sm text-green-400 mt-2">↑ 0.3 from last period</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">New vs Returning</h3>
                  <p className="text-4xl font-bold">67% / 33%</p>
                  <p className="text-sm text-blue-400 mt-2">Similar to last period</p>
                </Card>
              </div>
              
              <Card className="p-6 bg-dark-800 mb-8">
                <h3 className="text-lg font-medium mb-6">User Engagement Over Time</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={visitorData}>
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="sessions" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line yAxisId="right" type="monotone" dataKey="pageViews" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              
              <Card className="p-6 bg-dark-800 mb-8">
                <h3 className="text-lg font-medium mb-4">Engagement Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4">Metric</th>
                        <th className="text-left py-3 px-4">Current</th>
                        <th className="text-left py-3 px-4">Previous</th>
                        <th className="text-left py-3 px-4">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4">Contact Form Submissions</td>
                        <td className="py-3 px-4">42</td>
                        <td className="py-3 px-4">36</td>
                        <td className="py-3 px-4 text-green-400">+16.7%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4">Chat Interactions</td>
                        <td className="py-3 px-4">128</td>
                        <td className="py-3 px-4">105</td>
                        <td className="py-3 px-4 text-green-400">+21.9%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4">Call-to-Action Clicks</td>
                        <td className="py-3 px-4">215</td>
                        <td className="py-3 px-4">198</td>
                        <td className="py-3 px-4 text-green-400">+8.6%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Video Engagement</td>
                        <td className="py-3 px-4">76%</td>
                        <td className="py-3 px-4">68%</td>
                        <td className="py-3 px-4 text-green-400">+11.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

// Helper function to format date for display
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}