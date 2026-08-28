import type { Metadata } from 'next';
import Image from 'next/image';
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

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const title = 'AI in Soil Science | SoilNet Workshop 2026';
const description =
  'Workshop on AI-assisted detection of soil horizons on 9 December 2026 in Berlin, including a call for posters.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/soil-workshop/en/',
    languages: {
      'de-DE': '/soil-workshop/',
      en: '/soil-workshop/en/',
    },
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    images: [],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: [],
  },
};

const posterTopics = [
  {
    icon: ScanLine,
    title: 'AI & Computer Vision',
    text: 'Applications in soil science, agriculture, and environmental sciences',
  },
  {
    icon: Layers3,
    title: 'Digital Soil Description',
    text: 'Methods for mapping, monitoring, and working with soil profiles',
  },
  {
    icon: Eye,
    title: 'Remote Sensing',
    text: 'Remote sensing and image-based approaches for soil and the environment',
  },
  {
    icon: Database,
    title: 'Data Quality',
    text: 'Standards, comparability, and reliable soil data',
  },
  {
    icon: MonitorSmartphone,
    title: 'Apps & Visualisation',
    text: 'Software tools and interactive applications for research and practice',
  },
  {
    icon: Scale,
    title: 'Law & Regulation',
    text: 'Frameworks for the use of AI and digital methods',
  },
];

