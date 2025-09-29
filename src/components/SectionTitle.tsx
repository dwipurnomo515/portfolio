export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 relative">
        <span className="bg-gradient-to-r from-slate-800 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-emerald-600 mx-auto rounded-full"></div>
    </div>
  );
}
