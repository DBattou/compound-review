export default function Header({ addContact }: { addContact: () => void }) {
  return (
    <>
      <h1>100 Contacts</h1>
      <button onClick={addContact}>+ Add Contact</button>
    </>
  );
}
