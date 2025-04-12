import { useEffect, useRef } from 'react';
import { USER_LIST } from '../data/userList';

interface ContactDetailsProps {
  onClose: () => void;
  contactId: string | undefined;
}

export default function ContactDetails({ onClose, contactId }: ContactDetailsProps) {
  const contactData = USER_LIST.find(({ id }) => id === contactId);

  const modal = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modal.current && !modal.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center p-5 z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className="relative min-w-[440px] flex flex-col items-start rounded-lg bg-neutral-800 "
        ref={modal}
      >
        <div className="flex flex-row place-content-between w-full items-center p-2">
          <p className="text-white h-full">{`${contactData?.firstName} ${contactData?.lastName}`}</p>
          <button
            className="text-white"
            onClick={onClose}
            aria-label="Close contact details"
          >
            x
          </button>
        </div>
        <p className="text-white h-full p-4">Phone: {contactData?.phoneNumber}</p>
        <p className="text-white h-full p-4">Address: {contactData?.address}</p>
      </div>
    </div>
  );
}
