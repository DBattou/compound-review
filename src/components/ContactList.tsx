interface ContactListProps {
  contacts: Array<string>;
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <div className="flex flex-col items-start bg-gray-800 border-1 border-gray-500 rounded-lg p-3">
      <p className="py-4 pl-3">Name</p>
      {contacts.length === 0 ? (
        <p className="py-4">There is currently no contact in your list.</p>
      ) : (
        <ul className="w-full">
          {contacts.map((contact) => {
            return (
              <li className="flex flex-col items-start w-full" key={contact}>
                <hr className="bg-gray-500 w-full" />
                <p className="text-blue-500 py-4 pl-3">{contact}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
