import React from 'react';

interface ContactListProps {
  contacts: Array<string>;
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <div className="flex flex-col items-start bg-gray-800 border-1 border-gray-500 rounded-lg p-3">
      <p>Name</p>
      <hr className="bg-gray-500 w-full" />
      {contacts.map((contact) => {
        return (
          <React.Fragment key={contact}>
            <p className="text-blue-500 py-4 pl-3">{contact}</p>
            <hr className="bg-gray-500 w-full" />
          </React.Fragment>
        );
      })}
    </div>
  );
}
