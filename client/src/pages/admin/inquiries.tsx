import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  useQuery, 
  useMutation, 
  useQueryClient 
} from "@tanstack/react-query";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { 
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { Inquiry, UpdateInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function InquiriesManagement() {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // Enhanced filtering state
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  
  // Sorting state
  const [sortField, setSortField] = useState<string>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  // Fetch inquiries
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/admin/inquiries'],
    select: (data: any) => data?.success ? data.data : [],
  });

  // Filter, sort, and search inquiries
  const filteredAndSortedInquiries = React.useMemo(() => {
    if (!data) return [];
    
    // Step 1: Filter the inquiries
    const filtered = data.filter((inquiry: Inquiry) => {
      // Filter by status
      if (statusFilter !== 'all' && inquiry.status !== statusFilter) {
        return false;
      }
      
      // Filter by priority
      if (priorityFilter !== 'all' && inquiry.priority !== priorityFilter) {
        return false;
      }
      
      // Filter by date
      if (dateFilter !== 'all') {
        const today = new Date();
        const inquiryDate = new Date(inquiry.createdAt);
        
        switch(dateFilter) {
          case 'today':
            if (inquiryDate.toDateString() !== today.toDateString()) return false;
            break;
          case 'yesterday': {
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            if (inquiryDate.toDateString() !== yesterday.toDateString()) return false;
            break;
          }
          case 'thisWeek': {
            const weekStart = new Date(today);
            weekStart.setDate(today.getDate() - today.getDay());
            if (inquiryDate < weekStart) return false;
            break;
          }
          case 'thisMonth': {
            const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
            if (inquiryDate < monthStart) return false;
            break;
          }
        }
      }
      
      // Search by name, email, subject, or message
      if (search) {
        const searchLower = search.toLowerCase();
        return (
          inquiry.name.toLowerCase().includes(searchLower) ||
          inquiry.email.toLowerCase().includes(searchLower) ||
          inquiry.subject.toLowerCase().includes(searchLower) ||
          (inquiry.message && inquiry.message.toLowerCase().includes(searchLower)) ||
          (inquiry.companyName && inquiry.companyName.toLowerCase().includes(searchLower))
        );
      }
      
      return true;
    });
    
    // Step 2: Sort the filtered inquiries
    return [...filtered].sort((a, b) => {
      let valA, valB;
      
      // Extract the values to compare based on the sort field
      switch(sortField) {
        case 'name':
          valA = a.name.toLowerCase();
          valB = b.name.toLowerCase();
          break;
        case 'subject':
          valA = a.subject.toLowerCase();
          valB = b.subject.toLowerCase();
          break;
        case 'status':
          valA = a.status.toLowerCase();
          valB = b.status.toLowerCase();
          break;
        case 'priority':
          valA = a.priority.toLowerCase();
          valB = b.priority.toLowerCase();
          break;
        case 'createdAt':
        default:
          valA = new Date(a.createdAt).getTime();
          valB = new Date(b.createdAt).getTime();
      }
      
      // Determine the sort order
      if (sortDirection === 'asc') {
        return valA > valB ? 1 : -1;
      } else {
        return valA < valB ? 1 : -1;
      }
    });
  }, [data, statusFilter, priorityFilter, dateFilter, search, sortField, sortDirection]);
  
  // View inquiry details
  const handleViewInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsViewModalOpen(true);
  };
  
  // Edit inquiry
  const handleEditInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsEditModalOpen(true);
  };
  
  // Delete inquiry
  const handleDeleteInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsDeleteModalOpen(true);
  };
  
  // Back to dashboard
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
          <h1 className="text-3xl font-bold">Inquiries Management</h1>
        </div>
        
        <Card className="p-6 bg-dark-800 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <Input 
                placeholder="Search inquiries..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="thisWeek">This Week</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-48">
              <Select value={sortField} onValueChange={setSortField}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="createdAt">Date</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="subject">Subject</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select value={sortDirection} onValueChange={(value) => setSortDirection(value as 'asc' | 'desc')}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {isLoading ? (
            <div className="text-center py-8">Loading inquiries...</div>
          ) : error ? (
            <div className="bg-red-900/20 border border-red-900 rounded-md p-4 text-red-300">
              Error loading inquiries. Please try again later.
            </div>
          ) : (
            <>
              <div className="rounded-md border border-dark-700">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAndSortedInquiries.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-6">
                          No inquiries found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredAndSortedInquiries.map((inquiry) => (
                        <TableRow key={inquiry.id}>
                          <TableCell className="font-medium">{inquiry.subject}</TableCell>
                          <TableCell>{inquiry.name}</TableCell>
                          <TableCell>{inquiry.email}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                              {inquiry.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            {formatDate(inquiry.createdAt)}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  Actions
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleViewInquiry(inquiry)}>
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleEditInquiry(inquiry)}>
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-red-500"
                                  onClick={() => handleDeleteInquiry(inquiry)}
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                Showing {filteredAndSortedInquiries.length} of {data.length} inquiries
              </div>
            </>
          )}
        </Card>
      </main>
      
      <Footer />
      
      {/* View Inquiry Modal */}
      {selectedInquiry && (
        <ViewInquiryModal 
          inquiry={selectedInquiry}
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          onEdit={() => {
            setIsViewModalOpen(false);
            setIsEditModalOpen(true);
          }}
        />
      )}
      
      {/* Edit Inquiry Modal */}
      {selectedInquiry && (
        <EditInquiryModal 
          inquiry={selectedInquiry}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={() => {
            setIsEditModalOpen(false);
            toast({
              title: "Inquiry updated",
              description: "The inquiry has been updated successfully.",
            });
          }}
        />
      )}
      
      {/* Delete Inquiry Modal */}
      {selectedInquiry && (
        <DeleteInquiryModal 
          inquiry={selectedInquiry}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onSuccess={() => {
            setIsDeleteModalOpen(false);
            toast({
              title: "Inquiry deleted",
              description: "The inquiry has been deleted successfully.",
            });
          }}
        />
      )}
    </div>
  );
}

