export default function UnknownErrorSection() {
  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>unknown</p>
      <button onClick={() => window.location.reload()}>refresh</button>
    </div>
  );
}
