
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { subscribeToNewsletter } from '@/services/mongoService';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Subscribe email to newsletter using MongoDB
      const success = await subscribeToNewsletter(email);
      
      if (success) {
        toast('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        toast('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
      <Input
        type="email"
        placeholder="Your email address"
        className="px-4 py-3 rounded-lg focus:outline-none text-gray-800 min-w-0 flex-1 max-w-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
      />
      <Button 
        className="bg-accent hover:bg-accent/90" 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
};

export default NewsletterForm;
