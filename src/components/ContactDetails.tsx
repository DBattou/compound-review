import { useEffect, useRef, useState } from 'react';
import { type Contact, USER_LIST } from '../data/userList';
import { useOnClickOutside } from '../hooks';

interface ContactDetailsProps {
  onClose: () => void;
  contactId: string | undefined;
}

export default function ContactDetails({ onClose, contactId }: ContactDetailsProps) {
  const [contactData, setContactData] = useState<Contact | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  useEffect(() => {
    try {
      const contactData = USER_LIST.find(({ id }) => id === contactId) ?? null;
      if (!contactData) {
        throw new Error('Error fetching the data');
      }

      setContactData(contactData);
      setError(null);
    } catch (error) {
      setError(error as Error);
      setContactData(null);
    } finally {
      setIsLoading(false);
    }
  }, [contactId]);

  const modal = useRef<HTMLDivElement>(null);

  useOnClickOutside(modal, onClose);

  return (
    <div className="fixed inset-0 flex items-center justify-center p-5 z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className="relative w-full max-w-[440px] flex flex-col items-start rounded-lg bg-neutral-800 "
        ref={modal}
      >
        {error ? (
          <p className="text-white p-4">Error loading contact details: {error.message}</p>
        ) : isLoading ? (
          <p className="text-white p-4">Loading contact details...</p>
        ) : !contactData ? (
          <p className="text-white p-4">Contact not found</p>
        ) : (
          <>
            <div className="flex flex-row place-content-between w-full items-center p-2">
              <p className="text-white h-full text-xl font-medium">{`${contactData?.firstName} ${contactData?.lastName}`}</p>
              <button
                className="text-white hover:bg-neutral-700 p-2 rounded-full transition-colors"
                onClick={onClose}
                aria-label="Close contact details"
              >
                ✕
              </button>
            </div>
            <p className="text-white h-full p-4">Phone: {contactData?.phoneNumber}</p>
            <p className="text-white h-full p-4">Address: {contactData?.address}</p>
          </>
        )}
      </div>
    </div>
  );
}
