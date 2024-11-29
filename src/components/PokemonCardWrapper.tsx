export default function PokemonCardWrapper({ children }: { children: React.ReactNode }) {
  return (
   <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
    {children}
   </div>
  );
}
