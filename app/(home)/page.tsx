import Link from 'next/link';
import { AuthorCredit } from '@/components/author-credit';

const segments = [
  {
    title: 'Backend',
    href: '/docs/backend',
    badge: 'Tersedia',
    desc: 'REST API, database, otentikasi, arsitektur bersih, Docker, dan Kubernetes.',
    meta: '16 pertemuan · 5 fase',
    available: true,
  },
  {
    title: 'Segmen Lainnya',
    href: '/docs',
    badge: 'Segera hadir',
    desc: 'Segmen seperti CLI, Microservices, dan Testing sedang disiapkan.',
    meta: 'Menyusul',
    available: false,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <span className="mb-4 rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
        Belajar Golang per Segmen
      </span>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Website Belajar Golang</h1>
      <p className="mb-8 max-w-2xl text-fd-muted-foreground">
        Jalur belajar Golang bertahap untuk berbagai segmen pembelajaran. Mulai dari{' '}
        <strong>Backend</strong>, dengan segmen lain menyusul.
      </p>
      <Link
        href="/docs"
        className="mb-14 rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
      >
        Jelajahi Segmen →
      </Link>

      <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {segments.map((s) =>
          s.available ? (
            <Link
              key={s.title}
              href={s.href}
              className="rounded-xl border bg-fd-card p-5 transition-colors hover:bg-fd-accent"
            >
              <div className="mb-1 flex items-center justify-between">
                <h2 className="font-semibold">{s.title}</h2>
                <span className="rounded-full bg-fd-primary/10 px-2 py-0.5 text-xs font-medium text-fd-primary">
                  {s.badge}
                </span>
              </div>
              <p className="mb-2 text-sm text-fd-muted-foreground">{s.desc}</p>
              <span className="text-xs text-fd-muted-foreground">{s.meta}</span>
            </Link>
          ) : (
            <div
              key={s.title}
              className="rounded-xl border border-dashed bg-fd-card/50 p-5 opacity-70"
            >
              <div className="mb-1 flex items-center justify-between">
                <h2 className="font-semibold">{s.title}</h2>
                <span className="rounded-full border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground">
                  {s.badge}
                </span>
              </div>
              <p className="mb-2 text-sm text-fd-muted-foreground">{s.desc}</p>
              <span className="text-xs text-fd-muted-foreground">{s.meta}</span>
            </div>
          ),
        )}
      </div>

      <AuthorCredit className="mt-14 w-full" />
    </div>
  );
}
