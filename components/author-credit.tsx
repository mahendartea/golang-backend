import { cn } from '@/lib/cn';

export function AuthorCredit({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'not-prose mt-12 rounded-xl border bg-fd-card p-6 text-center',
        className,
      )}
    >
      <p className="text-sm text-fd-muted-foreground">
        Website pembelajaran ini dibuat oleh
      </p>
      <p className="mt-1 text-lg font-semibold">Mahendar Dwi Payana</p>
      <p className="mt-0.5 text-sm text-fd-muted-foreground">
        Dosen · Peneliti · Praktisi
      </p>
    </div>
  );
}