interface ViewInquiryModalProps {
  inquiry: Inquiry;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
}

function ViewInquiryModal({ inquiry, isOpen, onClose, onEdit }: ViewInquiryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-dark-800 text-white border-dark-700">
        <DialogHeader>
          <DialogTitle>Inquiry Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-sm font-medium text-gray-400">Subject</h3>
            <p className="mt-1">{inquiry.subject}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Name</h3>
              <p className="mt-1">{inquiry.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Email</h3>
              <p className="mt-1">{inquiry.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Company</h3>
              <p className="mt-1">{inquiry.companyName || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Phone</h3>
              <p className="mt-1">{inquiry.phone || 'N/A'}</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">Status</h3>
            <p className="mt-1">
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                {inquiry.status}
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">Message</h3>
            <p className="mt-1 whitespace-pre-wrap">{inquiry.message}</p>
          </div>
          {inquiry.notes && (
            <div>
              <h3 className="text-sm font-medium text-gray-400">Internal Notes</h3>
              <p className="mt-1 whitespace-pre-wrap">{inquiry.notes}</p>
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium text-gray-400">Created At</h3>
            <p className="mt-1">{formatDate(inquiry.createdAt)}</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button onClick={onEdit}>Edit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface EditInquiryModalProps {
  inquiry: Inquiry;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

function EditInquiryModal({ inquiry, isOpen, onClose, onSuccess }: EditInquiryModalProps) {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<UpdateInquiry>({
    status: inquiry.status,
    assignedTo: inquiry.assignedTo ?? '', // Add nullish coalescing operator
    priority: inquiry.priority,
    notes: inquiry.notes ?? '',
  });
  
  const updateMutation = useMutation({
    mutationFn: async (data: UpdateInquiry) => {
      return await apiRequest(`/api/admin/inquiries/${inquiry.id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/inquiries'] });
      onSuccess();
    },
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(form);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-dark-800 text-white border-dark-700">
        <DialogHeader>
          <DialogTitle>Edit Inquiry</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select 
              name="status" 
              value={form.status} 
              onValueChange={(value) => setForm((prev) => ({ ...prev, status: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select 
              name="priority" 
              value={form.priority} 
              onValueChange={(value) => setForm((prev) => ({ ...prev, priority: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" defaultValue="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="assignedTo">Assigned To</Label>
            <Input 
              id="assignedTo" 
              name="assignedTo" 
              value={form.assignedTo || ''}
              onChange={handleChange} 
              placeholder="Enter name or ID of assignee"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Internal Notes</Label>
            <Textarea 
              id="notes" 
              name="notes" 
              value={form.notes ?? ''} 
              onChange={handleChange} 
              placeholder="Add internal notes about this inquiry"
              rows={4}
            />
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose} 
              disabled={updateMutation.isPending}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface DeleteInquiryModalProps {
  inquiry: Inquiry;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

function DeleteInquiryModal({ inquiry, isOpen, onClose, onSuccess }: DeleteInquiryModalProps) {
  const queryClient = useQueryClient();
  
  const deleteMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest(`/api/admin/inquiries/${inquiry.id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/inquiries'] });
      onSuccess();
    },
  });
  
  const handleDelete = () => {
    deleteMutation.mutate();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-dark-800 text-white border-dark-700">
        <DialogHeader>
          <DialogTitle>Delete Inquiry</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p>Are you sure you want to delete this inquiry from {inquiry.name}?</p>
          <p className="mt-2 text-sm text-gray-400">This action cannot be undone.</p>
        </div>
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={onClose} 
            disabled={deleteMutation.isPending}
          >
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleDelete} 
            disabled={deleteMutation.isPending}
          >
            {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Helper function to format dates
function formatDate(dateStr: string | Date): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

// Helper function for status colors
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