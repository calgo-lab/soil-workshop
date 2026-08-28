import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Database,
  Eye,
  Layers3,
  Mail,
  MapPin,
  MonitorSmartphone,
  Scale,
  ScanLine,
  Sprout,
  UsersRound,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const posterTopics = [
  {
    icon: ScanLine,
    title: 'KI & Computer Vision',
    text: 'Anwendungen in Bodenkunde, Landwirtschaft und Umweltwissenschaften',
  },
  {
    icon: Layers3,
    title: 'Digitale Bodenansprache',
    text: 'Methoden für Kartierung, Monitoring und die Arbeit am Profil',
  },
  {
    icon: Eye,
    title: 'Remote Sensing',
    text: 'Fernerkundung und bildbasierte Ansätze für Boden und Umwelt',
  },
  {
    icon: Database,
    title: 'Datenqualität',
    text: 'Standards, Vergleichbarkeit und verlässliche Bodendaten',
  },
  {
    icon: MonitorSmartphone,
    title: 'Apps & Visualisierung',
    text: 'Software-Tools und interaktive Anwendungen für Forschung und Praxis',
  },
  {
    icon: Scale,
    title: 'Recht & Regulierung',
    text: 'Rahmenbedingungen für den Einsatz von KI und digitalen Methoden',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 border-b border-white/15 bg-[#15382c] text-[#f6f1e5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] uppercase"
          >
            <span className="grid size-9 place-items-center rounded-full border border-[#d8d461]/50 bg-[#d8d461] text-[#17392d]">
              <Sprout className="size-[18px]" aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">SoilNet Workshop</span>
          </a>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 text-sm md:flex">
            <a className="transition-colors hover:text-[#d8d461]" href="#workshop">
              Workshop
            </a>
            <a className="transition-colors hover:text-[#d8d461]" href="#call-for-posters">
              Call for Posters
            </a>
            <a className="transition-colors hover:text-[#d8d461]" href="#ort">
              Ort
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <nav
              aria-label="Sprachauswahl"
              className="flex rounded-full border border-white/20 p-0.5 text-xs font-semibold"
            >
              <Link
                className="rounded-full bg-[#d8d461] px-2.5 py-1.5 text-[#17392d]"
                href="/"
                lang="de"
                aria-current="page"
              >
                DE
              </Link>
              <Link
                className="rounded-full px-2.5 py-1.5 text-[#dbe3dc] transition-colors hover:text-white"
                href="/en/"
                lang="en"
              >
                EN
              </Link>
            </nav>
            <a
              href="#call-for-posters"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-10 rounded-full bg-[#d8d461] px-4 font-semibold text-[#17392d] hover:bg-[#ecea91]',
              )}
            >
              <span className="sm:hidden">Poster</span>
              <span className="hidden sm:inline">Call for Posters</span>
              <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative bg-[#15382c] text-[#f6f1e5]">
        <div className="absolute inset-0 opacity-30 soil-pattern" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1fr_340px] lg:px-12 lg:pb-32">
          <div className="max-w-4xl">
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#d8d461] uppercase sm:text-sm">
              <span className="h-px w-10 bg-current" />
              Berlin · 9. Dezember 2026
            </p>
            <h1 className="font-heading max-w-4xl text-[clamp(3.35rem,9vw,7.6rem)] leading-[0.88] tracking-[-0.055em] text-balance">
              KI in der
              <br />
              <span className="italic text-[#d8d461]">Bodenkunde</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-[#dbe3dc] sm:text-xl">
              Automatisierte Erkennung und Klassifizierung von Bodenhorizonten – ein
              Workshop über digitale Methoden, Forschung und Praxis.
            </p>
          </div>

          <aside className="self-end border-l border-[#d8d461]/50 pl-6 lg:mb-2 lg:pl-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#d8d461] uppercase">
              Auf einen Blick
            </p>
            <dl className="mt-6 space-y-6">
              <div className="flex gap-4">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-[#d8d461]" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Datum</dt>
                  <dd className="font-medium">Mittwoch, 9. Dezember 2026</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-[#d8d461]" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Uhrzeit</dt>
                  <dd className="font-medium">9:00–12:00 Uhr</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[#d8d461]" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Ort</dt>
                  <dd className="font-medium">
                    <a
                      className="inline-flex items-center gap-1.5 underline decoration-[#d8d461]/35 underline-offset-4 transition-colors hover:text-[#d8d461] hover:decoration-[#d8d461]"
                      href="https://maps.app.goo.gl/NsDF9rcmUNPYMDzE9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Einstein Center Digital Future, Berlin
                      <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="workshop" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
        <div>
          <p className="section-label">Der Workshop</p>
          <h2 className="font-heading mt-4 max-w-sm text-4xl leading-tight tracking-tight sm:text-5xl">
            Bodenprofile gemeinsam besser verstehen.
          </h2>
        </div>

        <div className="max-w-3xl lg:pt-9">
          <div className="space-y-6 text-lg leading-8 text-[#263e35]">
            <p>
              Die Geländeansprache von Bodenprofilen ist das Fundament des Bodenschutzes,
              doch sie ist zeitintensiv und aufwendig. Die starke Heterogenität von Böden und
              die daraus resultierende große Anzahl an Bodenhorizonten sorgt auch dafür, dass
              ein Bodenprofil von mehreren BodenkundlerInnen häufig unterschiedlich
              beschrieben wird.
            </p>
            <p>
              Um die Ansprache von Bodenprofilen zu vereinfachen und die Qualität von
              bodenkundlichen Datensätzen zu verbessern, haben die Bundesanstalt für
              Geowissenschaften und Rohstoffe (BGR) und die Berliner Hochschule für Technik
              (BHT) gemeinsam eine KI-basierte Lösung zur automatisierten Segmentierung und
              Klassifizierung von Bodenhorizonten aus Profilbildern entwickelt. Das Modell
              kann über eine Web-Anwendung zur Unterstützung bei der Annotation verwendet
              werden.
            </p>
            <p>
              Im Rahmen des Workshops möchten wir BodenkundlerInnen und Interessierte
              zusammenbringen, die Anwendung vorstellen und gemeinsam die Zukunft des
              digitalen Bodenschutzes diskutieren. Wir bieten den Teilnehmenden an, an einer
              interaktiven Kurzstudie mitzuwirken, in der Bodenprofile mit und ohne KI
              annotiert werden. Die Ergebnisse dieser Kurzstudie werden am Ende des Workshops
              präsentiert.
            </p>
            <p>
              Begleitend zum Workshop findet eine Poster-Session statt. Wir laden alle
              Teilnehmenden herzlich ein, eigene Projekte, Forschungsansätze oder
              Praxisbeispiele zum Thema „Digitale Methoden im Bodenschutz und in der
              Bodenkunde“ vorzustellen.
            </p>
          </div>

          <a
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'mt-8 h-11 rounded-full border-[#788d80] bg-transparent px-5 text-[#17382c] hover:bg-[#e9eadb]',
            )}
            href="https://soilnet.demo.calgo-lab.de/"
            target="_blank"
            rel="noreferrer"
          >
            SoilNet-Demo öffnen
            <ArrowUpRight aria-hidden="true" />
          </a>

          <div className="mt-12 grid gap-8 border-t border-[#bdc6bd] pt-9 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#7b4a2f]">Ausprobieren</p>
              <p className="mt-3 leading-7 text-muted-foreground">
                Lernen Sie die Web-Anwendung kennen und wirken Sie an einer interaktiven
                Kurzstudie zur Annotation von Bodenprofilen mit und ohne KI mit.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#7b4a2f]">Austauschen</p>
              <p className="mt-3 leading-7 text-muted-foreground">
                Diskutieren Sie mit Fachleuten und Interessierten, wie digitale Methoden den
                Bodenschutz und die bodenkundliche Praxis unterstützen können.
              </p>
            </div>
          </div>
          <p className="mt-10 inline-flex rounded-full border border-[#bdc6bd] px-4 py-2 text-sm text-[#395348]">
            Das detaillierte Programm wird derzeit abgestimmt und später veröffentlicht.
          </p>
        </div>
      </section>

      <section id="call-for-posters" className="bg-[#d8d461] text-[#173126]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div>
            <p className="section-label !text-[#67562c]">Poster-Session</p>
            <h2 className="font-heading mt-4 text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl">
              Call for Posters
            </h2>
            <div className="mt-10 max-w-4xl space-y-5 text-lg leading-8 text-[#263c2f]">
              <p>
                Im Rahmen des Workshops „KI in der Bodenkunde – Automatisierte Erkennung und
                Klassifizierung von Bodenhorizonten“ am 9. Dezember 2026 in Berlin möchten wir
                Forschende und Interessierte zusammenbringen, die sich mit digitalen Methoden
                in der Bodenkunde und im Bodenschutz beschäftigen.
              </p>
              <p>
                Begleitend zum Workshop findet eine Poster-Session statt. Wir laden Sie
                herzlich dazu ein, eigene Projekte, Forschungsarbeiten, Methoden oder
                Praxisbeispiele vorzustellen und mit anderen Teilnehmenden zu diskutieren.
              </p>
              <p>
                Willkommen sind Beiträge aus Forschung und Praxis – sowohl abgeschlossene
                Arbeiten als auch laufende Projekte und neue Ideen.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-y border-[#66703a]/35 py-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
            <span className="grid size-14 place-items-center rounded-full bg-[#17382c] text-[#d8d461]">
              <UsersRound className="size-6" aria-hidden="true" />
            </span>
            <div className="max-w-4xl">
              <h3 className="text-lg font-semibold">Austausch und Vernetzung</h3>
              <p className="mt-2 leading-7 text-[#3e4d33]">
                Die Poster-Session soll insbesondere dem fachlichen Austausch und der
                Vernetzung dienen. Die Beiträge müssen daher keine abgeschlossenen Arbeiten
                darstellen. Laufende Projekte, erste Ergebnisse, Software-Tools oder
                Fragestellungen aus der Praxis sind sehr willkommen.
              </p>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-[#66703a]/35 sm:grid-cols-2 lg:grid-cols-3">
            {posterTopics.map(({ icon: Icon, title, text }) => (
              <article key={title} className="border-b border-r border-[#66703a]/35 p-6 sm:p-8">
                <Icon className="size-6 text-[#6e3f28]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                <p className="mt-3 leading-6 text-[#46523b]">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-[#17382c] text-[#f6f1e5] lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold tracking-[0.15em] text-[#d8d461] uppercase">
                Interesse an einem Poster?
              </p>
              <h3 className="font-heading mt-4 text-3xl tracking-tight sm:text-4xl">
                Titel und Abstract einreichen
              </h3>
              <p className="mt-5 max-w-2xl leading-7 text-[#dbe3dc]">
                Bitte senden Sie einen Titel und ein Abstract bis zum 10. Oktober 2026 per
                E-Mail an{' '}
                <a
                  className="font-semibold text-white underline decoration-[#d8d461]/50 underline-offset-4 hover:decoration-[#d8d461]"
                  href="mailto:vipin.singh@bht-berlin.de"
                >
                  vipin.singh@bht-berlin.de
                </a>
                . Die Poster werden während des Workshops ausgestellt; für den gemeinsamen
                Austausch sind rund 30 Minuten vorgesehen.
              </p>
              <a
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'mt-7 h-11 rounded-full bg-[#d8d461] px-5 font-semibold text-[#17382c] hover:bg-[#ecea91]',
                )}
                href="mailto:vipin.singh@bht-berlin.de?subject=Call%20for%20Posters%20%E2%80%93%20SoilNet%20Workshop"
              >
                <Mail aria-hidden="true" />
                Per E-Mail einreichen
              </a>
            </div>
            <div className="flex items-center border-t border-white/15 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-[#d8d461] px-3 py-1 text-xs font-bold tracking-wide text-[#17382c] uppercase">
                  Vorläufige Deadline
                </span>
                <p className="font-heading mt-5 text-3xl text-white">10. Oktober 2026</p>
                <p className="mt-5 text-sm leading-6 text-[#b9c8be]">
                  Beiträge in einem frühen Stadium sind ausdrücklich willkommen. Auch erste
                  Ergebnisse, Tools und offene Fragestellungen sind passende Posterbeiträge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ort" className="bg-[#efe8da]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <p className="section-label">Ort & Zeit</p>
          <h2 className="font-heading mt-4 text-4xl tracking-tight sm:text-5xl">Mitten in Berlin.</h2>

          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#c8c0b0] bg-[#f7f2e8] lg:grid-cols-[1.45fr_0.55fr]">
            <div className="min-h-[360px] bg-[#ded8cc] lg:min-h-[480px]">
              <iframe
                className="h-full min-h-[360px] w-full border-0 lg:min-h-[480px]"
                title="Karte zum Einstein Center Digital Future in Berlin"
                src="https://www.google.com/maps?q=Einstein+Center+Digital+Future,+Wilhelmstra%C3%9Fe+67,+10117+Berlin&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-between gap-12 p-7 sm:p-10">
              <div>
                <p className="text-sm font-semibold text-[#7b4a2f]">Veranstaltungsort</p>
                <address className="mt-4 text-lg leading-7 not-italic">
                  <strong>Einstein Center Digital Future</strong>
                  <br />
                  Wilhelmstraße 67
                  <br />
                  10117 Berlin
                </address>
                <a
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'mt-6 h-10 rounded-full border-[#8f988d] bg-transparent px-4 text-[#17382c] hover:bg-[#e8e5d8]',
                  )}
                  href="https://maps.app.goo.gl/NsDF9rcmUNPYMDzE9"
                  target="_blank"
                  rel="noreferrer"
                >
                  In Google Maps öffnen
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <div className="border-t border-[#c8c0b0] pt-6">
                <p className="text-sm font-semibold text-[#7b4a2f]">Workshop</p>
                <p className="mt-3 text-lg font-semibold">9. Dezember 2026</p>
                <p className="mt-1 text-muted-foreground">9:00–12:00 Uhr</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  In Verbindung mit den Bodentagen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#102b22] text-[#c8d2cb]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-5 text-sm md:grid-cols-[auto_1fr] md:items-center">
            <p className="flex items-center gap-3 font-semibold tracking-wide text-[#f6f1e5]">
              <Sprout className="size-5 text-[#d8d461]" aria-hidden="true" />
              SoilNet Workshop
            </p>
            <p className="leading-7 md:text-right">
              Ein Projekt der BHT und der BGR. Forschung am Cognitive Algorithms Lab
              (calgo-lab).
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              className="flex min-h-32 items-center justify-center rounded-xl bg-[#f8f6ef] p-4 transition-transform hover:-translate-y-0.5"
              href="https://www.bht-berlin.de/"
              target="_blank"
              rel="noreferrer"
              aria-label="Website der Berliner Hochschule für Technik öffnen"
            >
              <Image
                className="max-h-20 w-full object-contain"
                src="/logos/bht.png"
                alt="Logo der Berliner Hochschule für Technik"
                width={247}
                height={73}
              />
            </a>
            <a
              className="flex min-h-32 items-center justify-center rounded-xl bg-[#f8f6ef] p-4 transition-transform hover:-translate-y-0.5"
              href="https://www.bgr.bund.de/"
              target="_blank"
              rel="noreferrer"
              aria-label="Website der Bundesanstalt für Geowissenschaften und Rohstoffe öffnen"
            >
              <Image
                className="max-h-20 w-full object-contain"
                src="/logos/bgr.png"
                alt="Logo der Bundesanstalt für Geowissenschaften und Rohstoffe"
                width={257}
                height={76}
              />
            </a>
            <a
              className="flex min-h-32 items-center justify-center rounded-xl bg-[#1d1d1d] p-3 transition-transform hover:-translate-y-0.5"
              href="https://calgo-lab.de/"
              target="_blank"
              rel="noreferrer"
              aria-label="Website des Cognitive Algorithms Lab öffnen"
            >
              <Image
                className="max-h-20 w-full object-contain"
                src="/logos/calgo-lab.png"
                alt="Logo des Cognitive Algorithms Lab"
                width={598}
                height={266}
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
