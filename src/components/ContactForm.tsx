import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    suburb: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div>
        <label
          htmlFor="suburb"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Suburb / Location
        </label>
        <input
          type="text"
          id="suburb"
          name="suburb"
          value={form.suburb}
          onChange={handleChange}
          required
          className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Brief Description of Situation
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          required
          className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ContactForm;
