import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertInquirySchema, updateInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact in memory storage
      const newContact = await storage.createContact(validatedData);
      
      // Log the submission with clear redirection message
      console.log("\n-------------------------------------");
      console.log("NEW CONTACT FORM SUBMISSION - Please forward to workwithloreal@gmail.com");
      console.log("Name:", validatedData.name);
      console.log("Email:", validatedData.email);
      console.log("Company:", validatedData.company);
      console.log("Phone:", validatedData.phone);
      console.log("Service:", validatedData.service);
      console.log("Message:", validatedData.message);
      console.log("-------------------------------------\n");
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        contact: newContact
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof Error && error.name === "ZodError") {
        const validationError = fromZodError(error as any);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      // Handle generic errors
      console.error("Error processing contact form:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // Authentication endpoint for admin login
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Get the user from the database
      const user = await storage.getUserByUsername(username);
      
      // Check if user exists and is an admin
      if (!user || !user.isAdmin) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password"
        });
      }
      
      // In a real app, you would hash and compare passwords
      // Here we're just doing a simple string comparison
      if (user.password !== password) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password"
        });
      }
      
      // User is authenticated
      res.json({
        success: true,
        data: {
          id: user.id,
          username: user.username,
          isAdmin: user.isAdmin
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred during login"
      });
    }
  });
  
  // Public endpoint for submitting inquiries
  app.post("/api/inquiries", async (req, res) => {
    try {
      const parsedBody = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(parsedBody);
      
      // Log the inquiry with clear redirection message
      console.log("\n-------------------------------------");
      console.log("NEW INQUIRY SUBMISSION - Please forward to workwithloreal@gmail.com");
      console.log("Name:", parsedBody.name);
      console.log("Email:", parsedBody.email);
      console.log("Company:", parsedBody.companyName || "N/A");
      console.log("Phone:", parsedBody.phone || "N/A");
      console.log("Subject:", parsedBody.subject);
      console.log("Message:", parsedBody.message);
      console.log("-------------------------------------\n");
      
      res.status(201).json({ 
        success: true, 
        message: "Your inquiry has been submitted successfully",
        data: inquiry 
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        const zodError = fromZodError(error as any);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: zodError.message
        });
      }
      
      res.status(500).json({
        success: false,
        message: "An error occurred while submitting your inquiry. Please try again later."
      });
    }
  });
  
  // API endpoints for inquiry management (admin dashboard)
  
  // Get all inquiries
  app.get("/api/admin/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json({ success: true, data: inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching inquiries"
      });
    }
  });

  // Get a single inquiry by ID
  app.get("/api/admin/inquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const inquiry = await storage.getInquiry(id);
      
      if (!inquiry) {
        return res.status(404).json({
          success: false,
          message: "Inquiry not found"
        });
      }
      
      res.json({ success: true, data: inquiry });
    } catch (error) {
      console.error("Error fetching inquiry:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching the inquiry"
      });
    }
  });

  // Create a new inquiry
  app.post("/api/admin/inquiries", async (req, res) => {
    try {
      const parsedBody = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(parsedBody);
      res.status(201).json({ success: true, data: inquiry });
    } catch (error) {
      console.error("Error creating inquiry:", error);
      
      if (error instanceof Error) {
        const zodError = fromZodError(error as any);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: zodError.details
        });
      }
      
      res.status(500).json({
        success: false,
        message: "An error occurred while creating the inquiry"
      });
    }
  });

  // Update an existing inquiry
  app.patch("/api/admin/inquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const parsedBody = updateInquirySchema.parse(req.body);
      const updatedInquiry = await storage.updateInquiry(id, parsedBody);
      
      if (!updatedInquiry) {
        return res.status(404).json({
          success: false,
          message: "Inquiry not found"
        });
      }
      
      res.json({ success: true, data: updatedInquiry });
    } catch (error) {
      console.error("Error updating inquiry:", error);
      
      if (error instanceof Error) {
        const zodError = fromZodError(error as any);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: zodError.details
        });
      }
      
      res.status(500).json({
        success: false,
        message: "An error occurred while updating the inquiry"
      });
    }
  });

  // Delete an inquiry
  app.delete("/api/admin/inquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteInquiry(id);
      
      if (!success) {
        return res.status(404).json({
          success: false,
          message: "Inquiry not found"
        });
      }
      
      res.json({ success: true, message: "Inquiry deleted successfully" });
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while deleting the inquiry"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
