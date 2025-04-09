export default function Header({ onAddContact }: { onAddContact: () => void }) {
  return (
    <>
      <h1>100 Contacts</h1>
      <button onClick={onAddContact}>+ Add Contact</button>
    </>
  );
}
