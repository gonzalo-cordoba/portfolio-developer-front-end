import { ContactItems, Form } from "@/app/components";

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <Form />
        <ContactItems />
      </div>
    </div>
  );
}