export default function EnglishHome() {
  return (
    <main lang="en" className="min-h-screen overflow-hidden bg-background text-foreground">
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

          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm md:flex">
            <a className="transition-colors hover:text-[#d8d461]" href="#workshop">
              Workshop
            </a>
            <a className="transition-colors hover:text-[#d8d461]" href="#call-for-posters">
              Call for Posters
            </a>
            <a className="transition-colors hover:text-[#d8d461]" href="#venue">
              Venue
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <nav
              aria-label="Language selection"
              className="flex rounded-full border border-white/20 p-0.5 text-xs font-semibold"
            >
              <a
                className="rounded-full px-2.5 py-1.5 text-[#dbe3dc] transition-colors hover:text-white"
                href="/soil-workshop/"
                lang="de"
              >
                DE
              </a>
              <a
                className="rounded-full bg-[#d8d461] px-2.5 py-1.5 text-[#17392d]"
                href="/soil-workshop/en/"
                lang="en"
                aria-current="page"
              >
                EN
              </a>
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
              Berlin · 9 December 2026
            </p>
            <h1 className="font-heading max-w-4xl text-[clamp(3.35rem,9vw,7.6rem)] leading-[0.88] tracking-[-0.055em] text-balance">
              AI in
              <br />
              <span className="italic text-[#d8d461]">Soil Science</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-[#dbe3dc] sm:text-xl">
              Automated detection and classification of soil horizons – a workshop on
              digital methods, research, and practice.
            </p>
          </div>

          <aside className="self-end border-l border-[#d8d461]/50 pl-6 lg:mb-2 lg:pl-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#d8d461] uppercase">
              At a glance
            </p>
            <dl className="mt-6 space-y-6">
              <div className="flex gap-4">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-[#d8d461]" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Date</dt>
                  <dd className="font-medium">Wednesday, 9 December 2026</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-[#d8d461]" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Time</dt>
                  <dd className="font-medium">9:00 a.m.–12:00 p.m.</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[#d8d461]" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Venue</dt>
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
          <p className="section-label">The workshop</p>
          <h2 className="font-heading mt-4 max-w-sm text-4xl leading-tight tracking-tight sm:text-5xl">
            Understanding soil profiles together.
          </h2>
        </div>

        <div className="max-w-3xl lg:pt-9">
          <div className="space-y-6 text-lg leading-8 text-[#263e35]">
            <p>
              Describing soil profiles in the field is fundamental to soil protection, but it
              is time-consuming and demanding. The high heterogeneity of soils and the
              resulting large number of soil horizons also mean that the same soil profile is
              often described differently by different soil scientists.
            </p>
            <p>
              To simplify soil profile description and improve the quality of soil science
              datasets, the Federal Institute for Geosciences and Natural Resources (BGR) and
              the Berlin University of Applied Sciences and Technology (BHT) have jointly
              developed an AI-based solution for the automated segmentation and
              classification of soil horizons in profile images. The model is available
              through a web application that assists with annotation.
            </p>
            <p>
              At the workshop, we want to bring soil scientists and interested participants
              together, present the application, and discuss the future of digital soil
              protection. Participants can take part in a short interactive study in which
              soil profiles are annotated with and without AI assistance. The results will be
              presented at the end of the workshop.
            </p>
            <p>
              A poster session will accompany the workshop. We warmly invite all participants
              to present their own projects, research approaches, or practical examples on
              “Digital methods in soil protection and soil science”.
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
            Open the SoilNet demo
            <ArrowUpRight aria-hidden="true" />
          </a>

          <div className="mt-12 grid gap-8 border-t border-[#bdc6bd] pt-9 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#7b4a2f]">Try it out</p>
              <p className="mt-3 leading-7 text-muted-foreground">
                Explore the web application and take part in an interactive study annotating
                soil profiles with and without AI assistance.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#7b4a2f]">Exchange ideas</p>
              <p className="mt-3 leading-7 text-muted-foreground">
                Discuss with experts and interested participants how digital methods can
                support soil protection and practical soil science.
              </p>
            </div>
          </div>
          <p className="mt-10 inline-flex rounded-full border border-[#bdc6bd] px-4 py-2 text-sm text-[#395348]">
            The detailed programme is currently being finalised and will be published later.
          </p>
        </div>
      </section>

      <section id="call-for-posters" className="bg-[#d8d461] text-[#173126]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div>
            <p className="section-label !text-[#67562c]">Poster session</p>
            <h2 className="font-heading mt-4 text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl">
              Call for Posters
            </h2>
            <div className="mt-10 max-w-4xl space-y-5 text-lg leading-8 text-[#263c2f]">
              <p>
                As part of the workshop “AI in Soil Science – Automated Detection and
                Classification of Soil Horizons” on 9 December 2026 in Berlin, we want to
                bring together researchers and interested participants working on digital
                methods in soil science and soil protection.
              </p>
              <p>
                A poster session will accompany the workshop. We warmly invite you to present
                your own projects, research, methods, or practical examples and discuss them
                with other participants.
              </p>
              <p>
                Contributions from research and practice are welcome, including completed
                work, ongoing projects, and new ideas.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-y border-[#66703a]/35 py-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
            <span className="grid size-14 place-items-center rounded-full bg-[#17382c] text-[#d8d461]">
              <UsersRound className="size-6" aria-hidden="true" />
            </span>
            <div className="max-w-4xl">
              <h3 className="text-lg font-semibold">Exchange and networking</h3>
              <p className="mt-2 leading-7 text-[#3e4d33]">
                The poster session is designed above all to encourage professional exchange
                and networking. Contributions do not need to represent completed work.
                Ongoing projects, initial results, software tools, and practical questions are
                very welcome.
              </p>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-[#66703a]/35 sm:grid-cols-2 lg:grid-cols-3">
            {posterTopics.map(({ icon: Icon, title: topicTitle, text }) => (
              <article key={topicTitle} className="border-b border-r border-[#66703a]/35 p-6 sm:p-8">
                <Icon className="size-6 text-[#6e3f28]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-8 text-lg font-semibold">{topicTitle}</h3>
                <p className="mt-3 leading-6 text-[#46523b]">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-[#17382c] text-[#f6f1e5] lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold tracking-[0.15em] text-[#d8d461] uppercase">
                Interested in presenting a poster?
              </p>
              <h3 className="font-heading mt-4 text-3xl tracking-tight sm:text-4xl">
                Submit a title and abstract
              </h3>
              <p className="mt-5 max-w-2xl leading-7 text-[#dbe3dc]">
                Please email a title and abstract to{' '}
                <a
                  className="font-semibold text-white underline decoration-[#d8d461]/50 underline-offset-4 hover:decoration-[#d8d461]"
                  href="mailto:vipin.singh@bht-berlin.de"
                >
                  vipin.singh@bht-berlin.de
                </a>{' '}
                by 10 October 2026. Posters will be displayed throughout the workshop, and
                around 30 minutes are planned for discussion and exchange.
              </p>
              <a
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'mt-7 h-11 rounded-full bg-[#d8d461] px-5 font-semibold text-[#17382c] hover:bg-[#ecea91]',
                )}
                href="mailto:vipin.singh@bht-berlin.de?subject=Call%20for%20Posters%20%E2%80%93%20SoilNet%20Workshop"
              >
                <Mail aria-hidden="true" />
                Submit by email
              </a>
            </div>
            <div className="flex items-center border-t border-white/15 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-[#d8d461] px-3 py-1 text-xs font-bold tracking-wide text-[#17382c] uppercase">
                  Provisional deadline
                </span>
                <p className="font-heading mt-5 text-3xl text-white">10 October 2026</p>
                <p className="mt-5 text-sm leading-6 text-[#b9c8be]">
                  Early-stage contributions are explicitly welcome. Initial results, tools,
                  and open questions all make suitable poster contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="venue" className="bg-[#efe8da]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <p className="section-label">Venue & time</p>
          <h2 className="font-heading mt-4 text-4xl tracking-tight sm:text-5xl">
            In the heart of Berlin.
          </h2>

          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#c8c0b0] bg-[#f7f2e8] lg:grid-cols-[1.45fr_0.55fr]">
            <div className="min-h-[360px] bg-[#ded8cc] lg:min-h-[480px]">
              <iframe
                className="h-full min-h-[360px] w-full border-0 lg:min-h-[480px]"
                title="Map showing the Einstein Center Digital Future in Berlin"
                src="https://www.google.com/maps?q=Einstein+Center+Digital+Future,+Wilhelmstra%C3%9Fe+67,+10117+Berlin&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-between gap-12 p-7 sm:p-10">
              <div>
                <p className="text-sm font-semibold text-[#7b4a2f]">Venue</p>
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
                  Open in Google Maps
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <div className="border-t border-[#c8c0b0] pt-6">
                <p className="text-sm font-semibold text-[#7b4a2f]">Workshop</p>
                <p className="mt-3 text-lg font-semibold">9 December 2026</p>
                <p className="mt-1 text-muted-foreground">9:00 a.m.–12:00 p.m.</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Held in conjunction with the Bodentage
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
              A project by BHT and BGR. Research at the Cognitive Algorithms Lab (calgo-lab).
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              className="flex min-h-32 items-center justify-center rounded-xl bg-[#f8f6ef] p-4 transition-transform hover:-translate-y-0.5"
              href="https://www.bht-berlin.de/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Berlin University of Applied Sciences and Technology website"
            >
              <Image
                className="max-h-20 w-full object-contain"
                src="/soil-workshop/logos/bht.png"
                alt="Berlin University of Applied Sciences and Technology logo"
                width={247}
                height={73}
              />
            </a>
            <a
              className="flex min-h-32 items-center justify-center rounded-xl bg-[#f8f6ef] p-4 transition-transform hover:-translate-y-0.5"
              href="https://www.bgr.bund.de/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Federal Institute for Geosciences and Natural Resources website"
            >
              <Image
                className="max-h-20 w-full object-contain"
                src="/soil-workshop/logos/bgr.png"
                alt="Federal Institute for Geosciences and Natural Resources logo"
                width={257}
                height={76}
              />
            </a>
            <a
              className="flex min-h-32 items-center justify-center rounded-xl bg-[#1d1d1d] p-3 transition-transform hover:-translate-y-0.5"
              href="https://calgo-lab.de/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Cognitive Algorithms Lab website"
            >
              <Image
                className="max-h-20 w-full object-contain"
                src="/soil-workshop/logos/calgo-lab.png"
                alt="Cognitive Algorithms Lab logo"
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
