import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg z-50 p-0"
        aria-label="Abrir formulário WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fale Conosco pelo WhatsApp</DialogTitle>
            <DialogDescription>
              Preencha o formulário abaixo e entraremos em contato via WhatsApp
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
