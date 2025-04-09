interface HeaderProps {
  onAddContact: () => void;
}

export default function Header({ onAddContact }: HeaderProps) {
  return (
    <div className="flex flex-row place-content-between pb-8">
      <h1>100 Contacts</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        onClick={onAddContact}
        aria-label="Add contact"
      >
        + Add Contact
      </button>
    </div>
  );
}
