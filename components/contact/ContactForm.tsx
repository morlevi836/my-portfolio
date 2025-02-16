"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "./formSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Message Sent!",
        description: "I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          placeholder="Your Name"
          {...register("name")}
          className="w-full border border-gray-300 bg-gray-100 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          className="w-full border border-gray-300 bg-gray-100 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Your Message"
          rows={5}
          {...register("message")}
          className="w-full resize-none border border-gray-300 bg-gray-100 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            <FaPaperPlane className="mr-2" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
